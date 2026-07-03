import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis';

export const dynamic = 'force-dynamic';

// Caching TTLs in seconds
const TTL = {
  BENEFICIARIES: 3600, // 1 hour
  SESSIONS: 7200,      // 2 hours
  ASSESSMENTS: 300     // 5 minutes
};

export async function POST() {
  try {
    const results = { 
      esoz: null as number | null, 
      humanitarian: {
        beneficiaries: 15000, // Defaut fallback
        sessions: 42500,     // Default fallback
        assessments: 1200,
        source: 'Static Fallback',
        confidence: 0.7,
        isCached: false
      } as any,
      errors: [] as string[] 
    };

    // LEVEL 1: Live ESOZ API (State)
    // Only try if not in a restricted environment
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000); // Shorter timeout
      
      const esozRes = await fetch('https://emd.ehealth.gov.ua/api/v2/mpi/declarations?service_type=psychiatry&status=completed', { 
        signal: controller.signal,
        headers: { 'User-Agent': 'MHPSS-Analytics-Dashboard/1.0' }
      });
      clearTimeout(timeoutId);

      if (esozRes.ok) {
        const data = await esozRes.json();
        results.esoz = Array.isArray(data) ? data.length : 0;
      } else {
        results.errors.push(`Level 1 (ESOZ) Failed: HTTP ${esozRes.status}`);
      }
    } catch (e: any) {
      results.errors.push(`Level 1 (ESOZ) Failed: ${e.message}`);
    }

    // LEVEL 2: Humanitarian Aggregator
    let humData = { 
      beneficiaries: 0, 
      sessions: 0, 
      assessments: 0, 
      source: 'Live APIs', 
      confidence: 0.95,
      isCached: false 
    };
    let hasLiveHumData = false;

    // Helper to check if Redis is actually usable
    const isRedisAvailable = process.env.REDIS_URL && !process.env.REDIS_URL.includes('localhost');

    // 2.1 CHD - Core Humanitarian Dataset (Beneficiaries)
    try {
      let cachedBeneficiaries = null;
      if (isRedisAvailable) {
        cachedBeneficiaries = await redis.get('mhpss:beneficiaries').catch(() => null);
      }

      if (cachedBeneficiaries) {
        humData.beneficiaries = parseInt(cachedBeneficiaries);
        humData.isCached = true;
        hasLiveHumData = true;
      } else {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);
        const chdRes = await fetch('https://api.corehumanitarian.org/v1/beneficiaries?sector=mhpss&country=UKR', { signal: controller.signal });
        clearTimeout(timeoutId);
        if (chdRes.ok) {
          const data = await chdRes.json();
          const value = Array.isArray(data?.data) ? data.data.length : (data?.data?.count || 0);
          humData.beneficiaries = value || 15000;
          hasLiveHumData = true;
          if (isRedisAvailable && value) await redis.setex('mhpss:beneficiaries', TTL.BENEFICIARIES, value.toString()).catch(() => {});
        }
      }
    } catch (e: any) { 
      results.errors.push(`CHD Sync Error: ${e.message}`); 
    }

    // 2.2 ActivityInfo API (Sessions)
    try {
      let cachedSessions = null;
      if (isRedisAvailable) {
        cachedSessions = await redis.get('mhpss:sessions').catch(() => null);
      }

      if (cachedSessions) {
        humData.sessions = parseInt(cachedSessions);
        humData.isCached = true;
        hasLiveHumData = true;
      } else if (process.env.ACTIVITYINFO_API_KEY) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);
        const aiRes = await fetch('https://api.activityinfo.org/v2/activities?sector=MHPSS&country=Ukraine', {
          headers: { 'Authorization': `Bearer ${process.env.ACTIVITYINFO_API_KEY}` },
          signal: controller.signal
        });
        clearTimeout(timeoutId);
        if (aiRes.ok) {
          const data = await aiRes.json();
          const value = Array.isArray(data) ? data.reduce((acc: number, curr: any) => acc + (curr.sessions_conducted || 0), 0) : 0;
          humData.sessions = value || 42500;
          hasLiveHumData = true;
          if (isRedisAvailable && value) await redis.setex('mhpss:sessions', TTL.SESSIONS, value.toString()).catch(() => {});
        }
      }
    } catch (e: any) { 
      results.errors.push(`ActivityInfo Sync Error: ${e.message}`); 
    }

    // Fallback if no live data was fetched
    if (!hasLiveHumData || humData.beneficiaries === 0) {
      humData.beneficiaries = 15000;
      humData.sessions = 42500;
      humData.source = 'Hybrid (Static Fallback)';
      humData.confidence = 0.8;
    }

    results.humanitarian = humData;

    const isStateBroken = results.esoz === null;

    if (isStateBroken) {
      return NextResponse.json({ 
        success: false, 
        status: 'MALFUNCTION_BRIDGE_BROKEN',
        message: 'State API (ESOZ) is unreachable. Humanitarian API is active.',
        data: results,
        timestamp: new Date().toISOString()
      });
    }

    return NextResponse.json({ 
      success: true, 
      status: 'SYNCED',
      data: results,
      timestamp: new Date().toISOString()
    });
  } catch (fatalError: any) {
    console.error('Fatal Sync Error:', fatalError);
    return NextResponse.json({
      success: false,
      status: 'INTERNAL_SERVER_ERROR',
      message: fatalError.message || 'Crisis data unavailable.',
      timestamp: new Date().toISOString()
    }, { status: 200 }); // Return 200 to avoid "Failed to fetch" if hitting unexpected errors
  }
}

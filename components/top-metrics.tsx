'use client'

import { useState } from 'react'
import { ServerCrash, Activity, Lock, RefreshCw, Database } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/app/providers'

export function TopMetrics() {
  const { t } = useLanguage()
  const [isTesting, setIsTesting] = useState(false)
  const [connectionState, setConnectionState] = useState<'idle' | 'testing' | 'failed' | 'total_failure'>('idle')
  const [humanitarianData, setHumanitarianData] = useState<any | null>(null)
  
  const handleTestBus = async () => {
    setIsTesting(true)
    setConnectionState('testing')
    try {
      const response = await fetch('/api/sync', { method: 'POST' })
      const data = await response.json()
      if (data.status === 'MALFUNCTION_BRIDGE_BROKEN') {
        setConnectionState('failed')
        setHumanitarianData(data.data.humanitarian)
      } else if (!response.ok || data.success === false) {
        setConnectionState('total_failure')
      } else {
        setConnectionState('idle')
      }
    } catch {
      setConnectionState('total_failure')
    }
    setIsTesting(false)
  }

  return (
    <div className="space-y-8 h-full">
      {/* Visual Bridge and Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        <div className="hidden md:block absolute top-[45%] left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-red-500/20 via-teal-500/50 to-gold/20 border-t border-dashed border-[var(--teal)] opacity-30 -z-0"></div>

        {/* Metric 1: Clinical (RED) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[var(--card)] border border-red-500/20 rounded-2xl p-6 shadow-[0_0_20px_rgba(224,85,69,0.05)]"
        >
          <div className="section-label mb-2 flex items-center justify-between">
            <span>{t('state_level')}</span>
            <span className="text-red-500 animate-pulse">● {t('malfunction')}</span>
          </div>
          <div className="font-display font-bold text-5xl text-red-500 glow-red leading-none mb-2">
            62.4M
          </div>
          <div className="text-[10px] uppercase font-bold text-[var(--foreground)] opacity-70 tracking-tighter">
            Hours of Clinical Need
          </div>
        </motion.div>

        {/* Metric 2: Coverage (TEAL) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[var(--card)] border border-[var(--teal)]/20 rounded-2xl p-6 shadow-[0_0_20px_rgba(46,196,182,0.08)] scale-105 z-10"
        >
          <div className="section-label mb-2 flex items-center justify-between text-[var(--teal)]">
            <span>{t('hum_level')}</span>
            <span className="text-[var(--teal)]">● Гум. Шина</span>
          </div>
          <div className="font-display font-bold text-5xl text-[var(--teal)] glow-teal leading-none mb-2">
            1%
          </div>
          <div className="text-[10px] uppercase font-bold text-[var(--foreground)] opacity-70 tracking-tighter">
            Покритої Потреби (Офіційно)
          </div>
        </motion.div>

        {/* Metric 3: Funds (GOLD) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[var(--card)] border border-[var(--gold)]/20 rounded-2xl p-6 shadow-[0_0_20px_rgba(200,164,92,0.05)]"
        >
          <div className="section-label mb-2 flex items-center justify-between text-[var(--gold)]">
            <span>{t('funds_level')}</span>
            <span className="text-[var(--gold)]">● {t('locked')}</span>
          </div>
          <div className="font-display font-bold text-5xl text-[var(--gold)] glow-gold leading-none mb-2">
            $1.87B
          </div>
          <div className="text-[10px] uppercase font-bold text-[var(--foreground)] opacity-70 tracking-tighter">
            Бюджету без підтверджених результатів
          </div>
        </motion.div>
      </div>

      {/* Ecosystem Sync Status Bar (Levels) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-12 bg-white rounded-xl overflow-hidden border border-[var(--border)] shadow-xl relative z-20">
        {/* Level 1: State */}
        <div className="bg-white p-5 border-r border-[var(--border)] flex flex-col justify-center min-h-[90px]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm shrink-0">N</div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-slate-800 uppercase tracking-tight leading-none mb-1">
                Рівень 1: Державний Контур (ЕСОЗ)
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-[9px] font-black text-red-500 uppercase tracking-wider">Перешкода Синхронізації</span>
              </div>
            </div>
          </div>
        </div>

        {/* Level 2: Humanitarian */}
        <div className="bg-white p-5 border-r border-[var(--border)] flex flex-col justify-center min-h-[90px]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[var(--teal)] text-white flex items-center justify-center font-bold text-sm shrink-0">H</div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-slate-800 uppercase tracking-tight leading-none mb-1">
                Рівень 2: Гуманітарна Шина
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[var(--teal)]"></span>
                <span className="text-[9px] font-black text-[var(--teal)] uppercase tracking-wider">Локально Активно</span>
              </div>
            </div>
          </div>
        </div>

        {/* Level 3: Financial */}
        <div className="bg-white p-5 flex flex-col justify-center min-h-[90px]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[var(--gold)] text-white flex items-center justify-center font-bold text-sm shrink-0">F</div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-slate-800 uppercase tracking-tight leading-none mb-1">
                Рівень 3: Фінансовий Контур (WB)
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-[9px] font-black text-red-500 uppercase tracking-wider whitespace-nowrap">Блоковано Відсутністю Шини</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-[var(--card)] px-6 py-4 rounded-xl border border-[var(--border)]">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${isTesting ? 'bg-teal-500/20 text-teal-500' : 'bg-[var(--background)]'}`}>
            <RefreshCw className={`w-5 h-5 ${isTesting ? 'animate-spin' : ''}`} />
          </div>
          <div>
            <div className="text-xs font-bold text-[var(--foreground)] uppercase tracking-widest leading-none mb-1">Interoperability Bus</div>
            <div className="text-[10px] text-[var(--text-sec)]">Click to simulate bilateral data exchange between State & NGO</div>
          </div>
        </div>
        <button 
          onClick={handleTestBus}
          disabled={isTesting}
          className="w-full md:w-auto bg-[var(--teal)] text-white px-8 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all disabled:opacity-50"
        >
          {isTesting ? t('testing') : t('test_bus')}
        </button>
      </div>

      {/* Malfunction Alert */}
      {connectionState === 'failed' && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-red-500/5 border-2 border-red-500/20 rounded-2xl p-6"
        >
          <div className="flex items-start gap-4">
            <ServerCrash className="w-8 h-8 text-red-500 shrink-0" />
            <div className="space-y-2">
              <h3 className="text-sm font-display font-bold text-red-500 uppercase tracking-widest">Digital Bus Error: 401 Unauthorized (Integrity Bridge Broken)</h3>
              <p className="text-xs text-[var(--foreground)] opacity-80 leading-relaxed max-w-3xl">
                Державний контур (ЕСОЗ) відхилив двосторонню синхронізацію. Гуманітарні дані HEAL та CHD залишаються ізольованими. **62.4 млн клінічних годин** не можуть бути верифіковані для виплати коштів Світового Банку. Це створює &quot;мертву зону&quot; у звітності, що блокує фінансові транзакції.
              </p>
              <div className="bg-[var(--background)] px-4 py-3 rounded-lg border border-[var(--border)] mt-4">
                <div className="text-[8.5px] font-bold text-[var(--gold)] uppercase mb-2">Isolated Humanitarian Context (CommCare/ActivityInfo)</div>
                <div className="flex gap-8">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-[var(--text-sec)] uppercase">Beneficiaries</span>
                    <span className="font-mono font-bold text-[var(--teal)]">{humanitarianData?.beneficiaries?.toLocaleString() || '15,000'}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-[var(--text-sec)] uppercase">Sessions</span>
                    <span className="font-mono font-bold text-[var(--teal)]">{humanitarianData?.sessions?.toLocaleString() || '42,500'}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-[var(--text-sec)] uppercase">Confidence</span>
                    <span className="font-mono font-bold text-[var(--gold)]">0.95</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

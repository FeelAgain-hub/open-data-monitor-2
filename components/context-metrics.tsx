'use client'

import { useLanguage } from '@/app/providers'

export function ContextMetrics() {
  const { t } = useLanguage()

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {[
        { val: '125%', color: 'teal', label: 'HEAL Ukraine', sub: '624,464 Services', desc: 'Project P180245 • 1.25x Plan', source: 'WB HEAL Report 2024' },
        { val: '214%', color: 'teal', label: 'HEAL Rehabilitation', sub: '670,383 Services', desc: '2.14x performance multiplier', source: 'MoH / WB Data' },
        { val: '297%', color: 'gold', label: 'HEAL Facility Checks', sub: '10.38M Checks', desc: 'System-wide infrastructure audit', source: 'Digital Health Unit' },
        { val: '157%', color: 'teal', label: 'HEAL Mobile Brigades', sub: '118 Units Active', desc: 'Plan: 75 • Reached 157% target', source: 'Humanitarian Cluster' }
      ].map((item, idx) => (
        <div key={idx} className="card-canonical p-5 bg-white/[0.02] border-l-4 border-l-[var(--border)] group hover:border-l-[var(--gold)] transition-all">
          <div className="text-[10px] text-[var(--text-sec)] uppercase font-bold tracking-widest mb-1 opacity-70">{item.label}</div>
          <div className={`text-2xl font-display font-bold mb-2 text-[var(--${item.color})] glow-${item.color}`}>{item.val}</div>
          <div className="text-[10px] text-[var(--foreground)] opacity-90 leading-tight mb-2 font-medium">{item.sub}</div>
          <div className="text-[9px] text-[var(--text-sec)] opacity-60 leading-relaxed mb-4 italic">{item.desc}</div>
          <div className="text-[9px] font-mono text-[var(--text-sec)] opacity-40 uppercase font-black">ⓘ {item.source}</div>
        </div>
      ))}
    </div>
  )
}


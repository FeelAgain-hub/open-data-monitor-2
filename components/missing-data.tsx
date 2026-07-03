'use client'

import { Search } from 'lucide-react'
import { useLanguage } from '@/app/providers'

export function MissingData() {
  const { t } = useLanguage()

  const items = [
    {
      title: t('real_throughput'),
      desc: t('real_throughput_desc')
    },
    {
      title: t('mhgap_conversion_label'),
      desc: t('mhgap_conversion_desc')
    },
    {
      title: t('shadow_volume'),
      desc: t('shadow_volume_desc')
    }
  ]

  return (
    <section className="space-y-0.5">
      <div className="flex items-center gap-4 bg-[var(--card)]/50 p-6 rounded-t-xl border-x border-t border-[var(--border)]">
        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
          <Search className="w-5 h-5 text-red-500" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-display font-black text-[var(--foreground)] tracking-[.25em] uppercase leading-none">
            {t('missing_middle')}
          </h2>
          <span className="text-[10px] font-black text-red-500 uppercase tracking-widest mt-1">
            {t('missing_middle_desc')}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[var(--border)] rounded-b-xl overflow-hidden bg-[var(--card)]/20 backdrop-blur-sm shadow-2xl">
        {items.map((item, i) => (
          <div key={i} className={`p-10 min-h-[180px] ${i < 2 ? 'border-r border-[var(--border)]' : ''}`}>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
              <h3 className="text-[10px] font-black text-[var(--foreground)] tracking-widest uppercase">
                {item.title}
              </h3>
            </div>
            <p className="text-xs text-[#94a3b8] leading-relaxed font-light">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}


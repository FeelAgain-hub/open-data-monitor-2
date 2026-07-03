'use client'

import { AlertCircle, Target, Zap, ShieldAlert, FileSearch } from 'lucide-react'
import { useLanguage } from '@/app/providers'
import { motion } from 'framer-motion'

export function KeyFindings() {
  const { t } = useLanguage()

  const findings = [
    {
      icon: Zap,
      color: 'gold',
      title: t('infrastructure_imperative'),
      text: t('infrastructure_imperative_text')
    },
    {
      icon: Target,
      color: 'teal',
      title: t('dli_alignment'),
      text: t('dli_alignment_text')
    },
    {
      icon: ShieldAlert,
      color: 'red',
      title: t('stigma_barrier'),
      text: t('stigma_barrier_text')
    },
    {
      icon: FileSearch,
      color: 'gold',
      title: t('complementarity_pillar'),
      text: t('complementarity_pillar_text')
    }
  ]

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <span className="w-8 h-[1px] bg-[var(--gold)]"></span>
        <span className="section-label">{t('key_findings_title')}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {findings.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="card-canonical p-6 bg-white/[0.01] border-white/5 hover:border-[var(--gold)]/20 transition-all group"
          >
            <div className="flex items-start gap-4">
               <div className={`p-2 bg-[var(--${f.color})]/10 rounded-lg group-hover:scale-110 transition-transform`}>
                <f.icon className={`w-5 h-5 text-[var(--${f.color})] glow-${f.color}`} />
              </div>
              <div>
                <h3 className="text-xs font-display font-bold text-[var(--foreground)] uppercase tracking-widest mb-2 leading-none">{f.title}</h3>
                <p className="text-[11px] text-[var(--text-sec)] leading-relaxed font-light">
                  {f.text}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


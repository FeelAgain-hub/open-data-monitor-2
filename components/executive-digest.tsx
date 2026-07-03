'use client'

import { Zap, Users, ShieldAlert, FileCheck, DollarSign } from 'lucide-react'
import { useLanguage } from '@/app/providers'
import { motion } from 'framer-motion'

export function ExecutiveDigest() {
  const { t } = useLanguage()

  const findings = [
    {
      icon: Zap,
      title: t('hours_need_title'),
      text: t('hours_need_text'),
      color: 'text-red-500'
    },
    {
      icon: DollarSign,
      title: t('shadow_market_title'),
      text: t('shadow_market_text'),
      color: 'text-[var(--gold)]'
    },
    {
      icon: Users,
      title: t('heal_overperformance_title'),
      text: t('heal_overperformance_text'),
      color: 'text-[var(--teal)]'
    },
    {
      icon: ShieldAlert,
      title: t('budget_inversion_title'),
      text: t('budget_inversion_text'),
      color: 'text-red-400'
    },
    {
      icon: FileCheck,
      title: t('mhgap_conversion_title'),
      text: t('mhgap_conversion_text'),
      color: 'text-[var(--gold)]',
      fullWidth: true
    }
  ]

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <span className="w-8 h-[1px] bg-[var(--gold)]"></span>
        <span className="section-label">{t('executive_digest')}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {findings.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`card-canonical p-6 bg-gradient-to-br from-[var(--card)] to-[var(--background)] ${item.fullWidth ? 'md:col-span-2' : ''}`}
          >
            <div className={`flex items-center gap-3 font-display font-bold text-xs uppercase tracking-widest mb-4 ${item.color}`}>
              <item.icon className="w-4 h-4" />
              {item.title}
            </div>
            <p className="text-xs text-[var(--foreground)] opacity-70 leading-relaxed font-light">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


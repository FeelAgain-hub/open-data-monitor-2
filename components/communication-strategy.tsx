'use client'

import { ShieldCheck, MessageSquare, Globe, Fingerprint } from 'lucide-react'
import { useLanguage } from '@/app/providers'
import { motion } from 'framer-motion'

export function CommunicationStrategy() {
  const { t } = useLanguage()

  const pillars = [
    {
      icon: MessageSquare,
      title: t('communication_summary_title'),
      text: t('communication_summary_text'),
      color: 'gold'
    },
    {
      icon: ShieldCheck,
      title: t('governance_sovereignty'),
      text: t('governance_sovereignty_text'),
      color: 'teal'
    },
    {
      icon: Fingerprint,
      title: t('verification_chain'),
      text: t('verification_chain_text'),
      color: 'teal'
    }
  ]

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <span className="w-8 h-[1px] bg-[var(--gold)]"></span>
        <span className="section-label">{t('communication_strategy')}</span>
      </div>

      <div className="card-canonical p-8 bg-gradient-to-br from-[var(--navy)]/20 to-transparent border-[var(--gold)]/20">
        <div className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
          <div className="flex-1 space-y-4">
            <h3 className="text-[var(--gold)] font-display font-black text-2xl tracking-tighter uppercase leading-none">
              {t('one_sentence_pitch')}
            </h3>
            <p className="text-xs text-[var(--text-sec)] leading-relaxed max-w-2xl font-light">
              {t('visual_identity_desc')}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 w-full md:w-80">
            {pillars.map((p, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-white/[0.03] rounded-lg border border-white/5">
                <p.icon className={`w-4 h-4 text-[var(--${p.color})] shrink-0`} />
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase text-[var(--foreground)] tracking-widest">{p.title}</span>
                  <span className="text-[8px] text-[var(--text-sec)] leading-tight opacity-70">{p.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

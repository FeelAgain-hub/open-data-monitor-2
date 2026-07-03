'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Info, Zap } from 'lucide-react'
import { useLanguage } from '@/app/providers'
import { motion } from 'framer-motion'

const pieData = [
  { name: 'ЄСВ (мінімум)', value: 75, color: '#c8a45c' },
  { name: 'Бухгалтерія', value: 100, color: '#1a8a7e' },
  { name: 'Податок ФОП 5%', value: 32, color: '#e05545' },
  { name: 'Opportunity Cost', value: 772, color: 'rgba(255,255,255,0.05)' },
]

export function FormalizationCost() {
  const { t } = useLanguage()

  return (
    <section className="card-canonical p-8 bg-gradient-to-br from-[var(--card)] to-[var(--background)]">
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-[1px] bg-[var(--gold)]"></span>
          <span className="section-label">{t('formalization_title')}</span>
        </div>
        <p className="text-[10px] text-[var(--text-sec)] uppercase font-bold tracking-widest pl-10 opacity-70">Чому тіньовий сектор не формалізується — економічна декомпозиція витрат</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="h-[250px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={85}
                paddingAngle={4}
                dataKey="value"
                stroke="none"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', fontSize: '10px', borderRadius: '8px' }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="text-[10px] text-[var(--text-sec)] uppercase font-black tracking-widest">Tax Loss</div>
              <div className="text-2xl font-display font-bold text-[var(--red)] glow-red">65%</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="card-canonical p-6 border-white/5 bg-white/[0.02]">
              <div className="text-[10px] text-[var(--text-sec)] uppercase font-bold tracking-wider mb-2">Тіньовий чистий дохід</div>
              <div className="text-3xl font-display font-bold text-[var(--teal)] glow-teal">€1,500<span className="text-xs opacity-50 ml-1">/mo</span></div>
            </div>
            <div className="card-canonical p-6 border-white/5 bg-white/[0.02]">
              <div className="text-[10px] text-[var(--text-sec)] uppercase font-bold tracking-wider mb-2">Формальний чистий дохід</div>
              <div className="text-3xl font-display font-bold text-[var(--red)] glow-red">€521<span className="text-xs opacity-50 ml-1">/mo</span></div>
            </div>
          </div>

          <div className="p-4 bg-[var(--teal)]/5 border border-[var(--teal)]/20 rounded-xl flex items-start gap-4">
            <Info className="w-5 h-5 text-[var(--teal)] shrink-0" />
            <p className="text-[10px] text-[var(--foreground)] opacity-90 leading-relaxed font-light">
              <span className="text-[var(--teal)] font-bold uppercase">Формула:</span> Прямі витрати (€207/міс) + Втрачена вигода (Opportunity cost: €958/міс) = €979-1,165/міс загалом. Це економічний бар&apos;єр для приватного сектору.
            </p>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 p-6 bg-[var(--gold)]/5 border border-[var(--gold)]/20 rounded-2xl flex items-start gap-5"
      >
        <Zap className="w-8 h-8 text-[var(--gold)] shrink-0 glow-gold" />
        <div>
          <h3 className="text-xs font-display font-bold text-[var(--gold)] uppercase tracking-[0.2em] mb-2 leading-none">Що це означає</h3>
          <p className="text-sm text-[var(--foreground)] opacity-80 leading-relaxed font-light">
            Масштаб кризи перевищує будь-яку здатність сектору реагувати тренінгами. Потрібна інфраструктура — рейки, а не потяги.
          </p>
        </div>
      </motion.div>
    </section>
  )
}


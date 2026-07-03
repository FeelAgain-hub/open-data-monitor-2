'use client'

import { LayoutGrid, AlertTriangle } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { useLanguage } from '@/app/providers'
import { motion } from 'framer-motion'

const disproportionsData = [
  { name: 'Приватний / Гуманітарний дохід', value: 110, color: '#2ec4b6' },
  { name: 'Дефіцит mhGAP навчання', value: 42, color: '#c8a45c' },
  { name: 'Адмін. gap (ВООЗ рекомендація)', value: 3.1, color: '#2ec4b6' },
  { name: 'Бюджет стаціонар / амбулаторія', value: 8.1, color: '#2ec4b6' },
]

const backlogData = [
  { name: '4,000 (офіційні)', stable: 12.4, theoretical: 10.4 },
  { name: '8,000 (в тіні)', stable: 6.2, theoretical: 5.2 },
  { name: '12,000 (разом)', stable: 4.1, theoretical: 3.4 },
]

export function PerfectStorm() {
  const { t } = useLanguage()

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <span className="w-8 h-[1px] bg-[var(--gold)]"></span>
        <span className="section-label">{t('perfect_storm')}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { key: 'logic_chain_scale', value: t('at_risk_label'), color: 'red', label: 'beneficiaries' },
          { key: 'logic_chain_impossibility', value: t('capacity_deficit_label'), color: 'gold', label: 'capacity_deficit_label' },
          { key: 'logic_chain_gap', value: t('clinical_hours_label'), color: 'teal', label: 'infrastructure_title' },
          { key: 'logic_chain_solution', value: t('pot_value'), color: 'gold', label: 'market_value_label' }
        ].map((item, i) => (
          <div key={i} className="card-canonical p-4 bg-gradient-to-br from-[var(--card)] to-[var(--background)]">
            <div className="text-[10px] text-[var(--text-sec)] uppercase font-bold tracking-wider mb-2">{t(item.key)}</div>
            <div className={`text-2xl font-display font-black text-[var(--${item.color})] glow-${item.color} mb-1 uppercase tracking-tighter`}>{item.value === 'CAPACITY BACKLOG' ? '12.4 РОКИ' : item.value}</div>
            <div className="text-[9px] text-[var(--text-sec)] uppercase font-bold opacity-60">{t(item.label)}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card-canonical p-6 border-white/5">
          <h3 className="section-label mb-1 opacity-70">{t('structural_disproportions')}</h3>
          <p className="text-[10px] text-[var(--text-sec)] mb-6">Множники — наскільки система далека від норми</p>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={disproportionsData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-sec)', fontSize: 9, fontWeight: 700 }} width={150} />
                <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', fontSize: '10px', borderRadius: '8px' }} />
                <Bar dataKey="value" barSize={12} radius={[0, 4, 4, 0]}>
                  {disproportionsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 p-4 bg-[var(--red)]/5 border border-[var(--red)]/20 rounded-xl flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[var(--red)] shrink-0" />
            <p className="text-[10px] text-[var(--foreground)] opacity-80 leading-relaxed font-light">
              <span className="text-[var(--red)] font-bold">Висновок:</span> приватний ринок перевищує гуманітарний у 110 разів — тіньовий сектор реально фінансує систему. Бюджетна інверсія у 8.1 раза — це системна криза.
            </p>
          </div>
        </div>

        <div className="card-canonical p-6 border-white/5">
          <h3 className="section-label mb-1 opacity-70">{t('backlog_years')}</h3>
          <p className="text-[10px] text-[var(--text-sec)] mb-6">62.4 млн годин / (кількість фахівців × години на рік)</p>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={backlogData} margin={{ top: 20, right: 10, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-sec)', fontSize: 9, fontWeight: 700 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--text-sec)', fontSize: 9 }} tickFormatter={(val) => `${val}Y`} />
                <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', fontSize: '10px', borderRadius: '8px' }} />
                <Bar dataKey="stable" name="Стійкий (1,500 год/рік)" fill="var(--gold)" barSize={20} radius={[4, 4, 0, 0]} />
                <Bar dataKey="theoretical" name="Теоретичний (2,000 год/рік)" fill="var(--teal)" barSize={20} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 p-4 bg-[var(--red)]/5 border border-[var(--red)]/20 rounded-xl flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[var(--red)] shrink-0" />
            <p className="text-[10px] text-[var(--foreground)] opacity-80 leading-relaxed font-light">
              <span className="text-[var(--red)] font-bold">Навіть при 12,000 фахівців</span> черга складе 3.4-4.1 роки. При 4,000 офіційно зареєстрованих — беклог сягає <span className="text-red-500 font-bold">10.4-12.4 років</span>. Тренінги не працюють без інфраструктури (1 терапевт × 25 пацієнтів/тиждень = 1% потреби).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


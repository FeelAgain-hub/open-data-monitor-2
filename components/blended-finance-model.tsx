'use client'

import React from 'react';
import { AlertTriangle, CheckCircle2, TrendingDown } from "lucide-react";
import { useLanguage } from '@/app/providers'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export function BlendedFinanceModel() {
  const { t } = useLanguage()

  const formalizationData = [
    {
      name: 'Costs (€/mo)',
      [t('direct_taxes_label')]: 207,
      [t('opportunity_cost_label')]: 772,
    }
  ];

  return (
    <div className="w-full card-canonical overflow-hidden bg-gradient-to-br from-[var(--card)] to-[var(--background)]">
      <div className="p-8 border-b border-[var(--border)]">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-[1px] bg-[var(--gold)]"></span>
          <span className="section-label">{t('macro_gap_title')}</span>
        </div>
        <p className="text-[10px] text-[var(--text-sec)] uppercase font-bold tracking-widest pl-10 opacity-70">{t('who_standards')}</p>
      </div>
      <div className="p-8">
        <div className="rounded-2xl border border-[var(--border)] mb-8 overflow-hidden bg-white/[0.01]">
          <table className="w-full text-xs text-left">
            <thead className="text-[10px] text-[var(--text-sec)] uppercase bg-[var(--border)]/20 border-b border-[var(--border)]">
              <tr>
                <th className="px-6 py-4 font-bold tracking-tighter">{t('metric_label')}</th>
                <th className="px-6 py-4 font-bold tracking-tighter">{t('value_label')}</th>
                <th className="px-6 py-4 font-bold tracking-tighter">{t('unit_label')}</th>
                <th className="px-6 py-4 font-bold tracking-tighter">{t('path_label')}</th>
                <th className="px-6 py-4 font-bold tracking-tighter">{t('source_label')}</th>
              </tr>
            </thead>
            <tbody className="font-light">
              <tr className="border-b border-[var(--border)]/30 hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4 font-bold text-[var(--foreground)]">{t('total_beneficiaries_label')}</td>
                <td className="px-6 py-4 font-display font-medium text-[var(--teal)]">3,900,000</td>
                <td className="px-6 py-4 opacity-50 uppercase text-[9px] font-bold">people</td>
                <td className="px-6 py-4 opacity-70 italic text-[10px]">Canonical Data</td>
                <td className="px-6 py-4 text-green-500 font-black text-[9px] flex items-center gap-2 uppercase"><CheckCircle2 className="w-3 h-3"/> VERIFIED</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30 hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4 font-bold text-[var(--foreground)]">{t('sessions_per_ben_label')}</td>
                <td className="px-6 py-4 font-display font-medium text-[var(--gold)]">16</td>
                <td className="px-6 py-4 opacity-50 uppercase text-[9px] font-bold">sessions / person</td>
                <td className="px-6 py-4 opacity-70 italic text-[10px]">WHO Range: 12-20</td>
                <td className="px-6 py-4 text-green-500 font-black text-[9px] flex items-center gap-2 uppercase"><CheckCircle2 className="w-3 h-3"/> (WHO)</td>
              </tr>
              <tr className="border-b border-[var(--border)]/60 bg-[var(--gold)]/5">
                <td className="px-6 py-4 font-black text-[var(--foreground)] uppercase">{t('total_session_demand_label')}</td>
                <td className="px-6 py-4 font-display font-black text-2xl text-[var(--gold)] glow-gold">62,400,000</td>
                <td className="px-6 py-4 opacity-50 uppercase text-[9px] font-black">sessions / year</td>
                <td className="px-6 py-4 font-mono text-[9px] opacity-70 tracking-tighter">3.9M * 16</td>
                <td className="px-6 py-4 font-black text-[10px] text-[var(--foreground)] uppercase">{t('macro_need')}</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30 hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4 font-bold text-[var(--foreground)]">{t('current_capacity_label')}</td>
                <td className="px-6 py-4 font-display font-medium text-[var(--teal)]">180,000</td>
                <td className="px-6 py-4 opacity-50 uppercase text-[9px] font-bold">sessions / year</td>
                <td className="px-6 py-4 opacity-70 italic text-[10px]">Official Registry</td>
                <td className="px-6 py-4 text-green-500 font-black text-[9px] flex items-center gap-2 uppercase"><CheckCircle2 className="w-3 h-3"/> (NSZU)</td>
              </tr>
              <tr className="border-b border-[var(--red)]/40 bg-[var(--red)]/5">
                <td className="px-6 py-4 font-black text-[var(--red)] uppercase">{t('total_session_gap_label')}</td>
                <td className="px-6 py-4 font-display font-black text-2xl text-[var(--red)] glow-red">62,220,000</td>
                <td className="px-6 py-4 opacity-50 uppercase text-[9px] font-black">sessions / year</td>
                <td className="px-6 py-4 font-mono text-[9px] opacity-70 tracking-tighter">=B3 - B4</td>
                <td className="px-6 py-4 font-black text-[10px] text-[var(--red)] uppercase italic">{t('critical_deficit')}</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30 hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4 font-bold text-[var(--foreground)]">{t('blended_finance_rate_label')}</td>
                <td className="px-6 py-4 font-display font-medium text-[var(--gold)]">1,914.5</td>
                <td className="px-6 py-4 opacity-50 uppercase text-[9px] font-bold">UAH / session</td>
                <td className="px-6 py-4 opacity-70 italic text-[10px]">2000 - (285*0.3)</td>
                <td className="px-6 py-4 text-green-500 font-black text-[9px] flex items-center gap-2 uppercase"><CheckCircle2 className="w-3 h-3"/> VERIFIED</td>
              </tr>
              <tr className="bg-[var(--teal)]/10 border-b border-[var(--teal)]/30">
                <td className="px-6 py-4 font-black text-[var(--teal)] uppercase">{t('blended_finance_need_label')}</td>
                <td className="px-6 py-4 font-display font-black text-3xl text-[var(--teal)] glow-teal tracking-tighter">119,120,190,000</td>
                <td className="px-6 py-4 opacity-50 uppercase text-[10px] font-black tracking-tighter">UAH / year</td>
                <td className="px-6 py-4 font-mono text-[9px] opacity-70 tracking-tighter italic">GAP * RATE</td>
                <td className="px-6 py-4 font-black text-[12px] text-[var(--teal)] uppercase tracking-widest">~119 МЛРД ГРН</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-[var(--gold)]/5 p-8 rounded-2xl border border-[var(--gold)]/20">
            <h4 className="font-display font-bold mb-4 flex items-center gap-2 text-[var(--gold)] uppercase tracking-widest text-xs">
              <AlertTriangle className="w-5 h-5 glow-gold" />
              {t('analytical_justification')}
            </h4>
            <div className="space-y-4 text-sm text-[var(--foreground)] opacity-80 leading-relaxed font-light">
              <p>
                Виходячи зі стандартів WHO (в середньому 16 сесій на пацієнта), покриття потреби <strong className="text-[var(--foreground)] font-bold">3.9 млн бенефіціарів</strong> вимагає <strong className="text-[var(--foreground)] font-bold">62.4 млн сесій</strong> щорічно. Поточна реальна потужність (180 тис. сесій) здатна задовольнити лише <strong className="text-[var(--red)] font-bold">0.28%</strong> цього попиту.
              </p>
              <p>
                Для розблокування ринку та залучення фахівців необхідна модель Blended Finance із загальним обсягом ресурсів близько <strong className="text-[var(--teal)] font-bold">119 млрд грн</strong>. Без легалізації співфінансування подолання цього розриву математично неможливе.
              </p>
            </div>
          </div>

          <div className="bg-[var(--card)] p-8 rounded-2xl border border-[var(--border)] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <TrendingDown className="w-32 h-32 text-[var(--red)]" />
            </div>
            <h4 className="font-display font-bold mb-6 flex items-center gap-2 text-[var(--foreground)] uppercase tracking-widest text-xs">
              <TrendingDown className="w-4 h-4 text-[var(--red)]" />
              {t('formalization_breakdown_title')}
            </h4>
            
            <div className="h-[180px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={formalizationData} layout="vertical" margin={{ top: 0, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="rgba(255,255,255,0.1)" />
                  <XAxis type="number" stroke="rgba(255,255,255,0.5)" tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 10}} />
                  <YAxis dataKey="name" type="category" hide />
                  <Tooltip 
                    cursor={{fill: 'rgba(255,255,255,0.05)'}}
                    contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', fontSize: '12px', borderRadius: '8px' }} 
                  />
                  <Legend wrapperStyle={{fontSize: '10px', paddingTop: '10px'}} />
                  <Bar dataKey={t('direct_taxes_label')} stackId="a" fill="var(--teal)" radius={[4, 0, 0, 4]} />
                  <Bar dataKey={t('opportunity_cost_label')} stackId="a" fill="var(--red)" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 text-xs text-[var(--text-sec)] leading-relaxed font-light border-t border-[var(--border)] pt-4">
              <p>{t('formalization_breakdown_desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


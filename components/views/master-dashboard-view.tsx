'use client'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

interface MasterDashboardViewProps {
  onNavigate: (view: 'l1-strategic' | 'l2-operational' | 'l3-tactical') => void;
}

export function MasterDashboardView({ onNavigate }: MasterDashboardViewProps) {
  return (
    <div className="w-full space-y-12 pb-24">
      <div className="text-center mb-16">
        <h1 className="font-display font-black text-4xl md:text-5xl text-[var(--gold)] tracking-tighter glow-gold mb-4 uppercase">
          Екзек&apos;ютив <span className="text-white font-light">Дашборд</span>
        </h1>
        <p className="font-mono text-white tracking-widest uppercase mb-4 text-sm md:text-base font-bold">
          Актуальний &quot;Ландшафт&quot; сектору MHPSS
        </p>
        <p className="text-sm font-medium max-w-3xl mx-auto border-t border-[var(--border)] pt-4 mt-4 text-white/80 leading-relaxed">
          Візуалізація стану сектору через три виміри: системний дефіцит даних, структурні невідповідності операційного рівня та загальний масштаб ринкового виклику. Усі наведені дані базуються на відкритих звітах (WHO, ВООЗ, CMHC, дослідження ринку).
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 relative items-stretch">
        
        {/* Connector lines for desktop */}
        <div className="hidden lg:block absolute top-[40%] left-[30%] right-[30%] h-0.5 bg-gradient-to-r from-[var(--red)] via-[var(--teal)] to-[var(--gold)] z-0 opacity-50"></div>

        {/* 1. Analytics (Root Cause) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="flex-1 card-canonical p-8 relative z-10 bg-[var(--background)] border-t-4 border-t-[var(--red)] flex flex-col"
        >
          <div className="mb-8">
            <div className="flex justify-between items-start mb-2 mt-1">
              <h2 className="text-[10px] uppercase tracking-widest font-black text-[var(--red)] flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[var(--red)]/20 flex items-center justify-center text-[var(--red)]">1</span>
                Системний розрив
              </h2>
            </div>
            <h3 className="font-display font-bold text-xl text-white mt-2 uppercase">Дефіцит Інтегрованих Даних</h3>
            <p className="text-xs text-[var(--text-sec)] mt-2">Джерела фінансуються, дії відбуваються, але системні метрики впливу залишаються ізольованими.</p>
          </div>

          <div className="flex-1 space-y-6">
            <div className="bg-white/5 p-4 rounded-sm border border-[var(--border)] group hover:bg-white/10 transition-colors">
              <div className="text-3xl font-black text-[var(--red)] glow-red mb-1">117,652</div>
              <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Сертифікатів mhGAP</p>
              <p className="text-xs text-[var(--text-sec)]">Лише <span className="text-white font-bold">42</span> фахівці задокументовані як практикуючі під супервізією (PMC 2020).</p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-sm border border-[var(--border)] group hover:bg-white/10 transition-colors">
              <div className="text-3xl font-black text-white mb-1"><span className="text-[var(--red)]">$</span>0</div>
              <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Відстежено до результату</p>
              <p className="text-xs text-[var(--text-sec)]">Відсутність уніфікованого стандарту верифікації та наскрізного моніторингу сесій.</p>
            </div>

            <div className="bg-white/5 p-4 rounded-sm border border-[var(--border)] group hover:bg-white/10 transition-colors">
              <div className="text-3xl font-black text-[var(--red)] mb-1">2.5%</div>
              <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Рівень інтеграції</p>
              <p className="text-xs text-[var(--text-sec)]">$117M+ (MOH + OCHA + USAID) функціонують як паралельні інфраструктури.</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--border)]">
             <button 
                onClick={() => onNavigate('l1-strategic')}
                className="w-full flex justify-between items-center text-xs uppercase tracking-widest font-bold text-[var(--red)] hover:text-white transition-colors"
             >
               <span>Дослідити: Ціна Бездіяльності (L1)</span>
               <ArrowRight className="w-4 h-4" />
             </button>
          </div>
        </motion.div>

        {/* 2. Operations (Effect) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="flex-1 card-canonical p-8 relative z-10 bg-[var(--background)] border-t-4 border-t-[var(--teal)] flex flex-col"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 lg:-left-4 lg:hidden w-8 h-8 rounded-full bg-[var(--card)] border border-[var(--border)] flex items-center justify-center z-20">
            <ArrowRight className="w-4 h-4 text-[var(--text-sec)] rotate-90 lg:rotate-0" />
          </div>

          <div className="mb-8">
            <h2 className="text-[10px] uppercase tracking-widest font-black text-[var(--teal)] mb-2 mt-1 flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[var(--teal)]/20 flex items-center justify-center text-[var(--teal)]">2</span>
              Операційний ландшафт
            </h2>
            <h3 className="font-display font-bold text-xl text-white mt-2 uppercase">Структурні Невідповідності</h3>
            <p className="text-xs text-[var(--text-sec)] mt-2">Фінансування концентрується на інфраструктурі, тоді як попит вимагає сервісного покриття.</p>
          </div>

          <div className="flex-1 space-y-6">
            <div className="bg-white/5 p-4 rounded-sm border border-[var(--border)] group hover:bg-white/10 transition-colors">
              <div className="text-3xl font-black text-[var(--teal)] glow-teal mb-1">&gt;50%</div>
              <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Бюджету на стаціонар</p>
              <p className="text-xs text-[var(--text-sec)]">При цьому <span className="text-white font-bold">71%</span> пацієнтів потребують амбулаторного та громадського лікування.</p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-sm border border-[var(--border)] group hover:bg-white/10 transition-colors">
              <div className="text-3xl font-black text-white mb-1">5K-15K</div>
              <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Фахівців у тіні</p>
              <p className="text-xs text-[var(--text-sec)]">Кваліфікований потенціал залишається поза межами державної звітності та інтеграції.</p>
            </div>

            <div className="bg-white/5 p-4 rounded-sm border border-[var(--border)] group hover:bg-white/10 transition-colors">
              <div className="text-3xl font-black text-[var(--teal)] mb-1">Drop-off</div>
              <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Клієнтський досвід</p>
              <p className="text-xs text-[var(--text-sec)]">Відсутність наскрізного супроводу. Розрив між маршрутам та реальним сервісом.</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--border)] overflow-hidden">
             <button 
                onClick={() => onNavigate('l2-operational')}
                className="w-full flex justify-between items-center text-xs uppercase tracking-widest font-bold text-[var(--teal)] hover:text-white transition-colors"
             >
               <span>Дослідити: Операційний Рівень (L2)</span>
               <ArrowRight className="w-4 h-4" />
             </button>
          </div>
        </motion.div>

        {/* 3. Strategy (Final Outcome) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="flex-1 card-canonical p-8 relative z-10 bg-[var(--background)] border-t-4 border-t-[var(--gold)] flex flex-col"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 lg:-left-4 lg:hidden w-8 h-8 rounded-full bg-[var(--card)] border border-[var(--border)] flex items-center justify-center z-20">
            <ArrowRight className="w-4 h-4 text-[var(--text-sec)] rotate-90 lg:rotate-0" />
          </div>

          <div className="mb-8">
            <h2 className="text-[10px] uppercase tracking-widest font-black text-[var(--gold)] mb-2 mt-1 flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[var(--gold)]/20 flex items-center justify-center text-[var(--gold)]">3</span>
              Синтез проблематики
            </h2>
            <h3 className="font-display font-bold text-xl text-white mt-2 uppercase">Масштаб Виклику</h3>
            <p className="text-xs text-[var(--text-sec)] mt-2">Співвідношення доступних ресурсів до реальної епідеміологічної потреби.</p>
          </div>

          <div className="flex-1 space-y-6">
            <div className="bg-white/5 p-4 rounded-sm border border-[var(--border)] group hover:bg-white/10 transition-colors">
              <div className="text-3xl font-black text-[var(--gold)] glow-gold mb-1">3.9M</div>
              <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Бенефіціарів</p>
              <p className="text-xs text-[var(--text-sec)]">Цільова потреба суспільства в інтервенціях MHPSS за даними базових оцінок.</p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-sm border border-[var(--border)] group hover:bg-white/10 transition-colors">
              <div className="text-3xl font-black text-white mb-1">8%</div>
              <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Покриття потреби</p>
              <p className="text-xs text-[var(--text-sec)]">Система формалізованих послуг охоплює лише <span className="text-[var(--red)] font-bold">~8%</span> від 62.4 млн необхідних сеансів.</p>
            </div>

            <div className="bg-white/5 p-4 rounded-sm border border-[var(--border)] group hover:bg-white/10 transition-colors">
              <div className="text-3xl font-black text-[var(--red)] mb-1">~$8B</div>
              <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Втрати ВВП (Щорічно)</p>
              <p className="text-xs text-[var(--text-sec)]">Масштаб економічних збитків внаслідок відсутності адекватної реакції системи.</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--border)] overflow-hidden">
             <button 
                onClick={() => onNavigate('l3-tactical')}
                className="w-full flex justify-between items-center text-xs uppercase tracking-widest font-bold text-[var(--gold)] hover:text-white transition-colors"
             >
               <span>Дослідити: Тактичний Рівень (L3)</span>
               <ArrowRight className="w-4 h-4" />
             </button>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

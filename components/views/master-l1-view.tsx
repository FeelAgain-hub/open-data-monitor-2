'use client'
import { motion } from 'motion/react'
import { ArrowRight, Activity, Database, Landmark, Network, Clock, GitMerge, FileText } from 'lucide-react'

interface MasterL1ViewProps {
  onNavigate: (view: 'gap1-l2' | 'gap1-l3' | 'gap1-l4' | 'gap1-l5' | 'archive' | 'strategic' | 'operational') => void;
}

export function MasterL1View({ onNavigate }: MasterL1ViewProps) {
  return (
    <div className="w-full space-y-12">
      <div className="text-center mb-16">
        <h1 className="font-display font-black text-4xl md:text-5xl text-[var(--gold)] tracking-tighter glow-gold mb-4">
          FEEL <span className="text-white font-light">Again</span>
        </h1>
        <p className="font-mono text-[var(--text-sec)] tracking-widest uppercase mb-4 text-xs md:text-sm">
          Екзек&apos;ютив Дашборд: Ідеальний Шторм
        </p>
        <p className="text-sm font-medium max-w-3xl mx-auto border-t border-[var(--border)] pt-4 mt-4 text-white/80 leading-relaxed">
          Програма спрямована на подолання gaps в секторі MHPSS, що обмежують або блокують сталий розвиток цільового сектору зайнятості. За рахунок цифровізації відносин та підстановки &quot;технологічного та фінансового плеча&quot; Програма створює безконкурентне цифрове середовище для підвищення ефективності діяльності виконавців та стейкхолдерів ментального добробуту як стрижня відновлення країни.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 relative items-stretch">
        
        {/* Connector lines for desktop */}
        <div className="hidden lg:block absolute top-[40%] left-[30%] right-[30%] h-0.5 bg-gradient-to-r from-[var(--border)] via-[var(--gold)] to-[var(--border)] z-0 opacity-50"></div>

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
            <h3 className="font-display font-bold text-xl text-white mt-2">Дефіцит Інтегрованих Даних</h3>
            <p className="text-xs text-[var(--text-sec)] mt-2">Джерела фінансуються, дії відбуваються, але системні метрики впливу залишаються ізольованими.</p>
          </div>

          <div className="flex-1 space-y-6">
            <div className="bg-white/5 p-4 rounded-lg border border-[var(--border)] group hover:bg-white/10 transition-colors">
              <div className="text-3xl font-black text-[var(--red)] glow-red mb-1">117,652</div>
              <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Видано сертифікатів mhGAP</p>
              <p className="text-xs text-[var(--text-sec)]">Лише <span className="text-white font-bold">42</span> фахівці задокументовані як практикуючі під супервізією (PMC 2020).</p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg border border-[var(--border)] group hover:bg-white/10 transition-colors">
              <div className="text-3xl font-black text-white mb-1"><span className="text-[var(--red)]">$</span>0</div>
              <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Відстежено до результату</p>
              <p className="text-xs text-[var(--text-sec)]">Відсутність уніфікованого стандарту верифікації та наскрізного моніторингу сесій.</p>
            </div>

            <div className="bg-white/5 p-4 rounded-lg border border-[var(--border)] group hover:bg-white/10 transition-colors">
              <div className="text-3xl font-black text-[var(--red)] mb-1">2.5%</div>
              <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Рівень інтеграції</p>
              <p className="text-xs text-[var(--text-sec)]">$117M+ (MOH + OCHA + USAID + UNICEF) функціонують як паралельні інфраструктури.</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--border)]">
             <button 
                onClick={() => onNavigate('gap1-l2')}
                className="w-full flex justify-between items-center text-xs uppercase tracking-widest font-bold text-[var(--red)] hover:text-white transition-colors"
             >
               <span>Дослідити Розрив 1 (L2-L5)</span>
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
            <h3 className="font-display font-bold text-xl text-white mt-2">Структурні Невідповідності</h3>
            <p className="text-xs text-[var(--text-sec)] mt-2">Фінансування концентрується на інфраструктурі, тоді як попит вимагає сервісного покриття.</p>
          </div>

          <div className="flex-1 space-y-6">
            <div className="bg-white/5 p-4 rounded-lg border border-[var(--border)] group hover:bg-white/10 transition-colors">
              <div className="text-3xl font-black text-[var(--teal)] glow-teal mb-1">89%</div>
              <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Бюджету на стаціонар</p>
              <p className="text-xs text-[var(--text-sec)]">При цьому <span className="text-white font-bold">71%</span> пацієнтів потребують амбулаторного лікування. Формується структурний розрив.</p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg border border-[var(--border)] group hover:bg-white/10 transition-colors">
              <div className="text-3xl font-black text-white mb-1">8,000+</div>
              <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Фахівців поза реєстром</p>
              <p className="text-xs text-[var(--text-sec)]">Кваліфікований потенціал залишається поза межами державної звітності через бар&apos;єри входу.</p>
            </div>

            <div className="bg-white/5 p-4 rounded-lg border border-[var(--border)] group hover:bg-white/10 transition-colors">
              <div className="text-3xl font-black text-[var(--teal)] mb-1">40%</div>
              <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Ресурсне навантаження</p>
              <p className="text-xs text-[var(--text-sec)]">Клінічного часу фахівця відволікається на ручне заповнення розрізненої адміністративної звітності.</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--border)] overflow-hidden">
             <button 
                onClick={() => onNavigate('operational')}
                className="w-full flex justify-between items-center text-xs uppercase tracking-widest font-bold text-[var(--teal)] hover:text-white transition-colors"
             >
               <span>Дослідити Розриви 2-9</span>
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
            <h3 className="font-display font-bold text-xl text-white mt-2">Масштаб Виклику</h3>
            <p className="text-xs text-[var(--text-sec)] mt-2">Співвідношення доступних ресурсів до реальної епідеміологічної потреби.</p>
          </div>

          <div className="flex-1 space-y-6">
            <div className="bg-white/5 p-4 rounded-lg border border-[var(--border)] group hover:bg-white/10 transition-colors">
              <div className="text-3xl font-black text-[var(--gold)] glow-gold mb-1">3.9M</div>
              <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Клінічна Потреба (Lancet 2023)</p>
              <p className="text-xs text-[var(--text-sec)]"><span className="text-white font-bold">1.3</span> психолога на 100K населення (норма WHO: 2.7). Більшість цільових груп поза охопленням.</p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg border border-[var(--border)] group hover:bg-white/10 transition-colors">
              <div className="text-3xl font-black text-white mb-1">62.4M</div>
              <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Оцінка необхідних годин</p>
              <p className="text-xs text-[var(--text-sec)]">За стандартом WHO (16 сесій/курс). Система задовольняє <span className="text-[var(--red)] font-bold">~1%</span> потреби наявними інструментами найму.</p>
            </div>

            <div className="bg-white/5 p-4 rounded-lg border border-[var(--border)] group hover:bg-white/10 transition-colors">
              <div className="text-3xl font-black text-[var(--red)] mb-1">$28B</div>
              <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Ризик втрат ВВП (Щорічно)</p>
              <p className="text-xs text-[var(--text-sec)]">Прогнозований макроекономічний вплив через зниження продуктивності людського капіталу.</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--border)] overflow-hidden">
             <button 
                onClick={() => onNavigate('strategic')}
                className="w-full flex justify-between items-center text-xs uppercase tracking-widest font-bold text-[var(--gold)] hover:text-white transition-colors"
             >
               <span>Масштаб Виклику</span>
               <ArrowRight className="w-4 h-4" />
             </button>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

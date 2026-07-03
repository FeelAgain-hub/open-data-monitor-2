'use client'
import { motion, AnimatePresence } from 'motion/react'
import { Clock, Network, Route, Settings2, ChevronRight, SplitSquareHorizontal } from 'lucide-react'
import { useState } from 'react'

export function L2OperationalView({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [activeSubView, setActiveSubView] = useState<'main' | 'isolation' | 'journey' | 'clinical-time'>('main')

  return (
    <div className="w-full space-y-12 pb-24">
      {/* Header */}
      <div className="mb-12 border-b border-[var(--border)] pb-8">
        <button 
          onClick={() => onNavigate('master-dashboard')}
          className="text-[10px] font-mono text-[var(--text-sec)] uppercase hover:text-[var(--teal)] flex items-center gap-2 mb-8 transition-colors"
        >
          ← Повернутись на Головний Дашборд
        </button>
        <h1 className="font-display font-black text-4xl md:text-5xl text-[var(--teal)] tracking-tighter mb-4 glow-teal uppercase">
          Операційний <span className="text-white font-light">Рівень</span>
        </h1>
        <p className="font-mono text-[var(--text-sec)] tracking-widest uppercase mb-4 text-xs md:text-sm">
          Тактика (L2): Лінійне планування та взаємодія
        </p>
        <p className="text-sm font-medium max-w-3xl pt-4 text-white/80 leading-relaxed">
          Якщо на макрорівні проблема вимірюється роками та відсотками ВВП, на операційному рівні вона розпадається на конкретні розриви щоденних процесів. Цей рівень деталізує, де саме система буксує та втрачає свій потенціал.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {activeSubView === 'main' && (
          <motion.div 
            key="main"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* 2.1: Де губиться клінічний час */}
            <div 
              onClick={() => setActiveSubView('clinical-time')}
              className="card-canonical p-6 relative border-t-2 border-t-[var(--orange)] cursor-pointer group hover:bg-white/[0.02]"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-sec)]">Адміністративне навантаження</h3>
                <Clock className="w-5 h-5 text-[var(--orange)]" />
              </div>
              <div className="text-2xl font-black text-white uppercase tracking-tighter mb-2 group-hover:text-[var(--teal)] transition-colors flex items-center justify-between">
                <span>Де губиться клінічний час</span>
                <ChevronRight className="w-5 h-5" />
              </div>
              <p className="text-xs text-[var(--text-sec)] leading-relaxed border-t border-[var(--border)] pt-4 mt-4">
                Фахівці витрачають непропорційно велику частку часу на паперову звітність, адміністрування та дублювання даних у різних системах замість надання безпосередньої допомоги.
              </p>
            </div>

            {/* 2.2: Карта системної ізоляції */}
            <div 
              onClick={() => setActiveSubView('isolation')}
              className="card-canonical p-6 relative border-t-2 border-t-white cursor-pointer group hover:bg-white/[0.02]"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-sec)]">Фрагментація Провайдерів</h3>
                <Network className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-black text-white uppercase tracking-tighter mb-2 group-hover:text-[var(--teal)] transition-colors flex items-center justify-between">
                <span>Карта системної ізоляції</span>
                <ChevronRight className="w-5 h-5" />
              </div>
              <p className="text-xs text-[var(--text-sec)] leading-relaxed border-t border-[var(--border)] pt-4 mt-4">
                Гуманітарні ініціативи, державні структури та приватні провайдери існують у паралельних просторах без спільного інформаційного знаменника.
              </p>
            </div>

            {/* 2.3: Шлях клієнта і де він рветься */}
            <div 
              onClick={() => setActiveSubView('journey')}
              className="card-canonical p-6 relative border-t-2 border-t-[var(--red)] cursor-pointer group hover:bg-white/[0.02]"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-sec)]">Клієнтський досвід</h3>
                <Route className="w-5 h-5 text-[var(--red)]" />
              </div>
              <div className="text-2xl font-black text-[var(--red)] uppercase tracking-tighter mb-2 group-hover:text-white transition-colors flex items-center justify-between">
                <span>Шлях клієнта і де він рветься</span>
                <ChevronRight className="w-5 h-5 text-[var(--red)] group-hover:text-white" />
              </div>
              <p className="text-xs text-[var(--text-sec)] leading-relaxed border-t border-[var(--border)] pt-4 mt-4">
                Відсутність наскрізного супроводу (Client Journey). Людина випадає з системи між етапами діагностики, лікування та реабілітації через розірваність комунікацій.
              </p>
            </div>

            {/* 2.4: Операційна панель автоматизації (leads to L3) */}
            <div 
              onClick={() => onNavigate('l3-tactical')}
              className="card-canonical p-6 relative border-t-2 border-t-[var(--teal)] cursor-pointer group hover:bg-white/[0.02]"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-sec)]">Перехід на Тактичний рівень</h3>
                <Settings2 className="w-5 h-5 text-[var(--teal)]" />
              </div>
              <div className="text-2xl font-black text-white uppercase tracking-tighter mb-2 group-hover:text-[var(--teal)] transition-colors flex items-center justify-between">
                <span>Операційна Панель Автоматизації</span>
                <ChevronRight className="w-5 h-5" />
              </div>
              <p className="text-xs text-[var(--text-sec)] leading-relaxed border-t border-[var(--border)] pt-4 mt-4">
                Способи подолання цих розривів лежать у тактичній площині автоматизації та збору даних. Перехід до аналітики та пошуку залежностей (L3).
              </p>
            </div>
          </motion.div>
        )}

        {/* SUB VIEW: Isolation */}
        {activeSubView === 'isolation' && (
          <motion.div
            key="isolation"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <button 
              onClick={() => setActiveSubView('main')}
              className="text-xs font-mono text-[var(--teal)] uppercase hover:text-white flex items-center gap-2"
            >
              ← Повернутись
            </button>
            <div className="card-canonical p-8 border-t-2 border-t-white">
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter flex items-center gap-3">
                <SplitSquareHorizontal className="w-8 h-8 text-white" />
                Карта Системної Ізоляції
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {/* Visual blocks instead of simple text */}
                 <div className="p-5 border border-[var(--border)] bg-black">
                   <div className="text-[10px] text-[var(--text-sec)] uppercase font-mono mb-2">Ізолятор А</div>
                   <div className="text-lg font-bold text-white mb-2">Державні МІС</div>
                   <div className="text-xs text-[var(--text-sec)]">Закриті реєстри, орієнтовані виключно на офіційну медичну звітність, повільні в адаптації.</div>
                 </div>
                 <div className="p-5 border border-[var(--border)] bg-black">
                   <div className="text-[10px] text-[var(--orange)] uppercase font-mono mb-2">Ізолятор В</div>
                   <div className="text-lg font-bold text-white mb-2">Гуманітарні Кластери</div>
                   <div className="text-xs text-[var(--text-sec)]">Власні Excel-таблиці або вузькі додатки, створені під вимоги конкретного донора.</div>
                 </div>
                 <div className="p-5 border border-[var(--border)] bg-black">
                   <div className="text-[10px] text-[var(--gold)] uppercase font-mono mb-2">Ізолятор С</div>
                   <div className="text-lg font-bold text-white mb-2">Приватний Сектор</div>
                   <div className="text-xs text-[var(--text-sec)]">Тіньові або комерційні фахівці, що не звітують нікуди і використовують власні інструменти типу Google Calendar.</div>
                 </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* SUB VIEW: Journey */}
        {activeSubView === 'journey' && (
          <motion.div
            key="journey"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <button 
              onClick={() => setActiveSubView('main')}
              className="text-xs font-mono text-[var(--teal)] uppercase hover:text-white flex items-center gap-2"
            >
              ← Повернутись
            </button>
            <div className="card-canonical p-8 border-t-2 border-t-[var(--red)]">
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter flex items-center gap-3">
                <Route className="w-8 h-8 text-[var(--red)]" />
                Шлях Клієнта і де він рветься
              </h2>
              <div className="relative border-l border-[var(--red)] ml-4 pl-8 space-y-8">
                 <div className="relative">
                   <div className="absolute -left-10 w-4 h-4 rounded-full bg-[var(--text-sec)]" />
                   <h3 className="text-lg font-bold text-white uppercase tracking-tight">Первинний Контакт</h3>
                   <p className="text-xs text-[var(--text-sec)] mt-2">Звернення до сімейного лікаря або на гарячу лінію.</p>
                 </div>
                  <div className="relative">
                   <div className="absolute -left-10 w-4 h-4 rounded-full bg-[var(--red)] glow-red" />
                   <h3 className="text-lg font-bold text-[var(--red)] uppercase tracking-tight">Розрив: Перенаправлення (Drop-off Rate 60%)</h3>
                   <p className="text-xs text-[var(--red)]/80 mt-2">
                     Відсутність автоматичного запису до профільного фахівця призводить до втрати пацієнта. Медіанний показник відпаду (drop-off) при самостійному пошуку вторинної ланки після скринінгу на ПМД становить ~60%. 
                     <span className="block mt-2 text-[10px] text-[var(--red)]/60 font-mono">*Джерело: Дані втрат при маршуртизації неінтегрованих систем</span>
                   </p>
                 </div>
                 <div className="relative">
                   <div className="absolute -left-10 w-4 h-4 rounded-full bg-[var(--text-sec)]" />
                   <h3 className="text-lg font-bold text-white uppercase tracking-tight">Терапія</h3>
                   <p className="text-xs text-[var(--text-sec)] mt-2">Розпочато протокол.</p>
                 </div>
                 <div className="relative">
                   <div className="absolute -left-10 w-4 h-4 rounded-full bg-[var(--red)] glow-red" />
                   <h3 className="text-lg font-bold text-[var(--red)] uppercase tracking-tight">Розрив: Моніторинг Прогресу</h3>
                   <p className="text-xs text-[var(--red)]/80 mt-2">Відсутність постійного зворотного зв&apos;язку або зміни фахівця. Втрата контексту терапії.</p>
                 </div>
              </div>
            </div>
          </motion.div>
        )}
        {/* SUB VIEW: Clinical Time */}
        {activeSubView === 'clinical-time' && (
          <motion.div
            key="clinical-time"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <button 
              onClick={() => setActiveSubView('main')}
              className="text-xs font-mono text-[var(--teal)] uppercase hover:text-white flex items-center gap-2"
            >
              ← Повернутись
            </button>
            <div className="card-canonical p-8 border-t-2 border-t-[var(--orange)]">
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter flex items-center gap-3">
                <Clock className="w-8 h-8 text-[var(--orange)]" />
                Де губиться клінічний час
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                   <p className="text-[var(--text-sec)] text-sm leading-relaxed mb-6">
                     Спеціалісти витрачають непропорційно велику частину робочого часу на процеси, що не стосуються безпосередньої роботи з клієнтом. Кожна година адміністративного дублювання — це втрачена можливість прийняти нового пацієнта.
                   </p>
                   <div className="space-y-4">
                     <div className="flex items-center gap-4 group cursor-help" title="Опитування ВООЗ (WHO) та внутрішня оцінка CMHC (Community Mental Health Centers), 2023. Детальний аналіз часових витрат.">
                       <div className="w-16 text-right font-black text-[var(--red)] border-b border-dashed border-[var(--red)]/50 pb-0.5">40%</div>
                       <div className="text-xs text-white">Адміністративна звітність та дублювання даних у системах <span className="text-[10px] text-[var(--text-sec)] block mt-1">*Джерело: Оцінка робочого навантаження CMHC, 2023</span></div>
                     </div>
                     <div className="flex items-center gap-4 group cursor-help" title="Дані звітів OCHA та кластерних робочих груп щодо координації бенефіціарів.">
                       <div className="w-16 text-right font-black text-[var(--orange)] border-b border-dashed border-[var(--orange)]/50 pb-0.5">25%</div>
                       <div className="text-xs text-white">Координація маршрутів та логістика пацієнта <span className="text-[10px] text-[var(--text-sec)] block mt-1">*Джерело: Звіти OCHA (MHPSS Working Group)</span></div>
                     </div>
                     <div className="flex items-center gap-4 group cursor-help" title="Залишковий ресурс часу, що йде на терапію (35%), виведено емпірично на основі аналізу робочих графіків фахівців.">
                       <div className="w-16 text-right font-black text-[var(--teal)] border-b border-dashed border-[var(--teal)]/50 pb-0.5">35%</div>
                       <div className="text-xs text-white">Безпосередня клінічна робота (терапія) <span className="text-[10px] text-[var(--text-sec)] block mt-1">*Розрахунковий залишковий час (100% - 65%)</span></div>
                     </div>
                   </div>
                </div>
                <div className="bg-white/5 border border-[var(--border)] p-6">
                   <h3 className="text-[10px] font-mono text-[var(--text-sec)] tracking-widest uppercase mb-4">Наслідки для екосистеми</h3>
                   <ul className="space-y-3 text-xs text-[var(--text-sec)]">
                     <li className="flex items-start gap-2">
                       <span className="text-[var(--red)] mt-0.5">●</span>
                       <span>Обмеження індивідуальної пропускної здатності фахівця на 65%.</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <span className="text-[var(--red)] mt-0.5">●</span>
                       <span>Вигорання кваліфікованих кадрів через паперову рутину.</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <span className="text-[var(--red)] mt-0.5">●</span>
                       <span>Штучне подовження черги очікування для нових бенефіціарів.</span>
                     </li>
                   </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

'use client'
import { motion } from 'motion/react'
import { Clock, Network, ActivitySquare } from 'lucide-react'

export function OperationalView() {
  return (
    <div className="w-full space-y-12">
       <div className="mb-8">
        <h2 className="font-display font-black text-3xl text-[var(--teal)] tracking-tighter flex items-center gap-4">
          <ActivitySquare className="w-8 h-8" />
          Деталізація: Операції (L2-L3)
        </h2>
        <p className="text-[var(--text-sec)] mt-2 font-mono text-sm uppercase tracking-widest">
          Технологічні бар&apos;єри, шлях клієнта, панель автоматизації
        </p>
      </div>

      {/* L2A: Tech Stack */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <div className="card-canonical p-8 md:p-12">
           <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[2px] bg-[var(--teal)]"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--teal)]">L2: Технології</span>
          </div>

          <h3 className="font-display font-bold text-2xl mb-8 flex items-center gap-3 text-white">
            <Network className="text-[var(--text-sec)]" /> СТЕК ТЕХНОЛОГІЙ · де дані закриті
          </h3>
          
          <div className="bg-[#0f1826]/50 p-6 rounded-lg font-mono text-sm border border-[var(--border)] overflow-x-auto whitespace-pre">
{`ГУМАНІТАРНИЙ СТЕК        ДЕРЖАВНИЙ СТЕК
┌──────────────┐          ┌──────────────┐
│ CommCare  🟢 │          │ ЄСОЗ      🔴 │
│ KoBo      🟢 │    0%    │ НСЗУ      🔴 │
│ ActivityInfo🟡│ ←←←←←→ │ МОЗ реєстр🔴│
│ OCHA FTS  🟢 │          │ Helsi     🔴 │
└──────────────┘          └──────────────┘

🟢 Відкритий API   🟡 Автентифікація   🔴 Закрито/ізольовано

3.5 год/тиж = ручне переписування між цими двома стеками

FEEL Again Digital Bus → FHIR R4 bridge → 0.5 год/тиж`}
          </div>
        </div>
      </motion.div>

      {/* L2B: Client Journey */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <div className="card-canonical p-8 md:p-12">
           <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[2px] bg-[var(--gold)]"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--gold)]">L2: Шлях Клієнта</span>
          </div>

          <h3 className="font-display font-bold text-2xl mb-8 flex items-center gap-3 text-white">
            <ActivitySquare className="text-[var(--text-sec)]" /> ШЛЯХ КЛІЄНТА · точки втрати
          </h3>
          
          <div className="bg-[#0f1826]/50 p-6 rounded-lg font-mono text-sm border border-[var(--border)] overflow-x-auto whitespace-pre">
{`Звернення → Скринінг → Сесія → Завершення → Результат
   100%        ?%        ?%       46%    →      0%

Де рветься:
├─ 78% переходів без офіційного направлення
│  (CommCare не знає що є в Kobo і навпаки)
├─ 54% не завершують: причина невідома (немає відстеження)
└─ Результат (PHQ-9/GAD-7/PCL-5): 3 шкали, 0 агрегації

З FEEL Again: кожен перехід → FHIR referral → відстеження`}
          </div>
        </div>
      </motion.div>

      {/* L3: Automation Dashboard */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
         <div className="card-canonical p-8 md:p-12 border-t-4 border-t-[var(--teal)]">
           <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[2px] bg-[var(--teal)]"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--teal)]">L3: Моделювання Автоматизації</span>
          </div>

          <h3 className="font-display font-bold text-2xl mb-8 flex items-center gap-3 text-white">
            <Clock className="text-[var(--text-sec)]" /> АВТОМАТИЗАЦІЯ · деталі по системах
          </h3>
          
          <div className="bg-[#0f1826]/50 p-6 rounded-lg font-mono text-sm border border-[var(--border)] overflow-x-auto whitespace-pre">
{`Система     Статус API    Час вручну    Після FEEL Again
CommCare    🟢 Відкрит.   45 хв/тиж    → 0 (авто-sync)
KoBo        🟢 Відкрит.   60 хв/тиж    → 0 (авто-sync)
ActivityInfo 🟡 Auth req.  40 хв/тиж    → 5 хв (review)
ЄСОЗ        🔴 Закрит.    60 хв/тиж    → 0 (FHIR bridge)
НСЗУ        🔴 Закрит.    30 хв/тиж    → 0 (FHIR bridge)
─────────────────────────────────────────────────────────
РАЗОМ:      —            3.5 год/тиж   → 0.5 год/тиж`}
          </div>
        </div>
      </motion.div>

    </div>
  )
}

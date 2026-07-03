'use client'
import { motion } from 'motion/react'
import { Info, Sliders, FileText, Landmark } from 'lucide-react'

export function StrategicView() {
  return (
    <div className="w-full space-y-12">
      <div className="mb-8">
        <h2 className="font-display font-black text-3xl text-[var(--gold)] tracking-tighter flex items-center gap-4">
          <Landmark className="w-8 h-8" />
          Деталізація: Стратегія (L2-L3)
        </h2>
        <p className="text-[var(--text-sec)] mt-2 font-mono text-sm uppercase tracking-widest">
          Масштаб провалу, фінансові ланцюги та сценарії
        </p>
      </div>

      {/* L2A: Financial Chain */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <div className="card-canonical p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[2px] bg-[var(--gold)]"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--gold)]">L2: Анатомія Бюджету</span>
          </div>
          
          <h3 className="font-display font-bold text-2xl mb-8 flex items-center gap-3 text-white">
             ФІНАНСОВИЙ ЛАНЦЮГ · де рвуться зв&apos;язки
          </h3>
          
          <div className="bg-[#0f1826]/50 p-6 rounded-lg font-mono text-sm border border-[var(--border)] overflow-x-auto whitespace-pre">
{`ДОНОР         АЛОКАЦІЯ       ПОСТАЧАЛЬНИК    РЕЗУЛЬТАТ
$1.87B   →   State MOH ~50M →  ?K сесій   →   Medium transp. / Partial eHealth
         →   Health Cluster 77M → ?K сесій →  Low transp. / No eHealth
         →   USAID ~5M      →  ?K сесій   →   High transp. / No eHealth

🔴 Розрив 1: фінансування роздроблене (~17M+ від різних донорів без спільного знаменника)
🔴 Розрив 2: 89% бюджету йде на "стіни" (стаціонар), тоді як 71% треба амбулаторно
🔴 Розрив 3: лише 2.1% гуманітарних фондів досягає місцевих провайдерів

FEEL Again закриває ці розриви через eHealth API (Interoperability) та Smart Contracts.`}
          </div>
        </div>
      </motion.div>

      {/* L2B: Capacity Gap */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <div className="card-canonical p-8 md:p-12">
           <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[2px] bg-[var(--red)]"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--red)]">L2: Місткість</span>
          </div>

          <h3 className="font-display font-bold text-2xl mb-8 flex items-center gap-3 text-white">
             МІСТКІСНИЙ РОЗРИВ · структура дефіциту
          </h3>
          
          <div className="bg-[#0f1826]/50 p-6 rounded-lg font-mono text-sm border border-[var(--border)] overflow-x-auto whitespace-pre">
{`Клінічна потреба: 3.9M людей (Lancet 2023)
Потреба сесій:    62.4M сесій/рік (WHO avg 16 sessions)
Офіційно покрито: 0.17M сесій       █░░░░░░░░░░░░░░░░░░ 0.28%

Чому офіційних так мало?
├─ 1.3 психолога на 100K населення (норма EU: 2.7)
├─ 117K сертифікатів mhGAP видано, але лише 42 практикують під супервізією
└─ 8,000+ приватних фахівців у "тіні", без виходу до державних звітів

FEEL Again: цифровий коридор для легалізації + VR Multiplier (1 фахівець на 200+ пацієнтів)`}
          </div>
        </div>
      </motion.div>

      {/* L3: Scenario Modeling */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
         <div className="card-canonical p-8 md:p-12 border-t-4 border-t-[var(--gold)]">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[2px] bg-[var(--gold)]"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--gold)]">L3: Моделювання</span>
          </div>

          <h3 className="font-display font-bold text-2xl mb-8 flex items-center gap-3 text-white">
             СЦЕНАРІЇ · що змінює FEEL Again
          </h3>
          
          <div className="mb-8 hidden">
            {/* Kept hidden if we want to add back investment math later */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 border border-[var(--border)] bg-red-900/10 rounded-lg">
              <h4 className="text-xs uppercase font-bold text-[var(--red)] mb-4 tracking-widest">БЕЗ FEEL Again</h4>
              <ul className="space-y-3 font-mono text-sm">
                <li>• 74% GAP нелікованих ВПО</li>
                <li>• $0 виплат прив&apos;язано до результату</li>
                <li>• 12.4 роки до ліквідації черги</li>
                <li>• Фінансуються звіти, а не вплив на ВВП</li>
              </ul>
            </div>
            <div className="p-6 border border-[var(--gold)] bg-[var(--gold)]/5 rounded-lg">
              <h4 className="text-xs uppercase font-bold text-[var(--gold)] mb-4 tracking-widest">З FEEL Again</h4>
              <ul className="space-y-3 font-mono text-sm">
                <li>• Зниження treatment gap до <span className="text-[var(--teal)]">50%</span></li>
                <li>• 100% інтеграція до ЄСОЗ (interoperability)</li>
                <li>• Менше <span className="text-[var(--teal)]">10%</span> на адміністрування</li>
                <li>• Захист ВВП (попередження втрат <span className="text-white font-bold">-$28B</span>)</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded text-center border border-[var(--border)]">
            <p className="font-mono text-sm tracking-wide flex flex-wrap justify-center gap-8">
              <span><span className="text-[var(--text-sec)]">Donors fund transactions not forecasts.</span></span>
              <span><span className="text-[var(--text-sec)]">State buys service not servers.</span></span>
            </p>
          </div>
        </div>
      </motion.div>

    </div>
  )
}


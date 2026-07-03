'use client'

import { motion } from 'motion/react'
import { GitCompare, TrendingUp, Lock, Unlock, Database, Activity, FastForward } from 'lucide-react'

export function Gap1L5View() {
  return (
    <div className="space-y-12">
      <div className="border-b border-[var(--border)] pb-8">
        <h1 className="font-display font-black text-3xl text-white mb-2 flex items-center gap-3">
          <GitCompare className="w-8 h-8 text-[var(--red)]" />
          ВПЛИВ (L5): ДЕЛЬТА-ДАШБОРД
        </h1>
        <p className="text-[var(--text-sec)] max-w-3xl leading-relaxed">
          Об&apos;єктивне порівняння параметричних значень системи управління MHPSS &quot;До&quot; (інформаційна сліпота) та &quot;Після&quot; (цифрова інтеграція) впровадження програми Feel Again.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* AS-IS */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-[#333] flex items-center justify-center">
               <Lock className="w-4 h-4 text-white" />
             </div>
             <h2 className="text-xl font-bold text-white uppercase tracking-wider">State As Is</h2>
          </div>
          
          <div className="bg-[#111] border border-[var(--border)] rounded-xl overflow-hidden divide-y divide-[var(--border)]">
             <div className="p-5">
                <div className="text-[10px] text-[var(--text-sec)] font-bold uppercase mb-1">Видимість Гуманітарних Послуг для НСЗУ</div>
                <div className="text-lg font-black text-[var(--red)]">0% (Сліпа Зона)</div>
             </div>
             <div className="p-5">
                <div className="text-[10px] text-[var(--text-sec)] font-bold uppercase mb-1">DLI Верифікація для World Bank</div>
                <div className="text-lg font-black text-[var(--red)]">Block / Rejected</div>
             </div>
             <div className="p-5">
                <div className="text-[10px] text-[var(--text-sec)] font-bold uppercase mb-1">Формат звітності фахівців</div>
                <div className="text-lg font-black text-white">Manual Excel / PDF</div>
             </div>
             <div className="p-5">
                <div className="text-[10px] text-[var(--text-sec)] font-bold uppercase mb-1">Навантаження на адміністрування</div>
                <div className="text-lg font-black text-[var(--gold)]">~40% часу клініциста</div>
             </div>
          </div>
        </div>

        {/* TO-BE */}
        <div className="space-y-6">
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-[var(--red)]/20 flex items-center justify-center border border-[var(--red)]">
               <Unlock className="w-4 h-4 text-[var(--red)]" />
             </div>
             <h2 className="text-xl font-bold text-[var(--red)] uppercase tracking-wider glow-red">State To Be</h2>
          </div>

          <div className="bg-[var(--background)] border border-[var(--red)] rounded-xl overflow-hidden divide-y divide-[var(--border)] shadow-[0_0_30px_rgba(220,38,38,0.05)]">
             <div className="p-5 bg-[var(--red)]/5">
                <div className="flex justify-between items-end">
                   <div>
                     <div className="text-[10px] text-[var(--text-sec)] font-bold uppercase mb-1">Видимість Гуманітарних Послуг для НСЗУ</div>
                     <div className="text-lg font-black text-white">100% (Real-time)</div>
                   </div>
                   <TrendingUp className="w-5 h-5 text-[var(--teal)] mb-1" />
                </div>
             </div>
             <div className="p-5">
                <div className="flex justify-between items-end">
                   <div>
                     <div className="text-[10px] text-[var(--text-sec)] font-bold uppercase mb-1">DLI Верифікація для World Bank</div>
                     <div className="text-lg font-black text-white">Automated Traceable</div>
                   </div>
                   <Database className="w-5 h-5 text-[var(--teal)] mb-1" />
                </div>
             </div>
             <div className="p-5">
                <div className="flex justify-between items-end">
                   <div>
                     <div className="text-[10px] text-[var(--text-sec)] font-bold uppercase mb-1">Формат звітності фахівців</div>
                     <div className="text-lg font-black text-white">Zero-entry / API Sync</div>
                   </div>
                   <Activity className="w-5 h-5 text-[var(--teal)] mb-1" />
                </div>
             </div>
             <div className="p-5">
                <div className="flex justify-between items-end">
                   <div>
                     <div className="text-[10px] text-[var(--text-sec)] font-bold uppercase mb-1">Навантаження на адміністрування</div>
                     <div className="text-lg font-black text-[var(--teal)] glow-teal">&lt; 5% часу клініциста</div>
                   </div>
                   <FastForward className="w-5 h-5 text-[var(--teal)] mb-1" />
                </div>
             </div>
          </div>
        </div>

      </div>

      <div className="mt-12 text-center border-t border-[var(--border)] pt-8">
         <h3 className="font-display font-medium text-white text-lg mb-2">Наступний Стратегічний Крок</h3>
         <p className="text-sm text-[var(--text-sec)]">Усунення першого системного розриву створює прецедент для автоматизації управління клінічними місткостями (Розрив 2).</p>
      </div>
    </div>
  )
}

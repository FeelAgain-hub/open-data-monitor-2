'use client'

import { motion } from 'motion/react'
import { Cpu, Server, Network, ArrowRightCircle, MoveRight, Database } from 'lucide-react'

export function Gap1L4View() {
  return (
    <div className="space-y-12">
      <div className="border-b border-[var(--border)] pb-8">
        <h1 className="font-display font-black text-3xl text-white mb-2 flex items-center gap-3">
          <Cpu className="w-8 h-8 text-[var(--red)]" />
          РІШЕННЯ (L4)
        </h1>
        <p className="text-[var(--text-sec)] max-w-3xl leading-relaxed">
          Інтеграційна Цифрова Шина (Digital Bridge). Безупинний транзит даних між закритими системами з дотриманням політик авторизації, що формує інституційну довіру.
        </p>
      </div>

      <div className="relative p-12 bg-[#050505] rounded-xl border border-[var(--border)] overflow-hidden">
        {/* Abstract background schema */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(var(--red) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-stretch justify-center gap-6">
          
          {/* Left Side: Humanitarian Source */}
          <div className="flex-1 flex flex-col justify-center bg-[#111] p-6 rounded-lg border border-[#222]">
            <h3 className="text-[10px] font-black uppercase text-[var(--gold)] mb-4 tracking-widest text-center">Джерело Даних</h3>
            <div className="space-y-3">
              <div className="p-3 bg-white/5 rounded border border-white/10 text-xs font-mono text-center text-[var(--text-sec)]">CommCare API (Clinical)</div>
              <div className="p-3 bg-white/5 rounded border border-white/10 text-xs font-mono text-center text-[var(--text-sec)]">ActivityInfo API (5W)</div>
              <div className="p-3 bg-white/5 rounded border border-white/10 text-xs font-mono text-center text-[var(--text-sec)]">CRM Systems (Local NGOs)</div>
            </div>
          </div>

          {/* Center: The Digital Bus */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center pt-8 md:pt-0">
             <div className="w-px h-12 md:w-12 md:h-px bg-gradient-to-b md:bg-gradient-to-r from-transparent to-[var(--red)] mb-4 md:mb-0 md:mr-4"></div>
             
             <motion.div 
                animate={{ boxShadow: ['0 0 0 0 rgba(220,38,38,0)', '0 0 20px 5px rgba(220,38,38,0.3)', '0 0 0 0 rgba(220,38,38,0)'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-24 h-24 rounded-full bg-[var(--background)] border-4 border-[var(--red)] flex items-center justify-center relative z-20"
             >
                <Server className="w-10 h-10 text-[var(--red)]" />
             </motion.div>
             <div className="text-center mt-4 uppercase font-black text-xs text-[var(--red)] tracking-widest max-w-[120px]">
               Data Translation Bus
             </div>

             <div className="hidden md:block w-px h-12 md:w-12 md:h-px bg-gradient-to-b md:bg-gradient-to-l from-transparent to-[var(--red)] mt-4 md:mt-0 md:ml-4"></div>
          </div>

          {/* Right Side: State Frameworks */}
          <div className="flex-1 flex flex-col justify-center bg-[#111] p-6 rounded-lg border border-[#222]">
            <h3 className="text-[10px] font-black uppercase text-[var(--teal)] mb-4 tracking-widest text-center">Кінцевий Одержувач</h3>
            <div className="space-y-3">
              <div className="p-3 bg-white/5 rounded border border-white/10 text-xs font-mono text-center text-white">ЕСОЗ (eHealth)</div>
              <div className="p-3 bg-white/5 rounded border border-white/10 text-xs font-mono text-center text-white">НСЗУ Database</div>
              <div className="p-3 bg-[var(--gold)]/10 rounded border border-[var(--gold)]/30 text-xs font-bold text-[var(--gold)] text-center">World Bank DLI Monitors</div>
            </div>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white/5 border border-[var(--border)] rounded-lg">
          <div className="w-10 h-10 rounded-full bg-[var(--gold)]/20 flex items-center justify-center mb-4">
             <Network className="w-5 h-5 text-[var(--gold)]" />
          </div>
          <h3 className="text-sm font-bold text-white mb-2">Grand Bargain (Зшивання)</h3>
          <p className="text-xs text-[var(--text-sec)] leading-relaxed">
            Виконує пряму вимогу гуманітарного реагування щодо інтеграції з національними спроможностями (Localization & Integration).
          </p>
        </div>

        <div className="p-6 bg-[var(--red)]/5 border border-[var(--red)]/30 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-[var(--red)]/20 flex items-center justify-center mb-4">
             <ArrowRightCircle className="w-5 h-5 text-[var(--red)]" />
          </div>
          <h3 className="text-sm font-bold text-[var(--red)] mb-2">Розблокування World Bank</h3>
          <p className="text-xs text-[var(--text-sec)] leading-relaxed">
            Дозволяє конвертувати проведені позаурядовим сектором сесії у фіксовані показники Disbursement-Linked Indicators (DLIs).
          </p>
        </div>

        <div className="p-6 bg-white/5 border border-[var(--border)] rounded-lg">
          <div className="w-10 h-10 rounded-full bg-[var(--teal)]/20 flex items-center justify-center mb-4">
             <Database className="w-5 h-5 text-[var(--teal)]" />
          </div>
          <h3 className="text-sm font-bold text-white mb-2">Єдиний Дата-Сет</h3>
          <p className="text-xs text-[var(--text-sec)] leading-relaxed">
            Створює фундамент для координації кластеру охорони здоров&apos;я. Без втрати доступу до сирих даних з боку імплементаторів.
          </p>
        </div>
      </div>

    </div>
  )
}

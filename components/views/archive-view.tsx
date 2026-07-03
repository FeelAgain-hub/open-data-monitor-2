'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Database, BookOpen, Presentation } from 'lucide-react'

// Existing Components (Lazy loaded or imported, we will import them directly)
import { HumanitarianDataSection } from '@/components/humanitarian-data-section'
import { ContextMetrics } from '@/components/context-metrics'
import { MissingData } from '@/components/missing-data'
import { PerfectStorm } from '@/components/perfect-storm'
import { BlendedFinanceModel } from '@/components/blended-finance-model'
import { FormalizationCost } from '@/components/formalization-cost'
import { KeyFindings } from '@/components/key-findings'
import { CommunicationStrategy } from '@/components/communication-strategy'

export function ArchiveView() {
  const [activeTab, setActiveTab] = useState<'A' | 'B' | 'C'>('A')

  return (
    <div className="w-full space-y-6">
      <div className="card-canonical flex p-2 rounded-xl mb-8">
        <button 
          onClick={() => setActiveTab('A')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-widest rounded-lg transition-all ${activeTab === 'A' ? 'bg-[var(--background)] border border-[var(--border)] text-white' : 'text-[var(--text-sec)] hover:bg-white/5 opacity-70'}`}
        >
          <Database className="w-4 h-4" /> Архів A: Сирі джерела
        </button>
        <button 
          onClick={() => setActiveTab('B')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-widest rounded-lg transition-all ${activeTab === 'B' ? 'bg-[var(--background)] border border-[var(--border)] text-white' : 'text-[var(--text-sec)] hover:bg-white/5 opacity-70'}`}
        >
          <BookOpen className="w-4 h-4" /> Архів B: Методологія
        </button>
        <button 
          onClick={() => setActiveTab('C')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-widest rounded-lg transition-all ${activeTab === 'C' ? 'bg-[var(--background)] border border-[var(--border)] text-white' : 'text-[var(--text-sec)] hover:bg-white/5 opacity-70'}`}
        >
          <Presentation className="w-4 h-4" /> Архів C: Контекст для переговорів
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'A' && (
            <div className="space-y-12">
              <div className="bg-[#0f1826]/50 p-6 rounded-xl border border-[var(--border)] mb-8">
                <h3 className="font-display font-bold text-[var(--gold)] mb-2">Для аналітика/аудиту</h3>
                <p className="text-sm text-[var(--text-sec)]">Цей розділ містить повну таблицю Inputs vs Outcomes, списки DataSources з API-статусами, HEAL DLI деталі, THRIVE деталі, дані HeRAMS по закладах та регіональний розподіл кадрів.</p>
              </div>
              <HumanitarianDataSection />
            </div>
          )}

          {activeTab === 'B' && (
            <div className="space-y-12">
               <div className="bg-[#0f1826]/50 p-6 rounded-xl border border-[var(--border)] mb-8">
                <h3 className="font-display font-bold text-[var(--gold)] mb-2">Для аналітика/рецензента</h3>
                <p className="text-sm text-[var(--text-sec)]">Джерела для кожної метрики, формули DALY розрахунку, методологія тіньового сектору, застереження щодо якості даних та дати верифікації.</p>
              </div>
              <ContextMetrics />
              <MissingData />
            </div>
          )}

          {activeTab === 'C' && (
            <div className="space-y-12">
               <div className="bg-[#0f1826]/50 p-6 rounded-xl border border-[var(--border)] mb-8">
                <h3 className="font-display font-bold text-[var(--gold)] mb-2">Для керівника/донора</h3>
                <p className="text-sm text-[var(--text-sec)]">Killer quotes, Grand Bargain 3.0 деталі, FHIR R4 специфікації, порівняння з іншими країнами, повний ROI з припущеннями.</p>
              </div>
              <PerfectStorm />
              <BlendedFinanceModel />
              <FormalizationCost />
              <KeyFindings />
              <CommunicationStrategy />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ActivitySquare, ChevronRight } from 'lucide-react'
import { MasterDashboardView } from '@/components/views/master-dashboard-view'
import { L1StrategicView } from '@/components/views/l1-strategic-view'
import { L2OperationalView } from '@/components/views/l2-operational-view'
import { L3TacticalView } from '@/components/views/l3-tactical-view'
import { L4SolutionsView } from '@/components/views/l4-solutions-view'
import { L5DeltaView } from '@/components/views/l5-delta-view'
import { useLanguage } from '@/app/providers'
import { motion, AnimatePresence } from 'motion/react'

type ViewState = 'master-dashboard' | 'l1-strategic' | 'l2-operational' | 'l3-tactical' | 'l4-solutions' | 'l5-delta'

export default function Home() {
  const { t } = useLanguage()
  const [activeView, setActiveView] = useState<ViewState>('master-dashboard')

  const handleNav = (view: string) => {
    // Basic casting for demo boundaries
    if (['master-dashboard', 'l1-strategic', 'l2-operational', 'l3-tactical', 'l4-solutions', 'l5-delta'].includes(view)) {
      setActiveView(view as ViewState)
    }
  }

  const renderContent = () => {
    switch (activeView) {
      case 'master-dashboard':
        return <MasterDashboardView onNavigate={handleNav} />
      case 'l1-strategic':
        return <L1StrategicView onNavigate={handleNav} />
      case 'l2-operational':
        return <L2OperationalView onNavigate={handleNav} />
      case 'l3-tactical':
        return <L3TacticalView onNavigate={handleNav} />
      case 'l4-solutions':
        return <L4SolutionsView onNavigate={handleNav} />
      case 'l5-delta':
        return <L5DeltaView onNavigate={handleNav} />
      default:
        return <MasterDashboardView onNavigate={handleNav} />
    }
  }

  const getBreadcrumbs = () => {
    const sequence: { id: ViewState, label: string }[] = [
      { id: 'master-dashboard', label: 'MASTER' },
      { id: 'l1-strategic', label: 'STRATEGIC [L1]' },
      { id: 'l2-operational', label: 'OPERATIONAL [L2]' },
      { id: 'l3-tactical', label: 'TACTICAL [L3]' },
      { id: 'l4-solutions', label: 'SOLUTIONS [L4]' },
      { id: 'l5-delta', label: 'IMPACT [L5]' },
    ]

    const currentIndex = sequence.findIndex(item => item.id === activeView)
    
    return sequence.map((item, idx) => {
      const isPastOrPresent = idx <= currentIndex;
      const isCurrent = idx === currentIndex;
      if (!isPastOrPresent) return null;

      return (
        <div key={item.id} className="flex items-center">
          {idx > 0 && <ChevronRight className="w-3 h-3 text-[var(--text-sec)] mx-2" />}
          <button
            onClick={() => setActiveView(item.id)}
            className={`text-xs font-mono uppercase tracking-[0.1em] transition-colors ${
              isCurrent ? 'text-white font-bold' : 'text-[var(--text-sec)] hover:text-white'
            }`}
          >
            {item.label}
          </button>
        </div>
      )
    })
  }

  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col relative overflow-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--teal)]/5 blur-[150px]" />
         <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--red)]/5 blur-[150px]" />
      </div>

      <div className="relative z-10 w-full border-b border-white/5 bg-black/50 backdrop-blur-md">
        <Header />
      </div>

      <div className="flex-1 w-full max-w-6xl mx-auto px-6 lg:px-12 py-12 flex flex-col z-10 min-h-[70vh]">
        
        {/* Navigation Breadcrumbs overlay */}
        <div className="mb-12 border-b border-[var(--border)] pb-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-white flex items-center justify-center">
                 <ActivitySquare className="w-5 h-5 text-black" />
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--teal)]">
                 Feel Again <span className="text-[var(--text-sec)]">/</span> Foundation
              </div>
           </div>
           
           {/* Level Breadcrumbs */}
           <div className="flex flex-wrap items-center">
             {getBreadcrumbs()}
           </div>
        </div>

        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="w-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      <div className="relative z-10 mt-auto opacity-50 border-t border-[var(--border)] max-w-6xl mx-auto w-full px-6 lg:px-12 pt-8 pb-12">
        <Footer />
      </div>

    </main>
  )
}

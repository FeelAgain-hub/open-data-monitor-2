'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon, Globe } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/app/providers'
import { motion } from 'framer-motion'

import Image from 'next/image'

export function Header() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [time, setTime] = useState('21:25:03')

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
    const interval = setInterval(() => {
      const now = new Date()
      setTime(now.toLocaleTimeString('uk-UA', { hour12: false }))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return (
      <header className="hero-border-glow border-b border-[var(--border)] bg-[var(--card)] sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
             <div className="h-8 w-auto relative">
                {/* Fallback during hydration */}
                <div className="text-[var(--teal)] font-display font-bold text-lg tracking-wider">FEEL <span className="text-[var(--foreground)] font-light">Again</span></div>
             </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="hero-border-glow border-b border-[var(--border)] bg-[var(--card)] sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="relative h-7 w-28">
              <Image 
                src={theme === 'dark' ? "/brif/FEEL_logo.svg" : "/brif/FEEL_logo_dark.svg"} 
                alt="FEEL Again" 
                fill 
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4 border-l border-[var(--border)] pl-6">
            <span className="text-[10px] font-display font-medium text-[var(--text-sec)] tracking-[0.1em] uppercase">
              {t('dashboard_title')}
            </span>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded border border-green-500/20 bg-green-500/5">
              <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[8px] font-black text-green-500 uppercase tracking-widest">{t('secure')}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-[10px] font-mono text-[var(--text-sec)]">
          <div className="hidden xl:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-1.5 px-2 py-0.5 bg-blue-500/5 border border-blue-500/20 rounded text-blue-500 font-bold group relative cursor-help">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              SNAP: {time}
              <div className="absolute top-full right-0 mt-1 p-2 bg-[var(--card)] border border-[var(--border)] rounded-md shadow-xl opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all z-50 min-w-[240px] pointer-events-none">
                <div className="space-y-1.5 font-sans leading-tight">
                  <div className="text-[var(--gold)] font-black uppercase text-[8px] mb-1">Architecture verification</div>
                  <div className="flex justify-between border-b border-[var(--border)] pb-1">
                    <span>NSZU_ESOZ (Level 1)</span>
                    <span className="text-red-500">OFFLINE</span>
                  </div>
                  <div className="flex justify-between border-b border-[var(--border)] pb-1">
                    <span>HUMANITARIAN (Level 2)</span>
                    <span className="text-[var(--teal)]">LIVE SNAPSHOT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>FINANCIAL (Level 3)</span>
                    <span className="text-red-500">LOCKED</span>
                  </div>
                </div>
              </div>
            </div>
            
            <span className="opacity-30">|</span>
            
            <span className="font-bold tracking-tighter text-[9px] uppercase">{t('updated')}: {t('march')} 2026</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-1.5 rounded-lg border border-[var(--border)] hover:bg-[var(--background)] text-[var(--gold)] transition-all active:scale-95"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* Language Toggle */}
            <div className="flex items-center h-7 rounded-lg border border-[var(--border)] overflow-hidden bg-[var(--background)]">
              <button 
                onClick={() => setLanguage('UK')}
                className={`px-2.5 h-full text-[9px] font-bold transition-colors ${language === 'UK' ? 'bg-[var(--gold)] text-white' : 'hover:bg-opacity-50 text-[var(--text-sec)]'}`}
              >
                UA
              </button>
              <button 
                onClick={() => setLanguage('EN')}
                className={`px-2.5 h-full text-[9px] font-bold transition-colors ${language === 'EN' ? 'bg-[var(--gold)] text-white' : 'hover:bg-opacity-50 text-[var(--text-sec)]'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

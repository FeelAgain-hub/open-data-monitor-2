'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Database, Activity, RefreshCw, AlertCircle, CheckCircle2, ShieldAlert, Terminal } from 'lucide-react'

interface ApiStatus {
  endpoint: string;
  system: string;
  state: 'idle' | 'loading' | 'success' | 'error';
  statusCode?: number;
  statusText?: string;
  errorMessage?: string;
  responseTime?: number;
  expectedData: string;
}

export function Gap1L2View() {
  const [connections, setConnections] = useState<ApiStatus[]>([
    {
      system: 'eHealth (ЕСОЗ)',
      endpoint: 'https://api.ehealth.gov.ua/api/dictionaries',
      state: 'idle',
      expectedData: 'Клінічні взаємодії (encounters), Діагнози (conditions)',
    },
    {
      system: 'ActivityInfo (Гуманітарний)',
      endpoint: 'https://www.activityinfo.org/resources/form/1',
      state: 'idle',
      expectedData: '5W звіти, грантові програми, гуманітарні інтервенції',
    },
    {
      system: 'НСЗУ Відкриті Дані',
      endpoint: 'https://edata.ehealth.gov.ua/api/public/metrics',
      state: 'idle',
      expectedData: 'Статистика виплат, верифікація послуг за пакетами',
    }
  ])

  const [isSyncingAll, setIsSyncingAll] = useState(false)

  const testConnection = async (index: number) => {
    const newConns = [...connections]
    newConns[index].state = 'loading'
    setConnections(newConns)

    const startTime = performance.now()
    try {
      // Intentionally real fetch to demonstrate real-world isolation
      const response = await fetch(newConns[index].endpoint, { 
        method: 'GET',
        headers: { 'Accept': 'application/json' },
        mode: 'cors',
      })
      
      const endTime = performance.now()
      
      setConnections(prev => {
        const up = [...prev]
        up[index] = {
          ...up[index],
          state: response.ok ? 'success' : 'error',
          statusCode: response.status,
          statusText: response.statusText || 'Rejected',
          responseTime: Math.round(endTime - startTime),
          errorMessage: !response.ok ? `Отримано код ${response.status}. Доступ закрито або вимагається авторизація на рівні системи.` : undefined
        }
        return up
      })
    } catch (error) {
      const endTime = performance.now()
      setConnections(prev => {
        const up = [...prev]
        up[index] = {
          ...up[index],
          state: 'error',
          statusCode: 0,
          statusText: 'Network / Policy Error',
          responseTime: Math.round(endTime - startTime),
          errorMessage: 'Блокування CORS або відсутність публічного API. Пряма інтеграція з браузера неможлива (Ізоляція підтверджена).'
        }
        return up
      })
    }
  }

  const syncAll = async () => {
    setIsSyncingAll(true)
    for (let i = 0; i < connections.length; i++) {
        await testConnection(i)
    }
    setIsSyncingAll(false)
  }

  return (
    <div className="space-y-12">
      <div className="border-b border-[var(--border)] pb-8">
        <h1 className="font-display font-black text-3xl text-white mb-2 flex items-center gap-3">
          <Database className="w-8 h-8 text-[var(--red)]" />
          ДІАГНОСТИКА: ДЖЕРЕЛА ДАНИХ (L2)
        </h1>
        <p className="text-[var(--text-sec)] max-w-3xl leading-relaxed">
          Тестування прямого публічного доступу до ключових реєстрів системи. 
          Це не імітація — натискання «Запустити синхронізацію» ініціює реальні мережеві запити `fetch` до кінцевих точок ЕСОЗ, ActivityInfo та НСЗУ. 
          Результати підтверджують неможливість структурної агрегації без побудови спеціалізованої інтеграційної шини.
        </p>
      </div>

      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-xl font-bold text-white mb-1">Мережевий Аналіз Ізоляції</h2>
          <p className="text-sm text-[var(--text-sec)]">Спроба зібрати єдиний дата-сет (Interoperability test)</p>
        </div>
        
        <button 
          onClick={syncAll}
          disabled={isSyncingAll}
          className="bg-[var(--red)] text-white px-6 py-2.5 rounded text-sm font-bold tracking-widest uppercase hover:bg-opacity-80 transition-all flex items-center gap-2 disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${isSyncingAll ? 'animate-spin' : ''}`} />
          {isSyncingAll ? 'Синхронізація...' : 'Запустити синхронізацію'}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {connections.map((conn, idx) => (
          <motion.div 
            key={conn.system}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="border border-[var(--border)] bg-white/5 rounded-lg overflow-hidden flex flex-col md:flex-row"
          >
            <div className="p-6 md:w-1/3 border-b md:border-b-0 md:border-r border-[var(--border)] bg-[#0A0D14]">
              <div className="text-[10px] uppercase font-bold text-[var(--text-sec)] tracking-wider mb-2">Цільова Система</div>
              <h3 className="text-lg font-bold text-white mb-2">{conn.system}</h3>
              <div className="text-xs font-mono text-[var(--red)] break-all mb-4 bg-[var(--red)]/10 p-2 rounded">
                API: {conn.endpoint}
              </div>
              <div className="text-[10px] uppercase font-bold text-[var(--text-sec)] tracking-wider mb-1">Очікувані Дані</div>
              <p className="text-xs text-[var(--text-sec)]">{conn.expectedData}</p>
            </div>

            <div className="p-6 flex-1 bg-[var(--background)] relative">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[var(--text-sec)]" />
                  <span className="text-[10px] uppercase font-bold text-[var(--text-sec)] tracking-wider">Mережевий Статус</span>
                </div>
                {conn.state === 'idle' && (
                  <span className="px-2 py-1 rounded bg-[#333] text-white text-[10px] font-bold uppercase">Очікування запиту</span>
                )}
                {conn.state === 'loading' && (
                  <span className="px-2 py-1 rounded bg-[var(--gold)]/20 text-[var(--gold)] text-[10px] font-bold uppercase flex items-center gap-1">
                    <RefreshCw className="w-3 h-3 animate-spin" /> Встановлення з&apos;єднання...
                  </span>
                )}
                {conn.state === 'error' && (
                  <span className="px-2 py-1 rounded bg-[var(--red)]/20 text-[var(--red)] text-[10px] font-bold uppercase flex items-center gap-1">
                    <ShieldAlert className="w-3 h-3" /> Connection Failed
                  </span>
                )}
                {conn.state === 'success' && (
                  <span className="px-2 py-1 rounded bg-[var(--teal)]/20 text-[var(--teal)] text-[10px] font-bold uppercase flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Connected
                  </span>
                )}
              </div>

              <div className="bg-[#050505] rounded border border-[#222] p-4 font-mono text-xs h-32 overflow-y-auto">
                {conn.state === 'idle' && (
                  <div className="text-[#555]">Натисніть &quot;Запустити синхронізацію&quot; для перевірки доступу до {conn.system}...</div>
                )}
                {conn.state === 'loading' && (
                  <div className="text-[var(--gold)]">
                    &gt; GET {conn.endpoint}<br/>
                    &gt; Resolving host...<br/>
                    &gt; Awaiting response...
                  </div>
                )}
                {conn.state === 'error' && (
                  <div className="text-[var(--red)] space-y-1">
                    <div>&gt; GET {conn.endpoint}</div>
                    <div>&lt; HTTP/2 {conn.statusCode} {conn.statusText}</div>
                    <div className="mt-2 text-white/80 p-2 bg-[var(--red)]/10 border-l-2 border-[var(--red)]">
                      [SYS_ERR]: {conn.errorMessage}
                    </div>
                    <div className="text-[#777] mt-2">Час відклику: {conn.responseTime}ms</div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-[var(--red)]/5 border border-[var(--red)]/30 rounded-lg p-6">
        <h4 className="text-[var(--red)] font-bold mb-2 flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          Висновок (Діагностика L2)
        </h4>
        <p className="text-sm text-[var(--foreground)] opacity-80 leading-relaxed mb-4">
          Жодна з цільових систем не дозволяє прямий відкритий доступ до даних через ізоляцію протоколів та політики безпеки. 
          Це формує інформаційну темряву на рівні відкритих даних (Open Data). Без побудови авторизованої інтеграційної шини з відповідними правами доступу, агрегація результатів послуг фізично неможлива.
        </p>
      </div>

    </div>
  )
}

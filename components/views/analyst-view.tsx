'use client'
import { motion } from 'motion/react'
import { Activity, Database, GitMerge, Network } from 'lucide-react'

export function AnalystView() {
  return (
    <div className="w-full space-y-12">
      <div className="mb-8">
        <h2 className="font-display font-black text-3xl text-[var(--red)] tracking-tighter flex items-center gap-4">
          <Network className="w-8 h-8" />
          Деталізація: Аналітика (L2-L3)
        </h2>
        <p className="text-[var(--text-sec)] mt-2 font-mono text-sm uppercase tracking-widest">
          Джерела даних, ланцюг підзвітності, панель якості
        </p>
      </div>

      {/* L2A: Source Visibility Matrix */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <div className="card-canonical p-8 md:p-12">
           <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[2px] bg-[var(--red)]"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--red)]">L2: Джерела</span>
          </div>

          <h3 className="font-display font-bold text-2xl mb-8 flex items-center gap-3 text-white">
            <Database className="text-[var(--text-sec)]" /> ДЖЕРЕЛА ДАНИХ · видимість та доступність
          </h3>
          
          <div className="bg-[#0f1826]/50 p-6 rounded-lg font-mono text-sm border border-[var(--border)] overflow-x-auto whitespace-pre">
{`Система         Доступ    Покриття    Методологія
──────────────────────────────────────────────────────
OCHA FTS     🟢 Публічний  Нац. рівень  Фінансові потоки
World Bank   🟢 Публічний  Макро        ВВП/здоров'я
CommCare     🟡 API token  Партнери     5W (who/what/where)
KoBo         🟡 API token  Партнери     PHQ-9/GAD-7
ActivityInfo 🟡 Cluster   Кластер      5W агрегат
ЄСОЗ         🔴 МОЗ ліценз Клініки     ICD-10/сесії
НСЗУ реєстр  🔴 МОЗ ліценз Нац.рівень  Виплати/реєстр
Тіньовий     ⚫ Немає      8,000+ спец. Невідома`}
          </div>
        </div>
      </motion.div>

      {/* L2B: Accountability Chain */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <div className="card-canonical p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[2px] bg-[var(--gold)]"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--gold)]">L2: Підзвітність</span>
          </div>

          <h3 className="font-display font-bold text-2xl mb-8 flex items-center gap-3 text-white">
            <GitMerge className="text-[var(--text-sec)]" /> ЛАНЦЮГ ПІДЗВІТНОСТІ · де рвуться зв&apos;язки
          </h3>
          
          <div className="bg-[#0f1826]/50 p-6 rounded-lg font-mono text-sm border border-[var(--border)] overflow-x-auto whitespace-pre">
{`[Донор] → [Алокація] → [Постачальник] → [Сесія] → [Результат]

Що відомо:
✅ Донор: OCHA FTS публічно, USAID, UNICEF, EU
✅ Алокація: звіти по грантах (не реальний час)
❌ Постачальник: 117K mhGAP сертифікатів, 8.2K HeRAMS верифіковано. 8,000+ приватних не в реєстрі
❌ Сесія: CommCare/Kobo → ЄСОЗ = 0% автоматичної передачі
❌ Результат: PHQ-9/GAD-7/PCL-5 не агреговані

Наслідок: $1.87B в системі, виплат прив'язаних до результатів: $0`}
          </div>
        </div>
      </motion.div>

      {/* L3: Data Quality Dashboard */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
         <div className="card-canonical p-8 md:p-12 border-t-4 border-t-[var(--red)]">
           <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[2px] bg-[var(--red)]"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--red)]">L3: Якість та Методологія</span>
          </div>

          <h3 className="font-display font-bold text-2xl mb-8 flex items-center gap-3 text-white">
            <Activity className="text-[var(--text-sec)]" /> ДІАГНОСТИКА ДАНИХ · повна картина
          </h3>
          
          <div className="flex gap-4 mb-6">
            {['Методологія', 'API статус', 'Покриття', 'Розриви'].map(tab => (
              <div key={tab} className={`px-4 py-2 border border-[var(--border)] rounded text-xs uppercase tracking-widest font-bold ${tab === 'Методологія' ? 'bg-[var(--card)] text-white' : 'text-[var(--text-sec)] bg-white/5 opacity-50'}`}>
                {tab}
              </div>
            ))}
          </div>

          <div className="bg-[#0f1826]/50 p-6 rounded-lg font-mono text-sm border border-[var(--border)] overflow-x-auto whitespace-pre">
{`МЕТОДОЛОГІЧНИЙ РОЗРИВ:
PHQ-9   (0-27): депресія   → CommCare/KoBo
GAD-7   (0-21): тривога    → CommCare
PCL-5   (0-80): ПТСР       → деякі НГО

Конвертація: ❌ Немає стандарту  FEEL Again: FHIR R4 map

ПОКРИТТЯ ПО РЕГІОНАХ:
[Карта: де є дані, де тільки тіньові оцінки]`}
          </div>
        </div>
      </motion.div>

    </div>
  )
}

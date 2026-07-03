'use client'
import { motion } from 'motion/react'
import { GitCompare, TrendingDown, TrendingUp, RefreshCw } from 'lucide-react'

export function L5DeltaView({ onNavigate }: { onNavigate: (view: string) => void }) {
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
        <h1 className="font-display font-black text-4xl md:text-5xl text-white tracking-tighter mb-4 glow-white uppercase">
          Дельта <span className="text-[var(--teal)] font-light">Дашборд</span>
        </h1>
        <p className="font-mono text-[var(--text-sec)] tracking-widest uppercase mb-4 text-xs md:text-sm flex items-center gap-2">
          <GitCompare className="w-4 h-4" />
          Вплив (L5): Сценарне Моделювання
        </p>
        <p className="text-sm font-medium max-w-3xl pt-4 text-white/80 leading-relaxed">
          Всі лінії знову сходяться на одному екрані, порівнюючи стан бездіяльності (As-Is) та стан інсталяції програми (To-Be). Демонстрація відновлення вартості, локалізації та скорочення черги.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        
        {/* Scenario 1 */}
        <div className="flex flex-col md:flex-row border border-[var(--border)] bg-[#050505]">
           <div className="w-full md:w-1/3 p-6 border-b md:border-b-0 md:border-r border-[var(--border)] bg-[#0a0a0a]">
             <h3 className="text-xs font-mono uppercase text-[var(--text-sec)] mb-2">Метрика</h3>
             <div className="text-xl font-black text-white uppercase tracking-tight">Локалізація Інвестицій</div>
           </div>
           <div className="w-full md:w-1/3 p-6 border-b md:border-b-0 md:border-r border-[var(--border)] relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-[var(--red)]" />
             <h3 className="text-[10px] font-mono uppercase text-[var(--red)] mb-2 flex items-center gap-2"><TrendingDown className="w-3 h-3"/> As-Is (Бездіяльність)</h3>
             <div className="text-4xl font-black text-[var(--red)] mb-2">1-8%</div>
             <p className="text-xs text-[var(--text-sec)]">Утилізація 90%+ коштів в адміністративних ланцюгах. Гуманітарний burn rate $5M/міс без створення стійкого сектору.</p>
           </div>
           <div className="w-full md:w-1/3 p-6 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-[var(--teal)]" />
             <h3 className="text-[10px] font-mono uppercase text-[var(--teal)] mb-2 flex items-center gap-2"><TrendingUp className="w-3 h-3"/> To-Be (Feel Again)</h3>
             <div className="text-4xl font-black text-[var(--teal)] mb-2">25 - 70%</div>
             <p className="text-xs text-[var(--text-sec)]">Виконання цілі Grand Bargain. Пряме де-ризиковане фінансування. Розбудова приватного сектору замість короткострокових грантів.</p>
           </div>
        </div>

        {/* Scenario 2 */}
        <div className="flex flex-col md:flex-row border border-[var(--border)] bg-[#050505]">
           <div className="w-full md:w-1/3 p-6 border-b md:border-b-0 md:border-r border-[var(--border)] bg-[#0a0a0a]">
             <h3 className="text-xs font-mono uppercase text-[var(--text-sec)] mb-2">Метрика</h3>
             <div className="text-xl font-black text-white uppercase tracking-tight">Покриття Потреби</div>
           </div>
           <div className="w-full md:w-1/3 p-6 border-b md:border-b-0 md:border-r border-[var(--border)] relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-[var(--red)]" />
             <h3 className="text-[10px] font-mono uppercase text-[var(--red)] mb-2 flex items-center gap-2"><TrendingDown className="w-3 h-3"/> As-Is (Бездіяльність)</h3>
             <div className="text-4xl font-black text-[var(--red)] mb-2">8%</div>
             <p className="text-xs text-[var(--text-sec)]">13 років черги. 62.4 млн сеансів потреби проти 5 млн спроможності. Тіньовий сектор ізольовано.</p>
           </div>
           <div className="w-full md:w-1/3 p-6 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-[var(--gold)]" />
             <h3 className="text-[10px] font-mono uppercase text-[var(--gold)] mb-2 flex items-center gap-2"><RefreshCw className="w-3 h-3"/> To-Be (Feel Again)</h3>
             <div className="text-4xl font-black text-[var(--gold)] mb-2">Масштабування</div>
             <p className="text-xs text-[var(--text-sec)]">Інтеграція 10,000+ фахівців тіньового ринку через Технологічний Міст. Перекваліфікація (4.3). Легалізація пропозиції та прозорий Client Journey.</p>
           </div>
        </div>

        {/* Scenario 3 */}
        <div className="flex flex-col md:flex-row border border-[var(--border)] bg-[#050505]">
           <div className="w-full md:w-1/3 p-6 border-b md:border-b-0 md:border-r border-[var(--border)] bg-[#0a0a0a]">
             <h3 className="text-xs font-mono uppercase text-[var(--text-sec)] mb-2">Метрика</h3>
             <div className="text-xl font-black text-white uppercase tracking-tight">Економічний Вплив (ВВП)</div>
           </div>
           <div className="w-full md:w-1/3 p-6 border-b md:border-b-0 md:border-r border-[var(--border)] relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-[var(--orange)]" />
             <h3 className="text-[10px] font-mono uppercase text-[var(--orange)] mb-2 flex items-center gap-2"><TrendingDown className="w-3 h-3"/> As-Is (Бездіяльність)</h3>
             <div className="text-4xl font-black text-[var(--orange)] mb-2">- $6-8 млрд</div>
             <p className="text-xs text-[var(--text-sec)]">Щорічна втрата 4-5% ВВП. Відсутність капіталізації результатів реабілітації. Абсентеїзм та інвалідизація.</p>
           </div>
           <div className="w-full md:w-1/3 p-6 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-[var(--teal)]" />
             <h3 className="text-[10px] font-mono uppercase text-[var(--teal)] mb-2 flex items-center gap-2"><TrendingUp className="w-3 h-3"/> To-Be (Feel Again)</h3>
             <div className="text-4xl font-black text-[var(--teal)] mb-2">MHEI Index</div>
             <p className="text-xs text-[var(--text-sec)]">Запуск MHEI (4.5) та модельного проекту для ветеранів з НБУ (4.6). Зниження ставки фондування (4.7) при підтвердженні повернення до робочої ефективності.</p>
           </div>
        </div>

      </div>
    </div>
  )
}

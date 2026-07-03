'use client'
import { motion, AnimatePresence } from 'motion/react'
import { Landmark, Briefcase, Clock, Activity, AlertTriangle, MapPin, ChevronRight, BarChart3, PieChart, ShieldAlert } from 'lucide-react'
import { useState } from 'react'

export function L1StrategicView({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [activeSubView, setActiveSubView] = useState<'main' | 'anatomy' | 'coverage'>('main')

  return (
    <div className="w-full space-y-16 pb-32">
      {/* Header */}
      <div className="mb-16 border-b border-[var(--border)] pb-12">
        <button 
          onClick={() => onNavigate('master-dashboard')}
          className="text-[10px] font-mono text-[var(--text-sec)] uppercase hover:text-[var(--gold)] flex items-center gap-2 mb-8 transition-colors"
        >
          ← Повернутись на Головний Дашборд
        </button>
        <h1 className="font-display font-black text-6xl md:text-8xl text-white tracking-tighter mb-6 glow-white uppercase">
          Ціна <span className="text-[var(--gold)] font-light">Бездіяльності</span>
        </h1>
        <p className="font-mono text-[var(--text-sec)] tracking-widest uppercase mb-6 text-sm md:text-base">
          Стратегічний Рівень (L1)
        </p>
        <p className="text-lg font-medium max-w-4xl pt-6 text-white/90 leading-relaxed border-t border-[var(--border)]">
          Відкладання системної інтеграції Технологічного та Фінансового Плеча до відповіді на виклик у гуманітарному та клінічному секторі MHPSS — це не нейтральна позиція. Щомісяця, за мірою зростання потреб, спроможність сектору знижуватиметься, ефективність ресурсів залишатиметься невимірюваною, окрім регулярних конкретно вимірюваних економічних збитків.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {activeSubView === 'main' && (
          <motion.div 
            key="main"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Metric 1 */}
            <div 
              className="col-span-1 md:col-span-2 card-canonical p-6 relative border-t-2 border-t-[var(--red)] cursor-pointer group hover:bg-white/[0.02]"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-sec)]">Макроекономічні Втрати</h3>
                <Landmark className="w-5 h-5 text-[var(--red)]" />
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-black text-[var(--red)] glow-red">4-5<span className="text-3xl">%</span></span>
                <span className="text-xl font-bold text-white uppercase ml-2">ВВП</span>
                <span className="text-lg font-mono text-[var(--text-sec)] ml-2">~$6-8 млрд / рік</span>
              </div>
              <p className="text-xs text-[var(--text-sec)] leading-relaxed border-t border-[var(--border)] pt-4 mt-4">
                Втрати ВВП за мирних часів на рік внаслідок нелікованих ментальних розладів — знижена продуктивність, абсентеїзм, рання інвалідизація. Методології: Світового Банку, WHO cost-of-illness, LSE.
              </p>
            </div>

            {/* Metric 2 */}
            <div 
              onClick={() => setActiveSubView('anatomy')}
              className="card-canonical p-6 relative border-t-2 border-t-[var(--orange)] cursor-pointer group hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-sec)]">Ерозія Ресурсів</h3>
                <Briefcase className="w-5 h-5 text-[var(--orange)]" />
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-black text-[var(--orange)] glow-orange">$5<span className="text-3xl">м</span></span>
                <span className="text-sm font-bold text-[var(--text-sec)] uppercase">/ міс</span>
              </div>
              <div className="text-lg font-bold text-white mb-2 group-hover:text-[var(--teal)] transition-colors flex items-center gap-2">
                Анатомія $1.87B <ChevronRight className="w-4 h-4" />
              </div>
              <p className="text-xs text-[var(--text-sec)] leading-relaxed border-t border-[var(--border)] pt-4 mt-4">
                Ерозія гуманітарних ресурсів через відсутність системи верифікації результатів і доказової бази для пролонгації донорських грантів. Оцінка на основі поточного burn rate.
              </p>
            </div>

            {/* Metric 3 */}
            <div 
              onClick={() => onNavigate('l2-operational')}
              className="card-canonical p-6 relative border-t-2 border-t-[var(--teal)] cursor-pointer group hover:bg-white/[0.02] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-sec)]">Де губиться час</h3>
                  <Clock className="w-5 h-5 text-[var(--teal)]" />
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-black text-[var(--teal)] glow-teal">13</span>
                  <span className="text-sm font-bold text-[var(--text-sec)] uppercase">років черга</span>
                </div>
                <div className="text-lg font-bold text-white mb-2 group-hover:text-[var(--teal)] transition-colors flex items-center gap-2">
                  Перейти на Операційний Рівень <ChevronRight className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs text-[var(--text-sec)] leading-relaxed border-t border-[var(--border)] pt-4 mt-4">
                Необхідний час для охоплення прогнозованої кількості потреб. 3,9 млн осіб × 16 сеансів (WHO-протокол) / 4000 фахівців по 1200 годин на рік.
              </p>
            </div>

            {/* Metric 4 */}
            <div 
              onClick={() => setActiveSubView('coverage')}
              className="card-canonical p-6 relative border-t-2 border-t-[var(--red)] cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-sec)]">Охоплення Потреби</h3>
                <Activity className="w-5 h-5 text-[var(--red)]" />
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-black text-[var(--red)] glow-red">8<span className="text-3xl">%</span></span>
                <span className="text-sm font-mono text-[var(--text-sec)]">/ 0.28% факт</span>
              </div>
              <div className="text-lg font-bold text-white mb-2 group-hover:text-[var(--teal)] transition-colors flex items-center gap-2">
                Звідки 8%? <ChevronRight className="w-4 h-4" />
              </div>
              <p className="text-xs text-[var(--text-sec)] leading-relaxed border-t border-[var(--border)] pt-4 mt-4">
                Поточне покриття клінічної потреби системою формалізованих послуг.
              </p>
            </div>

            {/* Metric 5 */}
            <div 
              className="card-canonical p-6 relative border-t-2 border-t-white"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-sec)]">Диспропорції Бюджету</h3>
                <PieChart className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-black text-white glow-white">&gt;50<span className="text-3xl">%</span></span>
              </div>
              <div className="text-lg font-bold text-[var(--text-sec)] mb-2">Витрачається на стаціонари</div>
              <p className="text-xs text-[var(--text-sec)] leading-relaxed border-t border-[var(--border)] pt-4 mt-4">
                Утримуються стаціонарні заклади «старого зразка» замість амбулаторних та громадських послуг, яких потребують 71% клієнтів.
              </p>
            </div>

            {/* Metric 6 */}
            <div 
              className="col-span-1 md:col-span-2 card-canonical p-6 relative border-t-2 border-t-[var(--gold)]"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-sec)]">Локалізація Інвестицій</h3>
                <MapPin className="w-5 h-5 text-[var(--gold)]" />
              </div>
              <div className="flex items-center gap-8">
                <span className="text-6xl font-black text-[var(--gold)] glow-gold">1-8<span className="text-4xl">%</span></span>
                <div>
                  <div className="text-xl font-bold text-white mb-2">Збереження (Ціль Grand Bargain: 25%)</div>
                  <p className="text-xs text-[var(--text-sec)] leading-relaxed">
                    Рівень локалізації гуманітарних бюджетів на місцевих провайдерів. Різниця — це утилізовані операційні витрати та втрачений потенціал розбудови місцевого сектору.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* SUB VIEW: Anatomy of 1.87B */}
        {activeSubView === 'anatomy' && (
          <motion.div
            key="anatomy"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <button 
              onClick={() => setActiveSubView('main')}
              className="text-xs font-mono text-[var(--teal)] uppercase hover:text-white flex items-center gap-2"
            >
              ← Повернутись до Ціни бездіяльності
            </button>
            <div className="card-canonical p-8 border-t-2 border-t-[var(--orange)]">
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-[var(--orange)]" />
                Анатомія $1.87B
              </h2>
              <p className="text-[var(--text-sec)] text-sm leading-relaxed mb-8 max-w-2xl">
                Детальний розбір втрат та ерозії грантових ресурсів. Відсутність верифікованих показників впливу та прозорої звітності призводить до незворотного утилізування коштів.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-white/5 border border-white/10 flex flex-col justify-between">
                  <span className="text-[10px] uppercase font-bold text-[var(--text-sec)] mb-2">Донорські Транші</span>
                  <span className="text-2xl font-black text-white">100% Вхідного Потоку</span>
                </div>
                <div className="p-4 bg-[var(--red)]/10 border border-[var(--red)]/30 flex flex-col justify-between">
                  <span className="text-[10px] uppercase font-bold text-[var(--red)] mb-2">Операційні Втрати (Рівень 2-3)</span>
                  <span className="text-2xl font-black text-[var(--red)]">-45% до 60%</span>
                  <span className="text-xs text-white/50 mt-2">Витрати на посередників, адміністрування, подвійний облік.</span>
                </div>
                <div className="p-4 bg-[var(--gold)]/10 border border-[var(--gold)]/30 flex flex-col justify-between">
                  <span className="text-[10px] uppercase font-bold text-[var(--gold)] mb-2">Локалізація (Grand Bargain дійсність)</span>
                  <span className="text-2xl font-black text-[var(--gold)]">Тільки 1-8%</span>
                  <span className="text-xs text-white/50 mt-2">Доходить до локальних провайдерів та пацієнта.</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* SUB VIEW: Where 0.28% comes from */}
        {activeSubView === 'coverage' && (
          <motion.div
            key="coverage"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <button 
              onClick={() => setActiveSubView('main')}
              className="text-xs font-mono text-[var(--teal)] uppercase hover:text-white flex items-center gap-2"
            >
              ← Повернутись до Ціни бездіяльності
            </button>
            <div className="card-canonical p-8 border-t-2 border-t-[var(--red)]">
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter flex items-center gap-3">
                <ShieldAlert className="w-8 h-8 text-[var(--red)]" />
                Звідки 8%?
              </h2>
              <p className="text-[var(--text-sec)] text-sm leading-relaxed mb-8 max-w-3xl">
                Анатомія дефіциту. Розрахунок демонструє розрив між епідеміологічною потребою, формальною ємністю системи та фактично задокументованими результатами.
              </p>
              
              <div className="space-y-8">
                {/* 1. Потреба */}
                <div className="bg-[#111] p-6 border border-white/10">
                  <span className="text-[10px] font-mono text-[var(--text-sec)] uppercase tracking-widest block mb-1">1. Епідеміологічний Базовий Рівень</span>
                  <span className="text-lg font-bold text-white uppercase">Загальна клінічна потреба:</span>
                  <div className="text-3xl font-black text-white mt-2">62.4 млн сеансів</div>
                  <p className="text-xs text-[var(--text-sec)] mt-2">Оцінка необхідного обсягу втручань для 3.9 млн бенефіціарів (в середньому 16 сесій на базовий протокол).</p>
                </div>

                {/* 2. Спроможність */}
                <div className="bg-[#151515] p-6 border border-l-4 border-l-[var(--orange)] border-white/10">
                  <span className="text-[10px] font-mono text-[var(--orange)] uppercase tracking-widest block mb-1">2. Максимальна Теоретична Ємність</span>
                  <span className="text-lg font-bold text-white uppercase">Спроможність формалізованого сектору:</span>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-3xl font-black text-[var(--orange)] glow-orange">8%</span>
                    <span className="text-sm font-mono text-[var(--text-sec)]">(~5.0 млн сеансів)</span>
                  </div>
                  <div className="text-xs font-mono text-[var(--text-sec)] bg-black/50 p-2 mt-3 inline-block">Формула: 4,000 фахівців × 1200 год / 62.4 млн</div>
                  <p className="text-xs text-[var(--text-sec)] mt-3">Навіть при 100% завантаженні (без відпусток та втрат часу на адміністрування), наявний пул державних та звітуючих фахівців може покрити лише 8% від потреби. Решта навантаження припадає на тіньовий сектор (5k-15k фахівців).</p>
                </div>

                {/* 3. Фактичне Покриття */}
                <div className="bg-[#050505] p-6 border border-l-4 border-l-[var(--red)] border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <ShieldAlert className="w-24 h-24 text-[var(--red)]" />
                  </div>
                  <span className="text-[10px] font-mono text-[var(--red)] uppercase tracking-widest block mb-1">3. Трекабельний Ресурс</span>
                  <span className="text-lg font-bold text-white uppercase">Фактичне задокументоване покриття:</span>
                  <div className="flex items-center gap-4 mt-2 mb-4">
                    <span className="text-5xl font-black text-[var(--red)] glow-red">0.28%</span>
                    <span className="text-sm font-mono text-[var(--text-sec)]">(~175 тис сеансів)</span>
                  </div>
                  <p className="text-xs text-[var(--text-sec)] mt-2">
                    Реальна кількість офіційно зафіксованих та проведених сеансів у реєстрах, що завершилися без drop-off. Місткість інституцій втрачається у ланцюгах адміністрування, маршрутизації та в статистичній темряві.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

'use client'
import { motion, AnimatePresence } from 'motion/react'
import { Cpu, ChevronRight, GraduationCap, Building2, TrendingUp, ShieldCheck, Percent, Banknote } from 'lucide-react'
import { useState } from 'react'

export function L4SolutionsView({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [activeSubView, setActiveSubView] = useState<'main' | 'detail'>('main')
  const [selectedProtocol, setSelectedProtocol] = useState<string | null>(null)

  const protocols = [
    {
      id: "4.3",
      title: "Перекваліфікація",
      desc: "Запуск перекваліфікації та 8 потоків створення приватного сектору.",
      icon: GraduationCap,
      color: "--teal"
    },
    {
      id: "4.4",
      title: "Центр Експертизи",
      desc: "Створення центру експертизи (з КНУ ім. Шевченка та Банківським коледжем) з розробки оцінки впливу на ВВП, змін до регуляторних політик, розповсюдження ефективних методологій та досвіду.",
      icon: Building2,
      color: "--orange"
    },
    {
      id: "4.5",
      title: "Індекс Економіки",
      desc: "Розробка та запуск MHEI (Mental Health Economic Index).",
      icon: TrendingUp,
      color: "--gold"
    },
    {
      id: "4.6",
      title: "Ветеранський Проект",
      desc: "Модельний проект надання допомоги ветеранам та членам їхніх родин для банківського сектору.",
      icon: ShieldCheck,
      color: "--teal"
    },
    {
      id: "4.7",
      title: "Фондування (Зниження ставки)",
      desc: "Фондування ветеранів із зниженням ставки після реінтеграції: діагностика → реабілітація → повернення до робочої ефективності → відновлення → сталий розвиток.",
      icon: Percent,
      color: "--orange"
    },
    {
      id: "4.8",
      title: "Пряме Фінансування",
      desc: "Доведення прямого фінансування до 25% мінімум (цільовий показник 70%) та досягнення цілі Grand Bargain з першого дня. Відкриває шлях до де-ризикованого фінансування від ~80 глобальних донорів.",
      icon: Banknote,
      color: "--red",
      justification: "Ціль щодо 25% закріплена у глобальній угоді Grand Bargain (показник localization), до якого прагнуть міжнародні донори. Потенціал бази у 80+ донорів сформований на основі реєстрів OCHA та пулу підписантів Grand Bargain."
    }
  ]

  return (
    <div className="w-full space-y-12 pb-24">
      <div className="mb-12 border-b border-[var(--border)] pb-8">
        <button 
          onClick={() => onNavigate('master-dashboard')}
          className="text-[10px] font-mono text-[var(--text-sec)] uppercase hover:text-[var(--teal)] flex items-center gap-2 mb-8 transition-colors"
        >
          ← Повернутись на Головний Дашборд
        </button>
        <h1 className="font-display font-black text-4xl md:text-5xl text-[var(--teal)] tracking-tighter mb-4 glow-teal uppercase">
          Рішення <span className="text-white font-light">Програми</span>
        </h1>
        <p className="font-mono text-[var(--text-sec)] tracking-widest uppercase mb-4 text-xs md:text-sm">
          Solutions (L4): Технологічний міст та фінансове плече
        </p>
        <p className="text-sm font-medium max-w-3xl pt-4 text-white/80 leading-relaxed">
          Blended finance від Feel Again разом з НБУ. Технологічний міст між потребою, клієнтом, провайдером та донором. Ці рішення відповідають на кожен ідентифікований розрив з тактичного та операційного рівнів.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {activeSubView === 'main' && (
          <motion.div 
            key="main"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {protocols.map((protocol, index) => (
              <div 
                key={protocol.id}
                onClick={() => { setSelectedProtocol(protocol.id); setActiveSubView('detail') }}
                className="card-canonical p-6 relative border-t-2 cursor-pointer group hover:bg-white/[0.02]"
                style={{ borderTopColor: `var(${protocol.color})` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono font-bold text-[var(--text-sec)]">
                    [ Protocol {protocol.id} ]
                  </span>
                  <protocol.icon className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: `var(${protocol.color})` }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-[var(${protocol.color})] transition-colors">
                  {protocol.title}
                </h3>
                <p className="text-xs text-[var(--text-sec)] leading-relaxed mt-auto border-t border-white/5 pt-3 line-clamp-2">
                  {protocol.desc}
                </p>
              </div>
            ))}

            {/* Transition to Delta */}
            <div 
              onClick={() => onNavigate('l5-delta')}
              className="col-span-1 md:col-span-2 mt-8 card-canonical p-6 relative border-t-2 border-t-white cursor-pointer group hover:bg-white/[0.02]"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-sec)]">Перехід на Рівень Впливу</h3>
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-black text-white uppercase tracking-tighter mb-2 group-hover:text-[var(--teal)] transition-colors flex items-center justify-between">
                <span>Дельта-Дашборд: Вплив Програми</span>
                <ChevronRight className="w-5 h-5" />
              </div>
              <p className="text-xs text-[var(--text-sec)] leading-relaxed border-t border-[var(--border)] pt-4 mt-4">
                Сценарне моделювання. Порівняння параметричних значень системи управління &quot;До&quot; (бездіяльність) та &quot;Після&quot; (інсталяція програми).
              </p>
            </div>
          </motion.div>
        )}

        {/* SUB VIEW: Detail */}
        {activeSubView === 'detail' && selectedProtocol && (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <button 
              onClick={() => setActiveSubView('main')}
              className="text-xs font-mono text-[var(--teal)] uppercase hover:text-white flex items-center gap-2"
            >
              ← Повернутись до списку рішень
            </button>
            {protocols.filter(p => p.id === selectedProtocol).map(protocol => (
              <div key={protocol.id} className="card-canonical p-8 border-t-2" style={{ borderTopColor: `var(${protocol.color})` }}>
                <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter flex items-center gap-3">
                  <protocol.icon className="w-8 h-8" style={{ color: `var(${protocol.color})` }} />
                  {protocol.id} {protocol.title}
                </h2>
                <div className="text-[var(--text-sec)] text-sm leading-relaxed mb-4 p-6 bg-white/5 border border-white/10 rounded-sm">
                  {protocol.desc}
                </div>
                {/* @ts-ignore - justification might not exist on all protocols currently */}
                {protocol.justification && (
                  <div className="mt-4 p-4 border border-[var(--border)] bg-[#111] text-xs font-mono text-[var(--text-sec)]">
                    <span className="text-[var(--teal)] uppercase font-bold block mb-1">ОБГРУНТУВАННЯ ТА ДЖЕРЕЛО:</span>
                    {/* @ts-ignore */}
                    {protocol.justification}
                  </div>
                )}
                <div className="text-xs font-mono text-white/40 mt-8 pt-4 border-t border-[var(--border)]">
                  Очікує на додавання індикативних даних. Будь готовий до завантаження інформації.
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

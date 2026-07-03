'use client'
import { motion } from 'motion/react'
import { ServerCrash, Split, Wallet, Landmark, Activity, MapPin, UserX, BarChart4, Handshake } from 'lucide-react'

export function OperationalLandscapeView() {
  const inconsistencies = [
    {
      id: "01",
      title: "Цифрова Ізоляція",
      desc: "Інформаційні медичні системи (МІС) не є інтероперабельними, дані про пацієнтів та послуги фрагментовані.",
      icon: ServerCrash,
      color: "--orange"
    },
    {
      id: "02",
      title: "Системний Розрив",
      desc: "Гуманітарні ініціативи та клінічні результати існують у паралельних системах координат без спільного знаменника.",
      icon: Split,
      color: "--teal"
    },
    {
      id: "03",
      title: "Фінансова Непрозорість",
      desc: "Паралельні фінансові потоки (донорські, державні) не мають єдиного обліку, що унеможливлює розрахунок ефективності.",
      icon: Wallet,
      color: "--red"
    },
    {
      id: "04",
      title: "Бюджетний Перекіс",
      desc: "Фінанси спрямовуються переважно на застарілі стаціонарні заклади замість амбулаторних та превентивних послуг у громадах.",
      icon: Landmark,
      color: "--gold"
    },
    {
      id: "05",
      title: "Дефіцит Спроможності",
      desc: "Реальний масштаб епідеміологічного виклику багаторазово перевищує наявні інституційні та людські ресурси.",
      icon: Activity,
      color: "--teal"
    },
    {
      id: "06",
      title: "Блокада Локалізації",
      desc: "Майже повна відсутність механізмів прямого фінансування локальних провайдерів (Humanitarian Reset Gap).",
      icon: MapPin,
      color: "--orange"
    },
    {
      id: "07",
      title: "Фрагментований Шлях",
      desc: "Розірваний клієнтський шлях (Client Journey) — відсутність наскрізного супроводу від першого контакту до результату.",
      icon: UserX,
      color: "--red"
    },
    {
      id: "08",
      title: "Атрофія M&E",
      desc: "Моніторинг та оцінка неефективні: метрики успіху не узгоджені, збираються вручну або не вимірюються взагалі.",
      icon: BarChart4,
      color: "--text-sec"
    },
    {
      id: "09",
      title: "Операційний Рутинізм",
      desc: "Координація між гуманітарними штабами та провайдерами відбувається через ручні процеси замість цифрової взаємодії.",
      icon: Handshake,
      color: "--white"
    }
  ]

  return (
    <div className="w-full space-y-12">
      <div className="mb-12">
        <h1 className="font-display font-black text-4xl md:text-5xl text-[var(--teal)] tracking-tighter mb-4 glow-teal uppercase">
          Операційні <span className="text-white font-light">Невідповідності</span>
        </h1>
        <p className="font-mono text-[var(--text-sec)] tracking-widest uppercase mb-4 text-xs md:text-sm">
          Операційний Ландшафт: Структурні Розриви
        </p>
        <p className="text-sm font-medium max-w-2xl border-t border-[var(--border)] pt-4 mt-4 text-white/80 leading-relaxed">
          Професійний аналіз дев&apos;яти ключових структурних невідповідностей системи. Ці розриви створюють <strong>параліч операційної ефективності</strong> та перешкоджають сталому розвитку сектора MHPSS.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {inconsistencies.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white/5 border border-[var(--border)] p-6 rounded-none hover:bg-white/10 transition-colors group flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-mono font-bold text-[var(--text-sec)]">
                [ GAP {item.id} ]
              </span>
              <item.icon className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: `var(${item.color === '--white' ? '--text-sec' : item.color})` }} />
            </div>
            <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
              {item.title}
            </h3>
            <p className="text-xs text-[var(--text-sec)] leading-relaxed mt-auto border-t border-white/5 pt-3">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

'use client'
import { motion } from 'motion/react'
import { AlertTriangle, Clock, Activity, Landmark, MapPin } from 'lucide-react'

export function StrategicLandscapeView() {
  return (
    <div className="w-full space-y-12">
      <div className="mb-12">
        <h1 className="font-display font-black text-4xl md:text-5xl text-[var(--teal)] tracking-tighter mb-4 glow-teal uppercase">
          Масштаб <span className="text-white font-light">Виклику</span>
        </h1>
        <p className="font-mono text-[var(--text-sec)] tracking-widest uppercase mb-4 text-xs md:text-sm">
          Стратегічний Ландшафт: Жорстка Статистика
        </p>
        <p className="text-sm font-medium max-w-2xl border-t border-[var(--border)] pt-4 mt-4 text-white/80 leading-relaxed">
          Сухі факти та перевірені дані. Співвідношення доступних ресурсів до реальної макроекономічної та епідеміологічної потреби країни, що підтверджує <strong>системний розрив спроможності</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Metric 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="col-span-1 md:col-span-2 lg:col-span-1 card-canonical p-6 relative border-t-2 border-t-[var(--red)]"
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-sec)]">Макроекономічні Втрати</h3>
            <Landmark className="w-5 h-5 text-[var(--red)]" />
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl font-black text-[var(--red)] glow-red">4-5<span className="text-3xl">%</span></span>
          </div>
          <div className="text-xl font-bold text-white mb-2">Втрата ВВП щорічно</div>
          <p className="text-xs text-[var(--text-sec)] leading-relaxed border-t border-[var(--border)] pt-4 mt-4">
            Втрати економіки (близько <strong>$6-8 мільярдів</strong> щорічно) формуються через відсутність лікування психічних розладів та подальше зниження продуктивності праці.
          </p>
        </motion.div>

        {/* Metric 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="card-canonical p-6 relative border-t-2 border-t-[var(--orange)]"
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-sec)]">Час на відновлення</h3>
            <Clock className="w-5 h-5 text-[var(--orange)]" />
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl font-black text-[var(--orange)] glow-orange">12.5</span>
            <span className="text-sm font-bold text-[var(--text-sec)] uppercase">років</span>
          </div>
          <div className="text-xl font-bold text-white mb-2">На покриття потреби</div>
          <p className="text-xs text-[var(--text-sec)] leading-relaxed border-t border-[var(--border)] pt-4 mt-4">
            Саме стільки часу знадобиться для покриття поточних прогнозованих клінічних випадків за умов збереження <em>існуючої операційної спроможності</em> та рівня фінансування.
          </p>
        </motion.div>

        {/* Metric 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="card-canonical p-6 relative border-t-2 border-t-[var(--teal)]"
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-sec)]">Рівень проникнення</h3>
            <Activity className="w-5 h-5 text-[var(--teal)]" />
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl font-black text-[var(--teal)] glow-teal">0.28<span className="text-3xl">%</span></span>
          </div>
          <div className="text-xl font-bold text-white mb-2">Охоплення потреби</div>
          <p className="text-xs text-[var(--text-sec)] leading-relaxed border-t border-[var(--border)] pt-4 mt-4">
            Частка реальної клінічної потреби, що покривається наразі повністю формалізованими інституційними сервісами (без урахування тіньового чи дотаційного сектору).
          </p>
        </motion.div>

        {/* Metric 4 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="col-span-1 md:col-span-2 lg:col-span-2 card-canonical p-6 relative border-t-2 border-t-white"
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-sec)]">Структура Бюджету</h3>
            <AlertTriangle className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <span className="text-6xl font-black text-white glow-white">55<span className="text-3xl">%</span></span>
            </div>
            <div>
              <div className="text-xl font-bold text-white mb-2">Фінансування стаціонару</div>
              <p className="text-xs text-[var(--text-sec)] leading-relaxed">
                Понад половина бюджету на ментальне здоров&apos;я спрямовується на застарілу або неефективну інфраструктуру стаціонарних закладів, замість фінансування сучасних амбулаторних та превентивних сервісів у громадах.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Metric 5 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="card-canonical p-6 relative border-t-2 border-t-[var(--gold)]"
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-sec)]">Цільова Локалізація</h3>
            <MapPin className="w-5 h-5 text-[var(--gold)]" />
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl font-black text-[var(--gold)] glow-gold">1-8<span className="text-3xl">%</span></span>
          </div>
          <div className="text-xl font-bold text-white mb-2">Локалізація бюджетів</div>
          <p className="text-xs text-[var(--text-sec)] leading-relaxed border-t border-[var(--border)] pt-4 mt-4">
            Частка гуманітарних коштів, що безпосередньо досягає локальних виконавців (провайдерів послуг), при міжнародному цільовому стандарті у <strong>25%</strong>.
          </p>
        </motion.div>

      </div>
    </div>
  )
}

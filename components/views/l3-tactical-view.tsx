'use client'
import { motion, AnimatePresence } from 'motion/react'
import { Database, LinkIcon, Search, Eye, BarChart, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export function L3TacticalView({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [activeSubView, setActiveSubView] = useState<'main' | 'matrix' | 'gap' | 'visibility'>('main')

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
        <h1 className="font-display font-black text-4xl md:text-5xl text-[var(--orange)] tracking-tighter mb-4 glow-orange uppercase">
          Тактичний <span className="text-white font-light">Рівень</span>
        </h1>
        <p className="font-mono text-[var(--text-sec)] tracking-widest uppercase mb-4 text-xs md:text-sm">
          Аналітика (L3): Пошук залежностей та розробка рішень
        </p>
        <p className="text-sm font-medium max-w-3xl pt-4 text-white/80 leading-relaxed">
          Перехід від процесу до даних. Фрагментованість та Неповнота даних створюють сектор статистичної тіні. Не підзвітні за клінічними критеріями фахівці працюють в інформаційній темряві без доступу до офіційних або донорських ресурсів.
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
            {/* 3.1: Карта видимості даних */}
            <div 
              onClick={() => setActiveSubView('visibility')}
              className="card-canonical p-6 relative border-t-2 border-t-white cursor-pointer group hover:bg-white/[0.02]"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-sec)]">Інформаційна Темрява</h3>
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-black text-white uppercase tracking-tighter mb-2 group-hover:text-[var(--teal)] transition-colors flex items-center justify-between">
                <span>Карта видимості даних</span>
                <ChevronRight className="w-5 h-5" />
              </div>
              <p className="text-xs text-[var(--text-sec)] leading-relaxed border-t border-[var(--border)] pt-4 mt-4">
                Сірі та чорні зони системи, де дані зникають або не збираються. Показує відсоток даних, які доходять до керівників для прийняття рішень (видимість ~15% епідеміологічної потреби в ЕСОЗ). <span className="block mt-1 text-[10px] text-[var(--text-sec)]/50">*Джерело: Порівняння даних НСЗУ щодо звернень з оціночною потребою ВООЗ.</span>
              </p>
            </div>

            {/* 3.2: Матриця видимості по джерелах */}
            <div 
              onClick={() => setActiveSubView('matrix')}
              className="card-canonical p-6 relative border-t-2 border-t-[var(--orange)] cursor-pointer group hover:bg-white/[0.02]"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-sec)]">Аналітика потоків</h3>
                <Search className="w-5 h-5 text-[var(--orange)]" />
              </div>
              <div className="text-2xl font-black text-white uppercase tracking-tighter mb-2 group-hover:text-[var(--teal)] transition-colors flex items-center justify-between">
                <span>Матриця видимості по джерелах</span>
                <ChevronRight className="w-5 h-5" />
              </div>
              <p className="text-xs text-[var(--text-sec)] leading-relaxed border-t border-[var(--border)] pt-4 mt-4">
                Аналіз прозорості та формалізації різних джерел: Державні реєстри (формалізовано, немає звіту по результатах), Донори (ізольовано), Тіні (невидимо). <span className="block mt-1 text-[10px] text-[var(--text-sec)]/50">*Методологія: Системний аналіз сумісності потоків даних та залученості фахівців.</span>
              </p>
            </div>

            {/* 3.3: Розрив у ланцюгу від донора до послуги */}
            <div 
              onClick={() => setActiveSubView('gap')}
              className="card-canonical p-6 relative border-t-2 border-t-[var(--gold)] cursor-pointer group hover:bg-white/[0.02]"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-sec)]">Фінансовий маршрут</h3>
                <LinkIcon className="w-5 h-5 text-[var(--gold)]" />
              </div>
              <div className="text-2xl font-black text-[var(--gold)] uppercase tracking-tighter mb-2 group-hover:text-white transition-colors flex items-center justify-between">
                <span>Розрив у ланцюгу &quot;Донор → Послуга&quot;</span>
                <ChevronRight className="w-5 h-5 text-[var(--gold)] group-hover:text-white" />
              </div>
              <p className="text-xs text-[var(--text-sec)] leading-relaxed border-t border-[var(--border)] pt-4 mt-4">
                Локалізація коштів зупиняється на посередниках. Гроші виділяються на людину, але &quot;з&apos;їдаються&quot; транзакційними витратами (лише 1-8% досягає фахівця). <span className="block mt-1 text-[10px] text-[var(--text-sec)]/50">*Джерело: Дані аналізу Grand Bargain (UNICEF/OCHA 2023).</span>
              </p>
            </div>

            {/* 3.4: Аналітична панель якості (leads to L4 Solutions) */}
            <div 
              onClick={() => onNavigate('l4-solutions')}
              className="card-canonical p-6 relative border-t-2 border-t-[var(--teal)] cursor-pointer group hover:bg-white/[0.02]"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-sec)]">Перехід на Рівень Рішень</h3>
                <BarChart className="w-5 h-5 text-[var(--teal)]" />
              </div>
              <div className="text-2xl font-black text-white uppercase tracking-tighter mb-2 group-hover:text-[var(--teal)] transition-colors flex items-center justify-between">
                <span>Аналітична панель якості даних</span>
                <ChevronRight className="w-5 h-5" />
              </div>
              <p className="text-xs text-[var(--text-sec)] leading-relaxed border-t border-[var(--border)] pt-4 mt-4">
                Починаючи від бенефіціара-клієнта-пацієнта. Визначення єдиного стандарту якості. З цього випливають Застосовані Рішення Програми (L4).
              </p>
            </div>
          </motion.div>
        )}

        {/* SUB VIEW: Matrix */}
        {activeSubView === 'matrix' && (
          <motion.div
            key="matrix"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <button 
              onClick={() => setActiveSubView('main')}
              className="text-xs font-mono text-[var(--teal)] uppercase hover:text-white flex items-center gap-2"
            >
              ← Повернутись
            </button>
            <div className="card-canonical p-8 border-t-2 border-t-white">
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter flex items-center gap-3">
                <Search className="w-8 h-8 text-white" />
                Матриця видимості по джерелах
              </h2>
              <div className="overflow-x-auto text-xs font-mono border border-[var(--border)]">
                <table className="w-full text-left">
                  <thead className="bg-[#111] text-[var(--text-sec)]">
                    <tr>
                      <th className="p-4 border-b border-[var(--border)]">Сектор / Джерело</th>
                      <th className="p-4 border-b border-[var(--border)]">Фокус Даних</th>
                      <th className="p-4 border-b border-[var(--border)]">Рівень Видимості</th>
                      <th className="p-4 border-b border-[var(--border)]">Проблема</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border-b border-[var(--border)] text-white">Державний (ЕСОЗ)</td>
                      <td className="p-4 border-b border-[var(--border)]">Статистика епізодів</td>
                      <td className="p-4 border-b border-[var(--border)] text-[var(--orange)]">Високий (кількісний)</td>
                      <td className="p-4 border-b border-[var(--border)]">Відсутність якісних оцінок результатів лікування (впливу).</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-[var(--border)] text-white">Гуманітарний (Донори)</td>
                      <td className="p-4 border-b border-[var(--border)]">Охоплення бенефіціарів</td>
                      <td className="p-4 border-b border-[var(--border)] text-[var(--teal)]">Середній (звітний)</td>
                      <td className="p-4 border-b border-[var(--border)]">Ізольовані дашборди; дані не перехрещуються з ЕСОЗ.</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-white">Приватний Сектор / Тіньовий</td>
                      <td className="p-4">Комерційні транзакції</td>
                      <td className="p-4 text-[var(--red)] glow-red font-bold">Нульовий (0%)</td>
                      <td className="p-4">10,000+ фахівців не надають жодних епідеміологічних даних державі.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* SUB VIEW: Gap */}
        {activeSubView === 'gap' && (
          <motion.div
            key="gap"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <button 
              onClick={() => setActiveSubView('main')}
              className="text-xs font-mono text-[var(--teal)] uppercase hover:text-white flex items-center gap-2"
            >
              ← Повернутись
            </button>
             <div className="card-canonical p-8 border-t-2 border-t-[var(--gold)] group/card relative">
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter flex items-center gap-3">
                <LinkIcon className="w-8 h-8 text-[var(--gold)]" />
                Розрив у ланцюгу &quot;Донор → Послуга&quot;
              </h2>
              <div className="absolute top-8 right-8 opacity-0 group-hover/card:opacity-100 transition-opacity">
                <div className="text-[10px] text-[var(--text-sec)] max-w-[200px] text-right font-mono">
                  *Джерело: Дані аналізу Grand Bargain (UNICEF/OCHA 2023) щодо транзакційних втрат у багаторівневому субгрантингу (multi-tier sub-contracting).
                </div>
              </div>
              <div className="bg-[#050505] border border-[var(--border)] p-6 flex flex-col pt-8">
                 <div className="flex justify-between items-center bg-[#111] p-4 text-xs font-bold font-mono">
                    <span className="text-[var(--gold)]">$100 (Транш)</span>
                    <span>→ Глобальний Штаб</span>
                 </div>
                 <div className="flex justify-between items-center bg-[#11d111] p-4 text-xs font-bold font-mono opacity-80" style={{ backgroundColor: '#111' }}>
                    <span className="text-white">$75 (Залишок) <span className="text-[10px] text-[var(--text-sec)] font-normal ml-2 block sm:inline mt-1 sm:mt-0">-25% (Overhead)</span></span>
                    <span>→ Національний Посередник</span>
                 </div>
                 <div className="flex justify-between items-center bg-[#111] p-4 text-xs font-bold font-mono opacity-60">
                    <span className="text-white">$40 (Залишок) <span className="text-[10px] text-[var(--text-sec)] font-normal ml-2 block sm:inline mt-1 sm:mt-0">-35% (Логістика/Адмін)</span></span>
                    <span>→ Регіональний Хаб</span>
                 </div>
                 <div className="flex justify-between items-center bg-[#111] p-4 text-xs font-bold font-mono border-t border-[var(--red)] border-dashed mt-4 pt-6 group cursor-help relative" title="Тіло послуги (гонорар фахівця) становить від 1% до 8% від первинно виділеного бюджету.">
                    <span className="text-[var(--red)] glow-red">$1-$8 (Дійшло) <span className="text-[10px] text-[var(--red)]/50 font-normal ml-2 block sm:inline mt-1 sm:mt-0">-32% (Локальні податки/Операційка)</span></span>
                    <span className="text-[var(--red)]">→ Провайдер Послуги / Пацієнт</span>
                 </div>
                 <div className="text-xs text-[var(--text-sec)] text-center mt-8 pt-4 border-t border-white/5">
                    Висновок: Інституційна недовіра та відсутність цифрового моста (прямої валідації якості наданої послуги) змушують донорів використовувати довгі ланцюги повірених, що утилізують основну масу бюджету.
                 </div>
              </div>
            </div>
          </motion.div>
        )}
        {/* SUB VIEW: Visibility Map */}
        {activeSubView === 'visibility' && (
          <motion.div
            key="visibility"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <button 
              onClick={() => setActiveSubView('main')}
              className="text-xs font-mono text-[var(--teal)] uppercase hover:text-white flex items-center gap-2"
            >
              ← Повернутись
            </button>
            <div className="card-canonical p-8 border-t-2 border-t-white relative group/map">
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter flex items-center gap-3">
                <Eye className="w-8 h-8 text-white" />
                Карта Видимості Даних
              </h2>
              <div className="absolute top-8 right-8 opacity-0 group-hover/map:opacity-100 transition-opacity z-10 hidden md:block">
                <div className="text-[10px] text-[var(--text-sec)] max-w-[250px] text-right font-mono p-2 bg-black/80 border border-white/10 backdrop-blur-md">
                  *Джерела: Оцінка покриття ЕСОЗ (НСЗУ 2023), звіти OCHA 5W, та моделювання розміру тіньового ринку (дослідження Gradus Research & CMHC).
                </div>
              </div>
              <p className="text-[var(--text-sec)] text-sm mb-8 max-w-3xl">
                Фрагментованість та неповнота даних створюють сектор статистичної тіні. Фахівці не підзвітні за клінічними критеріями. Відсотки відображають частку від загальної епідеміологічної потреби, яка потрапляє у відповідне середовище.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                <div className="bg-[#111] p-6 border border-[var(--border)] text-center group cursor-help relative hover:bg-[#1a1a1a] transition-colors" title="Методологія: Кількість зареєстрованих звернень до державних медичних закладів та законтрактованих НСЗУ провайдерів (в т.ч. за пакетами ПМД) поділена на загальну епідеміологічну потребу.">
                  <div className="text-4xl font-black text-white mb-2 border-b border-dashed border-white/30 inline-block pb-1">15%</div>
                  <div className="text-xs font-mono uppercase text-[var(--text-sec)] mt-2">Видима Зона (ЕСОЗ)</div>
                  <div className="mt-4 text-[10px] text-white/50 leading-relaxed max-w-[200px] mx-auto">Дані доступні державі, але обмежені кількісною статистикою послуг.</div>
                  <div className="absolute inset-x-0 bottom-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="text-[8px] font-mono text-[var(--teal)] uppercase tracking-widest">Джерело: Дані НСЗУ</span>
                  </div>
                </div>
                <div className="bg-[#151515] p-6 border border-[var(--border)] text-center group cursor-help relative hover:bg-[#202020] transition-colors" title="Методологія: Аналіз кількості бенефіціарів, охоплених звітами гуманітарних кластерів (OCHA 5W), які не перетинаються або перетинаються частково з ЕСОЗ.">
                  <div className="text-4xl font-black text-[var(--orange)] mb-2 border-b border-dashed border-[var(--orange)]/30 inline-block pb-1">25%</div>
                  <div className="text-xs font-mono uppercase text-[var(--text-sec)] mt-2">Сіра Зона (Донори/НУО)</div>
                  <div className="mt-4 text-[10px] text-white/50 leading-relaxed max-w-[200px] mx-auto">Дані існують в ізольованих реєстрах та гуманітарних кластерах без наскрізної інтеграції.</div>
                  <div className="absolute inset-x-0 bottom-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="text-[8px] font-mono text-[var(--orange)] uppercase tracking-widest">Джерело: OCHA 5W / Гуманітарні звіти</span>
                  </div>
                </div>
                <div className="bg-[#050505] p-6 border border-[var(--border)] text-center relative overflow-hidden group cursor-help hover:bg-[#111] transition-colors" title="Методологія: Оцінка залишкової потреби (100% - 15% - 25%), що покривається приватними фахівцями без податкової або епідеміологічної звітності.">
                  <div className="text-4xl font-black text-[var(--red)] glow-red mb-2 border-b border-dashed border-[var(--red)]/30 inline-block pb-1">60%</div>
                  <div className="text-xs font-mono uppercase text-[var(--red)] mt-2">Чорна Зона (Тіньовий Ринок)</div>
                  <div className="mt-4 text-[10px] text-white/50 leading-relaxed max-w-[200px] mx-auto">Повний інформаційний вакуум. Приватна практика, що не залишає епідеміологічного сліду у системі управління державою.</div>
                  <div className="absolute inset-x-0 bottom-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="text-[8px] font-mono text-[var(--red)] uppercase tracking-widest">Джерело: Моделювання тіньового сектору</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

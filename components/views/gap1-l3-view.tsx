'use client'

import { motion } from 'motion/react'
import { Link2, ArrowRight, XCircle, AlertTriangle, ShieldCheck, FileText } from 'lucide-react'

export function Gap1L3View() {
  return (
    <div className="space-y-12">
      <div className="border-b border-[var(--border)] pb-8">
        <h1 className="font-display font-black text-3xl text-white mb-2 flex items-center gap-3">
          <Link2 className="w-8 h-8 text-[var(--red)]" />
          ЛАНЦЮГ ПІДЗВІТНОСТІ (L3)
        </h1>
        <p className="text-[var(--text-sec)] max-w-3xl leading-relaxed">
          Моніторинг та Оцінювання (M&E) результатів надання допомоги. Як системний розрив знищує здатність донорів та держави відстежити кінцевий вплив на ментальне здоров&apos;я пацієнта.
        </p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute top-[60px] left-8 right-8 h-1 bg-[var(--border)] -z-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
          
          {/* Step 1 */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-col">
            <div className="h-12 w-12 rounded bg-[var(--background)] border-2 border-[var(--border)] flex items-center justify-center mb-4 text-white text-xl font-black shadow-lg">1</div>
            <div className="bg-white/5 border border-[var(--border)] rounded-lg p-5 flex-1 relative group hover:border-white/20 transition-colors">
              <h3 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">Алокація Ресурсів</h3>
              <p className="text-xs text-[var(--text-sec)] mb-4">Донори або НСЗУ виділяють фінансування на програми MHPSS.</p>
              <div className="flex items-center gap-2 mt-auto">
                <ShieldCheck className="w-4 h-4 text-[var(--teal)]" />
                <span className="text-[10px] text-[var(--teal)] font-bold">Traceable (Public)</span>
              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col">
            <div className="h-12 w-12 rounded bg-[var(--background)] border-2 border-[var(--border)] flex items-center justify-center mb-4 text-white text-xl font-black shadow-lg">2</div>
            <div className="bg-white/5 border border-[var(--border)] rounded-lg p-5 flex-1 relative group hover:border-white/20 transition-colors">
              <h3 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">Провайдер / Тренінг</h3>
              <p className="text-xs text-[var(--text-sec)] mb-4">Організації наймають фахівців або проводять сертифікацію (mhGAP).</p>
              <div className="flex items-center gap-2 mt-auto">
                <ShieldCheck className="w-4 h-4 text-[var(--teal)]" />
                <span className="text-[10px] text-[var(--teal)] font-bold">Traceable (Reports)</span>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col">
            <div className="h-12 w-12 rounded bg-[var(--background)] border-2 border-[var(--border)] flex items-center justify-center mb-4 text-white text-xl font-black shadow-lg">3</div>
            <div className="bg-white/5 border border-[var(--border)] rounded-lg p-5 flex-1 relative group hover:border-white/20 transition-colors">
              <h3 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">Клінічна Взаємодія</h3>
              <p className="text-xs text-[var(--text-sec)] mb-4">Проведення сесій. Фіксуються в CommCare/Kobo без передачі в ЄСОЗ.</p>
              <div className="flex items-center gap-2 mt-auto">
                <AlertTriangle className="w-4 h-4 text-[var(--gold)]" />
                <span className="text-[10px] text-[var(--gold)] font-bold">Fragmented (Silos)</span>
              </div>
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col">
            <div className="h-12 w-12 rounded bg-[var(--red)]/20 border-2 border-[var(--red)] flex items-center justify-center mb-4 text-[var(--red)] text-xl font-black shadow-lg shadow-[var(--red)]/20">4</div>
            <div className="bg-[var(--red)]/5 border border-[var(--red)] border-dashed rounded-lg p-5 flex-1 relative">
              <h3 className="font-bold text-[var(--red)] mb-2 text-sm uppercase tracking-wider">Клінічний Результат</h3>
              <p className="text-xs text-[var(--text-sec)] mb-4 text-white/80">Оцінка покращення стану (PHQ-9/GAD/PCL). Жодного агрегованого зв&apos;язку з витраченими коштами.</p>
              <div className="flex items-center gap-2 mt-auto">
                <XCircle className="w-4 h-4 text-[var(--red)]" />
                <span className="text-[10px] text-[var(--red)] font-bold">Black Box (Lost)</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[var(--border)]">
        <div className="p-6 bg-white/5 border border-[var(--border)] rounded-lg">
          <h4 className="text-[10px] uppercase font-bold text-[var(--text-sec)] tracking-widest mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4" /> Наслідки для Держави та EСОЗ
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-[var(--red)] font-black mt-0.5">•</span>
              <p className="text-sm text-[var(--foreground)] opacity-90 leading-relaxed">
                <strong className="text-white font-bold block mb-1">Медична сліпота</strong>
                Лікарні та НСЗУ не бачать гуманітарних інтервенцій для пацієнта (понад 120 організацій).
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--red)] font-black mt-0.5">•</span>
              <p className="text-sm text-[var(--foreground)] opacity-90 leading-relaxed">
                <strong className="text-white font-bold block mb-1">Дублювання послуг</strong>
                Державний бюджет може витрачатися на лікування тих, хто вже пройшов курс через гуманітарні фонди.
              </p>
            </li>
          </ul>
        </div>

        <div className="p-6 bg-white/5 border border-[var(--border)] rounded-lg">
          <h4 className="text-[10px] uppercase font-bold text-[var(--text-sec)] tracking-widest mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4" /> Наслідки для Донорів
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-[var(--red)] font-black mt-0.5">•</span>
              <p className="text-sm text-[var(--foreground)] opacity-90 leading-relaxed">
                <strong className="text-white font-bold block mb-1">DLI Ризики (World Bank)</strong>
                Фінансування Disbursement-Linked Indicators неможливо виправдати через відсутність верифікації в ЄСОЗ.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--red)] font-black mt-0.5">•</span>
              <p className="text-sm text-[var(--foreground)] opacity-90 leading-relaxed">
                <strong className="text-white font-bold block mb-1">Оплата процесу, а не впливу</strong>
                Донори змушені купувати ітерації (&quot;кількість сесій&quot;), не маючи змоги вимагати підтвердженого DALY впливу.
              </p>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

'use client'

import { ThemeProvider } from 'next-themes'
import { createContext, useContext, useEffect, useState } from 'react'

type Language = 'UK' | 'EN'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Record<string, string>> = {
  UK: {
    dashboard_title: 'Стан сектору MHPSS в Україні.',
    system_time: 'ЧАС_СИСТЕМИ',
    updated: 'ОНОВЛЕНО',
    march: 'БЕРЕЗЕНЬ',
    secure: 'ЗАХИЩЕНО',
    test_bus: 'Тестувати Digital Bus (Вертифікація Даних)',
    testing: 'Тестування Цифрової Шини...',
    state_level: 'Рівень 1: Державний Контур (ЕСОЗ)',
    hum_level: 'Рівень 2: Гуманітарна Шина',
    funds_level: 'Рівень 3: Фінансовий Контур (Світовий Банк)',
    malfunction: 'ПЕРЕШКОДА СИНХРОНІЗАЦІЇ',
    active: 'ЛОКАЛЬНО АКТИВНО',
    locked: 'БЛОКОВАНО ВІДСУТНІСТЮ ШИНИ',
    beneficiaries: 'Бенефіціари',
    sessions: 'Сесії',
    outcomes: 'Результати',
    coverage: 'Охоплення',
    oblasts: 'Областей',
    perfect_storm: 'Масштаб кризи',
    executive_digest: 'Executive Digest — 5 ключових висновків',
    macro_gap_title: 'MHPSS Macro Gap & Blended Finance Justification',
    formalization_title: 'Вартість легалізації практики: €979/міс (65% штраф)',
    key_findings_title: 'Ключові стратегічні висновки',
    logic_chain_scale: '1. МАСШТАБ ТА ЕПІДЕМІОЛОГІЯ',
    logic_chain_impossibility: '2. СИСТЕМНА НЕМОЖЛИВІСТЬ',
    logic_chain_gap: '3. ІНФРАСТРУКТУРНИЙ РОЗРИВ',
    logic_chain_solution: '4. РІШЕННЯ: ПЛАТФОРМНІ РЕЙКИ',
    infrastructure_imperative: 'Інфраструктурний імператив',
    infrastructure_imperative_text: 'Бракує не фінансування чи волі, а «цифрової сантехніки»: реєстру, метрування сесій та платіжного шлюзу. Це рейки, а не потяги.',
    dli_alignment: 'DLI Alignment (WB THRIVE)',
    dli_alignment_text: 'FEEL Again робить результати THRIVE PforR вимірюваними. $41 млн бюджету Component 4 потребує верифікованого пайплайну результатів.',
    stigma_barrier: 'Стигма та бар\'єри доступу',
    stigma_barrier_text: '71% українців потребують підтримки, але лише 17% звернулись. Програма «Ти Як?» створила попит, FEEL Again будує шлях до надавача.',
    complementarity_pillar: 'Принцип компліментарності',
    complementarity_pillar_text: 'FEEL Again не замінює існуючі програми (HEAL, THRIVE, Ти Як?), а надає інфраструктуру, що робить їхній вплив видимим та стійким.',
    visual_identity_desc: 'Візуальна мова інституційної довіри: серйозна інфраструктура для серйозної кризи. Нуль стокових фото, лише верифіковані дані.',
    communication_strategy: 'Комунікаційна Стратегія',
    communication_summary_title: 'Контроль Наративу',
    communication_summary_text: 'FEEL Again — це рейки (Rails), а не потяги (Trains). Ми не надаємо терапію, ми робимо її знаходжуваною та підзвітною.',
    one_sentence_pitch: 'FEEL Again будує фінансову та дата-інфраструктуру, що з\'єднує попит і пропозицію — роблячи невидиме видимим.',
    governance_sovereignty: 'Суверенітет Даних',
    governance_sovereignty_text: 'Власність України над даними сектору MHPSS через інтеграцію з ЕСОЗ (HL7 FHIR R4).',
    verification_chain: 'Verification Chain',
    verification_chain_text: 'Кожне число в дашборді простежується до Канонічного Датасету (Doc 4). Консервативні прогнози — єдині прогнози.',
    missing_middle: 'Missing Middle',
    missing_middle_desc: 'КРИТИЧНИЙ ПРОБІЛ ДАНИХ',
    real_throughput: 'REAL THROUGHPUT',
    real_throughput_desc: 'Нульова видимість фактичного навантаження на фахівців в ЕСОЗ.',
    mhgap_conversion_label: 'MHGAP CONVERSION',
    mhgap_conversion_desc: 'Скільки з 100K+ навчених реально практикують? Оцінка <10%.',
    shadow_volume: 'SHADOW VOLUME',
    shadow_volume_desc: 'Точний обсяг приватного ринку, що не потрапляє в офіційний моніторинг.',
    who_standards: 'За стандартами ВООЗ',
    metric_label: 'Метрика / Компонент',
    value_label: 'Значення',
    unit_label: 'Одиниця',
    path_label: 'Шлях розрахунку',
    source_label: 'Джерело',
    macro_need: 'МАКРО-ПОТРЕБА',
    critical_deficit: 'КРИТИЧНИЙ ДЕФІЦИТ',
    analytical_justification: 'Аналітичне обґрунтування',
    total_beneficiaries_label: '1. Очікувані бенефіціари',
    sessions_per_ben_label: '2. Сесій на бенефіціара',
    total_session_demand_label: '3. Загальний попит на сесії',
    current_capacity_label: '4. Поточна реальна потужність',
    total_session_gap_label: '5. Загальний дефіцит сесій',
    blended_finance_rate_label: '6. Ставка Blended Finance',
    blended_finance_need_label: '7. Потреба Blended Finance',
    hours_need_title: '62.4 МЛН КЛІНІЧНИХ ГОДИН ПОТРЕБИ',
    hours_need_text: '3.9 млн людей потребують втручання × 16 сесій. При поточному реєстрі у 4,000 фахівців — беклог (черга) становить 10.4 років.',
    shadow_market_title: '€2.5-4.1 МЛРД — ТІНЬОВИЙ РИНОК СУБСИДУЄ СИСТЕМУ',
    shadow_market_text: 'Потенціал ринку психічного здоров’я України оцінюється у €2.5-4.1 млрд. Тіньовий сектор перевищує офіційну гуманітарну допомогу у 110 разів.',
    heal_overperformance_title: 'HEAL UKRAINE: СТРУКТУРНИЙ РОЗРИВ ДАНИХ',
    heal_overperformance_text: 'Проєкт HEAL показав результат у 125%. Проте 0% верифіковано в ЕСОЗ. Без Цифрової Шини інвестиції позбавлені доказовості.',
    budget_inversion_title: '89% БЮДЖЕТУ — СТАЦІОНАР, 11% ВИПАДКІВ',
    budget_inversion_text: '89% коштів НСЗУ на психічне здоров’я йде на стаціонари, які обслуговують лише 11% пацієнтів.',
    mhgap_conversion_title: '<10% mhGAP Conversion',
    infrastructure_title: 'Infrastructure Gap',
    clinical_need_label: 'CLINICAL NEED (L2-L4)',
    beneficiary_vol: '3.9M Бенефіціарів',
    capacity_deficit_label: 'CAPACITY BACKLOG',
    pot_value: '€2.5-4.1B',
    at_risk_label: '9.6M AT RISK',
    clinical_hours_label: '62.4M THERAPY HOURS',
    shadow_subsidy_title: 'Shadow Market Subsidy',
    shadow_subsidy_text: 'Приватний ринок де-факто субсидує державну систему. Фінансовий бар\'єр формалізації (65% втрата доходу) блокує масштабування.',
    budget_inversion_summary_title: 'Budget Inversion',
    budget_inversion_summary_text: '89% бюджету йде на стаціонари, замість амбулаторної допомоги. Це критичне пляшкове горлечко на рівні ПМГ.',
    formalization_breakdown_title: 'Формалізація: Декомпозиція Витрат (€979/міс)',
    formalization_breakdown_desc: 'Прямі податки та ЄСВ (€207) складають лише частину проблеми. Opportunity Cost (€772) — час, витрачений на бюрократію замість практики — є основним бар\'єром масштабування.',
    direct_taxes_label: 'Прямі витрати (Подат., Бух.)',
    opportunity_cost_label: 'Втрачена вигода (Час, Ефект.)',
    data_gap_title: 'Data Visibility Gap',
    data_gap_text: 'Відсутність верифікованих метрик на амбулаторному рівні блокує залучення капіталу та розрахунок ROI для донорів.',
    hero_description: 'Цифрова координація між державними системами охорони здоров\'я, місцевими НУО та міжнародними донорами для подолання розриву в охопленні послугами ментального здоров\'я в Україні.',
    impact_velocity: 'Швидкість впливу',
    increase_reporting: 'Приріст цифрової звітності через гуманітарний міст з березня 2026 року.',
    beneficiaries_desc: 'Загальна кількість унікальних пацієнтів, зареєстрованих у гуманітарній цифровій інфраструктурі.',
    reached: 'ДОСЯГНУТО',
    target: 'ЦІЛЬ',
    oblasts_desc: 'Географічне охоплення НУО, які активно звітують про сесії через API.',
    outcome_quality: 'Якість результатів',
    outcome_desc: 'Клінічна верифікація зареєстрованих результатів ментального здоров\'я (PHQ-9 / GAD-7).',
    sync_warning: 'ЗБІЙ СИНХРОНІЗАЦІЇ',
    sync_desc: 'Верифікація потребує двосторонньої синхронізації з державними серверами. Наразі працює на основі ізольованої самозвітності.',
  },
  EN: {
    dashboard_title: 'MHPSS Sector Status in Ukraine.',
    system_time: 'SYSTEM_TIME',
    updated: 'UPDATED',
    march: 'MARCH',
    secure: 'SECURE',
    test_bus: 'Test Digital Bus (Verification)',
    testing: 'Testing Digital Bus...',
    state_level: 'Level 1: State Core (ESOZ)',
    hum_level: 'Level 2: Humanitarian Bus',
    funds_level: 'Level 3: World Bank Resources',
    malfunction: 'SYNC MALFUNCTION',
    active: 'LOCALLY ACTIVE',
    locked: 'LOCKED BY GAP',
    beneficiaries: 'Beneficiaries',
    sessions: 'Sessions',
    outcomes: 'Outcomes',
    coverage: 'Coverage',
    oblasts: 'Oblasts',
    perfect_storm: 'Scale of Crisis',
    executive_digest: 'Executive Digest — 5 Key Findings',
    macro_gap_title: 'MHPSS Macro Gap & Blended Finance Justification',
    formalization_title: 'Formalization Cost: €979/mo (65% tax penalty)',
    key_findings_title: 'Key Strategic Findings',
    logic_chain_scale: '1. SCALE & EPIDEMIOLOGY',
    logic_chain_impossibility: '2. SYSTEMIC IMPOSSIBILITY',
    logic_chain_gap: '3. INFRASTRUCTURE GAP',
    logic_chain_solution: '4. SOLUTION: PLATFORM RAILS',
    infrastructure_imperative: 'Infrastructure Imperative',
    infrastructure_imperative_text: 'What is missing is not funding or will, but "digital plumbing": registry, session metering, and payment gateway. These are rails, not trains.',
    dli_alignment: 'DLI Alignment (WB THRIVE)',
    dli_alignment_text: "FEEL Again makes THRIVE PforR results countable. Component 4's $41M budget requires a verified pipeline of outcomes.",
    stigma_barrier: 'Stigma & Access Barriers',
    stigma_barrier_text: "71% of Ukrainians report needing support, yet only 17% have sought it. 'How are you?' created demand; FEEL Again builds the pathway.",
    complementarity_pillar: 'Complementarity Principle',
    complementarity_pillar_text: 'FEEL Again does not replace existing programs (HEAL, THRIVE, Ty Yak?); it provides the infrastructure that makes their impact visible.',
    visual_identity_desc: 'Visual language of institutional credibility: serious infrastructure for a serious crisis. Zero stock photos, only verified data.',
    communication_strategy: 'Communication Strategy',
    communication_summary_title: 'Narrative Control',
    communication_summary_text: 'FEEL Again consists of Rails, not Trains. We do not provide therapy; we make it findable and accountable.',
    one_sentence_pitch: 'FEEL Again builds the financial and data infrastructure connecting supply and demand — making the invisible visible.',
    governance_sovereignty: 'Data Sovereignty',
    governance_sovereignty_text: 'Ukrainian ownership of MHPSS sector data through integration with ESOZ (HL7 FHIR R4).',
    verification_chain: 'Verification Chain',
    verification_chain_text: 'Every number in this dashboard traces back to the Canonical Dataset (Doc 4). Conservative projections are the only projections.',
    missing_middle: 'Missing Middle',
    missing_middle_desc: 'CRITICAL DATA GAP',
    real_throughput: 'REAL THROUGHPUT',
    real_throughput_desc: 'Zero visibility of actual clinical load in ESOZ.',
    mhgap_conversion_label: 'MHGAP CONVERSION',
    mhgap_conversion_desc: 'How many of 100K+ trained are actually practicing? Estimate <10%.',
    shadow_volume: 'SHADOW VOLUME',
    shadow_volume_desc: 'Exact volume of the private market remains unmonitored.',
    who_standards: 'Based on WHO Standards',
    metric_label: 'Metric / Component',
    value_label: 'Value',
    unit_label: 'Unit',
    path_label: 'Calculation Path',
    source_label: 'Source',
    macro_need: 'MACRO-NEED',
    critical_deficit: 'CRITICAL DEFICIT',
    analytical_justification: 'Analytical Justification',
    total_beneficiaries_label: '1. Expected Beneficiaries',
    sessions_per_ben_label: '2. Sessions per Beneficiary',
    total_session_demand_label: '3. Total Session Demand',
    current_capacity_label: '4. Current Real Capacity',
    total_session_gap_label: '5. Total Session Gap',
    blended_finance_rate_label: '6. Blended Finance Rate',
    blended_finance_need_label: '7. Blended Finance Need',
    hours_need_title: '62.4M CLINICAL HOURS OF NEED',
    hours_need_text: '3.9M people require intervention × 16 sessions. With the current registry of 4,000 specialists, the backlog (queue) is 10.4 years.',
    shadow_market_title: '€2.5-4.1B — SHADOW MARKET SUBSIDIZES THE SYSTEM',
    shadow_market_text: 'The mental health market potential in Ukraine is estimated at €2.5-4.1B. The shadow sector exceeds official humanitarian aid by 110 times.',
    heal_overperformance_title: 'HEAL UKRAINE: 125% TARGET ACHIEVEMENT',
    heal_overperformance_text: 'The HEAL project showed a result of 125%. However, 0% of these services are verified in ESOZ. Without a digital bridge, investments remain unproven.',
    budget_inversion_title: '89% BUDGET — INPATIENT, 11% CASES',
    budget_inversion_text: '89% of NHSU mental health funds go to inpatient care, serving only 11% of patients.',
    mhgap_conversion_title: '<10% mhGAP Conversion',
    infrastructure_title: 'Infrastructure Gap',
    clinical_need_label: 'CLINICAL NEED (L2-L4)',
    beneficiary_vol: '3.9M Beneficiaries',
    capacity_deficit_label: 'CAPACITY BACKLOG',
    pot_value: '€2.5-4.1B',
    at_risk_label: '9.6M AT RISK',
    clinical_hours_label: '62.4M THERAPY HOURS',
    shadow_subsidy_title: 'Shadow Market Subsidy',
    shadow_subsidy_text: 'The private market de facto subsidizes the state system. The financial barrier to formalization (65% income loss) blocks scaling.',
    budget_inversion_summary_title: 'Budget Inversion',
    budget_inversion_summary_text: '89% of the budget goes to inpatient care instead of outpatient support. This is a critical bottleneck at the PHC level.',
    formalization_breakdown_title: 'Formalization: Cost Breakdown (€979/mo)',
    formalization_breakdown_desc: 'Direct taxes and ESV (€207) are only part of the problem. Opportunity Cost (€772) — time spent on bureaucracy instead of practice — is the main scaling barrier.',
    direct_taxes_label: 'Direct Costs (Taxes, Acc)',
    opportunity_cost_label: 'Opportunity Costs (Time, Efficiency)',
    data_gap_title: 'Data Visibility Gap',
    data_gap_text: 'The lack of verified metrics at the outpatient level blocks capital attraction and ROI calculation for donors.',
    hero_description: 'Digital coordination between State health systems, local NGOs, and international donors to close the mental health coverage gap in Ukraine.',
    impact_velocity: 'Impact Velocity',
    increase_reporting: 'Increase in digital data reporting via humanitarian bridge since MAR 2026.',
    beneficiaries_desc: 'Total unique patients registered within the humanitarian digital infrastructure.',
    reached: 'REACHED',
    target: 'TARGET',
    oblasts_desc: 'Geographic coverage of NGOs actively reporting sessions via API.',
    outcome_quality: 'Outcome Quality',
    outcome_desc: 'Clinical verification of reported mental health outcomes (PHQ-9 / GAD-7).',
    sync_warning: 'Sync Warning',
    sync_desc: 'Verification requires 2-way sync with State servers. Currently operating on isolated self-reports.',
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('UK')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedLang = localStorage.getItem('mhpss_lang') as Language
    if (savedLang && (savedLang === 'UK' || savedLang === 'EN')) {
      if (savedLang !== language) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLanguageState(savedLang)
      }
    }
    setMounted(true)
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('mhpss_lang', lang)
  }

  const t = (key: string) => {
    if (!mounted) return key
    return translations[language][key] || key
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" storageKey="mhpss_dark">
      <LanguageContext.Provider value={{ language, setLanguage, t }}>
        {mounted ? children : <div className="opacity-0">{children}</div>}
      </LanguageContext.Provider>
    </ThemeProvider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    // Fallback for SSR/Prerendering
    return {
      language: 'UK' as Language,
      setLanguage: () => {},
      t: (key: string) => key
    }
  }
  return context
}

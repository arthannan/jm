import { Section, SectionHeader } from '@/components/ui/Section'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

const COMPARISON = [
  { label: 'Стоимость в месяц', staff: '~60 000 ₽ + налоги', assistant: 'от 15 000 ₽', better: 'assistant' },
  { label: 'Подбор и онбординг', staff: 'Недели поиска', assistant: '1 рабочий день', better: 'assistant' },
  { label: 'Контроль задач', staff: 'Постоянный надзор', assistant: 'Отдел качества', better: 'assistant' },
  { label: 'Больничные и отпуска', staff: 'Оплачиваются', assistant: 'Бесплатная замена', better: 'assistant' },
  { label: 'Скорость ответа', staff: 'Зависит от человека', assistant: 'Ответ за 15–60 мин', better: 'assistant' },
  { label: 'Доп. расходы', staff: 'Место, техника, ПО', assistant: 'Нет', better: 'assistant' },
]

const BENEFITS = [
  { icon: '⏱', title: 'Только за реальную работу', desc: 'Вы платите за отработанные часы, а не за перекуры и простои.' },
  { icon: '🔒', title: 'Полная конфиденциальность', desc: 'NDA подписывается до начала работы. Ваши данные надёжно защищены.' },
  { icon: '📊', title: 'Прозрачная отчётность', desc: 'Ежедневные отчёты в вашей личной папке — всегда знаете, что сделано.' },
  { icon: '🔄', title: 'Бесплатная замена', desc: 'Если ассистент не подойдёт — заменим за три рабочих дня без доплат.' },
]

export function BenefitsSection() {
  return (
    <Section id="benefits" background="alt">
      <AnimateOnScroll>
        <SectionHeader
          eyebrow="Почему «Состояние»"
          title="Сравните сами"
          description="Удалённый ассистент vs штатный сотрудник — в цифрах и фактах."
        />
      </AnimateOnScroll>

      {/* Comparison table */}
      <AnimateOnScroll>
        <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-sm mb-16">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-100">
                <th className="text-left px-6 py-4 text-stone-500 font-medium w-1/3">Параметр</th>
                <th className="text-center px-6 py-4 text-stone-700 font-semibold w-1/3">Штатный сотрудник</th>
                <th className="text-center px-6 py-4 text-brand-700 font-semibold w-1/3 bg-brand-50/50">
                  Ассистент «Состояние»
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-stone-50">
              {COMPARISON.map((row) => (
                <tr key={row.label} className="hover:bg-stone-50/50 transition-colors">
                  <td className="px-6 py-4 text-stone-600 font-medium">{row.label}</td>
                  <td className="px-6 py-4 text-center text-stone-500">{row.staff}</td>
                  <td className="px-6 py-4 text-center text-brand-700 font-semibold bg-brand-50/30">
                    {row.assistant}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateOnScroll>

      {/* Benefit cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {BENEFITS.map((benefit, i) => (
          <AnimateOnScroll key={benefit.title} delay={i * 0.08}>
            <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
              <span className="text-3xl block mb-4">{benefit.icon}</span>
              <h3 className="font-bold text-stone-900 mb-2 text-sm">{benefit.title}</h3>
              <p className="text-stone-500 text-xs leading-relaxed">{benefit.desc}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </Section>
  )
}

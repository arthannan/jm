'use client'
import { Section, SectionHeader } from '@/components/ui/Section'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

const STEPS = [
  {
    number: '01',
    title: 'Оставьте заявку',
    description:
      'Заполните короткую форму или позвоните нам. Менеджер свяжется с вами в течение 30 минут и уточнит ваши задачи.',
    icon: '📋',
  },
  {
    number: '02',
    title: 'Подбираем ассистента',
    description:
      'Мы подбираем специалиста под ваш запрос из проверенной базы. Онбординг занимает один рабочий день.',
    icon: '🎯',
  },
  {
    number: '03',
    title: 'Делегируйте и растите',
    description:
      'Ассистент берёт на себя рутину. Вы получаете ежедневные отчёты и тратите время на то, что действительно важно.',
    icon: '🚀',
  },
]

export function HowItWorksSection() {
  return (
    <Section id="how" background="alt">
      <AnimateOnScroll>
        <SectionHeader
          eyebrow="Просто и прозрачно"
          title="Три шага до вашего ассистента"
          description="Никаких долгих переговоров и сложного онбординга. Начните делегировать уже сегодня."
        />
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STEPS.map((step, i) => (
          <AnimateOnScroll key={step.number} delay={i * 0.12}>
            <div className="relative group">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-stone-300 to-transparent z-0 -translate-y-1/2 pointer-events-none" />
              )}

              <div className="relative bg-white rounded-2xl p-7 border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                {/* Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-bold text-stone-100 tabular-nums select-none">
                    {step.number}
                  </span>
                  <span className="text-3xl">{step.icon}</span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mb-3">{step.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{step.description}</p>

                {/* Accent bar */}
                <div className="mt-6 h-0.5 w-10 bg-brand-400 rounded-full group-hover:w-20 transition-all duration-300" />
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </Section>
  )
}

import { Section, SectionHeader } from '@/components/ui/Section'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { Button } from '@/components/ui/Button'
import { PRICING_PLANS } from '@/lib/data'
import { cn } from '@/lib/utils'

export function PricingSection() {
  return (
    <Section id="pricing">
      <AnimateOnScroll>
        <SectionHeader
          eyebrow="Тарифы"
          title="Прозрачные цены без скрытых платежей"
          description="Выберите подходящий план. Оплата только за реально отработанные часы."
        />
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {PRICING_PLANS.map((plan, i) => (
          <AnimateOnScroll key={plan.name} delay={i * 0.1}>
            <div
              className={cn(
                'relative rounded-2xl p-7 flex flex-col h-full transition-all duration-300',
                plan.popular
                  ? 'bg-brand-700 text-white shadow-2xl shadow-brand-200 scale-[1.02]'
                  : 'bg-white border border-stone-100 shadow-sm hover:shadow-md'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                    Популярный выбор
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={cn(
                    'text-sm font-semibold tracking-wide uppercase mb-4',
                    plan.popular ? 'text-brand-200' : 'text-stone-400'
                  )}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    className={cn(
                      'text-4xl font-bold tabular-nums',
                      plan.popular ? 'text-white' : 'text-stone-900'
                    )}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      'text-lg font-medium',
                      plan.popular ? 'text-brand-200' : 'text-stone-400'
                    )}
                  >
                    ₽
                  </span>
                  <span
                    className={cn(
                      'text-sm ml-0.5',
                      plan.popular ? 'text-brand-200' : 'text-stone-400'
                    )}
                  >
                    /{plan.period}
                  </span>
                </div>
                <p
                  className={cn(
                    'text-xs leading-relaxed',
                    plan.popular ? 'text-brand-200' : 'text-stone-500'
                  )}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <svg
                      className={cn(
                        'w-4 h-4 mt-0.5 flex-shrink-0',
                        plan.popular ? 'text-brand-200' : 'text-brand-500'
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={cn(
                        'text-sm',
                        plan.popular ? 'text-white/90' : 'text-stone-600'
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? 'secondary' : 'outline'}
                className={cn(
                  'w-full',
                  plan.popular && 'bg-white text-brand-700 hover:bg-brand-50 border-0'
                )}
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {plan.cta}
              </Button>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll delay={0.3}>
        <p className="text-center mt-10 text-stone-400 text-sm">
          Нужен индивидуальный план?{' '}
          <a href="tel:+74999990000" className="text-brand-600 font-medium hover:underline">
            Позвоните нам
          </a>{' '}
          — найдём решение под ваши задачи.
        </p>
      </AnimateOnScroll>
    </Section>
  )
}

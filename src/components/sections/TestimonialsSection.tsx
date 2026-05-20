import { Section, SectionHeader } from '@/components/ui/Section'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { TESTIMONIALS } from '@/lib/data'

export function TestimonialsSection() {
  return (
    <Section id="testimonials" background="alt">
      <AnimateOnScroll>
        <SectionHeader
          eyebrow="Отзывы клиентов"
          title="Что говорят наши клиенты"
          description="Более 300 предпринимателей уже делегировали рутину и вернули время себе."
        />
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <AnimateOnScroll key={t.name} delay={i * 0.12}>
            <div className="bg-white rounded-2xl p-7 border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-stone-700 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-50">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-sm font-bold text-brand-700 flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-900">{t.name}</p>
                  <p className="text-xs text-stone-400">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Trust indicators */}
      <AnimateOnScroll delay={0.3}>
        <div className="mt-14 flex flex-wrap justify-center items-center gap-8 text-stone-300">
          {['7 лет опыта', '300+ клиентов', 'NDA с каждым', 'Команда поддержки 24/7'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-300" />
              <span className="text-sm text-stone-500">{item}</span>
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </Section>
  )
}

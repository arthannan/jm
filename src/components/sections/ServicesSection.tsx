'use client'
import { Section, SectionHeader } from '@/components/ui/Section'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { SERVICES } from '@/lib/data'

export function ServicesSection() {
  return (
    <Section id="services">
      <AnimateOnScroll>
        <SectionHeader
          eyebrow="Что берёт на себя ассистент"
          title="Задачи, которые больше не будут вас отвлекать"
          description="Ваш ассистент справляется с широким спектром операционных задач — от почты до ресёрча."
        />
      </AnimateOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((service, i) => (
          <AnimateOnScroll key={service.title} delay={i * 0.08}>
            <div className="group bg-white rounded-2xl p-6 border border-stone-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-50 transition-all duration-300 h-full">
              <div className="w-12 h-12 rounded-xl bg-stone-50 flex items-center justify-center text-2xl mb-5 group-hover:bg-brand-50 group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="font-bold text-stone-900 mb-2">{service.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Bottom note */}
      <AnimateOnScroll delay={0.4}>
        <div className="mt-12 text-center">
          <p className="text-stone-400 text-sm">
            Не нашли свою задачу?{' '}
            <a
              href="#contact"
              className="text-brand-600 font-medium hover:text-brand-700 underline underline-offset-2"
            >
              Спросите нас — скорее всего, мы справимся
            </a>
          </p>
        </div>
      </AnimateOnScroll>
    </Section>
  )
}

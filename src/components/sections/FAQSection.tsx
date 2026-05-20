'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Section, SectionHeader } from '@/components/ui/Section'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { FAQ_ITEMS } from '@/lib/data'

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-stone-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-lg"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-stone-900 text-sm sm:text-base leading-snug group-hover:text-brand-700 transition-colors">
          {question}
        </span>
        <div
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-stone-200 flex items-center justify-center transition-all duration-200 mt-0.5 ${
            isOpen ? 'bg-brand-100 border-brand-200 rotate-180' : 'group-hover:border-brand-200'
          }`}
        >
          <svg
            className={`w-3 h-3 ${isOpen ? 'text-brand-600' : 'text-stone-500'} transition-colors`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-stone-500 text-sm leading-relaxed max-w-2xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section id="faq">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <AnimateOnScroll direction="right">
          <SectionHeader
            eyebrow="Частые вопросы"
            title="Всё, что вы хотели узнать"
            description="Не нашли ответа? Напишите нам — ответим в течение 30 минут."
            align="left"
          />

          <div className="space-y-4">
            <a
              href="tel:+74999990000"
              className="flex items-center gap-3 text-sm text-stone-600 hover:text-stone-900 group transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-brand-50 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              +7 (499) 999-00-00
            </a>
            <a
              href="mailto:hello@sostoyaniye.ru"
              className="flex items-center gap-3 text-sm text-stone-600 hover:text-stone-900 group transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-brand-50 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              hello@sostoyaniye.ru
            </a>
          </div>
        </AnimateOnScroll>

        {/* Right — accordion */}
        <AnimateOnScroll direction="left">
          <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem
                key={i}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </Section>
  )
}

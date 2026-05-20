'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { Button } from '@/components/ui/Button'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', task: '' })
  const [state, setState] = useState<FormState>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1200))
    setState('success')
  }

  return (
    <Section id="contact" background="dark">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — copy */}
        <AnimateOnScroll direction="right">
          <div>
            <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-brand-400">
              Оставить заявку
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6 text-balance">
              Начните делегировать
              <br />
              <span
                className="text-brand-300 italic font-light"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                уже сегодня
              </span>
            </h2>
            <p className="text-stone-400 text-base leading-relaxed mb-8 max-w-md">
              Оставьте заявку и наш менеджер свяжется с вами в течение 30 минут. Подберём ассистента под ваши задачи и запустим работу за один день.
            </p>

            {/* Promises */}
            <div className="space-y-3">
              {[
                'Ответим в течение 30 минут',
                'Подберём ассистента за 1 день',
                'Первая неделя — бесплатная замена при несоответствии',
              ].map((promise) => (
                <div key={promise} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-600/20 border border-brand-600/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-stone-400">{promise}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Right — form */}
        <AnimateOnScroll direction="left">
          <div className="glass-dark rounded-2xl p-8">
            <AnimatePresence mode="wait">
              {state === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-600/20 border border-brand-600/30 flex items-center justify-center mx-auto mb-4 text-2xl">
                    ✅
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Заявка принята!</h3>
                  <p className="text-stone-400 text-sm">
                    Наш менеджер свяжется с вами в течение 30 минут.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div>
                    <label className="block text-xs font-semibold text-stone-400 uppercase tracking-wide mb-1.5">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Иван Петров"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-400 uppercase tracking-wide mb-1.5">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+7 (999) 000-00-00"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-400 uppercase tracking-wide mb-1.5">
                      Какие задачи хотите делегировать?
                    </label>
                    <textarea
                      name="task"
                      value={form.task}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Почта, документы, встречи..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={state === 'loading'}
                  >
                    {state === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Отправляем...
                      </span>
                    ) : (
                      'Получить консультацию бесплатно'
                    )}
                  </Button>

                  <p className="text-xs text-stone-600 text-center">
                    Нажимая кнопку, вы соглашаетесь с{' '}
                    <a href="/privacy" className="underline hover:text-stone-400 transition-colors">
                      политикой конфиденциальности
                    </a>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </AnimateOnScroll>
      </div>
    </Section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { STATS } from '@/lib/data'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#faf9f7]">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient blob top-right */}
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full bg-brand-100/40 blur-[100px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#1a1714 1px, transparent 1px), linear-gradient(90deg, #1a1714 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-28 pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 mb-6 text-xs font-semibold tracking-widest uppercase text-brand-600 bg-brand-50 border border-brand-100 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              Удалённые ассистенты
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-stone-900 leading-[1.05] tracking-tight mb-6 text-balance"
          >
            Освободите время
            <br />
            <span className="text-brand-700 italic font-light" style={{ fontFamily: 'var(--font-display)' }}>
              для главного
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-stone-500 leading-relaxed max-w-2xl mb-10"
          >
            Профессиональный ассистент берёт на себя вашу рутину — переписку, документы, встречи, ресёрч.
            Вы платите только за реально отработанные часы.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-16">
            <Button
              size="lg"
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Оставить заявку
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() =>
                document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Как это работает
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="grid grid-cols-3 gap-6 sm:gap-12 max-w-xl"
          >
            {STATS.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  {stat.suffix && stat.suffix !== 'от' && (
                    <span className="text-2xl sm:text-3xl font-bold text-stone-900">
                      {stat.value}
                    </span>
                  )}
                  {stat.suffix === 'от' && (
                    <>
                      <span className="text-xs font-medium text-stone-400 mr-0.5">от</span>
                      <span className="text-2xl sm:text-3xl font-bold text-stone-900">
                        {stat.value}
                      </span>
                      <span className="text-sm text-stone-400">₽</span>
                    </>
                  )}
                  {stat.suffix && stat.suffix !== 'от' && (
                    <span className="text-xl font-bold text-brand-600">{stat.suffix}</span>
                  )}
                </div>
                <span className="text-xs text-stone-500 mt-0.5 leading-tight">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating card decoration */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-72"
        >
          <div className="glass rounded-2xl p-5 shadow-xl shadow-stone-200/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center text-lg">
                👋
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-800">Анна — ваш ассистент</p>
                <p className="text-xs text-stone-400">Онлайн · Отвечает за 15 мин</p>
              </div>
            </div>
            <div className="space-y-2">
              {[
                { task: '✅ Обработала 12 писем', done: true },
                { task: '✅ Запланировала встречу', done: true },
                { task: '⏳ Готовит отчёт по рынку', done: false },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-stone-600">
                  <span>{t.task}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100">
              <p className="text-xs text-stone-400">Сегодня сэкономлено</p>
              <p className="text-xl font-bold text-stone-900 mt-0.5">
                2 ч 40 мин <span className="text-xs text-stone-400 font-normal">вашего времени</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-stone-400">Прокрутите вниз</span>
        <div className="w-5 h-8 rounded-full border border-stone-300 flex items-start justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-stone-400"
          />
        </div>
      </motion.div>
    </section>
  )
}

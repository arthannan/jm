'use client'
import { NAV_ITEMS } from '@/lib/data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Top */}
        <div className="pt-16 pb-10 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-stone-800">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white text-sm font-bold">
                С
              </div>
              <span className="font-bold text-lg text-white">Состояние</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Профессиональные удалённые ассистенты, которые берут на себя рутину — чтобы вы занимались тем, что важно.
            </p>
            <div className="mt-6">
              <p className="text-xs text-stone-500 mb-1">10% с каждого пакета направляем в благотворительный фонд</p>
              <span className="inline-block text-xs font-semibold text-brand-400 bg-brand-950 border border-brand-900 px-3 py-1 rounded-full">
                🤝 Фонд «Состояние» — помощь пожилым
              </span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-sm font-semibold text-stone-200 mb-4 uppercase tracking-wider">Навигация</h3>
            <nav className="flex flex-col gap-2.5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm hover:text-stone-200 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-sm font-semibold text-stone-200 mb-4 uppercase tracking-wider">Контакты</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+74999990000" className="hover:text-stone-200 transition-colors">
                +7 (499) 999-00-00
              </a>
              <a href="mailto:hello@sostoyaniye.ru" className="hover:text-stone-200 transition-colors">
                hello@sostoyaniye.ru
              </a>
              <p className="text-stone-500 text-xs mt-2">
                Ответим в течение 30 минут<br />в рабочие дни 9:00–19:00 МСК
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
          <p>© {year} Состояние. Все права защищены.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-stone-400 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="/offer" className="hover:text-stone-400 transition-colors">
              Публичная оферта
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

# Состояние — сайт сервиса удалённых ассистентов

Современный, быстрый и визуально premium сайт для сервиса удалённых ассистентов «Состояние».

## 🛠 Технологии

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS** — utility-first стили с кастомными токенами
- **Framer Motion** — анимации и переходы
- **Lucide React** — иконки

## 📁 Структура проекта

```
sostoyanie/
├── src/
│   ├── app/
│   │   ├── globals.css      # Глобальные стили и CSS-переменные
│   │   ├── layout.tsx       # Root layout с SEO-метаданными
│   │   └── page.tsx         # Главная страница
│   ├── components/
│   │   ├── ui/              # Переиспользуемые UI-компоненты
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── AnimateOnScroll.tsx
│   │   │   └── Section.tsx
│   │   ├── layout/          # Header и Footer
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/        # Секции страницы
│   │       ├── HeroSection.tsx
│   │       ├── HowItWorksSection.tsx
│   │       ├── ServicesSection.tsx
│   │       ├── BenefitsSection.tsx
│   │       ├── PricingSection.tsx
│   │       ├── TestimonialsSection.tsx
│   │       ├── FAQSection.tsx
│   │       └── ContactSection.tsx
│   ├── hooks/
│   │   └── useInView.ts     # Хук для scroll-анимаций
│   ├── lib/
│   │   ├── data.ts          # Все тексты и данные сайта
│   │   └── utils.ts         # Утилита cn()
│   └── types/
│       └── index.ts         # TypeScript типы
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## 🚀 Запуск локально

### 1. Установите зависимости

```bash
npm install
# или
pnpm install
# или
yarn install
```

### 2. Запустите dev-сервер

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

### 3. Сборка для production

```bash
npm run build
npm start
```

## ☁️ Деплой на Vercel

### Вариант 1 — через Vercel CLI

```bash
# Установите Vercel CLI
npm install -g vercel

# Залогиньтесь
vercel login

# Деплой
vercel

# Production деплой
vercel --prod
```

### Вариант 2 — через GitHub (рекомендуется)

1. Загрузите проект на GitHub
2. Зайдите на [vercel.com](https://vercel.com)
3. Нажмите **Add New Project**
4. Выберите репозиторий
5. Vercel автоматически определит Next.js — нажмите **Deploy**

После этого каждый `git push` в `main` = автоматический деплой.

### Переменные окружения

Если добавите интеграцию с CRM или email-сервисом, создайте `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://sostoyaniye.ru
CONTACT_FORM_EMAIL=hello@sostoyaniye.ru
# Добавьте ключи для email-провайдера (Resend, SendGrid и т.д.)
```

## ✏️ Редактирование контента

Все тексты, цены и данные хранятся в одном файле:

```
src/lib/data.ts
```

Меняйте тарифы, отзывы, услуги и FAQ прямо там — без правки компонентов.

## 📊 SEO

- Open Graph и Twitter Card теги в `layout.tsx`
- Семантическая разметка (section, article, nav, footer)
- Оптимизация изображений через next/image
- Автоматический sitemap через `next-sitemap` (добавьте при необходимости)

## 🎨 Дизайн-система

### Цвета

| Токен | Значение | Использование |
|-------|----------|---------------|
| `brand-700` | #6d28d9 | Primary accent |
| `stone-900` | #1c1917 | Основной текст |
| `stone-500` | #78716c | Вторичный текст |
| `#faf9f7` | Cream | Основной фон |

### Шрифты

- **Manrope** — основной (sans-serif, все веса)
- **Playfair Display** — декоративные заголовки (italic)

## 🔧 Следующие шаги

- [ ] Подключить реальную форму (Resend / Formspree / EmailJS)
- [ ] Добавить аналитику (Yandex Metrika / GA4)
- [ ] Настроить CMS (Sanity / Contentful) для редактирования контента
- [ ] Добавить страницы "О нас" и "Блог"
- [ ] Настроить автосборку sitemap

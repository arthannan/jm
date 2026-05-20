import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Состояние — сервис удалённых ассистентов',
  description:
    'Делегируйте рутинные задачи профессиональному ассистенту. Работайте только над тем, что важно. От 15 000 ₽/мес — только за реальную работу.',
  keywords: [
    'удалённый ассистент',
    'виртуальный помощник',
    'делегирование задач',
    'сервис ассистентов',
    'продуктивность',
  ],
  openGraph: {
    title: 'Состояние — сервис удалённых ассистентов',
    description: 'Делегируйте рутину. Занимайтесь главным.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Состояние',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Состояние — сервис удалённых ассистентов',
    description: 'Делегируйте рутину. Занимайтесь главным.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

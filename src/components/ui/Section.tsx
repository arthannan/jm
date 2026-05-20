import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'default' | 'alt' | 'dark' | 'accent'
}

export function Section({ children, className, id, background = 'default' }: SectionProps) {
  const backgrounds = {
    default: 'bg-[#faf9f7]',
    alt: 'bg-[#f2f0ec]',
    dark: 'bg-stone-900',
    accent: 'bg-brand-700',
  }

  return (
    <section
      id={id}
      className={cn('py-20 md:py-28 lg:py-32', backgrounds[background], className)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-14 md:mb-20',
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-xl',
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-brand-600">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-stone-500 text-lg leading-relaxed">{description}</p>
      )}
    </div>
  )
}

'use client'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xl cursor-pointer'

    const variants = {
      primary:
        'bg-brand-700 text-white hover:bg-brand-800 active:scale-[0.98] shadow-sm hover:shadow-md',
      secondary:
        'bg-stone-900 text-white hover:bg-stone-800 active:scale-[0.98] shadow-sm',
      ghost:
        'text-stone-700 hover:bg-stone-100 active:bg-stone-200',
      outline:
        'border border-stone-300 text-stone-800 hover:border-stone-400 hover:bg-stone-50 active:scale-[0.98]',
    }

    const sizes = {
      sm: 'h-9 px-4 text-sm gap-1.5',
      md: 'h-11 px-6 text-sm gap-2',
      lg: 'h-13 px-8 text-base gap-2.5',
    }

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

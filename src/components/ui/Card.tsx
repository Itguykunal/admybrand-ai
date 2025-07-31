import { HTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'elevated'
  children: React.ReactNode
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'rounded-xl p-6 transition-all duration-300',
          {
            'bg-white border border-neutral-200 hover:shadow-lg': variant === 'default',
            'bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20': variant === 'glass',
            'bg-white shadow-xl hover:shadow-2xl hover:-translate-y-1': variant === 'elevated',
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

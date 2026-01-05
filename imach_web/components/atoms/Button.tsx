'use client'

import { forwardRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { motion, HTMLMotionProps } from 'framer-motion'

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  children?: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden whitespace-nowrap min-w-fit'
    
    const variants = {
      primary: 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:shadow-2xl hover:shadow-indigo-500/60 hover:scale-105',
      secondary: 'bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/20 hover:shadow-lg',
      outline: 'border-2 border-[#6366F1] text-[#6366F1] hover:bg-[#6366F1] hover:text-white hover:shadow-xl hover:shadow-indigo-500/40',
      ghost: 'text-gray-300 hover:bg-white/5 hover:text-white hover:scale-105',
    }
    
    const sizes = {
      sm: 'text-sm px-6 py-2.5 leading-5',
      md: 'text-base px-8 py-3.5 leading-6',
      lg: 'text-lg px-10 py-4.5 leading-7',
    }
    
    return (
      <motion.button
        ref={ref}
        whileHover={{ 
          scale: 1.05,
          transition: { type: 'spring', stiffness: 400, damping: 10 }
        }}
        whileTap={{ scale: 0.95 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {/* Subtle shimmer effect */}
        {variant === 'primary' && !disabled && (
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            style={{
              animation: 'shimmer 1.5s infinite',
              animationDelay: '0.5s'
            }}
          />
        )}
        
        {isLoading ? (
          <div className="relative z-10 flex items-center justify-center gap-2.5">
            <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            <span>Loading...</span>
          </div>
        ) : (
          <span className="relative z-10">{children}</span>
        )}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button

'use client'

import { ButtonHTMLAttributes, forwardRef, ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export interface ButtonProps extends Omit<ComponentProps<typeof motion.button>, 'ref'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
    
    const variants = {
      primary: 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:shadow-lg hover:shadow-indigo-500/50 hover:scale-[1.02]',
      secondary: 'bg-white/5 text-white hover:bg-white/10 border border-white/10',
      outline: 'border-2 border-[#6366F1] text-[#6366F1] hover:bg-[#6366F1] hover:text-white',
      ghost: 'text-gray-300 hover:bg-white/5 hover:text-white',
    }
    
    const sizes = {
      sm: 'text-sm px-4 py-2',
      md: 'text-base px-6 py-3',
      lg: 'text-lg px-8 py-4',
    }
    
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <motion.div
              className="h-4 w-4 border-2 border-current border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
            Loading...
          </>
        ) : (
          children
        )}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button

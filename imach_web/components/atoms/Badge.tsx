'use client'

import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'success' | 'info' | 'warning' | 'default'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    info: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    default: 'bg-white/5 text-gray-300 border-white/10',
  }
  
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}

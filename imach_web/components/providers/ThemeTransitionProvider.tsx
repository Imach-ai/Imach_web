'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useUIStore } from '@/lib/store'

export default function ThemeTransitionProvider({ children }: { children: React.ReactNode }) {
  const { theme, isThemeTransitioning, setIsThemeTransitioning } = useUIStore()

  useEffect(() => {
    if (isThemeTransitioning) {
      const timer = setTimeout(() => {
        setIsThemeTransitioning(false)
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [isThemeTransitioning, setIsThemeTransitioning])

  return (
    <>
      <AnimatePresence>
        {isThemeTransitioning && (
          <>
            {/* Smooth fade overlay */}
            <motion.div
              key="transition-overlay"
              className="fixed inset-0 z-50 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.4, 0] }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.4,
                times: [0, 0.5, 1],
                ease: 'easeInOut',
              }}
              style={{
                background: `linear-gradient(135deg, ${theme === 'dark' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(59, 130, 246, 0.2)'} 0%, ${theme === 'dark' ? 'rgba(168, 85, 247, 0.2)' : 'rgba(139, 92, 246, 0.2)'} 100%)`,
              }}
            />
          </>
        )}
      </AnimatePresence>
      {children}
    </>
  )
}

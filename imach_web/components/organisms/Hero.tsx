'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Button from '@/components/atoms/Button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'

const rotatingWords = ['Startups', 'Enterprises', 'Innovators', 'Scale-ups']

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [enableParallax, setEnableParallax] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 100 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)
  
  const heroRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])
  
  useEffect(() => {
    // Only enable parallax on large screens to reduce CPU usage
    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    setEnableParallax(mediaQuery.matches)
    
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setEnableParallax(e.matches)
    }
    mediaQuery.addEventListener('change', handleMediaChange)
    
    return () => mediaQuery.removeEventListener('change', handleMediaChange)
  }, [])
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!enableParallax || !heroRef.current) return
    
    const rect = heroRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    mouseX.set((e.clientX - centerX) / 30)
    mouseY.set((e.clientY - centerY) / 30)
  }, [enableParallax, mouseX, mouseY])
  
  useEffect(() => {
    if (!enableParallax) return
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [enableParallax, handleMouseMove])
  
  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0B14]"
    >
      {/* Simplified Animated Orbs */}
      {enableParallax && (
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #6366F1 0%, transparent 50%)',
            x,
            y,
          }}
        />
      )}
      
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Simplified Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 80, damping: 20 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 30 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-gray-300">Trusted by YC startups and Fortune 500 innovation labs</span>
          </motion.div>
          
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-white">Autonomous AI Systems</span>
            <br />
            <span className="text-white">for </span>
            <motion.span
              key={currentWordIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 15 }}
              className="inline-block gradient-text"
            >
              {rotatingWords[currentWordIndex]}
            </motion.span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto">
            Build intelligent websites, data dashboards, and growth engines that work while you sleep
          </p>
          
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 80, damping: 20 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('pricing')}
              className="group"
            >
              Explore Pricing
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('demo')}
            >
              Book Technical Demo
            </Button>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 80, damping: 20 }}
            className="pt-12"
          >
            <p className="text-sm text-gray-500 mb-6">Powering Innovation at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {['Company A', 'Company B', 'Company C', 'Company D'].map((company) => (
                <div key={company} className="text-gray-400 font-medium">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

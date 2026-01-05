'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import Button from '@/components/atoms/Button'
import { scrollToSection } from '@/lib/utils'
import { useUIStore } from '@/lib/store'

const navItems = [
  { label: 'Services', href: 'services' },
  { label: 'Pricing', href: 'pricing' },
  { label: 'Case Studies', href: 'case-studies' },
  { label: 'About', href: 'about' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme, setIsThemeTransitioning } = useUIStore()
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Apply theme to document with smooth transition
    if (theme === 'light') {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    }
  }, [theme])

  const toggleTheme = () => {
    setIsThemeTransitioning(true)
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 25 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 backdrop-blur-md ${
        isScrolled
          ? theme === 'dark' 
            ? 'bg-[#0A0B14]/30 border-b border-white/10'
            : 'bg-white/30 border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">I</span>
            </div>
            <span className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Imach.ai</span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors text-sm font-medium ${
                  theme === 'dark' 
                    ? 'text-gray-300 hover:text-white'
                    : 'text-black hover:text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="p-2 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600" />
              )}
            </motion.button>
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              theme === 'dark'
                ? 'text-gray-300 hover:text-white'
                : 'text-black hover:text-gray-700'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`md:hidden border-t ${
              theme === 'dark'
                ? 'bg-[#1F2937] border-white/10'
                : 'bg-white border-gray-200'
            }`}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    scrollToSection(item.href)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`block w-full text-left transition-colors py-2 ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-white'
                      : 'text-black hover:text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 space-y-2">
                <button
                  onClick={toggleTheme}
                  className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-300 hover:text-white'
                      : 'bg-gray-100 border-gray-200 hover:bg-gray-200 text-black hover:text-gray-700'
                  }`}
                >
                  <span className="text-sm font-medium">Theme</span>
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-indigo-400" />
                  )}
                </button>
                <Button variant="ghost" size="sm" className="w-full">
                  Sign In
                </Button>
                <Button variant="primary" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

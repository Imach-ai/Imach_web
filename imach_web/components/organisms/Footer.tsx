'use client'

import { Twitter, Linkedin, Github, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { useUIStore } from '@/lib/store'

const footerLinks = {
  Services: [
    { label: 'AI Website + Chatbot', href: '#' },
    { label: 'Custom Dashboards', href: '#' },
    { label: 'MVP Development', href: '#' },
    { label: 'Pitch Decks', href: '#' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'Status', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'GDPR', href: '#' },
  ],
}

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: 'mailto:hello@imach.ai', label: 'Email' },
]

export default function Footer() {
  const { theme } = useUIStore()
  const isDark = theme === 'dark'

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <footer className={`border-t transition-colors duration-300 relative overflow-hidden ${
      isDark 
        ? 'bg-[#0A0B14] border-white/10'
        : 'bg-white border-gray-200'
    }`}>
      {/* Animated Background Gradient */}
      <motion.div
        className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-indigo-500/5 to-transparent' : 'bg-gradient-to-b from-indigo-300/5 to-transparent'}`}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
        >
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="col-span-2 md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <motion.div 
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <span className="text-white font-bold text-xl">I</span>
              </motion.div>
              <span className={`text-xl font-bold transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-950'
              }`}>Imach.ai</span>
            </div>
            <p className={`text-sm mb-4 transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-700'
            }`}>
              Building autonomous AI systems for the next generation of businesses.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      isDark
                        ? 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-900'
                    }`}
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
          
          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div 
              key={category} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            >
              <h3 className={`font-semibold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-950'
              }`}>{category}</h3>
              <ul className="space-y-2">
                {links.map((link, idx) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className={`text-sm transition-colors duration-300 ${
                        isDark
                          ? 'text-gray-400 hover:text-white'
                          : 'text-gray-700 hover:text-gray-950'
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom Bar */}
        <motion.div
          className={`pt-8 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-300 ${
            isDark ? 'border-t border-white/10' : 'border-t border-gray-200'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        >
          <p className={`text-sm transition-colors duration-300 ${
            isDark ? 'text-gray-500' : 'text-gray-600'
          }`}>
            © 2026 Imach.ai. All rights reserved.
          </p>
          <div className={`flex items-center gap-6 text-sm transition-colors duration-300 ${
            isDark ? 'text-gray-500' : 'text-gray-600'
          }`}>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span>All Systems Operational</span>
            </motion.div>
            <span>•</span>
            <span>Made with ❤️ for builders</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

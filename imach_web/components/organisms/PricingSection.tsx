'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, Zap, Shield, Rocket } from 'lucide-react'
import Button from '@/components/atoms/Button'
import Badge from '@/components/atoms/Badge'
import { useUIStore } from '@/lib/store'
import { formatCurrency, detectCurrency, currencies } from '@/lib/utils'

interface PricingTier {
  id: string
  name: string
  tagline: string
  basePrice: number
  features: string[]
  icon: typeof Zap
  recommended?: boolean
  cta: string
}

const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Perfect for launching fast',
    basePrice: 2999,
    icon: Zap,
    features: [
      'AI-Powered Website + Smart Chatbot',
      'Up to 5 pages with responsive design',
      '24/7 AI customer support chatbot',
      'Basic analytics dashboard',
      'Mobile optimized',
      '1 month support & maintenance',
    ],
    cta: 'Start Building',
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Best for Scale-ups',
    basePrice: 7999,
    icon: Rocket,
    recommended: true,
    features: [
      'Everything in Starter, plus:',
      'Custom AI Dashboard & Analytics',
      'Real-time data visualization',
      'Advanced chatbot with lead qualification',
      'CRM & API integrations',
      'A/B testing capabilities',
      'SEO optimization',
      '3 months support & maintenance',
    ],
    cta: 'Scale Your Business',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Unlimited possibilities',
    basePrice: 19999,
    icon: Shield,
    features: [
      'Everything in Growth, plus:',
      'Full MVP Development (30 days)',
      'Custom AI model training',
      'Dedicated tech lead',
      'Priority support (4-hour SLA)',
      'Advanced security & compliance',
      'Pitch deck + investor materials',
      'White-glove onboarding',
      '6 months support & maintenance',
    ],
    cta: 'Talk to Our Team',
  },
]

export default function PricingSection() {
  const { currency, setCurrency } = useUIStore()
  const [isAnnual, setIsAnnual] = useState(true)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    const detected = detectCurrency()
    setCurrency(detected)
  }, [setCurrency])
  
  if (!mounted) {
    return (
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0B14]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-pulse">
            <div className="h-8 w-64 bg-white/5 rounded mx-auto mb-4" />
            <div className="h-4 w-96 bg-white/5 rounded mx-auto" />
          </div>
        </div>
      </section>
    )
  }
  
  return (
    <section id="pricing" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#0A0B14] relative overflow-hidden">
      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-0 left-20 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-20 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #6366F1 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Transparent, Value-Driven Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your growth stage. All prices include full development, deployment, and training.
          </p>
          
          {/* Currency Selector */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-sm text-gray-400">Currency:</span>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-transparent text-white border-none outline-none cursor-pointer"
              >
                {Object.entries(currencies).map(([code, config]) => (
                  <option key={code} value={code} className="bg-[#1F2937]">
                    {config.flag} {code}
                  </option>
                ))}
              </select>
              <span className="text-xs text-gray-500">Estimated in your currency</span>
            </div>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
              <button
                onClick={() => setIsAnnual(false)}
                className={`text-sm transition-colors ${!isAnnual ? 'text-white' : 'text-gray-500'}`}
              >
                One-time
              </button>
              <div
                className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors ${
                  isAnnual ? 'bg-indigo-500' : 'bg-gray-600'
                }`}
                onClick={() => setIsAnnual(!isAnnual)}
              >
                <motion.div
                  className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"
                  animate={{ x: isAnnual ? 24 : 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </div>
              <button
                onClick={() => setIsAnnual(true)}
                className={`text-sm transition-colors ${isAnnual ? 'text-white' : 'text-gray-500'}`}
              >
                Annual Plans
                <Badge variant="success" className="ml-2">Save 20%</Badge>
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Pricing Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon
            const displayPrice = isAnnual ? tier.basePrice * 0.8 : tier.basePrice
            
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 80,
                  damping: 20,
                }}
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 30 } }}
                className={`relative rounded-2xl p-8 ${
                  tier.recommended
                    ? 'bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-2 border-indigo-500/50'
                    : 'bg-white/5 border border-white/10'
                } hover:border-indigo-500/50 transition-all duration-300`}
              >
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="info">Recommended for Scale-ups</Badge>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                    <p className="text-sm text-gray-400">{tier.tagline}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${currency}-${isAnnual}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl font-bold text-white"
                    >
                      {formatCurrency(displayPrice, currency)}
                    </motion.div>
                  </AnimatePresence>
                  <p className="text-sm text-gray-400 mt-1">
                    {isAnnual ? 'Annual payment (20% savings)' : 'One-time project fee'}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={tier.recommended ? 'primary' : 'secondary'}
                  className="w-full group"
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            )
          })}
        </motion.div>
        
        {/* Custom Solutions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-8 py-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-2">Need Something Custom?</h3>
            <p className="text-gray-400 mb-4">
              Enterprise solutions, volume discounts, and partnership opportunities available
            </p>
            <Button variant="outline">Schedule Consultation</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

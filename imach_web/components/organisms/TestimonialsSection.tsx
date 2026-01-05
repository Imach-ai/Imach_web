'use client'

import { motion } from 'framer-motion'
import { Quote, Shield, Award, TrendingUp, Users } from 'lucide-react'
import Button from '@/components/atoms/Button'
import { useUIStore } from '@/lib/store'

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  message: string
  image: string
  achievement: string
  gradient: string
  trust: string[]
}

const testimonials: Testimonial[] = [
  {
    id: 'ceo',
    name: 'Aditya Sharma',
    role: 'CEO & Founder',
    company: 'Imach.ai',
    message: 'We didn\'t just build another AI agency. We built a team extension that understands enterprise complexity. Our mission is to democratize AI—making systems that used to cost Fortune 500 teams millions, accessible to ambitious startups.',
    image: '👨‍💼',
    achievement: '500+ companies transformed',
    gradient: 'from-indigo-500 to-purple-500',
    trust: ['ISO 27001', 'SOC 2 Certified', 'GDPR Compliant'],
  },
  {
    id: 'cofounder',
    name: 'Priya Patel',
    role: 'Co-Founder & CTO',
    company: 'Imach.ai',
    message: 'Every line of code we write is obsessed with two things: reliability and impact. We don\'t believe in flashy demos. We believe in systems that work at 3 AM when your business can\'t afford downtime. That\'s the Imach difference.',
    image: '👩‍💻',
    achievement: '$50M+ revenue generated for clients',
    gradient: 'from-cyan-500 to-blue-500',
    trust: ['99.9% Uptime', '24/7 Support', 'Enterprise Grade'],
  },
]

const trustBadges = [
  { icon: Shield, label: 'Enterprise Security', value: 'ISO 27001' },
  { icon: Award, label: 'Industry Recognition', value: '4.9/5 Rating' },
  { icon: TrendingUp, label: 'Proven Results', value: '$50M+ Generated' },
  { icon: Users, label: 'Client Base', value: '500+ Companies' },
]

export default function TestimonialsSection() {
  const { theme } = useUIStore()
  
  return (
    <section className={`py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
      theme === 'dark' ? 'bg-[#0A0B14]' : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="text-center mb-20"
        >
          <h2 className={`text-5xl sm:text-6xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Trusted by Industry Leaders
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Hear from our founders and the teams transforming their businesses
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {trustBadges.map((badge) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                }}
                className={`rounded-2xl border p-4 text-center ${
                  theme === 'dark'
                    ? 'border-white/10 bg-white/[0.02]'
                    : 'border-gray-200 bg-white shadow-sm'
                }`}
              >
                <Icon className={`w-6 h-6 mx-auto mb-2 ${
                  theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                }`} />
                <p className={`text-sm font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{badge.value}</p>
                <p className={`text-xs ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>{badge.label}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: 'spring',
                stiffness: 80,
                damping: 20,
              }}
              whileHover={{ y: -8 }}
              className="group"
            >
              {/* Card */}
              <div className={`relative rounded-3xl border p-10 overflow-hidden backdrop-blur-xl transition-all duration-300 h-full flex flex-col shadow-2xl ${
                theme === 'dark'
                  ? 'border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/30 hover:border-white/20'
                  : 'border-gray-200 bg-gradient-to-br from-white to-gray-50/50 hover:border-gray-300 hover:shadow-3xl'
              }`}>
                {/* Gradient Accent on Hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${testimonial.gradient} transition-opacity duration-300 pointer-events-none ${
                  theme === 'dark' ? 'opacity-0 group-hover:opacity-10' : 'opacity-0 group-hover:opacity-5'
                }`} />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header with Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${testimonial.gradient} p-3 inline-flex items-center justify-center`}
                    >
                      <Quote className="w-6 h-6 text-white" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="flex gap-1"
                    >
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Message */}
                  <p className={`text-lg mb-8 flex-1 leading-relaxed font-light ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    "{testimonial.message}"
                  </p>

                  {/* Divider */}
                  <div className={`w-full h-px mb-8 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-white/20 via-white/10 to-transparent'
                      : 'bg-gradient-to-r from-gray-300 via-gray-200 to-transparent'
                  }`} />

                  {/* Author Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center text-4xl ${
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/10'
                        : 'bg-gradient-to-br from-gray-100 to-gray-50 border-gray-200'
                    }`}>
                      {testimonial.image}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{testimonial.name}</h3>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>{testimonial.role}</p>
                      <p className={`text-xs font-semibold bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent mt-1`}>
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Achievement & Trust */}
                  <div className={`space-y-4 pt-6 border-t ${
                    theme === 'dark' ? 'border-white/10' : 'border-gray-200'
                  }`}>
                    <div>
                      <p className={`text-xs uppercase tracking-wider mb-1 ${
                        theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                      }`}>Impact</p>
                      <p className={`text-lg font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{testimonial.achievement}</p>
                    </div>
                    <div>
                      <p className={`text-xs uppercase tracking-wider mb-2 ${
                        theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                      }`}>Certified For</p>
                      <div className="flex flex-wrap gap-2">
                        {testimonial.trust.map((cert) => (
                          <span key={cert} className={`px-3 py-1 rounded-full border text-xs font-semibold ${
                            theme === 'dark'
                              ? 'bg-white/5 border-white/10 text-white'
                              : 'bg-gray-100 border-gray-200 text-gray-700'
                          }`}>
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className={`rounded-3xl border p-12 lg:p-16 backdrop-blur-sm mb-16 ${
            theme === 'dark'
              ? 'border-white/10 bg-gradient-to-br from-white/5 to-transparent'
              : 'border-gray-200 bg-gradient-to-br from-white to-gray-50/50 shadow-xl'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
              theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
            }`}>Why Companies Trust Us</h3>
            <h2 className={`text-3xl lg:text-5xl font-bold mb-8 leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Built for Enterprise, Built to Scale
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className={`text-lg font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Security First</h4>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  ISO 27001 certified infrastructure with SOC 2 Type II compliance. Your data is protected with enterprise-grade encryption and zero-knowledge architecture.
                </p>
              </div>
              <div>
                <h4 className={`text-lg font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Reliability Guaranteed</h4>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  99.9% uptime SLA backed by redundant systems across multiple availability zones. 24/7 monitoring and instant incident response.
                </p>
              </div>
              <div>
                <h4 className={`text-lg font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Compliance Ready</h4>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  GDPR, CCPA, and HIPAA compliant. Built for regulated industries with audit trails and compliance documentation included.
                </p>
              </div>
              <div>
                <h4 className={`text-lg font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Dedicated Support</h4>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  Your own success team with average response time under 2 hours. Proactive monitoring and quarterly strategy reviews.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className={`mb-6 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>Join 500+ companies already transforming with Imach.ai</p>
          <Button variant="primary" size="lg" className="group">
            Start Your Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

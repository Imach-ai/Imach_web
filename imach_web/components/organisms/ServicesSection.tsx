'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Globe, BarChart3, Code, Presentation, Upload, X } from 'lucide-react'
import Button from '@/components/atoms/Button'

interface Service {
  id: string
  icon: typeof Globe
  title: string
  description: string
  benefits: string[]
  gradient: string
}

const services: Service[] = [
  {
    id: 'website-chatbot',
    icon: Globe,
    title: 'AI Website + Smart Chatbot',
    description: 'Convert visitors into customers with intelligent websites that understand, engage, and qualify leads automatically.',
    benefits: [
      'AI chatbot with natural conversations',
      'Lead qualification & capture',
      'Real-time analytics',
      'SEO optimized',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'dashboard-analytics',
    icon: BarChart3,
    title: 'Custom AI Dashboard & Analytics',
    description: 'Transform raw data into actionable insights with beautiful dashboards powered by AI-driven analytics.',
    benefits: [
      'Real-time data visualization',
      'AI-generated insights',
      'Custom KPI tracking',
      'Predictive analytics',
    ],
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'mvp-development',
    icon: Code,
    title: 'MVP Development',
    description: 'Go from concept to market with a production-ready MVP. Perfect for startups and product launches.',
    benefits: [
      'Full-stack development',
      'Modern tech stack',
      'User authentication & payments',
      'Testing & QA',
    ],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'pitch-decks',
    icon: Presentation,
    title: 'Pitch Decks & Infographics',
    description: 'Tell compelling stories with data-driven pitch decks that captivate investors and stakeholders.',
    benefits: [
      'Custom design & branding',
      'Data visualization',
      'Storytelling framework',
      'Investor-ready templates',
    ],
    gradient: 'from-orange-500 to-pink-500',
  },
]

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(0)
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const [dragActive, setDragActive] = useState(false)

  const currentService = services[selectedService]
  const Icon = currentService.icon

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = e.dataTransfer.files
    if (files && files.length > 0) {
      for (let i = 0; i < Math.min(files.length, 4); i++) {
        const reader = new FileReader()
        reader.onload = (event) => {
          const result = (event.currentTarget as FileReader)?.result
          if (result) {
            setUploadedImages((prev) => [...prev, result as string])
          }
        }
        reader.readAsDataURL(files[i])
      }
    }
  }

  const removeImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#0A0B14]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Enterprise AI Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Select a service and upload your dashboard/product images to visualize your AI transformation
          </p>
        </motion.div>

        {/* Main Service Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - Service List */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-4"
          >
            {services.map((service, index) => {
              const ServiceIcon = service.icon
              const isSelected = selectedService === index

              return (
                <motion.button
                  key={service.id}
                  onClick={() => {
                    setSelectedService(index)
                    setUploadedImages([])
                  }}
                  whileHover={{ scale: 1.02 }}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                    isSelected
                      ? `border-white/50 bg-gradient-to-br ${service.gradient} bg-opacity-10`
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} p-3 flex items-center justify-center shrink-0`}>
                      <ServiceIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className={`font-bold text-lg mb-1 ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm ${isSelected ? 'text-gray-300' : 'text-gray-500'}`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </motion.div>

          {/* Right Side - Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="rounded-3xl border border-white/10 p-8 lg:p-12 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
              {/* Service Header */}
              <div className="mb-8">
                <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${currentService.gradient} bg-opacity-10 border border-white/10 mb-4`}>
                  <Icon className="w-4 h-4 text-white" />
                  <span className="text-sm font-semibold text-white">Featured Service</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                  {currentService.title}
                </h3>
                <p className="text-gray-400 text-lg">
                  {currentService.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentService.benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentService.gradient}`} />
                    {benefit}
                  </motion.div>
                ))}
              </div>

              {/* Image Upload Area */}
              <motion.div
                key={selectedService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <label className="block text-sm font-semibold text-white mb-4">
                  Upload Dashboard & Product Images
                </label>

                {/* Drag Drop Area */}
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`relative rounded-2xl border-2 border-dashed p-8 text-center transition-all duration-300 cursor-pointer ${
                    dragActive
                      ? 'border-indigo-400 bg-indigo-500/10'
                      : 'border-white/20 bg-white/5 hover:border-white/30'
                  }`}
                >
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-white font-medium mb-1">Drag and drop your images here</p>
                  <p className="text-sm text-gray-400">Or click to browse (up to 4 images)</p>
                </div>

                {/* Uploaded Images Grid */}
                {uploadedImages.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4"
                  >
                    {uploadedImages.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative group"
                      >
                        <div className="relative h-24 rounded-lg overflow-hidden border border-white/10 bg-white/5">
                          <img
                            src={image}
                            alt={`Upload ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={() => removeImage(index)}
                            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                          >
                            <X className="w-5 h-5 text-white" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>

              {/* CTA */}
              <Button variant="primary" className="w-full">
                Request Custom Quote
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Features Below */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        >
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:border-white/20 transition-colors">
            <h4 className="text-lg font-bold text-white mb-2">500+</h4>
            <p className="text-gray-400">Companies transformed</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:border-white/20 transition-colors">
            <h4 className="text-lg font-bold text-white mb-2">$50M+</h4>
            <p className="text-gray-400">Client value generated</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:border-white/20 transition-colors">
            <h4 className="text-lg font-bold text-white mb-2">99.9%</h4>
            <p className="text-gray-400">System uptime</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

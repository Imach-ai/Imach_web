'use client'

import { motion } from 'framer-motion'
import { Zap, TrendingUp, Heart, Share2 } from 'lucide-react'
import Button from '@/components/atoms/Button'
import { useUIStore } from '@/lib/store'

interface Post {
  id: string
  author: string
  handle: string
  avatar: string
  timestamp: string
  content: string
  category: string
  image?: string
  engagement: {
    likes: number
    shares: number
  }
}

const posts: Post[] = [
  {
    id: '1',
    author: 'Targa',
    handle: '@simonhe',
    avatar: '👤',
    timestamp: '0s ago',
    content: 'Funniest part of building Intelliask:\n\nNo AI actually "gets" your project until it trips on all the weird undocumented edge cases\n\nso we just made that its job',
    category: 'Product',
    engagement: { likes: 234, shares: 45 }
  },
  {
    id: '2',
    author: 'Targa',
    handle: '@simonhe',
    avatar: '👤',
    timestamp: '0s ago',
    content: 'vibe coding sounds like the future\n\nuntil you realise it\'s just vulnerability in a shiny wrapper no one ordered',
    category: 'Trending',
    image: '🌅',
    engagement: { likes: 156, shares: 32 }
  },
  {
    id: '3',
    author: 'calma',
    handle: '@calmaweb',
    avatar: '👤',
    timestamp: '2h ago',
    content: 'Just shipped 3 features before morning coffee ☕',
    category: 'Product',
    engagement: { likes: 89, shares: 12 }
  }
]

const categories = [
  { name: 'All', count: 10, icon: '⭐' },
  { name: 'Products', count: 1, icon: '🔒' },
  { name: 'Trending', count: 2, icon: '❤️' },
  { name: 'Media', count: 2, icon: '📱' },
  { name: 'Viral', count: 5, icon: '⚡' }
]

const features = [
  {
    title: 'Discover Trends',
    description: 'Instantly see what\'s buzzing and trending in your space today',
    icon: TrendingUp
  },
  {
    title: 'Spy the Format',
    description: 'Break down how top tweets are structured and organized for virality',
    icon: Share2
  },
  {
    title: 'Save What Inspires',
    description: 'Bookmark high-performing posts and content to remix later',
    icon: Heart
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export default function AdvancedInspirationEngine() {
  const { theme } = useUIStore()
  const isDark = theme === 'dark'
  
  return (
    <section className={`relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#0A0B14]' : 'bg-white'
    }`}>
      {/* Animated Background Orbs */}
      <motion.div
        className={`absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl ${
          isDark ? 'bg-purple-500/10' : 'bg-purple-300/10'
        }`}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className={`absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl ${
          isDark ? 'bg-pink-500/10' : 'bg-pink-300/10'
        }`}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Background */}
      <div className={`absolute inset-0 transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-b from-[#0A0B14] via-[#1a1b2e] to-[#0A0B14]'
          : 'bg-white'
      }`} />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Advanced Inspiration Engine
            </h2>
          </div>
          <h3 className={`text-5xl md:text-6xl font-bold mb-4 max-w-2xl transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-950'
          }`}>
            Never run out of content ideas again
          </h3>
          <p className={`text-xl max-w-2xl transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-700'
          }`}>
            SuperX scans top-performing posts in your niche, so you're always one step ahead.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Feature List */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="lg:col-span-1 space-y-6"
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: idx * 0.1,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                  }}
                  className="group cursor-pointer"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-purple-500/40 group-hover:to-pink-500/40 transition-all duration-300">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-lg font-semibold mb-1 transition-colors duration-300 ${
                        isDark 
                          ? 'text-white group-hover:text-purple-400'
                          : 'text-gray-950 group-hover:text-purple-700'
                      }`}>
                        {feature.title}
                      </h4>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDark
                          ? 'text-gray-400 group-hover:text-gray-300'
                          : 'text-gray-700 group-hover:text-gray-800'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Center - Feed */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="lg:col-span-2"
          >
            {/* Categories */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {categories.map((cat, idx) => (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: idx * 0.05,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    idx === 0
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : isDark
                        ? 'border border-white/20 text-gray-400 hover:border-white/40 hover:text-white'
                        : 'border border-gray-300 text-gray-800 hover:border-gray-400 hover:text-gray-950'
                  }`}
                >
                  <span>{cat.icon}</span>
                  {cat.name} <span className="text-xs opacity-70">{cat.count}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* Posts Feed */}
            <motion.div 
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {posts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: idx * 0.1,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                  }}
                  whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 30 } }}
                  className={`rounded-xl p-6 transition-all duration-300 backdrop-blur-sm ${
                    isDark
                      ? 'bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10'
                      : 'bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl">
                      {post.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className={`font-bold transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-950'
                        }`}>{post.author}</h4>
                        <span className={`text-sm transition-colors duration-300 ${
                          isDark ? 'text-gray-500' : 'text-gray-600'
                        }`}>{post.handle}</span>
                        <span className={`text-sm transition-colors duration-300 ${
                          isDark ? 'text-gray-600' : 'text-gray-500'
                        }`}>·</span>
                        <span className={`text-sm transition-colors duration-300 ${
                          isDark ? 'text-gray-600' : 'text-gray-500'
                        }`}>{post.timestamp}</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className={`text-base leading-relaxed mb-4 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-800'
                  }`}>
                    {post.content}
                  </p>

                  {post.image && (
                    <div className="w-full h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center text-4xl mb-4">
                      {post.image}
                    </div>
                  )}

                  <div className={`flex items-center justify-between pt-4 transition-colors duration-300 ${
                    isDark ? 'border-t border-white/10' : 'border-t border-gray-200'
                  }`}>
                    <div className={`flex items-center gap-4 text-sm transition-colors duration-300 ${
                      isDark ? 'text-gray-500' : 'text-gray-700'
                    }`}>
                      <motion.button
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2 hover:text-pink-400 transition-colors"
                      >
                        <Heart className="w-4 h-4" />
                        {post.engagement.likes}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                      >
                        <Share2 className="w-4 h-4" />
                        {post.engagement.shares}
                      </motion.button>
                    </div>
                    <Button variant="ghost" size="sm">
                      Use Tweet
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Sparkles, Minimize2 } from 'lucide-react'
import { useUIStore } from '@/lib/store'
import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const suggestedQuestions = [
  'What services do you offer?',
  'How much does a website cost?',
  'Can you help with MVP development?',
  'Do you offer maintenance plans?',
]

const quickResponses: Record<string, string> = {
  pricing: "I'd be happy to help with pricing! We offer three main tiers:\n\n🚀 Starter ($2,999) - AI website + chatbot\n📈 Growth ($7,999) - Complete system with dashboard\n🏢 Enterprise ($19,999+) - Full MVP development\n\nWhich solution interests you most?",
  services: "We specialize in four core AI-powered services:\n\n1. AI Websites with Smart Chatbots - Your 24/7 sales team\n2. Custom Dashboards & Analytics - Executive intelligence\n3. MVP Development - Zero to launch in 30 days\n4. Pitch Decks & Infographics - Narrative intelligence\n\nWhat would you like to learn more about?",
  mvp: "Our MVP Development service gets you from concept to launch in 30 days! We provide:\n\n✓ Full-stack development\n✓ AI integration & automation\n✓ Responsive design\n✓ Testing & deployment\n✓ 6 months support\n\nShall I schedule a technical consultation for you?",
  contact: "I'd love to connect you with our team! What works best for you?\n\n📧 Email: hello@imach.ai\n📞 Book a call: Available M-F 9am-6pm\n💬 Continue chatting here - I can answer questions right away!\n\nHow would you prefer to proceed?",
}

export default function Chatbot() {
  const { chatbotOpen, toggleChatbot } = useUIStore()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm Aria, your AI assistant. I can help you find the perfect solution for your business. What brings you to Imach.ai today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  useEffect(() => {
    scrollToBottom()
  }, [messages])
  
  useEffect(() => {
    if (!chatbotOpen) return
    
    // Proactive engagement after 30 seconds
    const timer = setTimeout(() => {
      if (messages.length === 1) {
        addMessage('assistant', "I noticed you're exploring our pricing. Would you like me to recommend a plan based on your company size?")
      }
    }, 30000)
    
    return () => clearTimeout(timer)
  }, [chatbotOpen, messages.length])
  
  const addMessage = (role: 'user' | 'assistant', content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      role,
      content,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }
  
  const getResponse = (userMessage: string): string => {
    const lower = userMessage.toLowerCase()
    
    if (lower.includes('price') || lower.includes('cost') || lower.includes('pricing')) {
      return quickResponses.pricing
    } else if (lower.includes('service') || lower.includes('offer') || lower.includes('do')) {
      return quickResponses.services
    } else if (lower.includes('mvp') || lower.includes('develop')) {
      return quickResponses.mvp
    } else if (lower.includes('contact') || lower.includes('talk') || lower.includes('email')) {
      return quickResponses.contact
    } else {
      return "That's a great question! While I'm still learning, I can connect you with a human expert who can provide detailed answers. Would you like me to schedule a call, or can I help with anything else right now?"
    }
  }
  
  const handleSend = async () => {
    if (!input.trim()) return
    
    const userMessage = input.trim()
    setInput('')
    addMessage('user', userMessage)
    
    setIsTyping(true)
    
    // Simulate AI thinking
    setTimeout(() => {
      const response = getResponse(userMessage)
      addMessage('assistant', response)
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }
  
  const handleQuickQuestion = (question: string) => {
    setInput(question)
  }
  
  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!chatbotOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleChatbot}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/50 flex items-center justify-center text-white"
          >
            <Sparkles className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Chatbot Window */}
      <AnimatePresence>
        {chatbotOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[400px] h-[600px] rounded-2xl shadow-2xl overflow-hidden bg-[#1F2937] border border-white/10"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Aria</h3>
                  <p className="text-xs text-white/80">AI Assistant • Online</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={toggleChatbot}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Minimize2 className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={toggleChatbot}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
            
            {/* Messages */}
            <div className="h-[calc(100%-140px)] overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-indigo-500 text-white'
                        : 'bg-white/5 text-gray-200'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <p className="text-xs opacity-50 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/5 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Quick Questions */}
              {messages.length === 1 && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-400 px-2">Quick questions:</p>
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => handleQuickQuestion(question)}
                      className="w-full text-left px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm text-gray-300 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

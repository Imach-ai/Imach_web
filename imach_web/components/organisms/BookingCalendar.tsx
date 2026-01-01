'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin } from 'lucide-react'
import Button from '@/components/atoms/Button'

interface TimeSlot {
  time: string
  available: boolean
}

interface BookingData {
  date: string
  time: string
  name: string
  email: string
}

export default function BookingCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 15))
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [bookingData, setBookingData] = useState<Partial<BookingData>>({})
  const [step, setStep] = useState<'date' | 'time' | 'form' | 'success'>('date')

  // Time slots
  const timeSlots: TimeSlot[] = [
    { time: '09:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: false },
    { time: '02:00 PM', available: true },
    { time: '03:00 PM', available: true },
    { time: '04:00 PM', available: true },
  ]

  // Calendar generation
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const days = []
  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)

  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const handleDateSelect = (day: number) => {
    const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    setSelectedDate(selected.toISOString().split('T')[0])
    setStep('time')
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setStep('form')
  }

  const handleSubmit = () => {
    setStep('success')
    setTimeout(() => {
      setStep('date')
      setSelectedDate(null)
      setSelectedTime(null)
      setBookingData({})
    }, 3000)
  }

  const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A0B14] to-[#1a1a2e]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Book Your AI Transformation
          </h2>
          <p className="text-xl text-gray-400">
            Schedule a 30-minute technical consultation with our team
          </p>
        </motion.div>

        {/* Calendar Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 p-8 lg:p-12 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm"
        >
          <AnimatePresence mode="wait">
            {step === 'date' && (
              <motion.div
                key="date"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-white">{monthName}</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrevMonth}
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={handleNextMonth}
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Day Headers */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center text-sm font-semibold text-gray-400 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-2">
                  {days.map((day, index) => (
                    <motion.button
                      key={index}
                      onClick={() => day && handleDateSelect(day)}
                      disabled={!day}
                      className={`aspect-square rounded-lg font-semibold transition-all ${
                        !day
                          ? 'invisible'
                          : `${
                              selectedDate === `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
                                ? 'bg-indigo-500 text-white border-indigo-500'
                                : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                            }`
                      }`}
                      whileHover={day ? { scale: 1.05 } : {}}
                      whileTap={day ? { scale: 0.95 } : {}}
                    >
                      {day}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 'time' && (
              <motion.div
                key="time"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Select Time</h3>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {selectedDate}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {timeSlots.map((slot) => (
                    <motion.button
                      key={slot.time}
                      onClick={() => slot.available && handleTimeSelect(slot.time)}
                      disabled={!slot.available}
                      className={`p-4 rounded-xl border-2 font-semibold transition-all flex items-center justify-center gap-2 ${
                        !slot.available
                          ? 'border-red-500/30 bg-red-500/5 text-gray-400 cursor-not-allowed'
                          : selectedTime === slot.time
                          ? 'border-indigo-500 bg-indigo-500/10 text-white'
                          : 'border-white/10 bg-white/5 text-white hover:border-white/20'
                      }`}
                      whileHover={slot.available ? { scale: 1.05 } : {}}
                      whileTap={slot.available ? { scale: 0.95 } : {}}
                    >
                      <Clock className="w-4 h-4" />
                      {slot.time}
                      {!slot.available && <span className="text-xs">Booked</span>}
                    </motion.button>
                  ))}
                </div>

                <Button
                  variant="secondary"
                  onClick={() => setStep('date')}
                  className="w-full"
                >
                  Back to Calendar
                </Button>
              </motion.div>
            )}

            {step === 'form' && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Confirm Your Booking</h3>
                  <div className="grid grid-cols-2 gap-4 p-6 rounded-xl bg-white/5 border border-white/10 mb-8">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-indigo-400" />
                      <span className="text-white">{selectedDate}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-indigo-400" />
                      <span className="text-white">{selectedTime}</span>
                    </div>
                    <div className="col-span-2 flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-indigo-400" />
                      <span className="text-white">Video Call via Zoom</span>
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={bookingData.name || ''}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={bookingData.email || ''}
                      onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="secondary"
                    onClick={() => setStep('time')}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleSubmit}
                    disabled={!bookingData.name || !bookingData.email}
                    className="flex-1"
                  >
                    Confirm Booking
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mx-auto mb-6"
                >
                  <span className="text-4xl">✓</span>
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-2">Booking Confirmed!</h3>
                <p className="text-gray-400 mb-8">
                  Check your email for a confirmation and Zoom link
                </p>
                <p className="text-gray-500 text-sm">
                  We'll see you on {selectedDate} at {selectedTime}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/10 p-6 bg-white/5"
          >
            <Calendar className="w-6 h-6 text-indigo-400 mb-3" />
            <h4 className="font-bold text-white mb-2">30-Minute Session</h4>
            <p className="text-sm text-gray-400">Deep dive into your AI transformation goals</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-white/10 p-6 bg-white/5"
          >
            <Clock className="w-6 h-6 text-cyan-400 mb-3" />
            <h4 className="font-bold text-white mb-2">Expert Guidance</h4>
            <p className="text-sm text-gray-400">1-on-1 with our technical team</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-white/10 p-6 bg-white/5"
          >
            <MapPin className="w-6 h-6 text-purple-400 mb-3" />
            <h4 className="font-bold text-white mb-2">Virtual Meeting</h4>
            <p className="text-sm text-gray-400">Connect via Zoom from anywhere</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

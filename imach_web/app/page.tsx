import Navigation from '@/components/organisms/Navigation'
import Hero from '@/components/organisms/Hero'
import AdvancedInspirationEngine from '@/components/organisms/AdvancedInspirationEngine'
import TestimonialsSection from '@/components/organisms/TestimonialsSection'
import BookingCalendar from '@/components/organisms/BookingCalendar'
import PricingSection from '@/components/organisms/PricingSection'
import Footer from '@/components/organisms/Footer'
import Chatbot from '@/components/organisms/Chatbot'

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--background)' }}>
      <Navigation />
      <Hero />
      <AdvancedInspirationEngine />
      <TestimonialsSection />
      <BookingCalendar />
      <PricingSection />
      <Footer />
      <Chatbot />
    </main>
  )
}

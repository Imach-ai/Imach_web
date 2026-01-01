import Navigation from '@/components/organisms/Navigation'
import Hero from '@/components/organisms/Hero'
import ServicesSection from '@/components/organisms/ServicesSection'
import TestimonialsSection from '@/components/organisms/TestimonialsSection'
import BookingCalendar from '@/components/organisms/BookingCalendar'
import PricingSection from '@/components/organisms/PricingSection'
import Footer from '@/components/organisms/Footer'
import Chatbot from '@/components/organisms/Chatbot'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0B14]">
      <Navigation />
      <Hero />
      <ServicesSection />
      <TestimonialsSection />
      <BookingCalendar />
      <PricingSection />
      <Footer />
      <Chatbot />
    </main>
  )
}

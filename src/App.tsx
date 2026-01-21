import { useState } from 'react'
import Header from './components/layout/Header'
import HeroSection from './components/layout/HeroSection'
import FeaturesSection from './components/sections/FeaturesSection'
import HowItWorksSection from './components/sections/HowItWorksSection'
import BenefitsSection from './components/sections/BenefitsSection'
import CTASection from './components/sections/CTASection'
import Footer from './components/layout/Footer'
import ContactModal from './components/base/ContactModal'

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleContactClick = () => {
    setIsContactModalOpen(true)
  }
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <Header onContactClick={handleContactClick} />
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <CTASection onContactClick={handleContactClick} />
      </main>

      {/* Footer */}
      <Footer onContactClick={handleContactClick} />

      {/* Global Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  )
}

export default App

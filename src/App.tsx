import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FeaturedProperties } from './components/FeaturedProperties';
import { DiversePortfolio } from './components/DiversePortfolio';
import { CommitmentSection } from './components/CommitmentSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { CtaSection } from './components/CtaSection';
import { BookingSection } from './components/BookingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { DentalService } from './data/siteData';
import { Check } from 'lucide-react';

export default function App() {
  const [selectedTreatment, setSelectedTreatment] = useState<string>('Comprehensive Preventive Care');
  const [initialBookingNote, setInitialBookingNote] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize smooth momentum scrolling (Lenis) for enhanced luxury feel
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  /**
   * Unified navigation to booking section:
   * Smoothly scrolls to #booking and pre-selects the requested treatment and note
   */
  const scrollToBooking = (treatmentName?: string, note?: string) => {
    if (treatmentName) {
      setSelectedTreatment(treatmentName);
    }
    if (note) {
      setInitialBookingNote(note);
    }
    const target = document.getElementById('booking');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroSearch = (query: string) => {
    showToast(`Navigating to booking for "${query}"`);
    scrollToBooking(undefined, `Inquiry: ${query}`);
  };

  const handleHeroRequest = (query: string) => {
    showToast(`Ready to schedule for "${query}". Please confirm your time.`);
    scrollToBooking(undefined, `Requested service: ${query}`);
  };

  const handleSelectCategory = (categoryTitle: string) => {
    let mapped = 'Comprehensive Preventive Care';
    const lower = categoryTitle.toLowerCase();
    if (lower.includes('cosmetic')) {
      mapped = 'Cosmetic Porcelain Veneers';
    } else if (lower.includes('implant') || lower.includes('reconstruct') || lower.includes('surgery')) {
      mapped = 'Titanium Dental Implants';
    } else if (lower.includes('ortho') || lower.includes('align')) {
      mapped = 'Invisalign® Clear Aligners';
    } else if (lower.includes('emergency') || lower.includes('pain')) {
      mapped = 'Emergency Dental Relief';
    }
    showToast(`Selected ${categoryTitle} for online booking`);
    scrollToBooking(mapped, `Interested in ${categoryTitle}`);
  };

  const handleSelectServiceCard = (service: DentalService) => {
    showToast(`Selected ${service.title} for appointment booking`);
    scrollToBooking(service.title, `Selected procedure: ${service.tag}`);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-neutral-900 font-sans selection:bg-cyan-900 selection:text-white transition-colors duration-300">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-neutral-900 text-white text-xs font-medium tracking-wide shadow-2xl flex items-center gap-2.5 border border-cyan-800"
          >
            <Check className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Top Header */}
      <Navbar onNavigateToBooking={() => scrollToBooking()} />

      <main>
        {/* Section 1: Hero with seamless crossfade */}
        <Hero onNavigateToBooking={(query) => query ? handleHeroRequest(query) : scrollToBooking()} />

        {/* Section 2: About Empire Corporation Dental with Parallax Cards */}
        <AboutSection onNavigateToBooking={() => scrollToBooking()} />

        {/* Section 3: Featured Dental Procedures (Clicking any card scrolls to booking) */}
        <FeaturedProperties onSelectService={handleSelectServiceCard} />

        {/* Section 4: Diverse Clinical Specialties + Swimming Pool Marquee Ribbon */}
        <DiversePortfolio onSelectCategory={handleSelectCategory} />

        {/* Section 5: Our Clinical Commitment to You */}
        <CommitmentSection />

        {/* Section 6: Testimonials */}
        <TestimonialsSection />

        {/* Section 7: Dental Health Journal */}
        <BlogSection
          onNavigateToBooking={(topic) => {
            scrollToBooking('General Dental Consultation', topic ? `Article inquiry: ${topic}` : undefined);
            showToast('Ready to schedule your dental consultation.');
          }}
        />

        {/* Section 8: CTA Banner with Caustic Pool Background */}
        <CtaSection onNavigateToBooking={() => scrollToBooking()} />

        {/* Section 9: Dedicated Online Booking Section (Direct on-page treatment reservation form) */}
        <BookingSection
          selectedTreatmentName={selectedTreatment}
          initialNote={initialBookingNote}
          onBookingSuccess={(details) =>
            showToast(`Appointment request received for ${details.name} on ${details.date}!`)
          }
        />

        {/* Section 10: FAQ Accordions */}
        <FaqSection />
      </main>

      {/* Section 11: Footer */}
      <Footer onNavigateToBooking={() => scrollToBooking()} />

      {/* Floating Bottom-Right Buttons */}
      <FloatingWidgets
        onNavigateToBooking={() => scrollToBooking()}
        onNavigateToEmergency={() => {
          scrollToBooking('Emergency Dental Relief', 'Urgent Emergency Dental Attention Needed');
          showToast('Priority emergency relief active. Complete the form below.');
        }}
      />
    </div>
  );
}

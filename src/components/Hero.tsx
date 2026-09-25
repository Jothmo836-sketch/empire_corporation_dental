import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { Search, Award, ChevronLeft, ChevronRight, Send, Check, Calendar, MapPin, Sparkles } from 'lucide-react';
import { HERO_SLIDES, CLINIC_INFO } from '../data/siteData.ts';

interface HeroProps {
  onNavigateToBooking: (query?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [requestSent, setRequestSent] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  const contentY = useTransform(smoothProgress, [0, 1], [0, -100]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.75], [1, 0]);
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.15]);
  const bgY = useTransform(smoothProgress, [0, 1], ['0%', '15%']);

  // Auto-advance slides every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handleSendRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestSent(true);
    setTimeout(() => {
      setRequestSent(false);
      onNavigateToBooking(searchQuery.trim() || undefined);
    }, 300);
  };

  return (
    <section
      ref={heroRef}
      id="overview"
      className="relative w-full h-[96vh] min-h-[680px] overflow-hidden flex items-center justify-center bg-black"
    >
      {/* Background Slideshow: Continuous Seamless Crossfade without white flashes */}
      <motion.div style={{ scale: bgScale, y: bgY }} className="absolute inset-0 bg-black">
        <AnimatePresence initial={false}>
          <motion.div
            key={HERO_SLIDES[currentSlide].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <img
              src={HERO_SLIDES[currentSlide].image}
              alt={HERO_SLIDES[currentSlide].caption}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {/* Cinematic Scrims */}
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Main Hero Foreground Content with Scroll Parallax */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center pt-16"
      >
        {/* Welcome Tag Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white/95 text-[11px] sm:text-xs tracking-[0.2em] uppercase font-light mb-6 shadow-sm"
        >
          <span className="text-cyan-400">✦</span>
          <span>WELCOME TO EMPIRE CORPORATION DENTAL</span>
          <span className="text-cyan-400">✦</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] tracking-[0.14em] font-light text-white leading-none mb-4 drop-shadow-md uppercase"
        >
          SMILES ELEVATED
        </motion.h1>

        {/* Location Subtext */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex items-center gap-2 text-white/80 text-xs sm:text-sm tracking-widest uppercase font-light mb-8"
        >
          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
          <span>2030 NW 22ND AVE, MIAMI, FL 33142</span>
        </motion.div>

        {/* Interactive Search Bar & Direct Booking CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="w-full max-w-3xl flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          {/* Appointment Request Search Form Pill */}
          <form
            onSubmit={handleSendRequest}
            className="w-full md:flex-1 bg-white/95 backdrop-blur-md rounded-full shadow-2xl p-1.5 sm:p-2 flex items-center border border-white/40 transition-all focus-within:ring-2 focus-within:ring-cyan-500/30"
          >
            <div className="pl-4 pr-2 text-neutral-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatment: Veneers, Implants, Cleanings, Whitening..."
              className="w-full bg-transparent text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none py-2 pr-2"
            />
            <button
              type="submit"
              className="shrink-0 bg-neutral-900 hover:bg-neutral-800 text-white text-[11px] sm:text-xs uppercase font-medium tracking-wider px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
            >
              {requestSent ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>BOOKING...</span>
                </>
              ) : (
                <>
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>BOOK TREATMENT</span>
                </>
              )}
            </button>
          </form>

          {/* 2025 Best Dental Care Laurel Pill */}
          <div className="shrink-0 bg-white/90 backdrop-blur-md rounded-full px-5 py-2.5 sm:py-3 border border-white/40 shadow-xl flex items-center gap-2 text-neutral-900 text-xs tracking-wider uppercase font-semibold">
            <Award className="w-4 h-4 text-amber-500" />
            <span className="text-[11px] sm:text-xs tracking-widest font-serif">2025 BEST DENTAL CARE</span>
            <Award className="w-4 h-4 text-amber-500" />
          </div>
        </motion.div>

        {/* Slide Indicators Navigation */}
        <div className="flex items-center gap-2 mt-8">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full h-1.5 ${
                currentSlide === idx ? 'w-8 bg-cyan-400' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating subtle arrows for manual navigation */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-md text-white border border-white/20 items-center justify-center transition-all hover:scale-105"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
        aria-label="Next slide"
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-md text-white border border-white/20 items-center justify-center transition-all hover:scale-105"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </section>
  );
};

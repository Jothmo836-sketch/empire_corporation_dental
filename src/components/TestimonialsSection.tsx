import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#0c1317] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-[11px] tracking-[0.2em] uppercase font-medium mb-4 border border-cyan-800/40"
          >
            <span>✦</span>
            <span>PATIENT EXPERIENCES</span>
            <span>✦</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide uppercase font-light text-white mb-4"
          >
            TRUSTED BY OUR PATIENTS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-xs sm:text-sm font-light tracking-wide"
          >
            Real stories of restored oral health, radiant confidence, and pain-free dental visits.
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white text-neutral-900 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12"
              >
                {/* Portrait Image */}
                <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 shrink-0 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Quote Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Brand Tag */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 text-[10px] uppercase tracking-widest font-semibold mb-6 border border-cyan-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                    <span>{current.treatment}</span>
                  </div>

                  {/* Main Quote */}
                  <p className="font-serif text-lg sm:text-xl md:text-2xl text-neutral-900 tracking-wide uppercase font-normal leading-snug mb-8">
                    {current.quote}
                  </p>

                  {/* Attribution */}
                  <div>
                    <h4 className="font-serif text-base font-semibold text-neutral-900 tracking-wider uppercase">
                      {current.name}
                    </h4>
                    <p className="text-xs text-neutral-500 font-sans tracking-wide">
                      {current.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center transition-all cursor-pointer hover:border-cyan-500"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i ? 'w-8 bg-cyan-400' : 'w-2 bg-neutral-700'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center transition-all cursor-pointer hover:border-cyan-500"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

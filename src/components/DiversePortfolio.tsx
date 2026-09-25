import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { Sparkles, Smile, ShieldCheck, HeartHandshake, ArrowRight, Zap, Stethoscope } from 'lucide-react';
import { DENTAL_SPECIALTIES, MARQUEE_ITEMS } from '../data/siteData';

interface DiverseSpecialtiesProps {
  onSelectCategory: (categoryName: string) => void;
}

export const DiversePortfolio: React.FC<DiverseSpecialtiesProps> = ({ onSelectCategory }) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const portraitY = useTransform(smoothProgress, [0, 1], [-25, 25]);
  const bannerY = useTransform(smoothProgress, [0.3, 1], [40, -20]);

  const activeCategory = DENTAL_SPECIALTIES[activeCategoryIndex];

  const getIcon = (id: string) => {
    switch (id) {
      case 'cosmetic':
        return <Sparkles className="w-5 h-5" />;
      case 'implants':
        return <ShieldCheck className="w-5 h-5" />;
      case 'ortho':
        return <Smile className="w-5 h-5" />;
      default:
        return <Stethoscope className="w-5 h-5" />;
    }
  };

  return (
    <section ref={containerRef} id="specialties" className="pt-24 md:pt-32 pb-0 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100/70 text-cyan-800 text-[11px] tracking-[0.2em] uppercase font-medium mb-4 border border-cyan-200/50"
          >
            <span>✦</span>
            <span>CLINICAL EXCELLENCE</span>
            <span>✦</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide uppercase font-light text-neutral-900 mb-4"
          >
            EXPLORE OUR DENTAL SPECIALTIES
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 text-sm sm:text-base font-light"
          >
            From preventive family care to complex full-mouth reconstructions and cosmetic makeovers.
          </motion.p>
        </div>

        {/* 3-Column Interactive Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Portrait of Patient with Parallax */}
          <motion.div
            style={{ y: portraitY }}
            className="lg:col-span-4 rounded-3xl overflow-hidden shadow-xl bg-neutral-100 min-h-[380px] lg:min-h-[460px] relative group"
          >
            <img
              src="/src/assets/images/empire_hero_smile_1790291733723.jpg"
              alt="Empire Dental patient smile"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-xs uppercase tracking-widest text-cyan-300 font-medium">Patient Experience</span>
              <p className="font-serif text-lg text-white">Crafted for Comfort &amp; Confidence</p>
            </div>
          </motion.div>

          {/* Center Column: Active Specialty Highlight Card */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="h-full bg-[#1b2b34] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden border border-cyan-900/40"
              >
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-cyan-400 font-medium mb-3">
                    CLINICAL DIVISION
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-wide uppercase font-light text-white mb-6">
                    {activeCategory.title}
                  </h3>
                  <p className="text-neutral-200 text-sm sm:text-base leading-relaxed font-light mb-6">
                    {activeCategory.subtitle}
                  </p>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {activeCategory.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/15 flex items-center justify-between">
                  <span className="text-xs tracking-wider uppercase font-medium text-cyan-300">
                    {activeCategory.stat}
                  </span>
                  <button
                    onClick={() => onSelectCategory(activeCategory.title)}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-white hover:text-cyan-300 transition-colors"
                  >
                    <span>Book This Treatment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Interactive Category Selector */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
            {DENTAL_SPECIALTIES.map((item, idx) => {
              const isActive = activeCategoryIndex === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border flex items-start gap-4 ${
                    isActive
                      ? 'bg-white border-neutral-900 shadow-md translate-x-1'
                      : 'bg-white/60 hover:bg-white border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl transition-colors ${
                      isActive ? 'bg-cyan-900 text-white' : 'bg-neutral-100 text-neutral-600'
                    }`}
                  >
                    {getIcon(item.id)}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-medium text-neutral-900 uppercase tracking-wide mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-neutral-500 font-light leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Ripple Caustic Water Infinite Marquee Banner */}
      <motion.div
        style={{ y: bannerY }}
        className="relative w-full h-24 sm:h-28 overflow-hidden flex items-center shadow-lg"
      >
        {/* Caustic Swimming Pool / Clean Water Background */}
        <div
          className="absolute inset-0 bg-cover bg-center caustic-bg"
          style={{ backgroundImage: `url('/src/assets/images/pool_caustic_water_1790289673399.jpg')` }}
        >
          <div className="absolute inset-0 bg-cyan-950/40 backdrop-blur-[2px]" />
        </div>

        {/* Marquee Track */}
        <div className="relative z-10 w-full overflow-hidden">
          <div className="animate-marquee flex items-center gap-6">
            {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-white/60 text-neutral-900 text-xs sm:text-sm font-medium tracking-wider uppercase shrink-0 transition-transform hover:scale-105"
              >
                <div className="w-5 h-5 rounded-full bg-cyan-600 text-white flex items-center justify-center text-[10px]">
                  ✓
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

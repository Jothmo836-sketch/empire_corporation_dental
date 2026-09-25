import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowUpRight, Calendar, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/siteData.ts';

interface CtaSectionProps {
  onNavigateToBooking: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onNavigateToBooking }) => {
  const ctaRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });
  const waterY = useTransform(smoothProgress, [0, 1], ['-12%', '12%']);
  const cardScale = useTransform(smoothProgress, [0.1, 0.5], [0.93, 1]);
  const cardY = useTransform(smoothProgress, [0.1, 0.5], [40, 0]);

  return (
    <section
      ref={ctaRef}
      className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center min-h-[580px]"
    >
      {/* Dynamic Swimming Pool Caustic Water Background with Parallax */}
      <motion.div
        style={{ y: waterY, scale: 1.15 }}
        className="absolute inset-0 bg-cover bg-center caustic-bg"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/src/assets/images/pool_caustic_water_1790289673399.jpg')` }}
        />
        <div className="absolute inset-0 bg-cyan-900/30 backdrop-blur-[1px]" />
      </motion.div>

      {/* Center Floating White Card */}
      <motion.div
        style={{
          scale: cardScale,
          y: cardY,
        }}
        className="relative z-10 w-full max-w-xl bg-white/95 backdrop-blur-md rounded-[2.5rem] p-8 sm:p-12 md:p-14 text-center shadow-2xl border border-white/80"
      >
        {/* Tag */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-50 text-cyan-800 text-[11px] tracking-[0.2em] uppercase font-medium mb-6 border border-cyan-100">
          <span>✦</span>
          <span>START YOUR SMILE TRANSFORMATION</span>
          <span>✦</span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase font-light text-neutral-900 tracking-wide mb-4 leading-tight">
          LET&apos;S RESTORE YOUR HEALTHIEST SMILE
        </h2>

        {/* Subtitle */}
        <p className="text-neutral-600 text-sm sm:text-base font-light mb-8 max-w-md mx-auto leading-relaxed">
          Experience gentle, comprehensive dentistry in Miami — where your comfort, peace of mind, and radiant confidence come first.
        </p>

        {/* Primary CTA */}
        <button
          onClick={onNavigateToBooking}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs uppercase tracking-widest font-medium transition-all duration-300 shadow-md hover:shadow-xl active:scale-95 mb-8"
        >
          <Calendar className="w-4 h-4 text-cyan-400" />
          <span>SCHEDULE YOUR VISIT</span>
        </button>

        {/* Talk to an Agent lockup */}
        <div className="pt-6 border-t border-neutral-100 flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm border border-neutral-200">
            <img
              src="/src/assets/images/empire_doctor_lead_1790291911278.jpg"
              alt="Lead Dentist at Empire Corporation Dental"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <button
            onClick={onNavigateToBooking}
            className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-neutral-800 hover:text-cyan-800 transition-colors"
          >
            <span>Speak with Our Clinical Concierge</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

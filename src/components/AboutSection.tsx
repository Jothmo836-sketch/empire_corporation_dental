import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { ABOUT_IMAGES, CLINIC_INFO } from '../data/siteData';

interface AboutSectionProps {
  onNavigateToBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigateToBooking }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Link animation directly to scroll position
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.8,
  });

  // Top Left Image transforms (Doctor consultation)
  const tlX = useTransform(smoothProgress, [0.15, 0.9], [-180, 0]);
  const tlY = useTransform(smoothProgress, [0.15, 0.9], [-90, 0]);
  const tlOpacity = useTransform(smoothProgress, [0.15, 0.6], [0, 1]);
  const tlScale = useTransform(smoothProgress, [0.15, 0.9], [0.75, 1]);

  // Bottom Left Image transforms (Cosmetic smile macro)
  const blX = useTransform(smoothProgress, [0.2, 0.95], [-180, 0]);
  const blY = useTransform(smoothProgress, [0.2, 0.95], [90, 0]);
  const blOpacity = useTransform(smoothProgress, [0.2, 0.65], [0, 1]);
  const blScale = useTransform(smoothProgress, [0.2, 0.95], [0.75, 1]);

  // Top Right Image transforms (Modern clinic lounge)
  const trX = useTransform(smoothProgress, [0.15, 0.9], [180, 0]);
  const trY = useTransform(smoothProgress, [0.15, 0.9], [-90, 0]);
  const trOpacity = useTransform(smoothProgress, [0.15, 0.6], [0, 1]);
  const trScale = useTransform(smoothProgress, [0.15, 0.9], [0.75, 1]);

  // Bottom Right Image transforms (High-tech operatory suite)
  const brX = useTransform(smoothProgress, [0.2, 0.95], [180, 0]);
  const brY = useTransform(smoothProgress, [0.2, 0.95], [90, 0]);
  const brOpacity = useTransform(smoothProgress, [0.2, 0.65], [0, 1]);
  const brScale = useTransform(smoothProgress, [0.2, 0.95], [0.75, 1]);

  // Center card subtle breathing scale and opacity
  const centerScale = useTransform(smoothProgress, [0.05, 0.8], [0.92, 1]);
  const centerOpacity = useTransform(smoothProgress, [0.05, 0.4], [0.5, 1]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Parallax Container with 4 floating photo cards and center dark card */}
        <div className="relative min-h-[640px] md:min-h-[760px] flex items-center justify-center">
          {/* Top-Left Floating Image */}
          <motion.div
            style={{
              x: tlX,
              y: tlY,
              opacity: tlOpacity,
              scale: tlScale,
            }}
            className="hidden md:block absolute left-2 lg:left-8 top-0 w-64 lg:w-72 aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-white/60 group z-10"
          >
            <img
              src={ABOUT_IMAGES.consultation}
              alt="Compassionate dental consultation"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end">
              <span className="text-white text-xs tracking-wider uppercase font-medium">
                Personalized Consultations
              </span>
            </div>
          </motion.div>

          {/* Bottom-Left Floating Image */}
          <motion.div
            style={{
              x: blX,
              y: blY,
              opacity: blOpacity,
              scale: blScale,
            }}
            className="hidden md:block absolute left-8 lg:left-14 bottom-0 w-60 lg:w-68 aspect-square rounded-3xl overflow-hidden shadow-xl border border-white/60 group z-10"
          >
            <img
              src={ABOUT_IMAGES.smileMacro}
              alt="Artisan cosmetic dentistry result"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end">
              <span className="text-white text-xs tracking-wider uppercase font-medium">
                Handcrafted Cosmetic Veneers
              </span>
            </div>
          </motion.div>

          {/* Top-Right Floating Image */}
          <motion.div
            style={{
              x: trX,
              y: trY,
              opacity: trOpacity,
              scale: trScale,
            }}
            className="hidden md:block absolute right-2 lg:left-auto lg:right-8 top-4 w-64 lg:w-72 aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-white/60 group z-10"
          >
            <img
              src={ABOUT_IMAGES.lounge}
              alt="Modern Miami dental clinic lounge"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end">
              <span className="text-white text-xs tracking-wider uppercase font-medium">
                Relaxing Spa-Like Lounge
              </span>
            </div>
          </motion.div>

          {/* Bottom-Right Floating Image */}
          <motion.div
            style={{
              x: brX,
              y: brY,
              opacity: brOpacity,
              scale: brScale,
            }}
            className="hidden md:block absolute right-8 lg:right-14 bottom-2 w-60 lg:w-68 aspect-square rounded-3xl overflow-hidden shadow-xl border border-white/60 group z-10"
          >
            <img
              src={ABOUT_IMAGES.operatorySuite}
              alt="Digital high-tech dental operatory"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end">
              <span className="text-white text-xs tracking-wider uppercase font-medium">
                Advanced Digital Technology
              </span>
            </div>
          </motion.div>

          {/* Center Dark Hero Card (Exact match to video frames 00:20-00:41) */}
          <motion.div
            style={{
              scale: centerScale,
              opacity: centerOpacity,
            }}
            className="relative z-20 w-full max-w-lg bg-[#141416] text-white rounded-[2.5rem] p-8 sm:p-12 md:p-14 shadow-2xl border border-neutral-800 text-center flex flex-col items-center justify-center my-6 md:my-0"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-cyan-300 text-[11px] tracking-[0.2em] uppercase font-light mb-8">
              <span>✦</span>
              <span>ABOUT EMPIRE CORPORATION DENTAL</span>
              <span>✦</span>
            </div>

            {/* Core Statement */}
            <p className="text-lg sm:text-xl font-light text-neutral-200 leading-relaxed mb-10 max-w-md">
              We&apos;re more than dental practitioners — we&apos;re smile architects. For over two decades in Miami, we&apos;ve helped patients restore confidence, oral vitality, and radiant smiles.
            </p>

            {/* CTA Button */}
            <button
              onClick={onNavigateToBooking}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-neutral-900 font-medium text-xs tracking-wider uppercase transition-all duration-300 hover:bg-neutral-200 hover:shadow-lg active:scale-95"
            >
              <span>BOOK AN APPOINTMENT</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Decorative subtle corner emblem */}
            <div className="absolute top-5 right-5 text-white/10">
              <Sparkles className="w-5 h-5" />
            </div>
          </motion.div>
        </div>

        {/* Mobile Grid Fallback for images */}
        <div className="grid grid-cols-2 gap-4 mt-8 md:hidden">
          <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
            <img src={ABOUT_IMAGES.consultation} alt="Consultation" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
            <img src={ABOUT_IMAGES.smileMacro} alt="Veneers" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

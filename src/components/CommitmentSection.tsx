import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Star, Shield, Users, Layers, Cpu, Sparkles, Smile, Clock } from 'lucide-react';

export const CommitmentSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  // Animated counters
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    if (isInView) {
      // 15,000+
      let start1 = 0;
      const duration1 = 1600;
      const stepTime1 = 20;
      const totalSteps1 = duration1 / stepTime1;
      const increment1 = 15000 / totalSteps1;
      const timer1 = setInterval(() => {
        start1 += increment1;
        if (start1 >= 15000) {
          setCount1(15000);
          clearInterval(timer1);
        } else {
          setCount1(Math.floor(start1));
        }
      }, stepTime1);

      // 25 Years
      let start2 = 0;
      const timer2 = setInterval(() => {
        start2 += 1;
        if (start2 >= 25) {
          setCount2(25);
          clearInterval(timer2);
        } else {
          setCount2(start2);
        }
      }, 50);

      // 99% Satisfaction
      let start3 = 0;
      const timer3 = setInterval(() => {
        start3 += 2;
        if (start3 >= 99) {
          setCount3(99);
          clearInterval(timer3);
        } else {
          setCount3(start3);
        }
      }, 25);

      return () => {
        clearInterval(timer1);
        clearInterval(timer2);
        clearInterval(timer3);
      };
    }
  }, [isInView]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Tag & Heading */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 text-[11px] tracking-[0.2em] uppercase font-medium mb-4 border border-cyan-100"
          >
            <span>✦</span>
            <span>WHY EMPIRE DENTAL</span>
            <span>✦</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide uppercase font-light text-neutral-900"
          >
            OUR COMMITMENT TO YOUR HEALTH
          </motion.h2>
        </div>

        {/* Top 3-Card Review Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Main Review Card (Dark) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-6 bg-[#12181c] text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between border border-cyan-950/60"
          >
            <div>
              {/* 5 Stars */}
              <div className="flex items-center gap-1 mb-6 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="font-light text-neutral-200 text-base sm:text-lg leading-relaxed">
                &ldquo;Since choosing Empire Corporation Dental, going to the dentist is a peaceful, comforting experience. The doctor and staff transformed my smile with precision, empathy, and utmost warmth.&rdquo;
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-neutral-800 text-xs uppercase tracking-widest text-cyan-400">
              Verified Patient Review · Miami, FL Resident
            </div>
          </motion.div>

          {/* Right Text Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="lg:col-span-3 bg-neutral-50 p-8 rounded-3xl border border-neutral-200/70 flex flex-col justify-center"
          >
            <p className="text-neutral-700 text-sm sm:text-base font-light leading-relaxed">
              Bringing over 25 years of trusted clinical dental expertise to patients and families across Miami-Dade.
            </p>
          </motion.div>

          {/* Right Text Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="lg:col-span-3 bg-neutral-50 p-8 rounded-3xl border border-neutral-200/70 flex flex-col justify-center"
          >
            <p className="text-neutral-700 text-sm sm:text-base font-light leading-relaxed">
              Certified biocompatible dental materials, pain-free sedation options, and crystal-clear transparent pricing.
            </p>
          </motion.div>
        </div>

        {/* 3 Large Stat Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-y border-neutral-200 mb-16">
          <div className="text-left">
            <div className="font-serif text-5xl sm:text-6xl font-light text-neutral-900 tracking-tight mb-2">
              {count1.toLocaleString()}+
            </div>
            <div className="text-xs uppercase tracking-widest font-semibold text-neutral-500">
              Happy Patient Smiles
            </div>
          </div>

          <div className="text-left">
            <div className="font-serif text-5xl sm:text-6xl font-light text-neutral-900 tracking-tight mb-2">
              {count2}
            </div>
            <div className="text-xs uppercase tracking-widest font-semibold text-neutral-500">
              Years in Clinical Excellence
            </div>
          </div>

          <div className="text-left">
            <div className="font-serif text-5xl sm:text-6xl font-light text-neutral-900 tracking-tight mb-2">
              {count3}%
            </div>
            <div className="text-xs uppercase tracking-widest font-semibold text-neutral-500">
              Patient Satisfaction Rate
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-serif text-lg font-medium text-neutral-900 uppercase tracking-wide mb-2">
              Advanced 3D Technology
            </h4>
            <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
              Ultra-low radiation digital X-rays and intraoral 3D scanners for pinpoint clinical accuracy.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium text-neutral-900 uppercase tracking-wide mb-2">
              Gentle Compassionate Care
            </h4>
            <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
              Patient comfort comes first. We eliminate dental anxiety with soothing, pain-free techniques.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium text-neutral-900 uppercase tracking-wide mb-2">
              Tailored Treatment Plans
            </h4>
            <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
              Every procedure is customized to your unique dental goals, schedule, and insurance benefits.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium text-neutral-900 uppercase tracking-wide mb-2">
              Emergency Availability
            </h4>
            <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
              Dedicated same-day urgent care appointments for immediate relief from toothaches and dental trauma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

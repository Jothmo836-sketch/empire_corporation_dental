import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowUpRight, MapPin, Sparkles, Clock } from 'lucide-react';
import { FEATURED_SERVICES, DentalService } from '../data/siteData';

interface FeaturedServicesProps {
  onSelectService: (service: DentalService) => void;
}

export const FeaturedProperties: React.FC<FeaturedServicesProps> = ({ onSelectService }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(1200);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      if (trackRef.current) {
        const fullWidth = trackRef.current.scrollWidth;
        const viewWidth = window.innerWidth;
        setScrollRange(Math.max(fullWidth - viewWidth + 80, 800));
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Pinned vertical-to-horizontal scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    mass: 0.9,
  });

  // Calculate horizontal translation based on scroll progress
  const scrollX = useTransform(smoothProgress, [0.08, 0.88], [0, -scrollRange]);

  const handleArrowClick = (direction: 'left' | 'right') => {
    if (sectionRef.current) {
      const step = 450;
      if (!isDesktop) {
        if (trackRef.current) {
          trackRef.current.scrollBy({
            left: direction === 'left' ? -step : step,
            behavior: 'smooth',
          });
        }
      } else {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const currentProgress = scrollYProgress.get();
        const deltaProgress = 0.22;
        const newProgress = direction === 'right'
          ? Math.min(currentProgress + deltaProgress, 0.88)
          : Math.max(currentProgress - deltaProgress, 0.08);
        const targetScroll = sectionTop + newProgress * (sectionHeight - window.innerHeight);
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="featured-services"
      className="relative bg-white border-t border-neutral-100 md:h-[260vh]"
    >
      {/* Pinned Sticky Viewport on Desktop */}
      <div className="md:sticky md:top-0 md:h-screen flex flex-col justify-center py-16 md:py-0 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
          {/* Section Header */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 text-[11px] tracking-[0.2em] uppercase font-medium mb-4 border border-cyan-100"
            >
              <span>✦</span>
              <span>SIGNATURE PROCEDURES</span>
              <span>✦</span>
            </motion.div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide uppercase font-light text-neutral-900 max-w-2xl leading-tight"
              >
                DISCOVER OUR DENTAL TREATMENTS
              </motion.h2>

              {/* Slider Control Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleArrowClick('left')}
                  aria-label="Previous procedures"
                  className="w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center transition-all hover:bg-neutral-900 hover:text-white hover:border-neutral-900 cursor-pointer active:scale-95 shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleArrowClick('right')}
                  aria-label="Next procedures"
                  className="w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center transition-all hover:bg-neutral-900 hover:text-white hover:border-neutral-900 cursor-pointer active:scale-95 shadow-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Dental Treatments Track */}
        <div className="w-full overflow-hidden">
          {isDesktop ? (
            /* Desktop: Driven by vertical scroll */
            <motion.div
              ref={trackRef}
              style={{ x: scrollX }}
              className="flex gap-8 px-4 sm:px-8 lg:px-12 w-max"
            >
              {FEATURED_SERVICES.map((service) => (
                <div
                  key={service.id}
                  onClick={() => onSelectService(service)}
                  className="shrink-0 w-[420px] lg:w-[480px] group cursor-pointer"
                >
                  {/* Card Container */}
                  <div className="relative rounded-3xl overflow-hidden bg-neutral-900 shadow-xl border border-neutral-200/80 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

                      {/* Top Watermark Badge: EMPIRE DENTAL with arrow icon */}
                      <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-[11px] uppercase tracking-wider font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          <span>EMPIRE DENTAL</span>
                        </div>

                        <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Bar Info */}
                    <div className="bg-[#141415] text-white p-6 flex items-end justify-between border-t border-neutral-800">
                      <div>
                        <div className="text-[10px] text-cyan-400 uppercase tracking-widest font-semibold mb-1">
                          {service.category}
                        </div>
                        <h3 className="font-serif text-xl font-medium tracking-wide mb-1 text-white group-hover:text-neutral-200 transition-colors">
                          {service.title}
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-sans tracking-wider uppercase">
                          <MapPin className="w-3 h-3 text-neutral-500" />
                          <span>{service.location}</span>
                          <span className="mx-1">·</span>
                          <span>{service.duration}</span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-medium mb-0.5">
                          EST. STARTING
                        </div>
                        <div className="text-lg font-semibold tracking-tight text-white">
                          {service.price}
                          <span className="text-xs text-neutral-400 font-normal">{service.period}</span>
                        </div>
                        <div className="text-[10px] text-cyan-300 font-semibold uppercase tracking-wider mt-1.5 flex items-center justify-end gap-1 group-hover:text-cyan-200">
                          <span>BOOK TREATMENT</span>
                          <span>›</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            /* Mobile: Native Touch Track */
            <div
              ref={trackRef}
              className="flex gap-6 overflow-x-auto px-4 pb-4 scrollbar-none snap-x snap-mandatory"
            >
              {FEATURED_SERVICES.map((service) => (
                <div
                  key={service.id}
                  onClick={() => onSelectService(service)}
                  className="shrink-0 w-[300px] sm:w-[360px] snap-start group cursor-pointer"
                >
                  <div className="relative rounded-3xl overflow-hidden bg-neutral-900 shadow-lg border border-neutral-200">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-medium">
                          EMPIRE DENTAL
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#141415] text-white p-5 flex items-end justify-between border-t border-neutral-800">
                      <div>
                        <div className="text-[10px] text-cyan-400 uppercase font-semibold">
                          {service.category}
                        </div>
                        <h3 className="font-serif text-lg font-medium text-white mb-0.5">
                          {service.title}
                        </h3>
                        <div className="text-xs text-neutral-400 uppercase">
                          {service.location} · {service.duration}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-[10px] text-neutral-400 uppercase">EST.</div>
                        <div className="text-base font-semibold">
                          {service.price}
                          <span className="text-xs text-neutral-400">{service.period}</span>
                        </div>
                        <div className="text-[10px] text-cyan-300 font-semibold uppercase mt-1">
                          BOOK ›
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

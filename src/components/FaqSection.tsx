import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CreditCard, Stethoscope, Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/siteData.ts';

export const FaqSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'treatments' | 'financing' | 'first-visit'>('treatments');
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleAccordion = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const filteredFaqs = FAQ_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="faq" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-neutral-100 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 text-[11px] tracking-[0.2em] uppercase font-medium mb-4 border border-cyan-100"
          >
            <span>✦</span>
            <span>FREQUENTLY ASKED QUESTIONS</span>
            <span>✦</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase font-light text-neutral-900 tracking-wide mb-4"
          >
            EVERYTHING YOU NEED TO KNOW — UPFRONT
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed"
          >
            We believe transparent communication is the foundation of exceptional dental care. Here are answers to the most common questions our Miami patients ask.
          </motion.p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('treatments')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-200 ${
              activeCategory === 'treatments'
                ? 'bg-neutral-900 text-white shadow-sm'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Treatments</span>
          </button>

          <button
            onClick={() => setActiveCategory('financing')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-200 ${
              activeCategory === 'financing'
                ? 'bg-neutral-900 text-white shadow-sm'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>Insurance &amp; Financing</span>
          </button>

          <button
            onClick={() => setActiveCategory('first-visit')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-200 ${
              activeCategory === 'first-visit'
                ? 'bg-neutral-900 text-white shadow-sm'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            <Stethoscope className="w-3.5 h-3.5" />
            <span>First Visit</span>
          </button>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                className="border-b border-neutral-200 pb-5 transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-2 flex items-center justify-between text-left group"
                >
                  <span className="font-serif text-base sm:text-lg text-neutral-900 font-normal group-hover:text-cyan-800 transition-colors pr-6">
                    {faq.question}
                  </span>
                  <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-neutral-500 group-hover:text-black transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-2 pb-2 text-xs sm:text-sm text-neutral-500 leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

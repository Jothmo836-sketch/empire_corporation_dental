import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { BLOG_POSTS, DentalArticle } from '../data/siteData.ts';

interface BlogSectionProps {
  onNavigateToBooking: (topic?: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onNavigateToBooking }) => {
  return (
    <section id="blog" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 text-[11px] tracking-[0.2em] uppercase font-medium mb-4 border border-cyan-100"
          >
            <span>✦</span>
            <span>DENTAL HEALTH JOURNAL</span>
            <span>✦</span>
          </motion.div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide uppercase font-light text-neutral-900"
            >
              SMILE CARE, INSIGHTS &amp; WELLNESS
            </motion.h2>

            <button
              onClick={() => onNavigateToBooking('General Oral Wellness Consultation')}
              className="inline-flex items-center gap-1 text-xs uppercase tracking-widest font-semibold text-cyan-900 hover:text-cyan-600 transition-colors"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              onClick={() => onNavigateToBooking(post.title)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-5 bg-neutral-100 shadow-sm border border-neutral-200/60">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] uppercase font-semibold text-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity">
                  Book Treatment ›
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl sm:text-2xl text-neutral-900 font-light leading-snug group-hover:text-cyan-800 transition-colors mb-3">
                {post.title}
              </h3>

              {/* Metadata */}
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400 font-medium">
                <span className="text-cyan-900 font-semibold">{post.category}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

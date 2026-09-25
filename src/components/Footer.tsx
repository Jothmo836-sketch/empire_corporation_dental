import React, { useState } from 'react';
import { Send, Check, Linkedin, Instagram, MapPin, Phone, Mail, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/siteData.ts';

interface FooterProps {
  onNavigateToBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToBooking }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3500);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="bg-[#FAF9F6] text-neutral-800 pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-t border-neutral-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        {/* Top Dark Banner */}
        <div className="bg-[#12181c] text-white rounded-3xl p-8 sm:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-cyan-950/60">
          <div className="text-center md:text-left">
            <div className="text-[11px] text-cyan-400 uppercase tracking-widest font-semibold mb-2">
              EMPIRE CORPORATION DENTAL · MIAMI, FLORIDA
            </div>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl uppercase font-light tracking-wide text-neutral-100 max-w-2xl leading-relaxed">
              A STATE-OF-THE-ART DENTAL CLINIC CRAFTED TO RESTORE AND ELEVATE YOUR SMILE WITH GENTLE PRECISION.
            </h2>
          </div>

          <button
            onClick={onNavigateToBooking}
            className="shrink-0 px-8 py-3.5 rounded-full bg-white text-neutral-900 font-medium text-xs tracking-widest uppercase transition-all duration-300 hover:bg-neutral-200 hover:shadow-lg active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-cyan-700" />
            <span>BOOK APPOINTMENT</span>
          </button>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-16 text-xs">
          {/* Column 1: Treatments */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-neutral-900 mb-4">
              TREATMENTS
            </h4>
            <ul className="space-y-2.5 text-neutral-500 font-light">
              <li><a href="#featured-services" className="hover:text-black transition-colors">General &amp; Preventive</a></li>
              <li><a href="#featured-services" className="hover:text-black transition-colors">Porcelain Veneers</a></li>
              <li><a href="#featured-services" className="hover:text-black transition-colors">Dental Implants</a></li>
              <li><a href="#featured-services" className="hover:text-black transition-colors">Invisalign® Aligners</a></li>
              <li><a href="#featured-services" className="hover:text-black transition-colors">Teeth Whitening</a></li>
              <li><a href="#featured-services" className="hover:text-black transition-colors">Crowns &amp; Bridges</a></li>
              <li><a href="#featured-services" className="hover:text-black transition-colors">Emergency Dentistry</a></li>
            </ul>
          </div>

          {/* Column 2: Patient Care */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-neutral-900 mb-4">
              PATIENT CARE
            </h4>
            <ul className="space-y-2.5 text-neutral-500 font-light">
              <li><a href="#about" className="hover:text-black transition-colors">About Our Practice</a></li>
              <li><a href="#testimonials" className="hover:text-black transition-colors">Patient Stories</a></li>
              <li><a href="#specialties" className="hover:text-black transition-colors">Clinical Technology</a></li>
              <li><a href="#faq" className="hover:text-black transition-colors">First Visit Guide</a></li>
              <li><a href="#blog" className="hover:text-black transition-colors">Dental Health Journal</a></li>
            </ul>
          </div>

          {/* Column 3: Miami Location */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-neutral-900 mb-4">
              MIAMI CLINIC
            </h4>
            <ul className="space-y-2.5 text-neutral-500 font-light">
              <li className="text-neutral-700 font-medium">{CLINIC_INFO.address}</li>
              <li>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-700 hover:underline flex items-center gap-1 font-medium"
                >
                  <MapPin className="w-3 h-3" />
                  <span>Google Maps Directions</span>
                </a>
              </li>
              <li>Tel: (305) 633-8880</li>
              <li className="pt-2 text-neutral-400 text-[11px] leading-relaxed">
                Mon – Fri: 8am – 6pm<br />Sat: 9am – 2pm
              </li>
            </ul>
          </div>

          {/* Column 4: Insurance & Utility */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-neutral-900 mb-4">
              INSURANCE &amp; LEGAL
            </h4>
            <ul className="space-y-2.5 text-neutral-500 font-light">
              <li><a href="#faq" className="hover:text-black transition-colors">Accepted PPO Plans</a></li>
              <li><a href="#faq" className="hover:text-black transition-colors">CareCredit Financing</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Patient Bill of Rights</a></li>
              <li><a href="#" className="hover:text-black transition-colors">HIPAA Privacy Notice</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Accessibility Statement</a></li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-neutral-900 mb-2">
              Oral Health Insights
            </h4>
            <p className="text-neutral-500 text-xs mb-4 font-light">
              Receive seasonal dental wellness guides and preventative smile care tips.
            </p>
            <form onSubmit={handleSubscribe} className="flex items-center border-b border-neutral-400 py-1.5 focus-within:border-black">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full bg-transparent text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none py-1"
              />
              <button
                type="submit"
                className="text-xs uppercase tracking-widest font-semibold text-neutral-900 hover:text-black transition-colors px-2"
              >
                {subscribed ? <Check className="w-4 h-4 text-emerald-600" /> : 'SEND'}
              </button>
            </form>
          </div>
        </div>

        {/* Disclaimer Fine Print & Copyright */}
        <div className="pt-8 border-t border-neutral-200/80 mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="text-xs text-neutral-600">
              © Copyright 2026 Empire Corporation Dental. All rights reserved.
            </div>

            <div className="flex items-center gap-4 text-neutral-600">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                className="hover:text-black transition-colors text-xs font-medium text-cyan-800"
              >
                Google Verified Business
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-black transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-black transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <p className="text-[11px] text-neutral-400 leading-relaxed font-light">
            Empire Corporation Dental is an authorized general, cosmetic, and emergency dental clinic located at 2030 NW 22nd Ave, Miami, FL 33142. Licensed by the Florida Board of Dentistry under the Florida Department of Health. All content provided on this website is for informational purposes and does not constitute formal medical or dental diagnoses.
          </p>
        </div>

        {/* Giant Outlined / Serif Watermark EMPIRE DENTAL at bottom */}
        <div className="w-full text-center overflow-hidden select-none pointer-events-none -mb-8">
          <span className="font-serif text-[15vw] leading-none tracking-[0.16em] uppercase font-light text-neutral-200/60 block">
            EMPIRE DENTAL
          </span>
        </div>
      </div>
    </footer>
  );
};

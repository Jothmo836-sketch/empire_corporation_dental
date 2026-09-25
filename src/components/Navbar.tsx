import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/siteData';

interface NavbarProps {
  onNavigateToBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 text-neutral-900 border-b border-neutral-100'
          : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent py-5 text-white'
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        {/* Left: Brand Wordmark & Icon */}
        <a
          href="#"
          className="flex items-center gap-3 group cursor-pointer focus:outline-none"
        >
          {/* Medical Dental Tooth Emblem */}
          <div className="relative w-7 h-7 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className={`w-6 h-6 transition-transform duration-500 group-hover:scale-110 ${
                isScrolled ? 'text-cyan-700' : 'text-cyan-400'
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2C8.5 2 6 4.5 6 8C6 11 7 13.5 8 16.5C8.8 19 9.5 22 10.5 22C11.5 22 11.5 18 12 18C12.5 18 12.5 22 13.5 22C14.5 22 15.2 19 16 16.5C17 13.5 18 11 18 8C18 4.5 15.5 2 12 2Z" />
              <path d="M10 7C10 7 11 6 12 6C13 6 14 7 14 7" strokeWidth="1.2" />
            </svg>
          </div>
          <span
            className={`font-serif tracking-[0.24em] text-base sm:text-lg font-light uppercase transition-colors leading-none ${
              isScrolled ? 'text-neutral-900' : 'text-white'
            }`}
          >
            EMPIRE DENTAL
          </span>
        </a>

        {/* Right: Minimal Navigation Links & Direct Actions */}
        <div className="hidden lg:flex items-center space-x-7 text-xs tracking-wider uppercase">
          <nav className="flex items-center space-x-7 font-medium">
            {/* Treatments Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPagesDropdownOpen(true)}
              onMouseLeave={() => setPagesDropdownOpen(false)}
            >
              <button
                onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                className={`flex items-center gap-1 transition-colors hover:opacity-100 uppercase ${
                  isScrolled ? 'text-neutral-700 hover:text-black' : 'text-white/90 hover:text-white'
                }`}
              >
                Treatments
                <ChevronDown className="w-3 h-3 transition-transform duration-200" />
              </button>

              <AnimatePresence>
                {pagesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 mt-2 w-52 bg-white text-neutral-800 rounded-xl shadow-xl border border-neutral-100 py-2.5 z-50 text-xs normal-case"
                  >
                    <a
                      href="#featured-services"
                      onClick={() => setPagesDropdownOpen(false)}
                      className="block px-4 py-2 hover:bg-neutral-50 hover:text-cyan-800 transition-colors"
                    >
                      Veneers &amp; Whitening
                    </a>
                    <a
                      href="#featured-services"
                      onClick={() => setPagesDropdownOpen(false)}
                      className="block px-4 py-2 hover:bg-neutral-50 hover:text-cyan-800 transition-colors"
                    >
                      Dental Implants
                    </a>
                    <a
                      href="#featured-services"
                      onClick={() => setPagesDropdownOpen(false)}
                      className="block px-4 py-2 hover:bg-neutral-50 hover:text-cyan-800 transition-colors"
                    >
                      Invisalign® Aligners
                    </a>
                    <a
                      href="#featured-services"
                      onClick={() => setPagesDropdownOpen(false)}
                      className="block px-4 py-2 hover:bg-neutral-50 hover:text-cyan-800 transition-colors"
                    >
                      Emergency Dental Care
                    </a>
                    <div className="border-t border-neutral-100 my-1" />
                    <a
                      href="#booking"
                      onClick={() => setPagesDropdownOpen(false)}
                      className="block px-4 py-2 text-cyan-800 font-semibold hover:bg-cyan-50 transition-colors"
                    >
                      ✦ Book Online
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#about"
              className={`transition-colors hover:opacity-100 ${
                isScrolled ? 'text-neutral-700 hover:text-black' : 'text-white/90 hover:text-white'
              }`}
            >
              About
            </a>

            <a
              href="#contact"
              className={`transition-colors hover:opacity-100 ${
                isScrolled ? 'text-neutral-700 hover:text-black' : 'text-white/90 hover:text-white'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Call button just like mobile/tablet view */}
          <a
            href="tel:3056338880"
            title="Call (305) 633-8880"
            aria-label="Call (305) 633-8880"
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
              isScrolled
                ? 'border-neutral-300 text-neutral-800 hover:bg-neutral-100 hover:text-black'
                : 'border-white/30 text-white hover:bg-white/10'
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
          </a>

          {/* Clean Book Button */}
          <button
            onClick={onNavigateToBooking}
            className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 transform hover:scale-[1.02] shadow-sm flex items-center gap-1.5 ${
              isScrolled
                ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                : 'bg-white text-neutral-900 hover:bg-neutral-100'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>BOOK VISIT</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href="tel:3056338880"
            className={`w-8 h-8 rounded-full border flex items-center justify-center ${
              isScrolled ? 'border-neutral-300 text-neutral-900' : 'border-white/30 text-white'
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-1.5 focus:outline-none ${isScrolled ? 'text-neutral-900' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Minimal Text */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white text-neutral-900 border-b border-neutral-200 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 text-sm font-medium tracking-wide">
              <a
                href="#featured-services"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 hover:text-cyan-700"
              >
                Treatments
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 hover:text-cyan-700"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 hover:text-cyan-700"
              >
                Contact
              </a>
              <div className="pt-4 border-t border-neutral-100 flex flex-col gap-3">
                <a
                  href="tel:3056338880"
                  className="w-full py-2.5 bg-neutral-100 text-neutral-800 rounded-xl text-center text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call (305) 633-8880</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateToBooking();
                  }}
                  className="w-full py-3 bg-neutral-900 text-white rounded-xl text-center text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>BOOK VISIT</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

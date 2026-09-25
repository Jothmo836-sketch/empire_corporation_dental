import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, HelpCircle, PhoneCall, Calendar, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/siteData';

interface FloatingWidgetsProps {
  onNavigateToBooking: () => void;
  onNavigateToEmergency: () => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({
  onNavigateToBooking,
  onNavigateToEmergency,
}) => {
  return (
    <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      {/* 1. Quick Appointment Booking */}
      <button
        onClick={onNavigateToBooking}
        className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-neutral-900 border border-neutral-200/90 shadow-lg hover:shadow-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5 text-cyan-600 group-hover:scale-110 transition-transform" />
        <span>BOOK CONSULTATION</span>
        <span className="text-[10px] text-neutral-400 ml-1">›</span>
      </button>

      {/* 2. Need Emergency Care? */}
      <button
        onClick={onNavigateToEmergency}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900 text-white shadow-lg hover:shadow-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 active:scale-95 hover:bg-neutral-800 cursor-pointer"
      >
        <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
        <span>EMERGENCY DENTAL? (305) 633-8880</span>
      </button>
    </aside>
  );
};

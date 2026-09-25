import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  AlertCircle,
  MapPin,
  ChevronRight,
  Stethoscope,
  HeartHandshake
} from 'lucide-react';
import { CLINIC_INFO, FEATURED_SERVICES } from '../data/siteData.ts';

interface BookingSectionProps {
  selectedTreatmentName?: string;
  initialNote?: string;
  onBookingSuccess?: (details: { name: string; treatment: string; date: string }) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedTreatmentName,
  initialNote,
  onBookingSuccess,
}) => {
  const formRef = useRef<HTMLDivElement>(null);

  // Form states
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [treatment, setTreatment] = useState('Comprehensive Preventive Care');
  const [preferredDate, setPreferredDate] = useState(() => {
    // Default to tomorrow's date
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [preferredTime, setPreferredTime] = useState('Morning (8:00 AM – 12:00 PM)');
  const [insurance, setInsurance] = useState('');
  const [notes, setNotes] = useState('');
  const [isEmergency, setIsEmergency] = useState(false);

  // Submission state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  // Update treatment when passed from parent via card clicks
  useEffect(() => {
    if (selectedTreatmentName) {
      setTreatment(selectedTreatmentName);
      if (selectedTreatmentName.toLowerCase().includes('emergency')) {
        setIsEmergency(true);
      }
    }
  }, [selectedTreatmentName]);

  // Update initial note if provided
  useEffect(() => {
    if (initialNote) {
      setNotes((prev) => (prev ? `${prev} · ${initialNote}` : initialNote));
    }
  }, [initialNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `ECD-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmationCode(code);
    setIsSubmitted(true);
    if (onBookingSuccess) {
      onBookingSuccess({
        name: fullName,
        treatment,
        date: preferredDate,
      });
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhoneNumber('');
    setEmail('');
    setNotes('');
  };

  const setQuickDate = (daysFromToday: number) => {
    const d = new Date();
    d.setDate(d.getDate() + daysFromToday);
    setPreferredDate(d.toISOString().split('T')[0]);
  };

  const treatmentOptions = [
    { name: 'Comprehensive Preventive Care', price: '$150', time: '60 mins', tag: 'Hygiene & Cleanings' },
    { name: 'Cosmetic Porcelain Veneers', price: '$850/ea', time: 'Consultation', tag: 'Smile Makeover' },
    { name: 'Titanium Dental Implants', price: '$1,200', time: 'Surgical Consult', tag: 'Permanent Teeth' },
    { name: 'Invisalign® Clear Aligners', price: '$2,400', time: '3D Smile Scan', tag: 'Clear Braces' },
    { name: 'Emergency Dental Relief', price: '$99', time: 'Immediate', tag: 'Same-Day Urgent Care' },
    { name: 'Laser Teeth Whitening', price: '$299', time: '45 mins', tag: 'Cosmetic Brightening' },
    { name: 'Crowns, Bridges & Restorations', price: 'Varies', time: 'Custom Fit', tag: 'Restorative' },
    { name: 'General Dental Consultation', price: 'Free / Ins.', time: '30 mins', tag: 'First Visit' },
  ];

  return (
    <section
      id="booking"
      ref={formRef}
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF9F6] via-white to-[#F4F7F6] border-t border-neutral-200 overflow-hidden"
    >
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-cyan-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-teal-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-50 text-cyan-900 text-[11px] tracking-[0.2em] uppercase font-semibold mb-4 border border-cyan-200/70"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>DIRECT ONLINE RESERVATIONS</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide uppercase font-light text-neutral-900 mb-4"
          >
            BOOK YOUR DENTAL TREATMENT
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-600 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed"
          >
            Complete this form to reserve your treatment at Empire Corporation Dental in Miami. Our clinical coordinator will promptly confirm your appointment.
          </motion.p>
        </div>

        {/* Main Grid: Form on Left/Center, Clinic Info on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Booking Form Card (8 Cols on Desktop) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-neutral-200/80">
            {isSubmitted ? (
              /* Success Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-6"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-emerald-700 font-semibold">
                    Appointment Request Confirmed
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-neutral-900 mt-1 mb-2 font-light">
                    Thank You, {fullName}!
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    We have received your booking request for{' '}
                    <strong className="text-neutral-900 font-medium">{treatment}</strong>.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="max-w-md mx-auto bg-neutral-50 rounded-2xl p-6 border border-neutral-200 text-left text-xs space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-neutral-200/80">
                    <span className="text-neutral-400 uppercase tracking-wider">Reference Code</span>
                    <span className="font-mono font-bold text-neutral-900 text-sm">{confirmationCode}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400 uppercase tracking-wider">Treatment</span>
                    <span className="font-medium text-neutral-900">{treatment}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400 uppercase tracking-wider">Preferred Date</span>
                    <span className="font-medium text-neutral-900">{preferredDate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400 uppercase tracking-wider">Time Window</span>
                    <span className="font-medium text-neutral-900">{preferredTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400 uppercase tracking-wider">Contact Number</span>
                    <span className="font-medium text-neutral-900">{phoneNumber}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-neutral-200/80">
                    <span className="text-neutral-400 uppercase tracking-wider">Clinic Location</span>
                    <span className="font-medium text-neutral-900 text-right">2030 NW 22nd Ave, Miami</span>
                  </div>
                </div>

                <div className="text-xs text-neutral-500 max-w-md mx-auto">
                  Our receptionist will call or text your number to finalize any health questions and provide parking &amp; arrival details.
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="tel:3056338880"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-neutral-900 text-white text-xs uppercase tracking-wider font-semibold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Clinic (305) 633-8880</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-neutral-100 text-neutral-800 text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-colors"
                  >
                    Book Another Treatment
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Booking Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Emergency Alert Banner Option */}
                <div
                  onClick={() => setIsEmergency(!isEmergency)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isEmergency
                      ? 'bg-red-50 border-red-300 text-red-900'
                      : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:bg-neutral-100/70'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                        isEmergency ? 'bg-red-600 text-white' : 'bg-neutral-200 text-neutral-600'
                      }`}
                    >
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold">
                        {isEmergency ? 'Urgent / Same-Day Emergency Care Active' : 'Is this an urgent dental emergency?'}
                      </div>
                      <div className="text-[11px] opacity-80">
                        {isEmergency
                          ? 'We will prioritize your spot immediately for acute tooth pain, trauma, or swelling.'
                          : 'Click here to tag this booking for same-day priority triage.'}
                      </div>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={isEmergency}
                    onChange={(e) => setIsEmergency(e.target.checked)}
                    className="w-4 h-4 text-red-600 rounded focus:ring-red-500 cursor-pointer"
                  />
                </div>

                {/* Step 1: Select Dental Treatment */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-900 mb-2 flex items-center justify-between">
                    <span>1. Choose Treatment or Procedure</span>
                    <span className="text-[10px] text-cyan-800 font-normal lowercase">click to select</span>
                  </label>

                  {/* Grid of Treatment Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-60 overflow-y-auto pr-1">
                    {treatmentOptions.map((opt) => {
                      const isSelected = treatment === opt.name;
                      return (
                        <div
                          key={opt.name}
                          onClick={() => setTreatment(opt.name)}
                          className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-cyan-900 text-white border-cyan-900 shadow-sm'
                              : 'bg-neutral-50 hover:bg-neutral-100/80 border-neutral-200 text-neutral-800'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-1">
                            <span className="text-xs font-semibold leading-tight line-clamp-1">
                              {opt.name}
                            </span>
                            <span
                              className={`text-[10px] font-bold shrink-0 ml-1 ${
                                isSelected ? 'text-cyan-200' : 'text-cyan-800'
                              }`}
                            >
                              {opt.price}
                            </span>
                          </div>
                          <div className="flex items-center justify-between mt-1 text-[10px]">
                            <span className={isSelected ? 'text-neutral-300' : 'text-neutral-500'}>
                              {opt.tag}
                            </span>
                            <span className={isSelected ? 'text-cyan-300' : 'text-neutral-400'}>
                              {opt.time}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Date & Time Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-neutral-100">
                  {/* Date Picker */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-900 mb-2 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-700" />
                      <span>2. Preferred Date</span>
                    </label>

                    {/* Quick day buttons */}
                    <div className="flex gap-2 mb-2">
                      <button
                        type="button"
                        onClick={() => setQuickDate(0)}
                        className="px-2.5 py-1 text-[11px] rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-medium"
                      >
                        Today
                      </button>
                      <button
                        type="button"
                        onClick={() => setQuickDate(1)}
                        className="px-2.5 py-1 text-[11px] rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-medium"
                      >
                        Tomorrow
                      </button>
                      <button
                        type="button"
                        onClick={() => setQuickDate(2)}
                        className="px-2.5 py-1 text-[11px] rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-medium"
                      >
                        In 2 Days
                      </button>
                    </div>

                    <input
                      type="date"
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-xs bg-white text-neutral-800 focus:outline-none focus:border-cyan-700 shadow-sm"
                    />
                  </div>

                  {/* Time Window */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-900 mb-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-700" />
                      <span>Preferred Time Window</span>
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-xs bg-white text-neutral-800 focus:outline-none focus:border-cyan-700 shadow-sm"
                    >
                      <option>Morning (8:00 AM – 12:00 PM)</option>
                      <option>Early Afternoon (12:00 PM – 3:00 PM)</option>
                      <option>Late Afternoon (3:00 PM – 6:00 PM)</option>
                      <option>Saturday Morning (9:00 AM – 2:00 PM)</option>
                    </select>
                    <p className="text-[10px] text-neutral-400 mt-1">
                      Clinic opens Mon-Fri at 8:00 AM, Saturdays at 9:00 AM.
                    </p>
                  </div>
                </div>

                {/* Step 3: Patient Information */}
                <div className="pt-2 border-t border-neutral-100">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-900 mb-3 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-cyan-700" />
                    <span>3. Patient Details</span>
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full Name *"
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-xs bg-white text-neutral-800 focus:outline-none focus:border-cyan-700 shadow-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Phone Number * (e.g. 305-633-8880)"
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-xs bg-white text-neutral-800 focus:outline-none focus:border-cyan-700 shadow-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address *"
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-xs bg-white text-neutral-800 focus:outline-none focus:border-cyan-700 shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 4: Insurance & Special Requests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <input
                      type="text"
                      value={insurance}
                      onChange={(e) => setInsurance(e.target.value)}
                      placeholder="Dental Insurance (Delta, Cigna, MetLife, or Self-Pay)"
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-xs bg-white text-neutral-800 focus:outline-none focus:border-cyan-700 shadow-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Symptoms, tooth location, or questions (Optional)"
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-xs bg-white text-neutral-800 focus:outline-none focus:border-cyan-700 shadow-sm"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.99]"
                  >
                    <Calendar className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>BOOK TREATMENT NOW</span>
                    <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-[11px] text-neutral-400 mt-2">
                    🔒 No upfront payment required. All information is confidential under HIPAA guidelines.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Clinic Information & Guarantees (4 Cols on Desktop) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-[#141b20] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-cyan-950/80">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-[10px] uppercase tracking-wider font-semibold mb-4">
                <span>✦</span>
                <span>MIAMI CLINICAL FACILITY</span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-white font-light mb-4">
                Empire Corporation Dental
              </h3>

              <div className="space-y-4 text-xs font-light text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-white">Clinic Address</div>
                    <div className="text-neutral-300">2030 NW 22nd Ave, Miami, FL 33142</div>
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline text-[11px] font-medium inline-block mt-0.5"
                    >
                      Open Google Maps Directions ›
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-white">Clinical Desk &amp; Emergency</div>
                    <a href="tel:3056338880" className="text-white hover:text-cyan-300 font-semibold text-sm">
                      (305) 633-8880
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-white">Operating Hours</div>
                    <div className="text-[11px] text-neutral-300">Mon – Fri: 8:00 AM – 6:00 PM</div>
                    <div className="text-[11px] text-neutral-300">Saturday: 9:00 AM – 2:00 PM</div>
                    <div className="text-[11px] text-cyan-300 font-medium">Sunday: Emergency Calls Only</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Book With Us Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-neutral-200 space-y-4 text-xs">
              <h4 className="font-serif text-base uppercase font-semibold text-neutral-900 tracking-wide">
                The Empire Dental Promise
              </h4>

              <div className="space-y-3 text-neutral-600">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 font-semibold">Zero-Wait Protocol:</strong> We respect your schedule with punctual operatory seating.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-cyan-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 font-semibold">Gentle Anesthesia:</strong> Advanced numbing techniques ensuring virtually pain-free treatments.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <HeartHandshake className="w-4 h-4 text-cyan-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 font-semibold">Transparent Pricing:</strong> Clear, upfront estimates before any procedure begins.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

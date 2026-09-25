export interface DentalService {
  id: string;
  title: string;
  category: string;
  location: string;
  price: string;
  period: string;
  image: string;
  duration: string;
  tag: string;
  warranty: string;
  description: string;
  features: string[];
}

export interface DentalSpecialty {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stat: string;
}

export interface DentalTestimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  image: string;
  treatment: string;
}

export interface DentalArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
  excerpt: string;
}

export interface DentalFaq {
  question: string;
  answer: string;
  category: 'treatments' | 'financing' | 'first-visit';
}

export const CLINIC_INFO = {
  name: 'Empire Corporation Dental',
  shortName: 'EMPIRE DENTAL',
  tagline: 'Smiles Elevated · State-of-the-Art Dental Care',
  address: '2030 NW 22nd Ave, Miami, FL 33142',
  phone: '(305) 633-8880',
  email: 'appointments@empiredentalmiami.com',
  hours: 'Mon – Fri: 8:00 AM – 6:00 PM | Sat: 9:00 AM – 2:00 PM',
  googleMapsUrl: 'https://maps.google.com/?cid=17956069680436585280&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA',
};

export const HERO_SLIDES = [
  {
    id: 1,
    image: '/src/assets/images/empire_hero_smile_1790291733723.jpg',
    caption: 'Radiant Smiles Crafted with Gentle Precision',
  },
  {
    id: 2,
    image: '/src/assets/images/empire_hero_consult_1790291756571.jpg',
    caption: 'Compassionate Consultations Tailored to You',
  },
  {
    id: 3,
    image: '/src/assets/images/empire_hero_operatory_1790291776371.jpg',
    caption: 'Cutting-Edge Digital Operatories in Miami',
  },
  {
    id: 4,
    image: '/src/assets/images/empire_hero_family_1790291794361.jpg',
    caption: 'Lifelong Dental Health for Your Entire Family',
  },
];

export const ABOUT_IMAGES = {
  consultation: '/src/assets/images/empire_hero_consult_1790291756571.jpg',
  smileMacro: '/src/assets/images/empire_treat_cosmetic_1790291829331.jpg',
  lounge: '/src/assets/images/empire_clinic_lounge_1790291891461.jpg',
  operatorySuite: '/src/assets/images/empire_hero_operatory_1790291776371.jpg',
};

export const FEATURED_SERVICES: DentalService[] = [
  {
    id: 'serv-1',
    title: 'Comprehensive Preventive Care',
    category: 'GENERAL DENTISTRY',
    location: 'MIAMI, FL',
    price: '$150',
    period: '/visit',
    image: '/src/assets/images/empire_hero_operatory_1790291776371.jpg',
    duration: '60 mins',
    tag: 'Routine Exam & Deep Hygiene',
    warranty: 'Preventive Care Guarantee',
    description: 'Thorough clinical examination, ultrasonic dental scaling, digital low-radiation X-rays, oral cancer screening, and enamel remineralization tailored to your teeth.',
    features: ['Ultrasonic Scaling & Polish', 'HD Intraoral Camera Scan', 'Oral Cancer Screening', 'Personalized Hygiene Plan'],
  },
  {
    id: 'serv-2',
    title: 'Cosmetic Porcelain Veneers',
    category: 'COSMETIC STUDIO',
    location: 'MIAMI, FL',
    price: '$850',
    period: '/tooth',
    image: '/src/assets/images/empire_treat_cosmetic_1790291829331.jpg',
    duration: '2 appointments',
    tag: 'Smile Makeover',
    warranty: '10-Year Porcelain Warranty',
    description: 'Handcrafted ultra-thin porcelain veneers designed to correct chips, discoloration, misalignments, and gaps with lifelike natural luminescence.',
    features: ['Digital Smile Preview', 'Custom Color Matching', 'Minimal Tooth Prep', 'Stain-Resistant Porcelain'],
  },
  {
    id: 'serv-3',
    title: 'Titanium Dental Implants',
    category: 'RESTORATIVE SURGERY',
    location: 'MIAMI, FL',
    price: '$1,200',
    period: '/unit',
    image: '/src/assets/images/empire_treat_implant_1790291870092.jpg',
    duration: 'Complete Restoration',
    tag: 'Permanent Tooth Replacement',
    warranty: 'Lifetime Implant Integrity',
    description: 'Permanent, bone-fused titanium implants topped with custom zirconia or porcelain crowns, restoring 100% natural biting force and youthful facial contours.',
    features: ['3D CBCT Surgical Guidance', 'High-Grade Medical Titanium', 'Natural Porcelain Crown', 'Gentle Sedation Options'],
  },
  {
    id: 'serv-4',
    title: 'Invisalign® Clear Aligners',
    category: 'ORTHODONTICS',
    location: 'MIAMI, FL',
    price: '$2,400',
    period: '/full treatment',
    image: '/src/assets/images/empire_treat_aligner_1790291849435.jpg',
    duration: '6 – 12 months',
    tag: 'Discreet Straightening',
    warranty: 'Satisfaction Alignment Guarantee',
    description: 'Virtually invisible removable orthodontic trays that gradually align your smile without metal wires or brackets, fitting seamlessly into your active lifestyle.',
    features: ['Digital 3D Smile Simulation', 'Removable for Meals & Events', 'Gentle Controlled Pressure', 'Includes Retainer Set'],
  },
  {
    id: 'serv-5',
    title: 'Emergency Dental Relief',
    category: 'URGENT CARE',
    location: 'MIAMI, FL',
    price: '$99',
    period: '/exam & relief',
    image: '/src/assets/images/empire_hero_consult_1790291756571.jpg',
    duration: 'Same-Day Service',
    tag: 'Immediate Pain Relief',
    warranty: 'Same-Day Priority Booking',
    description: 'Rapid emergency dental diagnosis and pain alleviation for broken crowns, acute toothaches, dental trauma, abscesses, or lost fillings.',
    features: ['Same-Day Walk-In & Booking', 'Instant Digital X-Rays', 'Immediate Local Anesthesia', 'Repairs & Extractions'],
  },
];

export const DENTAL_SPECIALTIES: DentalSpecialty[] = [
  {
    id: 'general',
    title: 'FAMILY DENTISTRY',
    subtitle: 'Comprehensive oral health stewardship for toddlers, teens, adults, and seniors',
    description: 'We prioritize preventive diagnostics, gentle cleanings, and cavity prevention in a stress-free environment where every family member feels at ease.',
    image: '/src/assets/images/empire_hero_family_1790291794361.jpg',
    stat: '10,000+ Family Visits',
  },
  {
    id: 'cosmetic',
    title: 'COSMETIC STUDIO',
    subtitle: 'Bespoke smile design, laser teeth whitening, and handcrafted veneers',
    description: 'Combine art and dental science to elevate your smile. From 1-hour professional whitening to full porcelain restorations, we create radiant confidence.',
    image: '/src/assets/images/empire_treat_cosmetic_1790291829331.jpg',
    stat: '4,500+ Smile Makeovers',
  },
  {
    id: 'implants',
    title: 'IMPLANTS & RESTORATIVE',
    subtitle: 'Permanent tooth replacement, precision bridges, and full-mouth rehabilitation',
    description: 'Restore complete dental function and aesthetic harmony. Our minimally invasive techniques and biocompatible materials guarantee lasting health.',
    image: '/src/assets/images/empire_treat_implant_1790291870092.jpg',
    stat: '2,800+ Successful Implants',
  },
  {
    id: 'ortho',
    title: 'CLEAR ORTHODONTICS',
    subtitle: 'Modern clear aligner therapies designed for adults and busy teens',
    description: 'Straighten crooked teeth, close gaps, and optimize your bite discreetly without traditional brackets, guided by precise digital scanning.',
    image: '/src/assets/images/empire_treat_aligner_1790291849435.jpg',
    stat: '98% Alignment Success',
  },
];

export const MARQUEE_ITEMS = [
  'Gentle Care',
  'Advanced 3D Technology',
  'Radiant Smiles',
  'Trusted Dentists',
  'Pain-Free Experience',
  'Modern Miami Clinic',
  'Emergency Care',
  'Cosmetic Veneers',
  'Dental Implants',
];

export const TESTIMONIALS: DentalTestimonial[] = [
  {
    id: 'test-1',
    name: 'DAVID K.',
    role: 'Business Executive, Miami, FL',
    location: 'MIAMI, FL',
    treatment: 'Dental Implant Restoration',
    quote: '"THEIR TEAM MADE MY IMPLANT SURGERY COMPLETELY PAIN-FREE AND REASSURING."',
    image: '/src/assets/images/testimonial_man_1790289713518.jpg',
  },
  {
    id: 'test-2',
    name: 'SARAH L.',
    role: 'Interior Designer, Coral Gables, FL',
    location: 'CORAL GABLES, FL',
    treatment: 'Porcelain Veneers & Whitening',
    quote: '"THANKS TO EMPIRE DENTAL, MY VENEERS LOOK STUNNING AND UTTERLY NATURAL!"',
    image: '/src/assets/images/empire_hero_smile_1790291733723.jpg',
  },
  {
    id: 'test-3',
    name: 'JESSIE T.',
    role: 'Educator, Miami, FL',
    location: 'MIAMI, FL',
    treatment: 'Family Dental Care',
    quote: '"PROFESSIONAL, GENTLE, AND SO ATTENTIVE TO MY ENTIRE FAMILY\'S NEEDS."',
    image: '/src/assets/images/testimonial_woman_1790289723984.jpg',
  },
];

export const BLOG_POSTS: DentalArticle[] = [
  {
    id: 'art-1',
    title: 'How Porcelain Veneers Craft a Naturally Radiant Smile',
    category: 'COSMETIC DENTISTRY',
    date: 'September 2026',
    image: '/src/assets/images/empire_treat_cosmetic_1790291829331.jpg',
    readTime: '4 min read',
    excerpt: 'Explore the artistry behind customized porcelain veneers, digital smile design, and how minimal prep preserves your natural tooth structure.',
  },
  {
    id: 'art-2',
    title: 'The Modern Breakthrough of Dental Implants vs. Bridges',
    category: 'RESTORATIVE',
    date: 'September 2026',
    image: '/src/assets/images/empire_treat_implant_1790291870092.jpg',
    readTime: '5 min read',
    excerpt: 'Why permanent titanium dental implants are the gold standard for bone preservation, chew strength, and long-term oral vitality.',
  },
  {
    id: 'art-3',
    title: 'Everyday Habits for Preserving Tooth Enamel & Gum Health',
    category: 'PREVENTIVE CARE',
    date: 'September 2026',
    image: '/src/assets/images/empire_hero_smile_1790291733723.jpg',
    readTime: '3 min read',
    excerpt: 'Simple daily oral hygiene rituals, dietary insights, and regular clinical cleanings that ensure lifelong dental wellness.',
  },
];

export const FAQ_ITEMS: DentalFaq[] = [
  {
    question: 'Do you accept major dental insurance plans and offer financing?',
    answer: 'Yes! Empire Corporation Dental in Miami works with most major PPO dental insurance providers and offers flexible, zero-interest financing plans (including CareCredit) so you can receive the care you need without financial stress.',
    category: 'financing',
  },
  {
    question: 'What should I expect during my first visit to Empire Corporation Dental?',
    answer: 'Your first visit includes a welcoming consultation, comprehensive oral examination, low-radiation digital imaging, periodontal screening, and a gentle ultrasonic cleaning. We take the time to listen to your goals and tailor every step.',
    category: 'first-visit',
  },
  {
    question: 'How quickly can I be seen for an emergency toothache or broken tooth?',
    answer: 'We reserve daily emergency appointment slots to provide same-day urgent care for severe toothaches, chipped or knocked-out teeth, broken crowns, and painful infections. Call us immediately at (305) 633-8880.',
    category: 'treatments',
  },
  {
    question: 'Are cosmetic veneers and teeth whitening treatments long-lasting?',
    answer: 'With proper oral hygiene and regular cleanings, our handcrafted porcelain veneers typically last 15 to 20+ years. In-office laser whitening results can be maintained for years with our complimentary take-home touch-up kits.',
    category: 'treatments',
  },
  {
    question: 'Is dental implant surgery painful?',
    answer: 'Our patients report minimal to no discomfort! We utilize gentle local anesthetics and optional conscious sedation, combined with precision 3D surgical guidance, ensuring your procedure is smooth, swift, and stress-free.',
    category: 'treatments',
  },
  {
    question: 'Where is Empire Corporation Dental located in Miami?',
    answer: 'We are conveniently located at 2030 NW 22nd Ave, Miami, FL 33142, with accessible private parking and direct access to major Miami transit routes.',
    category: 'first-visit',
  },
];

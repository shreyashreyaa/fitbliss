/**
 * FitBliss - Classes & Trainers Data (data/classesData.js)
 * 
 * Timetable for Yoga, Zumba, HIIT, Strength Training, and Meditation
 * plus 4 certified trainers.
 */

export const TRAINERS = [
  {
    id: 'aarav-mehta',
    name: 'Aarav Mehta',
    role: 'Head Strength & Conditioning Coach',
    specialization: 'Hypertrophy, Powerlifting & Biomechanics',
    experience: '9+ Years Experience',
    certifications: 'CSCS (NSCA), ACE Certified Personal Trainer',
    bio: 'Former competitive powerlifter dedicated to injury-free progressive overload and functional core stabilization.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80',
    quote: 'True strength is built through form first, weight second.'
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    role: 'Lead Yoga & Mindful Movement Specialist',
    specialization: 'Vinyasa Flow, Hatha Yoga & Breathwork',
    experience: '8+ Years Experience',
    certifications: 'ERYT-500 Yoga Alliance, Certified Sound Healer',
    bio: 'Passionate about integrating ancient pranayama and joint mobility for modern desk-bound professionals.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
    quote: 'Flexibility of mind precedes flexibility of body.'
  },
  {
    id: 'rohan-verma',
    name: 'Rohan Verma',
    role: 'HIIT & Functional Cardio Master Trainer',
    specialization: 'Metabolic Conditioning, Plyometrics & Boxing Fitness',
    experience: '7+ Years Experience',
    certifications: 'CrossFit Level 2, NASM-CPT, Kettlebell Athletics Level 1',
    bio: 'Brings unstoppable positive energy to every high-octane session, keeping motivation high and fat burn maximized.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    quote: 'You do not have to be extreme, just consistent.'
  },
  {
    id: 'ananya-deshmukh',
    name: 'Ananya Deshmukh',
    role: 'Zumba & Dance Fitness Coordinator',
    specialization: 'Zumba Fitness, Aerobics & Rhythmic Cardio',
    experience: '6+ Years Experience',
    certifications: 'ZIN™ Certified (Zumba B1, B2, Aqua Zumba), ISSA Certified',
    bio: 'Turns every workout into a high-energy dance celebration where calorie burning feels like pure joy.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    quote: 'Dance your stress away; one beat, one sweat drop at a time.'
  }
];

export const TIMETABLE = [
  {
    day: 'Monday',
    slots: [
      { time: '06:30 AM - 07:30 AM', className: 'Sunrise Vinyasa Yoga', category: 'yoga', trainer: 'Priya Sharma', level: 'All Levels', room: 'Mind & Body Studio' },
      { time: '08:00 AM - 09:00 AM', className: 'HIIT Core Torch', category: 'hiit', trainer: 'Rohan Verma', level: 'Intermediate', room: 'Functional Arena' },
      { time: '05:30 PM - 06:30 PM', className: 'Zumba Cardio Blast', category: 'zumba', trainer: 'Ananya Deshmukh', level: 'Beginner Friendly', room: 'Studio 1' },
      { time: '07:00 PM - 08:00 PM', className: 'Compound Strength Lab', category: 'strength', trainer: 'Aarav Mehta', level: 'Intermediate/Adv', room: 'Iron Vault' },
      { time: '08:15 PM - 08:45 PM', className: 'Pranayama & Sound Meditation', category: 'meditation', trainer: 'Priya Sharma', level: 'All Levels', room: 'Zen Sanctuary' }
    ]
  },
  {
    day: 'Tuesday',
    slots: [
      { time: '06:30 AM - 07:30 AM', className: 'Functional Kettlebell Flow', category: 'strength', trainer: 'Rohan Verma', level: 'Intermediate', room: 'Functional Arena' },
      { time: '08:00 AM - 09:00 AM', className: 'Gentle Hatha & Hip Opening', category: 'yoga', trainer: 'Priya Sharma', level: 'All Levels', room: 'Mind & Body Studio' },
      { time: '05:30 PM - 06:30 PM', className: 'Tabata Shred', category: 'hiit', trainer: 'Rohan Verma', level: 'Advanced', room: 'Functional Arena' },
      { time: '06:45 PM - 07:45 PM', className: 'Bollywood Zumba Beats', category: 'zumba', trainer: 'Ananya Deshmukh', level: 'All Levels', room: 'Studio 1' },
      { time: '08:00 PM - 08:30 PM', className: 'Mindfulness & Guided Nidra', category: 'meditation', trainer: 'Priya Sharma', level: 'All Levels', room: 'Zen Sanctuary' }
    ]
  },
  {
    day: 'Wednesday',
    slots: [
      { time: '06:30 AM - 07:30 AM', className: 'Power Ashtanga Yoga', category: 'yoga', trainer: 'Priya Sharma', level: 'Intermediate', room: 'Mind & Body Studio' },
      { time: '08:00 AM - 09:00 AM', className: 'Barbell Hypertrophy Basics', category: 'strength', trainer: 'Aarav Mehta', level: 'Beginner', room: 'Iron Vault' },
      { time: '05:30 PM - 06:30 PM', className: 'Latin Zumba Party', category: 'zumba', trainer: 'Ananya Deshmukh', level: 'All Levels', room: 'Studio 1' },
      { time: '07:00 PM - 08:00 PM', className: 'Athletic Conditioning & Agility', category: 'hiit', trainer: 'Rohan Verma', level: 'Advanced', room: 'Functional Arena' },
      { time: '08:15 PM - 08:45 PM', className: 'Breathwork & Inner Calm', category: 'meditation', trainer: 'Priya Sharma', level: 'All Levels', room: 'Zen Sanctuary' }
    ]
  },
  {
    day: 'Thursday',
    slots: [
      { time: '06:30 AM - 07:30 AM', className: 'Glutes & Core Strength', category: 'strength', trainer: 'Aarav Mehta', level: 'All Levels', room: 'Iron Vault' },
      { time: '08:00 AM - 09:00 AM', className: 'HIIT Cardio Kickboxing', category: 'hiit', trainer: 'Rohan Verma', level: 'Intermediate', room: 'Functional Arena' },
      { time: '05:30 PM - 06:30 PM', className: 'Restorative Yin Yoga', category: 'yoga', trainer: 'Priya Sharma', level: 'All Levels', room: 'Mind & Body Studio' },
      { time: '06:45 PM - 07:45 PM', className: 'Zumba Step & Tone', category: 'zumba', trainer: 'Ananya Deshmukh', level: 'Intermediate', room: 'Studio 1' },
      { time: '08:00 PM - 08:30 PM', className: 'Deep Stress-Release Meditation', category: 'meditation', trainer: 'Priya Sharma', level: 'All Levels', room: 'Zen Sanctuary' }
    ]
  },
  {
    day: 'Friday',
    slots: [
      { time: '06:30 AM - 07:30 AM', className: 'Dynamic Vinyasa Flow', category: 'yoga', trainer: 'Priya Sharma', level: 'All Levels', room: 'Mind & Body Studio' },
      { time: '08:00 AM - 09:00 AM', className: 'Total Body Barbell Blitz', category: 'strength', trainer: 'Aarav Mehta', level: 'Intermediate', room: 'Iron Vault' },
      { time: '05:30 PM - 06:30 PM', className: 'Friday Night Zumba Carnival', category: 'zumba', trainer: 'Ananya Deshmukh', level: 'All Levels', room: 'Studio 1' },
      { time: '07:00 PM - 08:00 PM', className: 'Metabolic Sprint Circuit', category: 'hiit', trainer: 'Rohan Verma', level: 'Advanced', room: 'Functional Arena' },
      { time: '08:15 PM - 08:45 PM', className: 'Chakra Meditation & Crystal Bowls', category: 'meditation', trainer: 'Priya Sharma', level: 'All Levels', room: 'Zen Sanctuary' }
    ]
  },
  {
    day: 'Saturday',
    slots: [
      { time: '07:30 AM - 08:45 AM', className: 'Weekend Power Yoga Masterclass', category: 'yoga', trainer: 'Priya Sharma', level: 'All Levels', room: 'Mind & Body Studio' },
      { time: '09:00 AM - 10:00 AM', className: 'Functional Bootcamp & Obstacles', category: 'hiit', trainer: 'Rohan Verma', level: 'Intermediate/Adv', room: 'Outdoor Turf' },
      { time: '10:30 AM - 11:30 AM', className: 'Mega Zumba Dance Blast', category: 'zumba', trainer: 'Ananya Deshmukh', level: 'All Levels', room: 'Studio 1' },
      { time: '04:30 PM - 05:30 PM', className: 'Strength Mechanics & Form Clinic', category: 'strength', trainer: 'Aarav Mehta', level: 'Beginner', room: 'Iron Vault' },
      { time: '06:00 PM - 06:45 PM', className: 'Candlelight Sound Bath Meditation', category: 'meditation', trainer: 'Priya Sharma', level: 'All Levels', room: 'Zen Sanctuary' }
    ]
  },
  {
    day: 'Sunday',
    slots: [
      { time: '08:00 AM - 09:15 AM', className: 'Slow Flow Sunday & Deep Stretch', category: 'yoga', trainer: 'Priya Sharma', level: 'All Levels', room: 'Mind & Body Studio' },
      { time: '09:30 AM - 10:30 AM', className: 'Core & Mobility Express', category: 'strength', trainer: 'Aarav Mehta', level: 'All Levels', room: 'Functional Arena' },
      { time: '11:00 AM - 12:00 PM', className: 'Community Zumba Party', category: 'zumba', trainer: 'Ananya Deshmukh', level: 'All Levels', room: 'Studio 1' },
      { time: '05:00 PM - 05:45 PM', className: 'Breath, Gratitude & Weekly Reset', category: 'meditation', trainer: 'Priya Sharma', level: 'All Levels', room: 'Zen Sanctuary' }
    ]
  }
];

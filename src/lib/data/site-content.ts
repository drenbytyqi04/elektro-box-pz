export const whyChooseUs = [
  {
    year: "2018",
    title: "Certified Electricians",
    description: "Every technician is licensed, insured, and continuously trained on the latest code standards.",
  },
  {
    year: "2020",
    title: "Premium Materials Only",
    description: "We install ABB, Schneider Electric and Legrand hardware — no unbranded substitutes, ever.",
  },
  {
    year: "2022",
    title: "Latest Technology",
    description: "Control4, Lutron and Hikvision certified integrators, kept current on every firmware and platform update.",
  },
  {
    year: "2023",
    title: "Fast Response Support",
    description: "Priority scheduling and a 24/7 emergency line for maintenance plan clients.",
  },
  {
    year: "2024",
    title: "Warranty Backed",
    description: "10-year workmanship warranty on installations, backed by manufacturer hardware warranties.",
  },
  {
    year: "2025",
    title: "Professional Engineering",
    description: "Every project is load-calculated and permit-documented by licensed engineers before a single wire is run.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We walk your property, understand your goals, and scope the project — free of charge.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Engineering drawings, equipment selection, and a transparent fixed quote before work begins.",
  },
  {
    step: "03",
    title: "Installation",
    description: "Certified technicians execute the build with daily progress updates and clean job sites.",
  },
  {
    step: "04",
    title: "Testing",
    description: "Full system testing, load verification, and quality inspection before handover.",
  },
  {
    step: "05",
    title: "Support",
    description: "Training, documentation, and ongoing maintenance so the system keeps performing for years.",
  },
] as const;

export const smartHomeHotspots = [
  {
    id: "lights",
    label: "Lighting",
    icon: "Lightbulb",
    position: { top: "22%", left: "28%" },
    description: "Scene-based lighting that adjusts automatically by time of day, occupancy, and mood.",
  },
  {
    id: "security",
    label: "Security",
    icon: "ShieldCheck",
    position: { top: "18%", left: "72%" },
    description: "AI-monitored cameras, sensors, and locks unified into one alert system.",
  },
  {
    id: "climate",
    label: "Climate",
    icon: "Thermometer",
    position: { top: "48%", left: "50%" },
    description: "Room-by-room climate control that learns your schedule and saves energy automatically.",
  },
  {
    id: "energy",
    label: "Energy",
    icon: "BatteryCharging",
    position: { top: "65%", left: "20%" },
    description: "Real-time energy monitoring with automated load management and solar-ready infrastructure.",
  },
  {
    id: "voice",
    label: "Voice Control",
    icon: "Mic",
    position: { top: "70%", left: "78%" },
    description: "Hands-free control via Alexa, Google Assistant, or Siri — fully integrated, not bolted on.",
  },
  {
    id: "automation",
    label: "Automation",
    icon: "Workflow",
    position: { top: "40%", left: "12%" },
    description: "Custom scenes and routines that orchestrate every system together, on schedule or on command.",
  },
] as const;

export const generalFaqs = [
  {
    question: "What areas do you service?",
    answer: "We serve Prishtina and the surrounding region, with select commercial projects across Kosovo.",
  },
  {
    question: "Do you provide free quotes?",
    answer: "Yes — every project starts with a free, no-obligation site consultation and fixed quote.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, all Electro Box technicians are licensed electricians and every project is fully insured.",
  },
  {
    question: "How quickly can you respond to an emergency?",
    answer: "Our emergency line is staffed 24/7 for maintenance plan clients, with priority same-day response for critical safety issues.",
  },
  {
    question: "Can you integrate systems from different brands?",
    answer: "Yes — our platforms (Control4, Lutron, Hikvision, Ajax) are chosen specifically for their ability to interoperate cleanly.",
  },
] as const;

export const budgetOptions = [
  { value: "under-2k", label: "Under €2,000" },
  { value: "2k-5k", label: "€2,000 – €5,000" },
  { value: "5k-15k", label: "€5,000 – €15,000" },
  { value: "15k-plus", label: "€15,000+" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const timelineOptions = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-month", label: "Within 1 month" },
  { value: "3-months", label: "Within 3 months" },
  { value: "planning", label: "Just planning ahead" },
] as const;

import type { Locale } from "@/i18n/routing";

export interface WhyChooseUsItem {
  year: string;
  title: string;
  description: string;
}

const whyChooseUsEn: WhyChooseUsItem[] = [
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
];

const whyChooseUsSq: WhyChooseUsItem[] = [
  {
    year: "2018",
    title: "Elektricistë të Certifikuar",
    description: "Çdo teknik është i licencuar, i siguruar, dhe i trajnuar vazhdimisht sipas standardeve më të reja.",
  },
  {
    year: "2020",
    title: "Vetëm Materiale Premium",
    description: "Instalojmë hardware ABB, Schneider Electric dhe Legrand — kurrë zëvendësues pa markë.",
  },
  {
    year: "2022",
    title: "Teknologjia Më e Fundit",
    description: "Integrues të certifikuar Control4, Lutron dhe Hikvision, gjithmonë të përditësuar me çdo firmware dhe platformë.",
  },
  {
    year: "2023",
    title: "Mbështetje me Përgjigje të Shpejtë",
    description: "Planifikim me prioritet dhe linjë urgjence 24/7 për klientët me plan mirëmbajtjeje.",
  },
  {
    year: "2024",
    title: "E Mbështetur nga Garancia",
    description: "Garanci 10-vjeçare për cilësinë e punës në instalime, e mbështetur nga garancitë e prodhuesve.",
  },
  {
    year: "2025",
    title: "Inxhinieri Profesionale",
    description: "Çdo projekt llogaritet për ngarkesë dhe dokumentohet për leje nga inxhinierë të licencuar përpara se të kalojë edhe një tel i vetëm.",
  },
];

export interface ProcessStepItem {
  step: string;
  title: string;
  description: string;
}

const processStepsEn: ProcessStepItem[] = [
  { step: "01", title: "Consultation", description: "We walk your property, understand your goals, and scope the project — free of charge." },
  { step: "02", title: "Planning", description: "Engineering drawings, equipment selection, and a transparent fixed quote before work begins." },
  { step: "03", title: "Installation", description: "Certified technicians execute the build with daily progress updates and clean job sites." },
  { step: "04", title: "Testing", description: "Full system testing, load verification, and quality inspection before handover." },
  { step: "05", title: "Support", description: "Training, documentation, and ongoing maintenance so the system keeps performing for years." },
];

const processStepsSq: ProcessStepItem[] = [
  { step: "01", title: "Konsultimi", description: "Vizitojmë pronën tënde, kuptojmë qëllimet e tua, dhe përcaktojmë përshkrimin e projektit — pa pagesë." },
  { step: "02", title: "Planifikimi", description: "Vizatime inxhinierike, përzgjedhje pajisjesh, dhe ofertë fikse transparente përpara se të fillojë puna." },
  { step: "03", title: "Instalimi", description: "Teknikë të certifikuar e realizojnë ndërtimin me përditësime ditore progresi dhe vende pune të pastra." },
  { step: "04", title: "Testimi", description: "Testim i plotë i sistemit, verifikim ngarkese, dhe inspektim cilësie përpara dorëzimit." },
  { step: "05", title: "Mbështetja", description: "Trajnim, dokumentacion, dhe mirëmbajtje e vazhdueshme që sistemi të vazhdojë të performojë për vite." },
];

export interface SmartHomeHotspotItem {
  id: string;
  label: string;
  icon: string;
  position: { top: string; left: string };
  description: string;
}

const smartHomeHotspotsEn: SmartHomeHotspotItem[] = [
  { id: "lights", label: "Lighting", icon: "Lightbulb", position: { top: "22%", left: "28%" }, description: "Scene-based lighting that adjusts automatically by time of day, occupancy, and mood." },
  { id: "security", label: "Security", icon: "ShieldCheck", position: { top: "18%", left: "72%" }, description: "AI-monitored cameras, sensors, and locks unified into one alert system." },
  { id: "climate", label: "Climate", icon: "Thermometer", position: { top: "48%", left: "50%" }, description: "Room-by-room climate control that learns your schedule and saves energy automatically." },
  { id: "energy", label: "Energy", icon: "BatteryCharging", position: { top: "65%", left: "20%" }, description: "Real-time energy monitoring with automated load management and solar-ready infrastructure." },
  { id: "voice", label: "Voice Control", icon: "Mic", position: { top: "70%", left: "78%" }, description: "Hands-free control via Alexa, Google Assistant, or Siri — fully integrated, not bolted on." },
  { id: "automation", label: "Automation", icon: "Workflow", position: { top: "40%", left: "12%" }, description: "Custom scenes and routines that orchestrate every system together, on schedule or on command." },
];

const smartHomeHotspotsSq: SmartHomeHotspotItem[] = [
  { id: "lights", label: "Ndriçimi", icon: "Lightbulb", position: { top: "22%", left: "28%" }, description: "Ndriçim i bazuar në skena që rregullohet automatikisht sipas kohës së ditës, prezencës, dhe humorit." },
  { id: "security", label: "Siguria", icon: "ShieldCheck", position: { top: "18%", left: "72%" }, description: "Kamera, sensorë, dhe brava të monitoruara me AI, të bashkuara në një sistem alarmi." },
  { id: "climate", label: "Klima", icon: "Thermometer", position: { top: "48%", left: "50%" }, description: "Kontroll klime dhomë-për-dhomë që mëson orarin tënd dhe kursen energji automatikisht." },
  { id: "energy", label: "Energjia", icon: "BatteryCharging", position: { top: "65%", left: "20%" }, description: "Monitorim energjie në kohë reale me menaxhim automatik të ngarkesës dhe infrastrukturë gati për solar." },
  { id: "voice", label: "Kontroll me Zë", icon: "Mic", position: { top: "70%", left: "78%" }, description: "Kontroll pa duar përmes Alexa, Google Assistant, ose Siri — plotësisht i integruar, jo i shtuar mekanikisht." },
  { id: "automation", label: "Automatizimi", icon: "Workflow", position: { top: "40%", left: "12%" }, description: "Skena dhe rutina të personalizuara që orkestrojnë çdo sistem së bashku, sipas orarit apo komandës." },
];

export interface FaqItem {
  question: string;
  answer: string;
}

const generalFaqsEn: FaqItem[] = [
  { question: "What areas do you service?", answer: "We serve Prishtina and the surrounding region, with select commercial projects across Kosovo." },
  { question: "Do you provide free quotes?", answer: "Yes — every project starts with a free, no-obligation site consultation and fixed quote." },
  { question: "Are you licensed and insured?", answer: "Yes, all Electro Box technicians are licensed electricians and every project is fully insured." },
  { question: "How quickly can you respond to an emergency?", answer: "Our emergency line is staffed 24/7 for maintenance plan clients, with priority same-day response for critical safety issues." },
  { question: "Can you integrate systems from different brands?", answer: "Yes — our platforms (Control4, Lutron, Hikvision, Ajax) are chosen specifically for their ability to interoperate cleanly." },
];

const generalFaqsSq: FaqItem[] = [
  { question: "Cilat zona i shërbeni?", answer: "I shërbejmë Prishtinës dhe rajonit përreth, me projekte të përzgjedhura komerciale në gjithë Kosovën." },
  { question: "A ofroni oferta falas?", answer: "Po — çdo projekt fillon me një konsultim falas në terren, pa asnjë detyrim, dhe ofertë fikse." },
  { question: "A jeni të licencuar dhe të siguruar?", answer: "Po, të gjithë teknikët e Electro Box janë elektricistë të licencuar dhe çdo projekt është plotësisht i siguruar." },
  { question: "Sa shpejt mund të përgjigjeni ndaj një urgjence?", answer: "Linja jonë e urgjencës është e stafuar 24/7 për klientët me plan mirëmbajtjeje, me përgjigje prioritare brenda ditës për çështje kritike sigurie." },
  { question: "A mund të integroni sisteme nga marka të ndryshme?", answer: "Po — platformat tona (Control4, Lutron, Hikvision, Ajax) zgjidhen pikërisht për aftësinë e tyre për të bashkëvepruar në mënyrë të pastër." },
];

export function getWhyChooseUs(locale: Locale) {
  return locale === "sq" ? whyChooseUsSq : whyChooseUsEn;
}

export function getProcessSteps(locale: Locale) {
  return locale === "sq" ? processStepsSq : processStepsEn;
}

export function getSmartHomeHotspots(locale: Locale) {
  return locale === "sq" ? smartHomeHotspotsSq : smartHomeHotspotsEn;
}

export function getGeneralFaqs(locale: Locale) {
  return locale === "sq" ? generalFaqsSq : generalFaqsEn;
}

export const budgetOptions = [
  { value: "under-2k" },
  { value: "2k-5k" },
  { value: "5k-15k" },
  { value: "15k-plus" },
  { value: "not-sure" },
] as const;

export const timelineOptions = [
  { value: "asap" },
  { value: "1-month" },
  { value: "3-months" },
  { value: "planning" },
] as const;

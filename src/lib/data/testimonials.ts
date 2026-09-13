import type { Locale } from "@/i18n/routing";

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  project?: string;
}

const testimonialsEn: Testimonial[] = [
  {
    name: "Blerta Krasniqi",
    role: "Homeowner, Prishtina Hills",
    quote:
      "Electro Box turned our home into something out of a tech showroom, but it never feels complicated — every scene just works. Support has been fast every time we've needed them.",
    rating: 5,
    project: "Prishtina Hills Smart Villa",
  },
  {
    name: "Arben Gashi",
    role: "Facilities Manager, Sunny Hill Tower",
    quote:
      "The camera upgrade paid for itself in reduced false-alarm callouts alone. The team scheduled the entire 8-floor rollout around our tenants with zero disruption.",
    rating: 5,
    project: "Sunny Hill Office Tower",
  },
  {
    name: "Fisnik Berisha",
    role: "Homeowner, Dardania",
    quote:
      "We were genuinely worried about fire risk with our old wiring. Electro Box explained every step, handled permits, and left the house cleaner than they found it.",
    rating: 5,
    project: "Dardania Family Residence",
  },
  {
    name: "Vlora Hoxha",
    role: "General Manager, Velania Boutique Hotel",
    quote:
      "Keyless access changed how our front desk operates. Guests love the mobile check-in, and we finally have a real audit trail for staff areas.",
    rating: 5,
    project: "Velania Boutique Hotel",
  },
  {
    name: "Driton Ahmeti",
    role: "Homeowner, Germia",
    quote:
      "The lighting design alone changed how the house feels in the evening. It's subtle, but everyone who visits notices something is different — in a good way.",
    rating: 5,
    project: "Germia Residence",
  },
  {
    name: "Sadik Krasniqi",
    role: "Operations Director, Lakrishtë Logistics",
    quote:
      "Our warehouse Wi-Fi dead zones had been a problem for years. Electro Box's cabling overhaul fixed it permanently, not just temporarily like the extenders we tried before.",
    rating: 5,
    project: "Lakrishtë Logistics",
  },
];

const testimonialsSq: Testimonial[] = [
  {
    name: "Blerta Krasniqi",
    role: "Pronare Shtëpie, Prishtina Hills",
    quote:
      "Electro Box e ktheu shtëpinë tonë në diçka që duket si nga një showroom teknologjie, por kurrë s'ndihet e ndërlikuar — çdo skenë thjesht funksionon. Mbështetja ka qenë e shpejtë çdo herë që na është dashur.",
    rating: 5,
    project: "Vila Smart Prishtina Hills",
  },
  {
    name: "Arben Gashi",
    role: "Menaxher Objekti, Kulla Sunny Hill",
    quote:
      "Ngritja e kamerave u shpagua vetëm nga ulja e thirrjeve për alarme false. Ekipi e planifikoi gjithë vendosjen në 8 kate rreth qiramarrësve tanë pa asnjë ndërprerje.",
    rating: 5,
    project: "Kulla e Zyrave Sunny Hill",
  },
  {
    name: "Fisnik Berisha",
    role: "Pronar Shtëpie, Dardani",
    quote:
      "Ishim vërtet të shqetësuar për rrezikun e zjarrit me kabllimin tonë të vjetër. Electro Box shpjegoi çdo hap, u mor me lejet, dhe e la shtëpinë më të pastër se sa e gjeti.",
    rating: 5,
    project: "Rezidenca Familjare Dardania",
  },
  {
    name: "Vlora Hoxha",
    role: "Drejtoreshë e Përgjithshme, Hoteli Boutique Velania",
    quote:
      "Hyrja pa çelës e ndryshoi mënyrën si funksionon recepsioni ynë. Mysafirëve u pëlqen check-in-i mobil, dhe më në fund kemi një gjurmë reale auditimi për zonat e stafit.",
    rating: 5,
    project: "Hoteli Boutique Velania",
  },
  {
    name: "Driton Ahmeti",
    role: "Pronar Shtëpie, Germia",
    quote:
      "Vetëm dizajni i ndriçimit e ndryshoi si ndihet shtëpia në mbrëmje. Është diskret, por të gjithë që vizitojnë vërejnë se diçka është ndryshe — në mënyrë të mirë.",
    rating: 5,
    project: "Rezidenca Germia",
  },
  {
    name: "Sadik Krasniqi",
    role: "Drejtor Operacionesh, Lakrishtë Logistics",
    quote:
      "Zonat e vdekura të Wi-Fi në depon tonë kishin qenë problem për vite. Rinovimi i kabllimit nga Electro Box e zgjidhi përgjithmonë, jo vetëm përkohësisht si zgjatësit që provuam më parë.",
    rating: 5,
    project: "Lakrishtë Logistics",
  },
];

export function getTestimonials(locale: Locale): Testimonial[] {
  return locale === "sq" ? testimonialsSq : testimonialsEn;
}

import type { Locale } from "@/i18n/routing";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

const teamEn: TeamMember[] = [
  {
    name: "Argjend Morina",
    role: "Founder & Lead Engineer",
    bio: "8+ years designing electrical and automation systems, certified across Control4, Lutron and Schneider Electric platforms.",
    initials: "AM",
  },
  {
    name: "Njomza Kastrati",
    role: "Smart Home Systems Architect",
    bio: "Leads automation design from discovery through commissioning, specializing in Control4 and Lutron integration.",
    initials: "NK",
  },
  {
    name: "Blendi Rama",
    role: "Head of Security Systems",
    bio: "Designs and deploys enterprise CCTV and access control infrastructure for commercial and residential clients.",
    initials: "BR",
  },
  {
    name: "Ermal Sylaj",
    role: "Master Electrician",
    bio: "Licensed electrician overseeing every installation for code compliance, safety, and workmanship quality.",
    initials: "ES",
  },
];

const teamSq: TeamMember[] = [
  {
    name: "Argjend Morina",
    role: "Themelues & Inxhinier Kryesor",
    bio: "8+ vite duke projektuar sisteme elektrike dhe automatizimi, i certifikuar në platformat Control4, Lutron dhe Schneider Electric.",
    initials: "AM",
  },
  {
    name: "Njomza Kastrati",
    role: "Arkitekte e Sistemeve Smart Home",
    bio: "Drejton dizajnin e automatizimit nga zbulimi deri te vënia në punë, e specializuar në integrimin Control4 dhe Lutron.",
    initials: "NK",
  },
  {
    name: "Blendi Rama",
    role: "Shef i Sistemeve të Sigurisë",
    bio: "Projekton dhe vendos infrastrukturë CCTV dhe kontroll hyrjeje niveli ndërmarrjeje për klientë komercialë dhe rezidencialë.",
    initials: "BR",
  },
  {
    name: "Ermal Sylaj",
    role: "Master Elektricist",
    bio: "Elektricist i licencuar që mbikëqyr çdo instalim për përputhshmëri me standardet, siguri, dhe cilësinë e punës.",
    initials: "ES",
  },
];

export function getTeam(locale: Locale): TeamMember[] {
  return locale === "sq" ? teamSq : teamEn;
}

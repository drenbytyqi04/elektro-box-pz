export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export const team: TeamMember[] = [
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

export type ProjectCategory = "Residential" | "Commercial" | "Smart Home" | "Security";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  equipment: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "prishtina-hills-smart-villa",
    title: "Prishtina Hills Smart Villa",
    category: "Smart Home",
    location: "Prishtinë",
    year: 2025,
    summary: "Full-home automation across a 480m² villa — lighting, climate, security and A/V unified in one system.",
    challenge:
      "The client wanted whole-home automation retrofitted into a nearly finished build, without opening walls that had already been plastered.",
    solution:
      "We deployed a hybrid Lutron RA3 + Control4 backbone using wireless keypads and sensors where wiring wasn't feasible, backed by a Cat6A structured cabling core in accessible risers.",
    results: [
      "18 rooms fully automated in under 3 weeks",
      "32% reduction in lighting energy use",
      "Single-app control for lighting, climate, security & A/V",
    ],
    equipment: ["Control4", "Lutron RA3", "Cat6A structured cabling"],
    featured: true,
  },
  {
    slug: "sunny-hill-office-tower-cctv",
    title: "Sunny Hill Office Tower Security Upgrade",
    category: "Commercial",
    location: "Prishtinë",
    year: 2024,
    summary: "120-camera enterprise CCTV rollout across an 8-floor commercial tower with centralized VMS.",
    challenge:
      "Legacy analog cameras left major blind spots and no centralized monitoring across the building's 8 floors and parking structure.",
    solution:
      "Full migration to a Hikvision 4K IP camera network on dedicated PoE backbone, with AI-based person/vehicle detection and a single-pane VMS dashboard for building management.",
    results: [
      "100% coverage across all floors & parking",
      "AI alerts cut false-alarm callouts by 60%",
      "Centralized monitoring for 3 building managers",
    ],
    equipment: ["Hikvision 4K NVR", "PoE structured backbone", "Enterprise VMS"],
    featured: true,
  },
  {
    slug: "dardania-family-residence-rewire",
    title: "Dardania Family Residence Full Rewire",
    category: "Residential",
    location: "Prishtinë",
    year: 2024,
    summary: "Complete electrical rewiring and panel modernization of a 1990s family home.",
    challenge:
      "Original aluminum wiring and an undersized panel created recurring breaker trips and posed a genuine fire risk.",
    solution:
      "Full rewire with copper conductors, a new 200A Schneider Electric panel sized for future EV charging and solar, and whole-home surge protection.",
    results: [
      "Zero breaker trips since completion",
      "Panel capacity for future EV charger",
      "10-year workmanship warranty issued",
    ],
    equipment: ["Schneider Electric panel", "ABB breakers", "Legrand devices"],
  },
  {
    slug: "velania-boutique-hotel-access-control",
    title: "Velania Boutique Hotel Access Control",
    category: "Security",
    location: "Prishtinë",
    year: 2024,
    summary: "Keyless mobile-credential access system across 34 guest rooms and staff areas.",
    challenge:
      "The hotel needed to eliminate physical key cards while giving staff granular, auditable access to service areas.",
    solution:
      "Mobile-credential locks on all guest rooms, biometric readers on staff-only doors, and a video intercom at the service entrance — all managed from one dashboard.",
    results: [
      "34 rooms converted to keyless entry",
      "Full audit trail on all staff areas",
      "Front-desk check-in time cut by 40%",
    ],
    equipment: ["Mobile-credential locks", "Biometric readers", "Video intercom"],
  },
  {
    slug: "germia-residence-lighting-design",
    title: "Germia Residence Architectural Lighting",
    category: "Residential",
    location: "Prishtinë",
    year: 2023,
    summary: "Layered architectural lighting design with circadian automation for a hillside residence.",
    challenge:
      "Flat, single-temperature lighting throughout the home made every room feel identical regardless of time or purpose.",
    solution:
      "A three-layer lighting plan (ambient, task, accent) using Lutron dimming and Philips Hue color-tunable fixtures, automated to shift color temperature across the day.",
    results: [
      "6 custom scenes across 14 rooms",
      "Circadian-tuned lighting shown to improve evening wind-down",
      "27% lower lighting energy consumption",
    ],
    equipment: ["Lutron RA3", "Philips Hue", "Daylight sensors"],
  },
  {
    slug: "lakrishte-logistics-network-upgrade",
    title: "Lakrishtë Logistics Network & Cabling Overhaul",
    category: "Commercial",
    location: "Fushë Kosovë",
    year: 2023,
    summary: "Structured cabling and mesh Wi-Fi overhaul across a 6,000m² warehouse and office facility.",
    challenge:
      "Warehouse Wi-Fi dead zones were disrupting barcode scanners and inventory systems on the floor.",
    solution:
      "Full Cat6A structured cabling backbone with ceiling-mounted enterprise access points and VLAN segmentation separating warehouse IoT from office traffic.",
    results: [
      "100% floor Wi-Fi coverage achieved",
      "Zero scanner disconnects post-upgrade",
      "Segmented network passed security audit",
    ],
    equipment: ["Cat6A cabling", "Enterprise mesh APs", "Managed switches"],
  },
  {
    slug: "arberia-residence-cctv-perimeter",
    title: "Arbëria Residence Perimeter Security",
    category: "Security",
    location: "Prishtinë",
    year: 2023,
    summary: "AI-powered perimeter camera system with license plate recognition for a private residence.",
    challenge:
      "Frequent false alarms from a legacy motion-sensor system were causing alert fatigue for the homeowners.",
    solution:
      "Perimeter Hikvision cameras with AI-based person and vehicle filtering plus license plate recognition on the driveway entrance, integrated with Ajax alarm sensors.",
    results: [
      "False alerts reduced by over 70%",
      "Automatic gate-log for recognized vehicles",
      "24/7 remote viewing from homeowner's phone",
    ],
    equipment: ["Hikvision AI cameras", "Ajax alarm sensors", "LPR module"],
  },
  {
    slug: "mati-1-cafe-smart-lighting-audio",
    title: "Mati 1 Café Smart Lighting & Audio",
    category: "Commercial",
    location: "Prishtinë",
    year: 2022,
    summary: "Zoned lighting and background audio automation for a multi-room café and event space.",
    challenge:
      "The café needed different lighting and music moods for day service, evening events, and private bookings without manual reconfiguration each time.",
    solution:
      "Zoned Lutron lighting scenes paired with a multi-room audio system, controlled from a single wall panel with preset scenes for each service mode.",
    results: [
      "3 zones fully automated",
      "One-touch scene switching for staff",
      "Increased evening event bookings",
    ],
    equipment: ["Lutron Caséta", "Multi-room audio", "Wall-mounted scene panel"],
  },
];

export const projectCategories: ProjectCategory[] = ["Residential", "Commercial", "Smart Home", "Security"];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

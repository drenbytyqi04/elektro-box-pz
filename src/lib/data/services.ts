export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  icon:
    | "Zap"
    | "House"
    | "ShieldCheck"
    | "Camera"
    | "Fingerprint"
    | "Lightbulb"
    | "Network"
    | "Wrench"
    | "DoorOpen"
    | "Building2"
    | "AlertTriangle";
  title: string;
  shortDescription: string;
  description: string;
  heroTagline: string;
  process: { title: string; description: string }[];
  benefits: string[];
  equipment: string[];
  faqs: ServiceFaq[];
}

export const services: Service[] = [
  {
    slug: "electrical-installations",
    icon: "Zap",
    title: "Electrical Installations",
    shortDescription:
      "Full-scale wiring, panel upgrades, and code-compliant installations engineered for reliability.",
    description:
      "From new-build wiring to full panel modernizations, our certified electricians design and install electrical systems built to last decades, not years. Every installation is load-calculated, permitted, and tested before we consider the job done.",
    heroTagline: "The foundation every smart system is built on.",
    process: [
      { title: "Site Survey", description: "We assess load requirements, existing infrastructure, and future capacity needs." },
      { title: "Engineering Plan", description: "Circuit design, panel schedules, and permit documentation prepared by licensed engineers." },
      { title: "Installation", description: "Certified electricians execute the build with continuous quality checks." },
      { title: "Testing & Sign-off", description: "Full load testing, inspection, and compliance certification." },
    ],
    benefits: [
      "Licensed & insured master electricians",
      "Code-compliant, permit-ready documentation",
      "Future-proofed capacity for smart upgrades",
      "10-year workmanship warranty",
    ],
    equipment: ["Schneider Electric panels", "ABB circuit breakers", "Legrand wiring devices"],
    faqs: [
      {
        question: "Do you handle full home rewiring for older properties?",
        answer:
          "Yes — we specialize in rewiring older residential and commercial properties to modern safety standards while minimizing disruption to finishes.",
      },
      {
        question: "Can my panel support future smart home additions?",
        answer:
          "We size every panel with headroom for automation, EV charging, and solar integration, so you won't need a costly upgrade later.",
      },
      {
        question: "How long does a typical panel upgrade take?",
        answer: "Most residential panel upgrades are completed in 1–2 days, including inspection scheduling.",
      },
    ],
  },
  {
    slug: "smart-home-automation",
    icon: "House",
    title: "Smart Home Automation",
    shortDescription:
      "Unified control of lighting, climate, security, and entertainment from one elegant interface.",
    description:
      "We design automation ecosystems on Control4 and Lutron platforms that feel invisible — lights that anticipate you, climate that adjusts itself, and one app that controls it all. No compromises between beautiful and functional.",
    heroTagline: "One system. Every room. Zero friction.",
    process: [
      { title: "Discovery", description: "We map your lifestyle and routines to design scenes that actually get used." },
      { title: "System Design", description: "Network, control layer, and device selection tailored to your home." },
      { title: "Integration", description: "Seamless install of hubs, keypads, sensors, and app configuration." },
      { title: "Handover & Training", description: "A walkthrough so every household member is confident with the system." },
    ],
    benefits: [
      "Control4 & Lutron certified integrators",
      "Voice control via Alexa, Google & Siri",
      "Custom scenes for daily routines",
      "Remote diagnostics & proactive support",
    ],
    equipment: ["Control4", "Lutron Caséta & RA3", "Philips Hue", "Ajax sensors"],
    faqs: [
      {
        question: "Can automation be added to an existing home without rewiring?",
        answer:
          "In most cases yes. We use a mix of wired and wireless protocols (Zigbee, Z-Wave, Wi-Fi) to retrofit automation without opening every wall.",
      },
      {
        question: "What happens if the internet goes down?",
        answer:
          "Core automation — lighting, locks, climate — runs on a local hub, so your home keeps working even offline. Only remote access requires internet.",
      },
    ],
  },
  {
    slug: "security-camera-systems",
    icon: "Camera",
    title: "Security Camera Systems",
    shortDescription:
      "4K surveillance with AI-powered detection, monitored from anywhere in the world.",
    description:
      "Our CCTV systems combine Hikvision and Ajax hardware with AI analytics — person and vehicle detection, license plate recognition, and real-time alerts — engineered to actually catch what matters, not flood you with false alarms.",
    heroTagline: "See everything. Miss nothing.",
    process: [
      { title: "Coverage Planning", description: "Blind-spot analysis and camera placement for full property coverage." },
      { title: "Installation", description: "Weatherproof cabling and mounting engineered for durability." },
      { title: "AI Configuration", description: "Detection zones, alert rules, and recording schedules tuned to your property." },
      { title: "Remote Access Setup", description: "Secure mobile and desktop access configured and tested." },
    ],
    benefits: [
      "4K resolution with night vision",
      "AI person/vehicle detection",
      "Cloud & local NVR redundant storage",
      "24/7 remote monitoring option",
    ],
    equipment: ["Hikvision 4K NVR", "Ajax alarm integration", "PoE structured cabling"],
    faqs: [
      {
        question: "Can I view cameras remotely from my phone?",
        answer: "Yes — every system ships with secure app access from anywhere, with two-factor authentication enabled by default.",
      },
      {
        question: "How long is footage stored?",
        answer: "Standard configurations store 30 days locally, with optional cloud backup for extended retention.",
      },
    ],
  },
  {
    slug: "cctv",
    icon: "Camera",
    title: "CCTV & Video Surveillance",
    shortDescription:
      "Enterprise-grade video surveillance infrastructure for commercial and industrial sites.",
    description:
      "For commercial properties, warehouses, and multi-site businesses, we design scalable CCTV infrastructure — from cabling backbone to VMS software — built to grow with your operation.",
    heroTagline: "Enterprise coverage, engineered to scale.",
    process: [
      { title: "Risk Assessment", description: "Site audit identifying vulnerable zones and compliance requirements." },
      { title: "Infrastructure Design", description: "Structured cabling backbone and network capacity planning." },
      { title: "Deployment", description: "Multi-site rollout with minimal business disruption." },
      { title: "VMS Configuration", description: "Centralized video management with role-based access control." },
    ],
    benefits: [
      "Multi-site centralized management",
      "Role-based access for staff",
      "Analytics dashboards & reporting",
      "SLA-backed maintenance contracts",
    ],
    equipment: ["Hikvision enterprise NVR", "Structured PoE backbone", "VMS software licensing"],
    faqs: [
      {
        question: "Do you support multi-location businesses?",
        answer: "Yes, we design centralized systems letting you monitor every location from a single dashboard.",
      },
    ],
  },
  {
    slug: "access-control",
    icon: "Fingerprint",
    title: "Access Control",
    shortDescription:
      "Keyless entry, biometric access, and video intercoms for total entry management.",
    description:
      "From single-door keypads to multi-tenant biometric systems, we engineer access control that balances security with everyday convenience — including full video intercom integration.",
    heroTagline: "Every door, exactly who you allow.",
    process: [
      { title: "Access Mapping", description: "Define zones, credential types, and permission tiers." },
      { title: "Hardware Install", description: "Readers, locks, and intercom stations mounted and wired." },
      { title: "Credential Provisioning", description: "Fobs, codes, or biometrics issued and tested." },
      { title: "Integration", description: "Linked with security and smart home platforms for unified control." },
    ],
    benefits: [
      "Biometric & mobile credential options",
      "Video intercom with remote unlock",
      "Full audit trail of entries",
      "Integrates with alarm & CCTV systems",
    ],
    equipment: ["Ajax access modules", "Video intercom stations", "Biometric readers"],
    faqs: [
      {
        question: "Can I unlock the door remotely for a visitor?",
        answer: "Yes — video intercom integration lets you see, speak with, and unlock for visitors from anywhere via the app.",
      },
    ],
  },
  {
    slug: "lighting-automation",
    icon: "Lightbulb",
    title: "Modern Lighting Design",
    shortDescription:
      "Architectural lighting and automated scenes that transform how spaces feel.",
    description:
      "Lighting is the single biggest lever on how a space feels. We combine architectural lighting design with Lutron and Philips Hue automation to create scenes that shift with the time of day, mood, and occasion.",
    heroTagline: "Light, choreographed.",
    process: [
      { title: "Lighting Design", description: "Layered lighting plan — ambient, task, and accent — for every room." },
      { title: "Fixture Selection", description: "Fixtures specified for color temperature, dimming curve, and finish." },
      { title: "Automation Setup", description: "Scenes, schedules, and sensors configured to your routine." },
      { title: "Fine-Tuning", description: "On-site calibration until every scene feels exactly right." },
    ],
    benefits: [
      "Circadian-tuned color temperature",
      "Scene automation by time & occupancy",
      "Energy savings from adaptive dimming",
      "Lutron & Philips Hue certified",
    ],
    equipment: ["Lutron RA3", "Philips Hue", "Occupancy & daylight sensors"],
    faqs: [
      {
        question: "Will lighting automation increase my energy bill?",
        answer: "Typically the opposite — adaptive dimming and occupancy sensing reduce lighting energy use by 20–40%.",
      },
    ],
  },
  {
    slug: "networking",
    icon: "Network",
    title: "Professional Cabling & Networking",
    shortDescription:
      "Enterprise-grade Wi-Fi and structured cabling that carries every smart device without lag.",
    description:
      "Every smart home and security system lives or dies on the network beneath it. We design structured cabling and mesh Wi-Fi infrastructure engineered for zero dead zones and headroom for whatever gets added next.",
    heroTagline: "The invisible layer everything depends on.",
    process: [
      { title: "Coverage Survey", description: "RF and cabling audit to map dead zones and bandwidth needs." },
      { title: "Structured Cabling", description: "Cat6A backbone run to every access point and device closet." },
      { title: "Network Design", description: "VLAN segmentation for IoT, security, and guest traffic." },
      { title: "Testing", description: "Full-property speed and coverage verification." },
    ],
    benefits: [
      "Whole-property mesh coverage",
      "Segmented IoT & guest networks",
      "Cat6A structured cabling",
      "Enterprise-grade firewall & monitoring",
    ],
    equipment: ["Cat6A structured cabling", "Enterprise mesh access points", "Managed switches"],
    faqs: [
      {
        question: "Can you fix Wi-Fi dead zones in a large or multi-floor home?",
        answer: "Yes — mesh access point placement and structured cabling are exactly what resolve dead zones permanently, unlike consumer extenders.",
      },
    ],
  },
  {
    slug: "maintenance-support",
    icon: "Wrench",
    title: "Electrical Maintenance",
    shortDescription:
      "Scheduled inspections and preventive service that keep every electrical system running safely.",
    description:
      "Installation is only the beginning. Our maintenance plans include scheduled inspections, load testing, and component servicing — so small issues never become expensive or dangerous ones.",
    heroTagline: "We don't disappear after installation.",
    process: [
      { title: "Health Check", description: "Scheduled diagnostics across panels, circuits, and connected systems." },
      { title: "Preventive Service", description: "Connection checks, load testing, and component servicing." },
      { title: "Scheduling", description: "Visit cadence tailored to the property — residential or commercial." },
      { title: "Reporting", description: "Clear reports after every visit — what was checked, what changed." },
    ],
    benefits: [
      "Scheduled preventive maintenance",
      "Load testing & component servicing",
      "Extends the life of your electrical system",
      "Transparent visit reporting",
    ],
    equipment: ["Diagnostic testing kits", "Thermal imaging inspection"],
    faqs: [
      {
        question: "What's included in a maintenance plan?",
        answer: "Scheduled inspections, load testing, discounted parts, and priority booking — tiers available for residential and commercial.",
      },
      {
        question: "How often should electrical systems be inspected?",
        answer: "We recommend annual inspections for residential properties and semi-annual for commercial — more frequently for high-load industrial systems.",
      },
    ],
  },
  {
    slug: "technical-interventions",
    icon: "AlertTriangle",
    title: "Technical Interventions",
    shortDescription:
      "Rapid diagnostics and repair when something goes wrong — on-site, fast, and done right.",
    description:
      "Faults don't wait for a scheduled visit. Our technical intervention team responds to breaker trips, wiring faults, and system failures with rapid diagnostics and a permanent fix — not a temporary patch.",
    heroTagline: "Something's wrong. We're already on our way.",
    process: [
      { title: "Rapid Response", description: "Call logged and a technician dispatched with priority." },
      { title: "On-Site Diagnostics", description: "Root-cause fault-finding across wiring, panels, and connected systems." },
      { title: "Repair", description: "The fault is fixed at its source, not just the symptom." },
      { title: "Safety Verification", description: "Post-repair testing to confirm the system is safe and compliant." },
    ],
    benefits: [
      "Fast on-site response",
      "Root-cause diagnostics, not quick patches",
      "Licensed electricians on every call",
      "Post-repair safety verification",
    ],
    equipment: ["Diagnostic testing kits", "Thermal imaging inspection"],
    faqs: [
      {
        question: "What counts as a technical intervention?",
        answer: "Breaker trips, power loss, wiring faults, flickering circuits, or any electrical system failure that needs an on-site fix rather than scheduled maintenance.",
      },
      {
        question: "How fast can a technician get to me?",
        answer: "Priority response for active safety issues — typically same-day, with maintenance plan clients getting first priority.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

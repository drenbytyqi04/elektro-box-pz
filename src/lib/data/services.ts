import type { Locale } from "@/i18n/routing";

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

const servicesEn: Service[] = [
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
    shortDescription: "4K surveillance with AI-powered detection, monitored from anywhere in the world.",
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
    shortDescription: "Enterprise-grade video surveillance infrastructure for commercial and industrial sites.",
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
    shortDescription: "Keyless entry, biometric access, and video intercoms for total entry management.",
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
    shortDescription: "Architectural lighting and automated scenes that transform how spaces feel.",
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
    shortDescription: "Enterprise-grade Wi-Fi and structured cabling that carries every smart device without lag.",
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
    shortDescription: "Scheduled inspections and preventive service that keep every electrical system running safely.",
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
    shortDescription: "Rapid diagnostics and repair when something goes wrong — on-site, fast, and done right.",
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

const servicesSq: Service[] = [
  {
    slug: "electrical-installations",
    icon: "Zap",
    title: "Instalime Elektrike",
    shortDescription: "Kabllim i plotë, ngritje panelesh, dhe instalime në përputhje me standardet, të projektuara për besueshmëri.",
    description:
      "Nga kabllimi i ndërtesave të reja deri te modernizimi i plotë i paneleve, elektricistët tanë të certifikuar projektojnë dhe instalojnë sisteme elektrike të ndërtuara për të zgjatur dekada, jo vetëm vite. Çdo instalim llogaritet për ngarkesë, lejohet, dhe testohet përpara se ta konsiderojmë punën të përfunduar.",
    heroTagline: "Themeli mbi të cilin ndërtohet çdo sistem smart.",
    process: [
      { title: "Vlerësimi i Terrenit", description: "Vlerësojmë kërkesat për ngarkesë, infrastrukturën ekzistuese, dhe nevojat e kapacitetit në të ardhmen." },
      { title: "Plani Inxhinierik", description: "Dizajni i qarkut, orari i paneleve, dhe dokumentacioni i lejeve i përgatitur nga inxhinierë të licencuar." },
      { title: "Instalimi", description: "Elektricistë të certifikuar e realizojnë ndërtimin me kontrolle të vazhdueshme cilësie." },
      { title: "Testimi & Miratimi", description: "Testim i plotë i ngarkesës, inspektim, dhe certifikim përputhshmërie." },
    ],
    benefits: [
      "Master elektricistë të licencuar & të siguruar",
      "Dokumentacion në përputhje me standardet, gati për leje",
      "Kapacitet i gatshëm për ngritje smart në të ardhmen",
      "Garanci 10-vjeçare për cilësinë e punës",
    ],
    equipment: ["Panele Schneider Electric", "Siguresa ABB", "Pajisje kabllimi Legrand"],
    faqs: [
      {
        question: "A e kryeni rikabllimin e plotë për prona më të vjetra?",
        answer:
          "Po — jemi të specializuar në rikabllimin e pronave rezidenciale dhe komerciale më të vjetra sipas standardeve moderne të sigurisë, duke minimizuar dëmtimin e finiturave.",
      },
      {
        question: "A mund ta mbështesë paneli im shtesat e ardhshme smart home?",
        answer:
          "Çdo panel e dimensionojmë me hapësirë për automatizim, karikim EV, dhe integrim solar, kështu që s'do të nevojitet një ngritje e kushtueshme më vonë.",
      },
      {
        question: "Sa zgjat zakonisht ngritja e një paneli?",
        answer: "Shumica e ngritjeve të paneleve rezidenciale përfundojnë brenda 1–2 ditësh, duke përfshirë planifikimin e inspektimit.",
      },
    ],
  },
  {
    slug: "smart-home-automation",
    icon: "House",
    title: "Smart Home Automation",
    shortDescription: "Kontroll i unifikuar i ndriçimit, klimës, sigurisë, dhe argëtimit nga një ndërfaqe elegante.",
    description:
      "Projektojmë ekosisteme automatizimi mbi platformat Control4 dhe Lutron që ndihen të padukshme — dritat që të parandiejnë, klima që rregullohet vetë, dhe një aplikacion që i kontrollon të gjitha. Pa kompromise mes bukurisë dhe funksionalitetit.",
    heroTagline: "Një sistem. Çdo dhomë. Zero telashe.",
    process: [
      { title: "Zbulimi", description: "Hartëzojmë stilin tënd të jetesës dhe rutinat për të projektuar skena që përdoren vërtet." },
      { title: "Dizajni i Sistemit", description: "Rrjeti, shtresa e kontrollit, dhe përzgjedhja e pajisjeve të përshtatura për shtëpinë tënde." },
      { title: "Integrimi", description: "Instalim i qetë i hub-eve, tastierave, sensorëve, dhe konfigurimi i aplikacionit." },
      { title: "Dorëzimi & Trajnimi", description: "Një udhëzim që çdo anëtar i familjes ta ndjejë veten të sigurt me sistemin." },
    ],
    benefits: [
      "Integrues të certifikuar Control4 & Lutron",
      "Kontroll me zë përmes Alexa, Google & Siri",
      "Skena të personalizuara për rutinat e përditshme",
      "Diagnostikim në distancë & mbështetje proaktive",
    ],
    equipment: ["Control4", "Lutron Caséta & RA3", "Philips Hue", "Sensorë Ajax"],
    faqs: [
      {
        question: "A mund të shtohet automatizim në një shtëpi ekzistuese pa rikabllim?",
        answer:
          "Në shumicën e rasteve po. Përdorim një kombinim protokollesh me tel dhe pa tel (Zigbee, Z-Wave, Wi-Fi) për të shtuar automatizim pa hapur çdo mur.",
      },
      {
        question: "Çfarë ndodh nëse ndërpritet interneti?",
        answer:
          "Automatizimi bazë — ndriçimi, bravat, klima — funksionon në një hub lokal, kështu që shtëpia jote vazhdon të punojë edhe pa internet. Vetëm qasja në distancë kërkon internet.",
      },
    ],
  },
  {
    slug: "security-camera-systems",
    icon: "Camera",
    title: "Sisteme Kamerash Sigurie",
    shortDescription: "Video-mbikëqyrje 4K me zbulim të fuqizuar nga AI, e monitoruar nga kudo në botë.",
    description:
      "Sistemet tona CCTV kombinojnë hardware Hikvision dhe Ajax me analitikë AI — zbulim personash dhe automjetesh, njohje targash, dhe alarme në kohë reale — të projektuara për të kapur vërtet atë që ka rëndësi, jo për të të përmbytur me alarme false.",
    heroTagline: "Shiko gjithçka. Mos humb asgjë.",
    process: [
      { title: "Planifikimi i Mbulimit", description: "Analizë e pikave të verbëra dhe pozicionim kamerash për mbulim të plotë të pronës." },
      { title: "Instalimi", description: "Kabllim dhe montim i qëndrueshëm ndaj motit, i projektuar për qëndrueshmëri." },
      { title: "Konfigurimi AI", description: "Zona zbulimi, rregulla alarmesh, dhe orare regjistrimi të përshtatura për pronën tënde." },
      { title: "Konfigurimi i Qasjes në Distancë", description: "Qasje e sigurt mobile dhe desktop, e konfiguruar dhe testuar." },
    ],
    benefits: [
      "Rezolucion 4K me shikim nate",
      "Zbulim AI i personave/automjeteve",
      "Ruajtje e tepërt në cloud & NVR lokal",
      "Opsion monitorimi në distancë 24/7",
    ],
    equipment: ["Hikvision 4K NVR", "Integrim alarmi Ajax", "Kabllim i strukturuar PoE"],
    faqs: [
      {
        question: "A mund t'i shoh kamerat nga telefoni në distancë?",
        answer: "Po — çdo sistem vjen me qasje të sigurt përmes aplikacionit nga kudo, me autentikim dy-faktorësh të aktivizuar si standard.",
      },
      {
        question: "Sa kohë ruhet materiali i xhiruar?",
        answer: "Konfigurimet standarde ruajnë 30 ditë lokalisht, me backup opsional në cloud për ruajtje më të gjatë.",
      },
    ],
  },
  {
    slug: "cctv",
    icon: "Camera",
    title: "CCTV & Video-Mbikëqyrje",
    shortDescription: "Infrastrukturë video-mbikëqyrjeje në nivel ndërmarrjeje për objekte komerciale dhe industriale.",
    description:
      "Për prona komerciale, depo, dhe biznese me shumë lokacione, projektojmë infrastrukturë CCTV të shkallëzueshme — nga struktura e kabllimit deri te softueri VMS — e ndërtuar për të u rritur me operacionin tënd.",
    heroTagline: "Mbulim ndërmarrjeje, i projektuar për t'u shkallëzuar.",
    process: [
      { title: "Vlerësimi i Riskut", description: "Auditim i objektit duke identifikuar zonat e cenueshme dhe kërkesat e përputhshmërisë." },
      { title: "Dizajni i Infrastrukturës", description: "Strukturë kabllimi dhe planifikim kapaciteti rrjeti." },
      { title: "Vendosja", description: "Shpërndarje në shumë lokacione me ndërprerje minimale të biznesit." },
      { title: "Konfigurimi VMS", description: "Menaxhim video i centralizuar me kontroll qasjeje sipas roleve." },
    ],
    benefits: [
      "Menaxhim i centralizuar për shumë lokacione",
      "Qasje sipas roleve për stafin",
      "Panele analitike & raportim",
      "Kontrata mirëmbajtjeje me SLA",
    ],
    equipment: ["Hikvision NVR ndërmarrjeje", "Strukturë PoE e strukturuar", "Licencim softueri VMS"],
    faqs: [
      {
        question: "A mbështetni biznese me shumë lokacione?",
        answer: "Po, projektojmë sisteme të centralizuara që të lejojnë të monitorosh çdo lokacion nga një panel i vetëm.",
      },
    ],
  },
  {
    slug: "access-control",
    icon: "Fingerprint",
    title: "Kontroll Hyrjeje",
    shortDescription: "Hyrje pa çelës, qasje biometrike, dhe interkoma video për menaxhim të plotë të hyrjeve.",
    description:
      "Nga tastiera për një derë të vetme deri te sistemet biometrike për shumë qiramarrës, projektojmë kontroll hyrjeje që balancon sigurinë me komoditetin e përditshëm — duke përfshirë integrim të plotë të interkomit video.",
    heroTagline: "Çdo derë, saktësisht kush ti lejon.",
    process: [
      { title: "Hartëzimi i Qasjes", description: "Përcaktojmë zonat, llojet e kredencialeve, dhe nivelet e lejeve." },
      { title: "Instalimi i Hardware-it", description: "Lexues, brava, dhe stacione interkomi të montuara dhe të kabllizuara." },
      { title: "Sigurimi i Kredencialeve", description: "Fob-e, kode, ose biometrikë të lëshuar dhe testuar." },
      { title: "Integrimi", description: "I lidhur me platformat e sigurisë dhe smart home për kontroll të unifikuar." },
    ],
    benefits: [
      "Opsione kredenciali biometrik & mobil",
      "Interkom video me hapje në distancë",
      "Gjurmë e plotë auditimi e hyrjeve",
      "Integrohet me sistemet e alarmit & CCTV",
    ],
    equipment: ["Module qasjeje Ajax", "Stacione interkomi video", "Lexues biometrikë"],
    faqs: [
      {
        question: "A mund ta hap derën në distancë për një vizitor?",
        answer: "Po — integrimi i interkomit video të lejon të shohësh, flasësh, dhe hapësh derën për vizitorët nga kudo përmes aplikacionit.",
      },
    ],
  },
  {
    slug: "lighting-automation",
    icon: "Lightbulb",
    title: "Ndriçim Modern",
    shortDescription: "Ndriçim arkitektonik dhe skena të automatizuara që transformojnë ndjesinë e hapësirave.",
    description:
      "Ndriçimi është levë kryesore e vetme e mënyrës si ndihet një hapësirë. Kombinojmë dizajn ndriçimi arkitektonik me automatizim Lutron dhe Philips Hue për të krijuar skena që ndryshojnë sipas kohës së ditës, humorit, dhe rastit.",
    heroTagline: "Dritë, e koreografuar.",
    process: [
      { title: "Dizajni i Ndriçimit", description: "Plan ndriçimi me shtresa — ambiental, funksional, dhe theksues — për çdo dhomë." },
      { title: "Përzgjedhja e Pajisjeve", description: "Pajisje të specifikuara për temperaturën e ngjyrës, kurbën e zbehjes, dhe finiturën." },
      { title: "Konfigurimi i Automatizimit", description: "Skena, orare, dhe sensorë të konfiguruar sipas rutinës tënde." },
      { title: "Rregullimi i Hollësishëm", description: "Kalibrim në vend derisa çdo skenë të ndihet saktësisht si duhet." },
    ],
    benefits: [
      "Temperaturë ngjyre e sintonizuar cirkadiane",
      "Automatizim skenash sipas kohës & prezencës",
      "Kursim energjie nga zbehja adaptive",
      "Të certifikuar Lutron & Philips Hue",
    ],
    equipment: ["Lutron RA3", "Philips Hue", "Sensorë prezence & drite dite"],
    faqs: [
      {
        question: "A do ta rrisë automatizimi i ndriçimit faturën time të energjisë?",
        answer: "Zakonisht e kundërta — zbehja adaptive dhe zbulimi i prezencës ulin konsumin e energjisë së ndriçimit me 20–40%.",
      },
    ],
  },
  {
    slug: "networking",
    icon: "Network",
    title: "Kabllim Profesional & Rrjete",
    shortDescription: "Wi-Fi në nivel ndërmarrjeje dhe kabllim i strukturuar që mbart çdo pajisje smart pa vonesa.",
    description:
      "Çdo sistem smart home dhe sigurie jeton ose vdes me rrjetin nën të. Projektojmë kabllim të strukturuar dhe infrastrukturë Wi-Fi mesh, të projektuar për zero zona të vdekura dhe hapësirë për çka shtohet më pas.",
    heroTagline: "Shtresa e padukshme nga e cila varet gjithçka.",
    process: [
      { title: "Vlerësimi i Mbulimit", description: "Auditim RF dhe kabllimi për të hartëzuar zonat e vdekura dhe nevojat e bandwidth-it." },
      { title: "Kabllim i Strukturuar", description: "Strukturë Cat6A e vendosur te çdo pikë qasjeje dhe dollap pajisjesh." },
      { title: "Dizajni i Rrjetit", description: "Segmentim VLAN për trafikun IoT, sigurie, dhe të vizitorëve." },
      { title: "Testimi", description: "Verifikim shpejtësie dhe mbulimi në të gjithë pronën." },
    ],
    benefits: [
      "Mbulim mesh në të gjithë pronën",
      "Rrjete IoT & vizitorësh të segmentuara",
      "Kabllim i strukturuar Cat6A",
      "Firewall & monitorim niveli ndërmarrjeje",
    ],
    equipment: ["Kabllim i strukturuar Cat6A", "Pika qasjeje mesh ndërmarrjeje", "Switch-e të menaxhuar"],
    faqs: [
      {
        question: "A mund t'i rregulloni zonat e vdekura të Wi-Fi në një shtëpi të madhe apo me shumë kate?",
        answer: "Po — pozicionimi i pikave të qasjes mesh dhe kabllimi i strukturuar janë pikërisht ajo që zgjidh zonat e vdekura përgjithmonë, ndryshe nga zgjatësit konsumatorë.",
      },
    ],
  },
  {
    slug: "maintenance-support",
    icon: "Wrench",
    title: "Mirëmbajtje Elektrike",
    shortDescription: "Inspektime të planifikuara dhe shërbim parandalues që mbajnë çdo sistem elektrik duke funksionuar në siguri.",
    description:
      "Instalimi është vetëm fillimi. Planet tona të mirëmbajtjes përfshijnë inspektime të planifikuara, testim ngarkese, dhe shërbim komponentësh — kështu që problemet e vogla kurrë s'bëhen të kushtueshme apo të rrezikshme.",
    heroTagline: "Ne s'zhdukemi pas instalimit.",
    process: [
      { title: "Kontrolli i Gjendjes", description: "Diagnostikime të planifikuara në panele, qarqe, dhe sisteme të lidhura." },
      { title: "Shërbimi Parandalues", description: "Kontrolle lidhjesh, testim ngarkese, dhe shërbim komponentësh." },
      { title: "Planifikimi", description: "Ritmi i vizitave i përshtatur për pronën — rezidenciale apo komerciale." },
      { title: "Raportimi", description: "Raporte të qarta pas çdo vizite — çfarë u kontrollua, çfarë ndryshoi." },
    ],
    benefits: [
      "Mirëmbajtje parandaluese e planifikuar",
      "Testim ngarkese & shërbim komponentësh",
      "Zgjat jetën e sistemit tënd elektrik",
      "Raportim transparent i vizitave",
    ],
    equipment: ["Kite testimi diagnostik", "Inspektim me imazherim termik"],
    faqs: [
      {
        question: "Çfarë përfshihet në një plan mirëmbajtjeje?",
        answer: "Inspektime të planifikuara, testim ngarkese, pjesë me zbritje, dhe rezervim me prioritet — nivele të disponueshme për rezidenciale dhe komerciale.",
      },
      {
        question: "Sa shpesh duhet të inspektohen sistemet elektrike?",
        answer: "Rekomandojmë inspektime vjetore për prona rezidenciale dhe gjysmë-vjetore për komerciale — më shpesh për sisteme industriale me ngarkesë të lartë.",
      },
    ],
  },
  {
    slug: "technical-interventions",
    icon: "AlertTriangle",
    title: "Intervenime Teknike",
    shortDescription: "Diagnostikim dhe riparim i shpejtë kur diçka shkon keq — në vend, shpejt, dhe siç duhet.",
    description:
      "Defektet nuk presin një vizitë të planifikuar. Ekipi ynë i intervenimit teknik përgjigjet ndaj shkyçjeve të siguresave, defekteve të kabllimit, dhe dështimeve të sistemit me diagnostikim të shpejtë dhe zgjidhje të përhershme — jo një arnim të përkohshëm.",
    heroTagline: "Diçka nuk shkon mirë. Jemi tashmë në rrugë.",
    process: [
      { title: "Përgjigje e Shpejtë", description: "Thirrja regjistrohet dhe një teknik dërgohet me prioritet." },
      { title: "Diagnostikim në Vend", description: "Gjetje e shkakut rrënjësor në kabllim, panele, dhe sisteme të lidhura." },
      { title: "Riparimi", description: "Defekti riparohet në burim, jo vetëm simptoma." },
      { title: "Verifikimi i Sigurisë", description: "Testim pas riparimit për të konfirmuar që sistemi është i sigurt dhe në përputhje." },
    ],
    benefits: [
      "Përgjigje e shpejtë në vend",
      "Diagnostikim i shkakut rrënjësor, jo arnime të shpejta",
      "Elektricistë të licencuar në çdo thirrje",
      "Verifikim sigurie pas riparimit",
    ],
    equipment: ["Kite testimi diagnostik", "Inspektim me imazherim termik"],
    faqs: [
      {
        question: "Çfarë konsiderohet intervenim teknik?",
        answer: "Shkyçje siguresash, humbje energjie, defekte kabllimi, qarqe që dridhen, ose çdo dështim i sistemit elektrik që kërkon zgjidhje në vend në vend të mirëmbajtjes së planifikuar.",
      },
      {
        question: "Sa shpejt mund të vijë një teknik te unë?",
        answer: "Përgjigje me prioritet për çështje aktive sigurie — zakonisht brenda ditës, me klientët e planit të mirëmbajtjes që marrin prioritetin e parë.",
      },
    ],
  },
];

export function getServices(locale: Locale): Service[] {
  return locale === "sq" ? servicesSq : servicesEn;
}

export function getServiceBySlug(locale: Locale, slug: string) {
  return getServices(locale).find((service) => service.slug === slug);
}

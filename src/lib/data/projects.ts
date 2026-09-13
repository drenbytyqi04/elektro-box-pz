import type { Locale } from "@/i18n/routing";

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

const projectsEn: Project[] = [
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
    challenge: "Warehouse Wi-Fi dead zones were disrupting barcode scanners and inventory systems on the floor.",
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
    challenge: "Frequent false alarms from a legacy motion-sensor system were causing alert fatigue for the homeowners.",
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
    results: ["3 zones fully automated", "One-touch scene switching for staff", "Increased evening event bookings"],
    equipment: ["Lutron Caséta", "Multi-room audio", "Wall-mounted scene panel"],
  },
];

const projectsSq: Project[] = [
  {
    slug: "prishtina-hills-smart-villa",
    title: "Vila Smart Prishtina Hills",
    category: "Smart Home",
    location: "Prishtinë",
    year: 2025,
    summary: "Automatizim i plotë i shtëpisë në një vilë 480m² — ndriçim, klimë, siguri dhe A/V të bashkuara në një sistem.",
    challenge:
      "Klienti donte automatizim të plotë të shtëpisë të shtuar në një ndërtim pothuajse të përfunduar, pa hapur mure që tashmë ishin suvatuar.",
    solution:
      "Vendosëm një strukturë hibride Lutron RA3 + Control4 duke përdorur tastierë dhe sensorë pa tel aty ku kabllimi s'ishte i mundur, e mbështetur nga një bërthamë kabllimi Cat6A në rrisera të aksesueshme.",
    results: [
      "18 dhoma plotësisht të automatizuara në më pak se 3 javë",
      "32% ulje e konsumit të energjisë së ndriçimit",
      "Kontroll me një aplikacion të vetëm për ndriçim, klimë, siguri & A/V",
    ],
    equipment: ["Control4", "Lutron RA3", "Kabllim i strukturuar Cat6A"],
    featured: true,
  },
  {
    slug: "sunny-hill-office-tower-cctv",
    title: "Ngritja e Sigurisë së Kullës Sunny Hill",
    category: "Commercial",
    location: "Prishtinë",
    year: 2024,
    summary: "Vendosje CCTV ndërmarrjeje me 120 kamera në një kullë komerciale 8-katëshe me VMS të centralizuar.",
    challenge:
      "Kamerat analoge të vjetra linin pika të verbëra të mëdha dhe mungesë monitorimi të centralizuar në 8 katet e ndërtesës dhe strukturën e parkimit.",
    solution:
      "Migrim i plotë në një rrjet kamerash IP Hikvision 4K mbi strukturë të dedikuar PoE, me zbulim AI të personave/automjeteve dhe një panel të vetëm VMS për menaxhimin e ndërtesës.",
    results: [
      "100% mbulim në të gjitha katet & parkimin",
      "Alarmet AI ulën thirrjet për alarme false me 60%",
      "Monitorim i centralizuar për 3 menaxherë ndërtese",
    ],
    equipment: ["Hikvision 4K NVR", "Strukturë PoE e strukturuar", "VMS ndërmarrjeje"],
    featured: true,
  },
  {
    slug: "dardania-family-residence-rewire",
    title: "Rikabllim i Plotë i Rezidencës Familjare në Dardani",
    category: "Residential",
    location: "Prishtinë",
    year: 2024,
    summary: "Rikabllim i plotë elektrik dhe modernizim paneli i një shtëpie familjare të viteve '90.",
    challenge:
      "Kabllimi origjinal prej alumini dhe një panel i vogël krijonin shkyçje të përsëritura të siguresave dhe përbënin një rrezik të vërtetë zjarri.",
    solution:
      "Rikabllim i plotë me përçues bakri, një panel të ri 200A Schneider Electric i dimensionuar për karikim EV dhe solar në të ardhmen, dhe mbrojtje të plotë nga mbitensioni.",
    results: [
      "Zero shkyçje siguresash që nga përfundimi",
      "Kapacitet paneli për karikues EV në të ardhmen",
      "Garanci 10-vjeçare e lëshuar për cilësinë e punës",
    ],
    equipment: ["Panel Schneider Electric", "Siguresa ABB", "Pajisje Legrand"],
  },
  {
    slug: "velania-boutique-hotel-access-control",
    title: "Kontrolli i Hyrjes te Hoteli Boutique Velania",
    category: "Security",
    location: "Prishtinë",
    year: 2024,
    summary: "Sistem hyrjeje pa çelës me kredencial mobil në 34 dhoma dhe zona stafi.",
    challenge: "Hoteli kishte nevojë të eliminonte kartat fizike të çelësave, duke i dhënë stafit qasje të detajuar dhe të auditueshme në zonat e shërbimit.",
    solution:
      "Brava me kredencial mobil në të gjitha dhomat e mysafirëve, lexues biometrikë te dyert vetëm-për-staf, dhe një interkom video te hyrja e shërbimit — të gjitha të menaxhuara nga një panel i vetëm.",
    results: [
      "34 dhoma të konvertuara në hyrje pa çelës",
      "Gjurmë e plotë auditimi në të gjitha zonat e stafit",
      "Koha e check-in-it në recepsion u ul me 40%",
    ],
    equipment: ["Brava me kredencial mobil", "Lexues biometrikë", "Interkom video"],
  },
  {
    slug: "germia-residence-lighting-design",
    title: "Ndriçimi Arkitektonik i Rezidencës Germia",
    category: "Residential",
    location: "Prishtinë",
    year: 2023,
    summary: "Dizajn ndriçimi arkitektonik me shtresa dhe automatizim cirkadian për një rezidencë në kodër.",
    challenge: "Ndriçimi i sheshtë, me një temperaturë të vetme në të gjithë shtëpinë, e bënte çdo dhomë të ndihej identike pavarësisht kohës apo qëllimit.",
    solution:
      "Një plan ndriçimi me tri shtresa (ambiental, funksional, theksues) duke përdorur zbehje Lutron dhe pajisje Philips Hue me ngjyrë të rregullueshme, të automatizuara për të ndryshuar temperaturën e ngjyrës gjatë ditës.",
    results: [
      "6 skena të personalizuara në 14 dhoma",
      "Ndriçimi i sintonizuar cirkadian tregoi përmirësim të relaksimit të mbrëmjes",
      "27% konsum më i ulët i energjisë së ndriçimit",
    ],
    equipment: ["Lutron RA3", "Philips Hue", "Sensorë drite dite"],
  },
  {
    slug: "lakrishte-logistics-network-upgrade",
    title: "Rinovimi i Rrjetit & Kabllimit të Lakrishtë Logistics",
    category: "Commercial",
    location: "Fushë Kosovë",
    year: 2023,
    summary: "Rinovim i kabllimit të strukturuar dhe Wi-Fi mesh në një objekt depoje dhe zyrash prej 6,000m².",
    challenge: "Zonat e vdekura të Wi-Fi në depo po ndërprisnin skanerët e barkodit dhe sistemet e inventarit në terren.",
    solution:
      "Strukturë e plotë kabllimi Cat6A me pika qasjeje ndërmarrjeje të montuara në tavan dhe segmentim VLAN që ndan IoT-në e depos nga trafiku i zyrës.",
    results: [
      "100% mbulim Wi-Fi i arritur në të gjithë objektin",
      "Zero shkëputje skanerësh pas ngritjes",
      "Rrjeti i segmentuar kaloi auditimin e sigurisë",
    ],
    equipment: ["Kabllim Cat6A", "Pika qasjeje mesh ndërmarrjeje", "Switch-e të menaxhuar"],
  },
  {
    slug: "arberia-residence-cctv-perimeter",
    title: "Siguria Periferike e Rezidencës Arbëria",
    category: "Security",
    location: "Prishtinë",
    year: 2023,
    summary: "Sistem kamerash periferike me AI dhe njohje targash për një rezidencë private.",
    challenge: "Alarmet e shpeshta false nga një sistem i vjetër me sensor lëvizjeje po shkaktonin lodhje alarmesh për pronarët.",
    solution:
      "Kamera periferike Hikvision me filtrim AI të personave dhe automjeteve plus njohje targash te hyrja e rrugicës, të integruara me sensorë alarmi Ajax.",
    results: [
      "Alarmet false u ulën me mbi 70%",
      "Regjistrim automatik i portës për automjetet e njohura",
      "Shikim në distancë 24/7 nga telefoni i pronarit",
    ],
    equipment: ["Kamera AI Hikvision", "Sensorë alarmi Ajax", "Modul LPR"],
  },
  {
    slug: "mati-1-cafe-smart-lighting-audio",
    title: "Ndriçim & Audio Smart te Kafeneja Mati 1",
    category: "Commercial",
    location: "Prishtinë",
    year: 2022,
    summary: "Automatizim ndriçimi me zona dhe audio ambiental për një kafene me shumë dhoma dhe hapësirë eventesh.",
    challenge:
      "Kafeneja kishte nevojë për humor të ndryshëm ndriçimi dhe muzike për shërbimin ditor, evente mbrëmjeje, dhe rezervime private, pa rikonfigurim manual çdo herë.",
    solution:
      "Skena ndriçimi Lutron me zona, të shoqëruara me sistem audio për shumë dhoma, të kontrolluara nga një panel i vetëm në mur me skena të para-vendosura për çdo mënyrë shërbimi.",
    results: ["3 zona plotësisht të automatizuara", "Ndërrim skene me një prekje për stafin", "Rritje e rezervimeve për evente mbrëmjeje"],
    equipment: ["Lutron Caséta", "Audio për shumë dhoma", "Panel skenash i montuar në mur"],
  },
];

export function getProjects(locale: Locale): Project[] {
  return locale === "sq" ? projectsSq : projectsEn;
}

export function getProjectBySlug(locale: Locale, slug: string) {
  return getProjects(locale).find((project) => project.slug === slug);
}

export const projectCategories: ProjectCategory[] = ["Residential", "Commercial", "Smart Home", "Security"];

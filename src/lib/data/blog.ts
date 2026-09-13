import type { Locale } from "@/i18n/routing";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  author: string;
}

const blogPostsEn: BlogPost[] = [
  {
    slug: "signs-your-home-needs-a-panel-upgrade",
    title: "5 Signs Your Home Needs an Electrical Panel Upgrade",
    excerpt:
      "Flickering lights and tripped breakers aren't just annoying — they can be early warnings. Here's how to know when it's time.",
    category: "Electrical",
    date: "2026-06-12",
    readTime: "5 min read",
    author: "Ermal Sylaj",
    content: [
      "An electrical panel is the single most important safety component in your home, yet it's the one homeowners think about least — until something goes wrong.",
      "Frequent breaker trips, flickering lights when appliances turn on, warm or discolored outlets, and a panel rated below 100A are all signals worth taking seriously.",
      "Beyond safety, an undersized panel also blocks future upgrades — EV chargers, smart home automation, and solar all need headroom that older panels simply don't have.",
      "A professional load assessment takes under an hour and tells you definitively whether your panel is keeping pace with how you actually use your home today.",
    ],
  },
  {
    slug: "smart-home-automation-where-to-start",
    title: "Smart Home Automation: Where to Actually Start",
    excerpt:
      "Whole-home automation can feel overwhelming. Here's the order that actually makes sense — and why lighting comes first.",
    category: "Smart Home",
    date: "2026-05-28",
    readTime: "6 min read",
    author: "Njomza Kastrati",
    content: [
      "Most homeowners assume smart home automation starts with buying a bundle of gadgets. It doesn't — it starts with your network.",
      "A stable, segmented network is the foundation everything else depends on. Skip this step and even the best hardware will feel unreliable.",
      "From there, lighting is almost always the highest-impact first step: it's the automation you'll notice every single day, and it pairs naturally with occupancy and security scenes later.",
      "Security and climate typically come next, with full whole-home orchestration (Control4-style) as the final layer once the individual systems are proven out.",
    ],
  },
  {
    slug: "cctv-vs-smart-cameras-whats-the-difference",
    title: "CCTV vs. AI Smart Cameras: What's Actually Different",
    excerpt:
      "Not all surveillance cameras are created equal. Here's what AI detection actually changes about how a security system performs.",
    category: "Security",
    date: "2026-05-09",
    readTime: "4 min read",
    author: "Blendi Rama",
    content: [
      "Traditional CCTV records everything and alerts on any motion — including passing cars, blowing leaves, and shadows. That's how alert fatigue happens.",
      "AI-powered cameras classify what they see: person, vehicle, animal. That single distinction is what turns a camera system from a recording archive into a genuinely useful early-warning system.",
      "The other major shift is license plate recognition, which lets a system automatically log or flag vehicles — useful for both security and simple convenience, like knowing when a delivery arrives.",
    ],
  },
  {
    slug: "structured-cabling-why-wifi-extenders-fail",
    title: "Why Wi-Fi Extenders Fail (and Structured Cabling Doesn't)",
    excerpt:
      "If you've bought a third Wi-Fi extender and still have dead zones, the problem isn't the extender. Here's what actually fixes it.",
    category: "Networking",
    date: "2026-04-15",
    readTime: "5 min read",
    author: "Argjend Morina",
    content: [
      "Wi-Fi extenders repeat a signal that's already degraded — every hop roughly halves your usable bandwidth. In larger or multi-floor homes, that's rarely enough.",
      "Structured cabling solves the actual problem: it gets a wired, full-bandwidth connection to multiple access points throughout the property, so each one broadcasts a fresh, strong signal instead of a weakened repeat.",
      "It's a bigger upfront project, but it's the difference between a network that mostly works and one that disappears from your list of problems entirely.",
    ],
  },
];

const blogPostsSq: BlogPost[] = [
  {
    slug: "signs-your-home-needs-a-panel-upgrade",
    title: "5 Shenja që Shtëpia Jote Ka Nevojë për Ngritje të Panelit Elektrik",
    excerpt:
      "Dritat që dridhen dhe siguresat që shkyçen nuk janë thjesht bezdisëse — mund të jenë paralajmërime të hershme. Ja si të dish kur është koha.",
    category: "Electrical",
    date: "2026-06-12",
    readTime: "5 min lexim",
    author: "Ermal Sylaj",
    content: [
      "Paneli elektrik është komponenti më i rëndësishëm i sigurisë në shtëpinë tënde, megjithatë është ai për të cilin pronarët mendojnë më së paku — derisa diçka shkon keq.",
      "Shkyçje të shpeshta siguresash, drita që dridhen kur ndizen pajisje, priza të ngrohta apo të zbehura, dhe një panel nën 100A janë të gjitha sinjale që meritojnë vëmendje serioze.",
      "Përtej sigurisë, një panel i vogël pengon edhe ngritje në të ardhmen — karikuesit EV, automatizimi smart home, dhe sistemet solare kanë të gjitha nevojë për hapësirë që panelet e vjetra thjesht s'e kanë.",
      "Një vlerësim profesional i ngarkesës zgjat më pak se një orë dhe të tregon me siguri nëse paneli yt po mban ritmin me mënyrën si e përdor vërtet shtëpinë tënde sot.",
    ],
  },
  {
    slug: "smart-home-automation-where-to-start",
    title: "Automatizimi Smart Home: Nga Duhet të Fillosh Vërtet",
    excerpt:
      "Automatizimi i plotë i shtëpisë mund të duket dërrmues. Ja radha që ka vërtet kuptim — dhe pse ndriçimi vjen i pari.",
    category: "Smart Home",
    date: "2026-05-28",
    readTime: "6 min lexim",
    author: "Njomza Kastrati",
    content: [
      "Shumica e pronarëve mendojnë që automatizimi smart home fillon me blerjen e një pakoje pajisjesh. Nuk fillon kështu — fillon me rrjetin tënd.",
      "Një rrjet i qëndrueshëm dhe i segmentuar është themeli nga i cili varet gjithçka tjetër. Anashkaloje këtë hap dhe edhe hardware-i më i mirë do të ndihet i pabesueshëm.",
      "Nga aty, ndriçimi është pothuajse gjithmonë hapi i parë me ndikimin më të madh: është automatizimi që do ta vërehesh çdo ditë, dhe përputhet natyrshëm me skenat e prezencës dhe sigurisë më vonë.",
      "Siguria dhe klima zakonisht vijnë më pas, me orkestrimin e plotë të shtëpisë (stili Control4) si shtresa përfundimtare pasi sistemet individuale të jenë provuar.",
    ],
  },
  {
    slug: "cctv-vs-smart-cameras-whats-the-difference",
    title: "CCTV kundrejt Kamerave Smart me AI: Çfarë Ndryshon Vërtet",
    excerpt:
      "Jo të gjitha kamerat e mbikëqyrjes janë të njëjta. Ja çfarë ndryshon vërtet zbulimi me AI në performancën e një sistemi sigurie.",
    category: "Security",
    date: "2026-05-09",
    readTime: "4 min lexim",
    author: "Blendi Rama",
    content: [
      "CCTV tradicionale regjistron gjithçka dhe alarmon për çdo lëvizje — përfshirë makina që kalojnë, gjethe që lëvizin, dhe hije. Kështu ndodh lodhja e alarmeve.",
      "Kamerat me AI klasifikojnë çfarë shohin: person, automjet, kafshë. Ky dallim i vetëm është ajo që e kthen një sistem kamerash nga një arkiv regjistrimesh në një sistem paralajmërimi vërtet të dobishëm.",
      "Ndryshimi tjetër i madh është njohja e targave, që lejon një sistem të regjistrojë ose shënjojë automatikisht automjete — e dobishme si për sigurinë ashtu edhe për komoditet të thjeshtë, si të dish kur mbërrin një dërgesë.",
    ],
  },
  {
    slug: "structured-cabling-why-wifi-extenders-fail",
    title: "Pse Dështojnë Zgjatësit e Wi-Fi (dhe Kabllimi i Strukturuar Jo)",
    excerpt:
      "Nëse ke blerë një zgjatës të tretë Wi-Fi dhe ende ke zona të vdekura, problemi s'është zgjatësi. Ja çfarë e zgjidh vërtet atë.",
    category: "Networking",
    date: "2026-04-15",
    readTime: "5 min lexim",
    author: "Argjend Morina",
    content: [
      "Zgjatësit e Wi-Fi përsërisin një sinjal që tashmë është përkeqësuar — çdo 'hop' e përgjysmon afërsisht bandwidth-in e përdorshëm. Në shtëpi më të mëdha apo me shumë kate, kjo rrallë mjafton.",
      "Kabllimi i strukturuar e zgjidh problemin e vërtetë: siguron një lidhje me tel, me bandwidth të plotë, te shumë pika qasjeje në të gjithë pronën, kështu që secila transmeton një sinjal të fortë e të freskët në vend të një përsëritjeje të dobësuar.",
      "Është një projekt fillestar më i madh, por është dallimi mes një rrjeti që funksionon më shpesh dhe një rrjeti që zhduket krejtësisht nga lista jote e problemeve.",
    ],
  },
];

export function getBlogPosts(locale: Locale): BlogPost[] {
  return locale === "sq" ? blogPostsSq : blogPostsEn;
}

export function getBlogPostBySlug(locale: Locale, slug: string) {
  return getBlogPosts(locale).find((post) => post.slug === slug);
}

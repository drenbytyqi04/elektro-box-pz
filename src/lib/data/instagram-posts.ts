import type { Locale } from "@/i18n/routing";

export interface InstagramPost {
  shortcode: string;
  caption: string;
  isVideo?: boolean;
}

// Real posts from instagram.com/elektroboxllc. Images live in
// public/images/instagram/<shortcode>.jpg and each tile links to the post.
const instagramPostsEn: InstagramPost[] = [
  { shortcode: "DdWZNcSMhjn", caption: "Professional electrical installations for homes, shops and businesses." },
  { shortcode: "Dcirsr1ML_9", caption: "Electrical installations done with precision and to professional standards." },
  { shortcode: "DcdteWuMhkr", caption: "Project completed successfully — indoor and outdoor lighting, designed and delivered." },
  { shortcode: "DcYqdrOM6MR", caption: "Every installation starts with work done right." },
  { shortcode: "DcQRY9IMNHP", caption: "From the plan to the installation, from on-site work to the final result.", isVideo: true },
  { shortcode: "Db0THlLMQ9T", caption: "Safety starts before the danger — smoke sensors and real-time alarms." },
];

const instagramPostsSq: InstagramPost[] = [
  { shortcode: "DdWZNcSMhjn", caption: "Instalime elektrike profesionale për shtëpi, lokale dhe biznese." },
  { shortcode: "Dcirsr1ML_9", caption: "Instalime elektrike të realizuara me precizion dhe standard profesional." },
  { shortcode: "DcdteWuMhkr", caption: "Projekt i realizuar me sukses — nga ndriçimi i brendshëm deri te ndriçimi i jashtëm." },
  { shortcode: "DcYqdrOM6MR", caption: "Çdo instalim fillon me një punë të bërë siç duhet." },
  { shortcode: "DcQRY9IMNHP", caption: "Nga plani te instalimi. Nga puna në terren te rezultati final.", isVideo: true },
  { shortcode: "Db0THlLMQ9T", caption: "Siguria fillon para rrezikut — sensorë tymi dhe alarm në kohë reale." },
];

export function getInstagramPosts(locale: Locale): InstagramPost[] {
  return locale === "sq" ? instagramPostsSq : instagramPostsEn;
}

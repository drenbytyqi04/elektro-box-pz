import type { Locale } from "@/i18n/routing";

export interface InstagramPost {
  headline: string;
  subline?: string;
  icon: string;
  variant: "orange" | "dark";
  tag?: string;
}

const instagramPostsEn: InstagramPost[] = [
  { headline: "SMART HOME", subline: "The new standard of living", icon: "House", variant: "dark" },
  { headline: "SAFETY, QUALITY, TRUST", icon: "ShieldCheck", variant: "orange" },
  { headline: "CAMERA SECURITY", subline: "Monitor your home, wherever you are", icon: "Camera", variant: "dark", tag: "MODE" },
  { headline: "RELIABLE WI-FI NETWORK", subline: "The base of every smart home system", icon: "Network", variant: "dark" },
  { headline: "PRECISION IN EVERY CONNECTION", icon: "Zap", variant: "orange" },
  { headline: "ELECTRICAL MAINTENANCE", subline: "Problems solved before they become risk", icon: "Wrench", variant: "dark" },
  { headline: "THE DANGERS OF DIY ELECTRICAL WORK", icon: "AlertTriangle", variant: "orange" },
  { headline: "MODERN LIGHTING", subline: "The mood starts with the lighting", icon: "Lightbulb", variant: "dark" },
];

const instagramPostsSq: InstagramPost[] = [
  { headline: "SMART HOME", subline: "Standardet e reja të jetesës", icon: "House", variant: "dark" },
  { headline: "SIGURI, CILËSI, BESIM", icon: "ShieldCheck", variant: "orange" },
  { headline: "CAMERA SECURITY", subline: "Monitoro shtëpinë tënde, kudo që je", icon: "Camera", variant: "dark", tag: "MODE" },
  { headline: "RRJET I QËNDRUESHËM WI-FI", subline: "Baza e çdo smart home sistemi", icon: "Network", variant: "dark" },
  { headline: "PRECIZITET NË ÇDO LIDHJE", icon: "Zap", variant: "orange" },
  { headline: "MIRËMBAJTJE ELEKTRIKE", subline: "Problemet zgjidhen para se të bëhen rrezik", icon: "Wrench", variant: "dark" },
  { headline: "RREZIQET E IMPROVIZIMIT ELEKTRIK", icon: "AlertTriangle", variant: "orange" },
  { headline: "NDRIÇIM MODERN", subline: "Atmosfera fillon me ndriçimin", icon: "Lightbulb", variant: "dark" },
];

export function getInstagramPosts(locale: Locale): InstagramPost[] {
  return locale === "sq" ? instagramPostsSq : instagramPostsEn;
}

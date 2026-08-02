export interface InstagramPost {
  headline: string;
  subline?: string;
  icon: string;
  variant: "orange" | "dark";
  tag?: string;
}

export const instagramPosts: InstagramPost[] = [
  {
    headline: "SMART HOME",
    subline: "Standardet e reja të jetesës",
    icon: "House",
    variant: "dark",
  },
  {
    headline: "SIGURI, CILËSI, BESIM",
    icon: "ShieldCheck",
    variant: "orange",
  },
  {
    headline: "CAMERA SECURITY",
    subline: "Monitoro shtëpinë tënde, kudo që je",
    icon: "Camera",
    variant: "dark",
    tag: "MODE",
  },
  {
    headline: "RRJET I QËNDRUESHËM WI-FI",
    subline: "Baza e çdo smart home sistemi",
    icon: "Network",
    variant: "dark",
  },
  {
    headline: "PRECIZITET NË ÇDO LIDHJE",
    icon: "Zap",
    variant: "orange",
  },
  {
    headline: "MIRËMBAJTJE ELEKTRIKE",
    subline: "Problemet zgjidhen para se të bëhen rrezik",
    icon: "Wrench",
    variant: "dark",
  },
  {
    headline: "RREZIQET E IMPROVIZIMIT ELEKTRIK",
    icon: "AlertTriangle",
    variant: "orange",
  },
  {
    headline: "NDRIÇIM MODERN",
    subline: "Atmosfera fillon me ndriçimin",
    icon: "Lightbulb",
    variant: "dark",
  },
];

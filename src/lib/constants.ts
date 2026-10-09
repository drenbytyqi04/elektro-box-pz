export const siteConfig = {
  name: "Electro Box LLC",
  shortName: "Electro Box",
  url: "https://electrobox.example.com",
  ogImage: "/og-image.jpg",
  phone: "+383 49 183 963",
  phoneHref: "tel:+38349183963",
  emergencyPhone: "+383 49 183 963",
  whatsapp: "38349183963",
  whatsappHref: "https://wa.me/38349183963",
  email: "electroboxshpk@gmail.com",
  address: "Prizren, Kosovë",
  addressFull: "Prizren 20000, Kosovë",
  mapEmbedSrc:
    "https://maps.google.com/maps?q=Prizren%2C%20Kosovo&z=13&output=embed",
  founded: 2018,
  social: {
    instagram: "https://instagram.com/elektroboxllc",
    facebook: "https://facebook.com/elektroboxllc",
    linkedin: "https://linkedin.com/company/electrobox",
  },
  stats: [
    { value: 500, suffix: "+", labelKey: "projectsCompleted" },
    { value: 8, suffix: "+", labelKey: "yearsExperience" },
    { value: 100, suffix: "%", labelKey: "clientSatisfaction" },
    { value: 24, suffix: "/7", labelKey: "emergencySupport" },
  ],
} as const;

export const navLinks = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "projects", href: "/projects" },
  { key: "smartHome", href: "/smart-home" },
  { key: "security", href: "/security-systems" },
  { key: "about", href: "/about" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
] as const;

export const businessHours = [
  { dayKey: "weekdays", hours: "08:00 – 18:00" },
  { dayKey: "saturday", hours: "09:00 – 14:00" },
  { dayKey: "sunday", hoursKey: "sundayHours" },
] as const;

export const languages = [
  { code: "en", label: "English" },
  { code: "sq", label: "Shqip" },
] as const;

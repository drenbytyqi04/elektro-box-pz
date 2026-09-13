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
  address: "Prishtinë, Kosovë",
  addressFull: "Rr. Dëshmorët e Kombit, Prishtinë 10000, Kosovë",
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47411.15!2d21.1655!3d42.6629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPrishtina!5e0!3m2!1sen!2s!4v1700000000000",
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

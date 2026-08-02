export const siteConfig = {
  name: "Electro Box LLC",
  shortName: "Electro Box",
  tagline: "Powering the Future of Smart Living",
  description:
    "Professional electrical solutions, smart automation and security systems for modern homes and businesses.",
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
  businessHours: [
    { day: "E Hënë – E Premte", hours: "08:00 – 18:00" },
    { day: "E Shtunë", hours: "09:00 – 14:00" },
    { day: "E Diel", hours: "Mbyllur — vetëm urgjenca" },
  ],
  stats: [
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 8, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
    { value: 24, suffix: "/7", label: "Emergency Support" },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    megaMenu: true,
  },
  { label: "Projects", href: "/projects" },
  { label: "Smart Home", href: "/smart-home" },
  { label: "Security", href: "/security-systems" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const languages = [
  { code: "en", label: "English" },
  { code: "sq", label: "Shqip" },
] as const;

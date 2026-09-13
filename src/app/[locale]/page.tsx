import { setRequestLocale } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { Hero } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { SmartHomeShowcase } from "@/components/sections/smart-home-showcase";
import { ProcessSection } from "@/components/sections/process-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { BrandsSection } from "@/components/sections/brands-section";
import { InstagramSection } from "@/components/sections/instagram-section";
import { ContactSection } from "@/components/sections/contact-section";

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseUs />
      <SmartHomeShowcase />
      <ProcessSection />
      <TestimonialsSection />
      <BrandsSection />
      <InstagramSection />
      <ContactSection />
    </>
  );
}

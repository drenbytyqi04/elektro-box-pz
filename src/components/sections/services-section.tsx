"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services } from "@/lib/data/services";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { StaggerGroup, staggerItem } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ServicesSection() {
  return (
    <section className="section-spacing relative">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="What we do"
          title="Engineering every layer of a modern building"
          description="From the panel in the wall to the app on your phone — one team, engineered end-to-end."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div key={service.slug} variants={staggerItem}>
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </StaggerGroup>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

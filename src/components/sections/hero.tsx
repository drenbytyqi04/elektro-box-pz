"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { Link } from "@/i18n/navigation";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { HeroBackground } from "@/components/sections/hero-background";

export function Hero() {
  const { ref, x, y } = useMouseParallax(16);
  const t = useTranslations();
  const headlineWords = t("hero.headline").split(" ");
  const highlightWords: string[] = t.raw("hero.highlightWords");

  return (
    <section
      ref={ref}
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden pt-24"
    >
      <HeroBackground />

      <motion.div style={{ x, y }} className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="glass" className="mb-6">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            {t("hero.badge")}
          </Badge>
        </motion.div>

        <h1 className="text-balance-heading font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          {headlineWords.map((word, i) => (
            <motion.span
              key={word + i}
              initial={{ opacity: 0, y: 40, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`inline-block ${highlightWords.includes(word) ? "text-gradient" : "text-foreground"} mr-[0.28em]`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {t("site.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button asChild size="lg" className="glow-primary">
            <Link href="/contact">
              {t("common.requestQuote")} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="glass">
            <Link href="/services">{t("common.exploreServices")}</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4"
        >
          {siteConfig.stats.map((stat) => (
            <div key={stat.labelKey} className="flex flex-col items-center gap-1">
              <span className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-center text-xs text-subtle-foreground sm:text-sm">{t(`stats.${stat.labelKey}`)}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-subtle-foreground"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">{t("common.scroll")}</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

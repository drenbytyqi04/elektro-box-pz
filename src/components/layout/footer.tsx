import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

import { siteConfig, navLinks } from "@/lib/constants";
import { services } from "@/lib/data/services";
import { Logo } from "@/components/layout/logo";
import { Separator } from "@/components/ui/separator";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "@/components/shared/social-icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface/40">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-[0.4] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="relative mx-auto max-w-8xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
                { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
                { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">Navigate</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">Services</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h3>
            <ul className="mt-5 flex flex-col gap-4">
              <li>
                <a href={siteConfig.phoneHref} className="flex items-start gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {siteConfig.addressFull}
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              Get a free quote <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-subtle-foreground sm:flex-row">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Engineered &amp; built for modern living in Prishtina, Kosovo.</p>
        </div>
      </div>
    </footer>
  );
}

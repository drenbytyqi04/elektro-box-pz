"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Menu, Phone, ArrowRight } from "lucide-react";

import { navLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/use-scroll-progress";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Logo } from "@/components/layout/logo";
import { LanguageSwitcher } from "@/components/layout/language-switcher";

export function Navbar() {
  const scrolled = useScrolled(24);
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-8xl items-center justify-between rounded-full px-4 transition-all duration-500 sm:px-6",
          scrolled ? "glass-strong mx-4 shadow-xl sm:mx-6" : "bg-transparent"
        )}
      >
        <Logo />

        <NavigationMenu.Root className="relative hidden lg:block" delayDuration={100}>
          <NavigationMenu.List className="flex items-center gap-7 py-2">
            {navLinks.map((link) => (
              <NavigationMenu.Item key={link.href}>
                <NavigationMenu.Link asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-medium text-foreground/80 transition-colors hover:text-foreground",
                      pathname === link.href && "text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4 text-primary" />
            {siteConfig.phone}
          </a>
          <Button asChild size="default">
            <Link href="/contact">
              Request a Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu" className="border border-border-strong">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="mb-8 mt-2">
                <Logo />
              </div>
              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block rounded-xl px-3 py-3 font-heading text-base font-medium text-foreground transition-colors hover:bg-white/5 hover:text-primary",
                      pathname === link.href && "text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 border-t border-border pt-5">
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {siteConfig.phone}
                </a>
                <Button asChild>
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    Request a Quote
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

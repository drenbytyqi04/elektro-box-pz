"use client";

import Link from "next/link";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { useScrolled } from "@/hooks/use-scroll-progress";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";

export function FloatingActions() {
  const showQuote = useScrolled(480);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <div
        className={cn(
          "transition-all duration-500",
          showQuote ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        )}
      >
        <Button asChild size="lg" className="glow-primary shadow-2xl">
          <Link href="/contact">
            <span className="hidden sm:inline">Request a Quote</span>
            <span className="sm:hidden">Quote</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-3">
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              aria-label="Open live chat"
              className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full glass-strong text-foreground shadow-2xl transition-all duration-300 hover:border-primary hover:text-primary hover:scale-105 active:scale-95"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-sm">
            <DialogHeader>
              <DialogTitle>Live chat</DialogTitle>
              <DialogDescription>
                Live chat is launching soon. For a fast reply right now, message us on WhatsApp or call
                directly — our team typically responds within minutes during business hours.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-2 flex flex-col gap-2.5 sm:flex-row">
              <Button asChild className="flex-1">
                <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp us
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <a href={siteConfig.phoneHref}>
                  <Phone className="h-4 w-4" /> Call us
                </a>
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <a
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-all duration-300 hover:bg-primary-hover hover:scale-105 active:scale-95"
        >
          <WhatsAppIcon className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}

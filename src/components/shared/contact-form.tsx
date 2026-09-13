"use client";

import { useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { getServices } from "@/lib/data/services";
import { budgetOptions, timelineOptions } from "@/lib/data/site-content";
import type { Locale } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ContactFormProps {
  extended?: boolean;
  className?: string;
}

type Status = "idle" | "submitting" | "success";

export function ContactForm({ extended = false, className }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [service, setService] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [timeline, setTimeline] = useState<string>("");
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const services = getServices(locale);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const message = String(formData.get("message") ?? "");

    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      extended && service ? `Service: ${service}` : null,
      extended && budget ? `Budget: ${budget}` : null,
      extended && timeline ? `Timeline: ${timeline}` : null,
      "",
      message,
    ].filter((line): line is string => line !== null);

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      `New quote request from ${name || "website"}`
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.setTimeout(() => {
      setStatus("success");
      window.location.href = mailto;
    }, 600);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-primary" />
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground">{t("form.successTitle")}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{t("form.successDescription")}</p>
        </div>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          {t("form.sendAnother")}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">
            {t("form.fullName")} <span className="text-primary">*</span>
          </Label>
          <Input id="name" name="name" required autoComplete="name" placeholder={t("form.fullNamePlaceholder")} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">
            {t("form.phone")} <span className="text-primary">*</span>
          </Label>
          <Input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder={t("form.phonePlaceholder")} />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor="email">
            {t("form.email")} <span className="text-primary">*</span>
          </Label>
          <Input id="email" name="email" type="email" required autoComplete="email" placeholder={t("form.emailPlaceholder")} />
        </div>

        {extended && (
          <>
            <div className="flex flex-col gap-2">
              <Label>{t("form.serviceNeeded")}</Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger>
                  <SelectValue placeholder={t("form.selectService")} />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s.slug} value={s.title}>
                      {s.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label>{t("form.estimatedBudget")}</Label>
              <Select value={budget} onValueChange={setBudget}>
                <SelectTrigger>
                  <SelectValue placeholder={t("form.selectRange")} />
                </SelectTrigger>
                <SelectContent>
                  {budgetOptions.map((b) => (
                    <SelectItem key={b.value} value={t(`budgetOptions.${b.value}`)}>
                      {t(`budgetOptions.${b.value}`)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label>{t("form.projectTimeline")}</Label>
              <Select value={timeline} onValueChange={setTimeline}>
                <SelectTrigger>
                  <SelectValue placeholder={t("form.selectTimeline")} />
                </SelectTrigger>
                <SelectContent>
                  {timelineOptions.map((tl) => (
                    <SelectItem key={tl.value} value={t(`timelineOptions.${tl.value}`)}>
                      {t(`timelineOptions.${tl.value}`)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </>
        )}

        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor="message">
            {t("form.projectDetails")} <span className="text-primary">*</span>
          </Label>
          <Textarea id="message" name="message" required placeholder={t("form.projectDetailsPlaceholder")} />
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> {t("common.sending")}
          </>
        ) : (
          <>
            {t("common.sendRequest")} <Send className="h-4 w-4" />
          </>
        )}
      </Button>
      <p className="mt-3 text-xs text-subtle-foreground">{t("form.disclaimer")}</p>
    </form>
  );
}

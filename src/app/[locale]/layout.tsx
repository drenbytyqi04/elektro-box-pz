import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Space_Grotesk, DM_Sans } from "next/font/google";

import "../globals.css";
import { siteConfig } from "@/lib/constants";
import { routing, type Locale } from "@/i18n/routing";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { PageTransition } from "@/components/layout/page-transition";
import { CursorGlow } from "@/components/animations/cursor-glow";
import { OrganizationJsonLd } from "@/components/shared/json-ld";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });

  const title = `${siteConfig.name} | ${t("tagline")}`;
  const description = t("description");

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: [
      "electrical installations Kosovo",
      "smart home automation Prishtina",
      "security camera systems",
      "access control",
      "video intercom",
      "lighting design",
      "structured cabling",
      "Control4 integrator",
      "Lutron dealer",
      "Electro Box LLC",
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    alternates: {
      languages: {
        en: `${siteConfig.url}/en`,
        sq: `${siteConfig.url}/sq`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "sq" ? "sq_AL" : "en_US",
      url: `${siteConfig.url}/${locale}`,
      title,
      description,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale as Locale);
  const t = await getTranslations({ locale, namespace: "common" });

  return (
    <html lang={locale} className={`${spaceGrotesk.variable} ${dmSans.variable} dark h-full antialiased`}>
      <body className="flex min-h-full flex-col overflow-x-hidden bg-background font-sans text-foreground">
        <NextIntlClientProvider>
          <OrganizationJsonLd locale={locale as Locale} />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-primary-foreground"
          >
            {t("skipToMain")}
          </a>
          <CursorGlow />
          <Navbar />
          <main id="main-content" className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <FloatingActions />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

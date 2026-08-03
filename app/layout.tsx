import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import { getDictionary, getLocale } from "@/lib/i18n";
import { TranslationsProvider } from "@/app/translations-context";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  return {
    title: `${profile.name} — ${dict.data.profile.role}`,
    description: dict.data.profile.tagline,
    openGraph: {
      title: `${profile.name} — ${dict.data.profile.role}`,
      description: dict.data.profile.tagline,
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const dict = await getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TranslationsProvider dict={dict}>{children}</TranslationsProvider>
      </body>
    </html>
  );
}

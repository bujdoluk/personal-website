import Link from "next/link";
import { getDictionary, getLocale } from "@/lib/i18n";

export default async function NotFound() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  const t = dict.notFound;

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-display text-gradient text-7xl font-extrabold">{t.code}</p>
      <h1 className="font-display mt-4 text-2xl font-bold tracking-tight md:text-3xl">
        {t.heading}
      </h1>
      <p className="mt-3 max-w-md text-foreground/70">
        {t.description}
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition-transform hover:scale-105"
      >
        {t.backHome}
      </Link>
    </div>
  );
}

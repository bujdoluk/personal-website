import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["en", "sk", "cs"] as const;
type Locale = (typeof LOCALES)[number];
const DEFAULT_LOCALE: Locale = "en";

function parseAcceptLanguage(header: string | null): Locale {
  if (!header) return DEFAULT_LOCALE;

  const entries = header
    .split(",")
    .map((entry) => {
      const [tag, q] = entry.trim().split(";q=");
      return { tag: tag.trim().toLowerCase(), q: q ? parseFloat(q) : 1.0 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of entries) {
    const primary = tag.split("-")[0];
    if ((LOCALES as readonly string[]).includes(primary)) {
      return primary as Locale;
    }
  }
  return DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const cookieLocale = request.cookies.get("locale")?.value;
  const locale: Locale =
    cookieLocale && (LOCALES as readonly string[]).includes(cookieLocale)
      ? (cookieLocale as Locale)
      : parseAcceptLanguage(request.headers.get("accept-language"));

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  response.headers.set("Vary", "Accept-Language");

  if (cookieLocale !== locale) {
    response.cookies.set("locale", locale, {
      maxAge: 86400,
      path: "/",
      httpOnly: true,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\.webp$|.*\\.pdf$|.*\\.png$).*)",
  ],
};

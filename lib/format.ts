export function formatDate(isoMonth: string, locale: string): string {
  const [year, month] = isoMonth.split("-").map(Number);
  return new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(
    new Date(year, month - 1)
  );
}

import { profile } from "@/lib/data";
import type { Dictionary } from "@/lib/i18n";

export default function Footer({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();
  const t = dict.footer;

  return (
    <footer className="border-t border-black/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-foreground/50 md:flex-row">
        <p>
          © {year} {profile.name}. {t.rights}
        </p>
        <p>
          {t.builtWith}{" "}
          <a
            href="https://www.quickresumebuilder.online"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-fuchsia-600 hover:underline"
          >
            QuickResumeBuilder
          </a>
        </p>
      </div>
    </footer>
  );
}

import { profile } from "@/lib/data";

const socialLinks = [
  { label: "GitHub", href: profile.socials.github },
  { label: "LinkedIn", href: profile.socials.linkedin },
  { label: "Twitter", href: profile.socials.twitter },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="bg-blob absolute inset-0 -z-10 opacity-20 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-fuchsia-600">
          Contact
        </p>
        <h2 className="font-display mx-auto mb-4 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
          Let&apos;s build something great together.
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-foreground/70">
          Have a project in mind, or just want to say hi? My inbox is always open.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition-transform hover:scale-105"
          >
            {profile.email}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-fuchsia-600"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

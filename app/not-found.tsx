import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-display text-gradient text-7xl font-extrabold">404</p>
      <h1 className="font-display mt-4 text-2xl font-bold tracking-tight md:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-foreground/70">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition-transform hover:scale-105"
      >
        Back to home
      </Link>
    </div>
  );
}

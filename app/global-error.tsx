"use client";

import "./globals.css";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col items-center justify-center px-6 py-24 text-center">
        <p className="font-display text-7xl font-extrabold text-fuchsia-600">
          Oops
        </p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
          Something went wrong
        </h1>
        <p className="mt-3 max-w-md text-foreground/70">
          An unexpected error occurred. Please try again.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-8 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition-transform hover:scale-105"
        >
          Try again
        </button>
      </body>
    </html>
  );
}

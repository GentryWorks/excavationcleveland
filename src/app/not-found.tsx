import Link from "next/link";
import { siteConfig } from "@/data/config";

export default function NotFound() {
  return (
    <section
      className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      {/* 404 label */}
      <p
        className="mb-4 text-sm font-semibold uppercase tracking-widest"
        style={{ color: "#C4883A" }}
      >
        404 Error
      </p>

      {/* Heading */}
      <h1
        className="mb-4 text-4xl font-extrabold leading-tight md:text-5xl"
        style={{ color: "#1B2A4A" }}
      >
        Page Not Found
      </h1>

      {/* Body */}
      <p
        className="mb-10 max-w-md text-base leading-relaxed md:text-lg"
        style={{ color: "#2D2D2D" }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Link
          href="/"
          className="inline-block rounded px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{ backgroundColor: "#1B2A4A" }}
        >
          Go Home
        </Link>

        <Link
          href={`tel:+1${siteConfig.phoneRaw}`}
          className="inline-block rounded px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{ backgroundColor: "#C4883A" }}
        >
          Call Now {siteConfig.phone}
        </Link>
      </div>
    </section>
  );
}

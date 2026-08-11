import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import aboutImg from "@/assets/excavator-about-cleveland.webp";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: `Excavation Company ${siteConfig.city} | About Us`,
  description:
    `Licensed excavation contractor serving ${siteConfig.city} and surrounding communities. Grading, land clearing, pool excavation, demolition & more. Request a free estimate.`,
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

const values = [
  {
    emoji: "🛡️",
    title: "Licensed & Insured",
    description:
      "Every project is completed by licensed, insured professionals. We carry general liability coverage on every job and can provide a certificate of insurance before work begins.",
  },
  {
    emoji: "📋",
    title: "Written Estimates",
    description:
      "You get a written quote before any work starts. No surprises, no scope creep, no billing you for work you didn't approve.",
  },
  {
    emoji: "📍",
    title: "Cleveland Local",
    description:
      "We work in Northeast Ohio every day. We know the soil conditions, permit requirements, and drainage challenges that come with building in this region.",
  },
  {
    emoji: "✅",
    title: "Clear Communication",
    description:
      "You'll know what's happening on your site and when. We keep you informed from the first estimate through final grading.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 md:py-40">
        {/* Background image */}
        <Image
          src={aboutImg}
          alt="Excavator on a job site in Cleveland"
          fill
          fetchPriority="high"
          loading="eager"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(27,42,74,0.55) 0%, rgba(15,26,46,0.65) 100%)" }}
          aria-hidden="true"
        />
        <div className="relative max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Your Cleveland <span style={{ color: "#C4883A" }}>Excavation Contractor</span>
          </h1>
          <p className="text-lg text-white opacity-90 max-w-xl mx-auto">
            Licensed excavation services for homeowners, builders, and developers across Northeast Ohio.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[800px] mx-auto px-6">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-6"
            style={{ color: "#1B2A4A" }}
          >
            An Excavation Company <span style={{ color: "#C4883A" }}>Cleveland Trusts</span>
          </h2>

          <p
            className="text-base leading-relaxed mb-6"
            style={{ color: "#2D2D2D", opacity: 0.85 }}
          >
            Hiring an excavation contractor in Cleveland comes with real stakes. A crew that doesn&apos;t show up on schedule pushes your entire build back. A quote that doubles by the time the job is done kills your budget. And a crew that isn&apos;t careful can damage utility lines, drainage infrastructure, or neighboring property.
          </p>

          <p
            className="text-base leading-relaxed mb-6"
            style={{ color: "#2D2D2D", opacity: 0.85 }}
          >
            We built this business around the things property owners kept telling us they couldn&apos;t find: a contractor who shows up when scheduled, quotes what the job actually costs, and communicates throughout the project. That standard applies to every job we take — residential excavation, land clearing, grading, pool excavation, and demolition.
          </p>

          <p
            className="text-base leading-relaxed mb-6"
            style={{ color: "#2D2D2D", opacity: 0.85 }}
          >
            Northeast Ohio has its own earthwork challenges. The clay-heavy soil across Cuyahoga County holds water and shifts under freeze-thaw cycles in ways that affect every dig and every grading job. Drainage issues in this region aren&apos;t rare — they&apos;re the rule. Permit requirements vary by municipality, and we work in these communities daily. We factor all of that in before your estimate is written.
          </p>

          <p
            className="text-base leading-relaxed"
            style={{ color: "#2D2D2D", opacity: 0.85 }}
          >
            We serve Cleveland and the surrounding communities including Parma, Lakewood, Euclid, Strongsville, Westlake, Mentor, Solon, Brunswick, Medina, and Akron. We work with homeowners, custom home builders, general contractors, and developers across Northeast Ohio. If it involves moving earth in this region, we can help.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-center mb-12"
            style={{ color: "#1B2A4A" }}
          >
            What Every Job <span style={{ color: "#C4883A" }}>Comes With</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-8 text-center shadow-sm"
              >
                <h3
                  className="text-base font-bold mb-3"
                  style={{ color: "#1B2A4A" }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#2D2D2D", opacity: 0.8 }}
                >
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20" style={{ backgroundColor: "#C4883A" }}>
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Let&apos;s Talk About Your Project
          </h2>
          <p className="text-white opacity-90 text-lg mb-8 max-w-xl mx-auto">
            Free estimates. Written quotes. No runaround. Just a straight answer
            about what your project will take.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`tel:+1${siteConfig.phoneRaw}`}
              className="inline-block font-bold px-8 py-4 rounded text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#1B2A4A", color: "#ffffff" }}
            >
              Call Now {siteConfig.phone}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

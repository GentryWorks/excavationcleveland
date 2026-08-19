import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import serviceImg from "@/assets/residential-excavation-cleveland.webp";
import sectionImg from "@/assets/residential-excavation-section-cleveland.webp";
import cardGrading from "@/assets/card-grading-cleveland.webp";
import cardLandClearing from "@/assets/card-land-clearing-cleveland.webp";
import cardGravel from "@/assets/card-gravel-driveway-cleveland.webp";
import cardPool from "@/assets/card-pool-excavation-cleveland.webp";
import cardDemolition from "@/assets/card-demolition-cleveland.webp";

export const metadata: Metadata = {
  title: `Residential Excavation ${siteConfig.city} | ${siteConfig.businessName}`,
  description:
    `Residential excavation in ${siteConfig.city} for foundations, basements, utility trenching, septic systems & drainage. Licensed & insured. Free written estimates.`,
  alternates: {
    canonical: `${siteConfig.url}/services/residential-excavation`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Residential Excavation",
  description:
    `Residential excavation in ${siteConfig.city} including foundation excavation for new homes, basement digs, additions, utility trenching, septic system excavation, drainage solutions, and backfill and grading after foundation work.`,
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.businessName,
    telephone: `+1${siteConfig.phoneRaw}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.stateAbbr,
      addressCountry: "US",
    },
  },
  areaServed: {
    "@type": "City",
    name: siteConfig.city,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
    { "@type": "ListItem", position: 3, name: "Residential Excavation", item: `${siteConfig.url}/services/residential-excavation` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does residential excavation cost in Cleveland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Residential excavation pricing depends on the type of work, dig depth, soil conditions, and how much material needs to be hauled. A foundation dig for a new home runs differently than utility trenching or a septic excavation. Every project gets a free on-site assessment and a written estimate before any work begins — no surprises.",
      },
    },
    {
      "@type": "Question",
      name: "How long does foundation excavation take for a new home in Cleveland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard residential foundation dig in the Cleveland area typically takes one to three days. The timeline depends on the size of the footprint, required depth, and how much clay or hardpan we encounter. Cleveland soils vary widely — some lots dig fast, others take longer. We give you a specific timeline with every written estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a permit for residential excavation in Cleveland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Permit requirements depend on the type of work and your municipality. Foundation excavation for new construction typically requires a building permit pulled by your general contractor or builder. Utility trench work may require separate permits from the city or utility provider. We work from your approved plans and permit set — the permit coordination is handled by your GC or directly with the city.",
      },
    },
    {
      "@type": "Question",
      name: "How do you avoid hitting underground utility lines during excavation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We require a confirmed 811 utility locate before any excavation begins — no exceptions. The 811 process marks underground gas, electric, water, and telecom lines on your property. Near marked lines, we use hand digging or compact equipment to expose utilities safely before bringing in the excavator. We will not dig blind.",
      },
    },
    {
      "@type": "Question",
      name: "Can you do basement excavation for an addition on an existing home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Basement additions on existing homes are a different scope than new construction — we work in tighter spaces, need to protect the existing foundation, and typically use compact equipment to limit yard disturbance. We review your plans before the estimate so we understand the clearances and any access constraints on your specific lot.",
      },
    },
    {
      "@type": "Question",
      name: "Do you haul away the excavated dirt or can I keep it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both options are available. We haul all excavated material off-site in our own trucks as a standard part of foundation and basement digs. If you want to keep fill material for other areas of your property, let us know during the estimate — we can stockpile it on-site instead of hauling it.",
      },
    },
  ],
};

const serviceAreas = [siteConfig.city, ...siteConfig.suburbs];

const otherServices = [
  { name: "Grading & Sitework", slug: "grading", img: cardGrading },
  { name: "Land Clearing", slug: "land-clearing", img: cardLandClearing },
  { name: "Gravel Driveways", slug: "gravel-driveways", img: cardGravel },
  { name: "Pool Excavation", slug: "pool-excavation", img: cardPool },
  { name: "Residential Demolition", slug: "demolition", img: cardDemolition },
];

const included = [
  "Foundation excavation for new homes",
  "Basement digs and basement additions",
  "Home addition excavation",
  "Utility trenching for water, sewer, and electric",
  "Septic system excavation and field prep",
  "Drainage solutions and French drain excavation",
  "Backfill after foundation waterproofing",
  "Grading around foundation after construction",
];

const faqs = [
  {
    q: "How much does residential excavation cost in Cleveland?",
    a: "Residential excavation pricing depends on the type of work, dig depth, soil conditions, and how much material needs to be hauled. A foundation dig for a new home runs differently than utility trenching or a septic excavation. Every project gets a free on-site assessment and a written estimate before any work begins — no surprises.",
  },
  {
    q: "How long does foundation excavation take for a new home in Cleveland?",
    a: "A standard residential foundation dig in the Cleveland area typically takes one to three days. The timeline depends on the size of the footprint, required depth, and how much clay or hardpan we encounter. Cleveland soils vary widely — some lots dig fast, others take longer. We give you a specific timeline with every written estimate.",
  },
  {
    q: "Do I need a permit for residential excavation in Cleveland?",
    a: "Permit requirements depend on the type of work and your municipality. Foundation excavation for new construction typically requires a building permit pulled by your general contractor or builder. Utility trench work may require separate permits from the city or utility provider. We work from your approved plans and permit set — the permit coordination is handled by your GC or directly with the city.",
  },
  {
    q: "How do you avoid hitting underground utility lines during excavation?",
    a: "We require a confirmed 811 utility locate before any excavation begins — no exceptions. The 811 process marks underground gas, electric, water, and telecom lines on your property. Near marked lines, we use hand digging or compact equipment to expose utilities safely before bringing in the excavator. We will not dig blind.",
  },
  {
    q: "Can you do basement excavation for an addition on an existing home?",
    a: "Yes. Basement additions on existing homes are a different scope than new construction — we work in tighter spaces, need to protect the existing foundation, and typically use compact equipment to limit yard disturbance. We review your plans before the estimate so we understand the clearances and any access constraints on your specific lot.",
  },
  {
    q: "Do you haul away the excavated dirt or can I keep it?",
    a: "Both options are available. We haul all excavated material off-site in our own trucks as a standard part of foundation and basement digs. If you want to keep fill material for other areas of your property, let us know during the estimate — we can stockpile it on-site instead of hauling it.",
  },
];

export default function ResidentialExcavationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />


      {/* Hero */}
      <section className="relative py-28 md:py-40">
        <Image src={serviceImg} alt="" fill loading="eager" fetchPriority="high" style={{ objectFit: "cover", objectPosition: "center" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(27,42,74,0.55) 0%, rgba(15,26,46,0.65) 100%)" }} aria-hidden="true" />
        <div className="relative max-w-[1200px] mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Residential Excavation
          </h1>
          <p className="text-white opacity-80 text-lg max-w-2xl mb-10 leading-relaxed mx-auto">
            Foundation digs, basement excavation, utility trenching, septic systems, and drainage work — handled right the first time. We serve Cleveland and surrounding communities with licensed, insured residential earthwork crews and free written estimates.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={`tel:+1${siteConfig.phoneRaw}`}
              className="inline-block text-white font-bold px-8 py-4 rounded text-xl transition-opacity hover:opacity-90 border-2 border-white"
              style={{ backgroundColor: "#C4883A" }}
            >
              Call Now {siteConfig.phone}
            </Link>
          </div>
        </div>
      </section>


      {/* Body Content */}
      <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[800px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: "#1B2A4A" }}>
                Reliable Residential Excavation Services for Your Home Projects in <span style={{ color: "#C4883A" }}>Cleveland</span>
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#2D2D2D", opacity: 0.85 }}>
                Excavation Cleveland Co. handles residential excavation for homeowners and builders throughout the Cleveland area. Whether you&apos;re digging a foundation for a new home, adding a basement under an existing structure, or running utility lines across a developed lot, our crew has the equipment and experience to do it right.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D", opacity: 0.85 }}>
                Northeast Ohio&apos;s glacial clay presents real challenges for residential excavation. It&apos;s dense, slow to drain, and prone to significant heaving with freeze-thaw cycles. Foundations dug into this soil require proper depth, clean walls, and careful compaction on the backfill — shortcuts show up within a few winters. We work with these conditions every day and give every contractor a site that&apos;s properly prepped from the start.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image src={sectionImg} alt="Residential excavation project in Cleveland" fill loading="lazy" style={{ objectFit: "cover", objectPosition: "center" }} />
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 mt-10" style={{ color: "#1B2A4A" }}>
            Why Choose Excavation Cleveland Co. for <span style={{ color: "#C4883A" }}>Residential Excavation?</span>
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#2D2D2D", opacity: 0.85 }}>
            Your home is one of your most valuable investments, and proper excavation is crucial to ensure the success of your project. Here&apos;s why homeowners trust us:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: "Precision Work", desc: "We ensure every excavation job is completed accurately to meet your specifications and engineered plans." },
              { title: "Safety First", desc: "Our team follows strict safety protocols — including confirmed 811 utility locates — to protect your property and our crew." },
              { title: "Experienced Team", desc: "With years of expertise in Northeast Ohio soil conditions, we understand the unique challenges of residential projects." },
              { title: "Customer Focus", desc: "We work closely with homeowners to ensure satisfaction from start to finish, with clear communication at every step." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 font-bold" style={{ color: "#C4883A" }}>&#10003;</span>
                <div>
                  <span className="text-sm font-bold" style={{ color: "#1B2A4A" }}>{item.title}: </span>
                  <span className="text-sm" style={{ color: "#2D2D2D" }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 mt-10" style={{ color: "#1B2A4A" }}>
            Our Residential <span style={{ color: "#C4883A" }}>Excavation Services</span>
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#2D2D2D", opacity: 0.85 }}>
            We offer a comprehensive range of residential excavation services, including:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: "Foundation Excavation", desc: "Preparing the ground for sturdy and level home foundations, dug to your engineered plan specifications." },
              { title: "Basement Digging", desc: "Creating space for basements or cellars with precision and care, even on tight residential lots." },
              { title: "Utility Trenches", desc: "Excavating trenches for water, sewer, electrical, and gas lines with proper depth and safety protocols." },
              { title: "Pool Excavation", desc: "Preparing your yard for a new swimming pool or water feature, coordinated with your pool builder." },
              { title: "Grading and Leveling", desc: "Ensuring your property has a smooth, stable surface for landscaping, driveways, or further construction." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 font-bold" style={{ color: "#C4883A" }}>&#10003;</span>
                <div>
                  <span className="text-sm font-bold" style={{ color: "#1B2A4A" }}>{item.title}: </span>
                  <span className="text-sm" style={{ color: "#2D2D2D" }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 mt-10" style={{ color: "#1B2A4A" }}>
            Serving <span style={{ color: "#C4883A" }}>Cleveland</span> and Beyond
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#2D2D2D", opacity: 0.85 }}>
            Excavation Cleveland Co. serves homeowners and builders across Greater Cleveland and Northeast Ohio — from Cuyahoga, Lake, and Geauga counties out to Medina and Lorain. Whether the project is in a dense urban neighborhood or a rural township, we provide a written estimate after a free site visit. Request a quote to get started.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8" style={{ color: "#1B2A4A" }}>
            What&apos;s <span style={{ color: "#C4883A" }}>Included</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 font-bold" style={{ color: "#C4883A" }}>&#10003;</span>
                <span className="text-sm" style={{ color: "#2D2D2D" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8" style={{ color: "#1B2A4A" }}>
            Residential Excavation <span style={{ color: "#C4883A" }}>FAQs</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-lg border"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                <summary
                  className="px-6 py-5 font-semibold cursor-pointer list-none flex justify-between items-center"
                  style={{ color: "#1B2A4A" }}
                >
                  {faq.q}
                  <span className="ml-4 text-xl leading-none flex-shrink-0" style={{ color: "#C4883A" }} aria-hidden="true">+</span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#2D2D2D", opacity: 0.8 }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: "#1B2A4A" }}>
            Residential Excavation <span style={{ color: "#C4883A" }}>Service Areas</span>
          </h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#2D2D2D", opacity: 0.7 }}>
            We provide residential excavation services across Cleveland and surrounding areas.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((city) => (
              <span
                key={city}
                className="px-5 py-2 rounded-full text-sm font-semibold"
                style={{ backgroundColor: "#1B2A4A", color: "#ffffff" }}
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-center" style={{ color: "#1B2A4A" }}>
            Our Other <span style={{ color: "#C4883A" }}>Services</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="relative block rounded-xl overflow-hidden group"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={s.img}
                  alt={`${s.name} in Cleveland`}
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-extrabold text-white">
                    {s.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20" style={{ backgroundColor: "#C4883A" }}>
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white opacity-90 text-lg mb-8 max-w-xl mx-auto">
            Request a free estimate on your residential excavation project. We&apos;ll assess your site and provide a written quote before any work begins.
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

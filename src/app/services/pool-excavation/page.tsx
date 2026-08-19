import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import serviceImg from "@/assets/pool-excavation-cleveland.webp";
import poolSectionImg from "@/assets/pool-excavation-section-cleveland.webp";
import poolHeroImg from "@/assets/pool-excavation-hero-cleveland.webp";

export const metadata: Metadata = {
  title: `Pool Excavation ${siteConfig.city} | Pool Removal & Demo`,
  description:
    `Pool excavation and pool demolition in ${siteConfig.city}. Inground pool digs, concrete pool removal, backfill, and grading. Concrete, fiberglass, vinyl. Free estimates.`,
  alternates: {
    canonical: `${siteConfig.url}/services/pool-excavation`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: `Pool Excavation & Demolition ${siteConfig.city}`,
  description:
    `Swimming pool excavation, removal, demolition, and backfill services in ${siteConfig.city}. New inground pool digs for concrete, fiberglass, and vinyl liner pools. Old pool demolition with haul-off and backfill.`,
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
    { "@type": "ListItem", position: 2, name: "Pool Excavation & Demolition", item: `${siteConfig.url}/services/pool-excavation` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does pool excavation cost in Cleveland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pool excavation cost in Cleveland depends on pool size, depth, soil conditions, and site access. Cleveland-area soil is often clay-heavy, which slows digging and affects haul-off volume. We give you a written estimate after a site visit — no guessing, no surprises after the job starts.",
      },
    },
    {
      "@type": "Question",
      name: "How much does pool removal cost in Cleveland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pool demolition and removal in Cleveland typically costs more than new pool excavation because it involves breaking up concrete or fiberglass, separating rebar, hauling off debris, backfilling, and compacting in lifts. Partial demolition (punching holes and abandoning the shell) costs less than full removal. We quote both options so you can decide what makes sense for your situation.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between partial pool demolition and full pool removal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Partial pool demolition means we punch holes in the pool floor and walls to allow drainage, then fill the shell with gravel and dirt. Full pool removal means the entire structure is broken up, hauled off the property, and the hole is backfilled with clean fill. Full removal costs more but leaves no buried shell that could affect future construction or property value. Some municipalities and lenders require full removal — we can tell you what applies to your situation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to dig a new inground pool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "New pool excavation typically takes 1 to 3 days depending on pool size and soil conditions. This includes digging to depth, shaping the outline to your pool builder's specs, and hauling all excavated material off your property.",
      },
    },
    {
      "@type": "Question",
      name: "How long does pool demolition and removal take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full pool demolition and removal typically takes 3 to 7 days. That includes breaking up the pool structure, separating and hauling off debris, backfilling the hole with clean fill material, compacting in lifts, and finish grading.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a permit to remove a pool in Cleveland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Cleveland-area municipalities require a permit for pool removal, including Cuyahoga County, Parma, Lakewood, and Euclid. Requirements vary by city. We help navigate local permit requirements and coordinate with your contractor to keep the project moving.",
      },
    },
    {
      "@type": "Question",
      name: "What types of pools can you excavate or remove?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We handle all pool types — concrete, gunite, shotcrete, vinyl liner, and fiberglass inground pools, as well as above-ground pool removal. Each material requires a different demolition approach. Gunite and concrete pools involve the most breaking and hauling. Fiberglass shells can sometimes be extracted in larger pieces.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work directly with pool builders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We coordinate directly with your pool builder on dig dimensions, depth requirements, shelf layouts, and scheduling. Pool excavation is the first trade in a long chain — we show up on time, dig to spec, and keep your builder's schedule intact.",
      },
    },
  ],
};

const serviceAreas = [siteConfig.city, ...siteConfig.suburbs];

const otherServices = [
  { name: "Grading & Sitework", slug: "grading", emoji: "📐" },
  { name: "Land Clearing", slug: "land-clearing", emoji: "🌲" },
  { name: "Gravel Driveways", slug: "gravel-driveways", emoji: "🛤️" },
  { name: "Residential Excavation", slug: "residential-excavation", emoji: "⛏️" },
  { name: "Residential Demolition", slug: "demolition", emoji: "🏗️" },
];

const newPoolIncluded = [
  "Concrete, gunite, and shotcrete pool digs",
  "Fiberglass pool excavation",
  "Vinyl liner pool excavation",
  "Site access assessment and planning",
  "Pool shape and depth layout from builder specs",
  "Soil removal and off-site hauling",
  "Coordination with pool builders and GCs",
  "Backfill after pool shell installation",
  "Post-install grading around pool area",
];

const poolDemoIncluded = [
  "Concrete and gunite pool demolition",
  "Fiberglass pool removal",
  "Vinyl liner pool tearout and removal",
  "Above-ground pool removal and disposal",
  "Rebar and debris removal and haul-off",
  "Hole backfill with clean fill material",
  "Compaction in lifts for proper settling",
  "Final grading for lawn or new construction",
  "Permit assistance and coordination",
];

const faqs = [
  {
    q: "How much does pool excavation cost in Cleveland?",
    a: "Pool excavation cost in Cleveland depends on pool size, depth, soil conditions, and site access. Cleveland-area soil is often clay-heavy, which slows digging and affects haul-off volume. We give you a written estimate after a site visit — no guessing, no surprises after the job starts.",
  },
  {
    q: "How much does pool removal cost in Cleveland?",
    a: "Pool demolition and removal in Cleveland typically costs more than new pool excavation because it involves breaking up concrete or fiberglass, separating rebar, hauling off debris, backfilling, and compacting in lifts. Partial demolition (punching holes and abandoning the shell) costs less than full removal. We quote both options so you can decide what makes sense for your situation.",
  },
  {
    q: "What is the difference between partial pool demolition and full pool removal?",
    a: "Partial pool demolition means we punch holes in the pool floor and walls to allow drainage, then fill the shell with gravel and dirt. Full pool removal means the entire structure is broken up, hauled off the property, and the hole is backfilled with clean fill. Full removal costs more but leaves no buried shell that could affect future construction or property value. Some municipalities and lenders require full removal — we can tell you what applies to your situation.",
  },
  {
    q: "How long does it take to dig a new inground pool?",
    a: "New pool excavation typically takes 1 to 3 days depending on pool size and soil conditions. This includes digging to depth, shaping the outline to your pool builder\u2019s specs, and hauling all excavated material off your property.",
  },
  {
    q: "How long does pool demolition and removal take?",
    a: "Full pool demolition and removal typically takes 3 to 7 days. That includes breaking up the pool structure, separating and hauling off debris, backfilling the hole with clean fill material, compacting in lifts, and finish grading.",
  },
  {
    q: "Do I need a permit to remove a pool in Cleveland?",
    a: "Most Cleveland-area municipalities require a permit for pool removal, including Cuyahoga County, Parma, Lakewood, and Euclid. Requirements vary by city. We help navigate local permit requirements and coordinate with your contractor to keep the project moving.",
  },
  {
    q: "What types of pools can you excavate or remove?",
    a: "We handle all pool types — concrete, gunite, shotcrete, vinyl liner, and fiberglass inground pools, as well as above-ground pool removal. Each material requires a different demolition approach. Gunite and concrete pools involve the most breaking and hauling. Fiberglass shells can sometimes be extracted in larger pieces.",
  },
  {
    q: "Do you work directly with pool builders?",
    a: "Yes. We coordinate directly with your pool builder on dig dimensions, depth requirements, shelf layouts, and scheduling. Pool excavation is the first trade in a long chain — we show up on time, dig to spec, and keep your builder\u2019s schedule intact.",
  },
];

export default function PoolExcavationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />


      {/* Hero */}
      <section className="relative py-28 md:py-40">
        <Image
          src={poolHeroImg}
          alt="Pool excavation project in Cleveland"
          fill
          fetchPriority="high"
          loading="eager"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(27,42,74,0.55) 0%, rgba(15,26,46,0.65) 100%)" }} aria-hidden="true" />
        <div className="relative max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 uppercase">
            Swimming Pool Excavation, Filling &amp; Demolition
          </h1>
          <p className="text-white opacity-90 text-lg max-w-2xl mb-10 leading-relaxed mx-auto">
            Whether you&apos;re installing a new pool or removing an old one, trust Excavation Cleveland Co. for expert pool excavation, demolition, and backfill services across Cleveland and surrounding areas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={`tel:+1${siteConfig.phoneRaw}`} className="inline-block text-white font-bold px-8 py-4 rounded text-xl transition-opacity hover:opacity-90 border-2 border-white" style={{ backgroundColor: "#C4883A" }}>
              Call Now {siteConfig.phone}
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section — Two Column */}
      <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: "#1B2A4A" }}>
                Complete Pool Excavation, Removal, and Demo in the <span style={{ color: "#C4883A" }}>Greater Cleveland Area</span>
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#2D2D2D" }}>
                Pool excavation in Cleveland is more involved than it looks. Northeast Ohio's clay soil affects how fast a pool can be dug, how much material needs to be hauled, and how backfill settles after pool removal. We handle both sides of the job — digging new inground pools to your builder&apos;s exact specs and demolishing old pools with proper backfill and compaction. Residential homeowners, pool builders, and general contractors across the Greater Cleveland area count on us to show up on time and do the work right.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image src={poolSectionImg} alt="Pool excavation project in Cleveland" fill loading="lazy" style={{ objectFit: "cover", objectPosition: "center" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Service Split */}
      <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center" style={{ color: "#1B2A4A" }}>
            Swimming Pool <span style={{ color: "#C4883A" }}>Excavation Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* New Pool Excavation */}
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: "#1B2A4A" }}>
                New Pool <span style={{ color: "#C4883A" }}>Excavation</span>
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#2D2D2D", opacity: 0.85 }}>
                Every inground pool starts with a precise hole in the ground. Dig it wrong and your pool builder loses days resetting the layout or waiting on unstable walls. We dig to your builder&apos;s exact dimensions — length, width, depth, and shelf cuts — the first time.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#2D2D2D", opacity: 0.85 }}>
                We excavate for concrete (gunite and shotcrete), fiberglass, and vinyl liner inground pools across Cleveland and surrounding communities. We confirm dig specs directly with your pool builder before we ever put a bucket in the ground. Site access matters too — we assess gate widths, overhead clearances, and utility markings before mobilizing equipment.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#2D2D2D", opacity: 0.85 }}>
                Most new pool digs take <strong>1 to 3 days</strong>. All excavated material leaves your property in our dump trucks. After the pool shell is in and inspected, we return to backfill and grade the surrounding area.
              </p>
            </div>

            {/* Pool Demolition */}
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: "#1B2A4A" }}>
                Pool Demolition <span style={{ color: "#C4883A" }}>&amp; Removal</span>
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#2D2D2D", opacity: 0.85 }}>
                An old pool you no longer use is a liability. Cracked concrete collects standing water. Insurance carriers flag it. And it takes up space you could actually use. Whether you want a partial fill-in or a complete swimming pool demolition, we cover the full scope from permit to final grade.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#2D2D2D", opacity: 0.85 }}>
                We remove concrete, gunite, fiberglass, and vinyl liner inground pools, as well as above-ground pool structures. Full removal means we break the pool apart, separate the rebar, haul every bit of debris off your property, and backfill the hole with clean fill compacted in lifts. Compacting in lifts matters — skipping it causes the ground to sink unevenly over time.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#2D2D2D", opacity: 0.85 }}>
                Full pool removal typically takes <strong>3 to 7 days</strong>. We finish with grading so the site is flat and ready for sod, landscaping, a patio, or new construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-center" style={{ color: "#1B2A4A" }}>
            Project <span style={{ color: "#C4883A" }}>Timelines</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
              <p className="text-4xl font-extrabold mb-2" style={{ color: "#C4883A" }}>1–3 Days</p>
              <p className="text-sm font-bold mb-1" style={{ color: "#1B2A4A" }}>New Pool Excavation</p>
              <p className="text-xs" style={{ color: "#2D2D2D", opacity: 0.7 }}>Dig, shape, and haul — depending on pool size and soil conditions</p>
            </div>
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
              <p className="text-4xl font-extrabold mb-2" style={{ color: "#C4883A" }}>3–7 Days</p>
              <p className="text-sm font-bold mb-1" style={{ color: "#1B2A4A" }}>Pool Demolition &amp; Removal</p>
              <p className="text-xs" style={{ color: "#2D2D2D", opacity: 0.7 }}>Demo, haul-off, backfill, compaction, and final grading</p>
            </div>
          </div>
        </div>
      </section>

      {/* Permits */}
      <section className="py-16" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1B2A4A" }}>
            Permits &amp; <span style={{ color: "#C4883A" }}>Compliance</span>
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D", opacity: 0.85 }}>
            Most Cleveland-area cities require a permit for pool removal — requirements differ by municipality across Cuyahoga County and surrounding communities, so don&apos;t assume what applied to a neighbor applies to you. We help you understand what&apos;s required and coordinate with your contractor so nothing holds up the project. For new pool excavation, permits are typically pulled by your pool builder. We work directly with them to make sure our dig aligns with the approved plans.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-6" style={{ color: "#1B2A4A" }}>
                Why Choose Excavation Cleveland Co. for Your <span style={{ color: "#C4883A" }}>Pool Project?</span>
              </h2>
              <ul className="space-y-4">
                {[
                  "Experienced with Cleveland-area clay soil and its impact on pool digs",
                  "We dig to your pool builder\u2019s exact specs — not close, exact",
                  "Own our equipment — no subcontracting the excavation work",
                  "We haul all soil and debris off-site in our own dump trucks",
                  "Proper compaction in lifts on every backfill job",
                  "We help you navigate local permit requirements before work starts",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 font-bold" style={{ color: "#C4883A" }}>&#10003;</span>
                    <span className="text-base" style={{ color: "#2D2D2D" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-6" style={{ color: "#1B2A4A" }}>
                Common Uses After <span style={{ color: "#C4883A" }}>Pool Removal</span>
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#2D2D2D", opacity: 0.85 }}>
                Once we complete the pool fill-in and final grading, your yard is a level, usable surface again. What you do with it is up to you. Common projects we prepare sites for:
              </p>
              <ul className="space-y-4">
                {[
                  "Lawn restoration and landscaping",
                  "Outdoor patio, deck, or kitchen addition",
                  "Detached garage or storage building",
                  "Play area, garden, or open green space",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 font-bold" style={{ color: "#C4883A" }}>&#10003;</span>
                    <span className="text-base" style={{ color: "#2D2D2D" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8" style={{ color: "#1B2A4A" }}>
            Pool Excavation &amp; Demolition <span style={{ color: "#C4883A" }}>FAQs</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-gray-50 rounded-lg border" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                <summary className="px-6 py-5 font-semibold cursor-pointer list-none flex justify-between items-center" style={{ color: "#1B2A4A" }}>
                  {faq.q}
                  <span className="ml-4 text-xl leading-none flex-shrink-0" style={{ color: "#C4883A" }} aria-hidden="true">+</span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#2D2D2D", opacity: 0.8 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: "#1B2A4A" }}>
            Pool Excavation &amp; Demolition <span style={{ color: "#C4883A" }}>Service Areas</span>
          </h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#2D2D2D", opacity: 0.7 }}>
            We handle pool excavation and pool removal across Cleveland and surrounding areas.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((city) => (
              <span key={city} className="px-5 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: "#1B2A4A", color: "#ffffff" }}>
                {city}
              </span>
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
            Whether you&apos;re digging a new pool or removing an old one, request a free estimate. We&apos;ll assess your site and give you a straight answer on timeline and cost.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`tel:+1${siteConfig.phoneRaw}`} className="inline-block font-bold px-8 py-4 rounded text-base transition-opacity hover:opacity-90" style={{ backgroundColor: "#1B2A4A", color: "#ffffff" }}>
              Call Now {siteConfig.phone}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

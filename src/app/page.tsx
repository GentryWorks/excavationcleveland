import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import HeroFormEmbed from "@/components/HeroFormEmbed";
import heroImg from "@/assets/excavator-hero-cleveland.webp";
import fleetImg from "@/assets/excavation-fleet-equipment-cleveland.webp";
import cardGrading from "@/assets/card-grading-cleveland.webp";
import cardLandClearing from "@/assets/card-land-clearing-cleveland.webp";
import cardGravel from "@/assets/card-gravel-driveway-cleveland.webp";
import cardPool from "@/assets/card-pool-excavation-cleveland.webp";
import cardResExcavation from "@/assets/card-residential-excavation-cleveland.webp";
import cardDemolition from "@/assets/card-demolition-cleveland.webp";

export const metadata: Metadata = {
  title: `Excavation Contractor ${siteConfig.city} | ${siteConfig.businessName}`,
  description:
    `Licensed excavation contractor serving ${siteConfig.city}. Grading, land clearing, residential excavation, demolition & more. Licensed & insured. Request a free estimate.`,
  alternates: {
    canonical: `${siteConfig.url}/`,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.businessName,
  description:
    `Licensed and insured excavation contractor serving ${siteConfig.city} and surrounding areas. Services include excavation, land clearing, grading, demolition, trenching, drainage, and dirt hauling.`,
  url: siteConfig.url,
  telephone: `+1${siteConfig.phoneRaw}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.stateAbbr,
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  areaServed: [siteConfig.city, ...siteConfig.suburbs].map((city) => ({
    "@type": "City",
    name: `${city}, ${siteConfig.stateAbbr}`,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Excavation Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Grading & Sitework" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Land Clearing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gravel Driveways" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pool Excavation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Excavation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Demolition" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need a permit for excavation work in Cleveland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most excavation projects in Cleveland require a permit through the City of Cleveland Department of Building and Housing. Demolition work requires its own permit as well. We guide you through what your specific project needs and handle demolition permits directly. For permits tied to a new build, we coordinate with your general contractor.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find a reliable excavation contractor near me in Cleveland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look for a contractor who is licensed and carries general liability insurance — and will provide a certificate of insurance (COI) before work starts. Ask whether they own their own equipment or subcontract the work out. A contractor who owns and operates their own fleet has more control over your timeline and quality. Always get a written quote before any work begins.",
      },
    },
    {
      "@type": "Question",
      name: "How long does residential excavation take in Cleveland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard residential foundation dig typically takes one to three days depending on the size of the footprint and soil conditions. Northeast Ohio's clay soil can slow things down compared to sandy or loamy ground, especially after heavy rain. Land clearing or larger sitework projects run longer — usually three to seven days. We give you a realistic timeline with every estimate.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between excavation and grading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Excavation is the process of removing soil to create a hole or trench — like digging a foundation or a pool. Grading is the process of leveling and sloping the ground to a specific elevation. Most construction projects need both: excavation first to remove material, then grading to shape the site correctly before building begins.",
      },
    },
    {
      "@type": "Question",
      name: "Can you dig a pool in my backyard in Cleveland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We handle inground pool excavation for concrete, fiberglass, and vinyl liner pools throughout the Greater Cleveland area. We coordinate directly with your pool builder, handle all soil hauling, and work within the access constraints of your yard. Before any dig, we verify underground utility locations through Ohio 811.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed and insured for excavation and demolition in Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We are fully licensed and carry general liability insurance. We can provide a certificate of insurance (COI) upon request before work begins. All demolition work is properly permitted through the appropriate local authority.",
      },
    },
  ],
};

const services = [
  {
    slug: "grading",
    emoji: "📐",
    name: "Grading & Sitework",
    description:
      "Proper grading prevents water problems and gives your project a solid foundation. We grade for new construction, driveways, and drainage.",
  },
  {
    slug: "land-clearing",
    emoji: "🌲",
    name: "Land Clearing",
    description:
      "Trees, brush, stumps, and debris removed so your property is ready to build. We clear lots of every size.",
  },
  {
    slug: "gravel-driveways",
    emoji: "🛤️",
    name: "Gravel Driveways",
    description:
      "New gravel driveway installs, repair, regrading, and pothole filling. We deliver and spread the right material for your site.",
  },
  {
    slug: "pool-excavation",
    emoji: "🏊",
    name: "Pool Excavation",
    description:
      "Inground pool digs for concrete, fiberglass, and vinyl pools. We coordinate directly with your pool builder and handle all soil hauling.",
  },
  {
    slug: "residential-excavation",
    emoji: "⛏️",
    name: "Residential Excavation",
    description:
      "Foundation digs, basement excavation, utility trenching, septic system work, and drainage solutions for homes and builders.",
  },
  {
    slug: "demolition",
    emoji: "🏗️",
    name: "Residential Demolition",
    description:
      "House, garage, shed, and barn demolition done safely and permitted correctly. We tear it down, haul it off, and leave the site clean.",
  },
];

const serviceAreas = [siteConfig.city, ...siteConfig.suburbs];

const faqs = [
  {
    q: "Do I need a permit for excavation work in Cleveland?",
    a: "Most excavation projects in Cleveland require a permit through the City of Cleveland Department of Building and Housing. Demolition work requires its own permit as well. We guide you through what your specific project needs and handle demolition permits directly. For permits tied to a new build, we coordinate with your general contractor.",
  },
  {
    q: "How do I find a reliable excavation contractor near me in Cleveland?",
    a: "Look for a contractor who is licensed and carries general liability insurance — and will provide a certificate of insurance (COI) before work starts. Ask whether they own their own equipment or subcontract the work out. A contractor who owns and operates their own fleet has more control over your timeline and quality. Always get a written quote before any work begins.",
  },
  {
    q: "How long does residential excavation take in Cleveland?",
    a: "A standard residential foundation dig typically takes one to three days depending on the size of the footprint and soil conditions. Northeast Ohio's clay soil can slow things down compared to sandy or loamy ground, especially after heavy rain. Land clearing or larger sitework projects run longer — usually three to seven days. We give you a realistic timeline with every estimate.",
  },
  {
    q: "What is the difference between excavation and grading?",
    a: "Excavation is the process of removing soil to create a hole or trench — like digging a foundation or a pool. Grading is the process of leveling and sloping the ground to a specific elevation. Most construction projects need both: excavation first to remove material, then grading to shape the site correctly before building begins.",
  },
  {
    q: "Can you dig a pool in my backyard in Cleveland?",
    a: "Yes. We handle inground pool excavation for concrete, fiberglass, and vinyl liner pools throughout the Greater Cleveland area. We coordinate directly with your pool builder, handle all soil hauling, and work within the access constraints of your yard. Before any dig, we verify underground utility locations through Ohio 811.",
  },
  {
    q: "Are you licensed and insured for excavation and demolition in Ohio?",
    a: "Yes. We are fully licensed and carry general liability insurance. We can provide a certificate of insurance (COI) upon request before work begins. All demolition work is properly permitted through the appropriate local authority.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />


      {/* Hero */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-24">
        {/* Background image */}
        <Image
          src={heroImg}
          alt="Excavation skid steer working on a job site in Cleveland"
          fill
          fetchPriority="high"
          loading="eager"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(27,42,74,0.60) 0%, rgba(15,26,46,0.70) 100%)" }}
          aria-hidden="true"
        />

        <div className="relative max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Left — headline + CTA (2/3 width) */}
          <div className="md:col-span-2">
            <div className="mb-6 inline-block">
              <span
                className="text-white text-sm font-semibold px-4 py-2 rounded-full"
                style={{ backgroundColor: "rgba(27,42,74,0.7)" }}
              >
                Residential &amp; Commercial
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Excavating Company in{" "}
              <span style={{ color: "#C4883A" }}>Cleveland</span>
            </h1>

            <p className="text-white text-lg mb-10 leading-relaxed" style={{ opacity: 0.85 }}>
              Licensed &amp; insured excavation contractor serving {siteConfig.city} and the surrounding suburbs. Your project gets done right — on time, written estimate upfront, no surprises. Grading, land clearing, residential excavation, pool excavation, gravel driveways, and demolition.
            </p>

            <Link
              href={`tel:+1${siteConfig.phoneRaw}`}
              className="inline-block text-white font-bold px-8 py-4 rounded text-xl transition-opacity hover:opacity-90 border-2 border-white"
              style={{ backgroundColor: "#C4883A" }}
            >
              Call Now {siteConfig.phone}
            </Link>
          </div>
          {/* Right — form with transparent background (1/3 width) */}
          <div className="bg-transparent">
            <HeroFormEmbed />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: "#1B2A4A" }} className="py-10">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <p className="text-4xl font-extrabold mb-1" style={{ color: "#C4883A" }}>
              Free
            </p>
            <p className="text-sm opacity-70">Estimates on every job</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold mb-1" style={{ color: "#C4883A" }}>
              Licensed
            </p>
            <p className="text-sm opacity-70">&amp; Fully Insured</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold mb-1" style={{ color: "#C4883A" }}>
              Residential
            </p>
            <p className="text-sm opacity-70">&amp; Commercial</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold mb-1" style={{ color: "#C4883A" }}>
              10+
            </p>
            <p className="text-sm opacity-70">Cities served</p>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "#1B2A4A" }}>
                The Right <span style={{ color: "#C4883A" }}>Equipment</span> for Every Job
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#2D2D2D", opacity: 0.85 }}>
                We own and operate a full fleet — excavators, skid steers, bulldozers, and dump trucks. We match the machine to your project, not the other way around. That means no oversized equipment tearing up your yard, and no underpowered machines dragging out your timeline.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#2D2D2D", opacity: 0.85 }}>
                Northeast Ohio's clay-heavy soil is heavier and harder to work than most homeowners expect — especially after spring rain and freeze-thaw cycles. Our crew knows how to read site conditions and adjust the plan before a problem becomes a delay. We bring that hands-on experience to every job, from a backyard pool dig in Parma to a full land clearing project in Medina County.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-[520px] relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src={fleetImg}
                alt="Excavation fleet equipment lineup in Cleveland"
                fill
                loading="lazy"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-center mb-4"
            style={{ color: "#1B2A4A" }}
          >
            Excavation Services in Cleveland, OH
          </h2>
          <p
            className="text-center text-base mb-16 max-w-xl mx-auto"
            style={{ color: "#2D2D2D", opacity: 0.7 }}
          >
            Full-service excavation and sitework for residential and commercial
            projects across Cleveland and Northeast Ohio.
          </p>

          <div className="flex flex-col gap-12">
            {[
              {
                name: "Grading & Sitework Cleveland, OH",
                slug: "grading",
                img: cardGrading,
                description: "Our grading contractors in Cleveland handle rough grading, finish grading, drainage correction, and building pad prep for residential and commercial sites across Cuyahoga County and the greater Northeast Ohio region. Cleveland's glacial clay is dense and holds water — the flat Lake Erie plain means poor natural drainage, and getting the grade right is essential to keeping water away from foundations.",
              },
              {
                name: "Land Clearing Services Cleveland",
                slug: "land-clearing",
                img: cardLandClearing,
                description: "Our land clearing service in Cleveland handles trees, brush, stumps, and debris of any size — from a single overgrown lot in Parma to multi-acre clearing in Medina County. Northeast Ohio's glacial till and clay make stump removal more involved than in sandier soils. We leave the site graded and ready to build, with all material hauled off-site.",
              },
              {
                name: "Gravel Driveway Installation Cleveland",
                slug: "gravel-driveways",
                img: cardGravel,
                description: "We install gravel driveways in Cleveland and surrounding areas built to handle Ohio's severe freeze-thaw cycles and the region's dense clay that heaves and settles with the seasons. Every job includes proper excavation, base stone, drainage grading, and compaction — so your driveway holds up through Northeast Ohio winters without heaving or rutting.",
              },
              {
                name: "Pool Excavation Cleveland, OH",
                slug: "pool-excavation",
                img: cardPool,
                description: "We provide pool excavation in Cleveland and the greater metro, working directly with pool contractors to deliver accurate, clean digs that stay on spec. Northeast Ohio's glacial clay can be dense and high groundwater near Lake Erie requires planning in some areas. We verify utility locations through Ohio 811 before any dig begins.",
              },
              {
                name: "Residential Excavation Cleveland",
                slug: "residential-excavation",
                img: cardResExcavation,
                description: "Our residential excavation contractors in Cleveland handle foundation digs, basement excavation, utility trenching, backfill, and compaction for homeowners and builders across Cuyahoga, Lake, Geauga, and Medina counties. Cleveland's glacial clay and extreme freeze-thaw cycles mean proper excavation depth and compaction are critical to foundations that stay stable through Ohio winters.",
              },
              {
                name: "Residential Demolition Cleveland, OH",
                slug: "demolition",
                img: cardDemolition,
                description: "Looking for a demolition contractor in Cleveland? We handle residential demolition for garages, sheds, decks, and small structures across the greater Cleveland metro. We disconnect utilities, take the structure down safely, haul everything off-site, and leave the footprint clean and ready for whatever comes next. All demolition work is properly permitted through the City of Cleveland or applicable municipality.",
              },
            ].map((service, i) => (
              <div
                key={service.slug}
                className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <Link
                  href={`/services/${service.slug}`}
                  className="relative flex-shrink-0 w-full md:w-[420px] rounded-xl overflow-hidden group"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={service.img}
                    alt={`${service.name} in Cleveland`}
                    fill
                    loading="lazy"
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight" style={{ color: "#1B2A4A" }}>
                    {service.name}
                  </h3>
                  <p className="text-base leading-relaxed mb-6" style={{ color: "#2D2D2D", opacity: 0.82 }}>
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-block text-sm font-bold px-5 py-3 rounded transition-opacity hover:opacity-90 text-white"
                    style={{ backgroundColor: "#1B2A4A" }}
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-center mb-12"
            style={{ color: "#1B2A4A" }}
          >
            Why <span style={{ color: "#C4883A" }}>Choose Us</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-lg font-bold mb-3" style={{ color: "#1B2A4A" }}>
                No Surprise Costs
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D", opacity: 0.8 }}>
                You get a written estimate before work starts. No hourly billing,
                no change orders you didn&apos;t approve. If conditions change on
                the job, we communicate before the cost changes — not after.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-lg font-bold mb-3" style={{ color: "#1B2A4A" }}>
                One Less Thing to Figure Out
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D", opacity: 0.8 }}>
                Permits, utility locates, scheduling — we handle the logistics
                so you&apos;re not making calls you shouldn&apos;t have to make.
                You focus on your project. We handle the dirt work.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-lg font-bold mb-3" style={{ color: "#1B2A4A" }}>
                Your Property, Respected
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D", opacity: 0.8 }}>
                We protect what stays — landscaping, driveways, fences, neighboring
                property. And we clean up when we&apos;re done, not &quot;mostly&quot;
                done. Your site is left ready for the next step.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-lg font-bold mb-3" style={{ color: "#1B2A4A" }}>
                Straight Answers, Fast
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D", opacity: 0.8 }}>
                You&apos;ll know what the job takes, how long it runs, and what
                it costs. No runaround, no ghosting after the estimate. We
                respond quickly and keep you informed throughout the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-center mb-4"
            style={{ color: "#1B2A4A" }}
          >
            Serving Cleveland &amp; Surrounding Areas
          </h2>
          <p
            className="text-center text-base mb-10 max-w-xl mx-auto"
            style={{ color: "#2D2D2D", opacity: 0.7 }}
          >
            We work across Greater Cleveland and Northeast Ohio — from the city
            to the suburbs and beyond.
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

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-[800px] mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-center mb-12"
            style={{ color: "#1B2A4A" }}
          >
            Common <span style={{ color: "#C4883A" }}>Questions</span> About Excavation in {siteConfig.city}
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
                  <span
                    className="ml-4 text-xl leading-none flex-shrink-0"
                    style={{ color: "#C4883A" }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p
                  className="px-6 pb-5 text-sm leading-relaxed"
                  style={{ color: "#2D2D2D", opacity: 0.8 }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20" style={{ backgroundColor: "#C4883A" }}>
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Ready to Break Ground?
          </h2>
          <p className="text-white opacity-90 text-lg mb-8 max-w-xl mx-auto">
            Tell us about your project and get a free, no-obligation quote.
          </p>
          <Link
            href={`tel:+1${siteConfig.phoneRaw}`}
            className="inline-block font-bold px-8 py-4 rounded text-base transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#1B2A4A", color: "#ffffff" }}
          >
            Call Now {siteConfig.phone}
          </Link>
        </div>
      </section>
    </>
  );
}

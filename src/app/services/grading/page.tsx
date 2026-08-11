import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import serviceImg from "@/assets/excavator-grading-cleveland.webp";
import cardLandClearing from "@/assets/card-land-clearing-cleveland.webp";
import cardGravel from "@/assets/card-gravel-driveway-cleveland.webp";
import cardPool from "@/assets/card-pool-excavation-cleveland.webp";
import cardResExcavation from "@/assets/card-residential-excavation-cleveland.webp";
import cardDemolition from "@/assets/card-demolition-cleveland.webp";

export const metadata: Metadata = {
  title: `Site Grading ${siteConfig.city} | ${siteConfig.businessName}`,
  description:
    `Lot grading and finish grading in ${siteConfig.city}. Drainage correction, building pads, and site prep for new construction. Licensed and insured. Free estimates.`,
  alternates: {
    canonical: `${siteConfig.url}/services/grading`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Grading & Sitework",
  description:
    `Rough and finish grading, building pad preparation, driveway and parking lot subbase grading, yard re-grading for drainage correction, and backfill grading in ${siteConfig.city}.`,
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
    { "@type": "ListItem", position: 3, name: "Grading & Sitework", item: `${siteConfig.url}/services/grading` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does yard grading cost in Cleveland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grading costs depend on the size of the area, how much cut and fill is required, and whether fill material needs to be brought in. A simple drainage correction on a small yard will cost less than a full lot grade on a new construction site. Request a free quote and we'll walk your site, assess the scope, and provide a written estimate — no obligation.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between rough grading and finish grading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rough grading establishes the overall shape and elevation of a site — cutting high spots, filling low spots, and setting the drainage direction. Finish grading is the precision pass that follows: smoothing the surface to the exact elevation needed for concrete, sod, landscaping, or asphalt. Rough grading moves the bulk of the dirt. Finish grading gets it right.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if my yard needs re-grading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The clearest signs are water pooling near your foundation after rain, erosion channels cutting through your lawn, or visible low spots that hold standing water. If your yard slopes toward your house instead of away from it, that's a drainage grading problem that needs correction. Left alone, it leads to foundation moisture issues and basement seepage.",
      },
    },
    {
      "@type": "Question",
      name: "Can you fix a drainage problem without re-grading the entire yard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often yes. Many drainage issues come from one or two problem areas — a low spot near the foundation, a section that was backfilled and settled, or a slope that was never established correctly. We can target just those areas, add fill, re-slope, and seed without disturbing the rest of your yard. A site visit tells us exactly what the scope needs to be.",
      },
    },
    {
      "@type": "Question",
      name: "When does grading happen during new home construction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grading happens in two phases on new construction. Rough grading comes first — before the foundation is poured — to establish the building pad at the correct elevation and set drainage away from the structure. After the foundation is poured and waterproofed, we return to backfill around it and rough grade the surrounding lot. Finish grading is the last step before landscaping, sodding, or hardscape installation begins.",
      },
    },
  ],
};

const serviceAreas = [siteConfig.city, ...siteConfig.suburbs];

const otherServices = [
  { name: "Land Clearing", slug: "land-clearing", img: cardLandClearing },
  { name: "Gravel Driveways", slug: "gravel-driveways", img: cardGravel },
  { name: "Pool Excavation", slug: "pool-excavation", img: cardPool },
  { name: "Residential Excavation", slug: "residential-excavation", img: cardResExcavation },
  { name: "Residential Demolition", slug: "demolition", img: cardDemolition },
];

const included = [
  "Rough grading for new construction",
  "Finish grading for landscaping and concrete",
  "Building pad preparation and elevation",
  "Driveway and parking lot subbase grading",
  "Yard re-grading for drainage correction",
  "Backfill and grade after foundation work",
  "Erosion control slope preparation",
  "Laser and grade control equipment on-site",
];

const faqs = [
  {
    q: "How much does yard grading cost in Cleveland?",
    a: "Grading costs depend on the size of the area, how much cut and fill is required, and whether fill material needs to be brought in. A simple drainage correction on a small yard will cost less than a full lot grade on a new construction site. Request a free quote and we&apos;ll walk your site, assess the scope, and provide a written estimate — no obligation.",
  },
  {
    q: "What is the difference between rough grading and finish grading?",
    a: "Rough grading establishes the overall shape and elevation of a site — cutting high spots, filling low spots, and setting the drainage direction. Finish grading is the precision pass that follows: smoothing the surface to the exact elevation needed for concrete, sod, landscaping, or asphalt. Rough grading moves the bulk of the dirt. Finish grading gets it right.",
  },
  {
    q: "How do I know if my yard needs re-grading?",
    a: "The clearest signs are water pooling near your foundation after rain, erosion channels cutting through your lawn, or visible low spots that hold standing water. If your yard slopes toward your house instead of away from it, that&apos;s a drainage grading problem that needs correction. Left alone, it leads to foundation moisture issues and basement seepage.",
  },
  {
    q: "Can you fix a drainage problem without re-grading the entire yard?",
    a: "Often yes. Many drainage issues come from one or two problem areas — a low spot near the foundation, a section that was backfilled and settled, or a slope that was never established correctly. We can target just those areas, add fill, re-slope, and seed without disturbing the rest of your yard. A site visit tells us exactly what the scope needs to be.",
  },
  {
    q: "When does grading happen during new home construction?",
    a: "Grading happens in two phases on new construction. Rough grading comes first — before the foundation is poured — to establish the building pad at the correct elevation and set drainage away from the structure. After the foundation is poured and waterproofed, we return to backfill around it and rough grade the surrounding lot. Finish grading is the last step before landscaping, sodding, or hardscape installation begins.",
  },
];

export default function GradingPage() {
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
            Grading &amp; Sitework
          </h1>
          <p className="text-white opacity-80 text-lg max-w-2xl mb-10 leading-relaxed mx-auto">
            We handle rough grading, finish grading, drainage correction, and building pad prep for residential and commercial sites across Cleveland and Northeast Ohio.
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
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6" style={{ color: "#1B2A4A" }}>
            Expert Grading and Sitework Services in <span style={{ color: "#C4883A" }}>Cleveland</span> for Residential and Commercial Projects
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#2D2D2D", opacity: 0.85 }}>
            Excavation Cleveland Co. is your go-to provider for professional grading and sitework services across the Cleveland area. Whether you&apos;re preparing a small residential lot or a large-scale commercial development, our team delivers precise, reliable solutions tailored to your project&apos;s unique needs.
          </p>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#2D2D2D", opacity: 0.85 }}>
            With Cleveland and the surrounding communities continuing to grow, property owners in both established neighborhoods and developing areas — including Parma, Lakewood, Euclid, Strongsville, and beyond — trust Excavation Cleveland Co. to lay the groundwork for success. From creating level surfaces for new construction to optimizing drainage systems, no job is too big or too small for our experienced team.
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 mt-10" style={{ color: "#1B2A4A" }}>
            Why Grading and <span style={{ color: "#C4883A" }}>Sitework Matter</span>
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#2D2D2D", opacity: 0.85 }}>
            Proper grading and sitework are the foundation of any successful construction project. Here&apos;s why it&apos;s essential:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: "Improved Drainage", desc: "Proper grading prevents water pooling and reduces the risk of flooding around your structure." },
              { title: "Enhanced Stability", desc: "A well-prepared site ensures the structural integrity of your building from the ground up." },
              { title: "Compliance", desc: "Accurate grading and sitework meet local codes and regulations across Cleveland and Cuyahoga County." },
              { title: "Safety", desc: "Level, stable ground reduces hazards during and after construction for everyone on-site." },
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
            Our Grading &amp; <span style={{ color: "#C4883A" }}>Sitework Services</span>
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#2D2D2D", opacity: 0.85 }}>
            We provide a full range of grading and sitework services to meet the needs of residential and commercial clients, including:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: "Land Leveling", desc: "We create a stable, even surface for building foundations, landscaping, and more." },
              { title: "Drainage Solutions", desc: "Our team designs and implements systems to manage water flow effectively and protect your structure." },
              { title: "Excavation", desc: "We remove debris, rocks, and old materials to prepare the site for construction." },
              { title: "Backfilling and Compacting", desc: "Ensuring a solid foundation by properly compacting soil and adding material as needed." },
              { title: "Final Grading", desc: "Precision grading to ensure a smooth, level surface ready for construction or landscaping." },
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
            Excavation Cleveland Co. proudly serves both residential and commercial clients throughout the Greater Cleveland area. Our services extend to surrounding communities including Westlake, Mentor, Solon, Brunswick, and Medina, ensuring that no project is out of reach. Request a free estimate to get started.
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
            Grading &amp; Sitework <span style={{ color: "#C4883A" }}>FAQs</span>
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
            Grading <span style={{ color: "#C4883A" }}>Service Areas</span>
          </h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#2D2D2D", opacity: 0.7 }}>
            We provide grading and sitework services across Cleveland and surrounding areas.
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
            Request a free estimate on your grading or sitework project. We&apos;ll assess your site and provide a written quote before any work begins.
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

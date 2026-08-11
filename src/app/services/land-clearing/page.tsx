import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import serviceImg from "@/assets/land-clearing-excavator-cleveland.webp";
import sectionImg from "@/assets/land-clearing-section-cleveland.webp";
import cardGrading from "@/assets/card-grading-cleveland.webp";
import cardGravel from "@/assets/card-gravel-driveway-cleveland.webp";
import cardPool from "@/assets/card-pool-excavation-cleveland.webp";
import cardResExcavation from "@/assets/card-residential-excavation-cleveland.webp";
import cardDemolition from "@/assets/card-demolition-cleveland.webp";

export const metadata: Metadata = {
  title: `Land Clearing ${siteConfig.city} | ${siteConfig.businessName}`,
  description:
    `Residential & commercial land clearing in ${siteConfig.city}. Tree removal, stump grinding, brush clearing, and debris hauling. Free estimates — request a quote today.`,
  alternates: {
    canonical: `${siteConfig.url}/services/land-clearing`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Land Clearing",
  description:
    `Tree removal, brush and shrub clearing, stump grinding, root ball removal, and debris hauling for residential and commercial sites across ${siteConfig.city} and Northeast Ohio.`,
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
    { "@type": "ListItem", position: 3, name: "Land Clearing", item: `${siteConfig.url}/services/land-clearing` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does land clearing cost in Cleveland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Land clearing costs depend on lot size, tree density, and whether full stump and root ball removal is needed. Larger lots, dense woodland, and building-ready clearing cost more than basic brush removal. Request a free quote — we walk every site before providing a written estimate, no hourly surprises.",
      },
    },
    {
      "@type": "Question",
      name: "What is forestry mulching and when is it used for land clearing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Forestry mulching uses a specialized machine to grind trees, brush, and stumps into mulch in a single pass. It leaves the material on-site as ground cover rather than hauling it out. It works well for large overgrown parcels where debris removal would be costly. For building lots that need to be clean for grading or a foundation, traditional clearing with debris hauling is usually the better choice.",
      },
    },
    {
      "@type": "Question",
      name: "Do you remove stumps during land clearing or is that a separate service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stump removal is included in our land clearing work. We can grind stumps to grade or fully remove the stump and root ball — particularly important for areas under slabs, foundations, or driveways where wood rot can cause settling.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to clear a residential lot in Cleveland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard residential lot — half an acre or less, moderately wooded — typically takes one to two days. Heavily wooded lots or larger acreage will take longer. We give you a timeline estimate when we walk the site, before any work starts.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a permit to clear trees in Cleveland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Permit requirements vary by municipality. Some Cleveland-area jurisdictions require tree removal permits or tree preservation plans depending on tree size and species. Parma, Lakewood, and Strongsville each have their own tree ordinances. We flag any known requirements for your area during the estimate.",
      },
    },
  ],
};

const serviceAreas = [siteConfig.city, ...siteConfig.suburbs];

const otherServices = [
  { name: "Grading & Sitework", slug: "grading", img: cardGrading },
  { name: "Gravel Driveways", slug: "gravel-driveways", img: cardGravel },
  { name: "Pool Excavation", slug: "pool-excavation", img: cardPool },
  { name: "Residential Excavation", slug: "residential-excavation", img: cardResExcavation },
  { name: "Residential Demolition", slug: "demolition", img: cardDemolition },
];

const included = [
  "Tree removal — all sizes",
  "Brush and shrub clearing",
  "Stump grinding and stump removal",
  "Root ball removal for foundation areas",
  "Debris chipping and material hauling",
  "Residential lot clearing",
  "Commercial site clearing",
  "Multi-acre clearing projects",
];

const faqs = [
  {
    q: "How much does land clearing cost in Cleveland?",
    a: "Land clearing costs depend on lot size, tree density, and whether full stump and root ball removal is needed. Larger lots, dense woodland, and building-ready clearing cost more than basic brush removal. Request a free quote — we walk every site before providing a written estimate, no hourly surprises.",
  },
  {
    q: "What is forestry mulching and when is it used for land clearing?",
    a: "Forestry mulching uses a specialized machine to grind trees, brush, and stumps into mulch in a single pass. It leaves the material on-site as ground cover rather than hauling it out. It works well for large overgrown parcels where debris removal would be costly. For building lots that need to be clean for grading or a foundation, traditional clearing with debris hauling is usually the better choice.",
  },
  {
    q: "Do you remove stumps during land clearing or is that a separate service?",
    a: "Stump removal is included in our land clearing work. We can grind stumps to grade or fully remove the stump and root ball — particularly important for areas under slabs, foundations, or driveways where wood rot can cause settling.",
  },
  {
    q: "How long does it take to clear a residential lot in Cleveland?",
    a: "A standard residential lot — half an acre or less, moderately wooded — typically takes one to two days. Heavily wooded lots or larger acreage will take longer. We give you a timeline estimate when we walk the site, before any work starts.",
  },
  {
    q: "Do I need a permit to clear trees in Cleveland?",
    a: "Permit requirements vary by municipality. Some Cleveland-area jurisdictions require tree removal permits or tree preservation plans depending on tree size and species. Parma, Lakewood, and Strongsville each have their own tree ordinances. We flag any known requirements for your area during the estimate.",
  },
];

export default function LandClearingPage() {
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
            Land Clearing
          </h1>
          <p className="text-white opacity-80 text-lg max-w-2xl mb-10 leading-relaxed mx-auto">
            Tree removal, brush clearing, stump grinding, and full debris hauling for residential and commercial sites. We handle land clearing in Cleveland and across Northeast Ohio — from single building lots to multi-acre development sites.
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
                Fast &amp; Efficient Land Clearing for Your Next <span style={{ color: "#C4883A" }}>Construction Project</span>
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#2D2D2D", opacity: 0.85 }}>
                Excavation Cleveland Co. offers professional land clearing services for residential and commercial projects throughout the Cleveland area. Whether you&apos;re preparing a lot for new construction, expanding your property, or clearing space for landscaping, we provide efficient and reliable solutions tailored to your project.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D", opacity: 0.85 }}>
                From densely wooded lots to smaller spaces in suburban or rural areas, we have the equipment and expertise to handle projects of all sizes. Serving communities across Northeast Ohio — including Parma, Lakewood, Euclid, Strongsville, and beyond — Excavation Cleveland Co. is your trusted partner for thorough and environmentally conscious land clearing.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image src={sectionImg} alt="Land clearing project in Cleveland" fill loading="lazy" style={{ objectFit: "cover", objectPosition: "center" }} />
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 mt-10" style={{ color: "#1B2A4A" }}>
            Our Land <span style={{ color: "#C4883A" }}>Clearing Services</span>
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#2D2D2D", opacity: 0.85 }}>
            We provide comprehensive land clearing services to ensure your property is ready for development, including:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: "Tree and Brush Removal", desc: "Clearing trees, shrubs, and overgrown vegetation of any size." },
              { title: "Debris Removal", desc: "Hauling away stumps, rocks, and construction debris — we leave your lot clean." },
              { title: "Grading and Leveling", desc: "Preparing the cleared land for your next phase of construction or landscaping." },
              { title: "Selective Clearing", desc: "Preserving certain trees and features on your property as requested." },
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
            Why Choose Excavation <span style={{ color: "#C4883A" }}>Cleveland Co.?</span>
          </h2>
          <div className="space-y-3 mb-6">
            {[
              { title: "Versatile Solutions", desc: "We work on properties of all sizes, from urban lots to rural tracts of land across Northeast Ohio." },
              { title: "Eco-Friendly Practices", desc: "Whenever possible, we recycle and repurpose cleared materials to minimize waste." },
              { title: "Safety First", desc: "Our team follows strict safety measures to protect your property and the surrounding area." },
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
            Excavation Cleveland Co. is proud to serve the Greater Cleveland area, including growing neighborhoods and rural communities like Westlake, Mentor, Solon, Brunswick, and Medina. No matter where your property is located or the size of the job, we&apos;re equipped to handle your land clearing needs. Request a free estimate to get started.
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
            Land Clearing <span style={{ color: "#C4883A" }}>FAQs</span>
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
            Land Clearing <span style={{ color: "#C4883A" }}>Service Areas</span>
          </h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#2D2D2D", opacity: 0.7 }}>
            We provide land clearing services across Cleveland and surrounding areas.
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
            Request a free estimate on your land clearing project. We&apos;ll assess your lot and give you a written quote before any work begins.
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

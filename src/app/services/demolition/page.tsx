import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import serviceImg from "@/assets/residential-demolition-cleveland.webp";
import cardGrading from "@/assets/card-grading-cleveland.webp";
import cardLandClearing from "@/assets/card-land-clearing-cleveland.webp";
import cardGravel from "@/assets/card-gravel-driveway-cleveland.webp";
import cardPool from "@/assets/card-pool-excavation-cleveland.webp";
import cardResExcavation from "@/assets/card-residential-excavation-cleveland.webp";

export const metadata: Metadata = {
  title: `House Demolition ${siteConfig.city} | ${siteConfig.businessName}`,
  description:
    `Residential & house demolition in ${siteConfig.city}. Permitted teardowns, garage demo, concrete removal, debris hauling. Licensed & insured. Free estimates.`,
  alternates: {
    canonical: `${siteConfig.url}/services/demolition`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Residential Demolition",
  description:
    `Residential demolition in ${siteConfig.city} including house demolition, garage and shed removal, barn demolition, interior demolition for renovations, concrete removal, permit management, utility coordination, and site cleanup.`,
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
    { "@type": "ListItem", position: 3, name: "Residential Demolition", item: `${siteConfig.url}/services/demolition` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does house demolition cost in Cleveland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Demolition costs depend on the size of the structure, foundation type, and how much concrete removal is involved. Smaller detached garages and sheds cost significantly less than a full house teardown. Request a free quote and we'll provide a written estimate with a full scope breakdown before any work begins.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a permit to demolish a house in Cleveland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A demolition permit is required for any residential structure demolition in Cleveland and Cuyahoga County. Surrounding municipalities like Parma, Lakewood, and Euclid have their own permit processes. We handle permit applications directly — you don't need to navigate that paperwork yourself.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to utilities before demolition begins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All utilities must be disconnected and confirmed before any demo work starts. We coordinate directly with Ohio Edison, Cleveland Water, and telecom providers to schedule and verify each disconnect. We do not begin demolition until every utility is confirmed off.",
      },
    },
    {
      "@type": "Question",
      name: "Do you check for asbestos before demolishing a house?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ohio law requires asbestos and lead paint assessments before demolishing structures built before 1980. We refer clients to licensed environmental consultants for testing and abatement. We do not proceed with demo until hazardous materials have been properly cleared and documented.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to demolish a house in Cleveland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most residential demolitions run two to four days from teardown through debris hauling and site cleanup. Larger structures, difficult access, or significant concrete removal can extend that timeline. We include a project timeline with every written estimate.",
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
  { name: "Residential Excavation", slug: "residential-excavation", img: cardResExcavation },
];

const included = [
  "Full house and residential structure demolition",
  "Garage, shed, and barn demolition",
  "Interior demolition for renovations",
  "Concrete removal — driveways, slabs, footings",
  "Demolition permit management",
  "Utility disconnect coordination",
  "Asbestos and hazardous material referral",
  "Site cleanup and debris hauling",
];

const faqs = [
  {
    q: "How much does house demolition cost in Cleveland?",
    a: "Demolition costs depend on the size of the structure, foundation type, and how much concrete removal is involved. Smaller detached garages and sheds cost significantly less than a full house teardown. Request a free quote and we&apos;ll provide a written estimate with a full scope breakdown before any work begins.",
  },
  {
    q: "Do I need a permit to demolish a house in Cleveland?",
    a: "Yes. A demolition permit is required for any residential structure demolition in Cleveland and Cuyahoga County. Surrounding municipalities like Parma, Lakewood, and Euclid have their own permit processes. We handle permit applications directly — you don&apos;t need to navigate that paperwork yourself.",
  },
  {
    q: "What happens to utilities before demolition begins?",
    a: "All utilities must be disconnected and confirmed before any demo work starts. We coordinate directly with Ohio Edison, Cleveland Water, and telecom providers to schedule and verify each disconnect. We do not begin demolition until every utility is confirmed off.",
  },
  {
    q: "Do you check for asbestos before demolishing a house?",
    a: "Ohio law requires asbestos and lead paint assessments before demolishing structures built before 1980. We refer clients to licensed environmental consultants for testing and abatement. We do not proceed with demo until hazardous materials have been properly cleared and documented.",
  },
  {
    q: "How long does it take to demolish a house in Cleveland?",
    a: "Most residential demolitions run two to four days from teardown through debris hauling and site cleanup. Larger structures, difficult access, or significant concrete removal can extend that timeline. We include a project timeline with every written estimate.",
  },
];

export default function DemolitionPage() {
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
            Residential Demolition
          </h1>
          <p className="text-white opacity-80 text-lg max-w-2xl mb-10 leading-relaxed mx-auto">
            Permitted house demolition, garage teardowns, and interior demo for residential renovation projects across Cleveland and surrounding areas. We handle permits, utility disconnects, hazardous material referrals, and site cleanup.
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
            Cleared Space for Bright Futures: Home Demolition in <span style={{ color: "#C4883A" }}>Greater Cleveland</span>
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#2D2D2D", opacity: 0.85 }}>
            Tearing down a structure can feel like a massive undertaking, but it&apos;s often the very first step toward building something new. Whether you&apos;re a homeowner ready to clear space for your dream custom build or a developer prepping a lot for new construction, Excavation Cleveland Co. handles the heavy lifting safely, legally, and efficiently.
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 mt-10" style={{ color: "#1B2A4A" }}>
            Serving the Greater <span style={{ color: "#C4883A" }}>Cleveland</span> Metro Area
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#2D2D2D", opacity: 0.85 }}>
            Navigating the different permitting processes, regulations, and city codes across Cleveland and Cuyahoga County — as well as surrounding municipalities — requires a local expert. Excavation Cleveland Co. is fully licensed and insured to operate across the entire metro area.
          </p>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#2D2D2D", opacity: 0.85 }}>
            We serve residential demolition clients across Greater Cleveland and Northeast Ohio — including Westlake, Strongsville, Mentor, Solon, Brunswick, Medina, and the surrounding communities throughout Cuyahoga County.
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 mt-10" style={{ color: "#1B2A4A" }}>
            Our Residential <span style={{ color: "#C4883A" }}>Demolition Services</span>
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#2D2D2D", opacity: 0.85 }}>
            No job is too big, and no tight neighborhood fit is too small for our skilled operators. We specialize in a variety of residential teardown needs:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: "Full House Demolition", desc: "Total teardowns of single-family homes, multi-family units, or outdated structures to make way for new construction." },
              { title: "Garage & Shed Removal", desc: "Safely dropping detached garages, old barns, and backyard sheds without damaging the surrounding landscape." },
              { title: "Swimming Pool Demolition & Infill", desc: "Ready to reclaim your backyard? We remove concrete or vinyl pools, backfill the area, and compact the soil properly so it\u2019s safe to build or landscape over." },
              { title: "Deck, Patio, & Concrete Removal", desc: "Breaking up and hauling away old, cracked concrete and wooden structures from your property." },
              { title: "Safety First, Always", desc: "Every project includes a rigorous utility disconnect check (water, gas, electric) and strict adherence to environmental safety regulations regarding hazardous materials." },
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
          <div className="space-y-4 mb-6">
            <div>
              <p className="text-sm font-bold mb-1" style={{ color: "#1B2A4A" }}>We Handle the Permit Headaches</p>
              <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D", opacity: 0.85 }}>
                You shouldn&apos;t have to spend your mornings deciphering local permit laws or waiting in line at municipal offices. We manage the entire permitting process, ensuring your project is compliant with local codes across Cleveland and surrounding municipalities.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold mb-1" style={{ color: "#1B2A4A" }}>Responsible Cleanup and Disposal</p>
              <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D", opacity: 0.85 }}>
                We care about the Cleveland community, which means we care about responsible disposal. We don&apos;t just throw everything into a dump truck — we sort materials on-site to recycle concrete, wood, and metals whenever possible.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold mb-1" style={{ color: "#1B2A4A" }}>Modern Fleet, Experienced Operators</p>
              <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D", opacity: 0.85 }}>
                Residential spaces often mean tight property lines and close neighbors. Our team uses precision equipment and advanced techniques to minimize noise, dust, and vibrations — keeping your neighbors happy and your surrounding property safe. Request a free estimate to get started.
              </p>
            </div>
          </div>
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
            Residential Demolition <span style={{ color: "#C4883A" }}>FAQs</span>
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
            Residential Demolition <span style={{ color: "#C4883A" }}>Service Areas</span>
          </h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#2D2D2D", opacity: 0.7 }}>
            We provide residential demolition services across Cleveland and surrounding areas.
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
            Request a free estimate on your residential demolition project. We handle the permits, the utilities, and the cleanup.
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import serviceImg from "@/assets/excavator-grading-cleveland-gravel.webp";
import cardGrading from "@/assets/card-grading-cleveland.webp";
import cardLandClearing from "@/assets/card-land-clearing-cleveland.webp";
import cardPool from "@/assets/card-pool-excavation-cleveland.webp";
import cardResExcavation from "@/assets/card-residential-excavation-cleveland.webp";
import cardDemolition from "@/assets/card-demolition-cleveland.webp";

export const metadata: Metadata = {
  title: `Gravel Driveway Installation ${siteConfig.city} | ${siteConfig.businessName}`,
  description:
    `Gravel driveway installation and repair in ${siteConfig.city}. Base prep, regrading, pothole filling, culvert installation, and gravel delivery. Licensed & insured. Free estimates.`,
  alternates: {
    canonical: `${siteConfig.url}/services/gravel-driveways`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gravel Driveways",
  description:
    `New gravel driveway installation, gravel driveway repair, regrading, pothole filling, gravel delivery and spreading, driveway extensions, and culvert installation in ${siteConfig.city}.`,
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
    { "@type": "ListItem", position: 3, name: "Gravel Driveways", item: `${siteConfig.url}/services/gravel-driveways` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does gravel driveway installation cost in Cleveland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on the length and width of the driveway, how much excavation is needed, soil conditions, and whether a culvert is required at the road connection. New installs are typically priced by the linear foot or square footage. We provide a written estimate after a free site visit — no charge for the quote.",
      },
    },
    {
      "@type": "Question",
      name: "Is a gravel driveway better than asphalt in Cleveland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gravel driveways cost less upfront and handle Northeast Ohio's freeze-thaw cycles well — asphalt can crack and heave when ground moisture freezes beneath it. Gravel also drains better on Northeast Ohio's clay soil. The tradeoff is that gravel needs periodic regrading and top-off, while asphalt is lower maintenance once it's down. For rural and semi-rural properties, longer driveways, or anyone watching upfront cost, gravel is usually the right call.",
      },
    },
    {
      "@type": "Question",
      name: "What type of gravel is best for a driveway in Cleveland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most Cleveland driveways, a two-layer system works best: #2 crushed limestone as a compacted base for stability, topped with #57 or #8 crushed limestone as the driving surface. The right material depends on your soil, drainage, and traffic volume. We recommend what fits your specific site after we assess it.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a permit for a gravel driveway in Cleveland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gravel driveways typically don't require a building permit in Cleveland. However, culvert installations at road connections often require a right-of-way permit from Cuyahoga County or your local municipality. We flag any permit requirements during the estimate so nothing surprises you later.",
      },
    },
    {
      "@type": "Question",
      name: "How often does a gravel driveway need to be regraded?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most driveways need a light regrading every two to three years, though high-traffic driveways or ones with drainage issues may need attention sooner. Regrading redistributes material that has spread or settled, restores the crown so water drains off the surface, and extends the life of the driveway significantly.",
      },
    },
  ],
};

const serviceAreas = [siteConfig.city, ...siteConfig.suburbs];

const otherServices = [
  { name: "Grading & Sitework", slug: "grading", img: cardGrading },
  { name: "Land Clearing", slug: "land-clearing", img: cardLandClearing },
  { name: "Pool Excavation", slug: "pool-excavation", img: cardPool },
  { name: "Residential Excavation", slug: "residential-excavation", img: cardResExcavation },
  { name: "Residential Demolition", slug: "demolition", img: cardDemolition },
];

const included = [
  "New gravel driveway installation",
  "Gravel driveway repair and regrading",
  "Pothole filling and surface restoration",
  "Gravel delivery and spreading",
  "Driveway extensions and widening",
  "Culvert installation at road connections",
  "Base preparation and compaction",
  "Drainage slope and crown shaping",
];

const faqs = [
  {
    q: "How much does gravel driveway installation cost in Cleveland?",
    a: "Cost depends on the length and width of the driveway, how much excavation is needed, soil conditions, and whether a culvert is required at the road connection. New installs are typically priced by the linear foot or square footage. We provide a written estimate after a free site visit — no charge for the quote.",
  },
  {
    q: "Is a gravel driveway better than asphalt in Cleveland?",
    a: "Gravel driveways cost less upfront and handle Northeast Ohio&apos;s freeze-thaw cycles well — asphalt can crack and heave when ground moisture freezes beneath it. Gravel also drains better on Northeast Ohio&apos;s clay soil. The tradeoff is that gravel needs periodic regrading and top-off, while asphalt is lower maintenance once it&apos;s down. For rural and semi-rural properties, longer driveways, or anyone watching upfront cost, gravel is usually the right call.",
  },
  {
    q: "What type of gravel is best for a driveway in Cleveland?",
    a: "For most Cleveland driveways, a two-layer system works best: #2 crushed limestone as a compacted base for stability, topped with #57 or #8 crushed limestone as the driving surface. The right material depends on your soil, drainage, and traffic volume. We recommend what fits your specific site after we assess it.",
  },
  {
    q: "Do I need a permit for a gravel driveway in Cleveland?",
    a: "Gravel driveways typically don&apos;t require a building permit in Cleveland. However, culvert installations at road connections often require a right-of-way permit from Cuyahoga County or your local municipality. We flag any permit requirements during the estimate so nothing surprises you later.",
  },
  {
    q: "How often does a gravel driveway need to be regraded?",
    a: "Most driveways need a light regrading every two to three years, though high-traffic driveways or ones with drainage issues may need attention sooner. Regrading redistributes material that has spread or settled, restores the crown so water drains off the surface, and extends the life of the driveway significantly.",
  },
];

export default function GravelDrivewaysPage() {
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
            Gravel Driveways
          </h1>
          <p className="text-white opacity-80 text-lg max-w-2xl mb-10 leading-relaxed mx-auto">
            A gravel driveway that&apos;s built right drains well, handles heavy vehicles, and lasts for years. We handle new installations, repairs, regrading, and gravel delivery across Cleveland and the surrounding area.
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
            Build the Perfect Gravel Driveway with Excavation <span style={{ color: "#C4883A" }}>Cleveland Co.</span>
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#2D2D2D", opacity: 0.85 }}>
            If you&apos;re looking for a durable and visually appealing driveway solution, Excavation Cleveland Co. is your trusted partner for gravel driveway installations across the Cleveland area. As neighborhoods continue to grow and expand across Northeast Ohio, more homeowners and property developers in both urban areas and surrounding communities like Parma, Lakewood, and Euclid are turning to gravel driveways for their versatility and long-term value.
          </p>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#2D2D2D", opacity: 0.85 }}>
            We specialize in custom gravel driveway installations designed to meet your specific needs. Whether you&apos;re upgrading an existing driveway or building a new one for a rural property or suburban home, we provide precision grading, proper drainage solutions, and professional finishes that enhance the functionality and appearance of your property.
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 mt-10" style={{ color: "#1B2A4A" }}>
            Why Choose a <span style={{ color: "#C4883A" }}>Gravel Driveway?</span>
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#2D2D2D", opacity: 0.85 }}>
            Gravel driveways are an excellent choice for properties across the Greater Cleveland area and surrounding communities, including Strongsville, Westlake, Mentor, Solon, Brunswick, and Medina. Here&apos;s why:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Durable", desc: "With proper maintenance, gravel driveways can last for decades and handle Northeast Ohio\u2019s freeze-thaw cycles better than asphalt." },
              { title: "Versatile", desc: "Available in a variety of stone types and sizes to match your property\u2019s look and functional needs." },
              { title: "Eco-Friendly", desc: "Gravel is a natural material that promotes water drainage, reducing runoff and standing water issues." },
              { title: "Low Maintenance", desc: "Periodic regrading and occasional top-off keeps a gravel driveway in great shape for years." },
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
            Our Gravel Driveway <span style={{ color: "#C4883A" }}>Installation Process</span>
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#2D2D2D", opacity: 0.85 }}>
            Every gravel driveway installation we do meets the highest standards of quality and durability. Our process includes:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: "Site Evaluation", desc: "We assess your property to determine proper grading, drainage needs, and the best material for your soil conditions." },
              { title: "Excavation", desc: "We remove any debris, old material, or topsoil to prepare a clean, stable base for your new driveway." },
              { title: "Base Layer Installation", desc: "A solid foundation of compacted crushed stone ensures long-term stability and prevents sinking." },
              { title: "Gravel Layering", desc: "We spread and level the driving surface material to achieve a smooth, even finish across the full driveway." },
              { title: "Final Grading", desc: "We shape the crown and slope to ensure proper drainage and a clean, finished appearance." },
            ].map((step) => (
              <div key={step.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 font-bold" style={{ color: "#C4883A" }}>&#10003;</span>
                <div>
                  <span className="text-sm font-bold" style={{ color: "#1B2A4A" }}>{step.title}: </span>
                  <span className="text-sm" style={{ color: "#2D2D2D" }}>{step.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 mt-10" style={{ color: "#1B2A4A" }}>
            Serving <span style={{ color: "#C4883A" }}>Cleveland</span> and Beyond
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#2D2D2D", opacity: 0.85 }}>
            As Cleveland and the surrounding communities continue to grow, more properties in rural areas and developing neighborhoods need reliable gravel driveway installation and repair. Excavation Cleveland Co. proudly serves the entire Greater Cleveland area, including Parma, Lakewood, Euclid, Strongsville, Westlake, Mentor, Solon, Brunswick, and Medina. No matter the size of your project, we have the equipment and expertise to deliver a driveway that holds up for years to come. Request a free estimate to get started.
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
            Gravel Driveway <span style={{ color: "#C4883A" }}>FAQs</span>
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
            Gravel Driveway <span style={{ color: "#C4883A" }}>Service Areas</span>
          </h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#2D2D2D", opacity: 0.7 }}>
            We install and repair gravel driveways across Cleveland and surrounding areas.
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
            Request a free estimate on your gravel driveway project. We&apos;ll assess your site and provide a written quote before any work begins.
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

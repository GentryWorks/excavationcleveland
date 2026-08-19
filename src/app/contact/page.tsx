import type { Metadata } from "next";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.businessName}`,
  description:
    `Contact ${siteConfig.businessName} for a free estimate. Call, email, or fill out the form — we respond within 1 business day. Licensed & insured excavation contractor serving ${siteConfig.city}.`,
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

const serviceAreas = [siteConfig.city, ...siteConfig.suburbs];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-28 pb-16 md:pt-32 md:pb-20"
        style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #0f1a2e 100%)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Contact <span style={{ color: "#C4883A" }}>Us</span>
          </h1>
          <p className="text-white text-lg max-w-xl leading-relaxed" style={{ opacity: 0.80 }}>
            Call us directly, send an email, or fill out the form and we&apos;ll get back to you within 1 business day.
          </p>
        </div>
      </section>

      {/* Main content — 2 column */}
      <section className="py-16" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

            {/* Left — contact info + map */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Contact details card */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-xl font-extrabold mb-6" style={{ color: "#1B2A4A" }}>
                  Get in Touch
                </h2>

                {/* Phone */}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#6B7280" }}>
                    Phone
                  </p>
                  <a
                    href={`tel:+1${siteConfig.phoneRaw}`}
                    className="text-2xl font-extrabold hover:opacity-80 transition-opacity"
                    style={{ color: "#C4883A" }}
                  >
                    {siteConfig.phone}
                  </a>
                </div>

                {/* Hours */}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#6B7280" }}>
                    Business Hours
                  </p>
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between text-sm">
                      <span style={{ color: "#2D2D2D" }}>Monday – Friday</span>
                      <span className="font-semibold" style={{ color: "#1B2A4A" }}>7:00 AM – 5:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span style={{ color: "#2D2D2D" }}>Saturday</span>
                      <span className="font-semibold" style={{ color: "#1B2A4A" }}>8:00 AM – 12:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span style={{ color: "#2D2D2D" }}>Sunday</span>
                      <span className="font-semibold" style={{ color: "#6B7280" }}>Closed</span>
                    </div>
                  </div>
                </div>

                {/* Service Areas */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#6B7280" }}>
                    Areas We Serve
                  </p>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-3">
                    {serviceAreas.map((city) => (
                      <div key={city} className="flex items-center gap-2 text-sm" style={{ color: "#2D2D2D" }}>
                        <span className="font-bold flex-shrink-0" style={{ color: "#C4883A" }}>✓</span>
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-sm" style={{ height: "280px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193193.79516229493!2d-81.90148845!3d41.4822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830ef01a3c4c3b5%3A0xd6a0bb1bc4f1c8d3!2sCleveland%2C%20OH!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Excavation Cleveland Co. service area map"
                />
              </div>
            </div>

            {/* Right — GHL form */}
            <div className="lg:col-span-3">
              <div className="rounded-xl shadow-sm pt-6 pb-4 px-0 md:pt-8 md:pb-6" style={{ backgroundColor: "#1B2A4A" }}>
                <h2 className="text-xl font-extrabold mb-1 px-4" style={{ color: "#ffffff" }}>
                  Request a Free Estimate
                </h2>
                <p className="text-sm mb-6 px-4" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Fill out the form below and we&apos;ll follow up within 24 hours.
                </p>
                <iframe
                  src={siteConfig.ghlFormUrl}
                  style={{ width: "100%", border: "none", borderRadius: "8px" }}
                  id={`inline-${siteConfig.ghlFormId}`}
                  data-layout="{&quot;id&quot;:&quot;INLINE&quot;}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Excavating Company Cleveland"
                  data-layout-iframe-id={`inline-${siteConfig.ghlFormId}`}
                  data-form-id={siteConfig.ghlFormId}
                  title="Excavating Company Cleveland"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}

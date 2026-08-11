import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo-cleveland-wide.webp";
import { siteConfig } from "@/data/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#1B2A4A" }} className="text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand + logo + tagline */}
        <div>
          <Link href="/" className="inline-block mb-4">
            <Image
              src={logo}
              alt="Excavation Cleveland Co."
              height={80}
              width={0}
              style={{ width: "auto", height: "80px" }}
            />
          </Link>
          <p className="text-base font-bold text-white mb-2">{siteConfig.businessName}</p>
          <p className="text-sm opacity-75 leading-relaxed">
            {siteConfig.city}&apos;s trusted excavation and land clearing contractor.
            Licensed, insured, and ready to move dirt on any scale.
          </p>
        </div>

        {/* Services */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-60">
            Services
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services/grading" className="opacity-75 hover:opacity-100 transition-opacity">
                Grading &amp; Sitework
              </Link>
            </li>
            <li>
              <Link href="/services/land-clearing" className="opacity-75 hover:opacity-100 transition-opacity">
                Land Clearing
              </Link>
            </li>
            <li>
              <Link href="/services/gravel-driveways" className="opacity-75 hover:opacity-100 transition-opacity">
                Gravel Driveways
              </Link>
            </li>
            <li>
              <Link href="/services/pool-excavation" className="opacity-75 hover:opacity-100 transition-opacity">
                Pool Excavation &amp; Demolition
              </Link>
            </li>
            <li>
              <Link href="/services/residential-excavation" className="opacity-75 hover:opacity-100 transition-opacity">
                Residential Excavation
              </Link>
            </li>
            <li>
              <Link href="/services/demolition" className="opacity-75 hover:opacity-100 transition-opacity">
                Residential Demolition
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + service areas */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-60">
            Contact
          </p>
          <a
            href={`tel:+1${siteConfig.phoneRaw}`}
            className="text-lg font-bold hover:opacity-80 transition-opacity block mb-3"
            style={{ color: "#C4883A" }}
          >
            {siteConfig.phone}
          </a>
          <p className="text-sm opacity-75 mb-1">{siteConfig.city}, {siteConfig.stateAbbr}</p>
          <p className="text-sm opacity-60 leading-relaxed mb-4">
            Serving: {[siteConfig.city, ...siteConfig.suburbs].join(", ")}
          </p>
          <div className="flex gap-3">
            {siteConfig.facebook && (
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:opacity-80 transition-opacity"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="6" fill="#1877F2"/>
                  <path d="M17.5 17h2.5l.5-3H17.5v-1.5c0-.835.163-1.5 1.25-1.5H20.5V8.15A18.7 18.7 0 0 0 18.25 8C15.94 8 14.5 9.33 14.5 11.85V14H12v3h2.5v8h3v-8z" fill="white"/>
                </svg>
              </a>
            )}
            {siteConfig.googleBusiness && (
              <a
                href={siteConfig.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Business Profile"
                className="hover:opacity-80 transition-opacity"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="6" fill="white"/>
                  <path d="M16 13.818V16.5h4.418c-.182.982-1.1 2.873-4.418 2.873-2.655 0-4.818-2.2-4.818-4.91 0-2.71 2.163-4.909 4.818-4.909 1.51 0 2.52.645 3.1 1.2l2.11-2.036C19.755 7.345 18.04 6.545 16 6.545c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.618 0 7.673-3.245 7.673-7.818 0-.527-.055-1.036-.145-1.527H16v.618z" fill="#4285F4"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <p className="text-xs opacity-50 text-center">
            &copy; {year} {siteConfig.businessName}
          </p>
          <p className="text-xs opacity-40 text-center mt-1">
            Excavating Contractors in {siteConfig.city}.
          </p>
        </div>
      </div>
    </footer>
  );
}

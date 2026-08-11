import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/config";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.businessName} | Excavation & Land Clearing ${siteConfig.city}`,
  description:
    `Licensed excavation contractor serving ${siteConfig.city} and surrounding areas. Excavation, land clearing, grading, demolition, trenching, and dirt hauling. Free estimates.`,
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: `${siteConfig.businessName} | Excavation & Land Clearing ${siteConfig.city}`,
    description:
      `Licensed excavation contractor serving ${siteConfig.city}. Grading, land clearing, pool excavation, demolition & more. Request a free estimate.`,
    url: siteConfig.url,
    siteName: siteConfig.businessName,
    images: [
      {
        url: `${siteConfig.url}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: siteConfig.businessName,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.businessName} | Excavation & Land Clearing ${siteConfig.city}`,
    description:
      `Licensed excavation contractor serving ${siteConfig.city}. Grading, land clearing, pool excavation, demolition & more. Request a free estimate.`,
    images: [`${siteConfig.url}/og-image.webp`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      {/* Ahrefs Web Analytics */}
      <Script src="https://analytics.ahrefs.com/analytics.js" data-key="tWURiUO97lEFOjOK5OvLBg" strategy="afterInteractive" />
      {/* GA4 */}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.ga4Id}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${siteConfig.ga4Id}');`}
      </Script>
      {/* Microsoft Clarity */}
      <Script id="clarity-init" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window,document,"clarity","script","${siteConfig.clarityId}");`}
      </Script>
      {/* GHL Form Embed — auto-resizes iframes to match form height */}
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

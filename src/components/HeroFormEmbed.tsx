import { siteConfig } from "@/data/config";

export default function HeroFormEmbed() {
  return (
    <iframe
      src={siteConfig.ghlFormUrl}
      style={{ width: "100%", height: "550px", border: "none" }}
      title={siteConfig.businessName}
    />
  );
}

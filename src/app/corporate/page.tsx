import { CorporateHero } from "@/components/sections/CorporateHero";
import { IndustrySolutions } from "@/components/sections/IndustrySolutions";
import { ArtOfUniform } from "@/components/sections/ArtOfUniform";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-[var(--color-luxury-white)] pt-16">
      <CorporateHero />
      <IndustrySolutions />
      <ArtOfUniform />
      <CTA 
        title="Elevate your corporate sartorial standards."
        subtitle="Join 200+ global firms who trust KTFashion for their identity."
        buttonText="BOOK YOUR PRESENTATION"
      />
      <Footer />
    </div>
  );
}

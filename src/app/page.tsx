import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { SignatureArchive } from "@/components/sections/SignatureArchive";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-light)] dark:bg-[#0a0a0a] transition-colors duration-300">
      <Hero />
      <Philosophy />
      <SignatureArchive />
      <Testimonials />
      <CTA />
    </div>
  );
}

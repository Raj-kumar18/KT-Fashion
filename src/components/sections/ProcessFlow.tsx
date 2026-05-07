"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PenTool, Scissors, Factory, Truck, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    title: "Design & Consultation",
    description: "Collaborative conceptualization for your brand's unique identity.",
    icon: PenTool,
  },
  {
    title: "Material Sourcing",
    description: "Premium fabrics engineered for durability and supreme comfort.",
    icon: Scissors,
  },
  {
    title: "Pattern Making",
    description: "Precision tailoring using advanced digital pattern rendering.",
    icon: Factory,
  },
  {
    title: "Ethical Manufacturing",
    description: "Sustainable production in state-of-the-art facilities.",
    icon: CheckCircle2,
  },
  {
    title: "Global Delivery",
    description: "Swift, secure logistics to your worldwide operations.",
    icon: Truck,
  },
];

export function ProcessFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="relative py-32 bg-[var(--color-deep-space)] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-orbitron)] text-white mb-4"
          >
            Fabric to Fit
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-liquid-silver)] max-w-2xl mx-auto text-lg"
          >
            Our antigravity process ensures seamless transition from concept to creation.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 hidden md:block rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--color-electric-cyan)] to-[var(--color-holographic-magenta)] shadow-[0_0_15px_rgba(0,217,255,0.8)]"
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              // Create staggered delays based on index for scroll animations
              const floatOffset = useTransform(scrollYProgress, [0, 1], [50 - index * 10, -50 + index * 10]);

              return (
                <motion.div
                  key={index}
                  style={{ y: floatOffset }}
                  className={cn(
                    "relative group w-full md:w-48 flex flex-col items-center text-center",
                    index % 2 === 0 ? "md:-mt-24" : "md:mt-24" // Stagger vertically
                  )}
                >
                  {/* Floating Particle trail */}
                  <div className="absolute -bottom-10 left-1/2 w-1 h-20 bg-gradient-to-t from-transparent to-[var(--color-electric-cyan)] opacity-0 group-hover:opacity-50 transition-opacity blur-sm"></div>

                  <motion.div
                    whileHover={{ scale: 1.1, rotateY: 180 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-20 h-20 rounded-2xl glass-panel flex items-center justify-center mb-6 relative z-10 border border-white/20 group-hover:border-[var(--color-electric-cyan)] transition-colors shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_30px_rgba(0,217,255,0.4)]"
                  >
                    <div className="absolute inset-0 bg-[var(--color-electric-cyan)]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                    {/* Inner content wrapper to counteract rotation so icon stays upright if we wanted, 
                        but prompt says "Icons rotate in 3D space" so we let it flip */}
                    <Icon className="w-8 h-8 text-white group-hover:text-[var(--color-electric-cyan)] transition-colors z-10" />
                  </motion.div>

                  <h3 className="text-xl font-bold font-[family-name:var(--font-syne)] text-white mb-2 group-hover:text-glow transition-all">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/60 font-[family-name:var(--font-outfit)]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

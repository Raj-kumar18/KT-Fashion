"use client";

import { motion } from "framer-motion";

const CLIENTS = [
  "Quantum Corp",
  "Aero Dynamics",
  "Neon Health",
  "Stellar Education",
  "Vertex Manufacturing",
  "Horizon Logistics",
  "Apex Hospitality",
  "Nexus Tech",
];

export function TrustMarquee() {
  return (
    <section className="relative py-24 bg-[var(--color-deep-space)] overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          animate={{
            background: [
              "linear-gradient(45deg, var(--color-electric-cyan) 0%, transparent 100%)",
              "linear-gradient(45deg, var(--color-holographic-magenta) 0%, transparent 100%)",
              "linear-gradient(45deg, var(--color-neon-purple) 0%, transparent 100%)",
              "linear-gradient(45deg, var(--color-electric-cyan) 0%, transparent 100%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 mb-12 text-center">
        <p className="text-[var(--color-liquid-silver)] text-sm font-[family-name:var(--font-jetbrains)] uppercase tracking-widest">
          Trusted By Industry Pioneers
        </p>
      </div>

      <div className="relative w-full max-w-7xl mx-auto glass-panel py-8 border-x-0 md:border-x border-y border-white/10 md:rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        <div className="flex overflow-hidden relative">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
            className="flex whitespace-nowrap"
          >
            {/* Double the list to create seamless infinite scroll */}
            {[...CLIENTS, ...CLIENTS].map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                className="mx-8 md:mx-16 px-6 py-3 rounded-xl border border-transparent hover:border-[var(--color-electric-cyan)] transition-colors duration-300 group cursor-default"
              >
                <h4 className="text-xl md:text-3xl font-bold font-[family-name:var(--font-syne)] text-white/50 group-hover:text-white group-hover:text-glow transition-all duration-300 select-none">
                  {client}
                </h4>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Edge gradients for smooth fade out */}
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[var(--color-deep-space)] to-transparent pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[var(--color-deep-space)] to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}

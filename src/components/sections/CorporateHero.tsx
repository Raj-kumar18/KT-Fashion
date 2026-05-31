"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export function CorporateHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      {/* Full-bleed Background Image */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt="Corporate Building"
          fill
          className="object-cover"
          priority
        />
        {/* Soft gradient overlay to ensure text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent h-32"></div>
      </motion.div>

      <motion.div style={{ y: yText, opacity: opacityText }} className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-[var(--color-luxury-amber)]"></div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-luxury-amber)] font-semibold">
              BESPOKE EXCELLENCE
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-playfair)] text-[var(--color-luxury-dark)] leading-[1.1] mb-8"
          >
            Redefining <br />
            <span className="italic">Professional</span> <br />
            Identity
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[var(--color-luxury-gray)] font-[family-name:var(--font-outfit)] text-sm md:text-base mb-12 max-w-md leading-relaxed"
          >
            Meticulously crafted uniforms that blend architectural precision with the comfort of high-performance fabrics for the modern industry leader.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-8"
          >
            <Link href="/contact" className="btn-dark px-10 py-5 rounded-sm text-xs tracking-widest uppercase shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Request Consultation
            </Link>
            <Link href="#solutions" className="bg-white/80 backdrop-blur-md border border-gray-200 px-10 py-5 rounded-sm text-xs tracking-widest uppercase text-[var(--color-luxury-dark)] hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-medium">
              View Catalog
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

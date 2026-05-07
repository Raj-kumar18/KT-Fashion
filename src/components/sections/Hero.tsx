"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export function Hero() {
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
      {/* Full-bleed Background Image with Parallax */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop" // Elegant fashion mannequin
          alt="Bespoke Coat Design"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Soft gradient overlay to ensure text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 dark:from-[#0a0a0a] dark:via-[#0a0a0a]/90 to-transparent"></div>
        {/* Top gradient for transparent header visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 dark:from-[#0a0a0a]/80 to-transparent h-48"></div>
      </motion.div>

      <motion.div style={{ y: yText, opacity: opacityText }} className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* Text Content */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-[var(--color-luxury-amber)]"></div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-luxury-amber)] font-semibold">
              TAILORED HERITAGE + AVANT-GARDE
            </p>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-playfair)] text-[var(--color-luxury-dark)] dark:text-white leading-[1.1] mb-6"
          >
            The Silhouette of <br />
            <span className="italic">Excellence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[var(--color-luxury-gray)] dark:text-gray-400 font-[family-name:var(--font-outfit)] text-sm md:text-base mb-12 max-w-md leading-relaxed"
          >
            Mastering the architecture of the modern uniform. Bespoke heritage tailoring and avant-garde performance textiles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-8"
          >
            <Link href="/products" className="btn-dark dark:bg-white dark:text-black dark:hover:bg-gray-200 px-10 py-5 rounded-sm text-xs tracking-widest uppercase shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Explore Collection
            </Link>
            <Link href="/contact" className="group flex items-center gap-4 text-xs tracking-widest uppercase font-medium text-[var(--color-luxury-dark)] dark:text-white hover:text-[var(--color-luxury-amber)] dark:hover:text-[var(--color-luxury-amber)] transition-colors">
              Consultation
              <span className="w-12 h-[1px] bg-[var(--color-luxury-dark)] dark:bg-white group-hover:bg-[var(--color-luxury-amber)] dark:group-hover:bg-[var(--color-luxury-amber)] group-hover:w-16 transition-all duration-300"></span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

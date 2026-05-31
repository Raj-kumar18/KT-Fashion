"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  href?: string;
}

export function CTA({
  title = "Design Your Future Look.",
  subtitle = "Join an exclusive collective of institutions that prioritize identity and excellence.",
  buttonText = "SCHEDULE A PRIVATE VIEWING",
  href = "/contact",
}: CTAProps) {
  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a] relative transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto rounded-[2rem] overflow-hidden bg-[var(--color-luxury-navy)] dark:bg-zinc-900 shadow-2xl dark:shadow-[0_0_50px_rgba(245,166,35,0.1)] border border-transparent dark:border-zinc-800 transition-all duration-300"
        >
          {/* Subtle Background Texture */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent dark:from-[var(--color-luxury-amber)]"></div>

          <div className="relative z-10 px-6 py-20 md:py-28 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white mb-6 max-w-3xl leading-tight">
              {title}
            </h2>
            <p className="text-sm md:text-base text-gray-300 dark:text-gray-400 font-[family-name:var(--font-outfit)] mb-10 max-w-xl">
              {subtitle}
            </p>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href={href} className="btn-amber px-10 py-4 rounded-sm text-xs tracking-widest uppercase flex items-center gap-3 shadow-lg shadow-black/20 dark:shadow-[var(--color-luxury-amber)]/20">
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

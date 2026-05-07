"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={containerRef} className="py-32 bg-[var(--color-luxury-offwhite)] dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text Content */}
          <div className="relative">
            <span className="absolute -top-10 -left-6 text-9xl text-gray-200 dark:text-zinc-800 font-[family-name:var(--font-playfair)] opacity-50 select-none pointer-events-none">
              “
            </span>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-luxury-amber)] mb-8 font-semibold relative z-10"
            >
              VOICES OF TRUST
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-[var(--color-luxury-dark)] dark:text-white italic leading-tight mb-12 relative z-10"
            >
              "KTFashion transformed our staff identity. The attention to detail in fabric selection and ergonomics is simply unparalleled in the industry."
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-6"
            >
              <div className="w-12 h-[1px] bg-[var(--color-luxury-amber)]"></div>
              <div>
                <h4 className="text-[10px] tracking-widest uppercase font-bold text-[var(--color-luxury-dark)] dark:text-white">
                  Julian Vance
                </h4>
                <p className="text-[10px] tracking-widest uppercase text-[var(--color-luxury-gray)] dark:text-gray-400">
                  Director, The Grand Regency
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Image Content */}
          <div className="relative mt-12 lg:mt-0 lg:pl-12">
            <motion.div 
              style={{ y: imageY }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] md:h-[600px] w-full max-w-md mx-auto lg:ml-auto lg:mr-0 border border-gray-100 dark:border-zinc-800"
            >
              {/* Replace placeholder with the executive portrait from images */}
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop"
                  alt="Executive Testimonial"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 dark:from-black/80 to-transparent"></div>
            </motion.div>

            {/* Floating Glass Card */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-6 md:left-4 lg:-left-12 glass-card dark:bg-zinc-900/80 dark:border-zinc-700 p-6 md:p-8 rounded-2xl max-w-[280px] z-20"
            >
              <h5 className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-luxury-amber)] mb-2 font-semibold">
                GLOBAL REACH
              </h5>
              <p className="text-sm font-[family-name:var(--font-outfit)] text-[var(--color-luxury-dark)] dark:text-gray-300">
                Ensuring your brand stands out in the world's most prestigious organizations.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

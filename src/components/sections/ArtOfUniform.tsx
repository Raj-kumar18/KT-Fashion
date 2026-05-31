"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Leaf } from "lucide-react";

export function ArtOfUniform() {
  return (
    <section className="py-24 bg-[var(--color-luxury-lightgray)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-luxury-gray)] mb-4 font-bold"
          >
            THE KTFASHION STANDARD
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[var(--color-luxury-dark)]"
          >
            The Art of the Uniform
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
          {/* Left Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full lg:w-3/5 h-[500px] md:h-[600px] z-10"
          >
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1593030103066-0093718efeb9?q=80&w=2080&auto=format&fit=crop" // Tailored suit mannequin
                alt="Bespoke Fitting Session"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-luxury-dark)]/80 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-white italic mb-4">
                Bespoke Fitting Session
              </h3>
              <p className="text-white/90 font-[family-name:var(--font-outfit)] text-sm max-w-md leading-relaxed font-light">
                We provide premium on-site measurement services to ensure every team member feels confident in their professional attire.
              </p>
            </div>
          </motion.div>

          {/* Right Stacked Cards */}
          <div className="relative w-full lg:w-2/5 flex flex-col justify-center gap-8 lg:-ml-12 z-20">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-10 md:p-12 shadow-2xl relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-luxury-amber)]"></div>
              <CheckCircle2 className="w-6 h-6 text-[var(--color-luxury-amber)] mb-6" />
              <h4 className="text-2xl font-[family-name:var(--font-playfair)] text-[var(--color-luxury-dark)] mb-4">
                Quality Assurance
              </h4>
              <p className="text-[var(--color-luxury-gray)] font-[family-name:var(--font-outfit)] text-sm leading-relaxed">
                Every garment undergoes a 12-point inspection by our master clothiers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-10 md:p-12 shadow-xl ml-0 lg:ml-12 relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200"></div>
              <Leaf className="w-6 h-6 text-[var(--color-luxury-dark)] mb-6" />
              <h4 className="text-2xl font-[family-name:var(--font-playfair)] text-[var(--color-luxury-dark)] mb-4">
                Sustainable Fibers
              </h4>
              <p className="text-[var(--color-luxury-gray)] font-[family-name:var(--font-outfit)] text-sm leading-relaxed">
                Ethically sourced materials that prioritize both the environment and longevity.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

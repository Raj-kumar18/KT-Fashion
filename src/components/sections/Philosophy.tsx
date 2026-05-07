"use client";

import { motion } from "framer-motion";
import { PenTool, Scissors, Box } from "lucide-react";

const PHILOSOPHIES = [
  {
    icon: Box,
    title: "Concept Unification",
    description: "Deep analysis of your visual heritage to create a design language that resonates across operations.",
  },
  {
    icon: Scissors,
    title: "Material Selection",
    description: "Sourcing exclusive technical blends and organic weaves that offer breathability and eternal durability.",
  },
  {
    icon: PenTool,
    title: "Master Tailoring",
    description: "Hand-finished details and rigorous quality checkpoints ensure every garment meets our couture standards.",
  },
];

export function Philosophy() {
  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a] relative transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-luxury-amber)] mb-6 font-semibold"
          >
            OUR PHILOSOPHY
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[var(--color-luxury-dark)] dark:text-white max-w-sm"
            >
              The Art of the Impeccable Detail.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[var(--color-luxury-gray)] dark:text-gray-400 font-[family-name:var(--font-outfit)] text-sm leading-relaxed max-w-md pt-2"
            >
              We believe a uniform is more than attire—it is a visual manifesto of your institution's values, crafted with surgical precision and artistic soul.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PHILOSOPHIES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-[var(--color-luxury-offwhite)] dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 p-10 md:p-12 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 rounded-[2rem]"
              >
                <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-zinc-700 flex items-center justify-center mb-8 bg-white dark:bg-zinc-800">
                  <Icon className="w-5 h-5 text-[var(--color-luxury-dark)] dark:text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-[family-name:var(--font-playfair)] text-[var(--color-luxury-dark)] dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-luxury-gray)] dark:text-gray-400 font-[family-name:var(--font-outfit)] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

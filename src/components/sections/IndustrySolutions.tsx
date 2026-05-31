"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SOLUTIONS = [
  {
    id: "finance",
    category: "FINANCE & LEGAL",
    title: "Executive Tailoring",
    description: "High-twist wool blends designed for presence and durability in the boardroom.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop", // Professional man
  },
  {
    id: "hospitality",
    category: "HOSPITALITY",
    title: "Guest Excellence",
    description: "Wrinkle-resistant fabrics and ergonomic cuts for the fast-paced hotel environment.",
    image: "https://images.unsplash.com/photo-1559863481-9b16757cddba?q=80&w=1974&auto=format&fit=crop", // Hospitality
  },
  {
    id: "healthcare",
    category: "HEALTHCARE",
    title: "Clinical Precision",
    description: "Antimicrobial technology meeting sleek, professional silhouettes.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop", // Healthcare
  },
];

export function IndustrySolutions() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[var(--color-luxury-dark)] mb-4"
            >
              Industry Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[var(--color-luxury-gray)] font-[family-name:var(--font-outfit)] italic text-sm md:text-base max-w-xl"
            >
              Curated collections where craftsmanship meets corporate utility.
            </motion.p>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[var(--color-luxury-dark)] hover:border-gray-800 transition-all group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[var(--color-luxury-dark)] hover:bg-[var(--color-luxury-dark)] hover:text-white transition-all group">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOLUTIONS.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative aspect-[4/5] w-full mb-6 overflow-hidden bg-gray-100">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <p className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-luxury-amber)] mb-3 font-bold">
                {solution.category}
              </p>
              
              <h3 className="text-xl font-[family-name:var(--font-playfair)] text-[var(--color-luxury-dark)] mb-3 group-hover:text-[var(--color-luxury-amber)] transition-colors">
                {solution.title}
              </h3>
              
              <p className="text-sm text-[var(--color-luxury-gray)] font-[family-name:var(--font-outfit)] leading-relaxed mb-6">
                {solution.description}
              </p>
              
              <Link href={`/corporate/${solution.id}`} className="text-[10px] tracking-widest uppercase font-bold text-[var(--color-luxury-dark)] flex items-center gap-3 hover:text-[var(--color-luxury-amber)] transition-colors group/link">
                EXPLORE
                <span className="w-8 h-[1px] bg-[var(--color-luxury-dark)] group-hover/link:bg-[var(--color-luxury-amber)] group-hover/link:w-12 transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

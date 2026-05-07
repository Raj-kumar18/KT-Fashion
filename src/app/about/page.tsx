"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const VALUES = [
  { title: "Quality First", desc: "Uncompromising standards in every stitch." },
  { title: "Innovation", desc: "Pushing boundaries in fabric technology." },
  { title: "Sustainability", desc: "Responsible manufacturing processes." },
  { title: "Integrity", desc: "Transparent and honest business practices." },
];

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-[var(--color-bg-light)]">
      {/* Hero Parallax */}
      <section ref={containerRef} className="relative h-[80vh] overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2000&auto=format&fit=crop"
            alt="Factory floor"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-6"
          >
            Our <span className="text-[var(--color-luxury-amber)] italic">Story</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto opacity-90"
          >
            Decades of mastery in crafting exceptional uniforms that define brands.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-20 bg-[var(--color-bg-light)] rounded-t-[3rem] -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-luxury-dark)] mb-6">
              A Legacy of <br />
              <span className="text-[var(--color-luxury-amber)]">Excellence</span>
            </h2>
            <p className="text-[var(--color-luxury-gray)] text-lg leading-relaxed mb-6">
              Founded on the principles of exceptional quality and reliability, KT Fashion has grown from a modest workshop into a leading global manufacturer of premium uniforms and workwear.
            </p>
            <p className="text-[var(--color-luxury-gray)] text-lg leading-relaxed">
              We understand that a uniform is more than just clothing; it is the embodiment of your brand's identity and a source of pride for your team. That's why we pour our expertise into every garment we create.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop"
              alt="Tailoring details"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--color-luxury-dark)]">Our Core Values</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-[var(--color-luxury-amber)] text-xl font-bold mb-4 tracking-widest uppercase">
                0{idx + 1}
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-luxury-dark)] mb-3">{value.title}</h3>
              <p className="text-[var(--color-luxury-gray)]">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

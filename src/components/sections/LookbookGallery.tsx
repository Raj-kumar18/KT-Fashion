"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const LOOKBOOK_ITEMS = [
  {
    id: 1,
    title: "Aero-Weave Suit",
    category: "Corporate",
    image: "/images/hero-model.png",
    yOffset: 20,
  },
  {
    id: 2,
    title: "Thermal Armor",
    category: "Manufacturing",
    image: "/images/lookbook-1.png",
    yOffset: -30,
  },
  {
    id: 3,
    title: "Zero-G Scrub",
    category: "Medical",
    image: "/images/hero-model.png",
    yOffset: 10,
  },
  {
    id: 4,
    title: "Quantum Blazer",
    category: "Executive",
    image: "/images/lookbook-1.png",
    yOffset: -15,
  },
];

export function LookbookGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const itemWidth = carouselRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(newIndex);
    }
  };

  return (
    <section ref={containerRef} className="relative py-32 bg-[var(--color-deep-space)] overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-screen">
        <div className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] rounded-full bg-[var(--color-neon-purple)] blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[50vw] h-[50vw] rounded-full bg-[var(--color-electric-cyan)] blur-[120px] animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 mb-12">
        <motion.div style={{ y: parallaxY }} className="flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-orbitron)] text-white mb-4">
              Defying Gravity
            </h2>
            <p className="text-[var(--color-liquid-silver)] max-w-xl text-lg font-[family-name:var(--font-outfit)]">
              Explore our latest collection where negative space is active space.
            </p>
          </div>
          
          {/* Pagination Indicators */}
          <div className="hidden md:flex gap-3 items-center">
            {LOOKBOOK_ITEMS.map((_, i) => (
              <div key={i} className="relative h-1 w-8 bg-white/20 rounded-full overflow-hidden">
                {activeIndex === i && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-[var(--color-electric-cyan)] box-glow"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Horizontal Snap Carousel */}
      <div 
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-20 px-4 md:px-12 gap-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {LOOKBOOK_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="min-w-[85vw] md:min-w-[40vw] lg:min-w-[30vw] snap-center shrink-0 relative"
            style={{ marginTop: `${item.yOffset}px` }}
          >
            <motion.div
              whileHover={{ y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative w-full aspect-[3/4] rounded-3xl overflow-hidden glass-panel border border-white/10"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Glassmorphic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-space)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[var(--color-electric-cyan)] font-[family-name:var(--font-jetbrains)] text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.category}
                </p>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-syne)] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  {item.title}
                </h3>
              </div>
            </motion.div>
            
            {/* Depth Shadow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/40 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

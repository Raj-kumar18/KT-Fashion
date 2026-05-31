"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const CATEGORIES = [
  "All",
  "School",
  "Colleges",
  "Corporate",
  "Hospital",
  "Hotels",
];

const PRODUCTS = [
  // SCHOOL (9 Items)
  { id: 1, category: "School", image: "/images/products/school-1.png" },
  { id: 2, category: "School", image: "/images/products/school-2.png" },
  { id: 3, category: "School", image: "/images/products/school-3.png" },
  { id: 4, category: "School", image: "/images/products/school-4.png" },
  { id: 5, category: "School", image: "/images/products/school-5.png" },
  { id: 6, category: "School", image: "/images/products/school-6.png" },
  { id: 7, category: "School", image: "/images/products/school-7.png" },
  { id: 8, category: "School", image: "/images/products/school-8.png" },
  { id: 9, category: "School", image: "/images/products/school-9.png" },

  // COLLEGES (9 Items)
  { id: 10, category: "Colleges", image: "/images/products/college-1.png" },
  { id: 11, category: "Colleges", image: "/images/products/college-2.webp" },
  { id: 12, category: "Colleges", image: "/images/products/college-3.png" },
  { id: 13, category: "Colleges", image: "/images/products/college-4.webp" },
  { id: 14, category: "Colleges", image: "/images/products/college-5.png" },
  { id: 15, category: "Colleges", image: "/images/products/college-6.webp" },
  { id: 16, category: "Colleges", image: "/images/products/college-7.webp" },
  { id: 17, category: "Colleges", image: "/images/products/college-8.png" },
  { id: 18, category: "Colleges", image: "/images/products/college-9.webp" },

  // CORPORATE (9 Items)
  { id: 19, category: "Corporate", image: "/images/products/corporate-1.png" },
  { id: 20, category: "Corporate", image: "/images/products/corporate-2.png" },
  { id: 21, category: "Corporate", image: "/images/products/corporate-3.png" },
  { id: 22, category: "Corporate", image: "/images/products/corporate-4.webp" },
  { id: 23, category: "Corporate", image: "/images/products/corporate-5.png" },
  { id: 24, category: "Corporate", image: "/images/products/corporate-6.webp" },
  { id: 25, category: "Corporate", image: "/images/products/corporate-7.webp" },
  { id: 26, category: "Corporate", image: "/images/products/corporate-8.webp" },
  { id: 27, category: "Corporate", image: "/images/products/corporate-9.webp" },

  // HOSPITAL (9 Items)
  { id: 28, category: "Hospital", image: "/images/products/hospital-1.png" },
  { id: 29, category: "Hospital", image: "/images/products/hospital-2.png" },
  { id: 30, category: "Hospital", image: "/images/products/hospital-3.png" },
  { id: 31, category: "Hospital", image: "/images/products/hospital-4.webp" },
  { id: 32, category: "Hospital", image: "/images/products/hospital-5.webp" },
  { id: 33, category: "Hospital", image: "/images/products/hospital-6.webp" },
  { id: 34, category: "Hospital", image: "/images/products/hospital-7.png" },
  { id: 35, category: "Hospital", image: "/images/products/hospital-8.webp" },
  { id: 36, category: "Hospital", image: "/images/products/hospital-9.png" },

  // HOTELS (9 Items)
  { id: 37, category: "Hotels", image: "/images/products/hotel-1.png" },
  { id: 38, category: "Hotels", image: "/images/products/hotel-2.png" },
  { id: 39, category: "Hotels", image: "/images/products/hotel-3.png" },
  { id: 40, category: "Hotels", image: "/images/products/hotel-4.webp" },
  { id: 41, category: "Hotels", image: "/images/products/hotel-5.webp" },
  { id: 42, category: "Hotels", image: "/images/products/hotel-6.webp" },
  { id: 43, category: "Hotels", image: "/images/products/hotel-7.png" },
  { id: 44, category: "Hotels", image: "/images/products/hotel-8.png" },
  { id: 45, category: "Hotels", image: "/images/products/hotel-9.png" },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = PRODUCTS.filter(
    (product) => activeCategory === "All" || product.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[var(--color-bg-light)] dark:bg-[#0a0a0a] pt-32 pb-24 transition-colors duration-300">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--color-luxury-dark)] dark:text-white mb-6"
        >
          Our <span className="text-[var(--color-luxury-amber)]">Collections</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[var(--color-luxury-gray)] dark:text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Discover our premium range of uniforms and workwear crafted for excellence across various industries.
        </motion.p>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-8 py-3 rounded-full text-sm font-bold tracking-wider transition-all duration-300 ${activeCategory === category
                ? "text-white"
                : "text-[var(--color-luxury-gray)] dark:text-gray-400 hover:text-[var(--color-luxury-dark)] dark:hover:text-white bg-white/50 dark:bg-white/5 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 shadow-sm hover:shadow-md"
                }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-[var(--color-luxury-dark)] to-gray-800 dark:from-[var(--color-luxury-amber)] dark:to-yellow-600 rounded-full -z-10 shadow-lg shadow-[var(--color-luxury-dark)]/20 dark:shadow-[var(--color-luxury-amber)]/20"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={product.id}
              whileHover={{ y: -10 }}
              className="group relative rounded-[2rem] overflow-hidden bg-white dark:bg-zinc-900 shadow-md hover:shadow-2xl dark:shadow-none dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 cursor-pointer border border-gray-100 dark:border-zinc-800"
            >
              <div className="relative h-96 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt="Product Image"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Glowing Overlay on Hover */}
                <div className="absolute inset-0 bg-[var(--color-luxury-amber)]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-luxury-amber)] font-bold">
                    {product.category}
                  </div>
                  <div className="w-8 h-[1px] bg-[var(--color-luxury-amber)]"></div>
                </div>

                <div className="flex items-center gap-3 text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-x-4 group-hover:translate-x-0">
                  <span className="font-semibold tracking-wider uppercase text-xs">View Details</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-[var(--color-luxury-amber)] transition-colors duration-300">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </div>
  );
}

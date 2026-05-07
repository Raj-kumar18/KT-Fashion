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
  { id: 1, title: "Heritage School Blazer", category: "School", image: "/images/products/school-1.png" },
  { id: 2, title: "Primary Education Set", category: "School", image: "/images/products/school-2.png" },
  { id: 3, title: "Senior School Tie & Vest", category: "School", image: "/images/products/school-3.png" },
  { id: 4, title: "Active Sports Uniform", category: "School", image: "/images/products/school-4.png" },
  { id: 5, title: "Winter Wool Coat", category: "School", image: "/images/products/school-5.png" },
  { id: 6, title: "Summer Polo Collection", category: "School", image: "/images/products/school-6.png" },
  { id: 7, title: "Formal Assembly Attire", category: "School", image: "/images/products/school-7.png" },
  { id: 8, title: "Premium Pleated Skirt", category: "School", image: "/images/products/school-8.png" },
  { id: 9, title: "Boys Standard Trousers", category: "School", image: "/images/products/school-9.png" },

  // COLLEGES (9 Items)
  { id: 10, title: "University Varsity Jacket", category: "Colleges", image: "/images/products/college-1.png" },
  { id: 11, title: "Campus Casual Polo", category: "Colleges", image: "/images/products/college-2.png" },
  { id: 12, title: "Academic Honors Robe", category: "Colleges", image: "https://images.unsplash.com/photo-1523240795-c26f5aebfb6b?q=80&w=2000&auto=format&fit=crop" },
  { id: 13, title: "Athletic Team Kit", category: "Colleges", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop" },
  { id: 14, title: "College Society Blazer", category: "Colleges", image: "https://images.unsplash.com/photo-1525921429584-fa0f5ce27914?q=80&w=2000&auto=format&fit=crop" },
  { id: 15, title: "Engineering Workshop Apron", category: "Colleges", image: "https://images.unsplash.com/photo-1498075702571-ecb018f375f8?q=80&w=2000&auto=format&fit=crop" },
  { id: 16, title: "Medical Faculty Scrubs", category: "Colleges", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2000&auto=format&fit=crop" },
  { id: 17, title: "University Event Suit", category: "Colleges", image: "https://images.unsplash.com/photo-1456324505276-2e861a3375b4?q=80&w=2000&auto=format&fit=crop" },
  { id: 18, title: "Graduation Master Gown", category: "Colleges", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop" },

  // CORPORATE (9 Items)
  { id: 19, title: "Executive Suit Collection", category: "Corporate", image: "/images/products/corporate-1.png" },
  { id: 20, title: "Minimalist Office Shirt", category: "Corporate", image: "/images/products/corporate-2.png" },
  { id: 21, title: "Premium Boardroom Blazer", category: "Corporate", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop" },
  { id: 22, title: "Corporate Casual Wear", category: "Corporate", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=2000&auto=format&fit=crop" },
  { id: 23, title: "C-Level Silk Tie Set", category: "Corporate", image: "https://images.unsplash.com/photo-1507679622114-c104e7f3c64c?q=80&w=2000&auto=format&fit=crop" },
  { id: 24, title: "Women's Power Suit", category: "Corporate", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop" },
  { id: 25, title: "Tech Campus Hoodie", category: "Corporate", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2000&auto=format&fit=crop" },
  { id: 26, title: "Client Relations Dress", category: "Corporate", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2000&auto=format&fit=crop" },
  { id: 27, title: "Corporate Event Waistcoat", category: "Corporate", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop" },

  // HOSPITAL (9 Items)
  { id: 28, title: "Medical Scrubs Elite", category: "Hospital", image: "/images/products/hospital-1.png" },
  { id: 29, title: "Surgeon Pro Set", category: "Hospital", image: "/images/products/hospital-2.png" },
  { id: 30, title: "Head Nurse Tunic", category: "Hospital", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop" },
  { id: 31, title: "Lab Coat Classic", category: "Hospital", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" },
  { id: 32, title: "Hospitality Care Apron", category: "Hospital", image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2000&auto=format&fit=crop" },
  { id: 33, title: "Paramedic Field Jacket", category: "Hospital", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=2000&auto=format&fit=crop" },
  { id: 34, title: "Patient Care Polo", category: "Hospital", image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2000&auto=format&fit=crop" },
  { id: 35, title: "Pharmacy Dispenser Vest", category: "Hospital", image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=2000&auto=format&fit=crop" },
  { id: 36, title: "Therapist Comfort Wear", category: "Hospital", image: "https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=2000&auto=format&fit=crop" },

  // HOTELS (9 Items)
  { id: 37, title: "Luxury Concierge Uniform", category: "Hotels", image: "/images/products/hotel-1.png" },
  { id: 38, title: "Front Desk Blazer", category: "Hotels", image: "/images/products/hotel-2.png" },
  { id: 39, title: "Executive Chef Coat", category: "Hotels", image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2000&auto=format&fit=crop" },
  { id: 40, title: "Housekeeping Tunic", category: "Hotels", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2000&auto=format&fit=crop" },
  { id: 41, title: "Sommelier Apron", category: "Hotels", image: "https://images.unsplash.com/photo-1529604278261-8bfcb3cecfbc?q=80&w=2000&auto=format&fit=crop" },
  { id: 42, title: "Bellboy Vintage Suit", category: "Hotels", image: "https://images.unsplash.com/photo-1542314831-c6a4d142163b?q=80&w=2000&auto=format&fit=crop" },
  { id: 43, title: "Spa Attendant Kimono", category: "Hotels", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop" },
  { id: 44, title: "Valet Performance Jacket", category: "Hotels", image: "https://images.unsplash.com/photo-1550583726-b8db98bd4df1?q=80&w=2000&auto=format&fit=crop" },
  { id: 45, title: "Bartender Vest & Tie", category: "Hotels", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop" },
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
              className={`relative px-8 py-3 rounded-full text-sm font-bold tracking-wider transition-all duration-300 ${
                activeCategory === category
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
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Glowing Overlay on Hover */}
                <div className="absolute inset-0 bg-[var(--color-luxury-amber)]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-[1px] bg-[var(--color-luxury-amber)]"></div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-luxury-amber)] font-bold">
                    {product.category}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-md">{product.title}</h3>
                
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

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ARCHIVE_ITEMS = [
  {
    id: "corporate",
    title: "Corporate Elite",
    description: "Redefining professional presence with visionary precision.",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1995&auto=format&fit=crop", // Fashion model
    colSpan: "lg:col-span-2",
    rowSpan: "lg:row-span-2",
    href: "/corporate",
  },
  {
    id: "academic",
    title: "Academic Heritage",
    description: "",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2080&auto=format&fit=crop", // Academic style
    colSpan: "lg:col-span-1",
    rowSpan: "lg:row-span-1",
    href: "/schools",
  },
  {
    id: "hospitality",
    title: "Hospitality Pro",
    description: "",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop", // Chef/hospitality
    colSpan: "lg:col-span-1",
    rowSpan: "lg:row-span-1",
    href: "/manufacturing",
  },
];

export function SignatureArchive() {
  return (
    <section className="py-24 bg-[var(--color-luxury-navy)] dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-luxury-amber)] mb-4 font-semibold"
            >
              SIGNATURE ARCHIVE
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-white max-w-sm"
            >
              Curated for <br /> Global Leaders
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/corporate" className="text-[10px] tracking-widest uppercase text-white hover:text-[var(--color-luxury-amber)] transition-colors flex items-center gap-4 group">
              VIEW ALL SERIES
              <span className="w-12 h-[1px] bg-white/30 group-hover:bg-[var(--color-luxury-amber)] group-hover:w-16 transition-all duration-300"></span>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {ARCHIVE_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative rounded-3xl overflow-hidden bg-gray-900 ${item.colSpan} ${item.rowSpan}`}
            >
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-luxury-navy)]/90 via-[var(--color-luxury-navy)]/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 flex flex-col justify-end h-full">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-white mb-2">
                    {item.title}
                  </h3>
                  
                  {item.description && (
                    <p className="text-sm text-gray-300 font-[family-name:var(--font-outfit)] mb-6 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                      {item.description}
                    </p>
                  )}

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                    <Link href={item.href} className="btn-amber px-6 py-2 rounded-sm text-[10px] tracking-widest uppercase inline-block">
                      Explore Series
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

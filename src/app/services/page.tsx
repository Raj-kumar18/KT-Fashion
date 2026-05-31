"use client";

import { motion } from "framer-motion";
import { PenTool, Scissors, Shirt, Truck } from "lucide-react";

const SERVICES = [
  {
    id: "01",
    title: "Custom Design & Prototyping",
    description: "Our in-house design team collaborates with you to create unique uniform concepts that perfectly align with your brand identity.",
    icon: PenTool,
  },
  {
    id: "02",
    title: "Precision Tailoring",
    description: "Using advanced machinery and skilled artisans, we ensure every garment is crafted to exact specifications for a perfect fit.",
    icon: Scissors,
  },
  {
    id: "03",
    title: "Bulk Manufacturing",
    description: "Scalable production capabilities that maintain high-quality standards whether you need 100 or 100,000 pieces.",
    icon: Shirt,
  },
  {
    id: "04",
    title: "Global Logistics",
    description: "Streamlined supply chain management to deliver your uniforms worldwide, exactly when you need them.",
    icon: Truck,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-light)] dark:bg-[#0a0a0a] transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[var(--color-luxury-amber)]/30 bg-[var(--color-luxury-amber)]/10 text-[var(--color-luxury-amber)] text-xs uppercase tracking-widest font-semibold">
            Our Expertise
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--color-luxury-dark)] dark:text-white mb-6">
            End-to-End <br />
            <span className="text-[var(--color-luxury-amber)] italic font-light">Manufacturing</span>
          </h1>
          <p className="text-[var(--color-luxury-gray)] dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            From initial concept to final delivery, we provide a comprehensive suite of services to handle your entire uniform program with unmatched precision.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative p-10 bg-white dark:bg-zinc-900/80 backdrop-blur-sm rounded-[2rem] shadow-sm hover:shadow-2xl dark:shadow-none transition-all duration-500 overflow-hidden border border-gray-100 dark:border-zinc-800"
              >
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-[var(--color-luxury-amber)]/10 dark:bg-[var(--color-luxury-amber)]/20 rounded-full blur-3xl group-hover:bg-[var(--color-luxury-amber)]/30 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-[var(--color-luxury-dark)]/5 dark:bg-[var(--color-luxury-dark)]/50 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700" />
                
                <div className="relative z-10 flex items-start justify-between mb-8">
                  <div className="p-4 bg-[var(--color-bg-light)] dark:bg-zinc-800 rounded-2xl group-hover:bg-[var(--color-luxury-dark)] group-hover:text-white transition-colors duration-500 text-[var(--color-luxury-amber)] shadow-inner">
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <span className="text-5xl font-bold text-gray-100 dark:text-zinc-800 group-hover:text-[var(--color-luxury-amber)]/30 dark:group-hover:text-[var(--color-luxury-amber)]/20 transition-colors duration-500">
                    {service.id}
                  </span>
                </div>
                
                <h3 className="relative z-10 text-2xl font-bold text-[var(--color-luxury-dark)] dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="relative z-10 text-[var(--color-luxury-gray)] dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                
                <motion.div 
                  className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-[var(--color-luxury-amber)] to-yellow-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.2 + 0.5, ease: "easeOut" }}
                />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Video / Parallax Section (Placeholder for premium feel) */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[var(--color-luxury-dark)] dark:bg-black" />
        <div 
          className="absolute inset-0 opacity-40 mix-blend-luminosity bg-[url('https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-fixed"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
            Ready to elevate your brand?
          </h2>
          <button className="px-10 py-5 bg-white text-[var(--color-luxury-dark)] font-bold rounded-full hover:bg-[var(--color-luxury-amber)] hover:text-white transition-colors duration-300 shadow-xl hover:shadow-[var(--color-luxury-amber)]/50 uppercase tracking-widest text-sm">
            Start a Project
          </button>
        </motion.div>
      </section>
    </div>
  );
}

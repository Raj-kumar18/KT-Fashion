"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Map } from "lucide-react";
import Image from "next/image";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    subject: "Academic Uniform Consulting",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const messageText = `*New Inquiry from KT Fashion*
-----------------------------
*Name:* ${formData.name}
*Email:* ${formData.email}
*Institution:* ${formData.institution || "Not specified"}
*Subject:* ${formData.subject}
*Message:* ${formData.message}`;

    const whatsappNumber = "917033686328";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(messageText)}`;

    window.open(whatsappUrl, "_blank");
  };
  return (
    <div className="min-h-screen bg-[var(--color-bg-light)] dark:bg-[#0a0a0a] pt-32 relative overflow-hidden transition-colors duration-300">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[var(--color-luxury-amber)]/5 dark:bg-[var(--color-luxury-amber)]/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[var(--color-luxury-dark)]/5 dark:bg-[var(--color-luxury-amber)]/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-[var(--color-luxury-dark)] dark:text-white mb-6"
          >
            Get in <span className="text-[var(--color-luxury-amber)] italic">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-[var(--color-luxury-gray)] dark:text-gray-400 text-lg leading-relaxed"
          >
            Connect with our design atelier. Whether you represent a premier educational institution or a global corporation, our bespoke tailoring experts are ready to assist.
          </motion.p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 relative z-10">

          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl p-8 md:p-12 shadow-xl border border-white dark:border-zinc-800 rounded-3xl"
          >
            <h2 className="text-3xl font-bold text-[var(--color-luxury-dark)] dark:text-white mb-8">
              Send an Inquiry
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label className="text-[10px] tracking-[0.1em] uppercase text-[var(--color-luxury-gray)] dark:text-gray-400 group-focus-within:text-[var(--color-luxury-amber)] dark:group-focus-within:text-[var(--color-luxury-amber)] transition-colors font-bold">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alexander Thorne"
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-200 dark:border-zinc-700 text-sm dark:text-white focus:outline-none focus:border-[var(--color-luxury-amber)] dark:focus:border-[var(--color-luxury-amber)] transition-colors placeholder:text-gray-400 dark:placeholder:text-zinc-600"
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] tracking-[0.1em] uppercase text-[var(--color-luxury-gray)] dark:text-gray-400 group-focus-within:text-[var(--color-luxury-amber)] transition-colors font-bold">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alexander@premschool.com"
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-200 dark:border-zinc-700 text-sm dark:text-white focus:outline-none focus:border-[var(--color-luxury-amber)] transition-colors placeholder:text-gray-400 dark:placeholder:text-zinc-600"
                  />
                </div>
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] tracking-[0.1em] uppercase text-[var(--color-luxury-gray)] dark:text-gray-400 group-focus-within:text-[var(--color-luxury-amber)] transition-colors font-bold">Institution / Organization</label>
                <input
                  type="text"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  placeholder="St. James Academy"
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-200 dark:border-zinc-700 text-sm dark:text-white focus:outline-none focus:border-[var(--color-luxury-amber)] transition-colors placeholder:text-gray-400 dark:placeholder:text-zinc-600"
                />
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] tracking-[0.1em] uppercase text-[var(--color-luxury-gray)] dark:text-gray-400 group-focus-within:text-[var(--color-luxury-amber)] transition-colors font-bold">Subject of Interest</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-200 dark:border-zinc-700 text-sm dark:text-white focus:outline-none focus:border-[var(--color-luxury-amber)] transition-colors text-[var(--color-luxury-gray)] dark:text-white [&>option]:dark:bg-zinc-900"
                >
                  <option>Academic Uniform</option>
                  <option>Corporate Wardrobe Design</option>
                  <option>Hotel Attire</option>
                  <option>Healthcare Attire</option>
                </select>
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] tracking-[0.1em] uppercase text-[var(--color-luxury-gray)] dark:text-gray-400 group-focus-within:text-[var(--color-luxury-amber)] transition-colors font-bold">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can our designers assist you today?"
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-200 dark:border-zinc-700 text-sm dark:text-white focus:outline-none focus:border-[var(--color-luxury-amber)] transition-colors resize-none placeholder:text-gray-400 dark:placeholder:text-zinc-600"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-[var(--color-luxury-dark)] dark:bg-white text-white dark:text-[var(--color-luxury-dark)] rounded-full text-xs tracking-widest uppercase mt-4 hover:bg-[var(--color-luxury-amber)] dark:hover:bg-[var(--color-luxury-amber)] dark:hover:text-white transition-colors duration-300 shadow-lg shadow-[var(--color-luxury-dark)]/20 dark:shadow-white/10"
              >
                Submit Inquiry
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Atelier Details */}
            <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl p-8 md:p-10 shadow-xl border border-white dark:border-zinc-800 rounded-3xl">
              <h3 className="text-2xl font-bold text-[var(--color-luxury-dark)] dark:text-white mb-8">
                Atelier Details
              </h3>

              <div className="space-y-8">
                {[
                  { icon: MapPin, title: "Our Flagship Office", desc: "Ravi Sadan 1st Floor ,Road No 11\nNear Budha Dental College\nKanti Factory Road Mahatma Gandhi Nagar Patna 800020", href: null },
                  { icon: Phone, title: "Direct Line (WhatsApp)", desc: "+91 70336 86328", href: "https://wa.me/917033686328" },
                  { icon: Mail, title: "Email Inquiries", desc: "ktfashionbusiness@gmail.com", href: "mailto:kanchan05011989@gmail.com" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + (idx * 0.1) }}
                    className="flex gap-4 group cursor-pointer"
                    onClick={() => item.href && window.open(item.href, '_blank')}
                  >
                    <div className="w-12 h-12 rounded-full bg-[var(--color-luxury-amber)]/10 dark:bg-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-luxury-amber)] group-hover:text-white transition-colors duration-300 text-[var(--color-luxury-amber)]">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] tracking-[0.1em] uppercase text-[var(--color-luxury-dark)] dark:text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-[var(--color-luxury-gray)] dark:text-gray-400 leading-relaxed whitespace-pre-line group-hover:text-[var(--color-luxury-dark)] dark:group-hover:text-white transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>


          </motion.div>
        </div>



      </div>
    </div>
  );
}

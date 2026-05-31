"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/917033686328"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl shadow-[#25D366]/30 cursor-pointer overflow-hidden group"
      aria-label="Contact on WhatsApp"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
      <MessageCircle className="w-7 h-7 relative z-10" />
      
      {/* Ripple effect */}
      <div className="absolute inset-0 border-2 border-white rounded-full scale-100 opacity-0 group-hover:animate-ping"></div>
    </motion.a>
  );
}

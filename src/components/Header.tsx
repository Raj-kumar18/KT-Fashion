"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-sm py-4 border-b border-gray-100 dark:border-gray-800" 
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-[0.2em] text-[var(--color-luxury-dark)] dark:text-white">
          KTFASHION
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative text-[10px] tracking-widest uppercase transition-colors hover:text-[var(--color-luxury-amber)]",
                    isActive ? "text-[var(--color-luxury-dark)] dark:text-white font-semibold" : "text-[var(--color-luxury-gray)] dark:text-gray-400"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-2 left-0 right-0 h-[1px] bg-[var(--color-luxury-dark)] dark:bg-white"
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center gap-6 text-[var(--color-luxury-dark)] dark:text-white"
        >
          {mounted && (
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hover:text-[var(--color-luxury-amber)] transition-colors p-2 rounded-full bg-black/5 dark:bg-white/10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" strokeWidth={1.5} />
              ) : (
                <Moon className="w-5 h-5" strokeWidth={1.5} />
              )}
            </button>
          )}
        </motion.div>
      </div>
    </motion.header>
  );
}

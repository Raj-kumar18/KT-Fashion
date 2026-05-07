"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  { id: "details", title: "Project Details" },
  { id: "contact", title: "Contact Information" },
  { id: "success", title: "Transmission Complete" },
];

export function ConciergeForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    requirements: "",
    name: "",
    email: "",
  });

  const handleNext = () => {
    if (currentStep === 0 && (!formData.company || !formData.requirements)) {
      // Basic validation animation could be added here
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep(2); // Success step
    }, 2000);
  };

  const progress = ((currentStep + 1) / STEPS.length) * 100;

  return (
    <section id="contact" className="relative py-32 bg-[var(--color-deep-space)] overflow-hidden flex justify-center items-center">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[var(--color-electric-cyan)]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[var(--color-holographic-magenta)]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-orbitron)] text-white mb-4">
            Initiate Contact
          </h2>
          <p className="text-[var(--color-liquid-silver)] text-lg font-[family-name:var(--font-outfit)]">
            Our concierge will guide you through the customization process.
          </p>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Progress Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--color-electric-cyan)] to-[var(--color-holographic-magenta)] box-glow"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>

          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-[family-name:var(--font-syne)] text-white mb-8">
                  {STEPS[0].title}
                </h3>
                <div className="space-y-6">
                  <div className="relative group">
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white font-[family-name:var(--font-outfit)] focus:outline-none focus:border-[var(--color-electric-cyan)] transition-colors peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="company"
                      className="absolute left-4 top-4 text-white/50 font-[family-name:var(--font-outfit)] transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[var(--color-electric-cyan)] peer-focus:bg-[var(--color-deep-space)] peer-focus:px-2 [&:not(:placeholder-shown)]:-top-3 [&:not(:placeholder-shown)]:text-xs [&:not(:placeholder-shown)]:bg-[var(--color-deep-space)] [&:not(:placeholder-shown)]:px-2"
                    >
                      Company / Organization
                    </label>
                  </div>

                  <div className="relative group">
                    <textarea
                      id="requirements"
                      rows={4}
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white font-[family-name:var(--font-outfit)] focus:outline-none focus:border-[var(--color-electric-cyan)] transition-colors peer resize-none"
                      placeholder=" "
                    ></textarea>
                    <label
                      htmlFor="requirements"
                      className="absolute left-4 top-4 text-white/50 font-[family-name:var(--font-outfit)] transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[var(--color-electric-cyan)] peer-focus:bg-[var(--color-deep-space)] peer-focus:px-2 [&:not(:placeholder-shown)]:-top-3 [&:not(:placeholder-shown)]:text-xs [&:not(:placeholder-shown)]:bg-[var(--color-deep-space)] [&:not(:placeholder-shown)]:px-2"
                    >
                      Project Requirements
                    </label>
                  </div>

                  <div className="flex justify-end pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleNext}
                      className="bg-[var(--color-electric-cyan)]/20 text-[var(--color-electric-cyan)] border border-[var(--color-electric-cyan)]/50 hover:bg-[var(--color-electric-cyan)] hover:text-[var(--color-deep-space)] px-8 py-3 rounded-full font-[family-name:var(--font-syne)] font-bold transition-all flex items-center gap-2 group box-glow"
                    >
                      Proceed
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-[family-name:var(--font-syne)] text-white mb-8">
                  {STEPS[1].title}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white font-[family-name:var(--font-outfit)] focus:outline-none focus:border-[var(--color-electric-cyan)] transition-colors peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 top-4 text-white/50 font-[family-name:var(--font-outfit)] transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[var(--color-electric-cyan)] peer-focus:bg-[var(--color-deep-space)] peer-focus:px-2 [&:not(:placeholder-shown)]:-top-3 [&:not(:placeholder-shown)]:text-xs [&:not(:placeholder-shown)]:bg-[var(--color-deep-space)] [&:not(:placeholder-shown)]:px-2"
                    >
                      Full Name
                    </label>
                  </div>

                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white font-[family-name:var(--font-outfit)] focus:outline-none focus:border-[var(--color-electric-cyan)] transition-colors peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 top-4 text-white/50 font-[family-name:var(--font-outfit)] transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[var(--color-electric-cyan)] peer-focus:bg-[var(--color-deep-space)] peer-focus:px-2 [&:not(:placeholder-shown)]:-top-3 [&:not(:placeholder-shown)]:text-xs [&:not(:placeholder-shown)]:bg-[var(--color-deep-space)] [&:not(:placeholder-shown)]:px-2"
                    >
                      Comm-Link (Email)
                    </label>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(0)}
                      className="text-white/50 hover:text-white transition-colors px-4 py-2 font-[family-name:var(--font-outfit)]"
                    >
                      Back
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                      type="submit"
                      className="bg-gradient-to-r from-[var(--color-electric-cyan)] to-[var(--color-holographic-magenta)] text-white px-8 py-3 rounded-full font-[family-name:var(--font-syne)] font-bold transition-all flex items-center gap-2 group box-glow relative overflow-hidden"
                    >
                      {isSubmitting ? (
                        <>
                          Processing <Loader2 className="w-4 h-4 animate-spin" />
                        </>
                      ) : (
                        <>
                          Transmit <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                  className="w-24 h-24 rounded-full bg-[var(--color-electric-cyan)]/20 flex items-center justify-center mb-6 relative"
                >
                  <CheckCircle className="w-12 h-12 text-[var(--color-electric-cyan)]" />
                  {/* Particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-[var(--color-electric-cyan)] rounded-full"
                      initial={{ x: 0, y: 0, opacity: 1 }}
                      animate={{
                        x: Math.cos((i * Math.PI) / 3) * 60,
                        y: Math.sin((i * Math.PI) / 3) * 60,
                        opacity: 0,
                      }}
                      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    />
                  ))}
                </motion.div>
                <h3 className="text-3xl font-[family-name:var(--font-orbitron)] text-white mb-4 text-glow">
                  Transmission Successful
                </h3>
                <p className="text-[var(--color-liquid-silver)] font-[family-name:var(--font-outfit)]">
                  Our concierge team will establish a comm-link with you shortly.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setCurrentStep(0);
                    setFormData({ company: "", requirements: "", name: "", email: "" });
                  }}
                  className="mt-8 text-[var(--color-electric-cyan)] font-[family-name:var(--font-jetbrains)] text-sm uppercase tracking-wider hover:text-glow transition-all"
                >
                  Return to Dashboard
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

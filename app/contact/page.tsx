"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    setTimeout(() => {
      const subject = encodeURIComponent(`Inquiry: ${formData.subject}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:ahmedmasshoud929@gmail.com?subject=${subject}&body=${body}`;
      
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("success");
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1000); 
  };

  return (
    <section className="relative min-h-screen py-32 flex flex-col items-center justify-center overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-aurora-blue via-aurora-purple to-aurora-red rounded-full blur-[150px] opacity-20 pointer-events-none animate-pulse-slow" />

      <div className="max-w-4xl mx-auto w-full px-4 md:px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-aurora-red/30 bg-aurora-red/10 backdrop-blur-md mb-6 shadow-sm dark:shadow-[0_0_20px_rgba(217,4,41,0.2)]"
          >
            <Mail className="w-5 h-5 text-aurora-red drop-shadow-sm dark:drop-shadow-md" />
            <span className="text-gray-900 dark:text-white text-xs uppercase tracking-[0.2em] font-bold">Initialize Comms</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white drop-shadow-sm dark:drop-shadow-md">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-purple to-aurora-red">Touch</span>
          </h2>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-lg font-medium text-lg drop-shadow-none dark:drop-shadow-md">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="glass-vibrant p-2 rounded-3xl relative overflow-hidden group hover:shadow-[0_0_50px_rgba(123,44,191,0.3)] transition-shadow duration-500"
        >
          <div className="bg-white/80 dark:bg-[#030014]/80 backdrop-blur-3xl rounded-2xl p-5 sm:p-8 md:p-12 relative z-10 w-full border border-gray-200 dark:border-white/10">

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {submitStatus === "success" && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 border border-green-500/50 bg-green-50 dark:bg-green-500/20 backdrop-blur-md rounded-xl flex items-start gap-3 shadow-sm dark:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400 shrink-0 mt-0.5" />
                  <p className="text-green-800 dark:text-green-100 text-sm font-bold tracking-wide">Message prepared. Your email client has been opened.</p>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 group/input">
                  <label className="text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-widest pl-1 group-focus-within/input:text-aurora-blue transition-colors">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-gray-900 dark:text-white focus:outline-none focus:border-aurora-blue/50 focus:bg-white dark:focus:bg-aurora-blue/5 focus:shadow-[0_0_15px_rgba(0,85,255,0.2)] transition-all font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2 group/input">
                  <label className="text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-widest pl-1 group-focus-within/input:text-aurora-purple transition-colors">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-gray-900 dark:text-white focus:outline-none focus:border-aurora-purple/50 focus:bg-white dark:focus:bg-aurora-purple/5 focus:shadow-[0_0_15px_rgba(123,44,191,0.2)] transition-all font-medium"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2 group/input">
                <label className="text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-widest pl-1 group-focus-within/input:text-aurora-red transition-colors">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-gray-900 dark:text-white focus:outline-none focus:border-aurora-red/50 focus:bg-white dark:focus:bg-aurora-red/5 focus:shadow-[0_0_15px_rgba(217,4,41,0.2)] transition-all font-medium"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2 group/input">
                <label className="text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-widest pl-1 group-focus-within/input:text-aurora-blue transition-colors">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-gray-900 dark:text-white focus:outline-none focus:border-aurora-blue/50 focus:bg-white dark:focus:bg-aurora-blue/5 focus:shadow-[0_0_15px_rgba(0,85,255,0.2)] transition-all resize-none font-medium"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="pt-4 md:pt-6 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group/btn relative w-full md:w-auto px-6 md:px-10 py-4 md:py-5 bg-gray-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-xs md:text-sm rounded-full disabled:opacity-50 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95"
                >
                  <div className="relative z-10 flex items-center justify-center gap-3 group-hover/btn:text-white transition-colors duration-300">
                    <span>
                      {isSubmitting ? "Processing..." : "Transmit Message"}
                    </span>
                    {!isSubmitting && <Send className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-1 transition-transform" />}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r from-aurora-blue to-aurora-purple transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out z-0`} />
                </button>
              </div>

            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

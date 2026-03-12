"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Terminal, ShieldAlert } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    setTimeout(() => {
      const subject = encodeURIComponent(`Secure Comms: ${formData.subject}`);
      const body = encodeURIComponent(`Sender: ${formData.name}\nRelay: ${formData.email}\n\nPayload:\n${formData.message}`);
      window.location.href = `mailto:ahmedmasshoud929@gmail.com?subject=${subject}&body=${body}`;
      
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("success");
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1000); 
  };

  return (
    <section className="relative min-h-screen py-32 flex flex-col items-center justify-center">
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-neon-magenta/10 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto w-full px-4 md:px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border-neon-magenta/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-neon-magenta animate-pulse" />
            <span className="text-neon-magenta font-mono text-sm uppercase tracking-widest font-bold">Secure Channel Open</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
            Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta to-neon-purple pb-2">Contact</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-1 md:p-1.5 rounded-3xl border border-white/10 relative overflow-hidden group shadow-[0_0_50px_rgba(255,0,255,0.05)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="bg-[#050505] rounded-[20px] p-6 md:p-12 relative z-10 w-full">
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5 text-neon-magenta hidden sm:block" />
                <span className="font-mono text-xs sm:text-sm text-gray-400 tracking-widest uppercase">system_relay.sh</span>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-neon-magenta/50 shadow-[0_0_10px_rgba(255,0,255,0.8)]" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {submitStatus === "success" && (
                <div className="p-4 border border-neon-cyan/50 bg-neon-cyan/10 rounded-lg flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                  <p className="text-neon-cyan font-mono text-sm">Transmission successful. Local mail client initialized with encrypted payload.</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">Entity Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white font-mono focus:outline-none focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(255,0,255,0.2)] transition-all"
                    placeholder="ENTER NAME"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">Return Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white font-mono focus:outline-none focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(255,0,255,0.2)] transition-all"
                    placeholder="ENTER EMAIL"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">Subject Protocol</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white font-mono focus:outline-none focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(255,0,255,0.2)] transition-all"
                  placeholder="ENTER SUBJECT"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">Message Payload</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white font-mono focus:outline-none focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(255,0,255,0.2)] transition-all resize-none"
                  placeholder="ENTER TRANSMISSION DATA..."
                />
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full md:w-auto relative px-8 py-4 bg-neon-magenta text-black font-bold uppercase tracking-widest overflow-hidden rounded disabled:opacity-50 flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    {isSubmitting ? "Transmitting..." : "Send Transmission"}
                  </span>
                  {!isSubmitting && <Send className="relative z-10 w-4 h-4 group-hover:text-white transition-colors duration-300" />}
                  <div className="absolute inset-0 bg-[#050505] border border-neon-magenta transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                </button>
              </div>

            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

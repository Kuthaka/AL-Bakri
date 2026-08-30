"use client";

import { motion } from "framer-motion";

export function TheQuestion() {
  return (
    <section className="py-32 px-6 md:px-12 bg-ivory text-dark-green relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-24 relative z-10">
        
        {/* Left Column - Large Statement */}
        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-8 border border-dark-green/20 rounded-full px-4 py-2">
              01 / The Question
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] uppercase">
              Where<br />
              Does<br />
              <span className="text-leaf italic font-serif lowercase">Freshness</span><br />
              Begin?
            </h2>
          </motion.div>
        </div>

        {/* Right Column - Explanation & Image */}
        <div className="md:w-1/2 pt-8 md:pt-32 flex flex-col gap-12">
          <motion.p 
            className="text-2xl md:text-3xl font-medium leading-relaxed text-dark-green/80 text-balance"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            It begins long before it reaches your kitchen, your store, or your business. It begins with the soil, the care, and the relentless pursuit of quality.
          </motion.p>

          <motion.div
            className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <img 
              src="/fruits/Large_Red_Apples_PNG_Clipart.png" 
              alt="Hands harvesting fresh produce from rich soil" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-dark-green/10 mix-blend-overlay" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

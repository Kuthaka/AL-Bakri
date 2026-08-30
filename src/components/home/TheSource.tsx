"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function TheSource() {
  return (
    <section className="py-24 px-6 md:px-12 bg-ivory text-dark-green relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24 relative z-10">
        
        {/* Right Column (Visuals) */}
        <div className="w-full md:w-3/5 relative">
          <motion.div
            className="aspect-[4/3] w-full rounded-2xl overflow-hidden relative z-10"
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img 
              src="/fruits/pngtree-delicious-black-grapes-png-image_20004046.png" 
              alt="Lush agricultural farmland" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            className="absolute -bottom-12 -left-12 w-2/3 aspect-[4/5] rounded-2xl overflow-hidden z-20 border-4 border-ivory hidden md:block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <img 
              src="/fruits/152571-photos-black-grapes-download-hd.png" 
              alt="Fresh harvested tomatoes" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Left Column (Text) */}
        <div className="w-full md:w-2/5 mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-8 border border-dark-green/20 rounded-full px-4 py-2">
              02 / The Source
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">
              It Starts<br />
              <span className="text-leaf">At The</span><br />
              Source.
            </h2>
            <p className="text-lg md:text-xl text-dark-green/70 mb-10 leading-relaxed text-pretty">
              We partner directly with trusted growers across premium agricultural regions. Our sourcing philosophy is built on respect for the land, sustainable practices, and an uncompromising standard for quality right from the root.
            </p>
            
            <Link
              href="/about"
              className="group flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-dark-green border-b-2 border-dark-green/20 pb-1 hover:border-dark-green transition-colors"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

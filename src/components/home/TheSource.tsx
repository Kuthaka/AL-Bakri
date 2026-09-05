"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function TheSource() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const y3 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={containerRef} className="bg-ivory text-dark-green relative py-20 sm:py-24 md:py-32 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left: Content Text */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-5 md:gap-6 z-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase border border-dark-green/20 rounded-full px-5 py-2.5"
          >
            02 / The Source
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase leading-[0.95]"
          >
            It Starts<br />
            <span className="text-leaf">At The</span><br />
            Source.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-dark-green/80 max-w-lg leading-relaxed text-balance"
          >
            We partner directly with trusted growers. Our sourcing philosophy is built on respect for the land, sustainable practices, and an uncompromising standard for quality.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-dark-green border-b-2 border-dark-green/20 pb-1 hover:border-dark-green transition-colors mt-4"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>

        {/* Right: Parallax Image Stack */}
        <div className="w-full md:w-1/2 h-[380px] sm:h-[450px] md:h-[520px] lg:h-[580px] relative flex items-center justify-center pointer-events-none mt-6 md:mt-0">
          <motion.div 
            style={{ y: y1 }}
            className="absolute right-0 top-0 w-[55%] md:w-[48%] aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-dark-green/5 border border-dark-green/10"
          >
             <img src="/fruits/pngtree-delicious-black-grapes-png-image_20004046.png" className="w-full h-full object-cover" alt="Source" />
          </motion.div>
          
          <motion.div 
            style={{ y: y2 }}
            className="absolute left-2 sm:left-6 md:left-4 top-[24%] sm:top-[26%] w-[48%] md:w-[42%] aspect-square rounded-full overflow-hidden shadow-2xl bg-ivory border border-dark-green/10 p-4 sm:p-6 md:p-8 backdrop-blur-sm z-10"
          >
             <img src="/fruits/Large_Red_Apples_PNG_Clipart.png" className="w-full h-full object-contain" alt="Apples" />
          </motion.div>
          
          <motion.div 
            style={{ y: y3 }}
            className="absolute right-[12%] bottom-2 md:bottom-4 w-[46%] md:w-[40%] aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-dark-green/5 border border-dark-green/5"
          >
             <img src="/fruits/152571-photos-black-grapes-download-hd.png" className="w-full h-full object-cover p-3 sm:p-5 md:p-6" alt="Grapes" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

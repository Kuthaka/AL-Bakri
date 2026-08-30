"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function TheSource() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section ref={containerRef} className="bg-ivory text-dark-green relative h-[300vh]">
      <div className="sticky top-0 min-h-[100svh] overflow-hidden flex flex-col md:flex-row items-center px-6 md:px-12 py-24 md:py-0">
        
        {/* Left: Sticky Text */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-6 md:gap-8 z-20 relative h-full">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold tracking-widest uppercase border border-dark-green/20 rounded-full px-6 py-3"
          >
            02 / The Source
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter uppercase leading-[0.85]"
          >
            It Starts<br />
            <span className="text-leaf">At The</span><br />
            Source.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-dark-green/80 max-w-lg leading-relaxed text-balance mt-4"
          >
            We partner directly with trusted growers. Our sourcing philosophy is built on respect for the land, sustainable practices, and an uncompromising standard for quality.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              href="/about"
              className="group flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-dark-green border-b-2 border-dark-green/20 pb-1 hover:border-dark-green transition-colors mt-8"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>

        {/* Right: Parallax Image Stack */}
        <div className="w-full md:w-1/2 h-[150vh] absolute md:relative right-0 flex items-start justify-center pointer-events-none opacity-30 md:opacity-100 mix-blend-multiply md:mix-blend-normal">
          <motion.div 
            style={{ y: y1 }}
            className="absolute right-[10%] top-[10%] w-[60%] md:w-[45%] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-dark-green/5 border border-dark-green/10"
          >
             <img src="/fruits/pngtree-delicious-black-grapes-png-image_20004046.png" className="w-full h-full object-cover" alt="Source" />
          </motion.div>
          
          <motion.div 
            style={{ y: y2 }}
            className="absolute right-[40%] top-[40%] w-[40%] md:w-[30%] aspect-square rounded-full overflow-hidden shadow-2xl bg-ivory border border-dark-green/10 p-8 backdrop-blur-sm z-10"
          >
             <img src="/fruits/Large_Red_Apples_PNG_Clipart.png" className="w-full h-full object-contain" alt="Apples" />
          </motion.div>
          
          <motion.div 
            style={{ y: y3 }}
            className="absolute right-[20%] top-[70%] w-[50%] md:w-[40%] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-dark-green/5 border border-dark-green/5"
          >
             <img src="/fruits/152571-photos-black-grapes-download-hd.png" className="w-full h-full object-cover p-8" alt="Grapes" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

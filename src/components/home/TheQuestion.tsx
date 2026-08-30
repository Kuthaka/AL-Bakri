"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function TheQuestion() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["5%", "-25%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-25%", "5%"]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-32 md:py-64 bg-dark-green text-ivory relative overflow-hidden">
      
      {/* Background massive typography (Parallax scrolling) */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none z-0">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap flex gap-8 opacity-10">
          <span className="text-[20vw] font-bold tracking-tighter uppercase leading-none">Where Does Freshness Begin?</span>
          <span className="text-[20vw] font-bold tracking-tighter uppercase leading-none">Where Does Freshness Begin?</span>
        </motion.div>
        <motion.div style={{ x: x2 }} className="whitespace-nowrap flex gap-8 opacity-20">
          <span 
            className="text-[20vw] font-bold tracking-tighter uppercase leading-none text-transparent"
            style={{ WebkitTextStroke: "2px rgba(255, 255, 240, 1)" }}
          >
            Where Does Freshness Begin?
          </span>
          <span 
            className="text-[20vw] font-bold tracking-tighter uppercase leading-none text-transparent"
            style={{ WebkitTextStroke: "2px rgba(255, 255, 240, 1)" }}
          >
            Where Does Freshness Begin?
          </span>
        </motion.div>
      </div>

      {/* Foreground Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center gap-12">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-sm font-semibold tracking-widest uppercase border border-ivory/20 rounded-full px-6 py-3"
        >
          01 / The Question
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] uppercase max-w-4xl text-balance"
        >
          It begins long before it reaches your kitchen. <br />
          <span className="text-leaf italic font-serif lowercase">It begins with the soil.</span>
        </motion.h2>
        
        <motion.div 
          style={{ y }}
          className="w-full max-w-lg aspect-square rounded-full overflow-hidden mt-16 relative bg-ivory/5 shadow-2xl p-12 backdrop-blur-sm border border-ivory/10"
        >
          <motion.img 
            src="/fruits/Large_Red_Apples_PNG_Clipart.png"
            className="w-full h-full object-contain"
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </section>
  );
}

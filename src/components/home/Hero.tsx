"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  return (
    <section className="relative min-h-[100svh] flex flex-col md:flex-row items-center justify-center overflow-hidden pt-24 pb-28 md:pt-20 md:pb-0">
      
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory to-ivory/50 z-0" />

      {/* ─── MOBILE LAYOUT: Vertical Stack ─── */}
      <div className="relative z-10 w-full flex flex-col items-center gap-10 px-6 md:hidden">
        
        {/* Mobile: Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <span className="uppercase tracking-[0.2em] text-[10px] font-semibold text-dark-green/60 mb-4">
            Al Bakri Fresh Produce
          </span>
          
          <h1 className="text-[2.75rem] font-bold tracking-tighter leading-[0.85] text-dark-green uppercase">
            <span className="block">Freshness,</span>
            <span className="block text-leaf">With a</span>
            <span className="block">Purpose.</span>
          </h1>
          
          <p className="mt-6 text-[15px] text-dark-green/70 max-w-xs font-medium text-balance leading-relaxed">
            From the source, delivered with care. Your trusted produce partner for businesses worldwide.
          </p>
        </motion.div>

        {/* Mobile: Produce Image Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative w-[220px] h-[220px]"
        >
          <div className="absolute inset-0 rounded-full border border-dark-green/10 bg-dark-green/[0.03]" />
          <img
            src="/fruits/Large_Red_Apples_PNG_Clipart.png"
            alt="Premium Produce"
            className="w-full h-full object-contain p-8"
          />
        </motion.div>

        {/* Mobile: Floating Badges (visible on mobile!) */}
        <motion.div 
          className="flex items-center gap-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center gap-2 bg-ivory/80 backdrop-blur-sm px-4 py-2 rounded-full border border-dark-green/10 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-leaf animate-pulse" />
            <span className="text-[10px] font-medium uppercase tracking-wider text-dark-green/80">Premium Quality</span>
          </div>
          <div className="flex items-center gap-2 bg-ivory/80 backdrop-blur-sm px-4 py-2 rounded-full border border-dark-green/10 shadow-sm">
            <span className="text-[10px] font-medium uppercase tracking-wider text-dark-green/80">Global Supply</span>
          </div>
        </motion.div>
      </div>

      {/* ─── DESKTOP LAYOUT: Overlapping Editorial ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full hidden md:flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="uppercase tracking-[0.2em] text-sm font-semibold text-dark-green/60 mb-6">
            Al Bakri Fresh Produce
          </span>
          
          <h1 className="text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.85] text-dark-green uppercase">
            <span className="block">Freshness,</span>
            <span className="block text-leaf">With a</span>
            <span className="block">Purpose.</span>
          </h1>
          
          <p className="mt-12 text-xl text-dark-green/70 max-w-xl font-medium text-balance">
            From the source, delivered with care. Your trusted produce partner for businesses worldwide.
          </p>
        </motion.div>
      </div>

      {/* Desktop: Floating Produce Image */}
      <motion.div 
        className="absolute z-20 w-full h-full inset-0 pointer-events-none hidden md:flex items-center justify-center mt-20"
        style={{ y: y1 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="relative flex items-center justify-center w-[450px] h-[450px] lg:w-[600px] lg:h-[600px] rounded-full shadow-2xl shadow-dark-green/20"
          style={{ scale }}
        >
          <div className="absolute inset-0 rounded-full border border-dark-green/10 bg-ivory/5" />
          <img
            src="/fruits/Large_Red_Apples_PNG_Clipart.png"
            alt="Premium Produce"
            className="w-[60%] h-[60%] object-contain relative z-10"
          />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 md:gap-4 cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight * 0.9,
            behavior: "smooth"
          });
        }}
      >
        <span className="text-[9px] md:text-xs uppercase tracking-widest font-semibold text-dark-green/60 group-hover:text-dark-green transition-colors">
          Explore
        </span>
        <div className="w-[1px] h-8 md:h-12 bg-dark-green/20 overflow-hidden relative">
          <motion.div 
            className="w-full h-full bg-dark-green absolute top-0 left-0 origin-top"
            animate={{
              y: ["-100%", "100%"]
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear"
            }}
          />
        </div>
        <div className="bg-ivory rounded-full p-1.5 md:p-2 border border-dark-green/10 group-hover:bg-leaf group-hover:text-ivory group-hover:border-leaf transition-all duration-300">
           <ArrowDown className="w-3.5 h-3.5 md:w-4 md:h-4" />
        </div>
      </motion.div>

      {/* Desktop-only Floating Labels */}
      <motion.div
        className="absolute top-1/4 right-[10%] hidden lg:flex items-center gap-3 bg-ivory/80 backdrop-blur-sm px-4 py-2 rounded-full border border-dark-green/10 shadow-sm z-30"
        style={{ y: y2 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="w-2 h-2 rounded-full bg-leaf animate-pulse" />
        <span className="text-xs font-medium uppercase tracking-wider text-dark-green/80">Premium Quality</span>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-[10%] hidden lg:flex items-center gap-3 bg-ivory/80 backdrop-blur-sm px-4 py-2 rounded-full border border-dark-green/10 shadow-sm z-30"
        style={{ y: y1 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <span className="text-xs font-medium uppercase tracking-wider text-dark-green/80">Global Supply</span>
      </motion.div>
    </section>
  );
}

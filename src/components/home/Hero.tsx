"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Leaf, Droplet } from "lucide-react";

const MARQUEE_ITEMS = [
  { text: "Avocado", icon: "/products/avacado.png" },
  { text: "Pineapple", icon: "/products/pineapple.png" },
  { text: "Mango", icon: "/products/mango.png" },
  { text: "Papaya", icon: "/products/papaya.png" },
];

interface HeroProps {
  isLoaded?: boolean;
}

export function Hero({ isLoaded = true }: HeroProps) {
  return (
    <section className="relative w-full h-screen h-[100dvh] max-h-[100dvh] flex flex-col justify-between overflow-hidden select-none bg-dark-green">
      
      {/* ─── FULL-SCREEN HERO BACKGROUND (Edge-to-edge coverage) ─── */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.08 }}
        animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.08 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0 pointer-events-none select-none"
      >
        <img 
          src="/bg/bg-002.webp" 
          alt="Lush Farm Fields" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
      </motion.div>

      {/* ─── DESKTOP BACKGROUND TEXT (Hidden on mobile) ─── */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        animate={isLoaded ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 35 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:flex absolute inset-0 z-[1] flex-col items-center justify-center pointer-events-none select-none overflow-hidden -translate-y-16 lg:-translate-y-20 xl:-translate-y-24"
      >
        <h1 className="font-sans font-black tracking-tighter uppercase leading-[0.85] text-white whitespace-nowrap text-center flex flex-col items-center w-full drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
          <span className="md:text-[5vw] lg:text-[4.5rem] xl:text-[5.5rem] tracking-tight lg:-ml-28">
            NATURE
          </span>
          <span className="md:text-[8.5vw] lg:text-[7.5rem] xl:text-[9rem]">
            PURE FRESH
          </span>
        </h1>
      </motion.div>

      {/* ─── MOBILE VIEW CONTENT (Full coverage, zero overflow, perfectly proportioned) ─── */}
      <div className="flex md:hidden flex-col items-center justify-center flex-1 min-h-0 w-full px-4 pt-16 pb-2 z-10 gap-2 sm:gap-2.5 my-auto">
        
        {/* 1. Main Headline */}
        <motion.div 
          initial={{ opacity: 0, y: -18 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -18 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center font-sans font-black tracking-tighter uppercase leading-[0.88] text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.6)]"
        >
          <span className="text-[clamp(1.6rem,6vw,2.4rem)] tracking-tight">NATURE</span>
          <span className="text-[clamp(2.3rem,9.5vw,3.5rem)] tracking-tighter">PURE FRESH</span>
        </motion.div>

        {/* 2. Review Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.55, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full py-1 px-3.5 border border-white/15 shadow-md"
        >
          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center p-0.5 overflow-hidden shadow-inner">
            <img src="/products/avacado.png" alt="Review" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col items-start leading-none">
            <div className="flex items-center gap-1 text-[#AAFFC7] font-bold text-xs">
              <Star className="w-2.5 h-2.5 fill-[#FF653F] text-[#FF653F]" /> 4.9
            </div>
            <span className="text-[7.5px] uppercase tracking-wider font-semibold text-[#EDE9E6] mt-0.5">150k (Reviews)</span>
          </div>
        </motion.div>

        {/* 3. Description Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 12 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.55, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11.5px] sm:text-xs text-[#EDE9E6] font-medium text-center max-w-[290px] sm:max-w-[320px] leading-relaxed drop-shadow-sm"
        >
          Crafted from carefully selected tropical fruits, our produce delivers authentic flavor, natural freshness, and uncompromising quality in every bite.
        </motion.p>

        {/* 4. Complete Stats & Features Box */}
        <motion.div 
          initial={{ opacity: 0, y: 14 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.6, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[320px] sm:max-w-sm bg-black/35 backdrop-blur-md rounded-xl p-2 sm:p-2.5 border border-white/15 flex flex-col gap-1.5 shadow-lg"
        >
          {/* Header: Rich In Fruits Vitamins */}
          <div className="flex items-center justify-between border-b border-white/10 pb-1 px-1">
            <span className="text-[9.5px] sm:text-[10.5px] font-bold text-[#AAFFC7] uppercase tracking-wider">
              Rich In Fruits &amp; Vitamins
            </span>
            <span className="text-[8.5px] sm:text-[9.5px] text-[#EDE9E6]/80 font-medium">
              100% Authentic
            </span>
          </div>

          {/* 3 Metrics Row */}
          <div className="grid grid-cols-3 gap-1.5 items-center text-center">
            {/* Metric 1: 100% Natural */}
            <div className="flex flex-col items-center justify-center py-1 px-0.5 bg-white/5 rounded-lg border border-white/5">
              <span className="text-sm sm:text-base font-bold tracking-tight text-[#FF653F] leading-none">100%</span>
              <span className="text-[8px] sm:text-[9px] font-semibold text-[#AAFFC7] mt-0.5 leading-tight">Natural Produce</span>
            </div>

            {/* Metric 2: 12+ Fruits */}
            <div className="flex flex-col items-center justify-center py-1 px-0.5 bg-white/5 rounded-lg border border-white/5">
              <div className="flex items-center gap-1 leading-none">
                <Leaf className="w-2 h-2 text-[#AAFFC7]" />
                <span className="font-bold text-[#FF653F] text-xs sm:text-sm">12+</span>
              </div>
              <span className="text-[8px] sm:text-[9px] font-semibold text-[#EDE9E6] uppercase mt-0.5 leading-tight">Fruits</span>
            </div>

            {/* Metric 3: 0% Added Sugar */}
            <div className="flex flex-col items-center justify-center py-1 px-0.5 bg-white/5 rounded-lg border border-white/5">
              <div className="flex items-center gap-1 leading-none">
                <Droplet className="w-2 h-2 text-[#AAFFC7]" />
                <span className="font-bold text-[#FF653F] text-xs sm:text-sm">0%</span>
              </div>
              <span className="text-[8px] sm:text-[9px] font-semibold text-[#EDE9E6] uppercase mt-0.5 leading-tight">Added Sugar</span>
            </div>
          </div>
        </motion.div>

        {/* 5. Order Now Button */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.55, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center w-full pt-0.5"
        >
          <Link
            href="/products"
            className="bg-white text-dark-green hover:bg-white/90 px-8 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all shadow-lg active:scale-95"
          >
            Order Now
          </Link>
        </motion.div>

      </div>

      {/* ─── DESKTOP VIEW CONTENT (Edge-to-edge coverage, no bezel borders) ─── */}
      <div className="hidden md:flex relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full flex-1 min-h-0 flex-row items-center justify-between my-auto gap-8 lg:gap-12 pt-20">
        
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="w-1/3 flex flex-col items-start text-left gap-4 lg:gap-5"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl lg:text-4xl font-bold tracking-tight text-[#FF653F]">100%</span>
            <span className="text-xs lg:text-sm font-semibold leading-tight text-[#AAFFC7] text-left">Natural<br/>Fresh Produce</span>
          </div>
          <p className="text-xs lg:text-sm text-[#EDE9E6] font-medium max-w-[280px] leading-relaxed">
            Crafted from carefully selected tropical fruits, our produce delivers authentic flavor, natural freshness, and uncompromising quality in every bite.
          </p>
          <Link
            href="/products"
            className="bg-white text-dark-green hover:bg-white/90 px-7 py-2.5 lg:py-3 rounded-full text-xs lg:text-sm font-bold tracking-wide transition-all shadow-lg hover:-translate-y-0.5"
          >
            Order Now
          </Link>
        </motion.div>

        {/* Center Spacer */}
        <div className="w-1/3 pointer-events-none" />

        {/* Right Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-1/3 flex flex-col items-end text-right gap-5 lg:gap-6 z-20"
        >
          
          {/* Review Badge */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full p-1.5 px-4 pr-5 border border-white/15 shadow-md">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center p-1.5 overflow-hidden shadow-inner">
              <img src="/products/avacado.png" alt="Review" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1 text-[#AAFFC7] font-bold text-base lg:text-lg">
                <Star className="w-3.5 h-3.5 fill-[#FF653F] text-[#FF653F]" /> 4.9
              </div>
              <span className="text-[9px] lg:text-[10px] uppercase tracking-wider font-semibold text-[#EDE9E6]">150k (Reviews)</span>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col items-start gap-2.5 lg:gap-3 text-left">
            <h3 className="text-[#AAFFC7] font-bold text-xs lg:text-sm mb-0.5">Rich In Fruits<br/>Vitamins</h3>
            
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#AAFFC7]/15 border border-[#AAFFC7]/30 flex items-center justify-center">
                <Leaf className="w-3.5 h-3.5 text-[#AAFFC7]" />
              </div>
              <div>
                <span className="block font-bold text-[#FF653F] text-xs">12+</span>
                <span className="text-[9px] font-semibold text-[#EDE9E6] uppercase">Fruits</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#AAFFC7]/15 border border-[#AAFFC7]/30 flex items-center justify-center">
                <Droplet className="w-3.5 h-3.5 text-[#AAFFC7]" />
              </div>
              <div>
                <span className="block font-bold text-[#FF653F] text-xs">0%</span>
                <span className="text-[9px] font-semibold text-[#EDE9E6] uppercase">Added Sugar</span>
              </div>
            </div>
          </div>

        </motion.div>
      </div>

      {/* ─── BOTTOM FLOWING MARQUEE (Flush with bottom viewport edge) ─── */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
        transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-dark-green py-2 md:py-2.5 border-t border-white/10 relative z-30 overflow-hidden flex items-center shadow-md mt-auto shrink-0"
      >
        <motion.div
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 16 }}
          className="flex items-center gap-6 md:gap-10 w-max"
        >
          {/* Duplicate for seamless looping */}
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 md:gap-3.5 pr-3 md:pr-5">
              <span className="whitespace-nowrap text-xs sm:text-sm md:text-base font-bold tracking-tight text-[#FAFFCB]">{item.text}</span>
              <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center p-1 shadow-sm border border-black/5 shrink-0">
                <img src={item.icon} alt="Icon" className="w-full h-full object-contain" />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

    </section>
  );
}

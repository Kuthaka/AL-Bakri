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

export function Hero() {
  return (
    <section className="relative h-[100dvh] max-h-[100dvh] w-full bg-[#FAFFCB] p-2.5 sm:p-3.5 md:p-5 lg:p-6 flex flex-col overflow-hidden select-none">
      
      {/* ─── INNER CONTAINER WITH 4-SIDED CURVY BEZEL EDGES ─── */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex-1 min-h-0 w-full rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden flex flex-col justify-between pt-16 sm:pt-20 md:pt-20 lg:pt-24 pb-0 shadow-lg border border-black/5 bg-dark-green"
      >
        
        {/* ─── HERO BACKGROUND VIDEO (Repeat mode, without sound) ─── */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source src="/bg/bg-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* ─── DESKTOP BACKGROUND TEXT (Hidden on mobile) ─── */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 0.9, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex absolute inset-0 z-[1] flex-col items-center justify-center pointer-events-none select-none overflow-hidden -translate-y-24 lg:-translate-y-32 xl:-translate-y-36"
        >
          <h1 className="font-sans font-black tracking-tighter uppercase leading-[0.85] text-white whitespace-nowrap text-center flex flex-col items-center w-full drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            <span className="md:text-[5vw] lg:text-[4.5rem] xl:text-[5.25rem] tracking-tight lg:-ml-28">
              NATURE
            </span>
            <span className="md:text-[8.5vw] lg:text-[7.5rem] xl:text-[8.75rem]">
              PURE FRESH
            </span>
          </h1>
        </motion.div>

        {/* ─── MOBILE VIEW CONTENT (Centered & balanced, no overflow) ─── */}
        <div className="flex md:hidden flex-col items-center justify-between flex-1 min-h-0 w-full px-4 pt-1 pb-3 z-10">
          
          {/* 1. Main Headline with Smooth Entrance Transition */}
          <motion.div 
            initial={{ opacity: 0, y: -24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center font-sans font-black tracking-tighter uppercase leading-[0.88] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] pt-1"
          >
            <span className="text-[clamp(1.75rem,6vw,2.5rem)] tracking-tight">NATURE</span>
            <span className="text-[clamp(2.5rem,10vw,3.75rem)] tracking-tighter">PURE FRESH</span>
          </motion.div>

          {/* 2. Review Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md rounded-full py-1.5 px-4 border border-white/15 shadow-md"
          >
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center p-0.5 overflow-hidden shadow-inner">
              <img src="/products/avacado.png" alt="Review" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col items-start leading-none">
              <div className="flex items-center gap-1 text-[#AAFFC7] font-bold text-xs">
                <Star className="w-2.5 h-2.5 fill-[#FF653F] text-[#FF653F]" /> 4.9
              </div>
              <span className="text-[8px] uppercase tracking-wider font-semibold text-[#EDE9E6] mt-0.5">150k (Reviews)</span>
            </div>
          </motion.div>

          {/* 3. Description Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm text-[#EDE9E6] font-medium text-center max-w-[300px] sm:max-w-[340px] leading-relaxed drop-shadow-sm px-1"
          >
            Crafted from carefully selected tropical fruits, our produce delivers authentic flavor, natural freshness, and uncompromising quality in every bite.
          </motion.p>

          {/* 4. Complete Stats & Features Box */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-sm bg-black/35 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 border border-white/15 flex flex-col gap-1.5 shadow-lg"
          >
            {/* Header: Rich In Fruits Vitamins */}
            <div className="flex items-center justify-between border-b border-white/10 pb-1 px-1">
              <span className="text-[10px] sm:text-[11px] font-bold text-[#AAFFC7] uppercase tracking-wider">
                Rich In Fruits &amp; Vitamins
              </span>
              <span className="text-[9px] text-[#EDE9E6]/80 font-medium">
                100% Authentic
              </span>
            </div>

            {/* 3 Metrics Row */}
            <div className="grid grid-cols-3 gap-1.5 items-center text-center">
              {/* Metric 1: 100% Natural */}
              <div className="flex flex-col items-center justify-center py-1.5 px-0.5 bg-white/5 rounded-xl border border-white/5">
                <span className="text-base sm:text-lg font-bold tracking-tight text-[#FF653F] leading-none">100%</span>
                <span className="text-[8.5px] sm:text-[9.5px] font-semibold text-[#AAFFC7] mt-1 leading-tight">Natural Produce</span>
              </div>

              {/* Metric 2: 12+ Fruits */}
              <div className="flex flex-col items-center justify-center py-1.5 px-0.5 bg-white/5 rounded-xl border border-white/5">
                <div className="flex items-center gap-1 leading-none">
                  <Leaf className="w-2.5 h-2.5 text-[#AAFFC7]" />
                  <span className="font-bold text-[#FF653F] text-sm sm:text-base">12+</span>
                </div>
                <span className="text-[8.5px] sm:text-[9.5px] font-semibold text-[#EDE9E6] uppercase mt-1 leading-tight">Fruits</span>
              </div>

              {/* Metric 3: 0% Added Sugar */}
              <div className="flex flex-col items-center justify-center py-1.5 px-0.5 bg-white/5 rounded-xl border border-white/5">
                <div className="flex items-center gap-1 leading-none">
                  <Droplet className="w-2.5 h-2.5 text-[#AAFFC7]" />
                  <span className="font-bold text-[#FF653F] text-sm sm:text-base">0%</span>
                </div>
                <span className="text-[8.5px] sm:text-[9.5px] font-semibold text-[#EDE9E6] uppercase mt-1 leading-tight">Added Sugar</span>
              </div>
            </div>
          </motion.div>

          {/* 5. Order Now Button */}
          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center w-full"
          >
            <Link
              href="/products"
              className="bg-white text-dark-green hover:bg-white/90 px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all shadow-lg active:scale-95 hover:shadow-xl"
            >
              Order Now
            </Link>
          </motion.div>

        </div>

        {/* ─── DESKTOP VIEW CONTENT ─── */}
        <div className="hidden md:flex relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full flex-1 min-h-0 flex-row items-center justify-between my-auto gap-8 lg:gap-12">
          
          {/* Left Side Content with Initial Transition */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-1/3 flex flex-col items-start text-left gap-4 lg:gap-5 translate-y-12 lg:translate-y-16"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl lg:text-4xl font-bold tracking-tight text-[#FF653F]">100%</span>
              <span className="text-xs lg:text-sm font-semibold leading-tight text-[#AAFFC7] text-left">Natural<br/>Fresh Produce</span>
            </div>
            <p className="text-xs lg:text-sm text-[#EDE9E6] font-medium max-w-[260px] leading-relaxed">
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

          {/* Right Side Content with Initial Transition */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-1/3 flex flex-col items-end text-right gap-5 lg:gap-6 z-20 translate-y-12 lg:translate-y-16"
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

        {/* ─── BOTTOM FLOWING MARQUEE (Included in hero, framed by bezel) ─── */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-dark-green py-2 md:py-2.5 border-t border-white/10 relative z-30 overflow-hidden flex items-center shadow-sm shrink-0"
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

      </motion.div> {/* ─── END INNER CONTAINER ─── */}

    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Leaf, Droplet } from "lucide-react";

const MARQUEE_ITEMS = [
  { text: "Avocado", icon: "/products/avacado.png" },
  { text: "Apple", icon: "/fruits/Large_Red_Apples_PNG_Clipart.png" },
  { text: "Grapes", icon: "/fruits/152571-photos-black-grapes-download-hd.png" },
  { text: "Natural Produce", icon: "/fruits/pngtree-delicious-black-grapes-png-image_20004046.png" },
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full bg-[#FF8F00] overflow-hidden flex flex-col justify-between pt-32 pb-0">
      
      {/* ─── DESKTOP BACKGROUND TEXT (Hidden on mobile) ─── */}
      <div className="hidden md:flex absolute inset-0 z-0 flex-col items-center justify-center pointer-events-none opacity-90 select-none overflow-hidden md:-translate-y-36 lg:-translate-y-44">
        <h1 className="font-serif font-black tracking-tighter leading-[0.85] text-[#0A2612] whitespace-nowrap text-center flex flex-col items-center w-full">
          <span className="md:text-[5.5vw] lg:text-[4.75rem] xl:text-[5.5rem] tracking-tight lg:-ml-32">
            NATURE
          </span>
          <span className="md:text-[9.5vw] lg:text-[8rem] xl:text-[9.5rem]">
            PURE FRESH
          </span>
        </h1>
      </div>

      {/* ─── MOBILE VIEW CONTENT (Visible only on mobile) ─── */}
      <div className="flex md:hidden flex-col items-center justify-between flex-1 w-full px-5 pt-0 pb-4 z-10 gap-3">
        
        {/* 1. Main Text at Top */}
        <div className="flex flex-col items-center text-center font-serif font-black tracking-tighter leading-[0.88] text-[#0A2612] whitespace-nowrap pt-1">
          <span className="text-3xl sm:text-4xl tracking-tight">NATURE</span>
          <span className="text-5xl sm:text-6xl tracking-tighter">PURE FRESH</span>
        </div>

        {/* 2. Avocado below that */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center items-center h-[26vh] sm:h-[30vh] w-full"
        >
          <img 
            src="/products/avacado.png" 
            alt="Avocado" 
            className="h-full w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* 3. Review Badge below avocado */}
        <div className="flex items-center gap-3 bg-white/25 backdrop-blur-sm rounded-full py-1.5 px-4 border border-[#0A2612]/10 shadow-sm">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-1 overflow-hidden shadow-inner">
            <img src="/products/avacado.png" alt="Review" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1 text-[#0A2612] font-bold text-sm">
              <Star className="w-3.5 h-3.5 fill-[#0A2612]" /> 4.9
            </div>
            <span className="text-[9px] uppercase tracking-wider font-semibold text-[#0A2612]/70">150k (Reviews)</span>
          </div>
        </div>

        {/* 4. Both Texts in a Single Row */}
        <div className="flex flex-row items-center justify-between w-full max-w-sm px-2 gap-3 mt-1">
          {/* Left Text: 100% Produce */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-[#0A2612]">100%</span>
            <span className="text-[11px] font-semibold leading-tight text-[#0A2612] text-left">Natural<br/>Produce</span>
          </div>

          {/* Right Text: Fruits & Sugar stats */}
          <div className="flex items-center gap-3 text-left">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-[#0A2612] flex items-center justify-center">
                <Leaf className="w-3 h-3 text-white" />
              </div>
              <div>
                <span className="block font-bold text-[#0A2612] text-xs leading-none">12+</span>
                <span className="text-[9px] font-semibold text-[#0A2612]/70 uppercase">Fruits</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-[#0A2612] flex items-center justify-center">
                <Droplet className="w-3 h-3 text-white" />
              </div>
              <div>
                <span className="block font-bold text-[#0A2612] text-xs leading-none">0%</span>
                <span className="text-[9px] font-semibold text-[#0A2612]/70 uppercase">Sugar</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Order Now Button below that */}
        <div className="flex justify-center w-full mt-1">
          <Link
            href="/products"
            className="bg-[#0A2612] text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-[#0A2612]/90 transition-all shadow-md active:scale-95"
          >
            Order Now
          </Link>
        </div>

      </div>

      {/* ─── DESKTOP VIEW CONTENT (Visible only on desktop md:) ─── */}
      <div className="hidden md:flex relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex-row items-center justify-between mt-24 mb-10 gap-12">
        
        {/* Left Side Content */}
        <div className="w-1/3 flex flex-col items-start text-left gap-5 mt-20 lg:mt-28">
          <div className="flex items-center gap-3">
            <span className="text-3xl lg:text-4xl font-bold tracking-tight text-[#0A2612]">100%</span>
            <span className="text-xs lg:text-sm font-semibold leading-tight text-[#0A2612] text-left">Natural<br/>Fresh Produce</span>
          </div>
          <p className="text-xs lg:text-sm text-[#0A2612]/80 font-medium max-w-[260px] leading-relaxed">
            Crafted from carefully selected tropical fruits, our produce delivers authentic flavor, natural freshness, and uncompromising quality in every bite.
          </p>
          <Link
            href="/products"
            className="bg-[#0A2612] text-white px-7 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-[#0A2612]/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Order Now
          </Link>
        </div>

        {/* Center Image - Avocado on top of text */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-1/3 flex justify-center items-center z-20 h-[55vh]"
        >
          <img 
            src="/products/avacado.png" 
            alt="Avocado" 
            className="w-auto h-[115%] max-w-none object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
          />
        </motion.div>

        {/* Right Side Content */}
        <div className="w-1/3 flex flex-col items-end text-right gap-8 z-20">
          
          {/* Review Badge */}
          <div className="flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-full p-2 pr-6 border border-[#0A2612]/10 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-2 overflow-hidden shadow-inner">
              <img src="/products/avacado.png" alt="Review" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1 text-[#0A2612] font-bold text-lg">
                <Star className="w-4 h-4 fill-[#0A2612]" /> 4.9
              </div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#0A2612]/70">150k (Reviews)</span>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col items-start gap-3 text-left mt-2 lg:mt-4">
            <h3 className="text-[#0A2612] font-bold text-sm mb-1">Rich In Fruits<br/>Vitamins</h3>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0A2612] flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="block font-bold text-[#0A2612] text-xs">12+</span>
                <span className="text-[10px] font-semibold text-[#0A2612]/70 uppercase">Fruits</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0A2612] flex items-center justify-center">
                <Droplet className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="block font-bold text-[#0A2612] text-xs">0%</span>
                <span className="text-[10px] font-semibold text-[#0A2612]/70 uppercase">Added Sugar</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ─── BOTTOM FLOWING MARQUEE ─── */}
      <div className="w-full bg-[#FFF78D] py-1.5 md:py-2 border-t border-[#0A2612]/10 relative z-30 overflow-hidden flex items-center -translate-y-3 md:-translate-y-6 -mb-3 md:-mb-6 shadow-sm">
        <motion.div
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 16 }}
          className="flex items-center gap-6 md:gap-10 w-max"
        >
          {/* Duplicate for seamless looping */}
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 md:gap-3.5 pr-3 md:pr-5">
              <span className="whitespace-nowrap text-xs sm:text-sm md:text-base font-bold tracking-tight text-[#0A2612]">{item.text}</span>
              <div className="w-6 h-6 md:w-7 md:h-7 bg-white rounded-full flex items-center justify-center p-1 shadow-sm border border-black/5 shrink-0">
                <img src={item.icon} alt="Icon" className="w-full h-full object-contain" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}

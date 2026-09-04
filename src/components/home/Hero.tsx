"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Star, Leaf, Droplet } from "lucide-react";

const HERO_FRUITS = [
  { name: "Avocado", image: "/products/avacado.png" },
  { name: "Pineapple", image: "/products/pineapple.png" },
  { name: "Mango", image: "/products/mango.png" },
  { name: "Papaya", image: "/products/papaya.png" },
];

const MARQUEE_ITEMS = [
  { text: "Avocado", icon: "/products/avacado.png" },
  { text: "Pineapple", icon: "/products/pineapple.png" },
  { text: "Mango", icon: "/products/mango.png" },
  { text: "Papaya", icon: "/products/papaya.png" },
];

export function Hero() {
  const [fruitIndex, setFruitIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFruitIndex((prev) => (prev + 1) % HERO_FRUITS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const currentFruit = HERO_FRUITS[fruitIndex];

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-between pt-32 pb-0">
      
      {/* ─── HERO BACKGROUND IMAGE ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src="/bg/bg-002.webp" 
          alt="Lush Farm Fields" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* ─── DESKTOP BACKGROUND TEXT (Hidden on mobile) ─── */}
      <div className="hidden md:flex absolute inset-0 z-[1] flex-col items-center justify-center pointer-events-none opacity-90 select-none overflow-hidden md:-translate-y-36 lg:-translate-y-44">
        <h1 className="font-sans font-black tracking-tighter uppercase leading-[0.85] text-white whitespace-nowrap text-center flex flex-col items-center w-full drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]">
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
        <div className="flex flex-col items-center text-center font-sans font-black tracking-tighter uppercase leading-[0.88] text-white whitespace-nowrap pt-1 drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)]">
          <span className="text-3xl sm:text-4xl tracking-tight">NATURE</span>
          <span className="text-5xl sm:text-6xl tracking-tighter">PURE FRESH</span>
        </div>

        {/* 2. Fruits Carousel below text */}
        <div className="flex justify-center items-center h-[26vh] sm:h-[30vh] w-full relative">
          <AnimatePresence initial={false}>
            <motion.img 
              key={currentFruit.image}
              src={currentFruit.image} 
              alt={currentFruit.name} 
              initial={{ opacity: 0, x: 220 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -220 }}
              transition={{ 
                x: { type: "spring", stiffness: 240, damping: 25 },
                opacity: { duration: 0.25 }
              }}
              className="absolute h-full w-auto object-contain drop-shadow-2xl scale-[1.55]"
            />
          </AnimatePresence>
        </div>

        {/* 3. Review Badge below avocado */}
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full py-1.5 px-4 border border-white/15 shadow-md">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-1 overflow-hidden shadow-inner">
            <img src="/products/avacado.png" alt="Review" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1 text-[#AAFFC7] font-bold text-sm">
              <Star className="w-3.5 h-3.5 fill-[#FF653F] text-[#FF653F]" /> 4.9
            </div>
            <span className="text-[9px] uppercase tracking-wider font-semibold text-[#EDE9E6]">150k (Reviews)</span>
          </div>
        </div>

        {/* 4 & 5. Tightly Grouped: Stats Row + Order Now Button with reduced gap */}
        <div className="flex flex-col items-center w-full max-w-sm gap-2 mt-1">
          {/* Both Texts in a Single Row */}
          <div className="flex flex-row items-center justify-between w-full px-2 gap-3">
            {/* Left Text: 100% Produce */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-[#FF653F]">100%</span>
              <span className="text-[11px] font-semibold leading-tight text-[#AAFFC7] text-left">Natural<br/>Produce</span>
            </div>

            {/* Right Text: Fruits & Sugar stats */}
            <div className="flex items-center gap-3 text-left">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full bg-[#AAFFC7]/15 border border-[#AAFFC7]/30 flex items-center justify-center">
                  <Leaf className="w-3 h-3 text-[#AAFFC7]" />
                </div>
                <div>
                  <span className="block font-bold text-[#FF653F] text-xs leading-none">12+</span>
                  <span className="text-[9px] font-semibold text-[#EDE9E6] uppercase">Fruits</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full bg-[#AAFFC7]/15 border border-[#AAFFC7]/30 flex items-center justify-center">
                  <Droplet className="w-3 h-3 text-[#AAFFC7]" />
                </div>
                <div>
                  <span className="block font-bold text-[#FF653F] text-xs leading-none">0%</span>
                  <span className="text-[9px] font-semibold text-[#EDE9E6] uppercase">Sugar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Now Button - right below with tight gap */}
          <div className="flex justify-center w-full mt-1">
            <Link
              href="/products"
              className="bg-white text-dark-green hover:bg-white/90 px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all shadow-lg active:scale-95"
            >
              Order Now
            </Link>
          </div>
        </div>

      </div>

      {/* ─── DESKTOP VIEW CONTENT (Visible only on desktop md:) ─── */}
      <div className="hidden md:flex relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex-row items-center justify-between mt-24 mb-10 gap-12">
        
        {/* Left Side Content */}
        <div className="w-1/3 flex flex-col items-start text-left gap-5 mt-20 lg:mt-28">
          <div className="flex items-center gap-3">
            <span className="text-3xl lg:text-4xl font-bold tracking-tight text-[#FF653F]">100%</span>
            <span className="text-xs lg:text-sm font-semibold leading-tight text-[#AAFFC7] text-left">Natural<br/>Fresh Produce</span>
          </div>
          <p className="text-xs lg:text-sm text-[#EDE9E6] font-medium max-w-[260px] leading-relaxed">
            Crafted from carefully selected tropical fruits, our produce delivers authentic flavor, natural freshness, and uncompromising quality in every bite.
          </p>
          <Link
            href="/products"
            className="bg-white text-dark-green hover:bg-white/90 px-7 py-3 rounded-full text-sm font-bold tracking-wide transition-all shadow-lg hover:-translate-y-0.5"
          >
            Order Now
          </Link>
        </div>

        {/* Center Image - Fruits Carousel */}
        <div className="w-1/3 flex justify-center items-center z-20 h-[55vh] relative">
          <AnimatePresence initial={false}>
            <motion.img 
              key={currentFruit.image}
              src={currentFruit.image} 
              alt={currentFruit.name} 
              initial={{ opacity: 0, x: 280 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -280 }}
              transition={{ 
                x: { type: "spring", stiffness: 220, damping: 24 },
                opacity: { duration: 0.28 }
              }}
              className="absolute w-auto h-[115%] max-w-none object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
            />
          </AnimatePresence>
        </div>

        {/* Right Side Content */}
        <div className="w-1/3 flex flex-col items-end text-right gap-8 z-20">
          
          {/* Review Badge */}
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full p-2 pr-6 border border-white/15 shadow-md">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-2 overflow-hidden shadow-inner">
              <img src="/products/avacado.png" alt="Review" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1 text-[#AAFFC7] font-bold text-lg">
                <Star className="w-4 h-4 fill-[#FF653F] text-[#FF653F]" /> 4.9
              </div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#EDE9E6]">150k (Reviews)</span>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col items-start gap-3 text-left mt-2 lg:mt-4">
            <h3 className="text-[#AAFFC7] font-bold text-sm mb-1">Rich In Fruits<br/>Vitamins</h3>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#AAFFC7]/15 border border-[#AAFFC7]/30 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-[#AAFFC7]" />
              </div>
              <div>
                <span className="block font-bold text-[#FF653F] text-xs">12+</span>
                <span className="text-[10px] font-semibold text-[#EDE9E6] uppercase">Fruits</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#AAFFC7]/15 border border-[#AAFFC7]/30 flex items-center justify-center">
                <Droplet className="w-4 h-4 text-[#AAFFC7]" />
              </div>
              <div>
                <span className="block font-bold text-[#FF653F] text-xs">0%</span>
                <span className="text-[10px] font-semibold text-[#EDE9E6] uppercase">Added Sugar</span>
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

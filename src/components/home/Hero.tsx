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
    <section className="relative h-[100dvh] max-h-[100dvh] w-full bg-[#FAFFCB] p-2.5 sm:p-3.5 md:p-5 lg:p-6 flex flex-col overflow-hidden select-none">
      
      {/* ─── INNER CONTAINER WITH CURVY BEZEL EDGES ─── */}
      <div className="relative flex-1 min-h-0 w-full rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden flex flex-col justify-between pt-16 sm:pt-20 md:pt-20 lg:pt-24 pb-0 shadow-lg border border-black/5">
        
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
      <div className="hidden md:flex absolute inset-0 z-[1] flex-col items-center justify-center pointer-events-none opacity-90 select-none overflow-hidden -translate-y-24 lg:-translate-y-32 xl:-translate-y-36">
        <h1 className="font-sans font-black tracking-tighter uppercase leading-[0.85] text-white whitespace-nowrap text-center flex flex-col items-center w-full drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]">
          <span className="md:text-[5vw] lg:text-[4.5rem] xl:text-[5.25rem] tracking-tight lg:-ml-28">
            NATURE
          </span>
          <span className="md:text-[8.5vw] lg:text-[7.5rem] xl:text-[8.75rem]">
            PURE FRESH
          </span>
        </h1>
      </div>

      {/* ─── MOBILE VIEW CONTENT (Visible only on mobile) ─── */}
      <div className="flex md:hidden flex-col items-center justify-between flex-1 min-h-0 w-full px-4 pt-1 pb-2 z-10 gap-2">
        
        {/* 1. Main Text at Top - positioned a little lower */}
        <div className="flex flex-col items-center text-center font-sans font-black tracking-tighter uppercase leading-[0.88] text-white whitespace-nowrap pt-3 sm:pt-4 drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)]">
          <span className="text-3xl sm:text-4xl tracking-tight">NATURE</span>
          <span className="text-5xl sm:text-6xl tracking-tighter">PURE FRESH</span>
        </div>

        {/* 2. Fruits Carousel below text */}
        <div className="flex justify-center items-center h-[24vh] sm:h-[27vh] max-h-[220px] w-full relative">
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
              className="absolute h-full w-auto object-contain drop-shadow-2xl scale-[1.35] sm:scale-[1.45]"
            />
          </AnimatePresence>
        </div>

        {/* 3. Review Badge below avocado */}
        <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md rounded-full py-1 px-3.5 border border-white/15 shadow-md">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center p-1 overflow-hidden shadow-inner">
            <img src="/products/avacado.png" alt="Review" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1 text-[#AAFFC7] font-bold text-xs sm:text-sm">
              <Star className="w-3 h-3 fill-[#FF653F] text-[#FF653F]" /> 4.9
            </div>
            <span className="text-[8.5px] uppercase tracking-wider font-semibold text-[#EDE9E6]">150k (Reviews)</span>
          </div>
        </div>

        {/* 4 & 5. Tightly Grouped: Stats Row + Order Now Button with reduced gap */}
        <div className="flex flex-col items-center w-full max-w-sm gap-1.5 mt-0.5">
          {/* Both Texts in a Single Row */}
          <div className="flex flex-row items-center justify-between w-full px-2 gap-3">
            {/* Left Text: 100% Produce */}
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#FF653F]">100%</span>
              <span className="text-[10px] sm:text-[11px] font-semibold leading-tight text-[#AAFFC7] text-left">Natural<br/>Produce</span>
            </div>

            {/* Right Text: Fruits & Sugar stats */}
            <div className="flex items-center gap-2.5 text-left">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#AAFFC7]/15 border border-[#AAFFC7]/30 flex items-center justify-center">
                  <Leaf className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#AAFFC7]" />
                </div>
                <div>
                  <span className="block font-bold text-[#FF653F] text-[11px] sm:text-xs leading-none">12+</span>
                  <span className="text-[8.5px] sm:text-[9px] font-semibold text-[#EDE9E6] uppercase">Fruits</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#AAFFC7]/15 border border-[#AAFFC7]/30 flex items-center justify-center">
                  <Droplet className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#AAFFC7]" />
                </div>
                <div>
                  <span className="block font-bold text-[#FF653F] text-[11px] sm:text-xs leading-none">0%</span>
                  <span className="text-[8.5px] sm:text-[9px] font-semibold text-[#EDE9E6] uppercase">Sugar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Now Button - right below with tight gap */}
          <div className="flex justify-center w-full mt-0.5">
            <Link
              href="/products"
              className="bg-white text-dark-green hover:bg-white/90 px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all shadow-lg active:scale-95"
            >
              Order Now
            </Link>
          </div>
        </div>

      </div>

      {/* ─── DESKTOP VIEW CONTENT (Visible only on desktop md:) ─── */}
      <div className="hidden md:flex relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full flex-1 min-h-0 flex-row items-center justify-between my-auto gap-8 lg:gap-12">
        
        {/* Left Side Content */}
        <div className="w-1/3 flex flex-col items-start text-left gap-4 lg:gap-5">
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
        </div>

        {/* Center Image - Fruits Carousel */}
        <div className="w-1/3 flex justify-center items-center z-20 h-[40vh] lg:h-[46vh] max-h-[420px] relative">
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
              className="absolute w-auto h-[110%] max-w-none object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
            />
          </AnimatePresence>
        </div>

        {/* Right Side Content */}
        <div className="w-1/3 flex flex-col items-end text-right gap-5 lg:gap-6 z-20">
          
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

        </div>
      </div>

      {/* ─── BOTTOM FLOWING MARQUEE ─── */}
      <div className="w-full bg-dark-green py-1.5 md:py-2 border-t border-white/10 relative z-30 overflow-hidden flex items-center shadow-sm mt-auto shrink-0">
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
      </div>

      </div> {/* ─── END INNER CONTAINER ─── */}

    </section>
  );
}

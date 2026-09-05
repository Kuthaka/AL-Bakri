"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Leaf, Droplet, Sparkles } from "lucide-react";

const SCATTERED_FRUITS = [
  {
    name: "Avocado",
    image: "/products/avacado.png",
    className: "top-2 left-2 sm:top-4 sm:left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 w-28 sm:w-36 md:w-48 lg:w-56 -rotate-12",
    blurClass: "blur-[2px] md:blur-[2.5px]",
    floatY: [-7, 7, -7],
    duration: 6,
    delay: 0,
    opacity: "opacity-85 sm:opacity-90",
  },
  {
    name: "Pineapple",
    image: "/products/pineapple.png",
    className: "top-2 right-2 sm:top-3 sm:right-3 md:top-5 md:right-5 lg:top-7 lg:right-7 w-28 sm:w-38 md:w-52 lg:w-60 rotate-12",
    blurClass: "blur-[2px] md:blur-[2.5px]",
    floatY: [7, -7, 7],
    duration: 7,
    delay: 0.8,
    opacity: "opacity-85 sm:opacity-90",
  },
  {
    name: "Mango",
    image: "/products/mango.png",
    className: "bottom-12 left-2 sm:bottom-14 sm:left-4 md:bottom-16 md:left-6 lg:bottom-16 lg:left-8 w-24 sm:w-32 md:w-44 lg:w-52 rotate-[24deg]",
    blurClass: "blur-[2px] md:blur-[3px]",
    floatY: [-8, 6, -8],
    duration: 5.5,
    delay: 0.4,
    opacity: "opacity-85 sm:opacity-90",
  },
  {
    name: "Papaya",
    image: "/products/papaya.png",
    className: "bottom-12 right-2 sm:bottom-14 sm:right-4 md:bottom-16 md:right-6 lg:bottom-16 lg:right-8 w-26 sm:w-36 md:w-48 lg:w-56 -rotate-[22deg]",
    blurClass: "blur-[2px] md:blur-[2.5px]",
    floatY: [6, -8, 6],
    duration: 6.5,
    delay: 1.2,
    opacity: "opacity-85 sm:opacity-90",
  },
  {
    name: "Papaya Left Edge",
    image: "/products/papaya.png",
    className: "top-[44%] -left-7 sm:-left-9 md:-left-12 lg:-left-14 w-20 sm:w-28 md:w-36 lg:w-44 -rotate-[35deg]",
    blurClass: "blur-[3px] md:blur-[4px]",
    floatY: [-5, 6, -5],
    duration: 8,
    delay: 1.8,
    opacity: "opacity-65 md:opacity-75",
  },
  {
    name: "Avocado Right Edge",
    image: "/products/avacado.png",
    className: "top-[42%] -right-7 sm:-right-9 md:-right-10 lg:-right-12 w-20 sm:w-28 md:w-36 lg:w-42 rotate-[28deg]",
    blurClass: "blur-[3px] md:blur-[4px]",
    floatY: [6, -6, 6],
    duration: 7.2,
    delay: 1.5,
    opacity: "opacity-65 md:opacity-75",
  },
];

const MARQUEE_ITEMS = [
  { text: "Avocado", icon: "/products/avacado.png" },
  { text: "Pineapple", icon: "/products/pineapple.png" },
  { text: "Mango", icon: "/products/mango.png" },
  { text: "Papaya", icon: "/products/papaya.png" },
];

export function Hero() {
  return (
    <section className="relative h-[100dvh] max-h-[100dvh] w-full bg-[#FAFFCB] p-2.5 sm:p-3.5 md:p-5 lg:p-6 flex flex-col overflow-hidden select-none">
      
      {/* ─── UNORDERED SCATTERED FRUITS SPREADING OVER THE EDGES & BEZELS ─── */}
      <div className="absolute inset-0 z-20 pointer-events-none select-none overflow-hidden">
        {SCATTERED_FRUITS.map((fruit, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${fruit.className} ${fruit.opacity} transition-opacity duration-500`}
            animate={{ y: fruit.floatY }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              duration: fruit.duration,
              delay: fruit.delay,
            }}
          >
            <img
              src={fruit.image}
              alt={fruit.name}
              className={`w-full h-auto object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.35)] ${fruit.blurClass}`}
            />
          </motion.div>
        ))}
      </div>

      {/* ─── INNER CONTAINER WITH CURVY BEZEL EDGES ─── */}
      <div className="relative flex-1 min-h-0 w-full rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden flex flex-col justify-between pt-16 sm:pt-20 md:pt-20 lg:pt-24 pb-0 shadow-lg border border-black/5">
        
        {/* ─── HERO BACKGROUND IMAGE ─── */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img 
            src="/bg/bg-003.avif" 
            alt="Lush Farm Fields" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* ─── CENTERED HERO TEXT CONTENT ─── */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto w-full my-auto">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full py-1 sm:py-1.5 px-3.5 sm:px-4 border border-white/20 shadow-md mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#AAFFC7]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[#EDE9E6]">
              100% Pure & Natural Harvest
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="font-sans font-black tracking-tighter uppercase leading-[0.88] text-white whitespace-nowrap text-center flex flex-col items-center w-full drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]">
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] tracking-tight text-[#AAFFC7]/95">
              NATURE
            </span>
            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.75rem]">
              PURE FRESH
            </span>
          </h1>

          {/* Description Subtitle */}
          <p className="mt-3 sm:mt-5 max-w-md sm:max-w-lg md:max-w-xl text-center text-xs sm:text-sm md:text-base text-[#EDE9E6]/90 font-medium leading-relaxed drop-shadow-md">
            Handpicked tropical fruits harvested at peak ripeness. Sourced directly from sustainable orchards for uncompromising flavor and natural vitality.
          </p>

          {/* Action CTA Buttons */}
          <div className="mt-5 sm:mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/products"
              className="bg-white text-dark-green hover:bg-[#FAFFCB] hover:shadow-xl hover:-translate-y-0.5 px-7 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all shadow-lg active:scale-95"
            >
              Order Now
            </Link>
            <Link
              href="/about"
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/25 hover:border-white/40 hover:-translate-y-0.5 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md active:scale-95"
            >
              Our Story
            </Link>
          </div>

          {/* Highlights / Badges Row */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-white/90">
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs md:text-sm font-semibold text-[#EDE9E6]">
              <Leaf className="w-3.5 h-3.5 text-[#AAFFC7]" />
              <span>12+ Tropical Fruits</span>
            </div>
            <span className="text-white/30 hidden xs:inline">•</span>
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs md:text-sm font-semibold text-[#EDE9E6]">
              <Droplet className="w-3.5 h-3.5 text-[#AAFFC7]" />
              <span>0% Added Sugar</span>
            </div>
            <span className="text-white/30 hidden sm:inline">•</span>
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] sm:text-xs md:text-sm font-semibold text-[#EDE9E6]">
              <Star className="w-3.5 h-3.5 fill-[#FF653F] text-[#FF653F]" />
              <span>4.9 / 5 (150k+ Reviews)</span>
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

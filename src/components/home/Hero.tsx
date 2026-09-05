"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Leaf, Droplet, BadgeCheck } from "lucide-react";

const SCATTERED_FRUITS = [
  {
    name: "Avocado",
    image: "/products/avacado.png",
    // Scaled down & tucked in corner on mobile, expands on md/lg
    className: "-top-2 -left-2 sm:top-2 sm:left-2 md:top-4 md:left-4 lg:top-6 lg:left-6 w-16 sm:w-28 md:w-44 lg:w-56 -rotate-12",
    blurClass: "blur-[1.5px] md:blur-[2.5px]",
    floatY: [-5, 5, -5],
    duration: 6,
    delay: 0,
    opacity: "opacity-80 sm:opacity-90",
  },
  {
    name: "Pineapple",
    image: "/products/pineapple.png",
    className: "-top-2 -right-2 sm:top-2 sm:right-2 md:top-3 md:right-4 lg:top-5 lg:right-6 w-16 sm:w-28 md:w-48 lg:w-60 rotate-12",
    blurClass: "blur-[1.5px] md:blur-[2.5px]",
    floatY: [5, -6, 5],
    duration: 7,
    delay: 0.8,
    opacity: "opacity-80 sm:opacity-90",
  },
  {
    name: "Mango",
    image: "/products/mango.png",
    className: "bottom-10 -left-1 sm:bottom-12 sm:left-3 md:bottom-14 md:left-6 lg:bottom-16 lg:left-8 w-14 sm:w-24 md:w-40 lg:w-52 rotate-[24deg]",
    blurClass: "blur-[1.5px] md:blur-[2.5px]",
    floatY: [-6, 5, -6],
    duration: 5.5,
    delay: 0.4,
    opacity: "opacity-80 sm:opacity-90",
  },
  {
    name: "Papaya",
    image: "/products/papaya.png",
    className: "bottom-10 -right-1 sm:bottom-12 sm:right-3 md:bottom-14 md:right-6 lg:bottom-16 lg:right-8 w-16 sm:w-26 md:w-44 lg:w-56 -rotate-[22deg]",
    blurClass: "blur-[1.5px] md:blur-[2.5px]",
    floatY: [5, -6, 5],
    duration: 6.5,
    delay: 1.2,
    opacity: "opacity-80 sm:opacity-90",
  },
  {
    name: "Papaya Left Edge",
    image: "/products/papaya.png",
    // Hidden on mobile/small screens so it doesn't block center text
    className: "hidden md:block top-[44%] -left-7 md:-left-12 lg:-left-14 w-28 md:w-36 lg:w-44 -rotate-[35deg]",
    blurClass: "blur-[3px] md:blur-[4px]",
    floatY: [-5, 6, -5],
    duration: 8,
    delay: 1.8,
    opacity: "opacity-65 md:opacity-75",
  },
  {
    name: "Avocado Right Edge",
    image: "/products/avacado.png",
    // Hidden on mobile/small screens so it doesn't block center text
    className: "hidden md:block top-[42%] -right-7 md:-right-10 lg:-right-12 w-28 md:w-36 lg:w-42 rotate-[28deg]",
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

interface HeroProps {
  isLoaded?: boolean;
}

export function Hero({ isLoaded = true }: HeroProps) {
  return (
    <section className="relative h-[100dvh] max-h-[100dvh] w-full bg-[#FAFFCB] p-2 sm:p-3.5 md:p-5 lg:p-6 flex flex-col overflow-hidden select-none">
      
      {/* ─── UNORDERED SCATTERED FRUITS SPREADING OVER THE EDGES & BEZELS ─── */}
      <div className="absolute inset-0 z-20 pointer-events-none select-none overflow-hidden">
        {SCATTERED_FRUITS.map((fruit, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${fruit.className} ${fruit.opacity}`}
            initial={{ opacity: 0, scale: 0.6, y: 30 }}
            animate={
              isLoaded
                ? {
                    opacity: 1,
                    scale: 1,
                    y: fruit.floatY,
                  }
                : { opacity: 0, scale: 0.6, y: 30 }
            }
            transition={{
              opacity: { duration: 0.7, delay: 0.15 + idx * 0.08 },
              scale: { duration: 0.7, delay: 0.15 + idx * 0.08, ease: "easeOut" },
              y: isLoaded
                ? {
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    duration: fruit.duration,
                    delay: 0.8 + fruit.delay,
                  }
                : { duration: 0.5 },
            }}
          >
            <img
              src={fruit.image}
              alt={fruit.name}
              className={`w-full h-auto object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.35)] ${fruit.blurClass}`}
            />
          </motion.div>
        ))}
      </div>

      {/* ─── INNER CONTAINER WITH CURVY BEZEL EDGES ─── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex-1 min-h-0 w-full rounded-[1.25rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden flex flex-col justify-between pt-14 sm:pt-20 md:pt-20 lg:pt-24 pb-0 shadow-lg border border-black/5"
      >
        
        {/* ─── HERO BACKGROUND IMAGE ─── */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none select-none"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.08 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <img 
            src="/bg/bg-003.avif" 
            alt="Lush Farm Fields" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
        </motion.div>

        {/* ─── CENTERED HERO TEXT CONTENT ─── */}
        <div className="relative z-10 flex-1 min-h-0 flex flex-col items-center justify-center text-center px-3 sm:px-6 md:px-8 max-w-4xl mx-auto w-full my-auto py-2 sm:py-4">
          
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.55, delay: 0.25, ease: "easeOut" }}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md rounded-full py-1 sm:py-1.5 px-3 sm:px-4 border border-white/20 shadow-md mb-2 sm:mb-4"
          >
            <BadgeCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#AAFFC7]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#EDE9E6]">
              100% Pure & Natural Harvest
            </span>
          </motion.div>

          {/* Main Hero Headline */}
          <h1 className="font-sans font-black tracking-tighter uppercase leading-[0.88] text-white text-center flex flex-col items-center w-full drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]">
            <motion.span
              initial={{ opacity: 0, y: 35 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] tracking-tight text-[#AAFFC7]/95 block"
            >
              NATURE
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 45 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 }}
              transition={{ duration: 0.75, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-[2.25rem] xs:text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] xl:text-[8.75rem] tracking-tighter block"
            >
              PURE FRESH
            </motion.span>
          </h1>

          {/* Description Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            transition={{ duration: 0.65, delay: 0.7, ease: "easeOut" }}
            className="mt-2.5 sm:mt-4 max-w-xs sm:max-w-md md:max-w-xl text-center text-xs sm:text-sm md:text-base text-[#EDE9E6]/90 font-medium leading-relaxed drop-shadow-md px-2"
          >
            Handpicked tropical fruits harvested at peak ripeness. Sourced directly from sustainable orchards for uncompromising natural vitality.
          </motion.p>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.85, ease: "easeOut" }}
            className="mt-4 sm:mt-6 flex flex-row items-center justify-center gap-2.5 sm:gap-4 w-full px-2"
          >
            <Link
              href="/products"
              className="bg-white text-dark-green hover:bg-[#FAFFCB] hover:shadow-xl hover:-translate-y-0.5 px-5 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all shadow-lg active:scale-95 whitespace-nowrap"
            >
              Order Now
            </Link>
            <Link
              href="/about"
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/25 hover:border-white/40 hover:-translate-y-0.5 px-5 sm:px-7 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md active:scale-95 whitespace-nowrap"
            >
              Our Story
            </Link>
          </motion.div>

          {/* Highlights / Badges Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            className="mt-3.5 sm:mt-5 flex items-center justify-center gap-2.5 sm:gap-5 text-white/90"
          >
            <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs md:text-sm font-semibold text-[#EDE9E6]">
              <Leaf className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#AAFFC7]" />
              <span>12+ Fruits</span>
            </div>
            <span className="text-white/30">•</span>
            <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs md:text-sm font-semibold text-[#EDE9E6]">
              <Droplet className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#AAFFC7]" />
              <span>0% Sugar</span>
            </div>
            <span className="text-white/30">•</span>
            <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs md:text-sm font-semibold text-[#EDE9E6]">
              <Star className="w-3.5 h-3.5 fill-[#FF653F] text-[#FF653F]" />
              <span>4.9 / 5</span>
            </div>
          </motion.div>

        </div>

        {/* ─── BOTTOM FLOWING MARQUEE ─── */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
          transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
          className="w-full bg-dark-green py-1.5 md:py-2 border-t border-white/10 relative z-30 overflow-hidden flex items-center shadow-sm mt-auto shrink-0"
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

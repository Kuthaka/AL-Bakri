"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Home, Compass, MessageSquare } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-ivory text-dark-green min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-12 pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-16 sm:pb-24">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] bg-dark-green text-ivory p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden shadow-2xl border border-black/10 text-center flex flex-col items-center justify-center"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-leaf/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#FFF78D]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Floating Fresh Produce Accent */}
          <motion.div
            animate={{ 
              y: [0, -14, 0],
              rotate: [0, 4, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full bg-white/10 backdrop-blur-md p-4 sm:p-5 border border-white/15 mb-8 shadow-inner flex items-center justify-center"
          >
            <img 
              src="/products/avacado.png" 
              alt="Al Bakri Fresh Produce" 
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </motion.div>

          {/* Badge */}
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 border border-ivory/20 rounded-full px-5 py-2 backdrop-blur-md bg-white/5">
            404 / Harvest Not Found
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9] mb-6 max-w-2xl">
            This Produce<br />
            <span className="text-leaf italic font-serif lowercase">isn&apos;t in season.</span>
          </h1>

          {/* Explanation */}
          <p className="text-sm sm:text-base md:text-lg text-ivory/75 max-w-lg leading-relaxed mb-10 text-balance">
            The page you are looking for has either been harvested, moved to another orchard, or does not exist in our catalog.
          </p>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full justify-center">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-dark-green px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#FFF78D] transition-colors shadow-lg active:scale-95"
            >
              <Home className="w-4 h-4" />
              <span>Back To Home</span>
            </Link>
            
            <Link
              href="/#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-ivory border border-white/20 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors"
            >
              <Compass className="w-4 h-4" />
              <span>Browse Catalog</span>
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-transparent hover:text-leaf text-ivory/80 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Desk</span>
            </Link>
          </div>

        </motion.div>
      </div>
    </div>
  );
}

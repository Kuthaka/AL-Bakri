"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf } from "lucide-react";

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Smooth, dynamic progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Jump randomly between 3% to 9% for realistic loading feel
        const diff = Math.floor(Math.random() * 7) + 3;
        const next = Math.min(prev + diff, 100);
        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsDone(true);
        if (onComplete) {
          onComplete();
        }
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="site-preloader"
          className="fixed inset-0 z-[100] bg-[#071F17] flex flex-col items-center justify-center overflow-hidden select-none"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          {/* Ambient radial glows */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-[#124233]/60 blur-[120px] pointer-events-none" />
          <div className="absolute w-[280px] h-[280px] rounded-full bg-[#AAFFC7]/10 blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            {/* Pulsing Organic Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative mb-5 flex items-center justify-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 border border-[#AAFFC7]/30 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(170,255,199,0.15)]">
                <Leaf className="w-7 h-7 sm:w-8 sm:h-8 text-[#AAFFC7]" />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-[#AAFFC7]/20 blur-md animate-pulse" />
            </motion.div>

            {/* Brand Logo / Headline */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-[#FAFFCB] via-white to-[#AAFFC7] drop-shadow-md">
                Al Bakri
              </h2>
              <span className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#AAFFC7]/75 font-semibold">
                Pure Fresh • Nature’s Finest
              </span>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="mt-8 flex flex-col items-center w-full max-w-[220px] sm:max-w-[260px]">
              <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#AAFFC7] to-[#FFF78D] rounded-full shadow-[0_0_12px_rgba(170,255,199,0.6)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              {/* Numerical Percentage */}
              <div className="mt-3 flex items-center justify-between w-full text-[11px] font-mono tracking-widest text-[#EDE9E6]/70">
                <span>HARVESTING</span>
                <span className="font-bold text-[#AAFFC7]">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

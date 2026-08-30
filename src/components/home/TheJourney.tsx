"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STAGES = [
  {
    num: "01",
    title: "Source",
    text: "Carefully selected from trusted growing regions.",
    image: "/fruits/Large_Red_Apples_PNG_Clipart.png"
  },
  {
    num: "02",
    title: "Select",
    text: "Only produce that meets our standards moves forward.",
    image: "/fruits/152571-photos-black-grapes-download-hd.png"
  },
  {
    num: "03",
    title: "Quality",
    text: "Every batch is inspected for freshness and consistency.",
    image: "/fruits/pngtree-delicious-black-grapes-png-image_20004046.png"
  },
  {
    num: "04",
    title: "Pack",
    text: "Handled and packed with care for safe transport.",
    image: "/fruits/Large_Red_Apples_PNG_Clipart.png"
  },
  {
    num: "05",
    title: "Deliver",
    text: "Prepared for reliable business supply worldwide.",
    image: "/fruits/152571-photos-black-grapes-download-hd.png"
  }
];

export function TheJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Since we have 5 stages, the track moves from 0% to -80% (which leaves the last 20% on screen)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={containerRef} className="bg-dark-green text-ivory relative h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 z-20 mb-8 shrink-0">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 border border-ivory/20 rounded-full px-4 py-2">
            04 / The Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">
            From Farm<br />
            To Delivery.
          </h2>
        </div>

        <div className="flex-1 relative w-full flex items-center">
          <motion.div 
            className="flex gap-6 md:gap-12 px-6 md:px-12 h-[50vh] md:h-[70vh]" 
            style={{ x, width: `${STAGES.length * 100}vw` }}
          >
            {STAGES.map((stage) => (
              <div
                key={stage.num}
                className="relative w-[75vw] md:w-[60vw] lg:w-[45vw] h-full shrink-0 rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-dark-green/40" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
                  <div className="flex flex-col gap-2 md:gap-4">
                    <span className="text-leaf text-xl md:text-2xl font-mono">{stage.num}</span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase mb-2 md:mb-4">{stage.title}</h3>
                      <p className="text-base md:text-xl text-ivory/80 text-balance">
                        {stage.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-12 left-0 right-0 px-6 md:px-12 z-20">
          <div className="max-w-7xl mx-auto flex items-center gap-4">
            <div className="flex-1 h-[2px] bg-ivory/20 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-leaf origin-left"
                style={{ scaleX: scrollYProgress }}
              />
            </div>
            <div className="text-sm font-mono tracking-widest">
              SCROLL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

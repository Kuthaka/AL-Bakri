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

  return (
    <section ref={containerRef} className="bg-dark-green text-ivory relative h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 z-20 mb-8">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 border border-ivory/20 rounded-full px-4 py-2">
            04 / The Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">
            From Farm<br />
            To Delivery.
          </h2>
        </div>

        <div className="flex-1 relative w-full h-full flex items-center justify-center">
          
          {/* Images */}
          {STAGES.map((stage, index) => {
            // Mapping scroll progress to opacity for each stage
            const start = index * 0.2;
            const end = (index + 1) * 0.2;
            // Use safe inner bounds to prevent negative or >1 values which break WAAPI
            const opacity = useTransform(
              scrollYProgress, 
              [start, start + 0.05, end - 0.05, end], 
              [0, 1, 1, 0]
            );
            const scale = useTransform(scrollYProgress, [start, end], [1.1, 1]);

            return (
              <motion.div
                key={stage.num}
                className="absolute inset-0 max-w-5xl mx-auto h-[60vh] md:h-[70vh] top-1/2 -translate-y-1/2 rounded-3xl overflow-hidden px-6"
                style={{ opacity }}
              >
                <div className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl">
                  <motion.img
                    src={stage.image}
                    alt={stage.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ scale }}
                  />
                  <div className="absolute inset-0 bg-dark-green/40" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
                    <div className="flex items-start gap-4">
                      <span className="text-leaf text-2xl font-mono">{stage.num}</span>
                      <div>
                        <h3 className="text-4xl md:text-6xl font-bold uppercase mb-4">{stage.title}</h3>
                        <p className="text-xl md:text-2xl text-ivory/80 max-w-lg text-balance">
                          {stage.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
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

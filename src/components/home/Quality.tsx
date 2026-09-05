"use client";

import { motion } from "framer-motion";

const QUALITY_PRINCIPLES = [
  {
    title: "CARE",
    desc: "Every batch is handled with attention and respect for the produce."
  },
  {
    title: "CONSISTENCY",
    desc: "Reliable, uniform quality for every single order, large or small."
  },
  {
    title: "SELECTION",
    desc: "Carefully selected produce from vetted, premium agricultural sources."
  },
  {
    title: "RELIABILITY",
    desc: "Built around dependable supply chains you can trust implicitly."
  }
];

export function Quality() {
  return (
    <section id="quality" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-ivory text-dark-green relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 sm:mb-6 border border-dark-green/20 rounded-full px-4 py-2">
            05 / Quality Standard
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.92] uppercase max-w-4xl">
            Freshness<br />
            Isn&apos;t A Claim.<br />
            <span className="text-leaf">It&apos;s A Standard.</span>
          </h2>
        </motion.div>

        {/* 2 in a row on mobile, 4 in a row on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {QUALITY_PRINCIPLES.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 45, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="group p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-dark-green/5 hover:border-dark-green/20 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-ivory border border-dark-green/10 flex items-center justify-center mb-4 sm:mb-6 md:mb-8 group-hover:bg-leaf group-hover:border-leaf group-hover:text-white transition-colors">
                  <span className="text-xs sm:text-sm font-mono font-bold">0{index + 1}</span>
                </div>
                <h3 className="text-base sm:text-xl md:text-2xl font-bold uppercase tracking-tight mb-2 sm:mb-3 group-hover:text-leaf transition-colors">
                  {principle.title}
                </h3>
              </div>
              <p className="text-dark-green/70 text-xs sm:text-sm md:text-base leading-relaxed">
                {principle.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

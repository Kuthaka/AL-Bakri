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
    <section className="py-32 px-6 md:px-12 bg-ivory text-dark-green relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-8 border border-dark-green/20 rounded-full px-4 py-2">
            05 / Quality Standard
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] uppercase max-w-4xl">
            Freshness<br />
            Isn't A Claim.<br />
            <span className="text-leaf">It's A Standard.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {QUALITY_PRINCIPLES.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="group p-8 rounded-3xl bg-white border border-dark-green/5 hover:border-dark-green/20 transition-colors shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-ivory border border-dark-green/10 flex items-center justify-center mb-12 group-hover:bg-leaf group-hover:border-leaf group-hover:text-ivory transition-colors">
                <span className="text-sm font-mono font-bold">0{index + 1}</span>
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{principle.title}</h3>
              <p className="text-dark-green/70 leading-relaxed text-balance">
                {principle.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

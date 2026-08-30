"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 px-6 md:px-12 bg-ivory text-dark-green relative overflow-hidden">
      
      {/* Background Floating Elements */}
      <motion.div
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 opacity-20 pointer-events-none blur-sm mix-blend-multiply"
        initial={{ y: "10%" }}
        whileInView={{ y: "-10%" }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <img 
          src="/fruits/pngtree-delicious-black-grapes-png-image_20004046.png" 
          alt="Abstract Produce"
          className="w-[800px] h-[800px] object-cover rounded-full"
        />
      </motion.div>

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter leading-[0.85] uppercase mb-12">
            Ready To<br />
            Bring Freshness<br />
            <span className="text-leaf">To Your Business?</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-4 bg-dark-green text-ivory px-12 py-6 rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-leaf origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" />
            <span className="relative z-10 text-xl md:text-2xl font-bold uppercase tracking-widest">
              Start A Conversation
            </span>
            <div className="relative z-10 bg-ivory text-dark-green rounded-full p-2 group-hover:bg-ivory/20 group-hover:text-ivory transition-colors">
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

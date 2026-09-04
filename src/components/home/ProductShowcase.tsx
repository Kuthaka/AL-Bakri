"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";

export function ProductShowcase() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-32 px-6 md:px-12 bg-ivory text-dark-green relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-6 border border-dark-green/20 rounded-full px-6 py-2">
              03 / Our Products
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.9] max-w-2xl text-balance">
              Meet The<br />
              <span className="text-leaf italic font-serif lowercase">Fresh Picks.</span>
            </h2>
          </motion.div>
        </div>

        {/* Minimalist Spacious Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            >
              <Link 
                href={`/products/${product.slug}`} 
                className="group flex flex-col gap-3 md:gap-6 items-center text-center"
              >
                <div className="w-full aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] bg-dark-green/5 border border-dark-green/10 flex items-center justify-center p-4 md:p-8 transition-colors duration-500 group-hover:bg-dark-green/10">
                  <motion.img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                
                <div className="flex flex-col items-center gap-1 md:gap-2 px-2 md:px-4">
                  <span className="text-leaf font-semibold text-[10px] md:text-xs tracking-widest uppercase">
                    {product.category}
                  </span>
                  <h3 className="text-base md:text-2xl font-bold">{product.name}</h3>
                  <p className="text-dark-green/60 text-xs md:text-sm leading-relaxed max-w-[200px] text-balance">
                    {product.shortDescription}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 flex justify-center"
        >
          <Link
            href="/products"
            className="group flex items-center gap-4 border border-dark-green text-dark-green hover:bg-dark-green hover:text-ivory px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-widest transition-all duration-300"
          >
            Explore Full Catalog
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

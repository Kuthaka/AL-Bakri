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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-6 border border-dark-green/20 rounded-full px-4 py-2">
              03 / Our Products
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">
              Meet The<br />
              <span className="text-leaf">Fresh Picks.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="/products"
              className="inline-block border border-dark-green text-dark-green hover:bg-dark-green hover:text-ivory px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-widest transition-colors"
            >
              View All Products
            </Link>
          </motion.div>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-[400px]">
          {featuredProducts.map((product, index) => {
            // Create a varied grid layout
            let colSpan = "md:col-span-6";
            let rowSpan = "row-span-1";
            
            if (index === 0) {
              colSpan = "md:col-span-7";
              rowSpan = "md:row-span-2";
            } else if (index === 1) {
              colSpan = "md:col-span-5";
            } else if (index === 2) {
              colSpan = "md:col-span-5";
            } else if (index === 3) {
              colSpan = "md:col-span-7";
            }

            return (
              <Link 
                href={`/products/${product.slug}`} 
                key={product.id}
                className={`${colSpan} ${rowSpan} group relative rounded-3xl overflow-hidden bg-dark-green block`}
              >
                <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-green/90 via-dark-green/20 to-transparent" />
                </div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end transition-transform duration-500 ease-out group-hover:-translate-y-2">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-leaf font-semibold text-xs tracking-widest uppercase mb-2 block">
                        {product.category}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold text-ivory mb-2">{product.name}</h3>
                      <p className="text-ivory/80 text-sm max-w-sm opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        {product.shortDescription}
                      </p>
                    </div>
                    
                    <div className="w-12 h-12 rounded-full bg-ivory text-dark-green flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <ArrowUpRight className="w-6 h-6 transition-transform group-hover:rotate-45" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

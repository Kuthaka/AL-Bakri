"use client";

import { motion } from "framer-motion";
import { products } from "@/data/products";

export function ProductShowcase() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section id="products" className="py-32 px-6 md:px-12 bg-ivory text-dark-green relative">
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
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col gap-3 md:gap-5 items-center text-center select-none"
            >
              <div 
                className="w-full aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center p-5 md:p-8 relative overflow-hidden transition-transform duration-500 hover:scale-[1.02] shadow-sm"
                style={{ 
                  backgroundColor: product.bgColor,
                  borderColor: product.borderColor,
                  borderWidth: "1px",
                  borderStyle: "solid"
                }}
              >
                <motion.img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
              
              <div className="flex flex-col items-center gap-1.5 md:gap-2 px-2 md:px-4">
                <span 
                  className="font-bold text-[10px] md:text-xs tracking-widest uppercase px-3 py-0.5 rounded-full border"
                  style={{
                    color: product.accentColor,
                    backgroundColor: product.bgColor,
                    borderColor: product.borderColor,
                  }}
                >
                  {product.category}
                </span>
                <h3 className="text-base md:text-2xl font-bold text-dark-green">
                  {product.name}
                </h3>
                <p className="text-dark-green/65 text-xs md:text-sm leading-relaxed max-w-[200px] text-balance">
                  {product.shortDescription}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

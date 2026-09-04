"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Products", href: "/products" },
  { name: "Our Story", href: "/about" },
  { name: "Quality", href: "/quality" },
  { name: "Process", href: "/process" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <>
      <motion.header
        className={cn(
          "fixed z-50 transition-all duration-300 ease-in-out px-6 md:px-8 left-4 right-4 md:left-8 md:right-8 lg:left-1/2 lg:-translate-x-1/2 lg:w-[calc(100%-4rem)] lg:max-w-7xl",
          isScrolled 
            ? "top-4 py-4 bg-[#FFF78D]/90 backdrop-blur-md border border-dark-green/10 shadow-lg rounded-2xl" 
            : "top-0 py-6 bg-transparent border border-transparent rounded-none"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 text-2xl font-bold tracking-tight text-dark-green uppercase">
            Al Bakri
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide text-dark-green/80 hover:text-dark-green transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group flex items-center gap-2 bg-dark-green text-ivory px-6 py-2.5 rounded-xl text-sm font-medium transition-all hover:bg-dark-green/90"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-dark-green"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-[#FFF78D] flex flex-col items-center justify-center pt-20 px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <nav className="flex flex-col items-center gap-8 text-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-4xl font-bold tracking-tight text-dark-green"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-8 bg-dark-green text-ivory px-8 py-4 rounded-xl text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Talk
            </Link>
          </nav>
        </motion.div>
      )}
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
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
          "fixed top-3.5 sm:top-4 md:top-6 inset-x-0 mx-auto z-50 transition-all duration-300 ease-in-out",
          "w-[calc(100%-2rem)] max-w-sm sm:max-w-md md:max-w-none md:w-fit",
          "rounded-xl px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3",
          isScrolled 
            ? "bg-[#FFF78D]/95 border border-dark-green/15 text-dark-green shadow-xl shadow-dark-green/5 backdrop-blur-md" 
            : "bg-transparent border border-transparent text-white shadow-none backdrop-blur-none"
        )}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between md:justify-center md:gap-6 lg:gap-8 w-full">
          {/* Logo */}
          <Link 
            href="/" 
            className={cn(
              "text-lg sm:text-xl font-bold tracking-tight uppercase transition-colors shrink-0",
              isScrolled ? "text-dark-green" : "text-white"
            )}
          >
            Al Bakri
          </Link>

          {/* Desktop Subtle Divider */}
          <div 
            className={cn(
              "hidden md:block w-px h-4 shrink-0 transition-colors",
              isScrolled ? "bg-dark-green/25" : "bg-white/25"
            )} 
          />

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 shrink-0">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "group relative py-0.5 text-xs sm:text-sm font-semibold tracking-wide transition-colors whitespace-nowrap shrink-0",
                  isScrolled 
                    ? "text-dark-green/80 hover:text-dark-green" 
                    : "text-white/85 hover:text-white"
                )}
              >
                {link.name}
                <span 
                  className={cn(
                    "absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 ease-out group-hover:w-full rounded-sm",
                    isScrolled ? "bg-dark-green" : "bg-[#AAFFC7]"
                  )} 
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden relative z-50 p-1 transition-colors rounded-lg shrink-0",
              isScrolled ? "text-dark-green hover:bg-dark-green/10" : "text-white hover:bg-white/10"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Dropdown & Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Dimmer */}
            <motion.div
              key="mobile-backdrop"
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Floating Dropdown Card */}
            <motion.div
              key="mobile-card"
              className={cn(
                "md:hidden fixed top-16 sm:top-20 inset-x-4 max-w-sm mx-auto z-50 rounded-xl p-6 shadow-2xl border flex flex-col items-center gap-4 text-center",
                isScrolled 
                  ? "bg-[#FFF78D]/98 border-dark-green/20 text-dark-green shadow-dark-green/20" 
                  : "bg-[#071F17]/95 border-white/20 text-white shadow-black/50 backdrop-blur-xl"
              )}
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="flex flex-col items-center gap-3.5 w-full">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-base font-semibold tracking-tight transition-colors py-2 w-full text-center rounded-lg active:scale-98",
                      isScrolled 
                        ? "text-dark-green hover:bg-dark-green/10" 
                        : "text-[#FAFFCB] hover:bg-white/10"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

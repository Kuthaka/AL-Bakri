"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Question", href: "/#question" },
  { name: "Our Source", href: "/#source" },
  { name: "Products", href: "/#products" },
  { name: "Story to Process", href: "/#process" },
  { name: "Quality", href: "/#quality" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const lenis = useLenis();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/", "");
      const el = document.querySelector(targetId);
      if (el) {
        if (lenis) {
          lenis.scrollTo(el as HTMLElement, { offset: -30, duration: 1.2 });
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  const isDarkHero = pathname === "/";

  return (
    <>
      <motion.header
        className={cn(
          "fixed z-50 transition-all duration-300 ease-in-out px-6 md:px-8 left-4 right-4 md:left-8 md:right-8 lg:left-1/2 lg:-translate-x-1/2 lg:w-[calc(100%-4rem)] lg:max-w-7xl",
          isScrolled 
            ? "top-4 py-4 bg-[#FFF78D]/90 backdrop-blur-md border border-dark-green/10 shadow-lg rounded-2xl" 
            : "top-4 sm:top-5 md:top-6 lg:top-7 py-3 md:py-4 bg-transparent border border-transparent rounded-none"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className={cn(
              "relative z-50 text-2xl font-bold tracking-tight uppercase transition-colors shrink-0",
              isScrolled || !isDarkHero ? "text-dark-green" : "text-white"
            )}
          >
            Al Bakri
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "group relative py-1 text-xs lg:text-sm font-semibold tracking-wide whitespace-nowrap transition-colors",
                  isScrolled || !isDarkHero
                    ? "text-dark-green/80 hover:text-dark-green" 
                    : "text-white/85 hover:text-white"
                )}
              >
                {link.name}
                <span 
                  className={cn(
                    "absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 ease-out group-hover:w-full rounded-full",
                    isScrolled || !isDarkHero ? "bg-dark-green" : "bg-white"
                  )} 
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block shrink-0">
            <Link
              href="/contact"
              className={cn(
                "group flex items-center gap-2 px-5 lg:px-6 py-2.5 rounded-xl text-xs lg:text-sm font-medium transition-all shadow-sm",
                isScrolled || !isDarkHero
                  ? "bg-dark-green text-ivory hover:bg-dark-green/90" 
                  : "bg-white text-dark-green hover:bg-white/90 font-semibold"
              )}
            >
              Let&apos;s Talk
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden relative z-50 p-2 transition-colors",
              isScrolled || isMobileMenuOpen || !isDarkHero ? "text-dark-green" : "text-white"
            )}
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
          <nav className="flex flex-col items-center gap-6 text-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative py-1 text-2xl sm:text-3xl font-bold tracking-tight text-dark-green"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-dark-green transition-all duration-300 ease-out group-hover:w-full rounded-full" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-6 bg-dark-green text-ivory px-8 py-3.5 rounded-xl text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let&apos;s Talk
            </Link>
          </nav>
        </motion.div>
      )}
    </>
  );
}

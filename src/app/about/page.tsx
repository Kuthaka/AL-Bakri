"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Leaf, Shield, Globe, Award, Sparkles, Sprout } from "lucide-react";

const STATS = [
  { value: "100%", label: "Direct Sourced", sub: "Zero unvetted middlemen" },
  { value: "50k+", label: "Metric Tons", sub: "Annual global trade movement" },
  { value: "28+", label: "Grower Alliances", sub: "Across prime agricultural regions" },
  { value: "99.4%", label: "Cold-Chain Integrity", sub: "Temperature-locked logistics" },
];

const PILLARS = [
  {
    num: "01",
    title: "Direct Orchard Alliances",
    desc: "We bypass multi-layered brokerage networks to deal face-to-face with agrarian families and certified cooperatives who respect the land.",
    icon: Sprout,
  },
  {
    num: "02",
    title: "Soil & Vitality First",
    desc: "Premium taste is determined weeks before flowering. We mandate regenerative soil practices, clean irrigation, and natural ripening cycles.",
    icon: Leaf,
  },
  {
    num: "03",
    title: "Unbroken Refrigeration",
    desc: "From field pre-cooling to temperature-monitored marine reefers and air freight, freshness is mathematically preserved at every transit node.",
    icon: Shield,
  },
  {
    num: "04",
    title: "Global Supply Dependability",
    desc: "Operating regional distribution hubs in Dubai, Europe, and Asia ensures your business maintains inventory certainty regardless of market volatility.",
    icon: Globe,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-ivory text-dark-green min-h-screen pt-24 sm:pt-28 md:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

        {/* ─── 1. HERO BANNER WITH BACKGROUND IMAGE ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-black/10 min-h-[60vh] sm:min-h-[70vh] flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 text-white mb-16 md:mb-24"
        >
          {/* Background Image with Cinematic Micro-Motion */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
            <motion.img
              src="/bg/bg-005.jpg"
              alt="Al Bakri Heritage Orchard"
              className="w-full h-full object-cover object-right will-change-transform"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.07, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-dark-green/75 backdrop-blur-[1px]" />
          </div>

          {/* Top Badge */}
          <div className="relative z-10">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase border border-white/20 rounded-full px-5 py-2 backdrop-blur-md bg-white/10">
              01 / Our Story &amp; Heritage
            </span>
          </div>

          {/* Headline & Abstract */}
          <div className="relative z-10 max-w-4xl my-auto py-12">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.88] mb-6">
              Rooted in Soil.<br />
              <span className="text-[#AAFFC7] italic font-serif lowercase">driven by integrity.</span>
            </h1>
            <p className="text-base sm:text-xl text-[#EDE9E6] max-w-2xl leading-relaxed text-balance">
              Al Bakri Trading was established on a simple conviction: fresh produce should never lose its vitality between the tree and the consumer. Today, we bridge generational agricultural wisdom with world-class international cold logistics.
            </p>
          </div>

          {/* Bottom Trust Line */}
          <div className="relative z-10 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#AAFFC7]" />
              <span>International Wholesale &amp; Reefer Distribution</span>
            </div>
            <span className="font-mono text-[#AAFFC7]">EST. GLOBAL COMMERCE</span>
          </div>
        </motion.div>

        {/* ─── 2. NUMERICAL SCALE MATRIX ─── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20 md:mb-32">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-dark-green/10 shadow-sm flex flex-col justify-between"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-green tracking-tight mb-2">
                {stat.value}
              </span>
              <div>
                <h4 className="text-sm sm:text-base font-bold uppercase tracking-tight text-dark-green">
                  {stat.label}
                </h4>
                <p className="text-xs text-dark-green/60 mt-0.5">
                  {stat.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── 3. THE FOUNDATIONAL STORY (SPLIT GRID) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 md:mb-36">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase border border-dark-green/20 rounded-full px-4 py-1.5 w-max">
              02 / The Genesis
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.92]">
              Honoring The Land,<br />
              <span className="text-leaf italic font-serif lowercase">respecting the grower.</span>
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-dark-green/75 leading-relaxed">
              <p>
                In the global produce trade, volume too often overtakes quality. Commercial brokers negotiate from desks thousands of miles away, losing sight of the essential truth: authentic flavor and nutrient density start in carefully nourished soil.
              </p>
              <p>
                At Al Bakri, our agronomists spend more time in orchards and groves than in conference rooms. We partner exclusively with growers who prune for sunlight penetration, harvest during optimal brix levels, and maintain strict environmental hygiene.
              </p>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 rounded-full bg-leaf/15 flex items-center justify-center text-leaf shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-sm text-dark-green">Uncompromising Quality Benchmark</h5>
                <p className="text-xs text-dark-green/65">Every pallet inspected prior to reefer container sealing.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-dark-green/10">
              <img
                src="/story/famers.jpg"
                alt="Al Bakri Partner Farmers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#AAFFC7] block mb-1">Field Collaboration</span>
                <p className="text-sm font-semibold">Generations of agricultural mastery, hand-harvested with pride.</p>
              </div>
            </div>

            {/* Overlapping Floating Inset */}
            <div className="hidden sm:block absolute -bottom-8 -left-8 w-48 sm:w-56 aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="/story/tree.jpg"
                alt="Ripening Citrus Grove"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* ─── 4. CORE OPERATIONAL PILLARS ─── */}
        <div className="mb-24 md:mb-36">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 border border-dark-green/20 rounded-full px-4 py-1.5">
              03 / Principles
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.92]">
              How We Protect<br />
              <span className="text-leaf italic font-serif lowercase">the promise of freshness.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-dark-green/10 shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-dark-green text-ivory flex items-center justify-center shadow-inner">
                        <IconComp className="w-6 h-6 text-leaf" />
                      </div>
                      <span className="font-mono text-xs font-bold text-dark-green/40">{pillar.num}</span>
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-3 text-dark-green">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-dark-green/70 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ─── 5. HARVEST & PACKING SPOTLIGHT ─── */}
        <div className="rounded-3xl md:rounded-[3rem] bg-dark-green text-ivory p-8 sm:p-12 md:p-16 lg:p-20 relative overflow-hidden mb-20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase border border-ivory/20 rounded-full px-4 py-1.5 w-max">
                04 / Cold Logistics
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.92]">
                Precision Grading.<br />
                <span className="text-[#AAFFC7] italic font-serif lowercase">certified export standards.</span>
              </h2>
              <p className="text-sm sm:text-base text-ivory/80 leading-relaxed max-w-xl">
                Every crate is sorted by brix sugar concentration, weight uniformity, and peel integrity. Using modern high-grade protective corrugated boxes and refrigerated sea containers, our produce reaches your loading docks exactly as it left the grove.
              </p>
              
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-white text-dark-green px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#FFF78D] transition-colors shadow-lg"
                >
                  <span>Request Product Specifications</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Images */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-white/10">
                <img
                  src="/story/harvest.jpg"
                  alt="Harvesting Produce"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-white/10 mt-6">
                <img
                  src="/story/packing.png"
                  alt="Export Packing Facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

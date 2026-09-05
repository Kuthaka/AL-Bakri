"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  Globe2,
  ArrowRight
} from "lucide-react";

const INQUIRY_TYPES = [
  "Wholesale Supply",
  "Retail Distribution",
  "Import & Export",
  "Custom Farm Contract",
];

const PRODUCE_OPTIONS = [
  "Mangoes",
  "Grapes",
  "Avocados",
  "Pineapples",
  "Apples",
  "Papayas",
  "Mixed Produce",
];

const GLOBAL_OFFICES = [
  {
    city: "Dubai, UAE",
    region: "Middle East & Gulf HQ",
    address: "Al Aweer Central Fruit & Veg Market, Trade Zone B, Dubai, UAE",
    phone: "+971 4 388 9000",
    email: "dubai@albakritrading.com",
    hours: "Sun – Thu: 7:00 AM – 6:00 PM (GST)",
  },
  {
    city: "Rotterdam, Netherlands",
    region: "European Logistics & Cold Chain Hub",
    address: "Port of Rotterdam, Agri-Cold Terminal 4B, Rotterdam",
    phone: "+31 10 499 8200",
    email: "europe@albakritrading.com",
    hours: "Mon – Fri: 8:00 AM – 5:30 PM (CET)",
  },
  {
    city: "Singapore",
    region: "Asia-Pacific Regional Trade Desk",
    address: "Pasir Panjang Wholesale Centre, West Coast Hwy, Singapore",
    phone: "+65 6788 1200",
    email: "apac@albakritrading.com",
    hours: "Mon – Sat: 8:00 AM – 6:00 PM (SGT)",
  },
];

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState("Wholesale Supply");
  const [selectedProduce, setSelectedProduce] = useState<string[]>(["Mangoes", "Avocados"]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    destination: "",
    volume: "",
    message: "",
  });

  const toggleProduce = (item: string) => {
    setSelectedProduce((prev) =>
      prev.includes(item) ? prev.filter((p) => p !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-ivory text-dark-green min-h-screen pt-24 sm:pt-28 md:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* ─── HERO HEADER BEZEL ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] bg-dark-green text-ivory p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden shadow-2xl border border-black/10 mb-12 md:mb-20"
        >
          {/* Subtle Background Glow & Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#FFF78D]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 border border-ivory/20 rounded-full px-5 py-2">
              01 / Trade &amp; Partnerships Desk
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.88] mb-6">
              Let&apos;s Talk<br />
              <span className="text-leaf italic font-serif lowercase">freshness at scale.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-ivory/80 max-w-2xl leading-relaxed text-balance">
              Whether you are expanding retail distribution, sourcing wholesale container loads, or seeking direct-orchard contracts, our global trade specialists are ready to support your supply chain.
            </p>
          </div>
        </motion.div>

        {/* ─── MAIN CONTENT GRID ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ─── LEFT: INTERACTIVE INQUIRY FORM (7 COLS) ─── */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 border border-dark-green/10 shadow-sm"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center flex flex-col items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-leaf/15 border border-leaf/30 flex items-center justify-center text-leaf">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold uppercase tracking-tight">Inquiry Received</h3>
                <p className="text-dark-green/75 text-base max-w-md leading-relaxed">
                  Thank you, <span className="font-semibold text-dark-green">{formData.name || "partner"}</span>. Our commercial produce team has received your inquiry and will contact you with product specifications and price quotations within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-8 py-3 bg-dark-green text-ivory hover:bg-dark-green/90 rounded-full text-xs uppercase font-bold tracking-widest transition-all"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* 1. Inquiry Purpose Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-dark-green/60 mb-3">
                    Inquiry Nature
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {INQUIRY_TYPES.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setInquiryType(type)}
                        className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full border transition-all ${
                          inquiryType === type
                            ? "bg-dark-green text-ivory border-dark-green shadow-sm"
                            : "bg-ivory/60 text-dark-green/80 border-dark-green/15 hover:border-dark-green/40"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Contact Fields Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-dark-green/70 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Al Mansoori"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-ivory/50 border border-dark-green/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-leaf focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-dark-green/70 mb-2">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Fresh Logistics LLC"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-ivory/50 border border-dark-green/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-leaf focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* 3. Contact Fields Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-dark-green/70 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="trade@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-ivory/50 border border-dark-green/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-leaf focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-dark-green/70 mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-ivory/50 border border-dark-green/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-leaf focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* 4. Target Produce Multi-Select */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-dark-green/70 mb-2.5">
                    Target Produce Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {PRODUCE_OPTIONS.map((item) => {
                      const active = selectedProduce.includes(item);
                      return (
                        <button
                          type="button"
                          key={item}
                          onClick={() => toggleProduce(item)}
                          className={`text-xs font-medium px-3.5 py-1.5 rounded-full border transition-colors ${
                            active
                              ? "bg-leaf text-white border-leaf"
                              : "bg-ivory/40 text-dark-green/70 border-dark-green/15 hover:border-dark-green/30"
                          }`}
                        >
                          {active ? "✓ " : "+ "} {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 5. Destination & Estimated Volume */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-dark-green/70 mb-2">
                      Destination Port / City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jebel Ali Port, Dubai"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full bg-ivory/50 border border-dark-green/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-leaf focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-dark-green/70 mb-2">
                      Estimated Volume
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2 x 40ft Reefer Containers"
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="w-full bg-ivory/50 border border-dark-green/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-leaf focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* 6. Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-dark-green/70 mb-2">
                    Specifications or Detailed Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your delivery timeline, preferred packaging standards, or seasonal demand..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-ivory/50 border border-dark-green/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-leaf focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-dark-green hover:bg-dark-green/90 text-ivory py-4 px-8 rounded-full font-bold uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl active:scale-[0.99]"
                >
                  <span>Dispatch B2B Inquiry</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </motion.div>

          {/* ─── RIGHT: REGIONAL TRADE HUBS & DIRECT DESKS (5 COLS) ─── */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-6 sm:gap-8"
          >
            
            {/* Quick Contact Overview Card */}
            <div className="bg-dark-green text-ivory rounded-3xl p-6 sm:p-8 border border-dark-green/10 shadow-lg">
              <span className="text-[10px] font-bold text-leaf uppercase tracking-widest block mb-2">
                Immediate Assistance
              </span>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Direct Commercial Desks</h3>
              <p className="text-xs sm:text-sm text-ivory/75 leading-relaxed mb-6">
                Our commodities traders and agronomists operate across key time zones to ensure seamless cross-border coordination.
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                <a 
                  href="mailto:contact@albakrifresh.com" 
                  className="flex items-center gap-3 text-ivory hover:text-leaf transition-colors p-3 rounded-2xl bg-white/5 border border-white/5"
                >
                  <Mail className="w-4 h-4 text-leaf shrink-0" />
                  <span className="font-medium">contact@albakrifresh.com</span>
                </a>
                <a 
                  href="tel:+971500000000" 
                  className="flex items-center gap-3 text-ivory hover:text-leaf transition-colors p-3 rounded-2xl bg-white/5 border border-white/5"
                >
                  <Phone className="w-4 h-4 text-leaf shrink-0" />
                  <span className="font-medium">+971 50 000 0000</span>
                </a>
                <div className="flex items-center gap-3 text-ivory/80 p-3 rounded-2xl bg-white/5 border border-white/5">
                  <Clock className="w-4 h-4 text-leaf shrink-0" />
                  <span>24/7 Reefer Tracking Support</span>
                </div>
              </div>
            </div>

            {/* Global Distribution Hubs */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-dark-green/60 px-2">
                Operational Trading Hubs
              </h4>
              {GLOBAL_OFFICES.map((office) => (
                <div
                  key={office.city}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-dark-green/10 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-base text-dark-green">{office.city}</h5>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-leaf bg-leaf/10 px-2.5 py-0.5 rounded-full">
                      {office.region}
                    </span>
                  </div>
                  <p className="text-xs text-dark-green/70 leading-relaxed mb-3 flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-dark-green/40 mt-0.5 shrink-0" />
                    <span>{office.address}</span>
                  </p>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-xs text-dark-green/80 pt-3 border-t border-dark-green/5">
                    <span>{office.phone}</span>
                    <span className="text-leaf font-semibold">{office.email}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Guarantees Box */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-[#AAFFC7]/20 border border-[#AAFFC7]/50 rounded-2xl">
              <div className="flex flex-col items-center text-center gap-1.5 p-2">
                <ShieldCheck className="w-5 h-5 text-dark-green" />
                <span className="text-[11px] font-bold text-dark-green leading-tight">Global GAP Certified</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5 p-2 border-x border-dark-green/10">
                <Truck className="w-5 h-5 text-dark-green" />
                <span className="text-[11px] font-bold text-dark-green leading-tight">Cold-Chain Monitored</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5 p-2">
                <Globe2 className="w-5 h-5 text-dark-green" />
                <span className="text-[11px] font-bold text-dark-green leading-tight">Port-to-Door Delivery</span>
              </div>
            </div>

          </motion.div>
        </div>

        {/* ─── BOTTOM LINK TO CATALOG ─── */}
        <div className="mt-20 pt-10 border-t border-dark-green/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold uppercase tracking-tight">Need Immediate Produce Availability?</h4>
            <p className="text-xs sm:text-sm text-dark-green/70">Browse our active harvest catalogue for seasonal arrivals.</p>
          </div>
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-dark-green border-b border-dark-green pb-1 hover:text-leaf hover:border-leaf transition-colors"
          >
            <span>Explore Fresh Picks</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}

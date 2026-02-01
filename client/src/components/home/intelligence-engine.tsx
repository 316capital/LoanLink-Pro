import { motion } from "framer-motion";
import { Cpu, Network, Zap, Share2, Binary, Activity, Layers, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function IntelligenceEngine() {
  const steps = [
    {
      icon: Binary,
      title: "Project Neural Mapping",
      desc: "The moment you submit a deal, our system maps it across 50+ variables: asset class, zip-code liquidity, SOW complexity, and borrower experience."
    },
    {
      icon: Layers,
      title: "Institutional Alignment Layer",
      desc: "Our database tracks the 'buy box' of the top institutional funds in the country. We know which funds are over-allocated and which are hungry for your specific deal today."
    },
    {
      icon: Target,
      title: "The 'Best-Execution' Match",
      desc: "Instead of a 'one-size-fits-all' rate, our engine routes your deal to the specific institutional pocket that offers the highest LTV and the lowest cost of capital."
    },
    {
      icon: Share2,
      title: "Frictionless Syndication",
      desc: "Our automated backend handles institutional compliance and term-sheet generation, cutting weeks out of the traditional closing cycle."
    }
  ];

  const partners = [
    "Private Equity Groups",
    "Institutional Hedge Funds",
    "Insurance Credit Funds",
    "Family Offices"
  ];

  return (
    <section id="intelligence" className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="border-gold-500/50 text-gold-600 rounded-none px-4 py-1 font-bold text-[10px] uppercase tracking-widest mb-6 bg-white">
              Institutional Speed
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-navy-950 mb-6 uppercase tracking-tight leading-none">
              The 316 <br/><span className="text-gold-600">Intelligence Engine</span>
            </h2>
            <p className="text-lg text-navy-900/80 mb-8 leading-relaxed font-medium">
              We've replaced legacy bureaucracy with high-velocity capital allocation. Our proprietary underwriting engine processes complex deal structures in hours, not weeks.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "AI Allocation", value: "Real-Time" },
                { label: "Data-Driven", value: "Precision" }
              ].map((stat, i) => (
                <div key={i} className="bg-navy-50 p-4 border-l-2 border-gold-500">
                  <div className="text-[10px] font-bold text-navy-900/50 uppercase tracking-widest mb-1">{stat.label}</div>
                  <div className="text-xl font-bold text-navy-950">{stat.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute inset-0 bg-gold-500/5 blur-3xl rounded-full" />
            <div className="relative bg-navy-950 p-8 border border-navy-900 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-gold-500 animate-pulse" />
                    <span className="text-xs font-bold text-white uppercase tracking-widest">Scanning Markets</span>
                  </div>
                  <span className="text-[10px] font-mono text-gold-500">v4.2.0</span>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="h-2 bg-white/5 w-full rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${40 + i * 20}%` }}
                        transition={{ duration: 1.5, delay: i * 0.2 }}
                        className="h-full bg-gold-500/30"
                      />
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Underwriting Status</div>
                  <div className="text-2xl font-bold text-white tracking-tighter">OPTIMIZED ALLOCATION</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

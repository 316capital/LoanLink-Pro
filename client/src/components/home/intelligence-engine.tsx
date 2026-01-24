import { motion } from "framer-motion";
import { Cpu, Network, Zap, Share2, Binary, Activity, Layers, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section id="intelligence" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle tech background elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#eab308_0%,transparent_50%)]" />
        <div className="grid grid-cols-12 h-full w-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-navy-950/20" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/30 px-4 py-1.5 rounded-full mb-6"
          >
            <Activity className="h-4 w-4 text-gold-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold-600">The 316 Intelligence™ Engine</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-navy-950 mb-6 tracking-tight"
          >
            Precision <span className="text-gold-500">Capital Routing</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            We don’t just lend; we optimize. Our proprietary engine analyzes your deal against thousands of institutional data points to route your project to the most aggressive capital source in real-time.
          </motion.p>
        </div>

        {/* Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="relative p-8 bg-white border border-gray-100 shadow-sm group hover:border-gold-500/30 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-gold-500 group-hover:h-full transition-all duration-500" />
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-gold-500/10 text-gold-600">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="text-navy-950 font-bold text-lg mb-4 uppercase tracking-wide group-hover:text-gold-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Network Visual */}
        <div className="text-center">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-12"
          >
            The 316 Network
          </motion.h3>
          
          <div className="relative py-12">
            {/* Pulsing lines background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <motion.div 
                 animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="w-[600px] h-[600px] rounded-full border border-gold-500/20"
               />
               <motion.div 
                 animate={{ scale: [1, 1.5, 1], opacity: [0.02, 0.05, 0.02] }}
                 transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                 className="w-[800px] h-[800px] rounded-full border border-gold-500/10"
               />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              {partners.map((partner, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex flex-col items-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-navy-50/50 border border-navy-100 flex items-center justify-center mb-4 group-hover:border-gold-500/50 group-hover:bg-gold-500/10 transition-all duration-500 relative">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                      className="absolute inset-0 rounded-full border border-gold-500/0 group-hover:border-gold-500/20"
                    />
                    <Cpu className="h-6 w-6 text-navy-400 group-hover:text-gold-600" />
                  </div>
                  <span className="text-xs font-bold text-gray-400 group-hover:text-navy-950 transition-colors uppercase tracking-widest text-center px-4">
                    {partner}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-20 flex flex-col md:flex-row items-center justify-center gap-12"
          >
            <div className="text-left bg-navy-50/50 p-8 border border-navy-100 max-w-md w-full">
              <h4 className="text-navy-950 font-bold uppercase tracking-widest text-xs mb-6 pb-2 border-b border-navy-200">Borrower Requirements</h4>
              <div className="grid grid-cols-1 gap-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  <span className="text-xs font-bold text-navy-900 uppercase tracking-tight">Min. 620 FICO Score</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  <span className="text-xs font-bold text-navy-900 uppercase tracking-tight">LLC Borrowers Only</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  <span className="text-xs font-bold text-navy-900 uppercase tracking-tight">Non-Owner Occupied Only</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  <span className="text-xs font-bold text-navy-900 uppercase tracking-tight">US-Based Assets Only</span>
                </div>
              </div>
            </div>

            <Button className="bg-navy-950 hover:bg-navy-900 text-white font-bold rounded-none px-12 py-7 text-sm uppercase tracking-[0.2em] shadow-xl transition-all h-fit">
              Initiate Neural Match
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

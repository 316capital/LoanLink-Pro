import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, TrendingUp, Zap, Layers } from "lucide-react";

export default function BrrrrProduct() {
  return (
    <div className="pt-20">
      <section className="bg-navy-950 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,rgba(242,193,0,0.1),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/20 px-4 py-1.5 rounded-full mb-6"
            >
              <Zap className="h-3 w-3 text-gold-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-500">Strategic Portfolio Scaling</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tight leading-tight">
              BRRRR <br /> <span className="text-gold-500">Method Capital</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-medium">
              The ultimate financing stack for investors who Buy, Rehab, Rent, Refinance, and Repeat. We fund the entire lifecycle.
            </p>
            <Button 
              size="lg"
              className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-10 py-7 rounded-none transition-all hover:scale-105"
              onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
            >
              Start Your Strategy
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Bridge Rate", value: "7.90%+" },
              { label: "Refi LTV", value: "80%" },
              { label: "Seasoning", value: "0-6 Months" },
              { label: "Cycle Speed", value: "Fastest" }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-navy-950">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-3xl font-bold text-navy-950 uppercase mb-8 tracking-tight">Recycle Your Capital with Precision</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed font-medium">
                <p>
                  The BRRRR method is the most powerful tool in a real estate investor's arsenal, but it requires perfect coordination of capital. We provide the short-term bridge to acquisition and the long-term DSCR exit under one roof, minimizing fees and maximizing speed.
                </p>
                <div className="space-y-4 pt-4">
                  {[
                    "Bridge-to-DSCR combined closings",
                    "Cash-out refinance based on new ARV",
                    "No seasoning options available",
                    "Dedicated portfolio managers",
                    "Gap funding for experienced investors"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-gold-500" />
                      <span className="text-navy-950 font-bold text-sm uppercase tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Card className="rounded-none border-navy-950/10 shadow-2xl bg-navy-950 text-white p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Layers className="h-32 w-32" />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-8 relative z-10">Lifecycle Strategy</h3>
              <div className="space-y-6 relative z-10">
                {[
                  { label: "Phase 1 (Acquire)", value: "90% Purchase Price" },
                  { label: "Phase 2 (Rehab)", value: "100% Construction" },
                  { label: "Phase 3 (Rent)", value: "DSCR Underwriting" },
                  { label: "Phase 4 (Refi)", value: "80% LTV Cash-Out" },
                  { label: "Target ROI", value: "Maximize Equity Recapture" }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-gray-400 text-sm uppercase font-bold tracking-wider">{row.label}</span>
                    <span className="text-gold-500 font-bold text-sm">{row.value}</span>
                  </div>
                ))}
              </div>
              <Button 
                className="w-full mt-10 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold rounded-none py-6 uppercase tracking-widest text-xs"
                onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
              >
                Plan Your Next Cycle
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Building2, Zap, Clock, Shield } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import newConstructionHero from "@/assets/images/new-construction-hero.jpg";

export default function ConstructionProduct() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Institutional Hero Section */}
        <section className="relative min-h-[85vh] flex items-center bg-[#001A54] text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={newConstructionHero} 
              alt="New Construction Financing" 
              className="w-full h-full object-cover brightness-[0.7] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-[#001A54]/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001A54]/95 via-[#001A54]/40 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center space-x-2 bg-[#F2C100]/20 border border-[#F2C100]/40 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md">
                <Zap className="h-3 w-3 text-[#F2C100] fill-current" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Institutional Build Capital</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tight leading-[1.1] mb-8 text-white">
                New <br /> 
                <span className="text-[#F2C100] italic font-medium">Construction</span>
              </h1>
              <h2 className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-medium max-w-2xl">
                Strategic vertical financing for single-family, multi-unit, and build-to-rent projects. Build with institutional certainty.
              </h2>
              <Button 
                size="lg"
                className="bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-black px-12 py-8 rounded-none transition-all uppercase tracking-widest text-sm shadow-[0_20px_50px_rgba(242,193,0,0.2)]"
                onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
              >
                Fund Your Build
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Core Parameters Table */}
        <section className="bg-navy-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Interest Rates", value: "8.99%+" },
                { label: "Max LTC", value: "85%" },
                { label: "Max LTV", value: "70%" },
                { label: "Term", value: "18-24 Mo" }
              ].map((stat, i) => (
                <div key={i} className="text-center border-l border-white/10 first:border-0">
                  <p className="text-[#F2C100] font-mono text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-gold-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">About the Solution</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-[#001A54] uppercase tracking-tight mb-8 leading-tight">
                  Vertical Financing. <br /> <span className="text-gold-600 italic font-medium">Without the Friction.</span>
                </h3>
                <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-lg">
                  <p>
                    Ground-up construction requires a lender who understands the build cycle. Our construction capital provides seamless vertical funding with non-Dutch interest, institutional-grade draw management, and a focus on speed to market.
                  </p>
                  <div className="space-y-4 pt-4">
                    {[
                      "Funding for horizontal & vertical costs",
                      "Non-Dutch interest (Pay only on drawn capital)",
                      "Modular and Build-to-Rent welcome",
                      "Up to 85% LTC for experienced builders",
                      "Interest reserves included in loan"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-gold-500" />
                        <span className="text-[#001A54] font-bold text-sm uppercase tracking-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-2 text-[#001A54]/60 font-bold uppercase tracking-[0.2em] text-[10px]">
                    <Clock className="h-3 w-3 fill-current text-gold-500" />
                    <span>24-Hour Term Sheets</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#001A54]/60 font-bold uppercase tracking-[0.2em] text-[10px]">
                    <Shield className="h-3 w-3 fill-current text-gold-500" />
                    <span>Swift Draw Process</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="rounded-none border-none shadow-2xl bg-[#001A54] text-white p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Building2 className="h-32 w-32" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase mb-8 relative z-10 text-[#F2C100]">Build Parameters</h3>
                  <div className="space-y-6 relative z-10">
                    {[
                      { label: "Asset Classes", value: "SFH, Multi-Family, BTR" },
                      { label: "LTC Limit", value: "Up to 85%" },
                      { label: "Land Basis", value: "Up to 50% of value" },
                      { label: "Interest Reserves", value: "12-18 Months" },
                      { label: "Exit Strategy", value: "Sale or Refinance" }
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between border-b border-white/10 pb-4">
                        <span className="text-gray-400 text-sm uppercase font-bold tracking-wider">{row.label}</span>
                        <span className="text-[#F2C100] font-bold text-sm">{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full mt-12 bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-black rounded-none py-8 uppercase tracking-widest text-sm"
                    onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
                  >
                    Request Build Terms
                  </Button>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-[#001A54] text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gold-500 opacity-[0.03] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-tight">
              Institutional Capital <br /> for Your <span className="text-gold-500 italic font-medium">Vision.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
              We provide the leverage. You provide the execution. Let's build together.
            </p>
            <Button 
              size="lg"
              className="bg-gold-500 hover:bg-gold-600 text-[#001A54] font-black px-12 py-8 rounded-none transition-all uppercase tracking-widest text-sm shadow-[0_20px_50px_rgba(242,193,0,0.2)]"
              onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
            >
              Get Started With Us
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

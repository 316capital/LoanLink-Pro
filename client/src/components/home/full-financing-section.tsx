import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, TrendingUp, Lock, CheckCircle2 } from "lucide-react";

export function FullFinancingSection() {
  return (
    <section id="financing-section" className="py-32 bg-[#001A54] relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(242,193,0,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(242,193,0,0.05),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F2C100]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F2C100]/20 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center space-x-3 mb-10">
              <div className="h-px w-8 bg-[#F2C100]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F2C100]">Exclusive Program</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tighter leading-[1.1] mb-10">
              100% <br />
              <span className="text-[#F2C100] italic font-medium">Financing</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-light max-w-2xl border-l-2 border-[#F2C100]/30 pl-8">
              Keep your capital in your pocket. Qualified investors can access <span className="text-white font-bold">full financing</span> on Fix & Flip deals—zero money down on acquisition and rehab.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                { title: "100% Purchase", desc: "Full acquisition coverage" },
                { title: "100% Rehab", desc: "Comprehensive budget funding" },
                { title: "Vault Member Access", desc: "Exclusive to 316 Vault" },
                { title: "Zero Cash Out", desc: "Scale with absolute liquidity" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="group"
                >
                  <div className="flex items-center space-x-4 mb-2">
                    <Zap className="h-4 w-4 text-[#F2C100] group-hover:fill-[#F2C100] transition-all" />
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm">{item.title}</h4>
                  </div>
                  <p className="text-gray-500 text-xs uppercase tracking-tight ml-8">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <Button 
              size="lg"
              className="bg-[#F2C100] hover:bg-white text-[#001A54] font-black px-12 py-8 rounded-none transition-all uppercase tracking-[0.2em] text-xs shadow-[0_20px_40px_rgba(242,193,0,0.2)] hover:shadow-[0_25px_50px_rgba(242,193,0,0.3)] hover:-translate-y-1"
              onClick={() => window.open('https://www.316cap.com/widget/survey/y0pr8ThGeKbm5MRY5GtM?notrack=true', '_blank')}
            >
              Apply for 100% Financing
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative p-1 group">
              {/* Animated Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F2C100] via-[#F2C100]/20 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="bg-[#001440] p-10 md:p-14 relative z-10 backdrop-blur-3xl">
                <div className="flex flex-col items-center text-center mb-12">
                  <div className="h-20 w-20 bg-gradient-to-br from-[#F2C100] to-[#D4A900] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(242,193,0,0.3)]">
                    <Lock className="h-8 w-8 text-[#001A54]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-[0.3em] mb-2">316 Vault</h3>
                  <div className="h-px w-12 bg-[#F2C100]/50" />
                  <p className="mt-4 text-[10px] text-[#F2C100] font-black uppercase tracking-[0.5em]">Member Access Only</p>
                </div>

                <div className="space-y-8 mb-12">
                  {[
                    { icon: Shield, title: "Priority Deal Flow", desc: "First-tier access to capital" },
                    { icon: TrendingUp, title: "Dedicated Desk", desc: "Direct partner-level support" },
                    { icon: Zap, title: "Expedited Closings", desc: "Priority underwriting lane" }
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start space-x-6 group/item">
                      <div className="h-10 w-10 shrink-0 border border-white/10 flex items-center justify-center group-hover/item:border-[#F2C100]/50 transition-colors">
                        <feat.icon className="h-4 w-4 text-[#F2C100]" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-1">{feat.title}</h4>
                        <p className="text-gray-500 text-[10px] uppercase tracking-tighter">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <Button 
                    variant="outline"
                    className="w-full border-white/10 text-white hover:bg-white hover:text-[#001A54] rounded-none py-6 text-[10px] font-bold uppercase tracking-[0.3em] transition-all"
                    onClick={() => window.open('https://316cap.app.clientclub.net/', '_blank')}
                  >
                    Member Login
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

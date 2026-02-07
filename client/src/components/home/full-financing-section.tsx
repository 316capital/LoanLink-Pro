import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, TrendingUp, Lock, CheckCircle2 } from "lucide-react";

export function FullFinancingSection() {
  return (
    <section className="py-24 bg-[#001A54] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(242,193,0,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(242,193,0,0.1),transparent_40%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-[#F2C100] px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-[#001A54]" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#001A54]">Exclusive Program</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight leading-[1.05] mb-6">
              100% <br />
              <span className="text-[#F2C100] italic">Financing</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-medium max-w-lg">
              Keep your capital in your pocket. Qualified investors can access <span className="text-[#F2C100] font-bold">full financing</span> on Fix & Flip deals—no money down on acquisition and rehab.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "100% of Purchase Price Financed",
                "100% of Rehab Costs Covered",
                "Exclusive to 316 Vault Members",
                "Scale Faster with Zero Cash Out of Pocket"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#F2C100] flex-shrink-0" />
                  <span className="text-white font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-bold px-8 py-6 rounded-none transition-all uppercase tracking-widest text-xs shadow-[0_0_30px_rgba(242,193,0,0.3)] hover:shadow-[0_0_40px_rgba(242,193,0,0.5)]"
                onClick={() => window.open('https://www.316cap.com/widget/survey/y0pr8ThGeKbm5MRY5GtM?notrack=true', '_blank')}
              >
                Apply for 100% Financing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-[#F2C100]/20 translate-x-4 translate-y-4" />
            <div className="bg-white p-10 md:p-12 relative shadow-2xl">
              <div className="absolute top-0 left-0 w-2 h-16 bg-[#F2C100]" />
              <div className="absolute top-0 left-0 w-16 h-2 bg-[#F2C100]" />
              
              <div className="flex items-center space-x-3 mb-8">
                <div className="h-12 w-12 bg-[#001A54] flex items-center justify-center">
                  <Lock className="h-6 w-6 text-[#F2C100]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#001A54] uppercase tracking-tight">316 Vault</h3>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">Member Access</p>
                </div>
              </div>

              <p className="text-[#001A54] font-bold text-lg mb-6">
                Apply for 100% financing. Qualified investors get Vault access.
              </p>

              <div className="space-y-4 mb-8 border-t border-gray-100 pt-6">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-[#001A54] mt-0.5" />
                  <div>
                    <p className="font-bold text-[#001A54] text-sm">Priority Deal Flow</p>
                    <p className="text-xs text-gray-500">First access to exclusive lending programs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-[#001A54] mt-0.5" />
                  <div>
                    <p className="font-bold text-[#001A54] text-sm">Dedicated Capital Desk</p>
                    <p className="text-xs text-gray-500">Direct line to your lending team</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-5 w-5 text-[#001A54] mt-0.5" />
                  <div>
                    <p className="font-bold text-[#001A54] text-sm">Expedited Closings</p>
                    <p className="text-xs text-gray-500">Vault members close faster</p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4 border-t border-gray-100">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-4">Already a Vault member?</p>
                <Button 
                  variant="outline"
                  className="w-full border-[#001A54] text-[#001A54] hover:bg-[#001A54] hover:text-white rounded-none text-xs font-bold uppercase tracking-widest transition-all"
                  onClick={() => window.open('https://316cap.app.clientclub.net/', '_blank')}
                >
                  Access Your Vault
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

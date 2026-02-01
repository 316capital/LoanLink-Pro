import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import partnershipImg from "@/assets/images/partnership.jpg";

export function PartnershipSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#F2C100] font-black uppercase tracking-[0.3em] text-[10px] mb-4">Partner With 316</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#001A54] uppercase tracking-tight mb-8 leading-tight">
              A Relationship Built on <br />
              <span className="text-[#F2C100] italic font-medium">Institutional Trust.</span>
            </h3>
            
            <div className="space-y-6 text-[#001A54]/80 leading-relaxed font-medium text-lg mb-10">
              <p>
                At 316 Capital, we view every closing not just as a transaction, but as the beginning of a long-term strategic partnership. Our goal is to provide the reliable capital you need to scale your real estate portfolio with confidence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Direct Access to Decision Makers",
                  "Dedicated Relationship Managers",
                  "Fast & Transparent Underwriting",
                  "Nationwide Lending Capacity"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-[#F2C100]" />
                    <span className="text-sm font-bold uppercase tracking-tight text-[#001A54]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-black px-10 py-7 rounded-none transition-all uppercase tracking-widest text-xs shadow-xl"
              onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 border-2 border-[#F2C100]/20 translate-x-6 translate-y-6" />
            <div className="relative shadow-2xl overflow-hidden rounded-sm">
              <img 
                src={partnershipImg} 
                alt="316 Capital Partnership" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

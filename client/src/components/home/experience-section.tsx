import { Shield, Zap, TrendingUp, Cpu, Network } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import bostonLandmark from "@/assets/images/boston-landmark.jpg";

export function ExperienceSection() {
  return (
    <section id="about" className="py-24 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={ { opacity: 0, x: -30 } }
            whileInView={ { opacity: 1, x: 0 } }
            viewport={ { once: true } }
            transition={ { duration: 0.6 } }
            className="lg:col-span-7"
          >
            <h2 className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-4 italic">The 316 Network</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-[#001A54] mb-8 leading-[1.1] uppercase tracking-tight">
              One Interface. <br/>
              Infinite <span className="text-gold-600 italic font-medium">Capital.</span>
            </h3>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-medium">
              316 Capital connects elite developers with high-liquidity funds, removing traditional financing friction through smart underwriting and direct-to-desk execution.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {[
                { icon: Cpu, title: "Smart Underwriting", text: "Proprietary systems that analyze complex deals faster than traditional banks." },
                { icon: Network, title: "Lending Network", text: "Access to the most aggressive capital providers in the market through one partner." },
                { icon: Zap, title: "High Velocity", text: "Built for developers who need capital at the speed of construction." },
                { icon: Shield, title: "Proven Stability", text: "Institutional-grade certainty for professional real estate investors." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col space-y-3">
                  <div className="h-12 w-12 rounded-none border border-navy-950/10 flex items-center justify-center bg-white shadow-sm">
                    <item.icon className="h-5 w-5 text-navy-950" />
                  </div>
                  <h4 className="font-bold text-navy-950 uppercase tracking-tight text-sm">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={ { opacity: 0, x: 30 } }
            whileInView={ { opacity: 1, x: 0 } }
            viewport={ { once: true } }
            transition={ { duration: 0.6 } }
            className="lg:col-span-5 relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 border-2 border-gold-500/10 translate-x-4 translate-y-4" />
              <div className="bg-[#001A54] aspect-[4/5] p-12 flex flex-col justify-between overflow-hidden shadow-2xl relative">
                 <motion.img 
                   whileHover={ { scale: 1.05 } }
                   transition={ { duration: 0.8 } }
                   src={bostonLandmark} 
                   alt="Boston Institutional Context" 
                   className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#001A54] via-transparent to-transparent opacity-60" />
                 
                 <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                       <TrendingUp className="h-12 w-12 text-[#F2C100]" />
                       <div className="text-right">
                          <span className="block text-[10px] font-black text-[#F2C100] uppercase tracking-[0.2em] mb-1">Regional HQ</span>
                          <span className="text-xs font-bold text-white uppercase tracking-widest border-b border-[#F2C100]/50 pb-1">Boston, MA</span>
                       </div>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-4xl font-bold text-white tracking-tighter uppercase leading-none">Institutional <br/>Roots.</p>
                      <div className="h-1 w-16 bg-[#F2C100]" />
                      <p className="text-sm text-gray-300 font-bold leading-relaxed italic opacity-90">
                        "Experience the advantage of institutional-grade capital combined with deep regional expertise in the Massachusetts market."
                      </p>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

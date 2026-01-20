import { Shield, Zap, TrendingUp, Cpu, Network } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ExperienceSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={ { opacity: 0, x: -30 } }
            whileInView={ { opacity: 1, x: 0 } }
            viewport={ { once: true } }
            transition={ { duration: 0.6 } }
          >
            <h2 className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-4">The 316 Network</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-navy-950 mb-8 leading-tight">
              One Interface. <br/>
              Infinite Capital.
            </h3>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              316 Capital streamlines the lending process by connecting elite developers with a vetted network of high-liquidity institutional funds. We eliminate the friction of traditional financing through smart underwriting and direct-to-desk execution.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {[
                { icon: Cpu, title: "Smart Underwriting", text: "Proprietary systems that analyze complex deals faster than traditional banks." },
                { icon: Network, title: "Lending Network", text: "Access to the most aggressive capital providers in the market through one partner." },
                { icon: Zap, title: "High Velocity", text: "Built for developers who need capital at the speed of construction." },
                { icon: Shield, title: "Proven Stability", text: "Over $4B in historical volume ensures your project is funded to completion." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col space-y-3">
                  <div className="h-10 w-10 rounded bg-navy-50 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-navy-950" />
                  </div>
                  <h4 className="font-bold text-navy-950">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-navy-950 border border-gold-500/20 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Shield className="h-24 w-24 text-gold-500" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h4 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-2">Transparent Underwriting</h4>
                  <p className="text-white font-bold text-lg mb-1">24-Hour Term Sheet Guarantee</p>
                  <p className="text-gray-400 text-sm">Get a formal term sheet within 24 hours of submission or we’ll tell you why.</p>
                </div>
                <div className="shrink-0 flex flex-col items-center">
                  <div className="text-3xl font-bold text-white mb-1 font-mono tracking-tighter">48-HOUR</div>
                  <div className="text-[10px] font-bold text-gold-500 uppercase tracking-widest">Draw Trust Badge</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-12 py-6 border-y border-gray-100">
              <div className="text-center">
                <span className="block text-2xl font-bold text-navy-950">$4.2B+</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Capital Deployed</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-navy-950">90%</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Max LTC Leverage</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-navy-950">24H</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Underwriting</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={ { opacity: 0, x: 30 } }
            whileInView={ { opacity: 1, x: 0 } }
            viewport={ { once: true } }
            transition={ { duration: 0.6 } }
            className="relative"
          >
            <div className="bg-navy-950 aspect-square p-12 flex flex-col justify-between group overflow-hidden shadow-2xl">
               <motion.img 
                 whileHover={ { scale: 1.1 } }
                 transition={ { duration: 0.8 } }
                 src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                 alt="Modern architectural lines" 
                 className="absolute inset-0 w-full h-full object-cover opacity-20"
               />
               <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                     <TrendingUp className="h-10 w-10 text-gold-500" />
                     <div className="text-right">
                        <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest">Market Advantage</span>
                        <span className="text-xs font-bold text-white uppercase">Institutional Scale</span>
                     </div>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-4xl font-bold text-white tracking-tighter">$4.2B+ Deployed</p>
                    <div className="h-1 w-20 bg-gold-500" />
                    <p className="text-sm text-gray-400 font-medium leading-relaxed italic">
                      "Bridging the gap between ambitious developers and reliable institutional capital."
                    </p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
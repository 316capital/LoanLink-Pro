import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";

export function LendingMap() {
  return (
    <section className="py-24 bg-navy-950 overflow-hidden relative border-y border-white/5">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/20 px-3 py-1 mb-6">
              <Globe className="h-3 w-3 text-gold-500" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-gold-500">Network Distribution</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-none">
              GLOBAL NODE <br/>
              <span className="text-gold-500">COVERAGE.</span>
            </h3>
            <p className="text-xl text-gray-400 mb-8 font-light">
              316 Capital leverages a distributed network of high-liquidity lending nodes across 44 Tier-1 markets. 
            </p>
            
            <div className="space-y-4 mb-10">
               {[
                 { label: "Active Protocol States", value: "44" },
                 { label: "Cross-Market Nodes", value: "850+" },
                 { label: "Deployment Velocity", value: "High" }
               ].map((stat, i) => (
                 <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">{stat.label}</span>
                    <span className="text-lg font-mono text-white">{stat.value}</span>
                 </div>
               ))}
            </div>

            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-black text-xs uppercase tracking-widest px-10 py-7 rounded-none">
              Sync Network Data
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="relative group">
            {/* The "Map" - Represented as a high-tech data visualization */}
            <div className="aspect-square relative bg-white/5 border border-white/10 backdrop-blur-3xl overflow-hidden p-8 flex items-center justify-center">
               {/* Simplified abstract "Map" visualization */}
               <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 800 500" className="w-full h-full fill-gold-500">
                     <path d="M100,100 L200,80 L300,120 L400,90 L500,150 L600,130 L700,180 L750,300 L650,450 L400,480 L200,450 L100,350 Z" />
                  </svg>
               </div>
               
               {/* Pulsing Nodes */}
               <div className="relative w-full h-full">
                  {[
                    { t: "20%", l: "30%" },
                    { t: "45%", l: "60%" },
                    { t: "70%", l: "40%" },
                    { t: "35%", l: "80%" },
                    { t: "60%", l: "15%" },
                    { t: "15%", l: "70%" },
                  ].map((pos, i) => (
                    <div 
                      key={i} 
                      className="absolute h-3 w-3 bg-gold-500 rounded-full animate-pulse-slow" 
                      style={{ top: pos.t, left: pos.l, boxShadow: '0 0 15px #EAB308' }}
                    >
                      <div className="absolute -inset-2 border border-gold-500/30 rounded-full animate-ping"></div>
                    </div>
                  ))}
                  
                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <line x1="30%" y1="20%" x2="60%" y2="45%" stroke="rgba(234,179,8,0.2)" strokeWidth="1" />
                    <line x1="60%" y1="45%" x2="40%" y2="70%" stroke="rgba(234,179,8,0.2)" strokeWidth="1" />
                    <line x1="40%" y1="70%" x2="15%" y2="60%" stroke="rgba(234,179,8,0.2)" strokeWidth="1" />
                    <line x1="80%" y1="35%" x2="60%" y2="45%" stroke="rgba(234,179,8,0.2)" strokeWidth="1" />
                    <line x1="70%" y1="15%" x2="80%" y2="35%" stroke="rgba(234,179,8,0.2)" strokeWidth="1" />
                  </svg>
               </div>
               
               {/* Overlay Data HUD */}
               <div className="absolute top-4 left-4 bg-navy-950/80 border border-white/10 p-3">
                  <span className="text-[8px] font-mono text-gold-500 uppercase block mb-1">Status</span>
                  <span className="text-[10px] font-mono text-white uppercase flex items-center">
                    <span className="h-1.5 w-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    Network Online
                  </span>
               </div>
            </div>
            
            {/* Floating exception info */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-2xl border border-gray-100 max-w-xs">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block">Restricted Nodes</span>
                <p className="text-xs font-bold text-navy-950 leading-relaxed">
                  MN, ND, SD, UT, OR, VT <span className="text-gray-400 font-normal">currently outside protocol distribution range.</span>
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
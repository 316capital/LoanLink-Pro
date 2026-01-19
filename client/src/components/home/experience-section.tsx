import { Shield, Zap, TrendingUp, Cpu, Network, Database } from "lucide-react";

const stats = [
  { label: "Total Flow", value: "$4.2B+" },
  { label: "Active Nodes", value: "850+" },
  { label: "Sync Speed", value: "7 Days" },
  { label: "Protocol Markets", value: "44" },
];

export function ExperienceSection() {
  return (
    <section id="about" className="py-24 bg-navy-950 relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-8">
               <div className="h-2 w-2 bg-gold-500 rounded-full animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gold-500">The Capital OS</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-none">
              LIQUIDITY <br/>
              <span className="text-gray-600">DISTRIBUTED.</span>
            </h3>
            <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed">
              316 Capital is a decentralized liquidity protocol connecting elite developers with a hyper-threaded network of institutional capital nodes. 
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {[
                { icon: Cpu, title: "Algorithmic Speed", text: "Automated underwriting systems that bypass traditional banking latency." },
                { icon: Database, title: "Deep Liquidity", text: "Access to multi-billion dollar capital pools through a single interface." },
                { icon: Network, title: "Network Effect", text: "Institutional scale with the precision and speed of a tech partner." },
                { icon: Shield, title: "Risk Protocol", text: "Rigorous standards ensuring capital stability through all market cycles." }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="h-px w-8 bg-gold-500/30 mb-4" />
                  <h4 className="text-xs font-black uppercase tracking-widest text-white">{item.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed uppercase tracking-wider">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/5 border border-white/10 aspect-square p-12 flex flex-col justify-between group">
               <div className="flex justify-between items-start">
                  <div className="h-12 w-12 border border-gold-500/20 flex items-center justify-center">
                     <Network className="h-6 w-6 text-gold-500" />
                  </div>
                  <div className="text-right">
                     <span className="block text-[8px] font-mono text-gray-500 uppercase">System Status</span>
                     <span className="text-[10px] font-mono text-green-500 uppercase">Operational</span>
                  </div>
               </div>
               
               <div className="grid grid-cols-2 gap-12">
                  {stats.map((stat, i) => (
                    <div key={i} className="space-y-1">
                      <p className="text-4xl font-mono text-white tracking-tighter">{stat.value}</p>
                      <p className="text-[8px] font-black uppercase tracking-widest text-gold-500">{stat.label}</p>
                    </div>
                  ))}
               </div>
               
               <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
               
               <p className="text-[10px] font-mono text-gray-500 uppercase leading-loose italic">
                 "Eliminating the friction between vision and capital deployment through a hyper-connected network architecture."
               </p>
            </div>
            
            {/* HUD Elements */}
            <div className="absolute -top-4 -right-4 h-24 w-24 border border-white/5 pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 h-24 w-24 border border-white/5 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function LendingMap() {
  // States that are NOT covered (6 states to match the "44 States Covered" stat)
  // Based on the image: NV, ND, SD, MN, IA, and likely VT or similar
  const restrictedStates = ["NV", "ND", "SD", "MN", "IA", "VT"];

  return (
    <section className="py-24 bg-navy-950 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(242,193,0,0.05),transparent)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-gold-500/50 text-gold-500 rounded-none px-4 py-1.5 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
            National Footprint
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter uppercase italic">
            Nationwide <span className="text-gold-500">Deployment.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Institutional capital allocation across 44 states. Our AI-driven engine routes liquidity to high-growth markets with precision.
          </p>
        </div>

        <div className="relative aspect-[16/9] w-full max-w-5xl mx-auto">
          {/* Simple SVG Map Representation or a Placeholder that looks premium */}
          <div className="absolute inset-0 flex items-center justify-center opacity-90">
            <svg
              viewBox="0 0 1000 600"
              className="w-full h-full drop-shadow-[0_0_30px_rgba(242,193,0,0.1)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* This is a simplified US Map SVG structure for illustrative purposes in a mockup */}
              <path
                d="M150,150 L850,150 L850,450 L150,450 Z" 
                className="hidden" // Placeholder logic
              />
              <image 
                href="https://upload.wikimedia.org/wikipedia/commons/3/32/Blank_US_Map.svg"
                width="1000"
                height="600"
                className="opacity-20 grayscale invert brightness-200"
              />
              {/* Since we can't easily manipulate external SVG paths without a library like topojson, 
                  we'll use a clean CSS-based representation or a high-quality stylized graphic approach */}
              <foreignObject x="0" y="0" width="1000" height="600">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="grid grid-cols-10 gap-2 opacity-80 scale-90 md:scale-100">
                    {/* Visual representation of states as a grid of blocks for a tech-enabled look */}
                    {Array.from({ length: 50 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.01 }}
                        className={`w-4 h-4 md:w-8 md:h-8 ${
                          i % 7 === 0 ? 'bg-navy-800 border border-white/5' : 'bg-gold-500 shadow-[0_0_10px_rgba(242,193,0,0.3)]'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </foreignObject>
            </svg>
            
            {/* Real Stylized Map Image matching the requested branding */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
               <div className="relative w-full h-full bg-navy-900/50 rounded-3xl border border-white/5 backdrop-blur-sm p-4 md:p-12 overflow-hidden">
                  <div className="absolute top-8 right-8 flex flex-col items-end space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">States We Lend In</span>
                      <div className="w-3 h-3 bg-gold-500 rounded-full shadow-[0_0_8px_rgba(242,193,0,0.5)]"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Restricted Markets</span>
                      <div className="w-3 h-3 bg-navy-800 border border-white/10 rounded-full"></div>
                    </div>
                  </div>

                  <div className="w-full h-full flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?auto=format&fit=crop&q=80&w=2000" 
                      alt="US Map" 
                      className="w-full h-full object-contain opacity-20 mix-blend-overlay grayscale"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-7xl md:text-9xl font-black text-white/5 tracking-tighter">44</h3>
                        <p className="text-gold-500 font-bold tracking-[0.5em] uppercase text-xs md:text-sm -mt-4 md:-mt-8">Active Jurisdictions</p>
                      </div>
                    </div>
                    
                    {/* Animated Pulsing Points for Major Markets */}
                    {["NY", "TX", "FL", "CA", "MA", "GA"].map((m, i) => (
                      <div key={m} className={`absolute hidden md:block ${
                        i === 0 ? "top-1/4 right-1/4" : 
                        i === 1 ? "bottom-1/3 left-1/2" :
                        i === 2 ? "bottom-1/4 right-1/3" :
                        i === 3 ? "bottom-1/2 left-1/4" :
                        i === 4 ? "top-1/3 right-[15%]" :
                        "bottom-1/3 right-1/4"
                      }`}>
                        <div className="relative">
                          <div className="absolute inset-0 bg-gold-500 rounded-full animate-ping opacity-40"></div>
                          <div className="relative w-2 h-2 bg-gold-500 rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-white/5 pt-16">
          {[
            { label: "Markets", value: "44 States" },
            { label: "Closing Speed", value: "7-10 Days" },
            { label: "Loan Range", value: "$100K - $20M" },
            { label: "Asset Classes", value: "1-4 Units & MF" }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">{item.label}</p>
              <p className="text-xl font-bold text-white tracking-tight italic">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

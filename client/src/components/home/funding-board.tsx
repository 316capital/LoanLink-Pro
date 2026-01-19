import { Badge } from "@/components/ui/badge";
import img1 from "@assets/generated_images/modern_luxury_apartment_exterior.png";
import img2 from "@assets/generated_images/steel_frame_construction.png";
import img3 from "@assets/generated_images/modern_urban_townhomes.png";

const fundedDeals = [
  {
    image: img1,
    type: "DSCR Protocol",
    amount: "2.45M",
    location: "TX NODE",
    property: "12-UNIT ASSET",
  },
  {
    image: img2,
    type: "Construction v1",
    amount: "4.10M",
    location: "TN NODE",
    property: "MIXED-USE",
  },
  {
    image: img3,
    type: "Bridge Sync",
    amount: "0.85M",
    location: "NC NODE",
    property: "LUXURY INFRA",
  }
];

export function FundingBoard() {
  return (
    <section id="portfolio" className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <div className="h-1 w-12 bg-gold-500 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">NETWORK DEPLOYMENTS</h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm font-light mt-4 md:mt-0 font-mono">
            LIVE FEED: 42M FLOW Q1 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {fundedDeals.map((deal, index) => (
            <div key={index} className="group relative overflow-hidden bg-white/5 h-[450px] border border-white/5">
              <img 
                src={deal.image} 
                alt={deal.property} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-navy-950/80 group-hover:bg-navy-950/40 transition-all duration-700" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex justify-between items-end mb-8">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold-500 block mb-2">{deal.type}</span>
                    <h3 className="text-2xl font-black tracking-tighter italic">{deal.property}</h3>
                  </div>
                  <span className="font-mono text-3xl font-bold tracking-tighter">${deal.amount}</span>
                </div>
                
                <div className="flex items-center text-[10px] font-black tracking-[0.3em] text-gray-500 space-x-4 border-t border-white/10 pt-4">
                  <span>{deal.location}</span>
                  <span className="h-1 w-1 bg-gold-500 rounded-full" />
                  <span>SYNC COMPLETE</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
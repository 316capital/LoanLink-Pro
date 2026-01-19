import { Badge } from "@/components/ui/badge";
import img1 from "@assets/generated_images/modern_luxury_apartment_exterior.png";
import img2 from "@assets/generated_images/steel_frame_construction.png";
import img3 from "@assets/generated_images/modern_urban_townhomes.png";

const fundedDeals = [
  {
    image: img1,
    type: "DSCR",
    amount: "$2,450,000",
    location: "Austin, TX",
    property: "12-Unit Multifamily",
    purpose: "Refinance"
  },
  {
    image: img2,
    type: "Ground-Up",
    amount: "$4,100,000",
    location: "Nashville, TN",
    property: "Mid-Rise Mixed Use",
    purpose: "Construction"
  },
  {
    image: img3,
    type: "Fix & Flip",
    amount: "$850,000",
    location: "Charlotte, NC",
    property: "Luxury Townhomes",
    purpose: "Acquisition + Rehab"
  }
];

export function FundingBoard() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-2">Just Funded</h2>
            <p className="text-muted-foreground">Live capital deployment board.</p>
          </div>
          <div className="hidden md:block">
             <span className="text-sm font-mono text-gold-600">ACTIVE VOLUME: $42M Q1 2025</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {fundedDeals.map((deal, index) => (
            <div key={index} className="group relative overflow-hidden bg-gray-50 h-[400px]">
              <img 
                src={deal.image} 
                alt={deal.property} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.85] group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-gold-500 text-navy-950 hover:bg-gold-400 font-bold rounded-sm border-none">
                    {deal.type}
                  </Badge>
                  <span className="font-mono text-gold-400 font-bold text-lg">{deal.amount}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-1">{deal.property}</h3>
                <div className="flex items-center text-sm text-gray-300 space-x-2">
                  <span>{deal.location}</span>
                  <span>•</span>
                  <span>{deal.purpose}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
                Recent closings across 42 states. <a href="#" className="text-navy-950 font-bold underline decoration-gold-500 decoration-2 underline-offset-4">View full portfolio</a>
            </p>
        </div>
      </div>
    </section>
  );
}
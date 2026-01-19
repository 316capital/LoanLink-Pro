import { Badge } from "@/components/ui/badge";
import img1 from "@assets/generated_images/modern_luxury_apartment_exterior.png";
import img2 from "@assets/generated_images/steel_frame_construction.png";
import img3 from "@assets/generated_images/modern_urban_townhomes.png";

const fundedDeals = [
  {
    image: img1,
    type: "DSCR Rental",
    amount: "$2.45M",
    location: "Austin, TX",
    property: "12-Unit Multifamily",
  },
  {
    image: img2,
    type: "Ground-Up",
    amount: "$4.10M",
    location: "Nashville, TN",
    property: "Mid-Rise Mixed Use",
  },
  {
    image: img3,
    type: "Bridge Loan",
    amount: "$850K",
    location: "Charlotte, NC",
    property: "Luxury Infill",
  }
];

export function FundingBoard() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold text-navy-950 tracking-tight">Just Funded</h2>
            <p className="text-muted-foreground mt-2">Recently closed deployments across our network.</p>
          </div>
          <div className="h-px flex-grow mx-8 bg-gray-100 hidden md:block" />
          <p className="text-gold-600 font-bold text-sm tracking-widest mt-4 md:mt-0">
            $42M CLOSED Q1 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fundedDeals.map((deal, index) => (
            <div key={index} className="group flex flex-col bg-bone-50 border border-gray-100">
              <div className="h-[300px] overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.property} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <Badge variant="outline" className="border-gold-500/50 text-gold-600 rounded-none px-3 py-1 font-bold text-[10px] uppercase tracking-widest">
                    {deal.type}
                  </Badge>
                  <span className="font-bold text-2xl text-navy-950 tracking-tighter">{deal.amount}</span>
                </div>
                <h3 className="text-lg font-bold text-navy-950 mb-1">{deal.property}</h3>
                <p className="text-sm text-muted-foreground">{deal.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Badge } from "@/components/ui/badge";
import img1 from "@assets/generated_images/modern_luxury_apartment_exterior.png";
import img2 from "@assets/generated_images/steel_frame_construction.png";
import img3 from "@assets/generated_images/modern_urban_townhomes.png";
import { motion } from "framer-motion";

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
    <section id="portfolio" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={ { opacity: 0, y: 20 } }
          whileInView={ { opacity: 1, y: 0 } }
          viewport={ { once: true } }
          className="flex flex-col md:flex-row justify-between items-center mb-16"
        >
          <div>
            <h2 className="text-4xl font-bold text-navy-950 tracking-tight">Just Funded</h2>
            <p className="text-muted-foreground mt-2">Institutional deployments across the 3:16 network.</p>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="h-1 w-12 bg-gold-500" />
            <p className="text-gold-600 font-bold text-sm tracking-widest">
              $42M CLOSED Q1 2025
            </p>
          </div>
        </motion.div>

        <div className="flex overflow-x-auto pb-8 gap-6 no-scrollbar snap-x snap-mandatory">
          {fundedDeals.map((deal, index) => (
            <motion.div 
              key={index} 
              initial={ { opacity: 0, scale: 0.95 } }
              whileInView={ { opacity: 1, scale: 1 } }
              viewport={ { once: true } }
              transition={ { delay: index * 0.1 } }
              className="group flex-shrink-0 w-[320px] md:w-[400px] flex flex-row bg-bone-50 border border-gray-100 hover:shadow-xl transition-all duration-500 snap-center"
            >
              <div className="w-1/3 h-full overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.property} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="w-2/3 p-6 flex flex-col justify-center">
                <div className="flex flex-col mb-4">
                  <span className="font-bold text-xl text-navy-950 tracking-tighter mb-1">{deal.amount}</span>
                  <Badge variant="outline" className="w-fit border-gold-500/50 text-gold-600 rounded-none px-2 py-0.5 font-bold text-[9px] uppercase tracking-widest">
                    {deal.type}
                  </Badge>
                </div>
                <h3 className="text-sm font-bold text-navy-950 truncate">{deal.property}</h3>
                <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-1">{deal.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
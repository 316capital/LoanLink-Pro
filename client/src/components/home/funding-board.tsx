import { Badge } from "@/components/ui/badge";
import img1 from "@assets/generated_images/modern_luxury_apartment_exterior.png";
import img2 from "@assets/generated_images/steel_frame_construction.png";
import img3 from "@assets/generated_images/modern_urban_townhomes.png";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const fundedDeals = [
  {
    image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=600",
    type: "Fix & Flip",
    amount: "$4.2M",
    location: "Cambridge, MA",
    property: "Single Family Rehab",
  },
  {
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600",
    type: "Ground Up",
    amount: "$3.6M",
    location: "East Boston, MA",
    property: "7-Unit Build",
  },
  {
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80&w=600",
    type: "Condo Conversion",
    amount: "$2.8M",
    location: "Roslindale, MA",
    property: "Luxury Conversion",
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600",
    type: "Ground Up",
    amount: "$5.4M",
    location: "Newton, MA",
    property: "Estate Development",
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
    type: "DSCR Rental",
    amount: "$1.2M",
    location: "Taunton, MA",
    property: "Portfolio Acquisition",
  }
];

export function FundingBoard() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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

        <div className="relative group">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-12 gap-6 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          >
            {fundedDeals.map((deal, index) => (
              <motion.div 
                key={index} 
                initial={ { opacity: 0, scale: 0.95 } }
                whileInView={ { opacity: 1, scale: 1 } }
                viewport={ { once: true } }
                transition={ { delay: index * 0.05 } }
                className="group flex-shrink-0 w-[280px] md:w-[320px] flex flex-col bg-bone-50 border border-gray-100 hover:shadow-xl transition-all duration-500 snap-center"
              >
                <div className="h-[380px] overflow-hidden">
                  <img 
                    src={deal.image} 
                    alt={deal.property} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-xl text-navy-950 tracking-tighter">{deal.amount}</span>
                    <Badge variant="outline" className="border-gold-500/50 text-gold-600 rounded-none px-2 py-0.5 font-bold text-[8px] uppercase tracking-widest">
                      {deal.type}
                    </Badge>
                  </div>
                  <h3 className="text-xs font-bold text-navy-950 truncate uppercase tracking-tight">{deal.property}</h3>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">{deal.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              style={ { scaleX } }
              className="absolute top-0 left-0 w-full h-full bg-gold-500 origin-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
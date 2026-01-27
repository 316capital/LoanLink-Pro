import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import propertyDorchester from "@/assets/properties/dorchester-7unit.jpg";

const fundedDeals = [
  {
    image: propertyDorchester,
    type: "DSCR Cash Out",
    amount: "$1.84M",
    location: "Dorchester, MA 02121",
    property: "7-Unit DSCR Portfolio",
  },
  {
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
    type: "Ground Up",
    amount: "$3.6M",
    location: "East Boston, MA",
    property: "7-Unit Build",
  },
  {
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1200",
    type: "Condo Conversion",
    amount: "$2.8M",
    location: "South End, Boston",
    property: "Luxury Conversion",
  },
  {
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=1200",
    type: "Ground Up",
    amount: "$5.4M",
    location: "Seaport, Boston",
    property: "Mixed-Use Development",
  },
  {
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200",
    type: "DSCR Rental",
    amount: "$1.2M",
    location: "Beacon Hill, Boston",
    property: "Multi-Family Acquisition",
  }
];

export function FundingBoard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % fundedDeals.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="portfolio" className="py-24 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center mb-16"
        >
          <div>
            <h2 className="text-4xl font-bold text-navy-950 tracking-tight">Recently Funded</h2>
            <p className="text-muted-foreground mt-2">Institutional deployments across the 316 network.</p>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-1 bg-[#001A54]/10 border border-[#001A54]/20 rounded-full">
              <div className="h-2 w-2 rounded-full bg-[#001A54] animate-pulse" />
              <span className="text-[10px] font-bold text-[#001A54] uppercase tracking-widest">Active Deployments</span>
            </div>
            <div className="h-1 w-12 bg-gold-500" />
            <p className="text-gold-600 font-bold text-sm tracking-widest">
              $42M CLOSED Q1 2025
            </p>
          </div>
        </motion.div>

        <div className="relative h-[500px] md:h-[600px] w-full max-w-4xl mx-auto group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col md:flex-row bg-white border border-gray-100 shadow-2xl"
            >
              <div className="w-full md:w-1/2 h-2/3 md:h-full overflow-hidden">
                <motion.img 
                  src={fundedDeals[currentIndex].image} 
                  alt={fundedDeals[currentIndex].property} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                <div className="mb-6">
                  <Badge variant="outline" className="border-gold-500/50 text-gold-600 rounded-none px-3 py-1 font-bold text-xs uppercase tracking-widest mb-4">
                    {fundedDeals[currentIndex].type}
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-navy-950 mb-2 leading-tight uppercase tracking-tighter">
                    {fundedDeals[currentIndex].property}
                  </h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">
                    {fundedDeals[currentIndex].location}
                  </p>
                </div>
                <div className="pt-8 border-t border-gray-200">
                  <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total Deployment</span>
                  <span className="text-5xl font-bold text-navy-950 tracking-tighter">
                    {fundedDeals[currentIndex].amount}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex space-x-2">
            {fundedDeals.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 transition-all duration-300 ${currentIndex === i ? 'w-8 bg-gold-500' : 'w-2 bg-gray-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
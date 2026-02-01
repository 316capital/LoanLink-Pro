import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote, Play } from "lucide-react";

import propertyDorchester from "@/assets/properties/dorchester-7unit.jpg";
import propertyCambridge from "@/assets/properties/cambridge-fix-flip.jpg";
import propertyBelmont from "@/assets/properties/belmont-fix-flip.jpg";
import propertyTownhomes from "@/assets/properties/luxury-townhomes.jpg";
import propertyRoslindale from "@/assets/properties/roslindale-bridge.jpg";
import propertyStamford from "@/assets/properties/stamford-new-construction.png";

const fundedDeals = [
  {
    image: "/assets/properties/medfield-bridge.jpg",
    type: "Mid-Construction Bridge Refi",
    amount: "$650,000",
    location: "Medfield, MA 02052",
    property: "Residential Refinance",
  },
  {
    image: propertyDorchester,
    type: "DSCR Cash Out",
    amount: "$1.84M",
    location: "Dorchester, MA 02121",
    property: "7-Unit Residential",
  },
  {
    image: propertyStamford,
    type: "New Construction Refinance",
    amount: "$750K",
    location: "Stamford, CT 06902",
    property: "6-Unit Modern Build",
  },
  {
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
    type: "Ground Up",
    amount: "$3.6M",
    location: "East Boston, MA 02128",
    property: "7-Unit Build",
  },
  {
    image: propertyRoslindale,
    type: "Bridge Refinance",
    amount: "$1.2M",
    location: "Roslindale, MA 02131",
    property: "Refinance with Holdback",
  },
  {
    image: propertyTownhomes,
    type: "DSCR Portfolio",
    amount: "$2.2M",
    location: "Canton, GA 30114",
    property: "5 Luxury Townhomes",
  },
  {
    image: propertyCambridge,
    type: "Bridge / Fix & Flip",
    amount: "$2.6M",
    location: "Cambridge, MA 02140",
    property: "Multi-Family Rehab",
  },
  {
    image: propertyBelmont,
    type: "Bridge / Fix & Flip",
    amount: "$1.7M",
    location: "Belmont, MA 02478",
    property: "Residential Rehab",
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
    <section id="portfolio" className="py-20 bg-cream-50 overflow-hidden mb-24 md:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6">
          <Badge variant="outline" className="border-gold-500/50 text-gold-600 rounded-none px-6 py-2 font-black text-[12px] uppercase tracking-[0.4em] bg-white shadow-sm">
            THE PROOF HUB
          </Badge>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center mb-10"
        >
          <div>
            <h2 className="text-4xl font-bold text-navy-950 tracking-tight uppercase">Recently Funded</h2>
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
              className="absolute inset-0 flex flex-col md:flex-row bg-white border border-gray-100 shadow-2xl overflow-hidden"
            >
              <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-hidden relative">
                <motion.img 
                  src={fundedDeals[currentIndex].image} 
                  alt={fundedDeals[currentIndex].property} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                <div className="mb-4 md:mb-6">
                  <Badge variant="outline" className="border-gold-500/50 text-gold-600 rounded-none px-3 py-1 font-bold text-[10px] md:text-xs uppercase tracking-widest mb-3 md:mb-4">
                    {fundedDeals[currentIndex].type}
                  </Badge>
                  <h3 className="text-2xl md:text-4xl font-bold text-navy-950 mb-1 md:mb-2 leading-tight uppercase tracking-tighter">
                    {fundedDeals[currentIndex].property}
                  </h3>
                  <p className="text-[10px] md:text-sm text-muted-foreground uppercase tracking-widest font-medium">
                    {fundedDeals[currentIndex].location}
                  </p>
                </div>
                <div className="pt-4 md:pt-8 border-t border-gray-200">
                  <span className="block text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total Deployment</span>
                  <span className="text-3xl md:text-5xl font-bold text-navy-950 tracking-tighter">
                    {fundedDeals[currentIndex].amount}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex space-x-2">
            {fundedDeals.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 transition-all duration-300 ${currentIndex === i ? 'w-8 bg-gold-500' : 'w-2 bg-gray-200'}`}
              />
            ))}
          </div>
        </div>

        {/* Partner Success Grid */}
        <div className="mt-24 border-t border-gray-200 pt-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-3 uppercase tracking-tight">Partner Success</h2>
            <div className="h-1 w-16 bg-gold-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: "Michael Chen",
                role: "Managing Director, Urban Infill LLC",
                content: "316 Capital's 24-hour draw times are game-changing. I've scaled from 3 to 15 active projects this year because their capital never lags.",
                avatar: "https://i.pravatar.cc/150?u=michael"
              },
              {
                name: "Sarah Jenkins",
                role: "Principal, Southern Realty Group",
                content: "Institutional scale with a tech-first approach. They underwrote a complex mixed-use deal in 3 days that our local bank wouldn't touch.",
                avatar: "https://i.pravatar.cc/150?u=sarah"
              },
              {
                name: "Robert Vance",
                role: "Developer, Vance & Co.",
                content: "The BRRRR product they offered allowed me to recycle capital twice as fast as traditional bridge lenders. Truly the smartest source of funding.",
                avatar: "https://i.pravatar.cc/150?u=robert"
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 border border-gray-100 relative group shadow-sm hover:shadow-md transition-all h-full"
              >
                <Quote className="absolute top-4 right-4 h-6 w-6 text-gold-500/10" />
                <p className="text-muted-foreground italic mb-4 leading-relaxed text-sm">"{t.content}"</p>
                <div className="flex items-center space-x-4 mt-auto">
                  <img src={t.avatar} alt={t.name} className="h-8 w-8 rounded-full grayscale group-hover:grayscale-0 transition-all" />
                  <div>
                    <h4 className="font-bold text-navy-950 text-xs">{t.name}</h4>
                    <p className="text-[10px] text-gold-600 font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Video Case Study - Full Width Below */}
          <div className="max-w-[320px] mx-auto group">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[9/16] bg-navy-950 overflow-hidden border-[6px] border-[#001A54] shadow-[0_32px_64px_-16px_rgba(0,26,84,0.4)] rounded-xl ring-1 ring-gold-500/30"
            >
              <div className="absolute inset-0 border border-white/10 rounded-lg pointer-events-none z-10" />
              <video 
                src="/assets/videos/testimonial.mp4" 
                className="w-full h-full object-cover rounded-lg"
                controls
                playsInline
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-4 left-4 pointer-events-none z-20">
                <Badge className="bg-[#F2C100] hover:bg-[#F2C100] text-[#001A54] border-none rounded-none px-3 py-1 font-black text-[9px] uppercase tracking-[0.2em] shadow-xl">
                  FEATURED CASE STUDY
                </Badge>
              </div>
            </motion.div>
            <div className="mt-8 text-center max-w-lg mx-auto">
              <h4 className="text-xl text-navy-950 font-bold uppercase tracking-tight leading-tight">Funding Without Limits via The 316 network</h4>
              <div className="h-0.5 w-8 bg-[#F2C100] mx-auto my-4" />
              <div className="bg-navy-50/50 p-6 border-l-2 border-[#F2C100] text-left">
                <p className="text-sm text-navy-950 leading-relaxed font-medium">
                  "Brady, an experienced developer, reached an impasse mid-construction on his new SFH project in Medfield, MA. Within 14 days, the 316 Network deployed <span className="text-[#001A54] font-bold">$650,000</span> in bridge capital, ensuring a seamless path to completion."
                </p>
              </div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold-600 mt-6 opacity-80">Real Results. Fast Capital. Institutional Execution.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

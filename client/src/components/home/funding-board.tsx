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
    type: "Fix & Flip",
    amount: "$2.6M",
    location: "Cambridge, MA 02140",
    property: "Multi-Family Rehab",
  },
  {
    image: propertyBelmont,
    type: "Fix & Flip",
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
    <section id="portfolio" className="py-24 bg-cream-50 overflow-hidden mb-24 md:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center mb-16"
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

        {/* Partner Success Grid */}
        <div className="mt-32 border-t border-gray-200 pt-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-4 uppercase tracking-tight">Partner Success</h2>
            <div className="h-1 w-20 bg-gold-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Michael Chen",
                role: "Managing Director, Urban Infill LLC",
                content: "316 Capital's 48-hour draw times are game-changing. I've scaled from 3 to 15 active projects this year because their capital never lags.",
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
                className="bg-white p-8 border border-gray-100 relative group shadow-sm hover:shadow-md transition-all h-full"
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-gold-500/10" />
                <p className="text-muted-foreground italic mb-6 leading-relaxed text-sm">"{t.content}"</p>
                <div className="flex items-center space-x-4 mt-auto">
                  <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full grayscale group-hover:grayscale-0 transition-all" />
                  <div>
                    <h4 className="font-bold text-navy-950 text-sm">{t.name}</h4>
                    <p className="text-[10px] text-gold-600 font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Video Case Study - Vertical Alignment */}
          <div className="max-w-md mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[9/16] bg-navy-950 overflow-hidden group border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,26,84,0.3)] rounded-sm"
            >
              <video 
                src="/assets/videos/testimonial.mp4" 
                className="w-full h-full object-cover"
                controls
                playsInline
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-6 left-6 pointer-events-none z-10">
                <Badge className="bg-[#F2C100] hover:bg-[#F2C100] text-[#001A54] border-none rounded-none px-4 py-1.5 font-black text-[10px] uppercase tracking-[0.25em] shadow-2xl">
                  FEATURED CASE STUDY
                </Badge>
              </div>
            </motion.div>
            <div className="mt-10 text-center max-w-2xl mx-auto">
              <h4 className="text-2xl md:text-3xl text-navy-950 font-bold uppercase tracking-tight leading-tight">Institutional Scaling via 316 Vault</h4>
              <div className="h-0.5 w-12 bg-[#F2C100] mx-auto my-4" />
              <p className="text-muted-foreground text-xs md:text-sm font-bold uppercase tracking-[0.3em] opacity-80">Real Results. Fast Capital. Institutional Experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

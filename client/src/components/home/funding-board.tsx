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

const testimonials = [
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
          className="text-center mb-16"
        >
          <Badge variant="outline" className="border-gold-500/50 text-gold-600 rounded-none px-4 py-1.5 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
            THE PROOF HUB
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-950 tracking-tight uppercase">Recently Funded & Partner Success</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Institutional deployments and verified client outcomes across the 316 network.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Funding Board */}
          <div className="lg:col-span-7">
            <div className="relative h-[450px] md:h-[550px] w-full group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 flex flex-col bg-white border border-gray-100 shadow-2xl overflow-hidden"
                >
                  <div className="h-2/3 overflow-hidden relative">
                    <img 
                      src={fundedDeals[currentIndex].image} 
                      alt={fundedDeals[currentIndex].property} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                       <div className="flex items-center space-x-2 px-3 py-1 bg-navy-950/80 backdrop-blur-md border border-white/10">
                        <div className="h-1.5 w-1.5 rounded-full bg-gold-500 animate-pulse" />
                        <span className="text-[8px] font-bold text-white uppercase tracking-widest">Live Portfolio</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center bg-white">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <Badge variant="outline" className="border-gold-500/50 text-gold-600 rounded-none px-2 py-0.5 font-bold text-[9px] uppercase tracking-widest mb-2">
                          {fundedDeals[currentIndex].type}
                        </Badge>
                        <h3 className="text-xl md:text-2xl font-bold text-navy-950 leading-tight uppercase tracking-tighter">
                          {fundedDeals[currentIndex].property}
                        </h3>
                      </div>
                      <div className="text-right">
                        <span className="block text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-1">Deployment</span>
                        <span className="text-2xl font-bold text-navy-950 tracking-tighter">
                          {fundedDeals[currentIndex].amount}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute -bottom-8 left-0 flex space-x-2">
                {fundedDeals.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1 transition-all duration-300 ${currentIndex === i ? 'w-12 bg-gold-500' : 'w-4 bg-gray-200'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Video & Testimonials */}
          <div className="lg:col-span-5 space-y-8">
            {/* Video Case Study Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video bg-navy-900 overflow-hidden group cursor-pointer border border-navy-800 shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000" 
                alt="Client Video Case Study" 
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-navy-950 fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-950 to-transparent">
                <span className="text-gold-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">Video Case Study</span>
                <h4 className="text-white font-bold uppercase tracking-tight">Institutional Scaling via 316 Vault</h4>
              </div>
            </motion.div>

            {/* Written Testimonials */}
            <div className="space-y-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 border border-gray-100 relative group"
                >
                  <Quote className="absolute top-4 right-4 h-6 w-6 text-gold-500/10" />
                  <p className="text-sm text-muted-foreground italic mb-4 leading-relaxed">"{t.content}"</p>
                  <div className="flex items-center space-x-3">
                    <img src={t.avatar} alt={t.name} className="h-8 w-8 rounded-full grayscale group-hover:grayscale-0 transition-all" />
                    <div>
                      <h4 className="font-bold text-navy-950 text-xs">{t.name}</h4>
                      <p className="text-[10px] text-gold-600 font-medium uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

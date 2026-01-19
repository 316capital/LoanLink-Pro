import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import heroBg from "@assets/generated_images/cinematic_construction_site_aerial.png";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pb-32">
      {/* Background Image */}
      <motion.div 
        initial={ { scale: 1.1, opacity: 0 } }
        animate={ { scale: 1, opacity: 1 } }
        transition={ { duration: 1.5, ease: "easeOut" } }
        className="absolute inset-0 z-0"
      >
        <img 
          src={heroBg} 
          alt="Active construction site" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/70" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-4xl">
          <motion.div 
            initial={ { opacity: 0, x: -20 } }
            animate={ { opacity: 1, x: 0 } }
            transition={ { delay: 0.5 } }
            className="inline-flex items-center space-x-2 bg-gold-500/20 border border-gold-500/30 px-4 py-1.5 mb-8 rounded-full"
          >
            <Zap className="h-3 w-3 text-gold-500 fill-current" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">Nationwide Private Lender</span>
          </motion.div>
          
          <motion.h1 
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { delay: 0.7 } }
            className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8"
          >
            Institutional Capital. <br />
            <span className="text-gold-500">Tech-Enabled</span> Speed.
          </motion.h1>

          <motion.p 
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { delay: 0.9 } }
            className="text-xl md:text-2xl text-gray-200 mb-4 max-w-2xl font-light leading-relaxed"
          >
            We combine a massive network of institutional funds with proprietary technology to close complex real estate deals in record time.
          </motion.p>
          
          <motion.p 
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { delay: 1.1 } }
            className="text-gold-500 font-bold tracking-wider text-sm uppercase mb-10 italic"
          >
            Your smartest source of funding
          </motion.p>
          
          <motion.div 
            initial={ { opacity: 0, scale: 0.95 } }
            animate={ { opacity: 1, scale: 1 } }
            transition={ { delay: 1.3 } }
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button size="sm" className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-sm px-8 py-5 rounded-none transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]">
              Get Prequalified
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Stats overlay */}
      <motion.div 
        initial={ { opacity: 0, y: 50 } }
        animate={ { opacity: 1, y: 0 } }
        transition={ { delay: 1.5, duration: 0.8 } }
        className="absolute bottom-0 left-0 right-0 bg-navy-950/80 backdrop-blur-md border-t border-white/10 py-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { label: "Deployed", value: "$4.2B+" },
             { label: "Draw Turnaround", value: "48H" },
             { label: "States Covered", value: "44" },
             { label: "Avg. Closing", value: "7 Days" }
           ].map((stat, i) => (
             <div key={i} className="text-center md:text-left">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400">{stat.label}</p>
             </div>
           ))}
        </div>
      </motion.div>
    </div>
  );
}
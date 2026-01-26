import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import heroBg from "@/assets/generated_images/cinematic_construction_site_aerial_v2.png";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const animation = animate(count, value, { duration: 2, ease: "easeOut", delay: 1.5 });
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return () => {
      animation.stop();
      unsubscribe();
    };
  }, [value, count, rounded]);

  return <span>{prefix}{displayValue}{suffix}</span>;
}

export function Hero() {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pb-32">
      {/* Background Image */}
      <motion.div 
        initial={ { scale: 1, opacity: 0 } }
        animate={ { 
          scale: [1, 1.15, 1],
          opacity: 1 
        } }
        transition={ { 
          scale: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          },
          opacity: {
            duration: 1.5,
            ease: "easeOut"
          }
        } }
        className="absolute inset-0 z-0"
      >
        <img 
          src={heroBg} 
          alt="Active construction site" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#001A54]/80 via-[#001A54]/40 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#001A54]/20" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div 
            initial={ { opacity: 0, x: -20 } }
            animate={ { opacity: 1, x: 0 } }
            transition={ { delay: 0.5 } }
            className="flex flex-col space-y-3 mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-[#F2C100]/20 border border-[#F2C100]/40 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(242,193,0,0.1)] w-fit">
              <Zap className="h-3 w-3 text-[#F2C100] fill-current" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white brightness-125">Nationwide Private Lender</span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-[#001A54]/40 border border-white/10 px-4 py-1.5 rounded-full w-fit">
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-300">True Asset-Based Lending</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { delay: 0.7 } }
            className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8"
          >
            Institutional Capital. <br />
            <span className="text-[#F2C100]">AI-Enabled</span> Speed.
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
            className="text-[#F2C100] font-bold tracking-wider text-sm uppercase mb-10 italic"
          >
            Your smartest source of funding
          </motion.p>
          
          <motion.div 
            initial={ { opacity: 0, scale: 0.95 } }
            animate={ { opacity: 1, scale: 1 } }
            transition={ { delay: 1.3 } }
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button 
              size="sm" 
              className="bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-bold text-sm px-8 py-5 rounded-none transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(242,193,0,0.4)]"
              onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
            >
              Get Instant Pricing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Three-Step Success Path */}
          <motion.div 
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { delay: 1.5 } }
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl border-t border-white/10 pt-10"
          >
            {[
              { step: "1", title: "Quick App", desc: "Digital intake in 2m" },
              { step: "2", title: "Underwriting", desc: "Formal term sheet" },
              { step: "3", title: "Funding", desc: "Institutional wire" }
            ].map((s, i) => (
              <div key={i} className="flex items-center sm:items-start md:items-center space-x-4 group">
                <div className="h-10 w-10 shrink-0 border border-[#F2C100]/30 flex items-center justify-center text-[#F2C100] font-bold text-sm group-hover:bg-[#F2C100] group-hover:text-[#001A54] transition-all">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-wider">{s.title}</h3>
                  <p className="text-gray-400 text-[10px] sm:text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Stats overlay */}
      <motion.div 
        initial={ { opacity: 0, y: 50 } }
        animate={ { opacity: 1, y: 0 } }
        transition={ { delay: 1.5, duration: 0.8 } }
        className="absolute bottom-0 left-0 right-0 bg-[#001A54]/95 backdrop-blur-md border-t border-white/10 py-6 md:py-10 z-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-y-4 gap-x-4 md:gap-8">
           {[
             { label: "Deployed", value: 100, prefix: "$", suffix: "M+" },
             { label: "Combined Experience", value: 30, suffix: " Years" },
             { label: "Draw Turnaround", value: 48, suffix: "H" },
             { label: "States Covered", value: 44 },
             { label: "Avg. Closing", value: 7, suffix: " Days" }
           ].map((stat, i) => (
             <div key={i} className="text-left flex flex-col justify-center overflow-hidden h-full">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight mb-0.5 truncate">
                  <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="text-[7px] sm:text-[8px] md:text-[9px] uppercase tracking-[0.15em] text-gray-400 font-bold whitespace-nowrap opacity-80">{stat.label}</p>
             </div>
           ))}
        </div>
      </motion.div>
    </div>
  );
}
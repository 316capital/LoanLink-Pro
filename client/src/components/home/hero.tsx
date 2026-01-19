import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/cinematic_construction_site_aerial.png";

export function Hero() {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Active construction site" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6 animate-in slide-in-from-bottom-5 duration-700">
            Capital with Covenant. <br />
            <span className="text-gold-500">Institutional Speed</span>, <br />
            Kingdom Integrity.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl font-light leading-relaxed animate-in slide-in-from-bottom-5 duration-700 delay-150">
            Close in 7 days · 48-hour draw times · Loans from $75K to $20M
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-5 duration-700 delay-300">
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-lg px-8 py-6 rounded-none shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all hover:scale-105">
              Get My Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-gold-500 font-medium text-lg px-8 py-6 rounded-none transition-all">
              Broker Portal
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold-500 to-transparent"></div>
      </div>
    </div>
  );
}
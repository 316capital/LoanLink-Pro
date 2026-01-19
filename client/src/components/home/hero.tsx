import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
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
        <div className="absolute inset-0 bg-navy-950/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-gold-500/20 border border-gold-500/30 px-4 py-1.5 mb-8 rounded-full">
            <Zap className="h-3 w-3 text-gold-500 fill-current" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">Nationwide Private Lender</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8 animate-in slide-in-from-bottom-5 duration-700">
            Institutional Capital. <br />
            <span className="text-gold-500">Tech-Enabled</span> Speed.
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-2xl font-light leading-relaxed">
            We combine a massive network of elite lenders with proprietary technology to close complex real estate deals in record time.
          </p>
          <p className="text-gold-500 font-bold tracking-wider text-sm uppercase mb-10 italic">
            Your smartest source of funding
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-lg px-10 py-7 rounded-none transition-all hover:scale-105">
              Get My Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-gold-500 font-medium text-lg px-10 py-7 rounded-none transition-all">
              Broker Portal
            </Button>
          </div>
        </div>
      </div>
      
      {/* Stats overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-navy-950/80 backdrop-blur-md border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
           <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-white">$4.2B+</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400">Deployed</p>
           </div>
           <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-white">48H</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400">Draw Turnaround</p>
           </div>
           <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-white">44</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400">States Covered</p>
           </div>
           <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-white">7 Days</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400">Avg. Closing</p>
           </div>
        </div>
      </div>
    </div>
  );
}
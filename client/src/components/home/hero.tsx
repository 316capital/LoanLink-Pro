import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Play, CheckCircle2 } from "lucide-react";
import heroBg from "@assets/generated_images/cinematic_construction_site_aerial.png";

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Active construction site" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/75 mix-blend-multiply" />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/20 px-3 py-1 mb-8 rounded-sm">
            <Zap className="h-3.5 w-3.5 text-gold-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold-500">The Nation's Smartest Capital Source</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8 animate-in slide-in-from-left-8 duration-1000">
            THE NATION'S <br />
            <span className="text-gold-500 italic">PREMIER</span> PRIVATE <br />
            CONSTRUCTION LENDER.
          </h1>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 animate-in fade-in duration-1000 delay-300">
            {["Close in 7 Days", "48-Hour Draws", "Nationwide Reach"].map((item, i) => (
              <div key={i} className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-gold-500" />
                <span className="text-sm font-bold text-gray-300 uppercase tracking-wider">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-12 animate-in slide-in-from-bottom-8 duration-1000 delay-500">
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-black text-xs uppercase tracking-[0.2em] px-10 py-8 rounded-none shadow-[0_0_40px_rgba(234,179,8,0.2)] transition-all hover:scale-105">
              Apply for a Loan
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 font-bold text-xs uppercase tracking-[0.2em] px-10 py-8 rounded-none transition-all group">
              <Play className="mr-3 h-4 w-4 fill-white group-hover:fill-gold-500 group-hover:text-gold-500" />
              Watch Process
            </Button>
          </div>

          {/* Social Proof Bar */}
          <div className="pt-12 border-t border-white/10 opacity-60 animate-in fade-in duration-1000 delay-700">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-6">Trusted by the Nation's Leading Developers</p>
            <div className="flex flex-wrap gap-x-12 gap-y-8 items-center grayscale brightness-200">
              <span className="text-xl font-black italic tracking-tighter">AVANT</span>
              <span className="text-xl font-black tracking-widest">MODERNA</span>
              <span className="text-xl font-bold font-heading">STRUC<span className="text-gold-500">TURA</span></span>
              <span className="text-xl font-mono tracking-tighter">BUILD.CO</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-navy-950/90 backdrop-blur-xl border-t border-white/10 py-10 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
             <div className="space-y-1">
                <p className="text-3xl font-black text-white tracking-tighter">$4.2B+</p>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gold-500">Total Capital Deployed</p>
             </div>
             <div className="space-y-1">
                <p className="text-3xl font-black text-white tracking-tighter">48H</p>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gold-500">Average Draw Speed</p>
             </div>
             <div className="space-y-1">
                <p className="text-3xl font-black text-white tracking-tighter">44</p>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gold-500">Active Lending Markets</p>
             </div>
             <div className="space-y-1">
                <p className="text-3xl font-black text-white tracking-tighter">82%</p>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gold-500">Repeat Borrower Rate</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
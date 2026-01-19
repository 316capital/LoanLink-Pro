import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Network, Zap } from "lucide-react";
import networkImg from "@assets/generated_images/abstract_neural_network_glowing_lines.png";

export function Hero() {
  return (
    <div className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-navy-950">
      {/* Neural Network Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={networkImg} 
          alt="Neural network background" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-950/50 to-navy-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/20 px-4 py-2 mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
          <Cpu className="h-4 w-4 text-gold-500" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-500">Capital Operating System v2.0</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8 animate-in slide-in-from-bottom-8 duration-1000">
          THE LIQUIDITY <br />
          <span className="text-gold-500 italic">PROTOCOL</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-in slide-in-from-bottom-8 duration-1000 delay-200">
          Hyper-threaded capital deployment. $20M+ single-ticket capacity. <br/>
          Proprietary algorithmic underwriting for elite developers.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in slide-in-from-bottom-8 duration-1000 delay-400">
          <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-black text-xs uppercase tracking-widest px-12 py-8 rounded-none shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all hover:scale-105">
            Initialize Application
            <Zap className="ml-2 h-4 w-4 fill-current" />
          </Button>
          
          <Button variant="outline" size="lg" className="border-white/10 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 font-bold text-xs uppercase tracking-widest px-12 py-8 rounded-none transition-all">
            Access Network
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto opacity-50">
           <div className="flex flex-col items-center">
              <span className="text-2xl font-mono text-white">48H</span>
              <span className="text-[9px] uppercase tracking-widest text-gray-500">Latency</span>
           </div>
           <div className="flex flex-col items-center">
              <span className="text-2xl font-mono text-white">42+</span>
              <span className="text-[9px] uppercase tracking-widest text-gray-500">Nodes</span>
           </div>
           <div className="flex flex-col items-center">
              <span className="text-2xl font-mono text-white">$4.2B</span>
              <span className="text-[9px] uppercase tracking-widest text-gray-500">Flow</span>
           </div>
           <div className="flex flex-col items-center">
              <span className="text-2xl font-mono text-white">100%</span>
              <span className="text-[9px] uppercase tracking-widest text-gray-500">Uptime</span>
           </div>
        </div>
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </div>
  );
}
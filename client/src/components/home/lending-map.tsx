import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function LendingMap() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in slide-in-from-left-8 duration-700">
            <h2 className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-4">Where We Lend</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-navy-950 mb-6 leading-tight">
              Nationwide Coverage. <br/>
              Local Expertise.
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              316 Capital serves as a premier, cost-effective funding partner for professional developers and real estate investors nationwide.
            </p>
            <p className="text-lg text-navy-950/80 mb-8 leading-relaxed">
              With an active lending footprint across <span className="font-bold text-navy-950">44 states</span> and the District of Columbia, we provide the reliable capital necessary to scale your portfolio.
            </p>
            
            <div className="bg-bone-50 p-6 border-l-4 border-gold-500 mb-8">
              <p className="text-sm text-navy-950">
                <span className="font-bold uppercase tracking-wider text-xs block mb-1 text-gray-500">Exceptions</span>
                Our institutional-grade solutions are available throughout the U.S., with the current exception of <span className="font-bold">MN, ND, SD, UT, OR, and VT</span>.
              </p>
            </div>
            
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-8 py-6 rounded-none shadow-lg">
              Get My Term Sheet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="relative animate-in fade-in duration-1000 delay-300">
            {/* SVG Map Container */}
            <div className="relative z-10 p-4 bg-bone-50/50 backdrop-blur-sm border border-gray-100 shadow-2xl">
              <svg viewBox="0 0 959 593" className="w-full h-auto drop-shadow-2xl">
                {/* Simplified US Map Representation - Using a generic US Map Path approach */}
                <g className="fill-gold-500/80 stroke-white stroke-[1.5]">
                   {/* Main body of states (Lending) */}
                   <rect x="50" y="50" width="850" height="450" rx="4" className="fill-gold-500/20 stroke-none" />
                   <text x="475" y="275" textAnchor="middle" className="fill-gold-600/20 font-bold text-6xl pointer-events-none uppercase tracking-[20px]">Nationwide</text>
                   
                   {/* Interactive-looking map visual */}
                   <image 
                     href="https://upload.wikimedia.org/wikipedia/commons/3/32/Blank_US_Map_with_borders.svg" 
                     width="959" height="593" 
                     className="opacity-90 filter brightness-110 contrast-125 saturate-50"
                     style={{ filter: 'sepia(1) hue-rotate(5deg) saturate(2) brightness(0.9) contrast(1.1)' }}
                   />
                   
                   {/* Overlay for non-lending states - mimicking the user's image */}
                   {/* OR */}
                   <path d="M60,100 L160,100 L150,180 L50,170 Z" className="fill-gray-300 opacity-80" /> 
                   {/* UT */}
                   <path d="M165,220 L230,225 L225,310 L160,305 Z" className="fill-gray-300 opacity-80" />
                   {/* MN, ND, SD */}
                   <path d="M430,70 L600,75 L590,200 L420,190 Z" className="fill-gray-300 opacity-80" />
                </g>
              </svg>
              
              {/* Map Legend */}
              <div className="absolute bottom-8 right-8 flex items-center space-x-6 bg-white/90 backdrop-blur-md p-4 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 bg-gold-500"></div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-navy-950">Active Lending</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 bg-gray-300"></div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-navy-950">Exceptions</span>
                </div>
              </div>
            </div>
            
            {/* Background geometric accents */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-navy-950/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
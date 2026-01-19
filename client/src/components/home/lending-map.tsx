import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import coverageMap from "@assets/generated_images/modern_gold_and_navy_us_coverage_map_for_real_estate_lending..png";

export function LendingMap() {
  return (
    <section className="py-24 bg-bone-50 overflow-hidden relative border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-4">Nationwide Scale</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-navy-950 mb-6 leading-tight">
              Lending Across <br/>
              44 Key Markets.
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our network spans the country, providing professional developers with reliable capital in 44 states and the District of Columbia.
            </p>
            
            <div className="bg-white p-6 border-l-4 border-gold-500 mb-8 shadow-sm">
              <p className="text-sm text-navy-950 font-medium">
                <span className="font-bold uppercase tracking-wider text-[10px] block mb-1 text-gray-500">Exceptions</span>
                Active throughout the U.S., with the current exception of <span className="text-gold-600">MN, ND, SD, UT, OR, and VT</span>.
              </p>
            </div>
            
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-10 py-7 rounded-none shadow-lg transition-transform hover:scale-105">
              Check Eligibility
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="relative p-4 bg-white shadow-2xl group overflow-hidden">
              <img 
                src={coverageMap} 
                alt="US Coverage Map" 
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Map Legend */}
              <div className="absolute bottom-8 right-8 flex items-center space-x-6 bg-white shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 bg-gold-500"></div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-navy-950">Active Lending</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 bg-[#1e293b]"></div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Exceptions</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
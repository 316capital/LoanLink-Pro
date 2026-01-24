import { Button } from "@/components/ui/button";

export function ProductParams() {
  return (
    <section className="py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-heading">
              Capital Structure <br/> & Parameters
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-gold-500 text-sm font-bold uppercase tracking-widest mb-2">Loan Amounts</h3>
                <p className="text-4xl md:text-5xl font-light font-mono text-white">
                  $75K <span className="text-gray-600 mx-2">—</span> $20M
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-gold-500 text-sm font-bold uppercase tracking-widest mb-2">Asset Classes</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold-500 mr-3"></span>
                      1-4 Unit Residential
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold-500 mr-3"></span>
                      5-20 Unit Multifamily
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold-500 mr-3"></span>
                      Build-to-Rent (BTR)
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold-500 mr-3"></span>
                      Mixed-Use
                    </li>
                  </ul>
                </div>
                
                 <div>
                  <h3 className="text-gold-500 text-sm font-bold uppercase tracking-widest mb-2">Geographies</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold-500 mr-3"></span>
                      Top 50 MSAs
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold-500 mr-3"></span>
                      Nationwide (Excl. NV, ND, SD)
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold-500 mr-3"></span>
                      Urban & Suburban Core
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h3 className="text-gold-500 text-sm font-bold uppercase tracking-widest mb-4">Borrower Requirements</h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                    <span className="text-xs font-bold text-white uppercase tracking-tight">Min. 620 FICO Score</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                    <span className="text-xs font-bold text-white uppercase tracking-tight">LLC Borrowers Only</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                    <span className="text-xs font-bold text-white uppercase tracking-tight">Non-Owner Occupied Only</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                    <span className="text-xs font-bold text-white uppercase tracking-tight">US-Based Assets Only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm">
             <div className="flex flex-col space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-gray-400">Origination Fee</span>
                    <span className="font-mono font-bold">1% - 3%</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-gray-400">Processing Speed</span>
                    <span className="font-mono font-bold">7-14 Days</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-gray-400">LTV / LTC</span>
                    <span className="font-mono font-bold">Up to 90% LTC</span>
                </div>
                 <div className="flex justify-between items-center mb-8">
                    <span className="text-gray-400">Recourse</span>
                    <span className="font-mono font-bold">Full & Partial Available</span>
                </div>
                
                <Button className="w-full bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold rounded-none py-6 transition-all hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] mt-4">
                  Check Your Specific Rate
                </Button>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
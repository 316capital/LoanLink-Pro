import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export function ProductParams() {
  return (
    <section className="py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cream-50/5 skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="absolute top-0 right-0 mt-4 mr-4 lg:mr-8 hidden sm:flex items-center space-x-4 bg-[#F2C100]/5 p-5 border border-[#F2C100]/20 backdrop-blur-xl shadow-[0_0_30px_rgba(242,193,0,0.1)] group">
          <div className="text-right">
            <div className="text-3xl lg:text-4xl font-bold text-cream-50 leading-none font-mono tracking-tighter group-hover:text-[#F2C100] transition-colors">24-HOUR</div>
            <div className="text-[9px] font-black text-[#F2C100] uppercase tracking-[0.3em] mt-1">Draw Trust Badge</div>
          </div>
          <div className="relative">
            <Shield className="h-10 w-10 text-[#F2C100] relative z-10" />
            <div className="absolute inset-0 bg-[#F2C100] blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-12 lg:pt-0">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-heading text-cream-50">
              Capital Structure <br/> & Parameters
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-gold-500 text-sm font-bold uppercase tracking-widest mb-2">Loan Amounts</h3>
                <p className="text-4xl md:text-5xl font-light font-mono text-cream-50">
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
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold-500 mr-3"></span>
                      Rural Markets Welcome
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h3 className="text-gold-500 text-sm font-bold uppercase tracking-widest mb-4">Borrower Requirements</h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  {[
                    "Min. 660 FICO Score",
                    "LLC Borrowers Only",
                    "Non-Owner Occupied Only",
                    "Foreign Nationals Welcome",
                    "US-Based Assets Only",
                    "No Experience Required"
                  ].map((req, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold-500/50" />
                      <span className="text-[10px] font-bold text-gray-300 uppercase tracking-tight">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h3 className="text-gold-500 text-sm font-bold uppercase tracking-widest mb-4">Strategic Financing Options</h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  {[
                    "No Seasoning Options",
                    "No Credit Options Available",
                    "80% LTV Cash Out",
                    "15% Downpayment (DSCR)",
                    "Gap Funding Allowed",
                    "Second Position Options",
                    "Seller Carry Back Allowed",
                    "Portfolio Loan Programs",
                    "STR Loans - AirDNA Data",
                    "Rural Properties Accepted"
                  ].map((option, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold-500/50" />
                      <span className="text-[10px] font-bold text-gray-300 uppercase tracking-tight">{option}</span>
                    </div>
                  ))}
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
                    <span className="font-mono font-bold">21-30 Days</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-gray-400">LTV / LTC</span>
                    <span className="font-mono font-bold">Up to 90% LTC</span>
                </div>
                 <div className="flex justify-between items-center mb-8">
                    <span className="text-gray-400">Recourse</span>
                    <span className="font-mono font-bold">Full & Partial Available</span>
                </div>
                
                <Button 
                  className="w-full bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-bold rounded-none py-6 transition-all hover:shadow-[0_0_20px_rgba(242,193,0,0.4)] mt-4"
                  onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
                >
                  Request Terms
                </Button>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
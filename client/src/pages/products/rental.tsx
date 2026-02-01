import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  CheckCircle2, 
  ArrowRight, 
  Shield, 
  Zap, 
  TrendingUp, 
  Building2,
  Clock,
  ZapOff,
  Calculator,
  Percent,
  Coins
} from "lucide-react";
import rentalHero from "@/assets/images/dscr-hero.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function RentalProduct() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Institutional Hero Section */}
        <section className="relative min-h-[70vh] flex items-center bg-[#001A54] text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={rentalHero} 
              alt="DSCR Rental Financing" 
              className="w-full h-full object-cover brightness-[0.9] contrast-[1.05] scale-100"
            />
            <div className="absolute inset-0 bg-[#001A54]/10 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001A54]/80 via-[#001A54]/20 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center space-x-2 bg-gold-500/20 border border-gold-500/40 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md">
                <Calculator className="h-3 w-3 text-[#F2C100]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">DSCR Rental Capital</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-[1.1] mb-8 text-white">
                Long-Term <br /> 
                <span className="text-[#F2C100] italic font-medium">Rental / DSCR</span> Loans
              </h1>
              <h2 className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-medium max-w-2xl">
                Financing based on the property's income, not yours. Scale your portfolio without the restrictions of conventional bank lending.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-bold px-8 py-6 rounded-none transition-all uppercase tracking-widest text-xs shadow-lg"
                  onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
                >
                  Get Rental Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* DSCR Explanation Section */}
        <section className="relative bg-white py-24 overflow-hidden border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7"
              >
                <h2 className="text-gold-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">How it Works</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-[#001A54] uppercase tracking-tight mb-8 leading-tight">
                  No DTI. <br /> <span className="text-gold-600 italic font-medium">No Income Checks.</span>
                </h3>
                
                <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-lg">
                  <p>
                    DSCR (Debt Service Coverage Ratio) loans are the secret weapon of professional real estate investors. Instead of verifying your personal income or debt-to-income ratio, we look at the property's ability to cover its own expenses.
                  </p>
                  <p>
                    We specialize in <strong>Blanket and Portfolio Loans</strong>, allowing you to cross-collateralize multiple assets under a single loan structure to maximize leverage and streamline your monthly debt service.
                  </p>
                  <p>
                    Whether you're acquiring a new rental or pulling equity from an existing portfolio, our <span className="text-gold-600 italic">316 Intel Engine</span> rapidly calculates your eligibility based on real-time market rents and property performance.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-6 text-center">
                  <div className="p-4 bg-navy-50 border border-navy-100">
                    <Percent className="h-6 w-6 text-gold-600 mx-auto mb-2" />
                    <span className="block text-[10px] font-black uppercase text-[#001A54]">Interest Only</span>
                  </div>
                  <div className="p-4 bg-navy-50 border border-navy-100">
                    <Coins className="h-6 w-6 text-gold-600 mx-auto mb-2" />
                    <span className="block text-[10px] font-black uppercase text-[#001A54]">No Limit</span>
                  </div>
                  <div className="p-4 bg-navy-50 border border-navy-100">
                    <TrendingUp className="h-6 w-6 text-gold-600 mx-auto mb-2" />
                    <span className="block text-[10px] font-black uppercase text-[#001A54]">Max Leverage</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5 relative"
              >
                <Card className="rounded-none border-none shadow-2xl bg-[#001A54] text-white p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Building2 className="h-32 w-32" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase mb-8 relative z-10 text-[#F2C100]">Rental Terms</h3>
                  <div className="space-y-6 relative z-10">
                    {[
                      { label: "Loan Amounts", value: "$100K – $5MM+" },
                      { label: "Interest Rates", value: "Starting at 5.75%" },
                      { label: "Min Credit Score", value: "660+" },
                      { label: "Max LTV (Purchase)", value: "80%" },
                      { label: "Max LTV (Refi)", value: "75-80%" },
                      { label: "Loan Terms", value: "30-Year Fixed" },
                      { label: "Min DSCR", value: "1.00 - 1.20" },
                      { label: "Portfolio Strategy", value: "Blanket Loans" },
                      { label: "Property Types", value: "1-4 Units / MF" }
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between border-b border-white/10 pb-4">
                        <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">{row.label}</span>
                        <span className="text-[#F2C100] font-bold text-sm">{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full mt-10 bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-black rounded-none py-8 uppercase tracking-widest text-sm"
                    onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
                  >
                    Check DSCR Ratio
                  </Button>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Advantage Comparison */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#001A54] uppercase tracking-tight">Institutional Rental Capital</h2>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-100 shadow-2xl overflow-hidden">
              <div className="bg-[#001A54] p-12 text-white border-r border-white/5">
                <h4 className="text-[#F2C100] font-black uppercase tracking-widest text-sm mb-10">316 DSCR Loans</h4>
                <div className="space-y-6">
                  {[
                    "No Tax Returns Required",
                    "Qualify on Market Rents",
                    "Blanket / Portfolio Loan Options",
                    "Close in an LLC",
                    "Nationwide Availability",
                    "No Limit on Number of Properties",
                    "Interest-Only Options"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-[#F2C100]" />
                      <span className="font-bold text-sm uppercase tracking-tight">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 p-12 text-slate-400">
                <h4 className="text-slate-500 font-black uppercase tracking-widest text-sm mb-10">Conventional Bank</h4>
                <div className="space-y-6">
                  {[
                    "Full Tax Return Verification",
                    "Debt-to-Income (DTI) Checks",
                    "Personal Debt Limitations",
                    "Strict Property Caps (usually 10)",
                    "Owner-Occupancy Bias",
                    "Long Underwriting Cycles"
                  ].map((detriment, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <ZapOff className="h-5 w-5 text-slate-300" />
                      <span className="font-medium text-sm uppercase tracking-tight line-through">{detriment}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-cream-50/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#001A54] uppercase tracking-tight">Rental Loan FAQ</h2>
              <div className="h-1 w-12 bg-gold-500 mx-auto mt-4" />
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { 
                  q: "What is the minimum DSCR ratio required?", 
                  a: "Typically we look for a DSCR of 1.10 or higher (meaning property income exceeds debt service by 10%). However, we have programs for 'No-Ratio' properties (below 1.0) with lower LTV." 
                },
                { 
                  q: "Can I use AirBnB income to qualify?", 
                  a: "Yes. We use short-term rental projections from data providers like AirDNA to underwrite vacation rentals and short-term stay assets." 
                },
                { 
                  q: "Are there prepayment penalties?", 
                  a: "DSCR loans typically come with a 3-2-1 or 5-4-3-2-1 prepayment structure. However, we can often customize these terms or offer buy-downs for shorter horizons." 
                },
                { 
                  q: "Do you lend to foreign nationals?", 
                  a: "Yes, we have specialized DSCR programs for foreign investors looking to build US-based rental portfolios." 
                }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-gray-100 px-6 py-2 bg-white shadow-sm">
                  <AccordionTrigger className="text-[#001A54] font-bold uppercase tracking-tight text-left hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed font-medium pt-2">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-[#001A54] text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-tight">
              Build Your <br /> Rental <span className="text-[#F2C100] italic font-medium">Legacy.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
              Join the institutional-grade investors using 316 Capital to scale their passive income.
            </p>
            <Button 
              size="lg"
              className="bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-bold px-8 py-6 rounded-none transition-all uppercase tracking-widest text-xs shadow-lg"
              onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
            >
              Get Your Term Sheet
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

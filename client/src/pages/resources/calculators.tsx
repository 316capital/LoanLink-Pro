import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { DealAnalyzer } from "@/components/deal-analyzer";
import { BRRRRCalculator } from "@/components/brrrr-calculator";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, DollarSign, Calculator, Repeat, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function CalculatorsPage() {
  const [activeTab, setActiveTab] = useState("fix-flip");

  return (
    <div className="min-h-screen bg-[#FDFCF9] font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#001A54] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
              src="/assets/images/rate-estimator-hero.jpg" 
              alt="Rate Estimation" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity"
            />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001A54]/40 via-[#001A54]/20 to-[#001A54]/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(242,193,0,0.05),transparent_60%)]" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F2C100]/20 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="h-px w-8 bg-[#F2C100]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F2C100]">Investment Calculators</span>
              <div className="h-px w-8 bg-[#F2C100]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter leading-tight mb-6">
              Institutional <span className="text-[#F2C100] italic font-medium">Rate Estimators</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Stop guessing and start investing with confidence. Use our institutional-grade calculators to analyze fix & flip deals or model your complete BRRRR strategy.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Calculator Tabs */}
          <div className="max-w-4xl mx-auto mb-16">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 gap-4 bg-transparent p-0 rounded-none mb-12 h-auto">
                <TabsTrigger 
                  value="fix-flip" 
                  className="data-[state=active]:bg-[#001A54] data-[state=active]:text-white data-[state=active]:shadow-[0_20px_40px_rgba(0,26,84,0.2)] bg-white border border-gray-200 text-[#001A54] rounded-none py-6 font-black uppercase tracking-[0.3em] text-[10px] transition-all hover:border-[#001A54]/30"
                >
                  <Zap className="h-4 w-4 mr-3" />
                  Fix & Flip Estimator
                </TabsTrigger>
                <TabsTrigger 
                  value="brrrr" 
                  className="data-[state=active]:bg-[#001A54] data-[state=active]:text-white data-[state=active]:shadow-[0_20px_40px_rgba(0,26,84,0.2)] bg-white border border-gray-200 text-[#001A54] rounded-none py-6 font-black uppercase tracking-[0.3em] text-[10px] transition-all hover:border-[#001A54]/30"
                >
                  <Repeat className="h-4 w-4 mr-3" />
                  BRRRR Calculator
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="fix-flip" className="mt-0 ring-0 focus-visible:ring-0 outline-none">
                <DealAnalyzer />
              </TabsContent>
              
              <TabsContent value="brrrr" className="mt-0 ring-0 focus-visible:ring-0 outline-none">
                <BRRRRCalculator />
              </TabsContent>
            </Tabs>
          </div>

          {/* Institutional Tier Comparison */}
          <div className="mt-24 mb-24 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-3 mb-4">
                <div className="h-px w-6 bg-[#F2C100]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#001A54]">Leverage Tiers</span>
                <div className="h-px w-6 bg-[#F2C100]" />
              </div>
              <h3 className="text-3xl font-bold text-[#001A54] uppercase tracking-tighter">Institutional Tier Comparison</h3>
            </div>
            
            <div className="overflow-x-auto border border-navy-950/10 shadow-2xl bg-white">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-navy-950 text-white">
                    <th className="p-6 text-left uppercase tracking-widest text-[10px] font-black border border-white/5">Requirement</th>
                    <th className="p-6 text-center uppercase tracking-widest text-[10px] font-black border border-white/5">Tier 3 (Standard)</th>
                    <th className="p-6 text-center uppercase tracking-widest text-[10px] font-black border border-white/5 bg-[#F2C100] text-[#001A54]">Tier 1 (Institutional)</th>
                    <th className="p-6 text-center uppercase tracking-widest text-[10px] font-black border border-white/5">316 Vault (Elite)</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-navy-950/5">
                    <td className="p-6 font-bold text-[#001A54] text-xs uppercase tracking-tight">Experience (36 Mo)</td>
                    <td className="p-6 text-center text-slate-500 text-sm">1-2 Projects</td>
                    <td className="p-6 text-center text-[#001A54] font-black text-sm bg-gold-50/30">5-9 Projects</td>
                    <td className="p-6 text-center text-slate-500 text-sm">10+ Projects</td>
                  </tr>
                  <tr className="border-b border-navy-950/5">
                    <td className="p-6 font-bold text-[#001A54] text-xs uppercase tracking-tight">Min Credit Score</td>
                    <td className="p-6 text-center text-slate-500 text-sm">680+</td>
                    <td className="p-6 text-center text-[#001A54] font-black text-sm bg-gold-50/30">730+</td>
                    <td className="p-6 text-center text-slate-500 text-sm">700+</td>
                  </tr>
                  <tr className="border-b border-navy-950/5">
                    <td className="p-6 font-bold text-[#001A54] text-xs uppercase tracking-tight">Max Leverage (LTC)</td>
                    <td className="p-6 text-center text-slate-500 text-sm">Up to 85%</td>
                    <td className="p-6 text-center text-[#001A54] font-black text-sm bg-gold-50/30">95%</td>
                    <td className="p-6 text-center text-[#001A54] font-black text-sm">100% Financing</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-bold text-[#001A54] text-xs uppercase tracking-tight">Interest Rates</td>
                    <td className="p-6 text-center text-slate-500 text-sm">From 10.99%</td>
                    <td className="p-6 text-center text-[#001A54] font-black text-sm bg-gold-50/30">From 7.99%</td>
                    <td className="p-6 text-center text-[#001A54] font-black text-sm">Vault Pricing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-center text-[10px] text-slate-400 uppercase tracking-[0.2em]">All tiers subject to property evaluation and final underwriting</p>
          </div>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-24 border-t border-navy-950/5">
            {[
              {
                icon: TrendingUp,
                title: "Fix & Flip Estimator",
                desc: "Instantly calculate your max loan amount, estimated rate, and cash to close. Our tiered pricing rewards experience with better terms.",
                value: "Up to 95% LTC",
                btnText: "Learn about Fix & Flip"
              },
              {
                icon: Repeat,
                title: "BRRRR Calculator",
                desc: "Model your complete Buy-Rehab-Rent-Refinance-Repeat cycle. See your cash-on-cash return, equity captured, and path to infinite returns.",
                value: "Full Cycle Analysis",
                btnText: "Explore BRRRR"
              },
              {
                icon: DollarSign,
                title: "Instant Results",
                desc: "No waiting for quotes. Get immediate estimates based on institutional lending parameters so you can move fast on deals.",
                value: "Real-Time Estimates",
                btnText: "Get Started"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col h-full"
              >
                <div className="h-12 w-12 bg-[#001A54] flex items-center justify-center mb-6">
                  <item.icon className="h-6 w-6 text-[#F2C100]" />
                </div>
                <h3 className="text-xl font-bold text-[#001A54] uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-slate-600 font-medium mb-6 leading-relaxed flex-grow">{item.desc}</p>
                <div className="mt-auto">
                  <div className="pt-6 border-t border-slate-100 mb-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Capability</span>
                    <span className="text-2xl font-bold text-[#001A54]">{item.value}</span>
                  </div>
                  <Button 
                    className="w-full bg-[#F2C100] hover:bg-white text-[#001A54] font-black rounded-none transition-all uppercase tracking-[0.2em] text-[10px] py-6 shadow-[0_10px_20px_rgba(242,193,0,0.1)] hover:shadow-[0_15px_30px_rgba(242,193,0,0.2)] hover:-translate-y-1"
                    onClick={() => window.open('https://www.316cap.com/widget/form/pdxTMenIM6Ei6b9ff1F6?notrack=true', '_blank')}
                  >
                    {item.btnText}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <section className="bg-[#001A54] p-12 md:p-20 relative overflow-hidden mb-24">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-10" />
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-8 leading-tight">
                Ready to Fund Your <span className="text-[#F2C100] italic font-medium">Next Deal?</span>
              </h2>
              <p className="text-lg text-gray-300 mb-10 font-light leading-relaxed">
                Get pre-qualified in minutes. Our team specializes in fast closings for experienced investors.
              </p>
              <Button 
                size="lg"
                className="bg-[#F2C100] hover:bg-white text-[#001A54] font-black px-12 py-8 rounded-none transition-all uppercase tracking-[0.2em] text-xs shadow-xl"
                onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
              >
                Get Your Term Sheet
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </section>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-24">
            <h3 className="text-2xl font-bold text-[#001A54] uppercase tracking-widest text-center mb-12">Frequently Asked Questions</h3>
            <div className="space-y-8">
              {[
                { 
                  q: "What is the Fix & Flip calculator for?", 
                  a: "The Fix & Flip calculator estimates your loan terms for short-term bridge financing. Enter your purchase price, rehab budget, and ARV to see your max loan amount, rate, and cash to close based on your credit and experience level." 
                },
                { 
                  q: "What is the BRRRR calculator for?", 
                  a: "The BRRRR calculator models your complete investment cycle: Buy with a bridge loan, Rehab the property, Rent it out, Refinance into a long-term DSCR loan, then Repeat. It shows your cash-on-cash return and whether you can achieve infinite returns." 
                },
                { 
                  q: "What is an 'infinite return' in BRRRR?", 
                  a: "An infinite return happens when you pull out more cash at refinance than you originally invested. This means you have $0 of your own money left in the deal while still owning the property and collecting cash flow - the holy grail of real estate investing." 
                },
                { 
                  q: "Are these estimates guaranteed?", 
                  a: "These calculators provide estimates based on typical lending parameters. Actual terms are subject to underwriting, property evaluation, and borrower qualification. Contact us for an official term sheet." 
                }
              ].map((faq, i) => (
                <div key={i} className="border-b border-slate-200 pb-8">
                  <h4 className="font-bold text-[#001A54] uppercase tracking-tight mb-3 text-lg">{faq.q}</h4>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

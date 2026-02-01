import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  CheckCircle2, 
  ArrowRight, 
  Shield, 
  Zap, 
  TrendingUp, 
  Wallet, 
  Users, 
  BarChart4, 
  Building2,
  CheckCircle,
  HelpCircle,
  Clock
} from "lucide-react";
import rentalHero from "@/assets/images/dscr-hero.jpg";
import rentalLifestyle from "@/assets/images/rental-lifestyle.jpg";
import rentalContent from "@/assets/images/rental-content.jpg";
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
        {/* Enhanced Hero Section */}
        <section className="relative min-h-[85vh] flex items-center bg-[#001A54] text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={rentalHero} 
              alt="Institutional backdrop" 
              className="w-full h-full object-cover brightness-[0.7] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-navy-950/30 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/40 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center space-x-2 bg-[#F2C100]/20 border border-[#F2C100]/40 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md">
                <Zap className="h-3 w-3 text-[#F2C100] fill-current" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Institutional Private Credit</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tight leading-[1.1] mb-8 text-white">
                Rental Property <br /> 
                <span className="text-[#F2C100] italic font-medium">Financing</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-medium max-w-2xl">
                Strategic capital for professional investors scaling nationwide portfolios. 
                No W-2s, no DTI checks, institutional speed.
              </p>
              <Button 
                size="lg"
                className="bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-black px-12 py-8 rounded-none transition-all uppercase tracking-widest text-sm shadow-[0_20px_50px_rgba(242,193,0,0.2)]"
                onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
              >
                Start Your Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Side-by-Side Content Section */}
        <section className="relative bg-white py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-20 items-start">
              
              {/* Content Area */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <h2 className="text-gold-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Rental Financing</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-navy-950 uppercase tracking-tight mb-8 leading-tight">
                  Long-Term Leverage. <br /> <span className="text-gold-600 italic font-medium">Built for Performance.</span>
                </h3>
                
              <div className="space-y-6 text-navy-900/80 leading-relaxed font-medium text-lg">
                <p>
                  At 316 Capital, we know that great rental investments require more than just good timing—they demand reliable capital that <span className="text-gold-600 italic">adapts as your strategy evolves.</span>
                </p>
                
                {/* Repositioned and significantly resized lifestyle image */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="py-4"
                >
                  <div className="relative w-full max-w-[280px] overflow-hidden shadow-lg rounded-sm border border-gold-500/10">
                    <img 
                      src={rentalLifestyle} 
                      alt="Happy couple" 
                      className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </motion.div>

                <p>
                  Our Rental Financing solutions are purpose-built to help you acquire, refinance, or consolidate income-producing properties with our <span className="text-gold-600 underline underline-offset-8 decoration-2 cursor-pointer hover:text-gold-700 transition-colors">investment property loans</span>, so you can focus on growing your cash flow and building long-term equity.
                </p>
              </div>

                <div className="mt-10 flex items-center space-x-6">
                  <div className="flex items-center space-x-2 text-navy-950/40 font-bold uppercase tracking-[0.2em] text-[10px]">
                    <Zap className="h-3 w-3 fill-current text-gold-500" />
                    <span>24-Hour Term Issuance</span>
                  </div>
                  <div className="flex items-center space-x-2 text-navy-950/40 font-bold uppercase tracking-[0.2em] text-[10px]">
                    <Shield className="h-3 w-3 fill-current text-gold-500" />
                    <span>Institutional Capital</span>
                  </div>
                </div>
              </motion.div>

              {/* Side Image Removed from here and moved inside content */}
            </div>
          </div>
        </section>

        {/* Key Benefits Grid */}
        <section className="py-20 bg-cream-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: Clock, title: "Close in 21-30 Days", desc: "Our streamlined underwriting gets you to the finish line faster." },
                { icon: Wallet, title: "No W-2 Required", desc: "Approvals based on property cash flow, not your personal income." },
                { icon: BarChart4, title: "Maximize Cash Flow", desc: "Leverage low rates and interest-only options to boost your ROI." }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="h-14 w-14 bg-white flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-300">
                    <item.icon className="h-6 w-6 text-navy-950 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-navy-950 uppercase tracking-tight mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Program Details */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-4 border-2 border-navy-950/5 -translate-x-8 translate-y-8" />
                <img 
                  src={rentalContent} 
                  alt="Modern rental interior" 
                  className="relative z-10 w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold-600 mb-4">The 316 Advantage</h2>
                <h3 className="text-4xl font-bold text-navy-950 uppercase tracking-tight mb-8 leading-tight">
                  Institutional Speed. <br /> Private Execution.
                </h3>
                <div className="space-y-6 text-navy-900/70 leading-relaxed font-medium">
                  <p>
                    We provide the sophisticated capital allocation of an institutional fund with the speed and white-glove service of a private lender. Our DSCR programs are optimized for the modern investor who values efficiency.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {[
                      "Single Family & Multi-Family",
                      "Short-Term Rentals (STR)",
                      "No DTI Verification",
                      "Interest-Only Options",
                      "Portfolio Refinancing",
                      "LLC Closings Encouraged"
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-gold-500" />
                        <span className="text-sm font-bold text-navy-950 uppercase tracking-tight">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Loan Parameters Table */}
        <section className="py-24 bg-navy-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Loan Terms & Features</h2>
              <div className="h-1 w-20 bg-gold-500 mx-auto mt-6" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <Card className="bg-white/5 border-white/10 rounded-none p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-6">Strategic Benefit</h4>
                  <div className="space-y-8">
                    {[
                      { title: "Portfolio Growth", desc: "Unlock equity from existing assets to fund new acquisitions." },
                      { title: "Cash Flow Optimization", desc: "Reduce monthly debt service with competitive institutional rates." },
                      { title: "Asset-Based Approval", desc: "Scale without the friction of personal income verification." }
                    ].map((user, i) => (
                      <div key={i}>
                        <h5 className="text-white font-bold uppercase tracking-tight mb-2">{user.title}</h5>
                        <p className="text-gray-400 text-sm leading-relaxed">{user.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <div className="lg:col-span-2 bg-white/5 border border-white/10 p-10">
                <div className="space-y-6">
                  {[
                    { label: "Loan Amounts", value: "$150K – $20MM+" },
                    { label: "LTV (Loan-to-Value)", value: "Up to 80%" },
                    { label: "Loan Terms", value: "30-Year Fixed, 5/10 Year ARMs" },
                    { label: "Interest Rates", value: "Starting at 5.75%" },
                    { label: "Min FICO Score", value: "660" },
                    { label: "Closing Timeline", value: "21–30 Days" },
                    { label: "Property Count", value: "Unlimited" }
                  ].map((param, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">{param.label}</span>
                      <span className="text-gold-500 font-bold text-lg font-mono">{param.value}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full mt-12 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold rounded-none py-8 uppercase tracking-widest text-sm"
                  onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
                >
                  Apply for Pre-Approval
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-navy-950 uppercase tracking-tight">Frequently Asked Questions</h2>
              <div className="h-1 w-12 bg-gold-500 mx-auto mt-4" />
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { 
                  q: "How does a DSCR Loan work?", 
                  a: "A DSCR (Debt Service Coverage Ratio) Loan qualifies you based on the rental income of the property instead of your personal W-2s or tax returns. If the property's income covers the debt, you qualify." 
                },
                { 
                  q: "Can I get a loan without tax returns?", 
                  a: "Yes. At 316 Capital, we focus exclusively on the property's cash flow. We do not require personal tax returns or income verification for our DSCR programs." 
                },
                { q: "How quickly can I close with 316 Capital?", 
                  a: "Most DSCR loans close within 21–30 days, thanks to our investor-friendly underwriting process and AI-enabled allocation." 
                },
                { 
                  q: "Are there prepayment penalties?", 
                  a: "We offer a variety of options including standard step-down penalties (3-2-1) and options with no prepayment penalty at all, depending on your exit strategy." 
                }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-gray-100 px-6 py-2 bg-cream-50/30">
                  <AccordionTrigger className="text-navy-950 font-bold uppercase tracking-tight text-left hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-navy-900/70 leading-relaxed font-medium pt-2">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-[#001A54] text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gold-500 opacity-[0.03] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-tight">
              Built for <span className="text-gold-500 italic font-medium">Performance.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
              Join the network of professional investors scaling with institutional speed.
            </p>
            <Button 
              size="lg"
              className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-black px-12 py-8 rounded-none transition-all uppercase tracking-widest text-sm shadow-[0_20px_50px_rgba(242,193,0,0.2)]"
              onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
            >
              Get Started With Us
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

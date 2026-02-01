import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  CheckCircle2, 
  ArrowRight, 
  Hammer, 
  Zap, 
  Clock, 
  TrendingUp, 
  Shield, 
  BarChart4,
  Layout,
  Briefcase,
  Users
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import bridgeFixFlipHero from "@/assets/images/bridge-fix-flip-hero.jpg";
import bridgeConsultation from "@/assets/images/bridge-consultation.jpg";

import investorRelationship from "@/assets/images/investor-relationship.jpg";

// Using high-quality unsplash images for institutional feel
// const flipContent = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200";

export default function FlipProduct() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Asteris-Inspired Hero Section */}
        <section className="relative min-h-[70vh] flex items-center bg-[#001A54] text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={bridgeFixFlipHero} 
              alt="Bridge & Fix-and-Flip Capital" 
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
              <div className="inline-flex items-center space-x-2 bg-[#F2C100]/20 border border-[#F2C100]/40 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md">
                <Zap className="h-3 w-3 text-[#F2C100] fill-current" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">High-Velocity Private Credit</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-[1.1] mb-8 text-white">
                Bridge / Fix & Flip <br /> 
                <span className="text-[#F2C100] italic font-medium">Financing</span>
              </h1>
              <h2 className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-medium max-w-2xl">
                Buy, Renovate, Profit—We Provide the Funds, You Reap the Rewards. 
                Tailored solutions for acquisition and repositioning.
              </h2>
              <Button 
                size="lg"
                className="bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-bold px-8 py-6 rounded-none transition-all uppercase tracking-widest text-xs shadow-lg"
                onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
              >
                Get Funding Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Conventus-Inspired Intro Section */}
        <section className="relative bg-white py-24 overflow-hidden border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7"
              >
                <h2 className="text-gold-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">About the Solution</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-[#001A54] uppercase tracking-tight mb-8 leading-tight">
                  Short-Term Capital.
                </h3>
                
                <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-lg">
                  <p>
                    Flipping properties is about speed and execution. Whether you’re doing a quick cosmetic rehab or looking at larger projects, the right financing partner makes all the difference. 
                  </p>
                  <p>
                    316 Capital provides <span className="text-gold-600 italic">high-leverage bridge loans</span> that cover up to 100% of rehab costs and offer swift closings, so you can secure deals faster and optimize your capital.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-2 text-[#001A54]/60 font-bold uppercase tracking-[0.2em] text-[10px]">
                    <Clock className="h-3 w-3 fill-current text-gold-500" />
                    <span>5–10 Day Closing</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#001A54]/60 font-bold uppercase tracking-[0.2em] text-[10px]">
                    <Shield className="h-3 w-3 fill-current text-gold-500" />
                    <span>Up to 90% Purchase</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5 relative flex justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-[400px]">
                  <div className="absolute -inset-4 border-2 border-gold-500/10 translate-x-4 translate-y-4" />
                  <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
                    <img 
                      src={bridgeConsultation} 
                      alt="Institutional Bridge Consultation" 
                      className="w-full h-full object-cover transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001A54]/60 to-transparent opacity-60" />
                    <div className="absolute bottom-0 left-0 p-8 text-white">
                      <p className="text-[10px] font-black uppercase tracking-widest text-gold-500 mb-2">Deal Velocity</p>
                      <p className="text-xl font-bold leading-tight">Rapid Funding for Active Flips</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Loan Parameters Card Section */}
        <section className="py-24 bg-cream-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="rounded-none border-none shadow-2xl bg-[#001A54] text-white p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Hammer className="h-32 w-32" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase mb-8 relative z-10 text-[#F2C100]">Loan Parameters</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
                    {[
                      { label: "Eligible Assets", value: "1-4 Res, Multi-Family (5-29), Mixed Use" },
                      { label: "Loan Amounts", value: "$100K – $10MM+" },
                      { label: "Max LTC", value: "90% Purchase / 100% Rehab" },
                      { label: "Interest Rates", value: "Starting at 7.75%" },
                      { label: "Loan Terms", value: "6 – 24 Months" },
                      { label: "Interest Only", value: "Yes" },
                      { label: "Min FICO", value: "620" },
                      { label: "Closing Timeline", value: "5 – 10 Days" }
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between border-b border-white/10 pb-4">
                        <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">{row.label}</span>
                        <span className="text-[#F2C100] font-bold text-sm text-right">{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10 flex justify-center">
                    <Button 
                      className="w-full md:w-auto px-12 bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-bold rounded-none py-8 uppercase tracking-widest text-xs shadow-lg"
                      onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
                    >
                      Request Bridge Terms
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Asteris Distinction Section: Bridge vs Fix-and-Flip */}
        <section className="py-24 bg-cream-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-navy-950 uppercase tracking-tight">Choice & Flexibility</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-medium">Understanding the right financing strategy for your investment goals.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="bg-white border-none rounded-none p-10 shadow-xl relative group">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Hammer className="h-24 w-24" />
                </div>
                <h4 className="text-[#001A54] font-black uppercase tracking-widest text-sm mb-6">Fix-and-Flip Loans</h4>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                  Primarily used by flippers to buy, renovate, and sell a property quickly. Terms are short, interest-only payments are common, and approval focuses on the property’s potential resale value (ARV).
                </p>
                <div className="flex items-center space-x-2 text-gold-600 font-bold uppercase tracking-tight text-xs">
                  <span>Best for quick turnarounds</span>
                </div>
              </Card>

              <Card className="bg-navy-950 border-none rounded-none p-10 shadow-xl relative group text-white">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <TrendingUp className="h-24 w-24" />
                </div>
                <h4 className="text-gold-500 font-black uppercase tracking-widest text-sm mb-6">Bridge Loans</h4>
                <p className="text-slate-300 mb-8 leading-relaxed font-medium">
                  Designed to help investors bridge into long-term financing, such as securing permanent loans on stabilized properties or unlocking equity. Flexible terms for acquisitions and cash-out refinances.
                </p>
                <div className="flex items-center space-x-2 text-gold-500 font-bold uppercase tracking-tight text-xs">
                  <span>Best for repositioning</span>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Parameters Grid */}
        <section className="bg-navy-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Minimum Loan", value: "$100K" },
                { label: "Max LTC", value: "90/100" },
                { label: "Terms", value: "6-24 Mo" },
                { label: "Rate Starting", value: "7.75%" }
              ].map((stat, i) => (
                <div key={i} className="text-center border-l border-white/10 first:border-0">
                  <p className="text-gold-500 font-mono text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section with Visual Spice */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1">
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold-600 mb-4">The Advantage</h2>
                <h3 className="text-4xl font-bold text-[#001A54] uppercase tracking-tight mb-8 leading-tight">
                  Move Fast. <br /> Stay Nimble. <br /> Build.
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-10">
                  In the fix and flip business, speed is the only metric that matters. Lock in opportunities before competitors with 316 Capital.
                </p>
                <Button 
                  className="bg-navy-950 text-white rounded-none px-8 py-6 uppercase tracking-widest text-xs font-bold"
                  onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
                >
                  Apply for Bridge Capital
                </Button>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Zap, title: "High ROI Potential", desc: "Maximize profits with fast turnaround projects." },
                  { icon: BarChart4, title: "Leverage Your Capital", desc: "Finance most of your purchase and rehab, keeping liquidity." },
                  { icon: TrendingUp, title: "Fast-Paced Growth", desc: "Flip properties and scale your portfolio quickly." },
                  { icon: Layout, title: "Market-Driven Strategy", desc: "Adapt to real estate trends and capitalize on demand." }
                ].map((item, i) => (
                  <div key={i} className="p-8 border border-gray-100 bg-cream-50/30 hover:border-gold-500/30 transition-colors">
                    <item.icon className="h-8 w-8 text-gold-500 mb-6" />
                    <h4 className="text-[#001A54] font-bold uppercase tracking-tight mb-3">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Study / Partner Success (Conventus Inspired) */}
        <section className="py-24 bg-[#001A54] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div className="max-w-2xl">
                <h2 className="text-gold-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Partner Success</h2>
                <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Proven Results. <br /> Private Execution.</h3>
              </div>
              <div className="mt-8 md:mt-0">
                <p className="text-gold-500 font-bold text-lg">$42M CLOSED Q1 2025</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="bg-white/5 border-white/10 rounded-none p-10 text-white hover:bg-white/10 transition-colors">
                <div className="mb-8">
                  <span className="text-gold-500 font-bold text-4xl mb-2 block">$2.6M</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Multi-Family Rehab | Cambridge, MA</span>
                </div>
                <p className="text-gray-300 italic mb-8 leading-relaxed font-medium">
                  "I’ve dealt with a lot of lenders, but no one compares to 316 Capital. They reply within seconds—unreal service. Their bridge capital allowed us to scale from 3 to 15 active projects this year."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-gold-500/20 rounded-full" />
                  <div>
                    <h5 className="font-bold uppercase tracking-tight text-sm">Michael J.</h5>
                    <p className="text-[10px] text-gold-500 uppercase font-black">Real Estate Investor</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/5 border-white/10 rounded-none p-10 text-white hover:bg-white/10 transition-colors">
                <div className="mb-8">
                  <span className="text-gold-500 font-bold text-4xl mb-2 block">$1.7M</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Residential Rehab | Belmont, MA</span>
                </div>
                <p className="text-gray-300 italic mb-8 leading-relaxed font-medium">
                  "The BRRRR-ready bridge product allowed me to recycle capital twice as fast as traditional lenders. They are partners who are integral to the success of our business."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-gold-500/20 rounded-full" />
                  <div>
                    <h5 className="font-bold uppercase tracking-tight text-sm">Sarah Jenkins</h5>
                    <p className="text-[10px] text-gold-500 uppercase font-black">Portfolio Developer</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>


        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-navy-950 uppercase tracking-tight">Frequently Asked Questions</h2>
              <div className="h-1 w-12 bg-gold-500 mx-auto mt-4" />
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { 
                  q: "How does 316 Capital streamline the Fix & Flip process?", 
                  a: "We combine white-glove service with AI-driven underwriting. Our expert team proactively manages every step, ensuring your renovation projects move from funding to completion with zero friction." 
                },
                { 
                  q: "Can you help me compete with cash buyers?", 
                  a: "Yes. With 5–10 day closings and 24-hour term sheet issuance, you can secure deals faster and match cash offers in competitive markets." 
                },
                { q: "What support do you offer during the renovation phase?", 
                  a: "Our draw process is industry-leading. We fund rehab draws within 24 hours of inspection, ensuring you have the consistent cash flow needed to stay on budget." 
                },
                { 
                  q: "Can I finance both purchase and renovations?", 
                  a: "Absolutely. We offer up to 90% purchase and 100% rehab costs, maximizing your leverage so you can keep more of your own capital free for other deals." 
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
              Scale Your Portfolio <br /> with <span className="text-gold-500 italic font-medium">Confidence.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
              The market moves fast—so should your financing. Join the network of elite developers.
            </p>
            <Button 
              size="lg"
              className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-8 py-6 rounded-none transition-all uppercase tracking-widest text-xs shadow-lg"
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

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Zap, 
  Clock, 
  Shield, 
  TrendingUp, 
  BarChart4, 
  Layout,
  HardHat,
  Scale,
  ZapOff
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import newConstructionHero from "@/assets/images/new-construction-hero.jpg";

export default function ConstructionProduct() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Institutional Hero Section - Asteris & CV Inspired */}
        <section className="relative min-h-[70vh] flex items-center bg-[#001A54] text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={newConstructionHero} 
              alt="New Construction Financing" 
              className="w-full h-full object-cover brightness-[0.85] contrast-[1.15] scale-105"
            />
            <div className="absolute inset-0 bg-[#001A54]/30 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001A54]/95 via-[#001A54]/50 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center space-x-2 bg-[#F2C100]/20 border border-[#F2C100]/40 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md">
                <Zap className="h-3 w-3 text-[#F2C100] fill-current" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Institutional Build Capital</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-[1.1] mb-8 text-white">
                Build Smarter. <br /> 
                Scale <span className="text-[#F2C100] italic font-medium">Faster.</span>
              </h1>
              <h2 className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-medium max-w-2xl">
                High-velocity capital for ground-up construction. From single-family specs to multi-unit developments, we fund the vision.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-black px-12 py-8 rounded-none transition-all uppercase tracking-widest text-sm shadow-[0_20px_50px_rgba(242,193,0,0.2)]"
                  onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
                >
                  Start Your Build
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Conventus-Inspired Intro Section */}
        <section className="relative bg-white py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7"
              >
                <h2 className="text-gold-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">The Solution</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-[#001A54] uppercase tracking-tight mb-8 leading-tight">
                  Blueprints to Reality. <br /> <span className="text-gold-600 italic font-medium">Execution to ROI.</span>
                </h3>
                
                <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-lg">
                  <p>
                    New construction is where vision meets execution. Whether you’re building a single-family spec or a full-scale multi-family development, securing the right financing is the difference between a project and a profit.
                  </p>
                  <p>
                    At 316 Capital, we provide <span className="text-gold-600 italic">investor-focused construction loans</span> tailored to builders and developers who need capital without the rigid bureaucracy of traditional banks.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-2 text-[#001A54]/60 font-bold uppercase tracking-[0.2em] text-[10px]">
                    <Clock className="h-3 w-3 fill-current text-gold-500" />
                    <span>5–10 Day Closing</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#001A54]/60 font-bold uppercase tracking-[0.2em] text-[10px]">
                    <Shield className="h-3 w-3 fill-current text-gold-500" />
                    <span>Up to 85% LTC</span>
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
                  <h3 className="text-2xl font-bold uppercase mb-8 relative z-10 text-[#F2C100]">Loan Parameters</h3>
                  <div className="space-y-6 relative z-10">
                    {[
                      { label: "Loan Amounts", value: "$100K – $10MM+" },
                      { label: "Loan-to-Cost (LTC)", value: "Up to 85%" },
                      { label: "LTARV Limit", value: "Up to 70%" },
                      { label: "Interest Rates", value: "Starting at 8.99%" },
                      { label: "Loan Terms", value: "12 – 24 Months" },
                      { label: "Repayment", value: "Interest-Only" },
                      { label: "Prepayment", value: "No Penalties" }
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
                    Request Build Terms
                  </Button>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Asteris-Inspired Who It's For Grid */}
        <section className="py-24 bg-cream-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-gold-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Strategic Partners</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-[#001A54] uppercase tracking-tight">Who We Fund</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Homebuilders",
                  desc: "Financing for individual spec homes or custom builds in high-demand markets.",
                  icon: HardHat
                },
                {
                  title: "Developers",
                  desc: "Capital for residential neighborhoods, duplexes, or townhome clusters.",
                  icon: Layout
                },
                {
                  title: "Investor-Builders",
                  desc: "Seeking capital to construct and hold as rentals (BTR) or for short-term sales.",
                  icon: TrendingUp
                }
              ].map((item, i) => (
                <Card key={i} className="bg-white border-none rounded-none p-10 shadow-lg hover:shadow-xl transition-shadow group">
                  <item.icon className="h-10 w-10 text-gold-500 mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-[#001A54] font-bold uppercase tracking-tight text-xl mb-4">{item.title}</h4>
                  <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* The Advantage Comparison Table (CV Lending Inspired) */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#001A54] uppercase tracking-tight">The 316 Advantage</h2>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto font-medium">Faster approvals. Higher leverage. Zero bureaucracy.</p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-100 overflow-hidden shadow-2xl">
              {/* 316 Capital Column */}
              <div className="bg-[#001A54] p-12 text-white border-r border-white/5">
                <h4 className="text-[#F2C100] font-black uppercase tracking-widest text-sm mb-10">316 Capital New Construction</h4>
                <div className="space-y-6">
                  {[
                    "Fast approvals in 24-48 hours",
                    "Up to 85% LTC financing",
                    "No prepayment penalties",
                    "Swift 24-hour draw disbursements",
                    "Non-Dutch interest options",
                    "Modular & BTR welcome"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-[#F2C100]" />
                      <span className="font-bold text-sm uppercase tracking-tight">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Traditional Bank Column */}
              <div className="bg-slate-50 p-12 text-slate-400">
                <h4 className="text-slate-500 font-black uppercase tracking-widest text-sm mb-10">Traditional Bank Loans</h4>
                <div className="space-y-6">
                  {[
                    "Lengthy 30-60 day approval process",
                    "Lower loan-to-cost ratios (60-70%)",
                    "Strict prepayment penalties",
                    "Heavy fees for early payoff",
                    "Rigid terms and conditions",
                    "Extensive red tape & paperwork"
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

        {/* FAQ Section (CV Lending Inspired) */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#001A54] uppercase tracking-tight">Frequently Asked Questions</h2>
              <div className="h-1 w-12 bg-gold-500 mx-auto mt-4" />
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { 
                  q: "Who qualifies for a new construction loan?", 
                  a: "We primarily work with experienced builders and real estate investors, but we also evaluate first-time developers based on project feasibility, financial strength, and the quality of the building partner." 
                },
                { 
                  q: "Do I need permits before closing?", 
                  a: "In many cases, you can close before obtaining final permits. This allows you to secure funding earlier and start preparing your site while your permits are in the final stages of approval." 
                },
                { 
                  q: "How do construction draws work?", 
                  a: "Our draw process is industry-leading. Funds are released in stages based on completed milestones. We fund rehab/build draws within 24 hours of inspection, ensuring you have the cash flow needed to stay on schedule." 
                },
                { 
                  q: "Can I finance both land and construction costs?", 
                  a: "Absolutely. Our loans cover up to 85% of total project costs, including land acquisition (up to 50% of value) and 100% of vertical construction costs." 
                }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-gray-100 px-6 py-2 bg-cream-50/30">
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
        <section className="py-24 bg-[#001A54] text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[#F2C100] opacity-[0.03] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-tight">
              Let's Build <br /> Something <span className="text-[#F2C100] italic font-medium">Bold.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
              Join the network of elite developers. Secure your construction capital today.
            </p>
            <Button 
              size="lg"
              className="bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-black px-12 py-8 rounded-none transition-all uppercase tracking-widest text-sm shadow-[0_20px_50px_rgba(242,193,0,0.2)]"
              onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
            >
              Start The Process
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

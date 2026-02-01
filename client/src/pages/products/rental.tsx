import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

export default function RentalProduct() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={rentalHero} 
            alt="Luxury rental property" 
            className="w-full h-full object-cover brightness-[0.8] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-navy-950/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/40 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center space-x-2 bg-gold-500/20 border border-gold-500/40 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md"
            >
              <Zap className="h-3 w-3 text-gold-500 fill-current" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Institutional Private Credit</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tight leading-[1.1]"
            >
              DSCR Rental <br /> 
              <span className="text-gold-500 italic">Financing</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-200 mb-10 leading-relaxed font-medium max-w-2xl"
            >
              Turn rental properties into passive income and long-term wealth. Our DSCR loans qualify you based on property cash flow—no W-2s or tax returns required.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg"
                className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-10 py-7 rounded-none transition-all hover:shadow-[0_0_30px_rgba(242,193,0,0.3)]"
                onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
              >
                Start Your Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Close in 21-30 Days", desc: "Our streamlined underwriting gets you to the finish line faster." },
              { icon: Wallet, title: "No W-2 Required", desc: "Approvals based on property cash flow, not your personal income." },
              { icon: BarChart4, title: "Maximize Cash Flow", desc: "Leverage low rates and interest-only options to boost your ROI." }
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="h-12 w-12 shrink-0 bg-navy-50 flex items-center justify-center rounded-none border border-navy-100">
                  <item.icon className="h-6 w-6 text-navy-950" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy-950 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section with Image */}
      <section className="py-24 bg-cream-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold-600 mb-4">The Impact</h2>
              <h3 className="text-4xl font-bold text-navy-950 uppercase tracking-tight mb-8 leading-tight">
                Empowering <br /> New Homeowners.
              </h3>
              <div className="space-y-6 text-navy-900/70 leading-relaxed font-medium">
                <p>
                  At 316 Capital, we don't just fund properties; we facilitate the creation of homes and the building of communities. Our DSCR programs enable investors to provide high-quality housing options while securing their own financial future.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="h-12 w-12 bg-gold-500/10 flex items-center justify-center border border-gold-500/20">
                    <Users className="h-6 w-6 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-950 uppercase tracking-tight">Community Focused</h4>
                    <p className="text-xs text-muted-foreground">Strategic capital for sustainable growth.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 border-2 border-gold-500/20 translate-x-8 translate-y-8" />
              <img 
                src={rentalLifestyle} 
                alt="Happy tenants in new home" 
                className="relative z-10 w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section 2 (Original) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -inset-4 border-2 border-navy-950/10 -translate-x-8 translate-y-8" />
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
              className="order-1 lg:order-2"
            >
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold-600 mb-4">The Solution</h2>
              <h3 className="text-4xl font-bold text-navy-950 uppercase tracking-tight mb-8 leading-tight">
                Passive Income. <br /> Institutional Support.
              </h3>
              <div className="space-y-6 text-navy-900/70 leading-relaxed font-medium">
                <p>
                  Owning long-term rental properties is about creating financial stability and lasting equity. At 316 Capital, we know that every investment decision counts. 
                </p>
                <p>
                  That’s why we provide fast, flexible, and investor-focused financing designed for buy-and-hold investors who want to scale without the traditional lending headaches of a bank.
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
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 border-2 border-gold-500/20 translate-x-8 translate-y-8" />
              <img 
                src={rentalContent} 
                alt="Modern rental interior" 
                className="relative z-10 w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Loan Terms & Parameters Table */}
      <section className="py-24 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Loan Terms & Features</h2>
            <div className="h-1 w-20 bg-gold-500 mx-auto mt-6" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Card className="bg-white/5 border-white/10 rounded-none p-8 flex flex-col justify-between">
              <div>
                <h4 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-6">Who Benefits?</h4>
                <div className="space-y-8">
                  {[
                    { title: "Buy & Hold Investors", desc: "Secure steady cash flow with low overhead costs." },
                    { title: "Scaling Investors", desc: "Use DSCR loans to expand rental portfolios faster." },
                    { title: "Portfolio Owners", desc: "Refinance multiple properties under one streamlined loan." }
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
      <section className="py-24 bg-white">
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
                q: "Do I need prior experience to qualify?", 
                a: "No. While experience is always helpful, we have dedicated programs for both first-time investors and seasoned portfolio owners." 
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
      <section className="py-24 bg-navy-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-500 opacity-[0.03] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-tight">
            Build Long-Term Wealth <br /> with the <span className="text-gold-500 italic">Right Capital</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Whether you’re securing your first rental or expanding a nationwide portfolio, 316 Capital provides the institutional speed you need.
          </p>
          <Button 
            size="lg"
            className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-black px-12 py-8 rounded-none transition-all uppercase tracking-widest text-sm shadow-[0_20px_50px_rgba(242,193,0,0.2)]"
            onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
          >
            Start Your Application
          </Button>
        </div>
      </section>
    </div>
  );
}

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { DealAnalyzer } from "@/components/deal-analyzer";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, DollarSign, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF9] font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#001A54] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
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
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F2C100]">Institutional Tools</span>
              <div className="h-px w-8 bg-[#F2C100]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter leading-tight mb-6">
              ARV & Cash to <span className="text-[#F2C100] italic font-medium">Close Estimator</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Stop guessing and start investing with confidence. Our proven ARV model helps you quickly estimate your fix-and-flip financing options.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DealAnalyzer />

          {/* Value Propositions - Kiavi Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-24 border-t border-navy-950/5">
            {[
              {
                icon: TrendingUp,
                title: "Estimated After Repair Value",
                desc: "Our ARV estimate is powered by data from thousands of successful projects. By analyzing your property details, we provide an accurate estimate of its potential.",
                value: "$550,000"
              },
              {
                icon: DollarSign,
                title: "Know Your Cash to Close",
                desc: "Our tool factors in your down payment, origination fees, and third-party costs so you can plan your investment with absolute clarity.",
                value: "$45,649"
              },
              {
                icon: CheckCircle2,
                title: "Institutional Loan Terms",
                desc: "Get short-term financing with high leverage (up to 95% LTC), competitive terms, and quick closings—so you can move fast and maximize returns.",
                value: "95% LTC"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col"
              >
                <div className="h-12 w-12 bg-[#001A54] flex items-center justify-center mb-6">
                  <item.icon className="h-6 w-6 text-[#F2C100]" />
                </div>
                <h3 className="text-xl font-bold text-[#001A54] uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-slate-600 font-medium mb-6 leading-relaxed">{item.desc}</p>
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Example Estimate</span>
                  <span className="text-2xl font-bold text-[#001A54]">{item.value}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <section className="bg-[#001A54] p-12 md:p-20 relative overflow-hidden mb-24">
            <div className="absolute inset-0 bg-[url('https://www.kiavi.com/hubfs/static/images/content/home-with-patio-at-twilight_1200x800.jpg')] bg-cover bg-center opacity-20" />
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-8 leading-tight">
                Unlock Fast & <span className="text-[#F2C100] italic font-medium">Easy Financing</span>
              </h2>
              <p className="text-lg text-gray-300 mb-10 font-light leading-relaxed">
                Kiavi-inspired speed with 316 Capital expertise. Get pre-qualified in minutes and close your next deal in as fast as 7 days.
              </p>
              <Button 
                size="lg"
                className="bg-[#F2C100] hover:bg-white text-[#001A54] font-black px-12 py-8 rounded-none transition-all uppercase tracking-[0.2em] text-xs shadow-xl"
                onClick={() => window.open('https://www.316cap.com/widget/form/pdxTMenIM6Ei6b9ff1F6?notrack=true', '_blank')}
              >
                See Your Official Rate
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
                  q: "What type of loan product does the estimate provide?", 
                  a: "The ARV and Cash to Close Estimator applies primarily for fix-and-flip/bridge loan financing. For long-term rental or construction loans, please contact our capital desk." 
                },
                { 
                  q: "What is an After Repair Value (ARV)?", 
                  a: "ARV tells the value of a property once the rehab is completed. Lenders use ARV to determine loan amounts, and it helps investors calculate their expected ROI." 
                },
                { 
                  q: "What are the loan terms and leverage options?", 
                  a: "We offer maximum leverage up to 95% LTC and up to 80% ARV. 316 Capital can finance 100% of rehab costs for Vault members." 
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


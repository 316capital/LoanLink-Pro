import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";

export default function RentalProduct() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-navy-950 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,rgba(242,193,0,0.1),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/20 px-4 py-1.5 rounded-full mb-6"
            >
              <Zap className="h-3 w-3 text-gold-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-500">Institutional Rental Financing</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tight leading-tight">
              DSCR Rental <br /> <span className="text-gold-500">Financing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-medium">
              Maximize your portfolio's cash flow with long-term rental loans based on asset performance, not personal income.
            </p>
            <Button 
              size="lg"
              className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-10 py-7 rounded-none transition-all hover:scale-105"
              onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
            >
              Get Instant Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats/Parameters */}
      <section className="py-12 bg-cream-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Interest Rates", value: "5.75%+" },
              { label: "Max LTV", value: "80%" },
              { label: "Min FICO", value: "620" },
              { label: "Term Length", value: "30 Years" }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-navy-950">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-3xl font-bold text-navy-950 uppercase mb-8 tracking-tight">The Smart Choice for Portfolio Scaling</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed font-medium">
                <p>
                  Our DSCR (Debt Service Coverage Ratio) loans are specifically engineered for professional real estate investors. By focusing on the property's ability to cover its debt rather than your personal DTI, we unlock significantly more leverage for your portfolio.
                </p>
                <div className="space-y-4 pt-4">
                  {[
                    "No personal income verification required",
                    "Close in an LLC for maximum protection",
                    "Interest-only payment options available",
                    "Unlimited property count in portfolio",
                    "Streamlined appraisal process"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-gold-500" />
                      <span className="text-navy-950 font-bold text-sm uppercase tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Card className="rounded-none border-navy-950/10 shadow-2xl bg-navy-950 text-white p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Shield className="h-32 w-32" />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-8 relative z-10">Program Guidelines</h3>
              <div className="space-y-6 relative z-10">
                {[
                  { label: "Property Types", value: "1-4 Unit & 5-20 Unit Multi-Family" },
                  { label: "Loan Amounts", value: "$150k - $20M+" },
                  { label: "Geographies", value: "Nationwide (44 States)" },
                  { label: "DSCR Ratio", value: "As low as 1.0 (No ratio options available)" },
                  { label: "Prepayment", value: "Flexible (3, 2, 1 or Step-down options)" }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-gray-400 text-sm uppercase font-bold tracking-wider">{row.label}</span>
                    <span className="text-gold-500 font-bold text-sm">{row.value}</span>
                  </div>
                ))}
              </div>
              <Button 
                className="w-full mt-10 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold rounded-none py-6 uppercase tracking-widest text-xs"
                onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
              >
                Apply for Pre-Approval
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

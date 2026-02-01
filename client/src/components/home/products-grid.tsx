import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Hammer, Home, Landmark, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "DSCR Rental",
    description: "Long-term rental loans based on asset cash flow.",
    rateRange: "5.75% - 7.99%",
    maxLTV: "80%",
    timeline: "14 Days",
    amortization: "360 Months",
    icon: Home,
    popular: false,
  },
  {
    title: "Fix & Flip",
    description: "Purchase + Rehab capital with 24-hour draw times.",
    rateRange: "7.90% - 11.5%",
    maxLTV: "90%",
    timeline: "7 Days",
    amortization: "12-30 Months",
    icon: Hammer,
    popular: true,
  },
  {
    title: "BRRRR",
    description: "Buy, Rehab, Rent, Refinance, Repeat capital for portfolio scaling.",
    rateRange: "7.90% - 11.5%",
    maxLTV: "90%",
    timeline: "7 Days",
    amortization: "12-30 Months",
    icon: TrendingUp,
    popular: false,
  },
  {
    title: "Ground-Up",
    description: "Vertical financing for single family and multi-unit builds.",
    rateRange: "8.99% - 11.25%",
    maxLTV: "85%",
    timeline: "14 Days",
    amortization: "12-30 Months",
    icon: Building2,
    popular: false,
  },
];

export function ProductsGrid() {
  return (
    <section id="products" className="py-24 bg-[#001A54] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_-20%,rgba(242,193,0,0.05),transparent)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={ { opacity: 0, x: -20 } }
          whileInView={ { opacity: 1, x: 0 } }
          viewport={ { once: true } }
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Products</h2>
          <div className="h-1 w-20 bg-gold-500 shadow-[0_0_10px_rgba(242,193,0,0.5)]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={ { opacity: 0, y: 20 } }
              whileInView={ { opacity: 1, y: 0 } }
              viewport={ { once: true } }
              transition={ { delay: index * 0.1 } }
              className="relative"
            >
              {product.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gold-500 text-navy-950 text-[10px] font-bold uppercase tracking-widest px-3 py-1 shadow-[0_4px_20px_rgba(242,193,0,0.3)]">
                    Most Popular
                  </span>
                </div>
              )}
              <Card className="bg-cream-50/5 border border-white/10 rounded-none shadow-none hover:bg-cream-50/10 hover:border-gold-500/50 transition-all duration-300 group pt-4 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors">
                    <product.icon className="h-6 w-6 text-gold-500 group-hover:text-navy-950 transition-colors" />
                  </div>
                  <CardTitle className="text-lg font-bold text-white mb-1">{product.title}</CardTitle>
                  <p className="text-[#F2C100] text-[10px] font-bold uppercase tracking-widest opacity-80">For 1-4 Residential and Multi-Units</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400 text-xs leading-relaxed h-8">{product.description}</p>
                  
                  <div className="pt-4 space-y-2 border-t border-white/10">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-white/70 uppercase">Interest Rates</span>
                      <span className="font-bold text-white">{product.rateRange}</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-white/70 uppercase">Max LTV/LTC</span>
                      <span className="font-bold text-white">{product.maxLTV}</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-white/70 uppercase">Timeline</span>
                      <span className="font-bold text-white">{product.timeline}</span>
                    </div>
                    {product.amortization && (
                      <div className="flex justify-between text-[11px]">
                        <span className="text-white/70 uppercase">Terms</span>
                        <span className="font-bold text-white">{product.amortization}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
                <div className="px-6 pb-6 space-y-3">
                  <Button 
                    className="w-full bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-950 rounded-none text-[10px] font-bold uppercase tracking-widest transition-all"
                    onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
                  >
                    Get Your Rate
                  </Button>
                  <Button 
                    variant="link"
                    className="w-full text-gold-500/80 hover:text-gold-500 text-[9px] uppercase tracking-[0.2em] font-bold h-auto p-0 transition-colors"
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Explore More
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
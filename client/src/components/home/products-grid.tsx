import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Hammer, Home, Landmark, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "DSCR Rental",
    description: "Long-term rental loans based on asset cash flow.",
    floorRate: "5.75%",
    maxLTV: "80%",
    timeline: "14 Days",
    amortization: "30 Years",
    icon: Home,
    popular: false,
  },
  {
    title: "Fix & Flip",
    description: "Purchase + Rehab capital with 48-hour draw times.",
    floorRate: "7.90%",
    maxLTV: "90%",
    timeline: "7 Days",
    icon: Hammer,
    popular: true,
  },
  {
    title: "BRRRR",
    description: "Buy, Rehab, Rent, Refinance, Repeat capital for portfolio scaling.",
    floorRate: "7.90%",
    maxLTV: "90%",
    timeline: "7 Days",
    icon: TrendingUp,
    popular: false,
  },
  {
    title: "Ground-Up",
    description: "Vertical financing for single family and multi-unit builds.",
    floorRate: "9.00%",
    maxLTV: "85%",
    timeline: "14 Days",
    icon: Building2,
    popular: false,
  },
];

export function ProductsGrid() {
  return (
    <section id="products" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={ { opacity: 0, x: -20 } }
          whileInView={ { opacity: 1, x: 0 } }
          viewport={ { once: true } }
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-4">Core Products</h2>
          <div className="h-1 w-20 bg-gold-500" />
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
                  <span className="bg-gold-500 text-navy-950 text-[10px] font-bold uppercase tracking-widest px-3 py-1 shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              <Card className="bg-bone-50 border-none rounded-none shadow-none hover:bg-white hover:shadow-xl transition-all duration-300 group pt-4">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center mb-6 group-hover:bg-navy-950 transition-colors">
                    <product.icon className="h-6 w-6 text-navy-950 group-hover:text-gold-500 transition-colors" />
                  </div>
                  <CardTitle className="text-lg font-bold text-navy-950">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-xs leading-relaxed h-8">{product.description}</p>
                  
                  <div className="pt-4 space-y-2 border-t border-gray-200">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-gray-500 uppercase">Floor Rate</span>
                      <span className="font-bold text-navy-950">{product.floorRate}</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-gray-500 uppercase">Max LTV/LTC</span>
                      <span className="font-bold text-navy-950">{product.maxLTV}</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-gray-500 uppercase">Timeline</span>
                      <span className="font-bold text-navy-950">{product.timeline}</span>
                    </div>
                    {product.amortization && (
                      <div className="flex justify-between text-[11px]">
                        <span className="text-gray-500 uppercase">Amortization</span>
                        <span className="font-bold text-navy-950">{product.amortization}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
                <div className="px-6 pb-6">
                  <Button variant="outline" className="w-full border-navy-950/10 text-navy-950 hover:bg-navy-950 hover:text-white rounded-none text-[10px] font-bold uppercase tracking-widest transition-all">
                    Get Your Rate
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
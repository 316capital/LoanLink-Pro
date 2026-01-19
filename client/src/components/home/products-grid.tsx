import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Hammer, Home, Landmark, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    title: "Bridge Loans",
    description: "Short-term liquidity for acquisitions and stabilization.",
    rate: "Rates from 7.90%",
    icon: TrendingUp,
  },
  {
    title: "Fix & Flip",
    description: "Purchase + Rehab capital with 48-hour draw times.",
    rate: "LTC up to 90%",
    icon: Hammer,
  },
  {
    title: "Ground-Up",
    description: "Vertical financing for single family and multi-unit builds.",
    rate: "Rates from 9%",
    icon: Building2,
  },
  {
    title: "DSCR (30-Year)",
    description: "Long-term rental loans based on asset cash flow.",
    rate: "Rates from 5.75%",
    icon: Home,
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
            >
              <Card className="bg-bone-50 border-none rounded-none shadow-none hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center mb-6 group-hover:bg-navy-950 transition-colors">
                    <product.icon className="h-6 w-6 text-navy-950 group-hover:text-gold-500 transition-colors" />
                  </div>
                  <CardTitle className="text-lg font-bold text-navy-950">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-8 leading-relaxed h-10">{product.description}</p>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold-600">
                    {product.rate}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
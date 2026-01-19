import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Hammer, Home, Landmark, TrendingUp } from "lucide-react";

const products = [
  {
    title: "Bridge Loans",
    description: "Short-term liquidity for acquisitions and stabilization.",
    rate: "From 7.90% – 12%",
    icon: TrendingUp,
  },
  {
    title: "Fix & Flip",
    description: "Purchase + Rehab capital with rapid draw disbursement.",
    rate: "48-hour draw times",
    icon: Hammer,
  },
  {
    title: "Ground-Up Construction",
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
  {
    title: "Multi-Family",
    description: "Specialized lending for 5-20 unit assets.",
    rate: "Up to 75% LTV",
    icon: Landmark,
  },
];

export function ProductsGrid() {
  return (
    <section id="products" className="py-24 bg-bone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-4">Core Lending Products</h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="bg-white border-border shadow-sm hover:shadow-md hover:border-gold-500/30 transition-all duration-300 group rounded-none">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-navy-50 rounded-sm flex items-center justify-center mb-4 group-hover:bg-navy-950 transition-colors duration-300">
                  <product.icon className="h-6 w-6 text-navy-950 group-hover:text-gold-500 transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-bold text-navy-950">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 h-12">{product.description}</p>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gold-600 bg-gold-50 px-3 py-1 rounded-sm">
                    {product.rate}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Last Card is a CTA Card */}
          <div className="bg-navy-950 text-white p-6 flex flex-col justify-center items-center text-center space-y-4 shadow-xl border border-navy-800 rounded-none">
            <h3 className="text-2xl font-bold font-heading">Need something custom?</h3>
            <p className="text-gray-400">Our capital structure allows for creative solutions on complex assets.</p>
            <button className="text-gold-500 font-bold uppercase tracking-wider text-sm hover:text-gold-400 transition-colors">
              Contact Underwriting →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
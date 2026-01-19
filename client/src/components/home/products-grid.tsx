import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Zap, Layers, Share2, Activity } from "lucide-react";

const products = [
  {
    title: "Bridge Protocol",
    description: "Instant liquidity injection for asset stabilization.",
    rate: "Yield 7.90%+",
    icon: Activity,
  },
  {
    title: "Build v1.0",
    description: "End-to-end construction financing for vertical developers.",
    rate: "48H Draw Latency",
    icon: Cpu,
  },
  {
    title: "Yield Engine",
    description: "Long-term DSCR optimization for rental portfolios.",
    rate: "Low Cap Floor",
    icon: Zap,
  },
  {
    title: "Multi-Node",
    description: "Distributed capital for 5-20 unit multifamily assets.",
    rate: "LTV Optimization",
    icon: Layers,
  },
];

export function ProductsGrid() {
  return (
    <section id="products" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <div className="h-1 w-12 bg-gold-500 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">LIQUIDITY PRODUCTS</h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm font-light mt-4 md:mt-0">
            Automated capital allocation systems designed for high-velocity real estate developers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {products.map((product, index) => (
            <Card key={index} className="bg-white/5 border-white/10 rounded-none shadow-none hover:bg-white/[0.08] transition-all duration-500 group border-r">
              <CardHeader className="pb-8">
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center mb-6 group-hover:border-gold-500/50 transition-colors">
                  <product.icon className="h-4 w-4 text-gray-400 group-hover:text-gold-500 transition-colors" />
                </div>
                <CardTitle className="text-sm font-black uppercase tracking-widest text-white group-hover:text-gold-500 transition-colors">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-xs mb-8 leading-relaxed h-10">{product.description}</p>
                <div className="flex items-center space-x-2">
                   <div className="h-[1px] w-4 bg-gold-500/50" />
                   <span className="text-[10px] font-mono text-gold-500 uppercase tracking-widest">
                     {product.rate}
                   </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
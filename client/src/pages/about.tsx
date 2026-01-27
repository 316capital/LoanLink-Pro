import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Shield, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section - Navy */}
      <section className="bg-navy-950 pt-40 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(242,193,0,0.05),transparent)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <Badge variant="outline" className="border-gold-500/50 text-gold-500 rounded-none px-4 py-1.5 font-bold text-xs uppercase tracking-[0.2em] mb-6">
              Our Identity
            </Badge>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter uppercase leading-[0.85]">
              Institutional Capital.<br />
              <span className="text-gold-500">AI-Enabled Speed.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl font-light">
              316 Capital is a technology-first private lending firm delivering institutional-grade capital allocation to the nation's most sophisticated real estate investors.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid - Cream */}
      <section className="py-24 bg-cream-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-gold-500" />,
                title: "AI-DRIVEN SPEED",
                description: "Leveraging proprietary algorithms for instant capital allocation and rapid certainty of execution."
              },
              {
                icon: <Shield className="w-8 h-8 text-gold-500" />,
                title: "INSTITUTIONAL RIGOR",
                description: "Applying bank-level underwriting standards with the flexibility of a private capital partner."
              },
              {
                icon: <Target className="w-8 h-8 text-gold-500" />,
                title: "TRUE ASSET-BASED",
                description: "Focusing on the merit of the real estate asset rather than traditional personal credit metrics."
              },
              {
                icon: <Users className="w-8 h-8 text-gold-500" />,
                title: "NATIONWIDE REACH",
                description: "Deploying capital across every major US market with deep local expertise and insight."
              }
            ].map((value, idx) => (
              <Card key={idx} className="bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-none overflow-hidden group">
                <CardContent className="p-8">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                  <h3 className="text-lg font-bold text-navy-950 mb-3 tracking-wider">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section - Alternating */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden border border-navy-950/10 shadow-2xl">
              <div className="absolute inset-0 bg-navy-900/20 mix-blend-multiply"></div>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
                alt="Corporate architecture" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
              />
              <div className="absolute bottom-0 left-0 p-12 bg-gold-500 text-navy-950 font-bold text-2xl tracking-tighter uppercase">
                Founded on<br />Efficiency
              </div>
            </div>
            <div className="lg:pl-8">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-950 mb-8 tracking-tighter uppercase italic border-l-8 border-gold-500 pl-8">
                The 316 Standard
              </h2>
              <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We recognized a fundamental disconnect in the private lending space: the speed required by investors was often hampered by antiquated underwriting processes.
                </p>
                <p>
                  316 Capital was built to bridge that gap. By integrating advanced data analytics with decades of real estate expertise, we provide capital that moves as fast as the market does.
                </p>
                <div className="pt-10 border-t border-gray-100">
                  <p className="text-gold-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Deployment Philosophy</p>
                  <p className="text-3xl font-serif italic text-navy-900 leading-snug">
                    "We don't just fund deals; we empower the transformation of the built environment through intelligent capital."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

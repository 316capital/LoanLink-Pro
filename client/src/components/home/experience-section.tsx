import { Shield, Zap, TrendingUp, Users, HardHat, FileCheck } from "lucide-react";

const stats = [
  { label: "Capital Deployed", value: "$4.2B+" },
  { label: "Years Experience", value: "15+" },
  { label: "Repeat Borrowers", value: "82%" },
  { label: "Active Markets", value: "42" },
];

const values = [
  {
    icon: Shield,
    title: "Capitalized Strength",
    description: "Deep discretionary capital pools ensuring your project is funded from foundation to finish."
  },
  {
    icon: Zap,
    title: "Velocity of Capital",
    description: "Institutional speed that meets the pace of modern construction. Closings in as little as 7 days."
  },
  {
    icon: FileCheck,
    title: "Covenant Integrity",
    description: "We lead with transparency. No hidden fees, no bait-and-switch, just predictable capital."
  }
];

export function ExperienceSection() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-4">The 316 Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-navy-950 mb-6 leading-tight">
              Built by Developers, <br/> Funded by Experts.
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We aren't just lenders; we are capital partners. Our team brings decades of experience in urban infill, multifamily development, and structured finance to every deal we underwrite.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              {values.map((v, i) => (
                <div key={i} className="flex flex-col space-y-3">
                  <div className="h-10 w-10 rounded bg-navy-50 flex items-center justify-center">
                    <v.icon className="h-5 w-5 text-navy-950" />
                  </div>
                  <h4 className="font-bold text-navy-950">{v.title}</h4>
                  <p className="text-sm text-muted-foreground leading-snug">{v.description}</p>
                </div>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 border-t border-gray-100 pt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-12 w-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Executive" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-navy-950">Management Team</p>
                <p className="text-xs text-muted-foreground">Ex-Goldman Sachs, Blackstone, & DR Horton</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-navy-950 aspect-[4/5] rounded-none overflow-hidden shadow-2xl relative group">
                <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                    alt="Corporate HQ" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 grid grid-cols-2 gap-8">
                  {stats.map((stat, i) => (
                    <div key={i} className="border-l-2 border-gold-500 pl-4">
                      <p className="text-3xl font-bold font-mono text-white mb-1">{stat.value}</p>
                      <p className="text-xs font-bold uppercase tracking-widest text-gold-500/80">{stat.label}</p>
                    </div>
                  ))}
                </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -top-6 -left-6 bg-gold-500 p-8 shadow-xl hidden xl:block animate-in fade-in slide-in-from-left-4 duration-1000">
               <TrendingUp className="h-8 w-8 text-navy-950 mb-4" />
               <p className="text-navy-950 font-bold text-lg leading-tight">
                 Reliable Capital <br/> In Any Market <br/> Cycle.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
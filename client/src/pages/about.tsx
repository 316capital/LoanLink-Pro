import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Heart, Scale, Lightbulb, Users, Linkedin } from "lucide-react";

const team = [
  {
    name: "Joshua Gutierrez",
    role: "Managing Principal",
    bio: "Visionary leader at 316 Capital, dedicated to providing honest answers, fast capital, and an institutional-grade experience.",
    image: "/src/assets/team/joshua-gutierrez-final.png",
    linkedin: "https://www.linkedin.com/in/joshua-gutierrez-798968105/"
  },
  {
    name: "Peter Lagorio",
    role: "Executive Director of Governance & Fund Strategy",
    bio: "Institutional anchor with 30+ years in financial law and SEC fund structuring, ensuring rigorous professional standards.",
    image: "/src/assets/team/peter-lagorio.png",
    linkedin: "#"
  },
  {
    name: "Thomas Fernandes",
    role: "Director of Investor Relations",
    bio: "Cultivating institutional partnerships and ensuring capital deployment aligns with investor vision.",
    image: "/src/assets/team/thomas-fernandes.jpg",
    linkedin: "#"
  },
  {
    name: "Lee Gutierrez",
    role: "Head of People",
    bio: "Driving the cultural excellence and organizational growth that powers the '11 out of 10' experience.",
    image: "/src/assets/team/lee-gutierrez.jpg",
    linkedin: "#"
  },
  {
    name: "Kayla Ruano",
    role: "Executive Assistant",
    bio: "Optimizing operational efficiency and supporting the firm's rapid nationwide deployment.",
    image: "/src/assets/team/kayla-ruano.png",
    linkedin: "#"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section - Navy */}
      <section className="bg-navy-950 pt-32 pb-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(242,193,0,0.05),transparent)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <Badge variant="outline" className="border-gold-500/50 text-gold-500 rounded-none px-4 py-1.5 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
              THE 316 WAY
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tighter uppercase leading-[0.95]">
              A Simpler Way<br />
              <span className="text-gold-500">To Fund Your Deals.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
              Every great project starts with a big dream. But in real estate, if the money moves slow, the deal dies. At 316 Capital, we're changing the game with funding that values your time as much as your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden border border-navy-950/10 shadow-2xl">
              <div className="absolute inset-0 bg-navy-900/20 mix-blend-multiply"></div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
                alt="316 Capital Story" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
              />
              <div className="absolute bottom-0 left-0 p-12 bg-gold-500 text-navy-950 font-bold text-2xl tracking-tighter uppercase">
                A Light in<br />The Industry
              </div>
            </div>
            <div className="lg:pl-8">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-950 mb-8 tracking-tighter uppercase italic border-l-8 border-gold-500 pl-8">
                The 316 Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We didn't start 316 Capital just to be another lender. We started it to be a light in the industry—a place where investors can find honest answers and fast capital. We combine high-tech tools with high-touch service to get you a term sheet in under 24 hours.
                </p>
                <p>
                  We are founder-led and family-driven. We treat your $17M pipeline with the same care we'd give our own projects. Today, we're known for simple pricing, fast wires, and a "Direct Match" promise: If you have a written offer, we'll do our best to beat it.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                  <div className="p-6 bg-navy-50 border-l-4 border-navy-950">
                    <h4 className="font-bold text-navy-950 uppercase tracking-widest text-xs mb-2 text-gold-600">Our Vision</h4>
                    <p className="text-sm italic">"To be the most trusted private lender in the country, helping our clients improve their communities—one property at a time."</p>
                  </div>
                  <div className="p-6 bg-gold-50 border-l-4 border-gold-500">
                    <h4 className="font-bold text-navy-950 uppercase tracking-widest text-xs mb-2 text-gold-600">Our Mission</h4>
                    <p className="text-sm italic">"To provide simple, fair, and fast funding to real estate investors of all sizes. We are committed to an '11 out of 10' experience."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-950 mb-4 tracking-tighter uppercase">MEET THE TEAM</h2>
            <p className="text-gold-600 font-bold uppercase tracking-[0.2em] text-sm">Founder-Led & Family-Driven</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-[90rem] mx-auto">
            {team.map((member, idx) => (
              <div key={idx} className="group flex flex-col h-full">
                <div className="relative aspect-square overflow-hidden mb-4 border border-navy-950/5 shadow-md bg-gray-50">
                  <div className="absolute inset-0 bg-navy-950/5 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute bottom-3 right-3 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-navy-950 p-2 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-navy-950 tracking-tight leading-tight mb-1">{member.name}</h3>
                  <p className="text-gold-600 font-bold uppercase tracking-widest text-[9px] mb-2 leading-tight">{member.role}</p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-4">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-24 bg-cream-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-navy-950 mb-4 tracking-tighter uppercase">THE 316 WAY</h2>
            <p className="text-gold-600 font-bold uppercase tracking-[0.2em] text-sm">Our Core Values</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Scale className="w-8 h-8 text-gold-500" />,
                title: "Integrity in the Details",
                ref: "(Colossians 3:23)",
                description: "We do everything with excellence. Whether it's a small rental or a multi-million dollar construction deal, we work as if we're serving a higher purpose."
              },
              {
                icon: <Zap className="w-8 h-8 text-gold-500" />,
                title: "Move with Purpose & Speed",
                description: "We know that 'hope deferred makes the heart sick.' We don't leave you hanging. We respond with urgency because your deposit and reputation are on the line."
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-gold-500" />,
                title: "Radical Honesty",
                description: "The truth is the best marketing. We offer clear floor rates—5.75% for rentals (DSCR) and 7.90% for bridge loans—no hidden fees, no surprises."
              },
              {
                icon: <Heart className="w-8 h-8 text-gold-500" />,
                title: "Stewards of Your Success",
                description: "We aren't just a bank; we're partners. We grow when you grow. We take responsibility for the process from the first click to the final wire."
              }
            ].map((value, idx) => (
              <Card key={idx} className="bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-none overflow-hidden group">
                <CardContent className="p-10">
                  <div className="flex items-start gap-6">
                    <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-950 mb-1 tracking-tight">
                        {value.title}
                        {value.ref && <span className="block text-xs text-gold-600 font-medium mt-1">{value.ref}</span>}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed mt-3">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-950 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter uppercase italic">
            A Partner Who <span className="text-gold-500">Has Your Back.</span>
          </h2>
          <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
            Whether you’re flipping your first house or managing a massive portfolio, we provide the three things you need most: Honesty, Speed, and Fair Pricing.
          </p>
          <div className="mb-10 text-gold-500/80 font-serif italic text-lg max-w-3xl mx-auto border-t border-white/10 pt-8">
            "By wisdom a house is built, and through understanding it is established; through knowledge its rooms are filled with rare and beautiful treasures."
            <span className="block mt-2 text-xs uppercase tracking-[0.2em] opacity-60">Proverbs 24:3-4</span>
          </div>
          <button 
            onClick={() => window.open('https://www.316cap.com/widget/form/pdxTMenIM6Ei6b9ff1F6?notrack=true', '_blank')}
            className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-12 py-4 uppercase tracking-widest text-sm transition-all shadow-lg hover:shadow-gold-500/20"
          >
            Get Your Terms Now
          </button>
        </div>
      </section>
    </div>
  );
}

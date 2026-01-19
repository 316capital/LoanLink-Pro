import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Managing Director, Urban Infill LLC",
    content: "3:16 Capital's 48-hour draw times are game-changing. I've scaled from 3 to 15 active projects this year because their capital never lags.",
    avatar: "https://i.pravatar.cc/150?u=michael"
  },
  {
    name: "Sarah Jenkins",
    role: "Principal, Southern Realty Group",
    content: "Institutional scale with a tech-first approach. They underwrote a complex mixed-use deal in 3 days that our local bank wouldn't touch.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Robert Vance",
    role: "Developer, Vance & Co.",
    content: "The BRRRR product they offered allowed me to recycle capital twice as fast as traditional bridge lenders. Truly the smartest source of funding.",
    avatar: "https://i.pravatar.cc/150?u=robert"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-bone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={ { opacity: 0, y: 20 } }
          whileInView={ { opacity: 1, y: 0 } }
          viewport={ { once: true } }
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-4">Partner Success</h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={ { opacity: 0, scale: 0.95 } }
              whileInView={ { opacity: 1, scale: 1 } }
              viewport={ { once: true } }
              transition={ { delay: i * 0.1 } }
              className="bg-white p-8 border border-gray-100 relative group hover:shadow-2xl transition-all duration-500"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-gold-500/10 group-hover:text-gold-500/20 transition-colors" />
              <p className="text-muted-foreground mb-8 italic leading-relaxed">"{t.content}"</p>
              <div className="flex items-center space-x-4">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full grayscale group-hover:grayscale-0 transition-all" />
                <div>
                  <h4 className="font-bold text-navy-950 text-sm">{t.name}</h4>
                  <p className="text-xs text-gold-600 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
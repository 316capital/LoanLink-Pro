import { motion } from "framer-motion";
import { Building2, Zap, Globe } from "lucide-react";

export function Infrastructure() {
  return (
    <section className="py-20 bg-cream-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Institutional Capital",
              desc: "Direct access to private credit facilities for unlimited scale.",
              icon: Building2
            },
            {
              title: "AI Underwriting",
              desc: "Data-driven risk assessment for 24-hour term sheets.",
              icon: Zap
            },
            {
              title: "Nationwide Scope",
              desc: "Strategic financing across Massachusetts and 45+ states.",
              icon: Globe
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start space-x-6"
            >
              <div className="mt-1 p-3 bg-white border border-gray-200 text-gold-600 shadow-sm">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-950 uppercase tracking-tight mb-2">{item.title}</h3>
                <p className="text-sm text-navy-900/70 leading-relaxed font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

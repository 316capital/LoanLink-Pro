import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Network } from "lucide-react";

export function Infrastructure() {
  const items = [
    {
      icon: Cpu,
      title: "Proprietary AI",
      desc: "Real-time risk assessment for 24-hour term issuance."
    },
    {
      icon: ShieldCheck,
      title: "316 Vault",
      desc: "Encrypted institutional-grade document security."
    },
    {
      icon: Network,
      title: "316 Network",
      desc: "Exclusive access to private liquidity and off-market deal flow."
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-4">The 316 Infrastructure</h2>
          <div className="h-1 w-12 bg-gold-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-navy-50 text-navy-950 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-navy-950 font-bold text-lg mb-3 uppercase tracking-wider">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto italic">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

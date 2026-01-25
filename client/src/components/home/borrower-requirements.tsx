import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export function BorrowerRequirements() {
  return (
    <section className="bg-[#001A54] py-12 relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side: Requirements */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <h2 className="text-[#F2C100] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Borrower Requirements</h2>
            <h3 className="text-white text-3xl font-bold mb-8">Qualify in Seconds</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="h-1.5 w-1.5 rounded-full bg-[#F2C100] group-hover:scale-150 transition-transform" />
                <span className="text-gray-300 font-bold text-sm tracking-wide">Min. 620 FICO</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="h-1.5 w-1.5 rounded-full bg-[#F2C100] group-hover:scale-150 transition-transform" />
                <span className="text-gray-300 font-bold text-sm tracking-wide">LLC Borrowers Only</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="h-1.5 w-1.5 rounded-full bg-[#F2C100] group-hover:scale-150 transition-transform" />
                <span className="text-gray-300 font-bold text-sm tracking-wide">Non-Owner Occupied</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="h-1.5 w-1.5 rounded-full bg-[#F2C100] group-hover:scale-150 transition-transform" />
                <span className="text-gray-300 font-bold text-sm tracking-wide">US-Based Assets</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="shrink-0 flex items-center space-x-6 bg-white/5 p-6 border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Shield className="h-16 w-16 text-white" />
            </div>
            <div className="text-right">
              <div className="text-4xl md:text-5xl font-bold text-white mb-1 font-mono tracking-tighter">48-HOUR</div>
              <div className="text-[10px] font-black text-[#F2C100] uppercase tracking-[0.2em]">Draw Trust Badge</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

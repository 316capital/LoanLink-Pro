import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { DealAnalyzer } from "@/components/deal-analyzer";
import { motion } from "framer-motion";

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#001A54] uppercase tracking-tighter mb-4">
              Investment <span className="text-[#F2C100] italic">Calculators</span>
            </h1>
            <p className="text-slate-600 max-w-2xl font-medium">
              Institutional-grade tools to analyze your real estate investments. Get instant feedback on deal viability and capital requirements.
            </p>
          </motion.div>
          
          <DealAnalyzer />
        </div>
      </main>
      <Footer />
    </div>
  );
}

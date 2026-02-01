import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-[#001A54] uppercase tracking-tight mb-8">Terms & Conditions</h1>
            <div className="prose prose-slate max-w-none text-slate-600 space-y-6 font-medium">
              <p className="text-sm italic">Last Updated: February 1, 2026</p>
              
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">1. Business Purpose Loans Only</h2>
                <p className="bg-navy-50 p-6 border-l-4 border-gold-500 italic">
                  IMPORTANT: 316 Capital LLC only provides business-purpose loans intended for real estate investment. We do not offer consumer loans or residential mortgages for owner-occupied properties.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">2. No Commitment to Lend</h2>
                <p>
                  Use of our website, AI engine, or submission of an intake form does not constitute a commitment to lend. All financing is subject to full underwriting, property appraisal, and final approval by our capital partners.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">3. Accuracy of Information</h2>
                <p>
                  You agree to provide accurate and complete information in all dealings with 316 Capital. Providing false information may result in the immediate rejection of your application and potential legal action.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">4. Electronic Communications</h2>
                <p>
                  By using our platform, you consent to receive electronic communications from us, including automated status updates, term sheets, and draw confirmations.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">5. Limitation of Liability</h2>
                <p>
                  316 Capital LLC shall not be liable for any indirect, incidental, special, or consequential damages arising out of the use of our services or the inability to obtain financing for any specific project.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

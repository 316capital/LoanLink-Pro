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
              
              <p>
                Welcome to 316 Capital LLC (“316 Capital,” “we,” “us,” or “our”). By accessing our website (the “Site”) or utilizing our services, you agree to comply with and be bound by the following terms and conditions.
              </p>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">1. BUSINESS PURPOSE LOANS ONLY</h2>
                <div className="bg-navy-50 p-6 border-l-4 border-gold-500 italic">
                  <p className="font-bold mb-4 uppercase">CRITICAL DISCLOSURE:</p>
                  <p>All loans provided by 316 Capital LLC are intended solely for business, commercial, or investment purposes. * We do not provide consumer loans for personal, family, or household use.</p>
                  <p className="mt-4">We do not lend on owner-occupied primary residences.</p>
                  <p className="mt-4">By submitting an application, you certify that any funds received will be used exclusively for business or commercial investment purposes.</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">2. NO BINDING OFFER</h2>
                <p>
                  The information provided on this Site, including "Floor Rates" (e.g., 7.99% for Bridge, 5.75% for DSCR), does not constitute a commitment to lend. All loan approvals are subject to final underwriting, property valuation, and credit review by the 316 Intel team. A loan is only considered "committed" once a formal Commitment Letter has been signed by an authorized officer of 316 Capital LLC.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">3. INTELLECTUAL PROPERTY</h2>
                <p>
                  All content on this Site—including the 316 Capital logo, the "Direct Match Protocol," "316 Intel," and the "316 Strategic Vault"—is the exclusive property of Joshua Gutierrez and 316 Capital LLC. Unauthorized use, reproduction, or "scraping" of our data is strictly prohibited.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">4. TCPA & SMS CONSENT (GHL COMPLIANCE)</h2>
                <p>
                  By providing your phone number on our intake forms, you provide "Prior Express Written Consent" to be contacted by 316 Capital LLC and its agents (including our Director of Underwriting) via:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Automated SMS/text messages.</li>
                  <li>Artificial or prerecorded voice calls.</li>
                  <li>Email and direct mail.</li>
                </ul>
                <p className="font-bold mt-4">
                  Opt-Out: You may reply "STOP" to any text message at any time to be removed from our communication list. Message and data rates may apply.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">5. ACCURACY OF INFORMATION</h2>
                <p>
                  You represent and warrant that all information provided in your loan application—including bank statements, rent rolls, and experience history—is accurate and complete. 316 Capital LLC relies on this information for its $17M+ pipeline management; any misrepresentation may result in immediate denial or acceleration of an existing loan.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">6. LIMITATION OF LIABILITY</h2>
                <p>
                  316 Capital LLC shall not be liable for any damages arising out of your use of the Site or our inability to fund a specific project due to underwriting failure or market conditions. We are not responsible for the performance of third-party vendors (appraisers, title agents, etc.).
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">7. GOVERNING LAW</h2>
                <p>
                  These Terms shall be governed by the laws of the Commonwealth of Massachusetts, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Middlesex County, MA, or as otherwise designated by 316 Capital LLC.
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

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
            <h1 className="text-4xl font-bold text-[#001A54] uppercase tracking-tight mb-8">Privacy Policy</h1>
            <div className="prose prose-slate max-w-none text-slate-600 space-y-6 font-medium">
              <p className="text-sm italic">Effective Date: February 1, 2026</p>
              
              <p>
                316 Capital LLC (“the Company,” “we,” “us,” or “our”) is committed to protecting the privacy and security of the personal and financial information of our clients and website visitors. This Privacy Policy describes how we collect, use, and safeguard your information.
              </p>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">1. Information We Collect</h2>
                <p>
                  As a private lender, we collect non-public personal information (NPI) to provide specialized financing services. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Identification Data:</strong> Name, address, Social Security Number, and government-issued ID.</li>
                  <li><strong>Financial Data:</strong> Credit scores, bank statements, tax returns, debt schedules, and asset information.</li>
                  <li><strong>Project Data:</strong> Property addresses, rent rolls, and construction budgets.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, and usage data via cookies to improve the 316 Intel user experience.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">2. How We Use Your Information</h2>
                <p>
                  We use your data strictly for business purposes, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Processing loan applications and performing underwriting.</li>
                  <li>Verifying identity and preventing fraud.</li>
                  <li>Communicating loan terms and project updates.</li>
                  <li>Maintaining your account in the 316 Strategic Vault.</li>
                  <li>Complying with legal and regulatory obligations.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">3. Information Sharing and Disclosure</h2>
                <p>
                  We do not sell your personal information. We only share your data with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> Third-party partners (appraisers, title companies, and background check services) necessary to close your loan.</li>
                  <li><strong>Institutional Partners:</strong> Vetted high-liquidity funds within our network for direct-to-desk execution.</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect the rights and safety of 316 Capital LLC.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">4. Data Security and Encryption</h2>
                <p>
                  In accordance with Massachusetts 201 CMR 17.00, we maintain a comprehensive Written Information Security Program (WISP).
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Encryption:</strong> All sensitive data "at rest" and "in transit" is encrypted using industry-standard protocols.</li>
                  <li><strong>Access Control:</strong> Only authorized personnel (such as our Director of Underwriting) have access to your NPI.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">5. Your Rights and Choices</h2>
                <p>
                  Depending on your residency (e.g., California CCPA/CPRA), you may have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Request access to the personal data we hold about you.</li>
                  <li>Request the deletion of your personal data (subject to legal retention requirements).</li>
                  <li>Opt-out of certain data-sharing practices.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">6. Children’s Privacy</h2>
                <p>
                  Our services are directed to professional real estate developers and investors. We do not knowingly collect information from individuals under the age of 18.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">7. Contact Information</h2>
                <p>
                  For questions regarding this policy or to exercise your privacy rights, please contact our Compliance Desk at info@316cap.com.
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

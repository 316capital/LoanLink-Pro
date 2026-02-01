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
              <p className="text-sm italic">Last Updated: February 1, 2026</p>
              
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">1. Information We Collect</h2>
                <p>
                  At 316 Capital LLC, we collect information that you provide directly to us through our website, mobile application, and capital allocation intake forms. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact information (Name, Email, Phone Number, Corporate Address)</li>
                  <li>Business details related to real estate investment projects</li>
                  <li>Information required for institutional underwriting and AML/KYC compliance</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">2. How We Use Your Information</h2>
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process and evaluate capital allocation requests</li>
                  <li>Provide high-velocity underwriting and term sheet generation</li>
                  <li>Maintain and improve our AI-enabled capital allocation engine</li>
                  <li>Communicate regarding active loan draws and portfolio status</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">3. Information Sharing</h2>
                <p>
                  We share information within the 316 Network of institutional capital partners only as necessary to provide best-execution match for your deals. We do not sell your personal or business data to third-party marketing companies.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">4. Security</h2>
                <p>
                  We implement institutional-grade security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security of your information.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">5. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact our Compliance Desk at info@316cap.com.
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

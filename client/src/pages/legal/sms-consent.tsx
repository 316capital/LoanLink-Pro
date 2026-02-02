import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";

export default function SMSConsent() {
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
            <h1 className="text-4xl font-bold text-[#001A54] uppercase tracking-tight mb-8">SMS Consent & Disclosure</h1>
            
            <div className="prose prose-slate max-w-none text-slate-600 space-y-8 font-medium">
              <p className="text-lg leading-relaxed">
                At 316 Capital LLC, we value your privacy and transparency in our communication. This page outlines our practices regarding SMS (text messaging) to ensure full compliance with A2P 10DLC and TCPA regulations.
              </p>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">1. What Data We Collect</h2>
                <p>
                  We collect your mobile phone number when you voluntarily provide it through our contact forms, loan applications, or when you initialize correspondence with our team. 
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">2. Use Cases for SMS</h2>
                <p>
                  Your phone number is used for specific professional interactions, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Marketing Purposes:</strong> Sending you updates on institutional capital availability, new loan products, regional real estate market insights, and promotional announcements.</li>
                  <li><strong>Customer Service:</strong> Providing real-time updates on your loan application status, draw request processing, underwriting inquiries, and general project-related support.</li>
                  <li><strong>Institutional Announcements:</strong> Notifications regarding lending guideline changes, corporate updates, or time-sensitive capital allocation opportunities.</li>
                  <li><strong>Appointment Reminders:</strong> Text confirmations for scheduled consultations with our capital allocators.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">3. Age Restriction</h2>
                <p>
                  You must be at least 18 years of age to opt-in to 316 Capital LLC’s SMS services. By providing your consent, you represent and warrant that you are 18 years of age or older.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">4. Carrier Liability Disclaimer</h2>
                <p>
                  Please note that mobile carriers are not liable for delayed or undelivered messages. 316 Capital LLC is not responsible for any delays in the receipt of any SMS messages as delivery is subject to effective transmission from your network provider.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">5. Terms of Service for SMS</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Express Consent:</strong> By providing your number, you provide express written consent to receive recurring automated messages.</li>
                  <li><strong>Message Frequency:</strong> Message frequency varies based on your project activity and capital allocation needs.</li>
                  <li><strong>Rates:</strong> Message and data rates may apply depending on your mobile carrier.</li>
                  <li><strong>Condition of Service:</strong> Consent to receive SMS is not a condition of receiving a loan or any purchase from 316 Capital LLC.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">4. Opting Out</h2>
                <p>
                  You have full control over your communication preferences. To stop receiving SMS messages, simply reply <strong>STOP</strong> to any message we send. You will receive a final one-time confirmation message. To receive help, reply <strong>HELP</strong>.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">5. Data Privacy</h2>
                <p>
                  We do not share or sell your SMS opt-in data or phone numbers to third parties or affiliates for marketing or promotional purposes. Your information is kept strictly within our secure institutional environment.
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

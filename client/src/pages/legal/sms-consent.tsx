import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2 } from "lucide-react";

export default function SMSConsent() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Legal Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
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
                    <li><strong>Marketing Purposes:</strong> Sending you updates on institutional capital availability, new loan products, and regional real estate insights.</li>
                    <li><strong>Customer Service:</strong> Providing real-time updates on your loan application status and draw request processing.</li>
                    <li><strong>Institutional Announcements:</strong> Notifications regarding lending guideline changes or corporate updates.</li>
                    <li><strong>Appointment Reminders:</strong> Text confirmations for scheduled consultations.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">3. Terms of Service for SMS</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Express Consent:</strong> By providing your number and checking the box, you provide express written consent to receive recurring automated marketing and informational messages.</li>
                    <li><strong>Message Frequency:</strong> Message frequency varies based on project activity.</li>
                    <li><strong>Rates:</strong> Standard message and data rates may apply.</li>
                    <li><strong>Opt-Out:</strong> Reply STOP to cancel, HELP for help.</li>
                    <li><strong>Age:</strong> You must be 18+ years of age.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-bold text-[#001A54] uppercase tracking-wider">4. Carrier Liability Disclaimer</h2>
                  <p>
                    Mobile carriers are not liable for delayed or undelivered messages. 316 Capital LLC is not responsible for any delays in the receipt of any SMS messages.
                  </p>
                </section>
              </div>
            </motion.div>

            {/* Consent Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-[#001A54] p-8 md:p-10 sticky top-32 shadow-2xl border-l-4 border-[#F2C100]">
                <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-6 flex items-center">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-[#F2C100]" />
                  Active Opt-In Form
                </h3>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Mobile Phone Number</label>
                    <Input 
                      type="tel"
                      placeholder="+1 (555) 000-0000" 
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 rounded-none focus:border-[#F2C100] transition-colors h-12"
                    />
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div className="flex items-start space-x-3">
                      <div className="flex items-center h-5">
                        <input
                          id="sms-opt-in"
                          name="sms-opt-in"
                          type="checkbox"
                          className="h-4 w-4 rounded-none border-white/20 bg-white/5 text-[#F2C100] focus:ring-[#F2C100]"
                        />
                      </div>
                      <div className="text-[10px] leading-relaxed text-gray-400">
                        <label htmlFor="sms-opt-in" className="font-medium text-gray-300">
                          Confirm SMS Subscription
                        </label>
                        <p className="mt-1">
                          By checking this box, I provide my express written consent to receive recurring automated marketing and informational text (SMS) messages from 316 Capital LLC at the phone number provided. Message frequency varies. Message and data rates may apply. I understand that consent is not a condition of any loan. I can opt-out at any time by replying STOP. I also agree to the <a href="/terms" className="text-[#F2C100] underline">Terms of Service</a> and <a href="/privacy" className="text-[#F2C100] underline">Privacy Policy</a>.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-bold py-6 rounded-none uppercase tracking-[0.2em] transition-all group"
                  >
                    Submit Opt-In
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                  
                  <p className="text-center text-[9px] text-gray-500 uppercase tracking-widest">
                    Your data is never shared with third parties for marketing.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

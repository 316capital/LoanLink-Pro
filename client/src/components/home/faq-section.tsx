import { motion } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "How fast can you actually close?",
    a: "Our record is 4 business days. On average, most complex deals with complete documentation close in 7-10 days."
  },
  {
    q: "What is your maximum leverage?",
    a: "We offer up to 90% LTV (Loan to Value) and 90% LTC (Loan to Cost) for experienced developers with a proven track record in Tier 1 and Tier 2 markets."
  },
  {
    q: "Do you lend to first-time developers?",
    a: "We primarily partner with professional developers and real estate investors. However, if you have a strong GC and experienced team, we will review the deal."
  },
  {
    q: "How do 48-hour draws work?",
    a: "Once a site inspection is verified, funds are released via wire within 48 hours. Our tech-enabled portal streamlines the submission and verification process."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-4">Common Inquiries</h2>
          <p className="text-muted-foreground">Everything you need to know about the 316 protocol.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-bone-50 transition-colors"
              >
                <span className="font-bold text-navy-950">{faq.q}</span>
                <ChevronDown className={`h-5 w-5 text-gold-500 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [role, setRole] = useState<"Borrower" | "Broker">("Borrower");

  return (
    <section id="contact" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Check Eligibility <br/>
              <span className="text-gold-500">in 2 Minutes.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Skip the long forms. Provide the essentials and our underwriting team will review your deal within 24 hours.
            </p>

            <div className="space-y-6">
              {[
                { icon: ShieldCheck, title: "Protected Commissions", desc: "Full protection for our broker partners." },
                { icon: Zap, title: "7.90% Floor Rates", desc: "Institutional capital at competitive mid-market rates." },
                { icon: CheckCircle2, title: "90% Max Leverage", desc: "Aggressive LTC/LTV structures for professional developers." }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="h-6 w-6 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 mt-1">
                    <item.icon className="h-3 w-3 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider">{item.title}</h4>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 shadow-2xl">
            <div className="flex bg-gray-100 p-1 mb-8">
              <button 
                type="button"
                onClick={() => setRole("Borrower")}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-widest transition-all ${role === "Borrower" ? 'bg-navy-950 text-white shadow-lg' : 'text-gray-500 hover:text-navy-950'}`}
              >
                Borrower
              </button>
              <button 
                type="button"
                onClick={() => setRole("Broker")}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-widest transition-all ${role === "Broker" ? 'bg-navy-950 text-white shadow-lg' : 'text-gray-500 hover:text-navy-950'}`}
              >
                Broker
              </button>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Property Address" className="rounded-none border-gray-200" />
                <Input placeholder="Loan Amount" className="rounded-none border-gray-200" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Exit Strategy" className="rounded-none border-gray-200" />
                <Input placeholder="Phone Number" type="tel" className="rounded-none border-gray-200" />
              </div>
              <Input placeholder="Email Address" type="email" className="rounded-none border-gray-200" />
              
              <Button className="w-full bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold rounded-none py-7 text-sm uppercase tracking-widest mt-4">
                {role === "Borrower" ? "Submit Quick Quote" : "Join Approved Broker Network"}
              </Button>
              
              <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest mt-6">
                Institutional Private Credit · Secure Intake
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
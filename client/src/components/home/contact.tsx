import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#001A54]/5 blur-[120px] rounded-full -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#001A54]/5 blur-[100px] rounded-full -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-[#001A54] uppercase tracking-[0.3em] mb-4">Initialize Contact</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[#001A54] mb-8 tracking-tight">
                Connect with our <br />
                <span className="text-[#F2C100]">Capital Allocators</span>
              </h3>
              <p className="text-[#001A54]/70 text-lg mb-12 max-w-md leading-relaxed">
                Experience institutional-grade service with AI-enabled speed. Our team is standing by to structure your next allocation.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="h-12 w-12 rounded-none border border-[#001A54]/10 flex items-center justify-center bg-[#001A54]/5 group-hover:border-[#001A54]/50 transition-colors">
                    <Phone className="h-5 w-5 text-[#001A54]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Direct Line</p>
                    <a href="tel:+16175464817" className="text-xl font-bold text-[#001A54] hover:text-[#F2C100] transition-colors">+1 (617) 546-4817</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="h-12 w-12 rounded-none border border-[#001A54]/10 flex items-center justify-center bg-[#001A54]/5 group-hover:border-[#001A54]/50 transition-colors">
                    <Mail className="h-5 w-5 text-[#001A54]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Email Correspondence</p>
                    <a href="mailto:info@316cap.com" className="text-xl font-bold text-[#001A54] hover:text-[#F2C100] transition-colors">info@316cap.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="h-12 w-12 rounded-none border border-[#001A54]/10 flex items-center justify-center bg-[#001A54]/5 group-hover:border-[#001A54]/50 transition-colors">
                    <MapPin className="h-5 w-5 text-[#001A54]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Corporate Headquarters</p>
                    <p className="text-lg text-[#001A54] font-medium leading-snug">
                      867 Boylston Street, 5th Floor<br />
                      Boston, MA 02116
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#001A54] p-8 md:p-12 relative shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-1 h-12 bg-[#F2C100]" />
            <div className="absolute top-0 left-0 w-12 h-1 bg-[#F2C100]" />
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                  <Input 
                    placeholder="John Doe" 
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 rounded-none focus:border-[#F2C100] transition-colors h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                  <Input 
                    type="email"
                    placeholder="john@example.com" 
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 rounded-none focus:border-[#F2C100] transition-colors h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Inquiry Type</label>
                <select className="w-full bg-[#001A54] border border-white/10 text-white rounded-none h-12 px-3 focus:outline-none focus:border-[#F2C100] transition-colors appearance-none">
                  <option>New Capital Allocation</option>
                  <option>Existing Loan Draw</option>
                  <option>Partnership Inquiry</option>
                  <option>General Support</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Message</label>
                <Textarea 
                  placeholder="How can our capital infrastructure assist your project?" 
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 rounded-none focus:border-[#F2C100] transition-colors min-h-[150px] resize-none"
                />
              </div>

              <Button 
                className="w-full bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-bold py-6 rounded-none uppercase tracking-[0.2em] transition-all group"
                onClick={() => window.location.href = 'mailto:info@316cap.com'}
              >
                Initialize Correspondence
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-24 bg-bone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-2xl flex flex-col lg:flex-row overflow-hidden border border-gray-100">
          <div className="lg:w-1/3 bg-navy-950 p-12 text-white relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <ArrowRight size={200} className="-rotate-45" />
            </div>
            
            <h3 className="text-3xl font-bold mb-8 font-heading">Connect with Underwriting</h3>
            <p className="text-gray-400 mb-12 leading-relaxed">
              Skip the sales queue. Speak directly with a capital partner about your project structure and funding timeline.
            </p>
            
            <div className="space-y-6">
                <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="h-10 w-10 rounded bg-white/5 flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                        <Phone className="h-5 w-5 text-gold-500 group-hover:text-navy-950" />
                    </div>
                    <span className="text-sm font-medium">(888) 316-CAPITAL</span>
                </div>
                <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="h-10 w-10 rounded bg-white/5 flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                        <Mail className="h-5 w-5 text-gold-500 group-hover:text-navy-950" />
                    </div>
                    <span className="text-sm font-medium">deals@316capital.com</span>
                </div>
                <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="h-10 w-10 rounded bg-white/5 flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                        <MapPin className="h-5 w-5 text-gold-500 group-hover:text-navy-950" />
                    </div>
                    <span className="text-sm font-medium">600 Congress Ave, Austin, TX</span>
                </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-white/10">
                <p className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-4">Regional Desks</p>
                <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-400">
                    <span>Northeast</span>
                    <span>•</span>
                    <span>Southeast</span>
                    <span>•</span>
                    <span>Texas</span>
                    <span>•</span>
                    <span>West Coast</span>
                </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 p-12 bg-white">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                    <input type="text" className="w-full bg-bone-50 border-none p-4 focus:ring-2 focus:ring-gold-500 outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                    <input type="email" className="w-full bg-bone-50 border-none p-4 focus:ring-2 focus:ring-gold-500 outline-none" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Loan Amount Requested</label>
                    <select className="w-full bg-bone-50 border-none p-4 focus:ring-2 focus:ring-gold-500 outline-none appearance-none">
                        <option>$500k - $1M</option>
                        <option>$1M - $5M</option>
                        <option>$5M - $10M</option>
                        <option>$10M+</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Product Type</label>
                    <select className="w-full bg-bone-50 border-none p-4 focus:ring-2 focus:ring-gold-500 outline-none appearance-none">
                        <option>Ground-Up Construction</option>
                        <option>Fix & Flip</option>
                        <option>Bridge / Acquisition</option>
                        <option>DSCR Rental</option>
                    </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Project Overview</label>
                    <textarea className="w-full bg-bone-50 border-none p-4 focus:ring-2 focus:ring-gold-500 outline-none min-h-[120px]" placeholder="Briefly describe the asset, location, and your experience..."></textarea>
                </div>
                <div className="md:col-span-2">
                    <Button className="w-full bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold py-8 text-lg rounded-none shadow-lg transition-all hover:scale-[1.01]">
                        Submit for Initial Underwriting
                    </Button>
                    <p className="text-center text-xs text-muted-foreground mt-4">
                        Typical response time: 4-6 business hours.
                    </p>
                </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
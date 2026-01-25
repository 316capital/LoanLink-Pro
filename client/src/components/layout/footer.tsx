import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <a className="block mb-6">
                <img src={logo} alt="316 Capital Logo" className="h-12 w-auto" />
              </a>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Institutional-grade private credit for professional real estate investors and developers. Headquartered in Boston, MA.
            </p>
            <div className="text-xs text-gray-500 space-y-2">
              <p>Massachusetts Private Money Lender</p>
              <p>Hard Money for Rehabs · DSCR Loans</p>
              <p>Real Estate Investment Financing Nationwide</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Products</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-gold-500 transition-colors">Bridge Loans</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Fix & Flip</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Ground-Up Construction</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">DSCR Rental Loans</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Multifamily Bridge</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-gold-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Track Record</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm mb-6">
              <li>867 Boylston Street, 5th Floor</li>
              <li>Boston, MA 02116</li>
              <li className="pt-2">info@316cap.com</li>
              <li>+1 (617) 546-4817</li>
            </ul>
            <Button variant="outline" className="w-full border-[#F2C100]/50 text-[#F2C100] hover:bg-[#F2C100] hover:text-[#001A54] rounded-none text-xs font-bold transition-all">
              Request Terms
            </Button>
          </div>
        </div>
        
        <div className="mt-12 mb-8 text-center">
          <a href="#" className="text-[10px] font-bold text-gray-500 hover:text-white uppercase tracking-[0.3em] transition-colors">
            Download the 316 Mobile App — Monitor Allocations & Track Terms
          </a>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2026 316 Capital LLC. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Lending Licenses</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
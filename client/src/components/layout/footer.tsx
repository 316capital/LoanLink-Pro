import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import equalHousing from "@/assets/equal-housing.webp";

// Custom TikTok icon since Lucide doesn't have it
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="block mb-6 cursor-pointer">
                <img src={logoWhite} alt="316 Capital Logo" className="h-24 md:h-32 lg:h-40 w-auto object-contain" />
              </div>
            </Link>
            <p className="text-white text-sm leading-relaxed mb-6">
              Institutional-grade private credit for professional real estate investors and developers. Headquartered in Boston, MA.
            </p>
            
            <div className="text-xs text-white/80 space-y-2">
              <p>Massachusetts & New England Private Money Lender</p>
              <p>Institutional Hard Money Lender</p>
              <p>Specialist DSCR Lender Nationwide</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-tight">Products</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link href="/products/brrrr" className="hover:text-gold-500 transition-colors">BRRR Strategy</Link></li>
              <li><Link href="/products/fix-flip" className="hover:text-gold-500 transition-colors">Fix & Flip</Link></li>
              <li><Link href="/products/new-construction" className="hover:text-gold-500 transition-colors">Ground-Up Construction</Link></li>
              <li><Link href="/products/rental" className="hover:text-gold-500 transition-colors">DSCR Rental Loans</Link></li>
              <li><Link href="/#products" className="hover:text-gold-500 transition-colors">Multifamily Bridge</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-tight">Resources</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link href="/resources/calculators" className="hover:text-gold-500 transition-colors">Rate Estimators</Link></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Market Updates</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Partnerships</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-tight">Contact</h4>
            <ul className="space-y-3 text-white/70 text-sm mb-6">
              <li>867 Boylston Street, 5th Floor</li>
              <li>Boston, MA 02116</li>
              <li className="pt-2 text-white">info@316cap.com</li>
              <li className="text-white">+1 (617) 546-4817</li>
            </ul>
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-3 mb-8">
              <a href="#" className="p-2 bg-white/5 hover:bg-gold-500 hover:text-navy-950 transition-all rounded-none border border-white/10">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/316capital/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-gold-500 hover:text-navy-950 transition-all rounded-none border border-white/10">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-gold-500 hover:text-navy-950 transition-all rounded-none border border-white/10">
                <TikTokIcon className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/316-capital/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-gold-500 hover:text-navy-950 transition-all rounded-none border border-white/10">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>

            <Button 
              variant="outline" 
              className="w-full border-[#F2C100]/50 text-[#F2C100] hover:bg-[#F2C100] hover:text-[#001A54] rounded-none text-xs font-bold transition-all"
              onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
            >
              Request Terms
            </Button>
          </div>
        </div>
        
        <div className="mt-12 mb-8 text-center">
          <a href="#" className="text-[10px] font-bold text-white/60 hover:text-white uppercase tracking-[0.3em] transition-colors">
            Download the 316 Mobile App — Monitor Allocations & Track Terms
          </a>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/60">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <p>&copy; 2026 316 Capital LLC. All rights reserved.</p>
            <img src={equalHousing} alt="Equal Housing Lender" className="h-8 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/sms-consent" className="hover:text-white transition-colors">SMS Consent</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <a href="#" className="hover:text-white transition-colors">Lending Licenses</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5">
          <p className="text-[10px] text-white leading-relaxed text-left max-w-full italic uppercase tracking-wider">
            <span className="font-bold text-gold-500 mr-2">Important Legal Disclosure:</span>
            316 Capital is a provider of business-purpose loans intended for investment purposes only. We do not offer consumer loans, residential mortgages for owner-occupied properties, or any financing covered by the Truth in Lending Act (TILA). All loans are subject to credit approval, property valuation, and final underwriting guidelines. This is not a commitment to lend or a promise to fund your loan. Rates, terms, and conditions are subject to change without notice and may vary based on the specific attributes of the transaction.
          </p>
        </div>
      </div>
    </footer>
  );
}
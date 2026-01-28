import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem("hasVisited316");
    if (visited) {
      setHasVisited(true);
    } else {
      localStorage.setItem("hasVisited316", "true");
    }
  }, []);

  const authText = hasVisited ? "Client Portal" : "Client Portal";

  return (
    <nav className="fixed w-full z-50 bg-cream-50 border-b border-navy-950/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer -ml-4 md:-ml-8 lg:-ml-12">
            <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="flex items-center">
                <img src={logo} alt="316 Capital Logo" className="h-32 md:h-44 lg:h-56 w-auto brightness-100" style={{ filter: 'none' }} />
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-sm font-semibold text-[#001A54] hover:text-[#F2C100] transition-colors uppercase tracking-wider">About</Link>
            <a href="/#products" className="text-sm font-semibold text-[#001A54] hover:text-[#F2C100] transition-colors uppercase tracking-wider">Products</a>
            <a href="/#contact" className="text-sm font-semibold text-[#001A54] hover:text-[#F2C100] transition-colors uppercase tracking-wider">Contact</a>
            
            <div className="flex items-center space-x-2 ml-4">
              <Button 
                variant="ghost" 
                className="text-[#001A54] hover:text-[#F2C100] hover:bg-[#001A54]/5 text-sm font-semibold rounded-none px-4 uppercase tracking-wider h-10 border-none shadow-none"
                onClick={() => window.open('https://316cap.app.clientclub.net/', '_blank')}
                data-testid="button-auth"
              >
                {authText}
              </Button>
              <Button 
                className="bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-heading font-bold border-none rounded-none px-6 h-10 uppercase tracking-widest text-xs"
                onClick={() => window.open('https://www.316cap.com/widget/form/pdxTMenIM6Ei6b9ff1F6?notrack=true', '_blank')}
                data-testid="button-request-terms"
              >
                See your Rate
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#001A54] hover:text-[#F2C100] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cream-50 border-b border-navy-950/5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/#products" className="block px-3 py-2 text-base font-medium text-[#001A54] hover:bg-white/50">Products</a>
            <a href="/#portfolio" className="block px-3 py-2 text-base font-medium text-[#001A54] hover:bg-white/50">Portfolio</a>
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-[#001A54] hover:bg-white/50">About</Link>
            <a href="/#contact" className="block px-3 py-2 text-base font-medium text-[#001A54] hover:bg-white/50">Contact</a>
            <div className="mt-4 space-y-2 px-3">
              <Button 
                variant="ghost" 
                className="w-full justify-center text-[#001A54] hover:text-[#F2C100] font-bold border border-[#001A54]/10 rounded-none mb-2"
                onClick={() => window.open('https://316cap.app.clientclub.net/', '_blank')}
                data-testid="mobile-button-auth"
              >
                {authText}
              </Button>
              <Button 
                className="w-full justify-center bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-bold rounded-none"
                onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
                data-testid="mobile-button-request-terms"
              >
                See your Rate
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
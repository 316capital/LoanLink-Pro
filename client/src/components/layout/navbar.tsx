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

  const authText = hasVisited ? "Login" : "Sign Up";

  return (
    <nav className="fixed w-full z-50 bg-[#001A54]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <img src={logo} alt="316 Capital Logo" className="h-24 md:h-32 lg:h-40 w-auto" />
              </a>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider">Products</a>
            <a href="#portfolio" className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider">Portfolio</a>
            <a href="#about" className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider">About</a>
            <a href="#contact" className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider">Contact</a>
            
            <div className="flex items-center space-x-2 ml-4">
              <Button variant="ghost" className="text-white hover:text-[#F2C100] hover:bg-white/5 font-bold rounded-none px-4 uppercase tracking-widest text-xs h-10">
                {authText}
              </Button>
              <Button className="bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-bold border-none rounded-none px-6 h-10">
                Request Terms
              </Button>
            </div>
          </div>

            <div className="md:hidden flex items-center space-x-4">
              <Button variant="ghost" className="text-white text-xs font-bold uppercase tracking-widest px-2 h-10">
                {authText}
              </Button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#001A54] border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#products" className="block px-3 py-2 text-base font-medium text-white hover:bg-white/5">Products</a>
              <a href="#portfolio" className="block px-3 py-2 text-base font-medium text-white hover:bg-white/5">Portfolio</a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-white hover:bg-white/5">About</a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-white hover:bg-white/5">Contact</a>
              <div className="mt-4 space-y-2 px-3">
                <Button variant="ghost" className="w-full justify-center text-white hover:text-[#F2C100] font-bold border border-white/10 rounded-none mb-2">
                  {authText}
                </Button>
                <Button className="w-full justify-center bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-bold rounded-none">
                  Request Terms
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
  );
}
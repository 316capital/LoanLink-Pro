import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-navy-950/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <a className="text-2xl font-bold font-heading tracking-widest text-white">
                316 <span className="text-gold-500">CAPITAL</span>
              </a>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider">Products</a>
            <a href="#portfolio" className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider">Portfolio</a>
            <a href="#about" className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider">About</a>
            
            <div className="flex items-center space-x-6 ml-4">
              <div className="hidden lg:flex flex-col text-right">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Speak with an Expert</span>
                <a href="tel:+16175464817" className="text-sm font-bold text-white hover:text-gold-500 transition-colors">+1 (617) 546-4817</a>
              </div>
              <Button className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold border-none rounded-none px-6">
                Get My Rate
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
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
        <div className="md:hidden bg-navy-900 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#products" className="block px-3 py-2 text-base font-medium text-white hover:bg-white/5">Products</a>
            <a href="#portfolio" className="block px-3 py-2 text-base font-medium text-white hover:bg-white/5">Portfolio</a>
            <a href="#about" className="block px-3 py-2 text-base font-medium text-white hover:bg-white/5">About</a>
            <div className="mt-4 space-y-2 px-3">
              <Button className="w-full justify-center bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold">
                Submit Application
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const solutions = [
  {
    title: "BRRR Strategy",
    href: "/products/brrrr",
    description: "Buy, Rehab, Rent, Refinance. The ultimate wealth-building engine.",
  },
  {
    title: "Fix & Flip",
    href: "/products/fix-flip",
    description: "Short-term bridge financing for acquisition and renovation.",
  },
  {
    title: "New Construction",
    href: "/products/new-construction",
    description: "Ground-up capital for developers and home builders.",
  },
  {
    title: "Rental / DSCR",
    href: "/products/rental",
    description: "Long-term financing based on property cash flow.",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const visited = localStorage.getItem("hasVisited316");
    if (visited) {
      setHasVisited(true);
    } else {
      localStorage.setItem("hasVisited316", "true");
    }
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const authText = hasVisited ? "Client Portal" : "Client Portal";

  return (
    <nav className="fixed w-full z-50">
      {/* Top Utility Bar */}
      <div className="bg-[#001A54] py-1 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <a 
              href="tel:+16175464817" 
              className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors group"
            >
              <Phone className="w-2.5 h-2.5 text-[#F2C100] group-hover:scale-110 transition-transform" />
              <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.15em] uppercase">Phone: (617) 546-4817</span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-cream-50 border-b border-navy-950/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer -ml-4 md:-ml-6 lg:-ml-8">
              <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="flex items-center">
                  <img src={logo} alt="316 Capital Logo" className="h-24 md:h-32 lg:h-40 w-auto brightness-100" style={{ filter: 'none' }} />
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link href="/about" className="text-xs font-bold text-[#001A54] hover:text-[#F2C100] transition-colors uppercase tracking-widest flex items-center h-full">About</Link>
              <a href="/#testimonials" className="text-xs font-bold text-[#001A54] hover:text-[#F2C100] transition-colors uppercase tracking-widest flex items-center h-full">Testimonials</a>
              <NavigationMenu className="flex items-center">
                <NavigationMenuList className="flex items-center">
                  <NavigationMenuItem className="flex items-center">
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-xs font-bold text-[#001A54] hover:text-[#F2C100] transition-colors uppercase tracking-widest p-0 h-auto flex items-center shadow-none border-none">
                      Loan Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white border border-navy-950/10 shadow-xl">
                        {solutions.map((solution) => (
                          <li key={solution.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={solution.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-none p-3 leading-none no-underline outline-none transition-colors hover:bg-navy-50 hover:text-[#001A54] group"
                                )}
                              >
                                <div className="text-sm font-bold leading-none uppercase tracking-tight text-[#001A54] group-hover:text-gold-600 transition-colors">
                                  {solution.title}
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-slate-500 font-medium mt-1">
                                  {solution.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <a href="/#contact" className="text-xs font-bold text-[#001A54] hover:text-[#F2C100] transition-colors uppercase tracking-widest flex items-center h-full">Contact</a>
              
              <div className="flex items-center space-x-3 ml-2 h-full">
                <Button 
                  variant="ghost" 
                  className="text-[#001A54] hover:text-[#F2C100] hover:bg-[#001A54]/5 text-xs font-bold rounded-none px-3 uppercase tracking-widest h-9 border-none shadow-none flex items-center justify-center"
                  onClick={() => window.open('https://316cap.app.clientclub.net/', '_blank')}
                  data-testid="button-auth"
                >
                  {authText}
                </Button>
                <Button 
                  className="bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-bold border-none rounded-none px-4 h-9 uppercase tracking-widest text-[10px] flex items-center justify-center"
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cream-50 border-b border-navy-950/5 overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            <button
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              className="flex items-center justify-between w-full px-3 py-3 text-base font-bold text-[#001A54] hover:bg-white/50 transition-all uppercase tracking-wider"
            >
              <span>Loan Solutions</span>
              <ChevronDown 
                className={cn(
                  "h-4 w-4 text-gold-500 transition-transform duration-300",
                  isSolutionsOpen && "rotate-180"
                )} 
              />
            </button>
            
            {isSolutionsOpen && (
              <div className="bg-navy-950/5 py-2 space-y-1">
                {solutions.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href}
                    className="block px-8 py-3 text-sm font-bold text-[#001A54] hover:bg-gold-500 hover:text-white transition-all uppercase tracking-tight"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}

            <div className="h-px bg-navy-950/5 my-2" />
            <Link href="/about" className="block px-3 py-3 text-base font-bold text-[#001A54] hover:bg-white/50 uppercase tracking-wider">About</Link>
            <a href="/#testimonials" className="block px-3 py-3 text-base font-bold text-[#001A54] hover:bg-white/50 uppercase tracking-wider">Testimonials</a>
            <a href="/#contact" className="block px-3 py-3 text-base font-bold text-[#001A54] hover:bg-white/50 uppercase tracking-wider">Contact</a>
            
            <a 
              href="tel:+16175464817"
              className="flex items-center space-x-3 px-4 py-5 bg-navy-950 text-white mt-6 group transition-colors hover:bg-navy-900"
            >
              <Phone className="w-5 h-5 text-gold-500 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-gold-500/80 font-black">Call Our Capital Desk</span>
                <span className="text-lg font-bold tracking-tight">+1 (617) 546-4817</span>
              </div>
            </a>

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
                onClick={() => window.open('https://www.316cap.com/widget/form/pdxTMenIM6Ei6b9ff1F6?notrack=true', '_blank')}
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
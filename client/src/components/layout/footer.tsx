import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <a className="text-2xl font-bold font-heading tracking-widest block mb-6">
                3:16 <span className="text-gold-500">CAPITAL</span>
              </a>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Institutional-grade private credit for professional real estate investors and developers.
            </p>
            <div className="text-sm text-gray-500">
              <p>New York · Austin · Charlotte</p>
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
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>originators@316capital.com</li>
              <li>(888) 555-0123</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2026 3:16 Capital Management, LLC. All rights reserved.</p>
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
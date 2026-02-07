import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileTimedPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if already shown this session (shared key with exit-intent)
    const hasShown = sessionStorage.getItem("exitIntentShown");
    if (hasShown) {
      return;
    }

    // Only trigger on mobile/touch devices
    const isMobile = window.matchMedia("(max-width: 768px)").matches || 
                     'ontouchstart' in window ||
                     navigator.maxTouchPoints > 0;

    if (!isMobile) {
      return;
    }

    // Show popup after 15 seconds on mobile
    const timeout = setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem("exitIntentShown", "true");
    }, 15000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleApply = () => {
    window.open('https://www.316cap.com/widget/form/omD7osW3NRNr6rZ5lYxt?notrack=true', '_blank');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-[101] p-4"
          >
            <div className="bg-[#001A54] p-6 relative shadow-2xl border border-[#F2C100]/20 rounded-t-lg">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 text-white/50 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Gold Top Accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#F2C100]" />

              {/* Content */}
              <div className="text-center pt-2">
                <div className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#F2C100] to-[#D4A900] px-4 py-1.5 mb-4 shadow-[0_0_15px_rgba(242,193,0,0.3)]">
                  <Zap className="h-3 w-3 text-[#001A54] fill-[#001A54]" />
                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#001A54]">Vault Invitation</span>
                </div>

                <h3 className="text-2xl font-bold text-white uppercase tracking-tighter leading-[0.9] mb-3">
                  Join the <span className="text-[#F2C100] italic font-medium">316 Vault</span>
                </h3>

                <p className="text-gray-300 mb-6 text-xs leading-relaxed max-w-xs mx-auto font-light">
                  Get <span className="text-white font-bold">Exclusive Pricing</span>, 100% Financing, and priority access.
                </p>

                <div className="space-y-3">
                  <Button 
                    size="lg"
                    onClick={handleApply}
                    className="w-full bg-[#F2C100] hover:bg-white text-[#001A54] font-black py-6 rounded-none transition-all uppercase tracking-[0.15em] text-[10px] shadow-lg"
                  >
                    Get Vault Access
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <button
                    onClick={handleClose}
                    className="text-gray-500 hover:text-[#F2C100] text-[9px] uppercase tracking-[0.2em] transition-colors font-bold py-2"
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

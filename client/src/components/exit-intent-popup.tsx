import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Check if already shown this session
    const hasShown = sessionStorage.getItem("exitIntentShown");
    if (hasShown) {
      setHasTriggered(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse moves to top of viewport (leaving)
      if (e.clientY <= 5 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    // Delay adding listener to avoid immediate triggers
    const timeout = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 3000);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasTriggered]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleApply = () => {
    window.open('https://www.316cap.com/widget/survey/y0pr8ThGeKbm5MRY5GtM?notrack=true', '_blank');
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
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90%] max-w-lg"
          >
            <div className="bg-[#001A54] p-8 md:p-10 relative shadow-2xl border border-[#F2C100]/20">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Gold Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-12 bg-[#F2C100]" />
              <div className="absolute top-0 left-0 w-12 h-2 bg-[#F2C100]" />
              <div className="absolute bottom-0 right-0 w-2 h-12 bg-[#F2C100]" />
              <div className="absolute bottom-0 right-0 w-12 h-2 bg-[#F2C100]" />

              {/* Content */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#F2C100] to-[#D4A900] px-6 py-2 mb-8 shadow-[0_0_20px_rgba(242,193,0,0.3)]">
                  <Zap className="h-4 w-4 text-[#001A54] fill-[#001A54]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#001A54]">Vault Invitation</span>
                </div>

                <h3 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter leading-[0.9] mb-6">
                  Join the <br />
                  <span className="text-[#F2C100] italic font-medium">316 Vault</span>
                </h3>

                <p className="text-gray-300 mb-10 text-sm md:text-lg leading-relaxed max-w-sm mx-auto font-light border-l border-[#F2C100]/30 pl-6">
                  Get instant access to <span className="text-white font-bold">Exclusive Pricing</span>, 100% Financing, real-time Market Updates, and private Investor Events.
                </p>

                <div className="space-y-4">
                  <Button 
                    size="lg"
                    onClick={handleApply}
                    className="w-full bg-[#F2C100] hover:bg-white text-[#001A54] font-black py-8 rounded-none transition-all uppercase tracking-[0.2em] text-xs shadow-[0_20px_40px_rgba(242,193,0,0.2)] hover:-translate-y-1"
                  >
                    Get Vault Access
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                  
                  <button
                    onClick={handleClose}
                    className="text-gray-500 hover:text-[#F2C100] text-[10px] uppercase tracking-[0.3em] transition-colors font-bold"
                  >
                    I'll pass on exclusive pricing
                  </button>
                </div>

                <div className="flex items-center justify-center space-x-4 mt-10 pt-8 border-t border-white/5">
                  <div className="text-left">
                    <p className="text-[8px] text-gray-500 uppercase tracking-widest font-black">Member Status</p>
                    <p className="text-[10px] text-[#F2C100] uppercase font-bold">Pending Approval</p>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div className="text-left">
                    <p className="text-[8px] text-gray-500 uppercase tracking-widest font-black">Eligibility</p>
                    <p className="text-[10px] text-white uppercase font-bold">Fix & Flip / DSCR</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

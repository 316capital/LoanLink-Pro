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
                <div className="inline-flex items-center justify-center space-x-2 bg-[#F2C100] px-4 py-2 mb-6">
                  <Zap className="h-4 w-4 text-[#001A54]" />
                  <span className="text-xs font-black uppercase tracking-[0.15em] text-[#001A54]">Before You Go</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight leading-tight mb-4">
                  See If You Qualify For<br />
                  <span className="text-[#F2C100] italic">100% Financing</span>
                </h3>

                <p className="text-gray-300 mb-8 text-sm md:text-base leading-relaxed max-w-sm mx-auto">
                  Experienced flippers can access <span className="text-white font-semibold">zero money down</span> on acquisition and rehab. Takes 2 minutes to check.
                </p>

                <div className="space-y-3">
                  <Button 
                    size="lg"
                    onClick={handleApply}
                    className="w-full bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-bold py-6 rounded-none transition-all uppercase tracking-widest text-xs shadow-[0_0_30px_rgba(242,193,0,0.3)]"
                  >
                    Check My Eligibility
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <button
                    onClick={handleClose}
                    className="text-gray-500 hover:text-gray-300 text-xs uppercase tracking-widest transition-colors"
                  >
                    No thanks, I'll pass on 100% financing
                  </button>
                </div>

                <p className="text-[10px] text-gray-500 mt-6 uppercase tracking-widest">
                  No credit check required to see if you qualify
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

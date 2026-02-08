import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { ExitIntentPopup } from "@/components/exit-intent-popup";
import { MobileTimedPopup } from "@/components/mobile-timed-popup";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import PrivacyPolicy from "@/pages/legal/privacy";
import SMSConsent from "@/pages/legal/sms-consent";
import TermsConditions from "@/pages/legal/terms";
import RentalProduct from "@/pages/products/rental";
import FlipProduct from "@/pages/products/fix-flip";
import BrrrrProduct from "@/pages/products/brrrr";
import ConstructionProduct from "@/pages/products/new-construction";
import CalculatorsPage from "@/pages/resources/calculators";
import PlaybookPage from "@/pages/playbook";
import { useEffect } from "react";

// Handle SPA redirect from 404.html and bfcache issues
function useNavigationFixes() {
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    // Handle redirect from 404.html
    const redirectPath = sessionStorage.getItem('spa-redirect');
    if (redirectPath) {
      sessionStorage.removeItem('spa-redirect');
      setLocation(redirectPath);
    }
    
    // Fix for bfcache (back-forward cache) issues when returning from external sites
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload();
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, [setLocation]);
}

function Router() {
  useNavigationFixes();
  
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/sms-consent" component={SMSConsent} />
        <Route path="/terms" component={TermsConditions} />
        <Route path="/products/rental" component={RentalProduct} />
        <Route path="/products/fix-flip" component={FlipProduct} />
        <Route path="/products/brrrr" component={BrrrrProduct} />
        <Route path="/products/new-construction" component={ConstructionProduct} />
        <Route path="/resources/calculators" component={CalculatorsPage} />
        <Route path="/playbook" component={PlaybookPage} />
        <Route path="/resources/playbook" component={PlaybookPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <ExitIntentPopup />
        <MobileTimedPopup />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

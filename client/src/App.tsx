import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { ExitIntentPopup } from "@/components/exit-intent-popup";
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

function Router() {
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
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

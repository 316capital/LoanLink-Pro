import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, DollarSign, Lock, CheckCircle, AlertTriangle, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

interface AnalysisResult {
  maxLoan: number;
  cashToClose: number;
  rate: number;
  monthlyPayment: number;
  arvLtv: number;
  ltc: number;
  points: number;
  tier: string;
  qualifies: boolean;
  downgraded: boolean;
  downgradedFrom: number | null;
  requiresVault: boolean;
  disqualifyReason: string | null;
}

export function DealAnalyzer() {
  const [purchasePrice, setPurchasePrice] = useState<string>("");
  const [rehabBudget, setRehabBudget] = useState<string>("");
  const [arv, setArv] = useState<string>("");
  const [creditScore, setCreditScore] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
  const [desiredLtc, setDesiredLtc] = useState<number[]>([90]);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const formatCurrency = (value: string) => {
    const num = value.replace(/[^0-9]/g, "");
    if (!num) return "";
    return new Intl.NumberFormat("en-US").format(parseInt(num));
  };

  const parseCurrency = (value: string): number => {
    return parseInt(value.replace(/[^0-9]/g, "")) || 0;
  };

  const getTierInfo = (credit: string, exp: string, desiredLtcPct: number) => {
    const creditNum = parseInt(credit);
    const expNum = exp === "10+" ? 10 : exp === "5-9" ? 5 : exp === "3-4" ? 3 : exp === "1-2" ? 1 : 0;

    // Rate matrix - better experience = better rates
    // 10+ experience gets floor rates (7.99 base)
    // 5-9 experience gets mid rates (8.99 base)
    // 3-4 experience gets standard rates (9.99 base)
    // Lower experience = higher rates

    // Check for 100% - Vault only (requires 700+ credit, 3+ experience)
    if (desiredLtcPct === 100) {
      if (creditNum >= 700 && expNum >= 3) {
        const vaultRate = expNum >= 10 ? 9.99 : expNum >= 5 ? 10.49 : 10.99;
        return { maxLtc: 100, maxArvLtv: 70, rate: vaultRate, points: 2, tier: "Vault Elite", requiresVault: true };
      }
      return null;
    }

    // Tier 1: 730+ credit, 5+ experience
    if (creditNum >= 730 && expNum >= 5) {
      const baseRate = expNum >= 10 ? 7.99 : 8.99; // 10+ gets floor, 5-9 gets mid
      if (desiredLtcPct <= 90) {
        return { maxLtc: 90, maxArvLtv: 70, rate: baseRate, points: 1, tier: "Tier 1", requiresVault: false };
      }
      if (desiredLtcPct <= 95) {
        return { maxLtc: 95, maxArvLtv: 70, rate: baseRate + 0.5, points: 1.5, tier: "Tier 1+", requiresVault: false };
      }
    }

    // Tier 2: 700+ credit, 3-4 experience
    if (creditNum >= 700 && expNum >= 3) {
      const baseRate = expNum >= 10 ? 8.49 : expNum >= 5 ? 9.49 : 9.99; // Adjust by experience
      if (desiredLtcPct <= 90) {
        return { maxLtc: 90, maxArvLtv: 68, rate: baseRate, points: 1.5, tier: "Tier 2", requiresVault: false };
      }
      if (desiredLtcPct <= 95) {
        return { maxLtc: 95, maxArvLtv: 68, rate: baseRate + 0.5, points: 1.75, tier: "Tier 2+", requiresVault: false };
      }
    }

    // Tier 3: 680+ credit, 1-2 experience
    if (creditNum >= 680 && expNum >= 1) {
      const baseRate = expNum >= 10 ? 8.99 : expNum >= 5 ? 9.99 : expNum >= 3 ? 10.49 : 10.99;
      if (desiredLtcPct <= 85) {
        return { maxLtc: 85, maxArvLtv: 70, rate: baseRate, points: 2, tier: "Tier 3", requiresVault: false };
      }
    }

    // Tier 4: 660+ credit, any experience
    if (creditNum >= 660) {
      const baseRate = expNum >= 10 ? 9.49 : expNum >= 5 ? 10.49 : expNum >= 3 ? 10.99 : 11.49;
      if (desiredLtcPct <= 80) {
        return { maxLtc: 80, maxArvLtv: 70, rate: baseRate, points: 2, tier: "Tier 4", requiresVault: false };
      }
    }

    // Tier 5: 620+ credit
    if (creditNum >= 620) {
      const baseRate = expNum >= 10 ? 9.99 : expNum >= 5 ? 10.99 : expNum >= 3 ? 11.49 : 11.99;
      if (desiredLtcPct <= 75) {
        return { maxLtc: 75, maxArvLtv: 65, rate: baseRate, points: 2, tier: "Tier 5", requiresVault: false };
      }
    }

    return null;
  };

  const findBestTier = (credit: string, exp: string, desiredLtcPct: number) => {
    let tier = getTierInfo(credit, exp, desiredLtcPct);
    if (tier) return { ...tier, downgraded: false, downgradedFrom: null };

    const ltcOptions = [95, 90, 85, 80, 75];
    for (const ltc of ltcOptions) {
      if (ltc < desiredLtcPct) {
        tier = getTierInfo(credit, exp, ltc);
        if (tier) return { ...tier, downgraded: true, downgradedFrom: desiredLtcPct };
      }
    }

    return null;
  };

  const analyzeDeal = () => {
    const purchase = parseCurrency(purchasePrice);
    const rehab = parseCurrency(rehabBudget);
    const arvValue = parseCurrency(arv);
    const desiredLtcPct = desiredLtc[0];

    if (!purchase || !rehab || !arvValue || !creditScore || !experience) {
      return;
    }

    const totalCost = purchase + rehab;
    const tierResult = findBestTier(creditScore, experience, desiredLtcPct);

    if (!tierResult) {
      setResult({
        maxLoan: 0,
        cashToClose: 0,
        rate: 0,
        monthlyPayment: 0,
        arvLtv: 0,
        ltc: 0,
        points: 0,
        tier: "",
        qualifies: false,
        downgraded: false,
        downgradedFrom: null,
        requiresVault: false,
        disqualifyReason: "Based on your credit and experience, minimum requirements are: 620+ credit score and max 75% LTC."
      });
      setShowResult(true);
      return;
    }

    const purchaseLoan = purchase * (tierResult.maxLtc / 100);
    const rehabLoan = rehab;
    const maxLoanByLtc = purchaseLoan + rehabLoan;
    const maxLoanByArv = arvValue * (tierResult.maxArvLtv / 100);
    const maxLoan = Math.min(maxLoanByLtc, maxLoanByArv);
    
    if (maxLoan < 100000) {
      setResult({
        maxLoan: 0,
        cashToClose: 0,
        rate: 0,
        monthlyPayment: 0,
        arvLtv: 0,
        ltc: 0,
        points: 0,
        tier: "",
        qualifies: false,
        downgraded: false,
        downgradedFrom: null,
        requiresVault: false,
        disqualifyReason: "Minimum loan amount is $100,000. Your deal doesn't meet this threshold."
      });
      setShowResult(true);
      return;
    }

    const actualArvLtv = (maxLoan / arvValue) * 100;
    const actualLtc = (maxLoan / totalCost) * 100;
    const cashToClose = totalCost - maxLoan + (maxLoan * (tierResult.points / 100));
    const monthlyPayment = (maxLoan * (tierResult.rate / 100)) / 12;

    setResult({
      maxLoan,
      cashToClose,
      rate: tierResult.rate,
      monthlyPayment,
      arvLtv: actualArvLtv,
      ltc: actualLtc,
      points: tierResult.points,
      tier: tierResult.tier,
      qualifies: true,
      downgraded: tierResult.downgraded,
      downgradedFrom: tierResult.downgradedFrom,
      requiresVault: tierResult.requiresVault,
      disqualifyReason: null
    });
    setShowResult(true);
  };

  const resetCalculator = () => {
    setShowResult(false);
    setResult(null);
  };

  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border border-gray-100 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] overflow-hidden">
            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 md:p-12"
                >
                  <div className="flex items-center space-x-3 mb-10 pb-6 border-b border-gray-100">
                    <div className="h-12 w-12 bg-[#001A54] flex items-center justify-center">
                      <Calculator className="h-6 w-6 text-[#F2C100]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#001A54] uppercase tracking-tight">316 Fix & Flip Estimator</h3>
                      <p className="text-xs text-slate-500">All fields required</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        Purchase Price
                      </Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 z-10" />
                        <Input
                          type="text"
                          placeholder="350,000"
                          value={purchasePrice}
                          onChange={(e) => setPurchasePrice(formatCurrency(e.target.value))}
                          className="pl-10 h-14 rounded-none border-slate-200 focus:border-[#001A54] focus:ring-[#001A54] text-lg font-bold bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        Rehab Budget
                      </Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 z-10" />
                        <Input
                          type="text"
                          placeholder="75,000"
                          value={rehabBudget}
                          onChange={(e) => setRehabBudget(formatCurrency(e.target.value))}
                          className="pl-10 h-14 rounded-none border-slate-200 focus:border-[#001A54] focus:ring-[#001A54] text-lg font-bold bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        After Repair Value (ARV)
                      </Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 z-10" />
                        <Input
                          type="text"
                          placeholder="550,000"
                          value={arv}
                          onChange={(e) => setArv(formatCurrency(e.target.value))}
                          className="pl-10 h-14 rounded-none border-slate-200 focus:border-[#001A54] focus:ring-[#001A54] text-lg font-bold bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        Credit Score
                      </Label>
                      <Select value={creditScore} onValueChange={setCreditScore}>
                        <SelectTrigger className="h-14 rounded-none border-slate-200 text-lg font-bold bg-white focus:ring-[#001A54] focus:border-[#001A54]">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-slate-200 shadow-lg">
                          <SelectItem value="750" className="text-base font-medium">750+</SelectItem>
                          <SelectItem value="730" className="text-base font-medium">730 - 749</SelectItem>
                          <SelectItem value="700" className="text-base font-medium">700 - 729</SelectItem>
                          <SelectItem value="680" className="text-base font-medium">680 - 699</SelectItem>
                          <SelectItem value="660" className="text-base font-medium">660 - 679</SelectItem>
                          <SelectItem value="640" className="text-base font-medium">640 - 659</SelectItem>
                          <SelectItem value="620" className="text-base font-medium">620 - 639</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        Flips Completed (Last 36 Mo)
                      </Label>
                      <Select value={experience} onValueChange={setExperience}>
                        <SelectTrigger className="h-14 rounded-none border-slate-200 text-lg font-bold bg-white focus:ring-[#001A54] focus:border-[#001A54]">
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-slate-200 shadow-lg">
                          <SelectItem value="10+" className="text-base font-medium">10+ Projects</SelectItem>
                          <SelectItem value="5-9" className="text-base font-medium">5-9 Projects</SelectItem>
                          <SelectItem value="3-4" className="text-base font-medium">3-4 Projects</SelectItem>
                          <SelectItem value="1-2" className="text-base font-medium">1-2 Projects</SelectItem>
                          <SelectItem value="0" className="text-base font-medium">First-Time Flipper</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                          Desired Leverage (LTC)
                        </Label>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-[#001A54]">{desiredLtc[0]}%</span>
                          {desiredLtc[0] === 100 && (
                            <Lock className="h-4 w-4 text-[#F2C100]" />
                          )}
                        </div>
                      </div>
                      <Slider
                        value={desiredLtc}
                        onValueChange={setDesiredLtc}
                        min={75}
                        max={100}
                        step={5}
                        className="py-4"
                      />
                      <div className="flex justify-between text-[9px] text-slate-400 uppercase tracking-widest">
                        <span>75%</span>
                        <span>85%</span>
                        <span>95%</span>
                        <span className="text-[#F2C100] font-bold">100% Vault</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <Button
                      onClick={analyzeDeal}
                      disabled={!purchasePrice || !rehabBudget || !arv || !creditScore || !experience}
                      className="w-full bg-[#F2C100] hover:bg-white text-[#001A54] font-black py-8 rounded-none transition-all uppercase tracking-[0.2em] text-xs shadow-[0_20px_40px_rgba(242,193,0,0.15)] hover:shadow-[0_25px_50px_rgba(242,193,0,0.25)] hover:-translate-y-1 disabled:opacity-50"
                    >
                      <Calculator className="mr-3 h-5 w-5" />
                      Analyze My Deal
                    </Button>
                  </div>

                  <p className="text-center text-[9px] text-slate-400 mt-6 uppercase tracking-widest">
                    Estimates only • Actual terms subject to underwriting
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {result?.qualifies ? (
                    <>
                      <div className="bg-[#001A54] p-8 md:p-12 text-white">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="h-8 w-8 text-[#F2C100]" />
                            <div>
                              <h3 className="font-bold uppercase tracking-tight text-xl">You Qualify!</h3>
                              <p className="text-[10px] text-[#F2C100] uppercase tracking-widest font-bold">
                                {result.tier} {result.requiresVault && "• Vault Member"}
                              </p>
                            </div>
                          </div>
                          {result.requiresVault && (
                            <div className="bg-[#F2C100] px-4 py-2">
                              <Zap className="h-5 w-5 text-[#001A54]" />
                            </div>
                          )}
                        </div>

                        {result.downgraded && (
                          <div className="bg-white/10 border border-white/20 p-4 mb-6">
                            <p className="text-sm">
                              <span className="text-[#F2C100] font-bold">Note:</span> You requested {result.downgradedFrom}% LTC, but based on your profile you qualify for {Math.round(result.ltc)}% LTC. Below are your best available terms.
                            </p>
                          </div>
                        )}

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                          <div>
                            <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-1">Max Loan</p>
                            <p className="text-3xl font-bold text-white">${(result.maxLoan / 1000).toFixed(0)}K</p>
                          </div>
                          <div>
                            <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-1">Est. Rate</p>
                            <p className="text-3xl font-bold text-[#F2C100]">{result.rate.toFixed(2)}%</p>
                          </div>
                          <div>
                            <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-1">Cash to Close</p>
                            <p className="text-3xl font-bold text-white">${(result.cashToClose / 1000).toFixed(0)}K</p>
                          </div>
                          <div>
                            <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-1">Monthly (I/O)</p>
                            <p className="text-3xl font-bold text-white">${result.monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-8 md:p-12 bg-white">
                        <h4 className="font-bold text-[#001A54] uppercase tracking-widest text-xs mb-6">Deal Breakdown</h4>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                          <div className="p-4 bg-slate-50 border-l-4 border-[#001A54]">
                            <p className="text-[9px] text-slate-500 uppercase tracking-widest mb-1">ARV LTV</p>
                            <div className="flex items-center space-x-2">
                              <p className="text-xl font-bold text-[#001A54]">{result.arvLtv.toFixed(1)}%</p>
                              {result.arvLtv <= 70 ? (
                                <CheckCircle className="h-4 w-4 text-green-500" />
                              ) : (
                                <AlertTriangle className="h-4 w-4 text-amber-500" />
                              )}
                            </div>
                          </div>
                          <div className="p-4 bg-slate-50 border-l-4 border-[#001A54]">
                            <p className="text-[9px] text-slate-500 uppercase tracking-widest mb-1">LTC</p>
                            <p className="text-xl font-bold text-[#001A54]">{result.ltc.toFixed(1)}%</p>
                          </div>
                          <div className="p-4 bg-slate-50 border-l-4 border-[#F2C100]">
                            <p className="text-[9px] text-slate-500 uppercase tracking-widest mb-1">Points</p>
                            <p className="text-xl font-bold text-[#001A54]">{result.points}%</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <Button
                            onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
                            className="w-full bg-[#F2C100] hover:bg-white text-[#001A54] font-black py-8 rounded-none transition-all uppercase tracking-[0.2em] text-xs shadow-[0_20px_40px_rgba(242,193,0,0.15)] hover:shadow-[0_25px_50px_rgba(242,193,0,0.25)] hover:-translate-y-1"
                          >
                            Get Your Official Term Sheet
                            <ArrowRight className="ml-3 h-5 w-5" />
                          </Button>
                          
                          <Button
                            onClick={resetCalculator}
                            variant="outline"
                            className="w-full border-slate-200 text-slate-500 rounded-none py-6 uppercase tracking-widest text-xs bg-white hover:bg-slate-50"
                          >
                            Analyze Another Deal
                          </Button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="p-8 md:p-12 bg-white">
                      <div className="text-center mb-10">
                        <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <AlertTriangle className="h-8 w-8 text-amber-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#001A54] mb-4">Let's Find a Better Fit</h3>
                        <p className="text-slate-600 max-w-md mx-auto">
                          {result?.disqualifyReason}
                        </p>
                      </div>

                      <div className="bg-[#001A54] p-8 text-white text-center mb-8">
                        <p className="text-[#F2C100] font-bold uppercase tracking-widest text-xs mb-4">Have Questions?</p>
                        <p className="text-2xl font-bold mb-2">Talk to Our Team</p>
                        <p className="text-gray-400 text-sm mb-6">We specialize in creative deal structures.</p>
                        <Button
                          onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
                          className="bg-[#F2C100] hover:bg-white text-[#001A54] font-bold px-8 py-6 rounded-none uppercase tracking-widest text-xs"
                        >
                          Schedule a Call
                        </Button>
                      </div>

                      <Button
                        onClick={resetCalculator}
                        variant="outline"
                        className="w-full border-slate-200 text-slate-500 rounded-none py-6 uppercase tracking-widest text-xs bg-white hover:bg-slate-50"
                      >
                        Try Different Numbers
                      </Button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

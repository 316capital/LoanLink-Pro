import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, DollarSign, Home, TrendingUp, RefreshCw, CheckCircle, ArrowRight, Repeat, PiggyBank, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

interface BRRRRResult {
  // Purchase phase
  totalAcquisitionCost: number;
  initialLoanAmount: number;
  cashToClose: number;
  
  // Rehab phase
  totalProjectCost: number;
  
  // Rent phase
  monthlyRent: number;
  monthlyExpenses: number;
  monthlyCashFlow: number;
  annualNOI: number;
  
  // Refinance phase
  refinanceValue: number;
  refinanceLoanAmount: number;
  cashOutAmount: number;
  cashLeftInDeal: number;
  newMonthlyPayment: number;
  cashFlowAfterRefi: number;
  
  // Returns
  cashOnCash: number;
  equityCaptured: number;
  infiniteReturn: boolean;
}

export function BRRRRCalculator() {
  const [purchasePrice, setPurchasePrice] = useState<string>("");
  const [rehabBudget, setRehabBudget] = useState<string>("");
  const [arv, setArv] = useState<string>("");
  const [monthlyRent, setMonthlyRent] = useState<string>("");
  const [closingCosts, setClosingCosts] = useState<string>("5000");
  const [holdingMonths, setHoldingMonths] = useState<string>("4");
  const [holdingCostPerMonth, setHoldingCostPerMonth] = useState<string>("1500");
  const [refiLtv, setRefiLtv] = useState<string>("75");
  const [refiRate, setRefiRate] = useState<string>("7.5");
  const [expenseRatio, setExpenseRatio] = useState<string>("40");
  
  const [result, setResult] = useState<BRRRRResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const formatCurrency = (value: string) => {
    const num = value.replace(/[^0-9]/g, "");
    if (!num) return "";
    return new Intl.NumberFormat("en-US").format(parseInt(num));
  };

  const parseCurrency = (value: string): number => {
    return parseInt(value.replace(/[^0-9]/g, "")) || 0;
  };

  const parseNumber = (value: string): number => {
    return parseFloat(value) || 0;
  };

  const calculateBRRRR = () => {
    const purchase = parseCurrency(purchasePrice);
    const rehab = parseCurrency(rehabBudget);
    const arvValue = parseCurrency(arv);
    const rent = parseCurrency(monthlyRent);
    const closing = parseCurrency(closingCosts);
    const months = parseNumber(holdingMonths);
    const holdingCost = parseCurrency(holdingCostPerMonth);
    const refiLtvPct = parseNumber(refiLtv) / 100;
    const refiRatePct = parseNumber(refiRate) / 100;
    const expensePct = parseNumber(expenseRatio) / 100;

    if (!purchase || !rehab || !arvValue || !rent) return;

    // Phase 1: Buy - assume 90% LTC bridge loan at 10%
    const bridgeLtc = 0.90;
    const bridgeRate = 0.10;
    const initialLoanAmount = (purchase + rehab) * bridgeLtc;
    const totalHoldingCosts = holdingCost * months;
    const totalAcquisitionCost = purchase + rehab + closing + totalHoldingCosts;
    const cashToClose = totalAcquisitionCost - initialLoanAmount;

    // Phase 2: Rehab
    const totalProjectCost = totalAcquisitionCost;

    // Phase 3: Rent
    const monthlyExpenses = rent * expensePct;
    const monthlyCashFlow = rent - monthlyExpenses;
    const annualNOI = monthlyCashFlow * 12;

    // Phase 4: Refinance (DSCR loan)
    const refinanceValue = arvValue;
    const refinanceLoanAmount = arvValue * refiLtvPct;
    const cashOutAmount = refinanceLoanAmount - initialLoanAmount - (initialLoanAmount * 0.02); // minus payoff and refi costs
    const cashLeftInDeal = Math.max(0, cashToClose - cashOutAmount);
    
    // New DSCR loan payment (30-year amortization)
    const monthlyRate = refiRatePct / 12;
    const numPayments = 360;
    const newMonthlyPayment = refinanceLoanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    const cashFlowAfterRefi = rent - monthlyExpenses - newMonthlyPayment;

    // Returns
    const equityCaptured = arvValue - refinanceLoanAmount;
    const annualCashFlow = cashFlowAfterRefi * 12;
    const cashOnCash = cashLeftInDeal > 0 ? (annualCashFlow / cashLeftInDeal) * 100 : 0;
    const infiniteReturn = cashLeftInDeal <= 0 && cashFlowAfterRefi > 0;

    setResult({
      totalAcquisitionCost,
      initialLoanAmount,
      cashToClose,
      totalProjectCost,
      monthlyRent: rent,
      monthlyExpenses,
      monthlyCashFlow,
      annualNOI,
      refinanceValue,
      refinanceLoanAmount,
      cashOutAmount: Math.max(0, cashOutAmount),
      cashLeftInDeal,
      newMonthlyPayment,
      cashFlowAfterRefi,
      cashOnCash,
      equityCaptured,
      infiniteReturn
    });
    setShowResult(true);
  };

  const resetCalculator = () => {
    setShowResult(false);
    setResult(null);
  };

  return (
    <div className="bg-white border border-gray-100 shadow-2xl overflow-hidden">
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
                <Repeat className="h-6 w-6 text-[#F2C100]" />
              </div>
              <div>
                <h3 className="font-bold text-[#001A54] uppercase tracking-tight">BRRRR Calculator</h3>
                <p className="text-xs text-slate-500">Buy • Rehab • Rent • Refinance • Repeat</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Purchase Price */}
              <div className="space-y-2">
                <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Purchase Price
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 z-10" />
                  <Input
                    type="text"
                    placeholder="250,000"
                    value={purchasePrice}
                    onChange={(e) => setPurchasePrice(formatCurrency(e.target.value))}
                    className="pl-10 h-14 rounded-none border-slate-200 focus:border-[#001A54] focus:ring-[#001A54] text-lg font-bold bg-white"
                  />
                </div>
              </div>

              {/* Rehab Budget */}
              <div className="space-y-2">
                <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Rehab Budget
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 z-10" />
                  <Input
                    type="text"
                    placeholder="50,000"
                    value={rehabBudget}
                    onChange={(e) => setRehabBudget(formatCurrency(e.target.value))}
                    className="pl-10 h-14 rounded-none border-slate-200 focus:border-[#001A54] focus:ring-[#001A54] text-lg font-bold bg-white"
                  />
                </div>
              </div>

              {/* ARV */}
              <div className="space-y-2">
                <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  After Repair Value (ARV)
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 z-10" />
                  <Input
                    type="text"
                    placeholder="400,000"
                    value={arv}
                    onChange={(e) => setArv(formatCurrency(e.target.value))}
                    className="pl-10 h-14 rounded-none border-slate-200 focus:border-[#001A54] focus:ring-[#001A54] text-lg font-bold bg-white"
                  />
                </div>
              </div>

              {/* Monthly Rent */}
              <div className="space-y-2">
                <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Monthly Rent (After Rehab)
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 z-10" />
                  <Input
                    type="text"
                    placeholder="3,200"
                    value={monthlyRent}
                    onChange={(e) => setMonthlyRent(formatCurrency(e.target.value))}
                    className="pl-10 h-14 rounded-none border-slate-200 focus:border-[#001A54] focus:ring-[#001A54] text-lg font-bold bg-white"
                  />
                </div>
              </div>

              {/* Closing Costs */}
              <div className="space-y-2">
                <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Closing Costs
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 z-10" />
                  <Input
                    type="text"
                    placeholder="5,000"
                    value={closingCosts}
                    onChange={(e) => setClosingCosts(formatCurrency(e.target.value))}
                    className="pl-10 h-14 rounded-none border-slate-200 focus:border-[#001A54] focus:ring-[#001A54] text-lg font-bold bg-white"
                  />
                </div>
              </div>

              {/* Holding Period */}
              <div className="space-y-2">
                <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Rehab Period (Months)
                </Label>
                <Input
                  type="text"
                  placeholder="4"
                  value={holdingMonths}
                  onChange={(e) => setHoldingMonths(e.target.value.replace(/[^0-9]/g, ""))}
                  className="h-14 rounded-none border-slate-200 focus:border-[#001A54] focus:ring-[#001A54] text-lg font-bold bg-white"
                />
              </div>

              {/* Holding Cost */}
              <div className="space-y-2">
                <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Monthly Holding Cost
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 z-10" />
                  <Input
                    type="text"
                    placeholder="1,500"
                    value={holdingCostPerMonth}
                    onChange={(e) => setHoldingCostPerMonth(formatCurrency(e.target.value))}
                    className="pl-10 h-14 rounded-none border-slate-200 focus:border-[#001A54] focus:ring-[#001A54] text-lg font-bold bg-white"
                  />
                </div>
              </div>

              {/* Expense Ratio */}
              <div className="space-y-2">
                <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Operating Expense Ratio (%)
                </Label>
                <div className="relative">
                  <Percent className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 z-10" />
                  <Input
                    type="text"
                    placeholder="40"
                    value={expenseRatio}
                    onChange={(e) => setExpenseRatio(e.target.value.replace(/[^0-9.]/g, ""))}
                    className="pl-10 h-14 rounded-none border-slate-200 focus:border-[#001A54] focus:ring-[#001A54] text-lg font-bold bg-white"
                  />
                </div>
              </div>

              {/* Refi LTV */}
              <div className="space-y-2">
                <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Refinance LTV (%)
                </Label>
                <div className="relative">
                  <Percent className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 z-10" />
                  <Input
                    type="text"
                    placeholder="75"
                    value={refiLtv}
                    onChange={(e) => setRefiLtv(e.target.value.replace(/[^0-9.]/g, ""))}
                    className="pl-10 h-14 rounded-none border-slate-200 focus:border-[#001A54] focus:ring-[#001A54] text-lg font-bold bg-white"
                  />
                </div>
              </div>

              {/* Refi Rate */}
              <div className="space-y-2">
                <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  DSCR Loan Rate (%)
                </Label>
                <div className="relative">
                  <Percent className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 z-10" />
                  <Input
                    type="text"
                    placeholder="7.5"
                    value={refiRate}
                    onChange={(e) => setRefiRate(e.target.value.replace(/[^0-9.]/g, ""))}
                    className="pl-10 h-14 rounded-none border-slate-200 focus:border-[#001A54] focus:ring-[#001A54] text-lg font-bold bg-white"
                  />
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Button
                onClick={calculateBRRRR}
                disabled={!purchasePrice || !rehabBudget || !arv || !monthlyRent}
                className="w-full bg-[#001A54] hover:bg-[#001A54]/90 text-white font-bold py-8 rounded-none uppercase tracking-widest text-sm disabled:opacity-50"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calculate BRRRR Returns
              </Button>
            </div>

            <p className="text-center text-[9px] text-slate-400 mt-6 uppercase tracking-widest">
              Estimates only • Assumes 90% LTC bridge loan for initial acquisition
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Header with key metrics */}
            <div className="bg-[#001A54] p-8 md:p-12 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <CheckCircle className="h-8 w-8 text-[#F2C100]" />
                <div>
                  <h3 className="font-bold uppercase tracking-tight text-xl">BRRRR Analysis Complete</h3>
                  <p className="text-[10px] text-[#F2C100] uppercase tracking-widest font-bold">
                    {result?.infiniteReturn ? "♾️ Infinite Return Potential" : `${result?.cashOnCash.toFixed(1)}% Cash-on-Cash`}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-1">Cash to Close</p>
                  <p className="text-3xl font-bold text-white">${((result?.cashToClose || 0) / 1000).toFixed(0)}K</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-1">Cash Out at Refi</p>
                  <p className="text-3xl font-bold text-[#F2C100]">${((result?.cashOutAmount || 0) / 1000).toFixed(0)}K</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-1">Cash Left in Deal</p>
                  <p className="text-3xl font-bold text-white">
                    {(result?.cashLeftInDeal || 0) <= 0 ? "$0" : `$${((result?.cashLeftInDeal || 0) / 1000).toFixed(0)}K`}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-1">Monthly Cash Flow</p>
                  <p className={`text-3xl font-bold ${(result?.cashFlowAfterRefi || 0) >= 0 ? 'text-[#F2C100]' : 'text-red-400'}`}>
                    ${(result?.cashFlowAfterRefi || 0).toFixed(0)}
                  </p>
                </div>
              </div>
            </div>

            {/* BRRRR Phases Breakdown */}
            <div className="p-8 md:p-12 bg-white">
              <h4 className="font-bold text-[#001A54] uppercase tracking-widest text-xs mb-6">BRRRR Breakdown</h4>
              
              {/* Phase Cards */}
              <div className="space-y-6 mb-10">
                {/* Buy Phase */}
                <div className="border border-slate-100 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-8 w-8 bg-[#001A54] flex items-center justify-center text-[#F2C100] font-bold text-sm">B</div>
                    <h5 className="font-bold text-[#001A54] uppercase tracking-tight">Buy</h5>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-slate-500 text-xs">Total Project Cost</p>
                      <p className="font-bold text-[#001A54]">${(result?.totalProjectCost || 0).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">Bridge Loan (90% LTC)</p>
                      <p className="font-bold text-[#001A54]">${(result?.initialLoanAmount || 0).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">Your Cash In</p>
                      <p className="font-bold text-[#F2C100]">${(result?.cashToClose || 0).toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                {/* Rehab Phase */}
                <div className="border border-slate-100 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-8 w-8 bg-[#001A54] flex items-center justify-center text-[#F2C100] font-bold text-sm">R</div>
                    <h5 className="font-bold text-[#001A54] uppercase tracking-tight">Rehab</h5>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-slate-500 text-xs">Rehab Budget</p>
                      <p className="font-bold text-[#001A54]">${parseCurrency(rehabBudget).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">Hold Period</p>
                      <p className="font-bold text-[#001A54]">{holdingMonths} months</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">After Repair Value</p>
                      <p className="font-bold text-[#F2C100]">${parseCurrency(arv).toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                {/* Rent Phase */}
                <div className="border border-slate-100 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-8 w-8 bg-[#001A54] flex items-center justify-center text-[#F2C100] font-bold text-sm">R</div>
                    <h5 className="font-bold text-[#001A54] uppercase tracking-tight">Rent</h5>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-slate-500 text-xs">Monthly Rent</p>
                      <p className="font-bold text-[#001A54]">${(result?.monthlyRent || 0).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">Monthly Expenses ({expenseRatio}%)</p>
                      <p className="font-bold text-[#001A54]">${(result?.monthlyExpenses || 0).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">Annual NOI</p>
                      <p className="font-bold text-[#F2C100]">${(result?.annualNOI || 0).toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                {/* Refinance Phase */}
                <div className="border border-slate-100 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-8 w-8 bg-[#001A54] flex items-center justify-center text-[#F2C100] font-bold text-sm">R</div>
                    <h5 className="font-bold text-[#001A54] uppercase tracking-tight">Refinance</h5>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-slate-500 text-xs">New Loan ({refiLtv}% LTV)</p>
                      <p className="font-bold text-[#001A54]">${(result?.refinanceLoanAmount || 0).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">DSCR Payment ({refiRate}%)</p>
                      <p className="font-bold text-[#001A54]">${(result?.newMonthlyPayment || 0).toFixed(0)}/mo</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">Cash Back to You</p>
                      <p className="font-bold text-[#F2C100]">${(result?.cashOutAmount || 0).toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                {/* Repeat Phase */}
                <div className="border-2 border-[#F2C100] bg-[#F2C100]/5 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-8 w-8 bg-[#F2C100] flex items-center justify-center text-[#001A54] font-bold text-sm">R</div>
                    <h5 className="font-bold text-[#001A54] uppercase tracking-tight">Repeat</h5>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-slate-500 text-xs">Equity Captured</p>
                      <p className="font-bold text-[#001A54]">${(result?.equityCaptured || 0).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">Cash-on-Cash Return</p>
                      <p className="font-bold text-[#001A54]">
                        {result?.infiniteReturn ? "∞" : `${(result?.cashOnCash || 0).toFixed(1)}%`}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">Monthly Cash Flow</p>
                      <p className={`font-bold ${(result?.cashFlowAfterRefi || 0) >= 0 ? 'text-[#F2C100]' : 'text-red-500'}`}>
                        ${(result?.cashFlowAfterRefi || 0).toFixed(0)}/mo
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {result?.infiniteReturn && (
                <div className="bg-green-50 border border-green-200 p-6 mb-10 text-center">
                  <p className="text-green-800 font-bold text-lg mb-2">🎉 Infinite Return!</p>
                  <p className="text-green-700 text-sm">
                    You'll pull out more cash than you put in, leaving $0 in the deal while keeping the property and cash flow. This is the BRRRR dream!
                  </p>
                </div>
              )}

              <div className="space-y-4">
                <Button
                  onClick={() => window.open('https://www.316cap.com/widget/survey/wdfHkbrE4TWjYAndh1w1', '_blank')}
                  className="w-full bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-black py-8 rounded-none uppercase tracking-widest text-sm"
                >
                  Get Funded for Your BRRRR
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button
                  onClick={resetCalculator}
                  variant="outline"
                  className="w-full border-slate-200 text-slate-500 rounded-none py-6 uppercase tracking-widest text-xs bg-white hover:bg-slate-50"
                >
                  Calculate Another Deal
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

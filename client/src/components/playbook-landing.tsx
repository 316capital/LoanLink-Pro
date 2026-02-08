import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  Download, 
  CheckCircle, 
  AlertTriangle, 
  Calculator, 
  Shield, 
  TrendingUp,
  ArrowRight,
  X,
  Loader2,
  Lock,
  FileText,
  Target,
  DollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
}

export function PlaybookLanding() {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Integrate with GHL
    // POST to GHL webhook/API with formData
    // Tag: "playbook-download"
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Trigger PDF download after short delay
    setTimeout(() => {
      // window.open('/downloads/316-playbook.pdf', '_blank');
      console.log('Download triggered for:', formData.email);
    }, 1000);
  };

  const chapters = [
    {
      icon: TrendingUp,
      title: "The BRRRR Blueprint",
      description: "Step-by-step framework with real deal numbers. Learn the 75% rule and when to break it."
    },
    {
      icon: AlertTriangle,
      title: "Lender Red Flags",
      description: "10 predatory tactics to watch for. Hidden fees, junk charges, and the questions that protect you."
    },
    {
      icon: Calculator,
      title: "Deal Analysis Templates",
      description: "Plug-and-play worksheets for Fix & Flip, BRRRR, and rental cash flow analysis."
    },
    {
      icon: DollarSign,
      title: "The Funding Playbook",
      description: "Which loan for which strategy. How to present deals so lenders compete for your business."
    },
    {
      icon: Lock,
      title: "The Vault Advantage",
      description: "Inside look at 100% financing. What it unlocks and how to qualify."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-[#001A54] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(242,193,0,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(242,193,0,0.1),transparent_40%)]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-[#F2C100] px-4 py-2 mb-6">
                <FileText className="h-4 w-4 text-[#001A54]" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#001A54]">Free Guide</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight leading-[1.05] mb-6">
                The 316 <br />
                <span className="text-[#F2C100] italic">Playbook</span>
              </h1>

              <p className="text-xl text-gray-300 mb-4 leading-relaxed font-medium max-w-lg">
                The guide private lenders <span className="text-[#F2C100] font-bold">don't want you to read.</span>
              </p>
              
              <p className="text-gray-400 mb-8 max-w-lg">
                30+ pages of battle-tested strategies, real deal breakdowns, and the exact frameworks 
                we use to fund millions in investor deals every month.
              </p>

              <div className="space-y-3 mb-10">
                {[
                  "BRRRR mastery with real numbers",
                  "Spot predatory lenders instantly",
                  "Deal analysis templates included",
                  "Insider funding strategies"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (0.1 * i) }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-[#F2C100] flex-shrink-0" />
                    <span className="text-white font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Button 
                size="lg"
                onClick={() => setShowModal(true)}
                className="bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-bold px-8 py-6 rounded-none transition-all uppercase tracking-widest text-xs shadow-[0_0_30px_rgba(242,193,0,0.3)] hover:shadow-[0_0_40px_rgba(242,193,0,0.5)]"
              >
                <Download className="mr-2 h-4 w-4" />
                Get the Free Playbook
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Right - Book Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Book mockup */}
              <div className="relative">
                {/* Shadow/depth effect */}
                <div className="absolute -inset-4 border border-[#F2C100]/20 translate-x-6 translate-y-6" />
                <div className="absolute -inset-4 border border-[#F2C100]/10 translate-x-12 translate-y-12" />
                
                {/* Book cover */}
                <div className="relative bg-gradient-to-br from-[#001A54] to-[#002875] p-10 shadow-2xl border-l-8 border-[#F2C100]">
                  <div className="absolute top-0 left-0 w-2 h-20 bg-[#F2C100]" />
                  <div className="absolute top-0 left-0 w-20 h-2 bg-[#F2C100]" />
                  <div className="absolute bottom-0 right-0 w-2 h-20 bg-[#F2C100]" />
                  <div className="absolute bottom-0 right-0 w-20 h-2 bg-[#F2C100]" />
                  
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center h-16 w-16 bg-[#F2C100] mb-6">
                      <BookOpen className="h-8 w-8 text-[#001A54]" />
                    </div>
                    
                    <p className="text-[#F2C100] text-xs font-bold uppercase tracking-[0.3em] mb-4">316 Capital</p>
                    
                    <h3 className="text-3xl font-bold text-white uppercase tracking-tight mb-2">
                      The 316
                    </h3>
                    <h3 className="text-3xl font-bold text-[#F2C100] italic mb-6">
                      Playbook
                    </h3>
                    
                    <div className="w-16 h-0.5 bg-[#F2C100]/50 mx-auto mb-6" />
                    
                    <p className="text-gray-400 text-sm max-w-xs mx-auto">
                      BRRRR Mastery • Lender Red Flags • Deal Analysis • Funding Strategies
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-white px-4 py-3 shadow-xl"
              >
                <p className="text-[#001A54] font-bold text-sm">30+ Pages</p>
                <p className="text-gray-500 text-xs">of actionable strategies</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#001A54] uppercase tracking-tight mb-4">
              What's Inside
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Five chapters of no-fluff strategies used by investors closing deals every week.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapters.map((chapter, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="group relative"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-[#F2C100] to-[#001A54] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gray-50 p-8 h-full border border-gray-100 group-hover:border-transparent transition-colors">
                  <div className="h-12 w-12 bg-[#001A54] flex items-center justify-center mb-6 group-hover:bg-[#F2C100] transition-colors">
                    <chapter.icon className="h-6 w-6 text-[#F2C100] group-hover:text-[#001A54] transition-colors" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#001A54] mb-3 uppercase tracking-tight">
                    {chapter.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {chapter.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative md:col-span-2 lg:col-span-1"
            >
              <div className="bg-[#001A54] p-8 h-full flex flex-col justify-center items-center text-center">
                <Target className="h-12 w-12 text-[#F2C100] mb-6" />
                <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-tight">
                  Ready to Level Up?
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Get instant access to all five chapters.
                </p>
                <Button 
                  onClick={() => setShowModal(true)}
                  className="bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-bold px-6 py-3 rounded-none text-xs uppercase tracking-widest"
                >
                  Download Now
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-12 bg-[#001A54]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "$50M+", label: "Funded in 2024" },
              { value: "500+", label: "Deals Closed" },
              { value: "48hrs", label: "Avg. Approval Time" },
              { value: "4.9★", label: "Investor Rating" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <p className="text-3xl font-bold text-[#F2C100] mb-1">{stat.value}</p>
                <p className="text-gray-400 text-xs uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => !isSubmitting && setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-white shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => !isSubmitting && setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                disabled={isSubmitting}
              >
                <X className="h-5 w-5" />
              </button>

              {!isSuccess ? (
                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center h-14 w-14 bg-[#001A54] mb-4">
                      <BookOpen className="h-7 w-7 text-[#F2C100]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#001A54] uppercase tracking-tight mb-2">
                      Get Your Free Playbook
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Enter your details and we'll send it right over.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-xs font-bold uppercase tracking-wider text-gray-700">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="mt-1 rounded-none border-gray-300 focus:border-[#001A54] focus:ring-[#001A54]"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-xs font-bold uppercase tracking-wider text-gray-700">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="mt-1 rounded-none border-gray-300 focus:border-[#001A54] focus:ring-[#001A54]"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-700">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1 rounded-none border-gray-300 focus:border-[#001A54] focus:ring-[#001A54]"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-gray-700">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-1 rounded-none border-gray-300 focus:border-[#001A54] focus:ring-[#001A54]"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <Label htmlFor="experience" className="text-xs font-bold uppercase tracking-wider text-gray-700">
                        Deals Completed
                      </Label>
                      <Select
                        value={formData.experience}
                        onValueChange={(value) => setFormData({ ...formData, experience: value })}
                        required
                      >
                        <SelectTrigger className="mt-1 rounded-none border-gray-300 focus:border-[#001A54] focus:ring-[#001A54]">
                          <SelectValue placeholder="Select your experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">Just getting started</SelectItem>
                          <SelectItem value="1-2">1-2 deals</SelectItem>
                          <SelectItem value="3-5">3-5 deals</SelectItem>
                          <SelectItem value="6-10">6-10 deals</SelectItem>
                          <SelectItem value="10+">10+ deals</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#F2C100] hover:bg-[#F2C100]/90 text-[#001A54] font-bold py-6 rounded-none text-xs uppercase tracking-widest mt-6"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Download className="mr-2 h-4 w-4" />
                          Send Me the Playbook
                        </>
                      )}
                    </Button>
                  </form>

                  <p className="text-xs text-gray-400 text-center mt-4">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </div>
              ) : (
                <div className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="inline-flex items-center justify-center h-16 w-16 bg-green-100 rounded-full mb-6"
                  >
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-[#001A54] uppercase tracking-tight mb-2">
                    Check Your Email!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your playbook is on its way to <span className="font-medium">{formData.email}</span>
                  </p>
                  
                  <div className="bg-gray-50 p-4 mb-6">
                    <p className="text-sm text-gray-600">
                      <span className="font-bold text-[#001A54]">Pro tip:</span> Check your spam folder if you don't see it in a few minutes.
                    </p>
                  </div>

                  <Button
                    onClick={() => {
                      setShowModal(false);
                      setIsSuccess(false);
                      setFormData({ firstName: "", lastName: "", email: "", phone: "", experience: "" });
                    }}
                    variant="outline"
                    className="border-[#001A54] text-[#001A54] hover:bg-[#001A54] hover:text-white rounded-none text-xs uppercase tracking-widest"
                  >
                    Close
                  </Button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { ProductsGrid } from "@/components/home/products-grid";
import { FundingBoard } from "@/components/home/funding-board";
import { ProductParams } from "@/components/home/product-params";
import { DrawCallout } from "@/components/home/draw-callout";
import { ExperienceSection } from "@/components/home/experience-section";
import { ContactSection } from "@/components/home/contact-section";
import { Testimonials } from "@/components/home/testimonials";
import { FAQSection } from "@/components/home/faq-section";
import { IntelligenceEngine } from "@/components/home/intelligence-engine";
import { Infrastructure } from "@/components/home/infrastructure";
import { PartnershipSection } from "@/components/home/partnership-section";
import { FullFinancingSection } from "@/components/home/full-financing-section";

import { Contact } from "@/components/home/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <Infrastructure />
        <ExperienceSection />
        <section className="bg-navy-950 py-12 overflow-hidden border-y border-white/5">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-12 animate-marquee whitespace-nowrap">
              {[
                "75% of Boston investors shifting to DSCR",
                "316 Capital deploying $15M+ this month",
                "Average approval time currently 24.5 hours",
                "Tier 1 rates starting from 7.99%",
                "100% Financing active for Vault members",
                "Multifamily bridge demand up 12% QOQ",
                "Institutional capital desk fully allocated for Q1"
              ].map((news, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="h-2 w-2 bg-[#F2C100] rounded-full" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">{news}</span>
                </div>
              ))}
            </div>
          </div>
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: flex;
              width: fit-content;
              animation: marquee 30s linear infinite;
            }
          `}} />
        </section>
        <ProductsGrid />
        <FullFinancingSection />
        <ProductParams />
        <FundingBoard />
        <PartnershipSection />
        <IntelligenceEngine />
        <DrawCallout />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

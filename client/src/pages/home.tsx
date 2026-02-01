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

import { Contact } from "@/components/home/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <Infrastructure />
        <ExperienceSection />
        <ProductsGrid />
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
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { ProductsGrid } from "@/components/home/products-grid";
import { FundingBoard } from "@/components/home/funding-board";
import { ProductParams } from "@/components/home/product-params";
import { DrawCallout } from "@/components/home/draw-callout";
import { ExperienceSection } from "@/components/home/experience-section";
import { ContactSection } from "@/components/home/contact-section";
import { LendingMap } from "@/components/home/lending-map";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <ExperienceSection />
        <ProductsGrid />
        <DrawCallout />
        <LendingMap />
        <FundingBoard />
        <ProductParams />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
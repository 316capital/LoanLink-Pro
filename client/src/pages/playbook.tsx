import { PlaybookLanding } from "@/components/playbook-landing";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function PlaybookPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PlaybookLanding />
      </main>
      <Footer />
    </div>
  );
}

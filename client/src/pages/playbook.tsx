import { PlaybookLanding } from "@/components/playbook-landing";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PlaybookPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PlaybookLanding />
      </main>
      <Footer />
    </div>
  );
}

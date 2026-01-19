import { Clock } from "lucide-react";

export function DrawCallout() {
  return (
    <section className="bg-bone-50 py-10 border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200 p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-5">
            <div className="h-12 w-12 bg-navy-950 flex items-center justify-center shrink-0">
              <Clock className="h-6 w-6 text-gold-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-950">48-Hour Draw Times</h3>
              <p className="text-muted-foreground text-sm">Liquidity at the speed of your project.</p>
            </div>
          </div>
          <div className="shrink-0 text-center md:text-right border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Turnaround</span>
            <span className="text-2xl font-bold font-mono text-navy-950">1.8 Days</span>
          </div>
        </div>
      </div>
    </section>
  );
}
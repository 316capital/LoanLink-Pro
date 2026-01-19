import { Clock } from "lucide-react";

export function DrawCallout() {
  return (
    <section className="bg-bone-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-gold-500 to-gold-400 p-1">
          <div className="bg-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-6">
              <div className="hidden md:flex h-16 w-16 bg-navy-950 items-center justify-center shrink-0">
                <Clock className="h-8 w-8 text-gold-500" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-navy-950 mb-2">
                  48-Hour Draw Times
                </h3>
                <p className="text-muted-foreground text-lg max-w-xl">
                  Keep crews working. Eliminate capital delays. <br className="hidden md:block"/>
                  Built for professional builders who can’t afford downtime.
                </p>
              </div>
            </div>
            
            <div className="shrink-0">
               <div className="text-center md:text-right">
                  <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Average Turnaround</span>
                  <span className="text-4xl font-bold font-mono text-navy-950">1.8 Days</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
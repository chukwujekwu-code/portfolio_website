import { leadership } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Leadership() {
  return (
    <section id="leadership" className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Community Leadership"
          subtitle="Building systems that scale—whether ML pipelines or people"
        />

        <div className="max-w-3xl mx-auto">
          {leadership.map((item) => (
            <div
              key={item.id}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent-secondary/10 border border-accent/20"
            >
              <div className="absolute -top-3 left-8">
                <span className="px-4 py-1 text-sm font-medium bg-accent text-white rounded-full">
                  {item.impact}
                </span>
              </div>

              <div className="mt-2">
                <div className="flex flex-wrap items-baseline gap-2 mb-4">
                  <h3 className="text-2xl font-bold">{item.organization}</h3>
                  <span className="text-accent">•</span>
                  <span className="text-lg text-muted">{item.role}</span>
                </div>

                <p className="text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

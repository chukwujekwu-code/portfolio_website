import { personalInfo } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LocationIcon, EmailIcon } from "@/components/icons";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about my background and what drives me"
        />

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Avatar placeholder */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-card border border-border overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted">
                  <span className="text-6xl">?</span>
                </div>
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-64 h-64 sm:w-72 sm:h-72 rounded-2xl border-2 border-accent -z-10" />
            </div>
          </div>

          {/* Bio content */}
          <div className="md:col-span-3 space-y-6">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index} className="text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <LocationIcon size={18} className="text-accent" />
                <span className="text-muted">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <EmailIcon size={18} className="text-accent" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-muted hover:text-foreground transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-lg bg-card border border-border">
                <p className="text-2xl font-bold text-accent">5+</p>
                <p className="text-sm text-muted">Years Experience</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border">
                <p className="text-2xl font-bold text-accent">20+</p>
                <p className="text-sm text-muted">Projects Completed</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border">
                <p className="text-2xl font-bold text-accent">10+</p>
                <p className="text-sm text-muted">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

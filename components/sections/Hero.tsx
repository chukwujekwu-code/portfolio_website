import { personalInfo } from "@/lib/data";
import { ArrowDownIcon, DownloadIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <p className="text-accent font-mono text-sm sm:text-base">
            Hi, my name is
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            {personalInfo.name}
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl text-muted font-semibold">
            {personalInfo.title}
          </h2>

          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
            >
              View Projects
              <ArrowDownIcon size={18} />
            </a>
            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-border hover:border-accent hover:text-accent transition-colors"
              >
                Download Resume
                <DownloadIcon size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDownIcon size={24} className="text-muted" />
        </div>
      </div>
    </section>
  );
}

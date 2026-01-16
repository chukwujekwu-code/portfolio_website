import { experiences, education, certifications } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-32 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and educational background"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent"></span>
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="relative pl-8 pb-8 border-l border-border last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-accent" />

                  <div className="space-y-2">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-lg font-semibold">{exp.role}</h4>
                      <span className="text-sm text-muted font-mono">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <p className="text-accent">{exp.company}</p>
                    <p className="text-sm text-muted">{exp.location}</p>

                    <ul className="mt-4 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted flex gap-2">
                          <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded bg-background border border-border text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-accent-secondary"></span>
                Education
              </h3>
              <div className="space-y-8">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="relative pl-8 pb-8 border-l border-border last:pb-0"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-accent-secondary" />

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="text-lg font-semibold">{edu.degree}</h4>
                        <span className="text-sm text-muted font-mono">
                          {edu.startDate && edu.endDate
                            ? `${edu.startDate} - ${edu.endDate}`
                            : edu.endDate || edu.startDate}
                        </span>
                      </div>
                      <p className="text-accent-secondary">{edu.institution}</p>
                      {edu.location && (
                        <p className="text-sm text-muted">{edu.location}</p>
                      )}
                      {edu.description && (
                        <p className="text-sm text-muted mt-2">{edu.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-accent-secondary"></span>
                Certifications
              </h3>
              <div className="space-y-8">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="relative pl-8 pb-8 border-l border-border last:pb-0"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-accent-secondary" />

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="text-lg font-semibold">{cert.name}</h4>
                        <span className="text-sm text-muted font-mono">{cert.year}</span>
                      </div>
                      <p className="text-accent-secondary">{cert.issuer}</p>
                      {cert.description && (
                        <p className="text-sm text-muted mt-2">{cert.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

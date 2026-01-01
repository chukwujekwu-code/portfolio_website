import { personalInfo, navLinks } from "@/lib/data";
import { iconMap } from "@/components/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold mb-2">{personalInfo.name}</p>
            <p className="text-muted text-sm">{personalInfo.title}</p>
          </div>

          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            {personalInfo.socialLinks.map((social) => {
              const Icon = iconMap[social.icon];
              return Icon ? (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted hover:text-foreground hover:bg-card rounded-lg transition-all"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </a>
              ) : null;
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

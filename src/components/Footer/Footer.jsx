import { socials } from '../../data/socials';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-10 pb-8">
      <div className="section-container">
        <div className="h-px w-full bg-gradient-brand opacity-40 mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-light/60 dark:text-ink-dark/60">
            © {year} Maryam Hassan. 
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-black/10 dark:border-white/15
                text-ink-light/60 dark:text-ink-dark/60 transition-all duration-300 hover:text-white hover:border-transparent hover:bg-gradient-brand"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

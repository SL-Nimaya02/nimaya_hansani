import { HeartIcon } from 'lucide-react';
const footerLinks = [
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Experience',
    href: '#experience'
  },
  {
    label: 'Education',
    href: '#education'
  },
  {
    label: 'Projects',
    href: '#projects'
  },
  {
    label: 'Services',
    href: '#services'
  },
  {
    label: 'Gallery',
    href: '#gallery'
  }];

export function Footer() {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el)
      el.scrollIntoView({
        behavior: 'smooth'
      });
  };
  return (
    <footer className="border-t border-white/[0.04] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }}
            className="font-display text-lg font-bold gradient-text">

            nimaya.dev
          </a>

          {/* Links */}
          <nav
            className="flex flex-wrap items-center justify-center gap-6"
            aria-label="Footer navigation">

            {footerLinks.map((link) =>
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm text-dark-500 hover:text-white transition-colors">

                {link.label}
              </a>
            )}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-dark-600 flex items-center gap-1">
            Built with{' '}
            <HeartIcon className="w-3 h-3 text-purple-500" aria-label="love" />{' '}
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>);

}
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
const navLinks = [
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
    label: 'Skills',
    href: '#skills'
  },
  {
    label: 'Projects',
    href: '#projects'
  },

  {
    label: 'Gallery',
    href: '#gallery'
  }, {
    label: 'Services',
    href: '#services'
  }];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-dark-950/80 backdrop-blur-xl border-b border-white/[0.04]' : 'bg-transparent'}`}
        initial={{
          y: -100
        }}
        animate={{
          y: 0
        }}
        transition={{
          duration: 0.6,
          delay: 2.2
        }}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
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
              className="font-display text-xl sm:text-2xl font-bold gradient-text">

              nimaya.dev
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${isActive ? 'text-purple-300' : 'text-dark-400 hover:text-white'}`}>

                    {link.label}
                    {isActive &&
                      <motion.div
                        className="absolute inset-0 bg-purple-500/10 rounded-lg"
                        layoutId="activeNav"
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 30
                        }} />

                    }
                  </a>);

              })}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-full transition-colors duration-300">

              Let's Talk
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-dark-400 hover:text-white transition-colors"
              aria-label="Toggle menu">

              {mobileOpen ?
                <XIcon className="w-5 h-5" /> :

                <MenuIcon className="w-5 h-5" />
              }
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-dark-950/98 backdrop-blur-2xl md:hidden overflow-y-auto"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="flex flex-col items-center justify-center min-h-screen py-24 px-6 gap-8">
              {navLinks.map((link, i) =>
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-display text-2xl font-semibold text-dark-300 hover:text-white transition-colors"
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  exit={{
                    opacity: 0,
                    y: 10
                  }}
                  transition={{
                    delay: i * 0.05
                  }}>

                  {link.label}
                </motion.a>
              )}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="mt-4 px-8 py-3 text-base font-medium text-white bg-purple-600 rounded-full"
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0
                }}
                transition={{
                  delay: 0.3
                }}>

                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>);

}
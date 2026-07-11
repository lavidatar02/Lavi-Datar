import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../hooks/use-scroll-spy';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.href.substring(1)));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }} className="text-3xl font-bold tracking-tight">
            <span className={scrolled ? "text-foreground" : "text-white"}>Lavi</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === link.href.substring(1) 
                    ? (scrolled ? 'text-primary' : 'text-secondary')
                    : (scrolled ? 'text-muted-foreground' : 'text-white/80')
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all hover:-translate-y-0.5 ${
                scrolled 
                  ? 'bg-primary text-white shadow-md shadow-primary/20 hover:bg-primary/90' 
                  : 'bg-white text-primary hover:bg-white/90'
              }`}
            >
              Contact Me
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden ${scrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col p-6 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-8">
              <a href="#home" className="text-3xl font-bold tracking-tight text-foreground">
                Lavi<span className="text-primary">.</span>
              </a>
              <button onClick={() => setIsOpen(false)} className="text-foreground p-2 bg-gray-100 rounded-full" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-6 items-center flex-1 justify-center pb-20">
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`text-2xl font-semibold tracking-wide ${
                    activeSection === link.href.substring(1) ? 'text-primary' : 'text-foreground/70'
                  }`}
                  whileHover={{ scale: 1.05, color: 'hsl(var(--primary))' }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
                className="mt-4 px-8 py-3 rounded-full bg-primary text-white font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
              >
                Contact Me
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

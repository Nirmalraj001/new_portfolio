import React, { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { cn } from '../utils/cn';

export const NAV_LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scrolling to add drop-shadow/border and spy on active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy logic
      const scrollPosition = window.scrollY + 200;
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.02)]"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center"
        >
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 border border-slate-200/60 rounded-full p-1.5 backdrop-blur-sm relative">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id)}
              className={cn(
                "relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors duration-300",
                activeSection === link.id
                  ? "text-primary"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              {/* Springy capsule overlay behind active tab */}
              {activeSection === link.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white border border-slate-200/50 rounded-full -z-10 shadow-[0_2px_8px_rgba(99,102,241,0.08)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA / CV Download */}
        <div className="hidden md:flex items-center">
          <a
            href="/resume.pdf"
            download="Nirmal_Raj_Resume.pdf"
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-[0_4px_12px_rgba(15,23,42,0.15)] flex items-center gap-2 group"
          >
            <Download size={14} className="group-hover:translate-y-[1px] transition-transform" />
            Download CV
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-600 hover:text-slate-900 md:hidden transition-colors relative z-50 rounded-lg hover:bg-slate-100/55"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-0 left-0 w-full bg-white border-b border-slate-200 shadow-xl z-40 pt-20 pb-8 px-6 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={cn(
                    "text-sm font-semibold transition-all duration-200 py-2.5 px-4 rounded-xl",
                    activeSection === link.id
                      ? "text-primary bg-primary/5 font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="h-[1px] bg-slate-100" />

            <a
              href="/resume.pdf"
              download="Nirmal_Raj_Resume.pdf"
              className="w-full text-center py-3.5 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-md shadow-slate-900/10 flex items-center justify-center gap-2"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

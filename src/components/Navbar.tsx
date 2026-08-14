import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'nav-link-home', sectionId: 'home' },
    { label: 'About Us', href: '#about', id: 'nav-link-about', sectionId: 'about' },
    { label: 'What We Do', href: '#what-we-do', id: 'nav-link-what-we-do', sectionId: 'what-we-do' },
    { label: 'Gallery', href: '#gallery', id: 'nav-link-gallery', sectionId: 'gallery' },
    { label: 'Contact', href: '#contact', id: 'nav-link-contact', sectionId: 'contact' },
  ];

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 right-0 z-40 bg-[#232B33] border-b border-[#3C4857] text-[#FFFFFF]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Wordmark Logo */}
        <a
          id="brand-logo"
          href="#home"
          className="text-2xl font-bold tracking-tighter text-[#FFFFFF] hover:text-[#D96708] transition-colors focus-visible:outline-2 focus-visible:outline-[#D96708]"
        >
          MODIFY
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" aria-label="Main Navigation" className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <a
                key={link.href}
                id={link.id}
                href={link.href}
                className={`text-xs uppercase tracking-widest font-semibold transition-all py-1.5 border-b-2 ${
                  isActive
                    ? 'text-[#FFFFFF] border-[#D96708]'
                    : 'text-[#B9C2CC] border-transparent hover:text-[#FFFFFF] hover:border-[#D96708]/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xs text-[#B9C2CC] hover:text-[#FFFFFF] hover:bg-[#2E3947] focus-visible:outline-2 focus-visible:outline-[#D96708] cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile Navigation"
          className="md:hidden bg-[#232B33] border-b border-[#3C4857] px-4 pt-2 pb-4 space-y-1"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 text-base font-medium rounded-xs transition-colors ${
                  isActive
                    ? 'text-[#FFFFFF] bg-[#2E3947] border-l-3 border-[#D96708]'
                    : 'text-[#B9C2CC] hover:text-[#FFFFFF] hover:bg-[#2E3947]/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
};

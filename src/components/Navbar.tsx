
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import LogoIcon from './LogoIcon';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6 md:px-10',
        isScrolled
          ? 'backdrop-blur-xl bg-cyberpunk-darker/80 shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2 sm:space-x-3 group min-w-0">
          <LogoIcon size={24} className="transition-transform duration-300 group-hover:scale-110 shrink-0 sm:w-7 sm:h-7" />
          <div className="min-w-0">
            <h1 className="text-base sm:text-xl font-bold text-gradient-blue truncate">
              Home Renovator GPT 🔧🏡
            </h1>
            <p className="text-[10px] sm:text-xs text-cyberpunk-blue/80 truncate">
              Presented by <span className="hover:text-cyberpunk-neon transition-colors">AiWebTools.Ai</span>
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <a
            href="https://chatgpt.com/g/g-XZIGAcMnL-home-renovator-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-4 lg:px-5 py-2.5 overflow-hidden font-medium text-white bg-cyberpunk-blue rounded-lg shadow-inner group whitespace-nowrap"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyberpunk-blue to-cyberpunk-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
            <span className="relative flex items-center text-sm lg:text-base">
              USE Home Renovator GPT 🔧🏡
            </span>
          </a>
          <a href="#faq" className="text-white hover:text-cyberpunk-blue transition-colors text-sm lg:text-base">
            FAQ
          </a>
          <a href="#disclaimer" className="text-white hover:text-cyberpunk-blue transition-colors text-sm lg:text-base">
            Disclaimer
          </a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-cyberpunk-blue transition-colors text-sm lg:text-base whitespace-nowrap"
          >
            More AI Tools
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white focus:outline-none p-2 -mr-2 active:scale-95 transition-transform touch-manipulation"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - Animated */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-cyberpunk-darker/98 backdrop-blur-xl shadow-2xl border-t border-cyberpunk-blue/20 transition-all duration-200 ease-out overflow-hidden',
          isMobileMenuOpen
            ? 'max-h-[80vh] opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        )}
      >
        <nav className="p-5 flex flex-col space-y-3">
          <a
            href="https://chatgpt.com/g/g-XZIGAcMnL-home-renovator-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-3.5 px-4 bg-cyberpunk-blue rounded-lg text-white font-medium hover:bg-cyberpunk-blue/80 active:scale-[0.98] transition-all touch-manipulation"
            onClick={closeMobileMenu}
          >
            USE Home Renovator GPT 🔧🏡
          </a>
          <a 
            href="#faq" 
            className="py-3 text-center text-white hover:text-cyberpunk-blue active:text-cyberpunk-blue transition-colors touch-manipulation rounded-lg hover:bg-white/5"
            onClick={closeMobileMenu}
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="py-3 text-center text-white hover:text-cyberpunk-blue active:text-cyberpunk-blue transition-colors touch-manipulation rounded-lg hover:bg-white/5"
            onClick={closeMobileMenu}
          >
            Disclaimer
          </a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="py-3 text-center text-white hover:text-cyberpunk-blue active:text-cyberpunk-blue transition-colors touch-manipulation rounded-lg hover:bg-white/5"
            onClick={closeMobileMenu}
          >
            More AI Tools
          </a>
        </nav>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 top-0 bg-black/50 -z-10"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Navbar;

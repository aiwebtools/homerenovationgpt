
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LogoIcon from './LogoIcon';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10',
        isScrolled
          ? 'backdrop-blur-xl bg-cyberpunk-darker/80 shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3 group">
          <LogoIcon size={28} className="transition-transform duration-300 group-hover:scale-110" />
          <div>
            <h1 className="text-xl font-bold text-gradient-blue">
              Home Renovator GPT 🔧🏡
            </h1>
            <p className="text-xs text-cyberpunk-blue/80">
              Presented by <span className="hover:text-cyberpunk-neon transition-colors">AiWebTools.Ai</span>
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="https://chatgpt.com/g/g-XZIGAcMnL-home-renovator-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-5 py-2.5 overflow-hidden font-medium text-white bg-cyberpunk-blue rounded-lg shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyberpunk-blue to-cyberpunk-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
            <span className="relative flex items-center">
              USE Home Renovator GPT 🔧🏡
            </span>
          </a>
          <a href="#faq" className="text-white hover:text-cyberpunk-blue transition-colors">
            FAQ
          </a>
          <a href="#disclaimer" className="text-white hover:text-cyberpunk-blue transition-colors">
            Disclaimer
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-cyberpunk-blue transition-colors"
          >
            More AI Tools
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-cyberpunk-darker/95 backdrop-blur-xl p-5 flex flex-col space-y-4 shadow-lg border-t border-cyberpunk-blue/20">
          <a
            href="https://chatgpt.com/g/g-XZIGAcMnL-home-renovator-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-3 px-4 bg-cyberpunk-blue rounded-lg text-white font-medium hover:bg-cyberpunk-blue/80 transition-colors"
          >
            USE Home Renovator GPT 🔧🏡
          </a>
          <a 
            href="#faq" 
            className="py-2 text-center text-white hover:text-cyberpunk-blue transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="py-2 text-center text-white hover:text-cyberpunk-blue transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Disclaimer
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="py-2 text-center text-white hover:text-cyberpunk-blue transition-colors"
          >
            More AI Tools
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

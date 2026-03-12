
import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import LogoIcon from './LogoIcon';

const Footer = () => {
  return (
    <footer className="bg-cyberpunk-darker pt-16 pb-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyberpunk-grid opacity-20"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cyberpunk-dark to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <LogoIcon size={24} />
              <div>
                <h3 className="text-lg font-bold text-white">Home Renovator GPT 🔧🏡</h3>
                <p className="text-xs text-cyberpunk-blue/80">Presented by AiWebTools.Ai</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Your AI-powered assistant for all home renovation projects, providing expert guidance,
              cost estimates, and step-by-step instructions.
            </p>
            <a
              href="https://chatgpt.com/g/g-XZIGAcMnL-home-renovator-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-cyberpunk-blue/20 hover:bg-cyberpunk-blue/30 text-cyberpunk-blue rounded-lg transition-colors"
            >
              Try It Now <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#features" 
                  className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
                >
                  Legal Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
                >
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Legal */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone size={18} className="text-cyberpunk-blue mr-3" />
                <a 
                  href="tel:+14758008096" 
                  className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
                >
                  (475) 800-8096
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-cyberpunk-blue mr-3" />
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
                >
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
            
            <div className="mt-8">
              <a 
                href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-blue text-white rounded-full hover:shadow-lg hover:shadow-cyberpunk-blue/20 transition-all duration-300"
              >
                More AI Tools
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors mb-4 md:mb-0"
          >
            © 2025 AI WEB TOOLS LLC All rights reserved.
          </a>
          
          <div className="flex space-x-6">
            <a 
              href="https://chatgpt.com/g/g-XZIGAcMnL-home-renovator-gpt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
            >
              USE Home Renovator GPT 🔧🏡
            </a>
            <a 
              href="#faq" 
              className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
            >
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

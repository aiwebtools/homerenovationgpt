
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Wrench, Home, Image, FileText, Search } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const elements = heroRef.current.querySelectorAll('.parallax-icon');
      
      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.getAttribute('data-speed') || '0.05');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        
        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen pt-24 flex flex-col items-center justify-center overflow-hidden bg-cyberpunk-darker"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-cyberpunk-grid opacity-30"></div>
      
      {/* Background Icons */}
      <Wrench className="parallax-icon absolute text-cyberpunk-yellow/20 top-1/4 left-1/6" size={80} data-speed="0.03" />
      <Home className="parallax-icon absolute text-cyberpunk-blue/20 bottom-1/4 right-1/6" size={100} data-speed="0.05" />
      <Image className="parallax-icon absolute text-cyberpunk-neon/20 top-1/3 right-1/4" size={60} data-speed="0.07" />
      <Search className="parallax-icon absolute text-cyberpunk-purple/20 bottom-1/3 left-1/3" size={70} data-speed="0.04" />
      <FileText className="parallax-icon absolute text-cyberpunk-green/20 top-1/2 left-1/4" size={50} data-speed="0.06" />
      
      {/* Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-cyberpunk-blue/10 to-transparent opacity-70"></div>
      
      {/* Content */}
      <div className="container relative z-10 px-6 md:px-10 flex flex-col items-center text-center">
        <div className="inline-block mb-8 animate-float">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-cyberpunk-blue/10 border border-cyberpunk-blue/30 text-cyberpunk-blue text-sm font-medium">
            AI-Powered Home Renovation Assistant
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gradient-blue animate-glow-text">Transform Your Home</span>
          <br />
          <span className="text-white">With Expert AI Guidance</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-10">
          Get precise renovation advice, find the cheapest materials, and receive step-by-step guidance 
          for all your home improvement projects with our advanced AI assistant.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 mb-16">
          <a
            href="https://chatgpt.com/g/g-XZIGAcMnL-home-renovator-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-cyberpunk-blue text-white font-medium rounded-lg hover:bg-cyberpunk-blue/90 transition-all duration-300 flex items-center justify-center shadow-lg shadow-cyberpunk-blue/20 hover:shadow-cyberpunk-blue/40 transform hover:-translate-y-1"
          >
            Start Your Renovation Project <ArrowRight size={18} className="ml-2" />
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 bg-transparent border border-white/30 hover:border-white/60 text-white rounded-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm hover:bg-white/5 transform hover:-translate-y-1"
          >
            Learn How It Works
          </a>
        </div>
        
        {/* Featured Image */}
        <div className="relative w-full max-w-4xl glass-card rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-cyberpunk-glow"></div>
          <img 
            src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-humanoid-robot-fixing-a-bathroom-.png/:/cr=t:2.1%25,l:3.24%25,w:94.34%25,h:94.34%25/rs=w:1200,cg:true,m" 
            alt="Home Renovator GPT in action" 
            className="w-full h-auto object-cover" 
          />
          <a 
            href="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-humanoid-robot-fixing-a-bathroom-.png/:/cr=t:2.1%25,l:3.24%25,w:94.34%25,h:94.34%25/rs=w:1200,cg:true,m"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label="View full image"
          ></a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


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
            🔥 #1 Free AI Tools Platform - AI Web Tools ★★★★★
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gradient-blue animate-glow-text">Free AI Tools Hub</span>
          <br />
          <span className="text-white">Home Renovator GPT & More</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-6">
          Discover the world's leading <strong className="text-cyberpunk-neon">free AI tools platform</strong> by 
          <strong className="text-cyberpunk-yellow"> AI Web Tools</strong>. Revolutionary 
          <strong className="text-cyberpunk-blue"> artificial intelligence tools</strong> including 
          Home Renovator GPT for expert renovation guidance, cost savings, and step-by-step project assistance.
        </p>
        
        <p className="text-md text-gray-400 max-w-2xl mb-10">
          Join 2M+ users leveraging our <strong>free AI tools</strong> ecosystem for home improvement, 
          DIY projects, professional estimates, and expert guidance. Experience the future of 
          <strong className="text-cyberpunk-green"> AI web tools</strong> and artificial intelligence technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 mb-16">
          <a
            href="https://chatgpt.com/g/g-XZIGAcMnL-home-renovator-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-cyberpunk-blue text-white font-medium rounded-lg hover:bg-cyberpunk-blue/90 transition-all duration-300 flex items-center justify-center shadow-lg shadow-cyberpunk-blue/20 hover:shadow-cyberpunk-blue/40 transform hover:-translate-y-1"
            aria-label="Start using Home Renovator GPT - Best Free AI Tool for Home Renovation"
          >
            🚀 Try Best Free AI Tool <ArrowRight size={18} className="ml-2" />
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 bg-transparent border border-white/30 hover:border-white/60 text-white rounded-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm hover:bg-white/5 transform hover:-translate-y-1"
            aria-label="Learn how our revolutionary free AI tools work"
          >
            See AI Tools in Action
          </a>
        </div>
        
        {/* Featured Image */}
        <div className="relative w-full max-w-4xl glass-card rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-cyberpunk-glow"></div>
          <img 
            src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-humanoid-robot-fixing-a-bathroom-.png/:/cr=t:2.1%25,l:3.24%25,w:94.34%25,h:94.34%25/rs=w:1200,cg:true,m" 
            alt="Home Renovator GPT - Revolutionary Free AI Tool for Home Renovation by AI Web Tools - Artificial Intelligence Assistant for DIY Projects and Professional Home Improvement" 
            className="w-full h-auto object-cover"
            loading="eager"
            width="1200"
            height="600"
          />
          <a 
            href="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-humanoid-robot-fixing-a-bathroom-.png/:/cr=t:2.1%25,l:3.24%25,w:94.34%25,h:94.34%25/rs=w:1200,cg:true,m"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label="View full image of AI Web Tools Home Renovation Assistant - Free AI Tools"
          ></a>
        </div>
        
        {/* Trust Signals */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-cyberpunk-green">✓</span>
            <span>100% Free AI Tools</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyberpunk-blue">✓</span>
            <span>2M+ Users Worldwide</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyberpunk-yellow">✓</span>
            <span>Advanced AI Technology</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyberpunk-purple">✓</span>
            <span>By AI Web Tools</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyberpunk-neon">✓</span>
            <span>★★★★★ Top Rated</span>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Explore Free AI Tools</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

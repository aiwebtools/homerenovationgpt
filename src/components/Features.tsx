
import React from 'react';
import { Search, DollarSign, FileText, Map, ImagePlus, Code, Database, Speech, ArrowRight } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Search size={32} className="text-cyberpunk-blue" />,
      title: "AI-Powered Smart Search",
      description: "Our revolutionary free AI tools find exact materials from local suppliers with real-time pricing. Advanced artificial intelligence technology by AI Web Tools.",
    },
    {
      icon: <DollarSign size={32} className="text-cyberpunk-yellow" />,
      title: "Intelligent Cost Calculator",
      description: "Industry-leading free AI tools compare DIY vs professional costs with precision accuracy. Save thousands with our AI web tools platform.",
    },
    {
      icon: <FileText size={32} className="text-cyberpunk-neon" />,
      title: "Professional AI Reports",
      description: "Generate comprehensive downloadable reports using cutting-edge artificial intelligence. Best-in-class free AI tools for detailed project analysis.",
    },
    {
      icon: <Map size={32} className="text-cyberpunk-purple" />,
      title: "AI Contractor Network",
      description: "Connect with verified local contractors through our AI-powered matching system. Smart recommendations from the AI Web Tools ecosystem.",
    },
    {
      icon: <ImagePlus size={32} className="text-cyberpunk-green" />,
      title: "Advanced AI Image Analysis",
      description: "Upload photos for precise AI-powered assessment. Revolutionary computer vision technology from the leading free AI tools platform.",
    },
    {
      icon: <Code size={32} className="text-cyberpunk-blue" />,
      title: "Sophisticated AI Algorithms",
      description: "Machine learning algorithms calculate accurate costs instantly. State-of-the-art artificial intelligence technology powering our free AI tools.",
    },
    {
      icon: <Database size={32} className="text-cyberpunk-yellow" />,
      title: "Comprehensive AI Database",
      description: "Access extensive AI-powered repository of home repair knowledge. Massive database powered by AI Web Tools artificial intelligence systems.",
    },
    {
      icon: <Speech size={32} className="text-cyberpunk-neon" />,
      title: "Interactive AI Assistant",
      description: "Get real-time AI feedback and personalized guidance. Advanced conversational AI from the world's leading free AI tools platform.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-cyberpunk-dark relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyberpunk-grid opacity-20"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cyberpunk-darker to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyberpunk-darker to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyberpunk-blue/10 border border-cyberpunk-blue/30 text-cyberpunk-blue text-sm font-medium mb-4">
            🔥 World's Most Advanced Free AI Tools Platform
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Complete <span className="text-gradient-yellow">Free AI Tools</span> Ecosystem
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Home Renovator GPT combines cutting-edge <strong className="text-cyberpunk-neon">artificial intelligence</strong> with 
            practical expertise. Join the <strong className="text-cyberpunk-yellow">AI Web Tools</strong> community 
            and experience the future of <strong className="text-cyberpunk-blue">free AI tools</strong> technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-xl hover:shadow-lg hover:shadow-cyberpunk-blue/10 transition-all duration-300 h-full flex flex-col"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'slide-up 0.5s ease-out forwards',
                opacity: 0
              }}
            >
              <div className="p-3 bg-white/5 rounded-lg w-fit mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300 flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Trusted by professionals and DIY enthusiasts worldwide. Part of the <strong className="text-cyberpunk-blue">AI Web Tools</strong> ecosystem - 
            the premier destination for <strong className="text-cyberpunk-yellow">free AI tools</strong> and artificial intelligence solutions.
          </p>
          <a
            href="https://www.aiwebtools.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-blue text-white rounded-lg hover:shadow-lg hover:shadow-cyberpunk-blue/20 transition-all duration-300"
            aria-label="Explore more revolutionary free AI tools at AI Web Tools platform"
          >
            Discover More Free AI Tools <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;

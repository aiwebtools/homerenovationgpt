
import React from 'react';
import { Search, DollarSign, FileText, Map, ImagePlus, Code, Database, Speech } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Search size={32} className="text-cyberpunk-blue" />,
      title: "Local Supplier Search",
      description: "Find the exact parts and materials you need from local suppliers in your zip code area.",
    },
    {
      icon: <DollarSign size={32} className="text-cyberpunk-yellow" />,
      title: "Cost Comparison",
      description: "Compare DIY costs vs professional installation with accurate labor and material calculations.",
    },
    {
      icon: <FileText size={32} className="text-cyberpunk-neon" />,
      title: "Detailed Reports",
      description: "Get comprehensive downloadable reports with itemized costs and step-by-step instructions.",
    },
    {
      icon: <Map size={32} className="text-cyberpunk-purple" />,
      title: "Local Service Providers",
      description: "Connect with trusted local contractors and service providers for expert installation.",
    },
    {
      icon: <ImagePlus size={32} className="text-cyberpunk-green" />,
      title: "Image Analysis",
      description: "Upload photos of your repair needs for precise assessment and tailored recommendations.",
    },
    {
      icon: <Code size={32} className="text-cyberpunk-blue" />,
      title: "Advanced Calculations",
      description: "Benefit from sophisticated algorithms that calculate accurate costs and material requirements.",
    },
    {
      icon: <Database size={32} className="text-cyberpunk-yellow" />,
      title: "Comprehensive Database",
      description: "Access an extensive repository of home repair knowledge and product specifications.",
    },
    {
      icon: <Speech size={32} className="text-cyberpunk-neon" />,
      title: "Interactive Guidance",
      description: "Get real-time feedback and assistance throughout your renovation journey.",
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
            Powerful Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Everything You Need For <span className="text-gradient-yellow">Home Renovation</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Home Renovator GPT combines cutting-edge AI technology with practical home improvement 
            expertise to deliver a comprehensive solution for all your renovation needs.
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
      </div>
    </section>
  );
};

export default Features;

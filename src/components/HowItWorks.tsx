
import React from 'react';
import { Upload, Search, FileText, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload size={40} className="text-cyberpunk-blue" />,
      title: "Upload Photos",
      description: "Start by uploading images of your repair or renovation area, giving the AI a clear view of what needs attention.",
      color: "border-cyberpunk-blue",
      bg: "bg-cyberpunk-blue/10",
    },
    {
      icon: <Search size={40} className="text-cyberpunk-yellow" />,
      title: "AI Analysis",
      description: "The AI analyzes your photos and requirements, searches for materials and services in your zip code area.",
      color: "border-cyberpunk-yellow",
      bg: "bg-cyberpunk-yellow/10",
    },
    {
      icon: <FileText size={40} className="text-cyberpunk-neon" />,
      title: "Get Detailed Report",
      description: "Receive a comprehensive report with cost estimates, DIY instructions, and professional service options.",
      color: "border-cyberpunk-neon",
      bg: "bg-cyberpunk-neon/10",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-cyberpunk-darker relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyberpunk-grid opacity-20"></div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyberpunk-blue/10 border border-cyberpunk-blue/30 text-cyberpunk-blue text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            How <span className="text-gradient-neon">Home Renovator GPT</span> Works
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Getting expert renovation advice has never been easier. Our AI-powered assistant guides you 
            through a simple three-step process to solve your home improvement challenges.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div 
                className={`glass-card p-8 rounded-xl border ${step.color} ${step.bg} w-full lg:w-1/3 flex flex-col items-center text-center transform transition-all duration-500 hover:-translate-y-2`}
              >
                <div className="p-4 rounded-full bg-white/10 mb-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <ArrowRight size={32} className="text-cyberpunk-blue my-4 lg:my-0 rotate-90 lg:rotate-0" />
              )}
            </React.Fragment>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="https://chatgpt.com/g/g-XZIGAcMnL-home-renovator-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyberpunk-blue/30 transform hover:-translate-y-1"
          >
            Start Your Home Renovation Project <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

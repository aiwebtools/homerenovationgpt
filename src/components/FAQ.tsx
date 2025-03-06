
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is Home Renovator GPT?",
      answer: "Home Renovator GPT is an AI-powered assistant that provides comprehensive expertise on home improvements and remodeling. It helps you find repair parts, locate affordable materials and services in your area, and guides you through the entire renovation process with step-by-step instructions."
    },
    {
      question: "How accurate are the cost estimates?",
      answer: "The cost estimates are highly accurate as they are based on real-time data from local suppliers in your zip code. Home Renovator GPT calculates labor costs by determining the hours required for each task and applying industry-standard rates. Material costs are sourced directly from local suppliers for maximum accuracy."
    },
    {
      question: "Do I need to provide my zip code?",
      answer: "Yes, providing your zip code helps the AI find the most relevant and cost-effective local suppliers and service providers in your area. This ensures you receive geographically accurate recommendations and pricing information."
    },
    {
      question: "Can it help with DIY projects?",
      answer: "Absolutely! Home Renovator GPT provides detailed step-by-step instructions for DIY projects, including required tools, materials, and techniques. It's like having a professional contractor guiding you through each stage of your project."
    },
    {
      question: "What type of home renovation projects can it assist with?",
      answer: "Home Renovator GPT can assist with virtually any home renovation project, including kitchen and bathroom remodels, flooring installation, painting, plumbing repairs, electrical work, landscaping, and more. If it's related to home improvement, the AI can provide guidance."
    },
    {
      question: "How does image analysis work?",
      answer: "Upload photos of the area needing repair or renovation, and the AI will analyze them to identify issues, recommend solutions, and suggest appropriate materials. This visual assessment helps provide more accurate and tailored advice for your specific situation."
    },
    {
      question: "Will it recommend contractors if needed?",
      answer: "Yes, if your project requires professional expertise, Home Renovator GPT can suggest local contractors and service providers in your area. It will help you determine when a project is beyond DIY scope and requires professional assistance."
    },
    {
      question: "Is there a cost to use Home Renovator GPT?",
      answer: "To access Home Renovator GPT, you need a ChatGPT Plus subscription. There are no additional charges for using this specialized AI assistant beyond your regular subscription fee."
    }
  ];

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-cyberpunk-darker relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyberpunk-grid opacity-20"></div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyberpunk-purple/10 border border-cyberpunk-purple/30 text-cyberpunk-purple text-sm font-medium mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Frequently Asked <span className="text-gradient-yellow">Questions</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about Home Renovator GPT and how it can help with your renovation projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="glass-card mb-4 rounded-xl overflow-hidden border border-white/10"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-cyberpunk-blue" />
                ) : (
                  <ChevronDown size={20} className="text-cyberpunk-blue" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-white/10">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

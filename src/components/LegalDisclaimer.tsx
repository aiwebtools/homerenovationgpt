
import React from 'react';
import { Shield } from 'lucide-react';

const LegalDisclaimer = () => {
  return (
    <section id="disclaimer" className="py-20 bg-cyberpunk-dark relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyberpunk-grid opacity-20"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cyberpunk-darker to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyberpunk-neon/10 border border-cyberpunk-neon/30 text-cyberpunk-neon text-sm font-medium mb-4">
            <Shield size={16} />
            Legal Information
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Legal <span className="text-gradient-blue">Disclaimer</span>
          </h2>
        </div>

        <div className="glass-card p-8 rounded-xl border border-white/10 max-w-4xl mx-auto">
          <div className="space-y-6 text-gray-300">
            <p>
              <strong className="text-white">General Disclaimer:</strong> Home Renovator GPT is an AI-based tool designed to provide general guidance and information related to home renovation projects. The information provided by this tool is for informational purposes only and should not be considered as professional advice.
            </p>
            
            <p>
              <strong className="text-white">Not a Substitute for Professional Services:</strong> The information and recommendations provided by Home Renovator GPT are not substitutes for professional advice or services from licensed contractors, architects, engineers, or other qualified professionals. Users should consult with appropriate professionals before undertaking any renovation or construction project.
            </p>
            
            <p>
              <strong className="text-white">No Warranty:</strong> The information provided by Home Renovator GPT is presented "as is" without any warranties, expressed or implied. We do not guarantee the accuracy, completeness, or reliability of any information provided.
            </p>
            
            <p>
              <strong className="text-white">Cost Estimates:</strong> Any cost estimates provided are approximations based on available data and should be used only as rough guidelines. Actual costs may vary significantly based on numerous factors including location, market conditions, material availability, and individual contractor rates.
            </p>
            
            <p>
              <strong className="text-white">Local Regulations:</strong> Home Renovator GPT does not guarantee compliance with local building codes, permit requirements, or other regulations. Users are solely responsible for ensuring compliance with all applicable laws, regulations, and codes in their jurisdiction.
            </p>
            
            <p>
              <strong className="text-white">Third-Party Links:</strong> Any links to third-party websites, products, or services are provided for convenience only. We do not endorse or make any representations about these third parties or their products and services.
            </p>
            
            <p>
              <strong className="text-white">Limitation of Liability:</strong> AI Web Tools LLC and its affiliates shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with the use of Home Renovator GPT or the information it provides.
            </p>
            
            <p>
              <strong className="text-white">User Responsibility:</strong> Users assume all responsibility and risk for the use of Home Renovator GPT. It is the user's responsibility to evaluate the accuracy, completeness, or usefulness of any information, opinion, advice, or other content available through this tool.
            </p>
            
            <p>
              By using Home Renovator GPT, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalDisclaimer;

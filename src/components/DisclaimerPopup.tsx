
import React, { useState, useEffect } from 'react';
import { Shield, Info, X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if the user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem('disclaimerAccepted');
    
    if (!hasAccepted) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Save to localStorage that user has accepted
    localStorage.setItem('disclaimerAccepted', 'true');
    setIsOpen(false);
    
    // Show a toast notification
    toast({
      title: "Welcome to Home Renovator GPT! 🔧🏡",
      description: "Thank you for accepting our terms. Let's get started!",
      duration: 5000,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div 
        className="relative max-w-md w-full rounded-lg neo-blur p-6 border border-cyberpunk-blue/50 overflow-hidden"
        style={{
          boxShadow: "0 0 15px rgba(56, 219, 255, 0.3), 0 0 30px rgba(56, 219, 255, 0.2)"
        }}
      >
        {/* Background effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyberpunk-blue via-cyberpunk-purple to-cyberpunk-neon opacity-20 blur-xl"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-cyberpunk-blue" />
              <h3 className="text-2xl font-bold text-gradient-blue tracking-wider" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                DISCLAIMER
              </h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 hover:bg-white/10 transition-colors"
            >
              <X className="h-5 w-5 text-white/70 hover:text-white" />
            </button>
          </div>
          
          {/* Disclaimer content */}
          <div className="space-y-4 mb-6 text-white/80 max-h-[60vh] overflow-y-auto pr-2 scrollbar-none">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-cyberpunk-neon shrink-0 mt-1" />
              <p className="text-sm">
                <strong className="text-cyberpunk-neon">AI-Generated Content:</strong> Home Renovator GPT provides 
                AI-generated advice and recommendations that are for informational purposes only and should not be 
                considered professional advice.
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-cyberpunk-yellow shrink-0 mt-1" />
              <p className="text-sm">
                <strong className="text-cyberpunk-yellow">Professional Consultation:</strong> Always consult with qualified 
                professionals before undertaking any significant home renovation or repair project.
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-cyberpunk-green shrink-0 mt-1" />
              <p className="text-sm">
                <strong className="text-cyberpunk-green">No Liability:</strong> AI Web Tools LLC assumes no responsibility or 
                liability for any errors or omissions in the content provided, or for any damages resulting from the use of this information.
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-cyberpunk-purple shrink-0 mt-1" />
              <p className="text-sm">
                <strong className="text-cyberpunk-purple">Local Regulations:</strong> Users are responsible for ensuring compliance with 
                all applicable local building codes, regulations, and laws.
              </p>
            </div>
          </div>
          
          {/* Accept button */}
          <button
            onClick={handleAccept}
            className="w-full cyberpunk-border bg-cyberpunk-darker py-3 px-6 rounded-md text-white font-bold tracking-wider transition-all relative overflow-hidden group hover:scale-[1.02]"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span className="relative z-10">I AGREE</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyberpunk-blue via-cyberpunk-neon to-cyberpunk-purple opacity-30 group-hover:opacity-50 transition-opacity"></span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="absolute inset-0 bg-gradient-to-r from-cyberpunk-blue via-cyberpunk-neon to-cyberpunk-purple animate-pulse-glow opacity-50"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;


import React from 'react';
import { Construction, Home } from 'lucide-react';

interface LogoIconProps {
  className?: string;
  size?: number;
}

const LogoIcon: React.FC<LogoIconProps> = ({ className, size = 32 }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 blur-sm bg-cyberpunk-blue opacity-50 rounded-full" />
        <div className="relative z-10 flex items-center justify-center bg-cyberpunk-darker p-2 rounded-full border border-cyberpunk-blue/30">
          <Home
            size={size}
            className="text-cyberpunk-blue absolute transform -translate-x-1/4"
          />
          <Construction
            size={size}
            className="text-cyberpunk-yellow absolute transform translate-x-1/4"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoIcon;


import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyberpunk-darker p-6">
      <div className="glass-card p-10 rounded-xl border border-cyberpunk-blue/30 max-w-md w-full text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cyberpunk-grid opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyberpunk-blue via-cyberpunk-purple to-cyberpunk-neon"></div>
        
        <div className="relative z-10">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cyberpunk-blue/10 border border-cyberpunk-blue/30 flex items-center justify-center">
            <AlertTriangle size={40} className="text-cyberpunk-blue" />
          </div>
          
          <h1 className="text-5xl font-bold mb-4 text-gradient-blue">404</h1>
          <p className="text-xl text-gray-300 mb-8">Oops! This page doesn't exist.</p>
          
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-cyberpunk-blue text-white rounded-lg hover:bg-cyberpunk-blue/90 transition-all duration-300 shadow-lg shadow-cyberpunk-blue/20"
          >
            <Home size={18} className="mr-2" />
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

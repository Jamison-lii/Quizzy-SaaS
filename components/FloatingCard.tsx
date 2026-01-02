
import React from 'react';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <div 
      className={`glass-card rounded-2xl animate-float shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl z-20 ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        animation: 'floating 6s ease-in-out infinite'
      }}
    >
      <style>{`
        @keyframes floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
      {children}
    </div>
  );
};

export default FloatingCard;

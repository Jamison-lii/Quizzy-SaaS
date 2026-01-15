import React from 'react';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in seconds
}

const FloatingCard: React.FC<FloatingCardProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <div
      className={`glass-card rounded-2xl shadow-xl transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl z-20 ${className}`}
      style={{
        animation: `floatY 6s ease-in-out ${delay}s infinite`,
        willChange: 'transform',
      }}
    >
      <style>{`
        @keyframes floatY {
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

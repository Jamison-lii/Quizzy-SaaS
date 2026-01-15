import React from "react";

type MarqueeProps = {
  children: React.ReactNode;
  reverse?: boolean;
  speed?: "slow" | "normal";
};

export default function Marquee({ children, reverse = false, speed = "slow" }: MarqueeProps) {
  return (
    <div className="relative overflow-hidden">
      <div
        className={`
          flex w-max gap-8
          ${reverse ? "animate-marquee-reverse" : "animate-marquee"}
          ${speed === "slow" ? "marquee-slow" : "marquee-normal"}
        `}
      >
        {children}
        {children} {/* duplicate for seamless loop */}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-marquee { animation: marquee linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse linear infinite; }
        .marquee-slow { animation-duration: 30s; }
        .marquee-normal { animation-duration: 15s; }
      `}</style>
    </div>
  );
}

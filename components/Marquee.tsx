import React from "react";

type MarqueeProps = {
  children: React.ReactNode;
  reverse?: boolean;
  speed?: "slow" | "normal";
};

export default function Marquee({
  children,
  reverse = false,
  speed = "slow",
}: MarqueeProps) {
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
    </div>
  );
}

"use client"
import React from "react";

type StarBorderProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties['animationDuration'];
  }

const StarBorder = <T extends React.ElementType = "button">({
  as,
  className = "",
  color = "#FF4081",
  speed = "6s",
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button";

  return (
    <Component className={`relative inline-block py-[1px] overflow-hidden rounded-3xl ${className}`} {...rest}>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-15px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, #FF4081 , transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-15px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, #1E88E5, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="relative z-1 bg-[#e0e0e0]/5 backdrop-blur-lg text-white text-center text-[16px] py-[16px] px-[26px] rounded-3xl">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;


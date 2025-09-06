"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type TrailProps = {
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  width?: string | number;
  height?: string | number;
  color?: string; // base color of trail
  direction?: "horizontal" | "vertical";
  duration?: number; // time for one full sweep
};

const Trail: React.FC<TrailProps> = ({
  top,
  left,
  right,
  bottom,
  width = "200px",
  height = "6px",
  color = "#4D96FF",
  direction = "horizontal",
  duration = 5,
}) => {
  const trailRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!trailRef.current) return;

    const el = trailRef.current;

    // Reset position
    gsap.set(el, {
      x: direction === "horizontal" ? "-100%" : 0,
      y: direction === "vertical" ? "-100%" : 0,
    });

    // Animate across screen
    gsap.to(el, {
      x: direction === "horizontal" ? "100vw" : 0,
      y: direction === "vertical" ? "100vh" : 0,
      duration,
      ease: "linear",
      repeat: -1, // infinite loop
    });
  }, [direction, duration]);

  return (
    <div
      ref={trailRef}
      style={{
        position: "absolute",
        top,
        left,
        right,
        bottom,
        overflowY: "hidden",
        width: direction === "horizontal" ? width : "4px",
        height: direction === "vertical" ? height : "4px",
        background: `linear-gradient(${
          direction === "horizontal" ? "to right" : "to bottom"
        }, ${color}, transparent)`,
        borderRadius: "9999px",
        pointerEvents: "none",
      }}
    />
  );
};

export default Trail;

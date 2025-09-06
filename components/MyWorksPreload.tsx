"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Trail from "@/components/Trail";
import Dots from "@/components/Dots";
import React from "react";

const ServicePreload = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div className={`min-h-screen`}>
      {/* Horizontal glowing trail */}
      <div className={`relative mt-36 flex flex-col items-center gap-5`}>
        <div className="h-dvh" id="clip">
          <div
            className={`mask-clip-path absolute left-1/2 top-0 z-20 h-[50vh] w-[70vw] origin-center -translate-x-1/2 overflow-hidden rounded-3xl`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/studio.webp`}
              alt={`services`}
              className={`absolute left-0 top-0 size-full object-cover`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicePreload;

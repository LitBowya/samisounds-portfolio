"use client";

import React, { useState } from "react";
import { constants } from "@/utils/constants";
import DrumMachinePad from "@/components/DrumMachinePad";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { Typewriter } from "react-simple-typewriter";
import Dots from "@/components/Dots";
import Trail from "@/components/Trail";

gsap.registerPlugin(SplitText);

const Home = () => {
  const [showTypewriter, setShowTypewriter] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline({});
    const splitName = new SplitText(".name", {
      type: "chars",
    });
    tl.fromTo(
      ".divider",
      {
        scaleX: 0,
        transformOrigin: "center",
      },
      {
        scaleX: 1,
        duration: 1,
        ease: "elastic.inOut",
      },
    );

    tl.fromTo(
      ".greetings",
      {
        y: 50,
      },
      {
        y: 0,
        duration: 0.5,
        delay: 1,
        ease: "elastic.inOut",
      },
    );

    tl.fromTo(
      splitName.chars,
      {
        y: -150,
      },
      {
        y: 0,
        duration: 2,
        ease: "elastic.inOut",
        stagger: 0.1,
        onComplete: () => {
          setShowTypewriter(true);
        },
      },
    );
  });
  return (
    <div
      id="home"
      className={
        "h-screen flex justify-center items-center relative overflow-hidden"
      }
    >
      <Dots
        top="0px"
        left="0px"
        color="#4D96FF"
        blur="80px"
        width="150px"
        height="150px"
        bgColor="#4D96FF"
      />
      <Dots
        bottom="40px"
        right="80px"
        color="#FF6B6B"
        blur="100px"
        width="100px"
        height="300px"
        bgColor="#FF6B6B"
      />

      {/* Horizontal glowing trail */}
      <Trail
        top="80px"
        color="#FF6B6B"
        width="300px"
        height="5px"
        direction="horizontal"
        duration={10}
      />

      {/* Vertical glowing trail */}
      <Trail
        left="120px"
        color="#00C49A"
        width="5px"
        height="300px"
        direction="vertical"
        duration={12}
      />

      <Trail
        bottom="80px"
        color="#FF6B6B"
        width="300px"
        height="5px"
        direction="horizontal"
        duration={10}
      />

      {/* Vertical glowing trail */}
      <Trail
        right="120px"
        color="#00C49A"
        width="5px"
        height="500px"
        direction="vertical"
        duration={12}
      />

      <div className={""}>
        <div className={`header`}>
          <div className={"text-center"}>
            <div className={"overflow-hidden"}>
              <h6 className={"greetings py-2"}>
                {constants.homepage.greetings}
              </h6>
            </div>
            <div
              className={
                "w-[320px] h-[2px] md:w-sm lg:w-lg xl:w-xl bg-white rounded-full mx-auto divider"
              }
            />
            <div className={"overflow-hidden"}>
              <h1 className={"text-3xl lg:text-5xl xl:text-7xl name py-2"}>
                {constants.homepage.nameOfUser}
              </h1>
            </div>

            {/*Show typewriter after name finishes*/}
            {showTypewriter && (
              <p
                className={"font-bold py-5 welcome transition-all duration-150"}
              >
                <Typewriter
                  words={[`${constants.homepage.welcomeMessage}`]}
                  cursor
                  cursorStyle="|"
                  typeSpeed={120}
                  delaySpeed={1000}
                />
              </p>
            )}
          </div>
        </div>
        <DrumMachinePad animationDelay={8} />
      </div>
    </div>
  );
};
export default Home;

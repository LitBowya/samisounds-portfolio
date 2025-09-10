"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { constants } from "@/utils/constants";
import { lightenColor } from "@/utils/functions";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type DrumPad = {
  key: string;
  name: string;
  sound: string;
  url?: string;
  image?: string;
  color: string;
  soundName?: string;
};

type DrumMachinePadProps = {
  animationDelay?: number;
  onNavigate?: () => void;
};

const DrumMachinePad: React.FC<DrumMachinePadProps> = ({
  animationDelay = 0,
  onNavigate,
}) => {
  const [activePad, setActivePad] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const audioRefs = useRef<Map<string, HTMLAudioElement>>(new Map());
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Preload audio
  useEffect(() => {
    const loadAudio = async () => {
      const audioMap = new Map<string, HTMLAudioElement>();

      try {
        await Promise.all(
          constants.drumPad.map(async (pad) => {
            if (pad.sound) {
              const audio = new Audio(pad.sound);
              audio.preload = "auto";
              audio.volume = 0.8;

              return new Promise<void>((resolve) => {
                audio.addEventListener("canplaythrough", () => {
                  audioMap.set(pad.key, audio);
                  resolve();
                });

                audio.addEventListener("error", (e) => {
                  console.warn(`Failed to load audio for pad ${pad.key}:`, e);
                  resolve();
                });

                setTimeout(() => {
                  if (!audioMap.has(pad.key)) {
                    audioMap.set(pad.key, audio);
                  }
                  resolve();
                }, 3000);
              });
            }
          }),
        );

        audioRefs.current = audioMap;
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading audio files:", error);
        setIsLoading(false);
      }
    };

    loadAudio();

    return () => {
      audioRefs.current.forEach((audio) => {
        audio.pause();
        audio.src = "";
        audio.load();
      });
      audioRefs.current.clear();

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const playSound = useCallback(
    (pad: DrumPad) => {
      if (!pad.sound || isLoading) return;

      const audio = audioRefs.current.get(pad.key);
      if (!audio) return;

      try {
        audio.currentTime = 0;
        const playPromise = audio.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setActivePad(pad.key);

              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
              }

              timeoutRef.current = setTimeout(() => {
                setActivePad(null);
                timeoutRef.current = null;
              }, 150);
            })
            .catch((error) => {
              if (error.name !== "AbortError") {
                console.warn(`Audio play failed for pad ${pad.key}:`, error);
              }
            });
        }
      } catch (error) {
        console.warn(`Error playing sound for pad ${pad.key}:`, error);
      }
    },
    [isLoading],
  );

  const scrollToSection = useCallback((id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  const handlePadAction = useCallback(
    (pad: DrumPad) => {
      playSound(pad);

      if (pad.url) {
        scrollToSection(pad.url);
        onNavigate?.();
      }
    },
    [onNavigate, playSound, scrollToSection],
  );

  // Keyboard support
  useEffect(() => {
    let keyPressTimeout: NodeJS.Timeout | null = null;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (keyPressTimeout) return;

      const pad = constants.drumPad.find(
        (p) => p.key.toLowerCase() === e.key.toLowerCase(),
      );

      if (pad) {
        handlePadAction(pad);

        keyPressTimeout = setTimeout(() => {
          keyPressTimeout = null;
        }, 50);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      if (keyPressTimeout) {
        clearTimeout(keyPressTimeout);
      }
    };
  }, [handlePadAction]);

  // GSAP animation
  useGSAP(() => {
    gsap.fromTo(
      ".drum-pad-machine",
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        delay: animationDelay,
      },
    );
  }, [animationDelay]);

  return (
    <div className="flex flex-col items-center p-6 border border-white rounded-xl drum-pad-machine min-h-0">
      <h1 className="text-2xl font-bold mb-4">🎶 Drum Pad Machine</h1>

      {isLoading && (
        <div className="text-sm text-gray-400 mb-2">Loading sounds...</div>
      )}

      <div className="grid grid-cols-3 gap-4">
        {constants.drumPad.map((pad) => (
          <button
            key={pad.key}
            onClick={() => handlePadAction(pad)}
            disabled={isLoading}
            style={{
              background: `radial-gradient(circle, ${lightenColor(
                pad.color,
                40,
              )} 0%, ${pad.color} 100%)`,
            }}
            className={`hover:cursor-pointer w-20 h-20 lg:w-32 lg:h-32 rounded-2xl shadow-lg flex flex-col justify-center items-center
              text-lg font-bold transition-all duration-150 transform active:scale-95
              ${activePad === pad.key ? "text-gray-100 ring-4 ring-white scale-95" : ""}
              ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
          >
            <p className="text-xs text-gray-800 flex flex-col text-center px-1">
              {pad.name && (<span>{pad.name}</span>)}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DrumMachinePad;

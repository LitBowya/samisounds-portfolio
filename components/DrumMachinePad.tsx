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
  const [navigationMode, setNavigationMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Use refs to store audio elements and prevent recreation
  const audioRefs = useRef<Map<string, HTMLAudioElement>>(new Map());
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Preload all audio files
  useEffect(() => {
    const loadAudio = async () => {
      const audioMap = new Map<string, HTMLAudioElement>();

      try {
        await Promise.all(
          constants.drumPad.map(async (pad) => {
            if (pad.sound) {
              const audio = new Audio(pad.sound);
              audio.preload = "auto";
              audio.volume = 0.8; // Set a reasonable volume

              // Handle audio loading
              return new Promise<void>((resolve, reject) => {
                audio.addEventListener("canplaythrough", () => {
                  audioMap.set(pad.key, audio);
                  resolve();
                });

                audio.addEventListener("error", (e) => {
                  console.warn(`Failed to load audio for pad ${pad.key}:`, e);
                  resolve(); // Don't reject, just log the warning
                });

                // Fallback timeout
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

    // Cleanup function
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
        // Reset audio to beginning and play
        audio.currentTime = 0;

        // Use play() with proper error handling
        const playPromise = audio.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Audio started playing successfully
              setActivePad(pad.key);

              // Clear any existing timeout
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
              }

              // Set new timeout to clear active state
              timeoutRef.current = setTimeout(() => {
                setActivePad(null);
                timeoutRef.current = null;
              }, 150);
            })
            .catch((error) => {
              // Handle play errors gracefully
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
      if (navigationMode && pad.url) {
        scrollToSection(pad.url);
        onNavigate?.();
      } else {
        playSound(pad);
      }
    },
    [navigationMode, onNavigate, playSound, scrollToSection],
  );

  // Keyboard support with improved debouncing
  useEffect(() => {
    let keyPressTimeout: NodeJS.Timeout | null = null;

    const handleKeyPress = (e: KeyboardEvent) => {
      // Prevent rapid key presses
      if (keyPressTimeout) return;

      const pad = constants.drumPad.find(
        (p) => p.key.toLowerCase() === e.key.toLowerCase(),
      );

      if (pad) {
        handlePadAction(pad);

        // Debounce key presses
        keyPressTimeout = setTimeout(() => {
          keyPressTimeout = null;
        }, 100);
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

      {/* Toggle for Navigation Mode */}
      <div className="flex items-center gap-2 mb-4">
        <label className="font-medium">Navigation Mode</label>
        <input
          type="checkbox"
          checked={navigationMode}
          onChange={(e) => setNavigationMode(e.target.checked)}
          className="w-5 h-5 rounded-full"
        />
      </div>

      {/* Loading indicator */}
      {isLoading && (
        <div className="text-sm text-gray-400 mb-2">Loading sounds...</div>
      )}

      {/* Pads */}
      <div className="grid grid-cols-3 gap-4">
        {constants.drumPad.map((pad) => (
          <button
            key={pad.key}
            onClick={() => handlePadAction(pad)}
            disabled={isLoading && !navigationMode}
            style={{
              background: `radial-gradient(circle, ${lightenColor(
                pad.color,
                40,
              )} 0%, ${pad.color} 100%)`,
            }}
            className={`hover:cursor-pointer w-20 h-20 lg:w-32 lg:h-32 rounded-2xl shadow-lg flex flex-col justify-center items-center 
              text-lg font-bold transition-all duration-150 transform active:scale-95 
              ${activePad === pad.key ? "text-gray-100 ring-4 ring-white scale-95" : ""}
              ${isLoading && !navigationMode ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
          >
            {navigationMode ? (
              <p className="text-xs text-gray-800 text-center px-1">
                {pad.name}
              </p>
            ) : (
              <p className="text-xs text-gray-800 flex flex-col">
                <span>{pad.key}</span>
                <span>{pad.soundName}</span>
              </p>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DrumMachinePad;

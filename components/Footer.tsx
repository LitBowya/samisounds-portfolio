"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Music,
  ArrowUp,
  X,
} from "lucide-react";
import Link from "next/link"; // Import Link from next/link
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Trail from "@/components/Trail";
import Dots from "@/components/Dots";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  // GSAP animation to fade in footer elements on scroll
  useGSAP(() => {
    gsap.from(".footer-col", {
      scrollTrigger: {
        trigger: "#contact-footer",
        start: "top 85%", // Starts animation when 85% of the footer is visible
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      stagger: 0.2, // Animates each column one after another
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  // Function to smoothly scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact-footer"
      className="relative min-h-screen  text-gray-300 py-20 mt-20 border-3 border-t-yellow-400 border-r-0 border-b-0 border-l-0 flex justify-center items-center"
    >
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

      {/* Vertical glowing trail */}
      <Trail
        right="120px"
        color="#00C49A"
        width="5px"
        height="500px"
        direction="vertical"
        duration={12}
      />
      <div className={"max-width"}>
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>

        {/* Back to Top Button */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:scale-110"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand / Logo */}
          <div className="footer-col">
            <div className="flex items-center gap-3 mb-4">
              <Music className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-bold text-white">SAMI SOUNDS</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Shaping sounds into unforgettable experiences. Crafted with
              passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="hover:text-yellow-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-yellow-400 transition"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="#my-works"
                  className="hover:text-yellow-400 transition"
                >
                  My Works
                </Link>
              </li>
              <li>
                <Link
                  href="#contact-us"
                  className="hover:text-yellow-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h3 className="text-xl font-semibold text-white mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 mt-1 text-yellow-400" />
                <a
                  href="mailto:hello@samisounds.com"
                  className="group-hover:text-white transition"
                >
                  hello@samisounds.com
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 mt-1 text-yellow-400" />
                <a
                  href="tel:+233123456789"
                  className="group-hover:text-white transition"
                >
                  +233 123 456 789
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 mt-1 text-yellow-400" />
                <span className="group-hover:text-white transition">
                  Accra, Ghana
                </span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="footer-col">
            <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 hover:scale-110"
                aria-label="X social media"
              >
                <X className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative border-t border-gray-800 pt-8 mt-16 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} SamiSounds. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

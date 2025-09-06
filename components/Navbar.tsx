"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import DrumMachinePad from "@/components/DrumMachinePad";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // Function to handle closing the menu
  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <nav>
      {/* Toggle button */}
      <div className="fixed right-10 top-10 bg-white rounded-full z-30 p-2 cursor-pointer shadow-md">
        {toggle ? (
          <X color={"black"} onClick={() => setToggle(false)} />
        ) : (
          <Menu color={"black"} onClick={() => setToggle(true)} />
        )}
      </div>

      {/* Overlay only when toggle = true */}
      {toggle && (
        <div className="h-screen w-screen bg-black fixed top-0 left-0 z-20">
          <div className="h-full flex justify-center items-center">
            {/* Pass the closeMenu function as a prop */}
            <DrumMachinePad onNavigate={closeMenu} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

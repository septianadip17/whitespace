import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoMdMenu, IoMdClose, IoIosArrowDown } from "react-icons/io";

// Data menu utama
const menuItems = ["Products", "Solutions", "Resources", "Pricing"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#043873] fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4 md:px-12">
        {/* Logo */}
        <img src={logo} alt="Whitespace Logo" className="w-32" />

        {/* Menu untuk Desktop */}
        <ul className="hidden md:flex items-center gap-6 text-white">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-1 cursor-pointer hover:opacity-80"
            >
              {item} <IoIosArrowDown className="text-sm opacity-70" />
            </li>
          ))}
        </ul>

        {/* Tombol Login & Try Whitespace (Hanya Desktop) */}
        <div className="hidden md:flex gap-2">
          <button className="bg-[#FFE492] text-[#043873] text-sm px-4 py-2 rounded">
            Login
          </button>
          <button className="flex items-center gap-2 bg-[#4F9CF9] text-sm px-4 py-2 rounded">
            Try Whitespace free <IoArrowForwardSharp />
          </button>
        </div>

        {/* Hamburger Button (Hanya Mobile) */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Menu untuk Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#043873] p-4">
          <ul className="flex flex-col gap-4 text-white">
            {menuItems.map((item, index) => (
              <li key={index} className="cursor-pointer hover:opacity-80">
                {item}
              </li>
            ))}
          </ul>

          {/* Tombol Login & Try Whitespace di Mobile */}
          <div className="flex flex-col gap-2 mt-4">
            <button className="bg-[#FFE492] text-[#043873] text-sm px-4 py-2 rounded">
              Login
            </button>
            <button className="flex items-center gap-2 bg-[#4F9CF9] text-sm px-4 py-2 rounded">
              Try Whitespace free <IoArrowForwardSharp />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

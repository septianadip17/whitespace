import React from "react";
import logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="container text-white bg-[#043873]">
      <div className="flex justify-between items-center p-3">
        <div className="">
          <img src={logo} alt="logo whitespace" className="w-20" />
        </div>{" "}
        <div className="">
          <ul className="flex gap-4">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-2">
          <button className="bg-[#FFE492] text-[#043873] text-sm w-1/2 font-normal">Login</button>
          <button className="bg-[#4F9CF9] text-sm font-normal">Try Whitespace free</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

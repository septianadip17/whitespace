import React from "react";
import hero from "../assets/Hero-section.png";
import { IoArrowForwardSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <div
      className="relative flex items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        {/* Teks Hero */}
        <div className="text-white max-w-lg">
          <h1 className="text-4xl font-bold mb-4">
            Get More Done with Whitespace
          </h1>
          <p className="text-lg mb-6">
            Project management software that enables your teams to collaborate,
            plan, analyze, and manage everyday tasks.
          </p>
          <button className="flex items-center gap-2 bg-[#4F9CF9] text-sm px-4 py-2 rounded">
            Try Whitespace free <IoArrowForwardSharp />
          </button>
        </div>
      </div>
      <div className="">
        
      </div>
    </div>
  );
};

export default Hero;

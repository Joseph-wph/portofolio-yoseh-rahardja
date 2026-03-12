import { FaMicrophone } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { FaCircle } from "react-icons/fa6";
import { FaMouse } from "react-icons/fa";

const hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
      {/* Left Section */}
      <div className="font-heading text-white flex flex-col gap-3">
        <div className="border border-white w-12 h-12 rounded-full flex justify-center items-center">
          <FaMicrophone className="text-2xl text-white" />
        </div>
        <h1 className="font-bold text-[16px] ">Hi, I'm Edwin Anderson</h1>
        <p className="font-medium text-[14px] leading-relaxed">
          a frontend developer passionate about creating seamless digital
          experiences that are fast, responsive, and user-friendly.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-row items-center gap-10 h-20">
          {/* LEFT */}
          <div className="flex-1 flex flex-col font-heading text-white text-left pr-5">
            <h1 className="font-bold text-[32px]">2+</h1>
            <p className="font-semibold text-[12px]">Years Experience</p>
          </div>

          {/* SEPARATOR */}
          <Separator
            orientation="vertical"
            className="lg:hidden h-20 w-px bg-primary-300"
          />

          {/* RIGHT */}
          <div className="flex-1 flex flex-col font-heading text-white text-left pl-5">
            <h1 className="font-bold text-[32px]">99%</h1>
            <p className="font-semibold text-[12px]">Client Satisfaction</p>
          </div>
        </div>

        <div className="flex flex-row items-center h-20 gap-10">
          {/* LEFT */}
          <div className="flex-1 flex flex-col font-heading text-white text-left pr-5">
            <h1 className="font-bold text-[32px]">3</h1>
            <p className="font-semibold text-[12px]">Project Delivered</p>
          </div>

          {/* SEPARATOR */}
          <Separator
            orientation="vertical"
            className="lg:hidden h-20 w-px bg-primary-300"
          />

          {/* RIGHT */}
          <div className="flex-1 flex flex-col font-heading text-white text-left pl-5">
            <h1 className="font-bold text-[32px]">50</h1>
            <p className="font-semibold text-[12px]">Clients Worldwide</p>
          </div>
        </div>

        <div className="bg-secondary w-90 h-12 rounded-full flex flex-row justify-between items-center p-3">
          <h1 className="font-heading text-[14px] font-semibold">Contact Me</h1>
          <IoArrowForwardCircleSharp className="w-9 h-9" />
        </div>
      </div>

      {/* Middle Section */}
      <div className="relative flex flex-col justify-center items-center">
        <div className="w-36 h-9 flex flex-row justify-center items-center bg-primary-400 border border-primary-300 rounded-full p-3 gap-2 mb-15">
          <FaCircle className="w-2 h-2 text-primary-200" />
          <h1 className="font-semibold text-[12px] text-white">
            Available for Hire
          </h1>
        </div>

        {/* Image */}
        <div className="relative w-full h-105 lg:h-163 flex justify-center text-center">
          {/* Text 1 */}
          <h2 className="absolute top-2 lg:-top-63 left-12 lg:left-10 text-[64px] lg:text-[120px] text-white font-script1 italic z-30 -rotate-12">
            Junior
          </h2>

          {/* Text 2 (gold) */}
          <div className="absolute bottom-45 lg:bottom-90 flex flex-col items-center z-0">
            <h1 className="text-[102px] lg:text-[200px] font-script2 text-[#E3B04B] leading-none">
              FRONTEND
            </h1>
            <h1 className="text-[92px] lg:text-[200px] font-script2 text-[#E3B04B] leading-none">
              DEVELOPER
            </h1>
          </div>

          {/* Image */}
          <img
            src="/assets/image/person.svg"
            alt="profile"
            className="absolute inset-x-0 bottom-0 mx-auto z-10 h-120 object-bottom object-contain"
          />

          {/* Outline Text */}
          <h1 className="absolute bottom-45 lg:bottom-90 text-[92px] lg:text-[200px] font-script2 outline-text leading-none z-20 text-center">
            <br /> DEVELOPER
          </h1>
        </div>
        {/* ===== SCROLL DOWN ===== */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 text-white flex items-center gap-2 text-sm opacity-80">
        <span>Scroll Down</span>
        <div className="w-4 h-6 border border-white rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
      </div>
    </div>
    
  );
};

export default hero;

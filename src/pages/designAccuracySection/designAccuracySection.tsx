"use client";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";
import { Separator } from "@/components/ui/separator";

const designAccuracySection = () => {
  return (
    <div className="w-full mx-auto my-5 flex flex-col justify-center items-center gap-5 font-heading p-5">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-25">
        <div className="flex flex-col justify-center items-center lg:items-start gap-4 lg:w-250 mx-2 px-3">
          <h1 className="font-bold text-center text-[32px]">
            Design to <span className="text-primary-200">Code Accuracy</span>
          </h1>
          <p className="text-[20px] leading-9 lg:w-230">
            We translated design mockups into pixel-perfect, responsive
            components, ensuring a smooth user experience across all devices.
          </p>
        </div>
        <div className="border border-slate-400 rounded-full w-100 h-18 lg:w-50 lg:h-15 flex flex-row justify-between items-center px-3 text-black mx-5">
          <h1 className="font-semibold text-[20px] ml-3">See All</h1>
          <IoArrowForwardCircleSharp className="w-13 h-13" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 mx-5 px-5 items-center justify-center">
        <div>
          <div className="bg-gray-100 w-100 h-110 rounded-4xl p-4 relative">
            <div className="absolute top-5 -left-8 px-5 py-2">
              <img
                src="/assets/portofolio/diskonContainer.svg"
                alt="container"
                className="w-30 h-auto"
              />
            </div>
            <img
              src="/assets/portofolio/portofolio1.svg"
              alt="portofolio1"
              className="z-10 h-110 w-auto"
            />
          </div>
          <div className="bg-gray-100 w-100 h-30 rounded-4xl p-4 flex flex-col gap-5">
            <h1 className="font-bold text-[20px]">Portofolio 1</h1>
            <div className="relative w-full flex items-center">
              <Separator orientation="horizontal" className="w-full" />
              <div className="absolute right-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary-300">
                <FiArrowRight className="text-white w-8 h-8" />
              </div>
            </div>
            <p className="text-[15px]">Web Development</p>
          </div>
        </div>

        <div>
          <div className="bg-gray-100 w-100 h-110 rounded-4xl p-4 relative">
            <div className="absolute top-5 -left-8 px-5 py-2">
              <img
                src="/assets/portofolio/diskonContainer.svg"
                alt="container"
                className="w-30 h-auto"
              />
            </div>
            <img
              src="/assets/portofolio/portofolio2.svg"
              alt="portofolio1"
              className="z-10 h-110 w-auto"
            />
          </div>
          <div className="bg-gray-100 w-100 h-30 rounded-4xl p-4 flex flex-col gap-5">
            <h1 className="font-bold text-[20px]">Portofolio 2</h1>
            <div className="relative w-full flex items-center">
              <Separator orientation="horizontal" className="w-full" />
              <div className="absolute right-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary-300">
                <FiArrowRight className="text-white w-8 h-8" />
              </div>
            </div>
            <p className="text-[15px]">Web Development</p>
          </div>
        </div>

        <div>
          <div className="bg-gray-100 w-100 h-110 rounded-4xl p-4 relative">
            <div className="absolute top-5 -left-8 px-5 py-2">
              <img
                src="/assets/portofolio/diskonContainer.svg"
                alt="container"
                className="w-30 h-auto"
              />
            </div>
            <img
              src="/assets/portofolio/portofolio3.svg"
              alt="portofolio1"
              className="z-10 h-110 w-auto"
            />
          </div>
          <div className="bg-gray-100 w-100 h-30 rounded-4xl p-4 flex flex-col gap-5">
            <h1 className="font-bold text-[20px]">Portofolio 3</h1>
            <div className="relative w-full flex items-center">
              <Separator orientation="horizontal" className="w-full" />
              <div className="absolute right-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary-300">
                <FiArrowRight className="text-white w-8 h-8" />
              </div>
            </div>
            <p className="text-[15px]">Web Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default designAccuracySection;
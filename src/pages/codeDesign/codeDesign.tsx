"use client";
import { IoMdArrowForward } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";
import Carousel from "@/components/carousel/carousel";

const codeDesign = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-5 bg-linear-to-t from-pink-50 to-white font-heading my-10">
      <div className="flex flex-col font-heading p-2 mx-auto gap-3">
        <h1 className="text-center font-bold text-[28px]">
          Code, Design, and Everything in Between
        </h1>
        <p className="text-center font-medium text-[14px] leading-relaxed">
          These are the technologies that power my workflow and bring ideas to
          life.
        </p>
      </div>

      <section>
        <Carousel />
      </section>
    </div>
  );
};

export default codeDesign;

"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function TechCarousel() {
  const techStack = [
    {
      name: "HTML",
      image: "/assets/tech-logo/html.svg",
      desc: "Crafting semantic, accessible HTML structures.",
      variant: "secondary",
    },
    {
      name: "CSS",
      image: "/assets/tech-logo/css.svg",
      desc: "Crafting semantic, accessible HTML structures.",
      variant: "outlined",
    },
    {
      name: "Javascript",
      image: "/assets/tech-logo/javascript.svg",
      desc: "Crafting semantic, accessible HTML structures.",
      variant: "secondary",
    },
    {
      name: "React",
      image: "/assets/tech-logo/react.svg",
      desc: "Crafting semantic, accessible HTML structures.",
      variant: "outlined",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        slidesToScroll: 2,
      }}
      className="w-full max-w-4xl mx-auto"
    >
      <CarouselContent className="-ml-4">
        {techStack.map((tech, index) => (
          <CarouselItem key={index} className="basis-1/2">
            <div
              className={`
                w-43 h-70 
                flex flex-col justify-center items-center gap-6 
                px-2 py-2 
                rounded-full
                ${
                  tech.variant === "outlined"
                    ? "bg-neutral-25 border border-neutral-300"
                    : "bg-secondary"
                }
              `}
            >
              {/* ICON */}
              <div
                className={`w-16 h-16 min-w-16 min-h-16 rounded-full flex items-center justify-center shadow-sm ${
                  tech.name === "CSS" ? "bg-neutral-100" : "bg-white"
                }`}
              >
                <img src={tech.image} alt={tech.name} className="w-9 h-9" />
              </div>

              {/* TEXT */}
              <div className="flex flex-col items-center gap-4 text-center">
                <h1 className="font-bold text-[16px]">{tech.name}</h1>
                <p className="text-[14px] leading-relaxed text-slate-600">
                  {tech.desc}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Arrow bawah */}
      <div className="flex justify-center gap-6 mt-10">
        <CarouselPrevious className="static h-14 w-14 rounded-full border border-slate-300 bg-transparent" />
        <CarouselNext className="static h-14 w-14 rounded-full border border-slate-300 bg-transparent" />
      </div>
    </Carousel>
  );
}

export default TechCarousel;

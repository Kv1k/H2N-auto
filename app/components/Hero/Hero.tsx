"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Motor from "@/public/images/b1.png";
import Carrosserie from "@/public/images/b2.png";
import Image from "next/image";
import { DotButton, useDotButton } from "./CarouselDotButton";

const Hero = () => {
  // Initialisation d'Embla Carousel avec le plugin Autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  ]);

  // Gestion des dots avec le hook personnalisé
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="relative">
      {/* Carousel */}
      <div className="overflow-hidden w-full h-[88vh] z-10" ref={emblaRef}>
        <div className="flex">
          {/* Slide 1 */}
          <div className="flex-[0_0_100%] w-full h-[88vh] flex items-center justify-center flex-col bg-[#061D56] clip_path">
            <div className="w-[80%] grid grid-rows-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
              <Image src={Motor} alt="burger" className="hidden md:block" />
              <div>
                <h1 className="text-[30px] md:text-[40px] font-semibold text-yellow-400">
                  H2N Automobile
                </h1>
                <div className="flex md:block">
                  <div>
                    <h1 className="text-[32px] md:text-[55px] lg:text-[73px] leading-[3rem] md:leading-[4rem] lg:leading-[5rem] uppercase text-white font-bold">
                      Atelier <br /> Mécanique
                    </h1>
                    <p className="mt-[1rem] text-white text-opacity-70 text-[14px] md:text-[18px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sunt temporibus dolor corporis veniam magnam quos placeat
                      saepe consectetur! Deleniti assumenda vel at, id corrupti
                      dolore.
                    </p>
                    <button className="mt-[2rem] py-3 px-[1rem] md:px-8 text-[12px] sm:text-[14px] bg-[#4DBEE3] transition-all duration-200 hover:bg-[#35839d] flex items-center rounded-md space-x-2 text-white mr-0 md:mr-6">
                      <span className="font-bold">VOIR LES TARIFS</span>
                    </button>
                  </div>
                  <Image
                    src={Motor}
                    alt=""
                    className="block md:hidden w-[300px] max-h-[285px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="flex-[0_0_100%] w-full h-[88vh] flex items-center justify-center flex-col bg-red-950 clip_path">
            <div className="w-[80%] grid grid-rows-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
              <Image src={Carrosserie} alt="" className="hidden md:block" />
              <div>
                <h1 className="text-[30px] md:text-[40px] font-semibold text-yellow-400">
                  H2N Automobile
                </h1>
                <div className="flex md:block">
                  <div>
                    <h1 className="text-[32px] md:text-[55px] lg:text-[73px] leading-[3rem] md:leading-[4rem] lg:leading-[5rem] uppercase text-white font-bold">
                      Atelier <br /> Carrosserie
                    </h1>
                    <p className="mt-[1rem] text-white text-opacity-70 text-[14px] md:text-[18px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sunt temporibus dolor corporis veniam magnam quos placeat
                      saepe consectetur! Deleniti assumenda vel at, id corrupti
                      dolore.
                    </p>
                    <button className="mt-[2rem] py-3 px-[1rem] md:px-8 text-[12px] sm:text-[14px] bg-[#061D56] transition-all duration-200 hover:bg-[#111b35] flex items-center rounded-md space-x-2 text-white mr-0 md:mr-6">
                      <span className="font-bold">VOIR LES TARIFS</span>
                    </button>
                  </div>
                  <Image
                    src={Carrosserie}
                    alt="burger"
                    className="block md:hidden w-[300px] max-h-[245px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {scrollSnaps.map((_, index) => (
            <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`w-3 h-3 rounded-full ${
                selectedIndex === index ? "bg-yellow-400" : "bg-gray-300"
            }`}
            />
        ))}
        </div>

    </div>
  );
};

export default Hero;

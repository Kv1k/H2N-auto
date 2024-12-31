"use client";
import React, { useState, useEffect } from "react";
import "./tarifs.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";

import { RiRoadsterFill } from "react-icons/ri";
import { FaOilCan } from "react-icons/fa";
import { PiTireFill } from "react-icons/pi";
import { GiAutoRepair } from "react-icons/gi";

import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";

import Image from "next/image";
const Tarifs = ({ id }: { id?: string }) => {

  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const priceData = [
    {
      id: 1,
      icon: <RiRoadsterFill className="w-[2rem] h-[2rem] text-[#0C318C]" />,
      title: "Carburator",
      text: "Services for carburators with advanced tuning.",
      image: "/images/b1.png",
    },
    {
      id: 2,
      icon: <FaOilCan className="w-[2rem] h-[2rem] text-[#0C318C]" />,
      title: "Oil Change",
      text: "High-quality oil changes for your vehicle.",
      image: "/images/b2.png",
    },
    {
      id: 3,
      icon: <PiTireFill className="w-[2rem] h-[2rem] text-[#0C318C]" />,
      title: "Tire Replacement",
      text: "Durable tire replacements at affordable prices.",
      image: "/images/b11.png",
    },
    {
      id: 4,
      icon: <GiAutoRepair className="w-[2rem] h-[2rem] text-[#0C318C]" />,
      title: "Auto Repair",
      text: "Comprehensive auto repair services.",
      image: "/images/b2.png",
    },
  ];

  // Synchronize the active slide index manually
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselApi) {
        const currentIndex = Math.round(carouselApi.scrollProgress() * (priceData.length - 1));
        setActiveMobileIndex(currentIndex);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [carouselApi]);

  const handlePriceTriggerClick = (id: number) => {
    
    const index = priceData.findIndex((item) => item.id === id);
    if (index >= 0) {
      carouselApi?.scrollTo(index);
      setActiveIndex(index);
      setActiveMobileIndex(index);
    }
  };

  return (
    <section id={id}>
      <div className="pb-[3rem] flex flex-col justify-center items-center pt-[1rem]">
        <h1 className="heading pt-[5rem] text-[40px]">
          Nos <span className="text-[#0C318C]">Tarifs</span>
        </h1>
        <div className="w-[81vw] lg:w-[55vw] mt-[2rem]">
          <p className="text-black text-[19px] text-opacity-70 text-center">
            Découvrez nos services de qualité à des prix compétitifs.
          </p>
        </div>

        {/* Desktop Price Triggers */}
        <div className="hidden lg:flex flex-row gap-7 mt-[4rem] w-full justify-center px-[8rem]">
          {priceData.map((data, idx) => (
            <div
              key={data.id}
              className={`priceTrigger !w-[25%] ${
                activeIndex === idx ? "active" : ""
              }`}
              onClick={() => handlePriceTriggerClick(data.id)}
            >
              <div className="inside">
                <div className="w-full h-[79%] flex flex-col justify-center items-center">
                  {data.icon}
                  <p className="text-[16px] font-semibold">{data.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="flex lg:hidden w-[70vw] mt-9 justify-center">
          <div className="flex items-center">
            {/* Previous Button */}
            <button
              onClick={() => {
                carouselApi?.scrollPrev();
                setActiveMobileIndex((prev) => (prev - 1 + priceData.length) % priceData.length);
              }}
              className="mr-4 mb-[15px]"
            >
              <HiChevronLeft size={30} />
            </button>
          </div>
          <div className="block lg:hidden w-[80%] overflow-hidden">
            <Carousel
              setApi={(api) => setCarouselApi(api)} // Get CarouselApi instance
              className="carousel !w-full flex"
            >
              <CarouselContent className="!ml-0 space-x-3">
                {priceData.map((data, idx) => (
                  <CarouselItem
                    key={idx}
                    className={`priceTrigger active`}
                    onClick={() => handlePriceTriggerClick(data.id)}
                  >
                    <div className="inside">
                      <div className="w-full h-[79%] flex flex-col justify-center items-center">
                        {data.icon}
                        <p className="text-[16px] font-semibold">{data.title}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="flex items-center">
            {/* Next Button */}
            <button
              onClick={() => {
                carouselApi?.scrollNext();
                setActiveMobileIndex((prev) => (prev + 1) % priceData.length);
              }}
              className="ml-4  mb-[15px]"
            >
              <HiChevronRight size={30} />
            </button>
          </div>
        </div>

        {/* Content Price Desktop */}
        <div className="hidden md:flex w-full h-[50vh] px-[8rem]">
          <div className="w-[40%] h-full p-0 mt-[-10px]">
            <Image
              src={priceData[activeIndex]?.image}
              alt={priceData[activeIndex]?.title}
              className="w-full"
              width={500}
              height={300}
            />
          </div>
          <div className="content w-[60%] px-9">
            <p className="mt-[1rem] text-black text-[19px] text-opacity-70 text-center">
              {priceData[activeIndex]?.text}
            </p>
          </div>
        </div>

        {/* Content Price Mobile */}
        <div className="block md:hidden w-full h-[50vh] px-[8rem]">
          
          <div className="content w-[60%] px-9">
            <p className="mt-[1rem] text-black text-[19px] text-opacity-70 text-center">
              {priceData[activeMobileIndex]?.text}
            </p>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default Tarifs;

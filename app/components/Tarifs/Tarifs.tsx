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
import { PiTireFill } from "react-icons/pi";
import { GiAutoRepair } from "react-icons/gi";
import { PiPaintBucketFill } from "react-icons/pi";

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
      title: "Carrosserie",
      text: ["Opérations courantes (Ferrage et sellerie)", "Opérations complexes (Redressage)","Opérations haute technologie (Travaux sur marbre)"],
      price:[["70,00 € HT", "84,00 € TTC"],["70,00 € HT", "84,00 € TTC"],["78,00 € HT", "93,60 € TTC"]],
      image: "/images/b2.png",
    },
    {
      id: 2,
      icon: <PiPaintBucketFill className="w-[2rem] h-[2rem] text-[#0C318C]" />,
      title: "Peinture",
      text: ["Opaque","Vernie", "Nacrée"],
      price:[["55,00 € HT", "66,00 € TTC"],["55,00 € HT", "66,00 € TTC"],["65,00 € HT", "78,00 € TTC"]],
      image: "/images/pistolet-peinture.jpg",
    },
    {
      id: 3,
      icon: <PiTireFill className="w-[2rem] h-[2rem] text-[#0C318C]" />,
      title: "Mécanique courante",
      text: ["Opérations courantes (Régime générale)"],
      price:[["55,00 € HT", "66,00 € TTC"]],

      image: "/images/pneu.png",
    },
    {
      id: 4,
      icon: <GiAutoRepair className="w-[2rem] h-[2rem] text-[#0C318C]" />,
      title: "Mécanique complexe",
      text: ["Opérations complexes (Régime Optionnel)","Opérations Haute Technicité"],
      price:[["55,00 € HT", "66,00 € TTC"],["65,00 € HT", "78,00 € TTC"]],
      image: "/images/b1.png",
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
        <div className="hidden md:flex w-[94vw] h-[50vh] px-[8rem]">
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
            <table className="w-full border-collapse mt-[1rem]">
              <thead>
                <tr className="border-b">
                  <th className="text-left text-[18px] pb-2">
                    {priceData[activeIndex]?.title === "Peinture" ? "Ingrédients" : "Description"}
                  </th>
                  <th className="text-center text-[18px] pb-2">Prix HT</th>
                  <th className="text-center text-[18px] pb-2">Prix TTC</th>
                </tr>
              </thead>
              <tbody>
                {priceData[activeIndex]?.text.map((desc, i) => (
                  <tr key={i} className="border-b">
                    <td className="py-2">{desc}</td>
                    <td className="text-center py-2">{priceData[activeIndex]?.price[i][0]}</td>
                    <td className="text-center py-2">{priceData[activeIndex]?.price[i][1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Ajout du tableau spécifique pour "Peinture" */}
            {priceData[activeIndex]?.title === "Peinture" && (
              <table className="w-full border-collapse mt-[1rem]">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-semibold">Peinture</td>
                    <td className="text-center py-2">70,00 € HT</td>
                    <td className="text-center py-2">84,00 € TTC</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Content Price Mobile */}
        <div className="block md:hidden w-full px-[2rem]">
          <table className="w-full border-collapse mt-[1rem]">
            <thead>
              <tr className="border-b">
                <th className="text-left text-[16px] pb-2">
                  {priceData[activeMobileIndex]?.title === "Peinture" ? "Ingrédients" : "Description"}
                </th>
                <th className="text-center text-[16px] pb-2">HT</th>
                <th className="text-center text-[16px] pb-2">TTC</th>
              </tr>
            </thead>
            <tbody>
              {priceData[activeMobileIndex]?.text.map((desc, i) => (
                <tr key={i} className="border-b">
                  <td className="py-2">{desc}</td>
                  <td className="text-center py-2">{priceData[activeMobileIndex]?.price[i][0]}</td>
                  <td className="text-center py-2">{priceData[activeMobileIndex]?.price[i][1]}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Ajout du tableau spécifique pour "Peinture" en mobile */}
          {priceData[activeMobileIndex]?.title === "Peinture" && (
            <table className="w-full border-collapse mt-[1rem]">
              <tbody>
                <tr className="border-b">
                  <td className="py-2  font-semibold">Peinture</td>
                  <td className="text-center py-2">70,00 € HT</td>
                  <td className="text-center py-2">84,00 € TTC</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>

      </div>
    </section>
    
  );
}

export default Tarifs;

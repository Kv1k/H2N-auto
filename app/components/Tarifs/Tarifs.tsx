"use client"
import React, { useState, useRef } from 'react';
import "./tarifs.css";
import Carousel from "react-multi-carousel";

import { RiRoadsterFill } from "react-icons/ri";
import { FaOilCan } from "react-icons/fa";
import { PiTireFill } from "react-icons/pi";
import { GiAutoRepair } from "react-icons/gi";

import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";


import Image from 'next/image';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 1,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 1, // Deux éléments visibles en mode tablette
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1, // Un élément visible en mode mobile
        slidesToSlide: 1, 
        partialVisibilityGutter: 30, // Optionnel : espace entre les éléments
    },
};


function Tarifs() {
    const slider = useRef(null);
    // Configuration des données pour chaque priceTrigger
    const priceData = [
        {
            id: 1,
            icon: <RiRoadsterFill className="w-[2rem] h-[2rem] text-[#0C318C]" />,
            title: "Carburator",
            text: "Text for PriceTrigger 1: Services for carburators with advanced tuning.",
            image: "/images/b1.png", // Utilisation d'un chemin dynamique pour les images
        },
        {
            id: 2,
            icon: <FaOilCan className="w-[2rem] h-[2rem] text-[#0C318C]" />,
            title: "Oil Change",
            text: "Text for PriceTrigger 2: High-quality oil changes for your vehicle.",
            image: "/images/b2.png",
        },
        {
            id: 3,
            icon: <PiTireFill className="w-[2rem] h-[2rem] text-[#0C318C]" />,
            title: "Tire Replacement",
            text: "Text for PriceTrigger 3: Durable tire replacements at affordable prices.",
            image: "/images/b11.png",
        },
        {
            id: 4,
            icon: <GiAutoRepair className="w-[2rem] h-[2rem] text-[#0C318C]" />,
            title: "Auto Repair",
            text: "Text for PriceTrigger 4: Comprehensive auto repair services.",
            image: "/images/b2.png",
        },
    ];

    // State pour suivre le priceTrigger actif
    const [activePriceTrigger, setActivePriceTrigger] = useState(1);

    // Gestion du clic sur un priceTrigger
    const handlePriceTriggerClick = (id) => {
        setActivePriceTrigger(id);
    };

    const handleSlideChange = (state) => {
        const currentIndex = state.currentSlide; // Index du slide visible
        const newActiveId = priceData[currentIndex]?.id; // Trouver l'ID de l'élément visible
        if (newActiveId) {
            setActivePriceTrigger(newActiveId);
        }
       
    };

    // Trouver les données associées à l'ID actif
    const activeData = priceData.find((data) => data.id === activePriceTrigger);

    return (
        <div className="pb-[3rem] flex flex-col justify-center items-center pt-[1rem]">
            <h1 className="heading pt-[5rem] text-[40px]">
                Nos <span className="text-[#0C318C]">Tarifs</span>
            </h1>
            <div className="w-[81vw] lg:w-[55vw]">
                <p className="mt-[1rem] text-black text-[19px] text-opacity-70 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugiat minus, recusandae odio architecto dolore a quidem iste obcaecati aliquid repellat aspernatur praesentium distinctio unde.
                </p>
            </div>

            <div className="hidden lg:flex flex-row gap-7 mt-12 w-full justify-center px-[12rem]">
                {/* PriceTriggers */}
                {priceData.map((data) => (
                    <div
                        key={data.id}
                        className={`priceTrigger !w-[25%] ${activePriceTrigger === data.id ? 'active' : ''}`} // Classe active pour styliser
                        onClick={() => handlePriceTriggerClick(data.id)} // Détecte le clic
                    >
                        <div className="inside">
                            <div className="w-full h-[79%] flex flex-col justify-center items-center">
                                {data.icon} {/* Affichage de l'icône */}
                                <p className="title-price">{data.title}</p> {/* Affichage du titre */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex lg:hidden  w-[70vw] mt-9 justify-center">
                <div className='flex flex-col justify-center h-[65px]'>
                    <button onClick={() => slider?.current?.previous()} className="mr-4">
                        <HiChevronLeft size={30}/>
                    </button>
                </div>
                <div className="block lg:hidden w-[80%]  overflow-hidden">
                

                    {/* Carousel */}
                    <Carousel
                        responsive={responsive}
                        arrows={false}
                        ref={slider}
                        
                        partialVisible={false}
                        afterChange={(previousSlide, { currentSlide }) =>
                            handleSlideChange({ previousSlide, currentSlide })
                        }
                        beforeChange={(nextSlide) => {
                            handleSlideChange(nextSlide);
                        }}
                    >
                        {priceData.map((data, idx) => (
                            <div
                                key={idx}
                                className={`priceTrigger ${data.id == activePriceTrigger ? "active" : ""}`}
                                onClick={() => handlePriceTriggerClick(data.id)}
                            >
                                <div className="inside">
                                    <div className="w-full h-[79%] flex flex-col justify-center items-center">
                                        {data.icon}
                                        <p className="title-price">{data.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>

                
                </div>
                <div className='flex flex-col justify-center h-[65px]'>
                    <button onClick={() => slider?.current?.next()} className="ml-4">
                        <HiChevronRight size={30}/>
                    </button>
                </div>

            </div>
           
           
            
            <div className="hidden lg:flex w-full h-[50vh] px-[12rem]">
                {/* Image */}
                <div className="w-[40%] h-full p-0 mt-[-10px]">
                    <Image src={activeData.image} alt={activeData.title} className="w-full" width={500} height={300} />
                </div>

                {/* Texte */}
                <div className="content w-[60%] px-9">
                    <p className="mt-[1rem] text-black text-[19px] text-opacity-70 text-center">
                        {activeData.text}
                    </p>
                </div>
            </div>
            <div className="block lg:hidden content w-[60%] px-9">
                    <p className="mt-[1rem] text-black text-[19px] text-opacity-70 text-center">
                        {activeData.text}
                    </p>
                </div>
        </div>
    );
}

export default Tarifs;

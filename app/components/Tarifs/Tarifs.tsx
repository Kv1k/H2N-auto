"use client"
import React, { useState } from 'react';
import "./tarifs.css";

import { RiRoadsterFill } from "react-icons/ri";
import { FaOilCan } from "react-icons/fa";
import { PiTireFill } from "react-icons/pi";
import { GiAutoRepair } from "react-icons/gi";

import Image from 'next/image';

function Tarifs() {
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

            <div className="flex flex-row gap-7 mt-12 w-full justify-center px-[12rem]">
                {/* PriceTriggers */}
                {priceData.map((data) => (
                    <div
                        key={data.id}
                        className={`priceTrigger ${activePriceTrigger === data.id ? 'active' : ''}`} // Classe active pour styliser
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

            <div className="flex w-full h-[50vh] mt-6">
                {/* Image */}
                <div className="w-[40%] h-full p-0 mt-[-80px]">
                    <Image src={activeData.image} alt={activeData.title} className="w-full" width={500} height={300} />
                </div>

                {/* Texte */}
                <div className="content w-[60%] px-9">
                    <p className="mt-[1rem] text-black text-[19px] text-opacity-70 text-center">
                        {activeData.text}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Tarifs;

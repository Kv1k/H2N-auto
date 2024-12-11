"use client"

import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Motor from "@/public/images/b1.png"
import Carrosserie from "@/public/images/b2.png"

import Image from 'next/image'

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
        slidesToSlide: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const Hero = () => {
  return (
    <Carousel 
      additionalTransfrom={0} 
      arrows={false} 
      autoPlay={true} 
      autoPlaySpeed={4000} 
      centerMode={false} 
      infinite
      responsive={responsive} 
      itemClass='item' 
      showDots={true}
    >

      <div className='w-[100%] h-[88vh] flex items-center justify-center flex-col bg-[#061D56] clip_path '>
        {/* Contenu du carousel */}
        <div className='w-[80%] grid grid-rows-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto '>
            <Image src={Motor} alt="burger" className='hidden md:block'/>
            <div>
                <h1 className='text-[30px] md:text-[40px] font-semibold text-yellow-400'>
                    H2N Automobile
                </h1>
                <div className='flex md:block'>
                    <div>
                        <h1 className='text-[32px]  md:text-[55px] lg:text-[90px]  leading-[2rem] md:leading-[4rem] lg:leading-[5rem] uppercase text-white font-bold'> 
                            Atelier <br/> Mecanique
                        </h1>
                        <p className='mt-[1rem] text-white text-opacity-70 text-[14px] md:text-[18px]'>
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Sunt temporibus dolor corporis 
                            veniam magnam quos placeat saepe consectetur! Deleniti assumenda vel at, id corrupti dolore.
                        </p>
                        <button className='mt-[2rem] py-3 px-[1rem] md:px-8 text-[14px] sm:text-[16px] bg-[#4DBEE3]
                        transition-all duration-200 hover:bg-[#35839d] flex items-center rounded-md space-x-2 text-white  mr-0 md:mr-6'>
                            
                            <span className='font-bold'> VOIR LES TARIFS</span>
                        </button>
                    </div>
                    
                    
                    <Image src={Motor} alt="" className='block md:hidden w-[300px] max-h-[285px] '/>
                </div>
              
               
            </div>

        </div>
      </div>
      <div className='w-[100%] h-[88vh] flex items-center justify-center flex-col bg-red-950 clip_path '>
        {/* Contenu du carousel */}
        <div className='w-[80%] grid grid-rows-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto '>
            <Image src={Carrosserie} alt="" className='hidden md:block'/>
            <div>
                <h1 className='text-[30px]  md:text-[40px] font-semibold text-yellow-400'>
                    H2N Automobile
                </h1>
                <div className='flex md:block'>
                    <div>
                        <h1 className='text-[32px]  md:text-[55px] lg:text-[90px]  leading-[2rem] md:leading-[4rem] lg:leading-[5rem] uppercase text-white font-bold'> 
                        Atelier <br/> Carrosserie
                        </h1>
                        <p className='mt-[1rem] text-white text-opacity-70 text-[14px] md:text-[18px]'>
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Sunt temporibus dolor corporis 
                            veniam magnam quos placeat saepe consectetur! Deleniti assumenda vel at, id corrupti dolore.
                        </p>
                        <button className='mt-[2rem] py-3 px-[1rem] md:px-8 text-[14px] sm:text-[16px] bg-[#061D56]
                        transition-all duration-200 hover:bg-[#111b35] flex items-center rounded-md space-x-2 text-white  mr-0 md:mr-6'>
                            
                            <span className='font-bold'>VOIR LES TARIFS</span>
                        </button>
                    </div>
                    
                    
                    <Image src={Carrosserie} alt="burger" className='block md:hidden w-[300px] max-h-[245px]'/>
                </div>
              
               
            </div>

        </div>
      </div>
    </Carousel>
  )
}

export default Hero

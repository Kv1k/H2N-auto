import React from 'react'
import Image from 'next/image'
import GarageVector from '@/public/images/garage.svg'
import { HiMiniClock } from "react-icons/hi2";
import { HiCalendar } from "react-icons/hi";

const Garage = () => {
  return (
    <div className='pt-[8rem] pb-[3rem]'>
      <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]'>
        <div>
            <Image src={GarageVector} alt='Garage'/>
        </div>
        <div className='ml-[1rem]'>
            <h1 className='text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem] text-black uppercase'>
                Your <span className='text-[#0C318C]'>Favorite Garage</span> On the way
            </h1>
            <p className='mt-[2rem] text-black text-[17px] text-opacity-70'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium impedit distinctio asperiores non unde laboriosam voluptas quis modi consequatur, tenetur, iure illo quam eaque provident libero aut eius nostrum et!</p>
            <div className='flex items-center space-x-3 mt-[2rem]'>
                <HiCalendar className='w-[2rem] h-[2rem] text-[#0C318C]'/>
                <h1 className='text-[18px] text-black font-medium'>Ouvert du lundi au mardi</h1>
            </div>   
            <div className='flex items-center space-x-3 mt-[1rem]'>
                <HiMiniClock className='w-[2rem] h-[2rem] text-[#0C318C]'/>
                <h1 className='text-[18px] text-black font-medium'>9:00-12:00, 14:00-18:00</h1>
            </div>   
             
        </div>
      </div>
    </div>
  )
}

export default Garage

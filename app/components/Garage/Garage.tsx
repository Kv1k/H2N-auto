import React from 'react'
import Image from 'next/image'
import GarageVector from '@/public/images/garage.svg'
import { HiMiniClock } from "react-icons/hi2";
import { HiCalendar } from "react-icons/hi";

const Garage = ({ id }: { id?: string }) => {

  return (
    <section id={id}>
      <div className='pt-[8rem] pb-[3rem]'>
        <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]'>
          <div>
              <Image src={GarageVector} alt='Garage'/>
          </div>
          <div className='ml-[1rem]'>
              <h1 className='text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem] text-black uppercase'>
                Votre Garage, Toujours à  <span className='text-[#0C318C]'>Portée de Route</span>
              </h1>
              <p className='mt-[2rem] text-black text-[17px] text-opacity-70'>
                Situé au Crès, notre garage est idéalement placé pour vous offrir un service rapide et accessible. <br /> Que vous soyez en voiture ou en transports en commun, vous nous trouverez facilement.
                 <br /> Nous sommes à proximité de l&apos;arrêt de tram Jacou et de Via Domitia, et à seulement 
                 5 minutes à pied de l&apos;arrêt de bus Sauvagine (ligne 30, direction Maumarin). <a 
                href="https://www.google.com/maps/place/H2N+Automobile/@43.6615104,3.9294953,16z/data=!3m1!4b1!4m6!3m5!1s0x12b6a669512ef2db:0xae3ba34e3cd8763!8m2!3d43.6615104!4d3.9320702!16s%2Fg%2F1ygbb7rxv?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline text-blue-300"
              >
                 Voir sur Google Maps
              </a>
              </p>
              <div className='flex items-center space-x-3 mt-[2rem]'>
                  <HiCalendar className='w-[2rem] h-[2rem] text-[#0C318C]'/>
                  <h1 className='text-[18px] text-black font-medium'>Ouvert du lundi au vendredi</h1>
              </div>   
              <div className='flex items-center space-x-3 mt-[1rem]'>
                  <HiMiniClock className='w-[2rem] h-[2rem] text-[#0C318C]'/>
                  <h1 className='text-[18px] text-black font-medium'>9:00-12:00, 14:00-18:00</h1>
              </div>   
          </div>
        </div>
      </div>
    </section>
  )
}

export default Garage

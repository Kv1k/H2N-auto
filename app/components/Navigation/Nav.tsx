import Link from 'next/link';
import React from 'react'
import { IoBicycle, IoPhoneLandscape } from "react-icons/io5";
import { FaCar, FaPhone} from "react-icons/fa6"; 
import { HiBars3BottomRight } from "react-icons/hi2";

interface Props {
    openNav: ()=> void;

}

const Nav = ({openNav}:Props) => {
  return (
    <div className=" h-[12vh] bg-white">
        <div className='w-[95%] mx-auto flex h-[100%] items-center justify-between'>
            <div className='flex items-center space-x-2'>
                <FaCar className='w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-[#4DBEE3]'/>
                <h1 className='text-[20px] sm:text-[30px] font-semibold'>H2N Automobile</h1>
            </div>

            <ul className='hidden lg:flex items-center space-x-10'>
                <li className='text-[20px] font-medium hover:text-[#4DBEE3]'>
                    <Link href="/">Boite de vitesse</Link>
                </li>
                <li className='text-[20px] font-medium hover:text-[#4DBEE3]'>
                    <Link href="/">Prestations</Link>
                </li>
                <li className='text-[20px] font-medium hover:text-[#4DBEE3]'>
                    <Link href="/">Horaires</Link>
                </li>
                <li className='text-[20px] font-medium hover:text-[#4DBEE3]'>
                    <Link href="/">Tarifs</Link>
                </li>
               
                
            </ul>
            <div className='flex items-center space-x-4'>
                <button className='hidden lg:flex px-6 py-2 sm:py-3 sm:px-8 text-[14px] sm:text-[16px] bg-[#061D56]
                transition-all duration-200 hover:bg-[#4DBEE3]  items-center rounded-md space-x-2 text-white  mr-6'>
                    <span>
                        <FaPhone className='w-[1rem] h-[1rem] sm:w-[1.2rem] sm:h-[1.2rem] mr-2'/>
                    </span>
                    <span className='font-bold'> Contactez-nous</span>
                </button>
                <HiBars3BottomRight onClick={openNav} className='lg:hidden w-[2rem] h-[2rem] text-black'/>


            </div>

        </div>
      
    </div>
  )
}

export default Nav

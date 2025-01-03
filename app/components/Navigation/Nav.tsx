import Link from 'next/link';
import React from 'react'
import { IoBicycle, IoPhoneLandscape } from "react-icons/io5";
import { FaCar, FaPhone} from "react-icons/fa6"; 
import { HiBars3BottomRight } from "react-icons/hi2";
import Image from 'next/image'
import Logo from "@/public/images/logo.png";

interface Props {
    openNav: ()=> void;
    mentionPage: boolean | undefined;
}

const Nav = ({openNav, mentionPage}: Props) => {
  return (
    <div className=" h-[12vh] bg-white">
        <div className='w-[95%] mx-auto flex h-[100%] items-center justify-between'>
            <div className='flex items-center space-x-2'>
                <a href="/" > <Image className='w-[5.2rem] sm:w-[6.4rem]' src={Logo} alt="H2N Automobile"/></a>
            </div>

            {/* Affiche uniquement la navigation si mentionPage est true */}
            {mentionPage !== true && (
                <ul className='hidden lg:flex items-center space-x-10'>
                    <li className='text-[18px] font-medium hover:text-[#4DBEE3]'>
                        <Link href="#feature">Boite de vitesse</Link>
                    </li>
                    <li className='text-[18px] font-medium hover:text-[#4DBEE3]'>
                        <Link href="#autre-presta">Prestations</Link>
                    </li>
                    <li className='text-[18px] font-medium hover:text-[#4DBEE3]'>
                        <Link href="#garage">Horaires</Link>
                    </li>
                    <li className='text-[18px] font-medium hover:text-[#4DBEE3]'>
                        <Link href="#tarifs">Tarifs</Link>
                    </li>
                </ul>
            )}

            <div className='flex items-center space-x-4'>
                {/* Affiche uniquement le bouton de contact si mentionPage est true */}
                {mentionPage !== true && (
                    <> 
                    <Link href="#footer">
                        <button className='hidden lg:flex font-bold px-6 py-2 sm:py-3 sm:px-8 text-[14px] sm:text-[16px] bg-[#061D56]
                        transition-all duration-200 hover:bg-[#111b35] items-center rounded-md space-x-2 text-white mr-6'>
                            <span>
                                <FaPhone className='w-[1rem] h-[1rem] sm:w-[1.2rem] sm:h-[1.2rem] mr-2'/>
                            </span>
                        Contactez-nous
                        </button>
                    </Link>
                
                    <HiBars3BottomRight onClick={openNav} className='lg:hidden w-[2rem] h-[2rem] text-black'/>
                    </>
                    
                )}
            </div>

        </div>
    </div>
  )
}

export default Nav

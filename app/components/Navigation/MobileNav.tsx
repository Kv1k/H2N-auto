import Link from 'next/link'
import React from 'react'
import  ImCross  from '@/public/images/wrench-close.svg'
import Image from 'next/image'

interface Props {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({closeNav, showNav}:Props) => {
    const navStyle = showNav? 'translate-x-0':"translate-x-[100%]";
  return (
    <div className={`fixed ${navStyle} right-0 transition-all duration-500 left-0 top-0 bottom-0 h-[100vh] bg-[#000000e0] z-[1002]`}>
        <Image src={ImCross} onClick={closeNav} className='absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] cursor-pointer'/>
        <div className={`bg-[#35839d] ${navStyle} transition-all duration-500 delay-200 flex flex-col items-center 
        justify-center w-[70%] h-[100%]  `}>
            <ul className='space-y-10'>
                <li className='text-[25px] font-medium hover:text-yellow-400 text-white'>
                    <Link href="/">Boite de vitesse</Link>
                </li>
                <li className='text-[25px] font-medium hover:text-yellow-400  text-white'>
                    <Link href="/">Prestations</Link>
                </li>
                <li className='text-[25px] font-medium hover:text-yellow-400  text-white'>
                    <Link href="/">Horaires</Link>
                </li>
                <li className='text-[25px] font-medium hover:text-yellow-400  text-white'>
                    <Link href="/">Tarifs</Link>
                </li>
                <li className='text-[25px] font-medium hover:text-yellow-400  text-white'>
                    <Link href="/">Contact</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default MobileNav

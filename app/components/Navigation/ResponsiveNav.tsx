"use client"

import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import { usePathname } from 'next/navigation'

const ResponsiveNav = () => {
  const pathname = usePathname()
  const showResponsiveNav = pathname?.includes("/mention");

  const [showNav, setShowNav] = useState(false);
  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <div>
      <Nav openNav={openNavHandler} mentionPage={showResponsiveNav}/>
      <MobileNav showNav={showNav} closeNav={closeNavHandler} mentionPage={showResponsiveNav}/>
    </div>
  )
}

export default ResponsiveNav

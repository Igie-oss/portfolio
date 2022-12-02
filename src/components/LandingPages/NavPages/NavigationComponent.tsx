import React, { useState, useEffect, useRef, useMemo } from 'react'
import '../../../styles/App.scss'

import { Link } from 'react-scroll'
//Framer
import { motion as m } from 'framer-motion'
//icons
import { TfiAlignRight, TfiClose } from 'react-icons/tfi'
//components
import DarkModeController from './DarkModeController'

const NavigationComponent = () => {
  const navUl = useRef<HTMLUListElement | null>(null)
  const [isOpenNav, setisOpenNav] = useState(false)
  const openNavbar = () => {
    if (navUl.current?.classList?.contains('-translate-y-full')) {
      navUl.current?.classList?.remove('-translate-y-full')
      setisOpenNav(true)
    } else {
      navUl.current?.classList?.add('-translate-y-full')
      setisOpenNav(false)
    }
  }

  return (
    <nav className="w-full h-full flex items-center px-10 sm:px-20 lg:px-0 justify-between  relative lg:grid lg:grid-cols-11 lg:grid-rows-1">
      <h1
        style={{
          transform: 'skewX(10deg)',
          textShadow: ' -5px 3px 1px #4F4F4F',
        }}
        className="logo font-bold text-xl text-textLight dark:text-textDark z-50 lg:col-start-2 sm:text-xl md:text-2xl lg:text-3xl "
      >
        IGIE
      </h1>
      {isOpenNav ? (
        <TfiClose
          className="w-6 h-6  text-textLight dark:text-textDark cursor-pointer z-50 lg:hidden"
          onClick={openNavbar}
        />
      ) : (
        <TfiAlignRight
          className="w-6 h-6  text-textLight dark:text-textDark cursor-pointer z-50 lg:hidden"
          onClick={openNavbar}
        />
      )}

      <ul
        ref={navUl}
        id="ul"
        className="absolute px-10 right-0 top-0 h-56  font-semibold   flex items-end pb-10 text-sm justify-evenly
         shadow-md  bg-primaryLight dark:bg-secondaryDark w-full lg:text-textLight dark:text-textDark z-40 transition-all  -translate-y-full 
         lg:static  lg:h-full lg:items-center lg:translate-y-0 lg:col-start-4 lg:col-end-9 lg:pb-0 lg:bg-transparent lg:dark:bg-transparent lg:shadow-none 
          xl:col-start-5 xl:col-end-9"
        onClick={openNavbar}
      >
        <div className="absolute w-fit h-fit top-7 lg:hidden">
          <DarkModeController />
        </div>

        <Link
          activeClass="activeLink"
          to="home"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
          className="px-3 hover:text-secondaryLight  cursor-pointer"
        >
          Home
        </Link>

        <Link 
         activeClass="activeLink"
         to="about"
         spy={true}
         smooth={true}
         offset={-20}
         duration={500}
          className="px-3 hover:text-secondaryLight  cursor-pointer"
        >
          About
        </Link>

        <Link activeClass="activeLink"
          to="project"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
        
          className="px-3 hover:text-secondaryLight  cursor-pointer"
        >
          Projects
        </Link>

        <Link 
         activeClass="activeLink"
         to="contact"
         spy={true}
         smooth={true}
         offset={60}
         duration={500}
         className="px-3 hover:text-secondaryLight  cursor-pointer"
        >
          Contact
        </Link>
      </ul>

      <div className="absolute w-fit h-fit top-2 right-16 xl:right-20 hidden lg:flex">
        <DarkModeController />
      </div>
    </nav>
  )
}

export default NavigationComponent

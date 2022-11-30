import React, { useState, useEffect, useRef, useMemo } from 'react'
import '../../../styles/App.scss'

//Framer
import { motion as m } from 'framer-motion'
//icons
import { TfiAlignRight, TfiClose } from 'react-icons/tfi'
//components
import DarkModeController from './DarkModeController'

const NavigationComponent: React.FC = () => {
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
          textShadow: ' -5px 2px 1px #54B689'
        }}
        className="logo font-bold text-xl text-lightText dark:text-darkText z-50 lg:col-start-2 sm:text-xl md:text-2xl lg:text-3xl "
      >
        IGIE
      </h1>
      {isOpenNav ? (
        <TfiClose
          className="w-6 h-6  text-lightText dark:text-darkText cursor-pointer z-50 lg:hidden"
          onClick={openNavbar}
        />
      ) : (
        <TfiAlignRight
          className="w-6 h-6  text-lightText dark:text-darkText cursor-pointer z-50 lg:hidden"
          onClick={openNavbar}
        />
      )}

      <ul
        ref={navUl}
        id="ul"
        className="absolute px-10 right-0 top-0 h-56  font-semibold   flex items-end pb-10 text-sm justify-evenly
         shadow-md  bg-lightPrimary dark:bg-darkSecondary w-full lg:text-lightText dark:text-darkText z-40 transition-all  -translate-y-full 
         lg:static  lg:h-full lg:items-center lg:translate-y-0 lg:col-start-4 lg:col-end-9 lg:pb-0 lg:bg-transparent lg:dark:bg-transparent lg:shadow-none 
          xl:col-start-5 xl:col-end-9"
        onClick={openNavbar}
      >
        <div className="absolute w-fit h-fit top-7 lg:hidden">
          <DarkModeController />
        </div>

        <a href="#home"
          className="px-3  border-b-2 border-transparent hover:border-lightSecondary cursor-pointer"
        >
          Home
        </a>

        <a href="#about"
          className="px-3  border-b-2 border-transparent hover:border-lightSecondary cursor-pointer"
        >
          About
        </a>

        <a href="#project"
          className="px-3  border-b-2 border-transparent hover:border-lightSecondary cursor-pointer"
        >
          Projects
        </a>
 
        <a href="#contact"
          className="px-3  border-b-2 border-transparent hover:border-lightSecondary cursor-pointer"
        >
          Contact
        </a>
      </ul>

      <div className="absolute w-fit h-fit top-5 right-16 xl:right-20 hidden lg:flex">
        <DarkModeController />
      </div>
    </nav>
  )
}

export default NavigationComponent

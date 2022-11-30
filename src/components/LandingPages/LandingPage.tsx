import React, { useState, useEffect, useRef } from 'react'
//observer
import { useInView } from 'react-intersection-observer'
//components
import HomeSection from './HomePages/HomeSection'
import NavigationSection from './NavPages/NavigationComponent'
import AboutSection from './AboutPages/AboutSection'

import ProjectComponent from './ProjectPages/ProjectComponent'
import MessageSection from './MessagePages/MessageSection'
import FooterSection from './FooterPages/FooterSection'

const LandingPage = () => {


  return (
    <main className="bg-lightPrimary dark:bg-darkPrimary w-screen h-fit overflow-hidden">

      <header className=" w-full h-20 fixed top-0  shadow-sm border-b-[0.02px] bg-lightPrimary dark:bg-darkPrimary dark:border-b-darkSecondary z-50 lg:pt-5 lg:h-24">
        <NavigationSection/>
      </header>


      {/* Home */}
      <HomeSection/>
      {/* About */}
      <AboutSection/>
      {/* portfolio */}
      <ProjectComponent/>
      {/* MessageBox */}
      <MessageSection/>
      {/*Footer */}
      <FooterSection />
    </main>
  )
}

export default LandingPage

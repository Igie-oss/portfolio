import React, { useState, useEffect, useRef } from 'react'
import '../../styles/App.scss'
//components
import HomeSection from './HomePages/HomeSection'
import NavigationSection from './NavPages/NavigationComponent'
import AboutSection from './AboutPages/AboutSection'

import ProjectComponent from './ProjectPages/ProjectComponent'
import MessageSection from './MessagePages/MessageSection'
import FooterSection from './FooterPages/FooterSection'

const LandingPage = () => {
  return (
    <main className="appliedBgOnCustom w-screen h-fit overflow-hidden">
      <header className="w-full h-20 fixed top-0 bg-blurLight dark:bg-blurDark lg:bg-primaryLight lg:dark:bg-primaryDark shadow-lg  z-50 lg:pt-5 lg:h-20">
        <NavigationSection />
      </header>
<h1 className="fixed w-full text-center h-fit top-[20rem] z-0 text-[20vw]  opacity-5 lg:top-[10rem] font-extrabold pointer-events-none">
{`<coder>`}
</h1>
      {/* Home */}
      <HomeSection />
      {/* About */}
      <AboutSection />
      {/* portfolio */}
      <ProjectComponent />
      {/* MessageBox */}
      <MessageSection />
      {/*Footer */}
      <FooterSection />
    </main>
  )
}

export default LandingPage

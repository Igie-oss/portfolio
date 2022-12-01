import React, { useState, useEffect, useRef } from 'react'
import { Element } from 'react-scroll'
import { LazyLoadImage } from 'react-lazy-load-image-component'
//framer
import { motion as m } from 'framer-motion'
//icons
import { SiFacebook, SiGithub, SiInstagram, SiTwitter } from 'react-icons/si'
//Imgae
import { HomeImage } from '../../../DataFile/Images'
import HoveredButton from '../../SharedFiles/HoveredButton'
//observer
import ObserverFromLeft from '../ObserversComponents/ObserverFromLeft'
import ObserverFromRight from '../ObserversComponents/ObserverFromRight'
import ObserverOpacity from '../ObserversComponents/ObserverOpacity'
import ObserverFromBottom from '../ObserversComponents/ObserverFromBottom'

//components

const HomeSection: React.FC = () => {
  // useEffect(() =>  {

  //   const get = async () => {
  //   try{
  //     const response = await fetch('http://localhost:3000/posts');
  //     console.log(response.json())
  //   }catch(err){
  //     console.log(err)
  //   }

  //   }

  //  get();
  // },[])

  return (
    <Element name="home">
      <section className="w-full  h-fit flex flex-col items-center pt-28 lg:mt-5 lg:h-[90vh] lg:px-16 lg:grid lg:grid-cols-12 lg:grid-rows-6 xl:px-28 relative">
        <m.main
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.5 }}
          className="z-10 h-fit flex flex-col w-full items-center px-10 text-textLight bg-transparent  dark:text-textDark lg:col-start-1 
            lg:col-end-7 lg:row-start-2 lg:items-start "
        >
          <p className="font-semibold text-sm lg:text-2xl">Hi</p>
          <div className="font-bold  text-2xl mb-2 mt-3 h-fit text-center lg:mt-1 md:text-4xl xl:text-6xl lg:text-left  flex cursor-pointer">
            <h1 className="hover:-translate-y-1 hover:-rotate-6 transition-all hover:text-secondaryLight ">
              I
            </h1>
            <h1 className="hover:-translate-y-1 hover:-rotate-6 transition-all hover:text-secondaryLight">
              'M
            </h1>
            <h1 className="hover:-translate-y-1 hover:-rotate-6 transition-all hover:text-secondaryLight ml-3">
              I
            </h1>
            <h1 className="hover:-translate-y-1 hover:-rotate-6 transition-all hover:text-secondaryLight ">
              G
            </h1>
            <h1 className="hover:-translate-y-1 hover:-rotate-6 transition-all hover:text-secondaryLight">
              I
            </h1>
            <h1 className="hover:-translate-y-1 hover:-rotate-6 transition-all hover:text-lightSecondar">
              E
            </h1>
            <br />
            <h1 className="hover:-translate-y-1 hover:-rotate-6 transition-all hover:text-secondaryLight ml-3">
              B
            </h1>
            <h1 className="hover:-translate-y-1 hover:-rotate-6 transition-all hover:text-secondaryLight ">
              A
            </h1>
            <h1 className="hover:-translate-y-1 hover:-rotate-6 transition-all hover:text-secondaryLight">
              L
            </h1>
            <h1 className="hover:-translate-y-1 hover:-rotate-6 transition-all hover:text-secondaryLight">
              D
            </h1>
            <h1 className="hover:-translate-y-1 hover:-rotate-6 transition-all hover:text-secondaryLight">
              E
            </h1>
            <h1 className="hover:-translate-y-1 hover:-rotate-6 transition-all hover:text-secondaryLight">
              S
            </h1>
            <h1 className="hover:-translate-y-1 hover:-rotate-6 transition-all hover:text-secondaryLight">
              A
            </h1>
            <h1 className="hover:-translate-y-1 hover:-rotate-6 transition-all hover:text-secondaryLight">
              N
            </h1>
            <h1 className="hover:-translate-y-1 hover:-rotate-6 transition-all hover:text-secondaryLight">
              S
            </h1>
            <h1 className="hover:-translate-y-1 hover:-rotate-6 transition-all hover:text-secondaryLight">
              O
            </h1>
          </div>

          <h3 className="font-semibold text-sm  lg:text-left lg:text-lg text-secondaryLight ">
            A Website Developer
          </h3>
          <p
            className="text-center text-xs w-[21rem]  mx-w-sm mt-4 opacity-70 md:w-[24rem] md:text-sm lg:text-left lg:w-[25rem] lg:text-sm
                xl:w-[29rem] "
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </m.main>

        <m.div
          initial={{ opacity: 0, translateX: -50 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.5 }}
          className="mt-10 w-full h-fit flex items-center flex-col justify-between   lg:col-start-1 lg:col-end-6 lg:row-start-3 lg:mt-20
                   lg:flex-row lg:px-2 lg:pl-10 lg:max-w-[21rem] z-10"
        >
     
            <button className="w-32 h-10 rounded-sm  font-semibold text-xs lg:text-sm text-textDark bg-secondaryLight dark:bg-secondaryDark">
              My Portfolio
            </button>
      
          <button className="w-32 h-10 text-textLight dark:text-textDark rounded-sm  mt-3 bg-blurLight dark:bg-blurDark text-xs lg:text-sm font-semibold   transition-all lg:mt-0">
            Download my CV
          </button>
        </m.div>

        <m.div
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{ duration: 1.5 }}
          className="z-10 w-full h-auto relative px-10 flex items-center justify-center sm:px-16 md:px-24 lg:w-full  lg:col-start-7 lg:mt-20 lg:col-end-13
         lg:row-start-3 lg:p-0"
        >
          {/* home image */}
          <LazyLoadImage
            src={HomeImage}
            alt="image"
            className="w-full h-auto object-cover  rounded-full border-b-8 border-secondaryLight dark:border-secondaryDark  dark:brightness-75 sm:w-[80%] md:w-[70%] lg:w-full xl:w-[90%]"
          />

          {/* social icons */}
          <m.div
            initial={{ opacity: 0, translateX: 50 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1.5 }}
            className="h-fit w-fit  absolute right-5 top-10 flex flex-col items-center  text-secondaryLight dark:text-[#ADB5BD] sm:right-14 md:right-20 lg:right-0 lg:top-28"
          >
            <em className="text-xs rotate-90 w-fit h-fit  mb-6  font-semibold">
              Follow me
            </em>
            <div className="w-[0.1px] h-8 bg-textLight dark:bg-textDark"></div>
            <SiFacebook className="w-4 h-4 lg:w-5 lg:h-5  my-2 hover:text-btnLight cursor-pointer dark:hover:text-btnDark hover:translate-x-1 transition-all" />
            <SiInstagram className="w-4 h-4 lg:w-5 lg:h-5  my-2 hover:text-btnLight cursor-pointer dark:hover:text-btnDark hover:translate-x-1 transition-all" />
            <SiTwitter className="w-4 h-4 lg:w-5 lg:h-5 my-2 hover:text-btnLight cursor-pointer dark:hover:text-btnDark hover:translate-x-1 transition-all" />
            <SiGithub className="w-4 h-4 lg:w-5 lg:h-5 my-2 hover:text-btnLight cursor-pointer dark:hover:text-btnDark hover:translate-x-1 transition-all" />
            <div className="w-[0.1px] h-8 bg-textLight dark:bg-textDark"></div>
          </m.div>
        </m.div>
      </section>
    </Element>
  )
}

export default HomeSection

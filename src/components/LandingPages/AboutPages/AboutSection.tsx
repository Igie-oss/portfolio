import React, { useRef, useEffect, useState } from 'react'
//Icons
import {
  TfiGithub,
  TfiTwitterAlt,
  TfiLinkedin,
  TfiInstagram,
  TfiFacebook,
  TfiEmail
} from 'react-icons/tfi'
import { CiLocationOn, CiPhone, CiMail } from 'react-icons/ci'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import { motion as m } from 'framer-motion'
import { Element } from 'react-scroll'
//image
import { AboutImage } from '../../../DataFile/Images'

import SkillSection from './SkillSection'
import ExperienceCard from './ExperienceCard'
import ServicesCard from './ServicesCard'

const AboutSection: React.FC = () => {
  return (
    <Element name="about">
      <section className="w-screen h-fit flex flex-col ">
        <main className=" w-full h-fit pt-28 flex flex-col items-center  px-5 ">
          <m.em
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="border-b-2 border-lightBlur px-10 flex font-bold text-lightText dark:text-darkText"
          >
            About <p className="text-lightSecondary mx-2">me</p>
          </m.em>
          <section className="w-full flex flex-col items-center lg:flex-row lg:justify-evenly lg:px-16 lg:mt-20 lg:py-5 ">
            <m.div
              initial={{ opacity: 0, translateX: -80 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1 }}
              className="w-full h-[20rem] flex items-center justify-start sm:justify-center mt-20 px-5  lg:w-[28rem] lg:h-[28rem] xl:w-[31rem] xl:h-[32rem]"
            >
              <div className="w-[17rem] h-full relative bg-lightBlur dark:bg-darkBlur border-8 border-lightSecondary rounded-tl-3xl rounded-tr-3xl lg:w-full">
                <LazyLoadImage
                  src={AboutImage}
                  alt=""
                  className="w-full h-[130%] object-cover rounded-full absolute left-0 -bottom-2  dark:brightness-75"
                />
              </div>
            </m.div>

            <main className="flex flex-col justify-start w-full h-fit px-5 mt-10 sm:items-center lg:w-[30rem]  text-lightText dark:text-darkText">
              <m.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.3 }}
                className="font-bold text-3xl mb-2 sm:text-4xl  md:text-5xl dark:text-darkTex text-lightText dark:text-darkText"
              >
                Igie Boy Baldesanso
              </m.h1>

              <div className="w-fit h-fit flex flex-col items-start">
                <m.h1
                  initial={{ opacity: 0, translateX: 80 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 1 }}
                  className="font-bold text-md lg:text-lg text-start text-lightSecondary"
                >
                  Web Specialist based in Philippines
                </m.h1>
                <m.address
                  initial={{ opacity: 0, translateX: 80 }}
                  whileInView={{ opacity: 0.9, translateX: 0 }}
                  transition={{ duration: 1.2 }}
                  className="mt-5 text-xs pr-16 lg:mt-8 lg:text-sm lg:pr-0 flex text-start"
                >
                  <CiLocationOn className="w-4 h-4 mr-2" /> Marikina, Metro
                  Manila, Philippines
                </m.address>
                <m.p
                  initial={{ opacity: 0, translateX: 80 }}
                  whileInView={{ opacity: 0.9, translateX: 0 }}
                  transition={{ duration: 1.4 }}
                  className="mt-2 text-xs  pr-16 lg:text-sm lg:pr-0 flex items-start justify-start "
                >
                  <CiPhone className="w-4 h-4 mr-2" /> +639506863050
                </m.p>
                <m.span
                  initial={{ opacity: 0, translateX: 80 }}
                  whileInView={{ opacity: 0.9, translateX: 0 }}
                  transition={{ duration: 1.4 }}
                  className=" mt-2 text-xs   pr-16 lg:text-sm lg:pr-0 flex"
                >
                  <CiMail className="w-4 h-4 mr-2" />{' '}
                  <a href="mailto:baldesansoigieboysanchez@gmail">
                    baldesansoigieboysanchez@gmail.com
                  </a>
                </m.span>
              </div>

              <m.div
                initial={{ opacity: 0, translateX: 80 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1 }}
                className="ml-2 h-fit w-fit mt-8 lg:mt-10 items-center flex "
              >
                <div className="p-2 mr-4 border-2 rounded-full border-lightText dark:border-darkText hover:-translate-y-1 transition-all cursor-pointer">
                  <TfiGithub className="w-3 h-3 lg:w-4 lg:h-4 text-lightText dark:text-darkText  " />
                </div>
                <div className="p-2 mr-4 border-2 rounded-full border-lightText dark:border-darkText hover:-translate-y-1 transition-all cursor-pointer">
                  <TfiTwitterAlt className="w-3 h-3 lg:w-4 lg:h-4 text-lightText dark:text-darkText " />
                </div>
                <div className="p-2 mr-4 border-2 rounded-full border-lightText dark:border-darkText hover:-translate-y-1 transition-all cursor-pointer">
                  <TfiFacebook className="w-3 h-3 lg:w-4 lg:h-4 text-lightText dark:text-darkText " />
                </div>
              </m.div>

              <m.button
                initial={{ opacity: 0, translateY: 80 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1 }}
                className="w-fit h-fit bg-lightSecondary dark:bg-darkSecondary text-darkText py-2 px-8 mt-14 xl:mt-16"
              >
                Hire me
              </m.button>

              <m.div
                initial={{ opacity: 0, translateX: 80 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1.6 }}
                className="w-full h-fit flex items-center justify-evenly mt-20 lg:justify-between lg:w-[80%] lg:mt-16"
              >
                <ExperienceCard />
              </m.div>
            </main>
          </section>

          <section className="w-full h-fit mt-20 flex flex-col  justify-between px-5   text-lightText dark:text-darkText lg:flex-col lg:items-center lg:justify-center lg:my-20">
            <m.em
              initial={{ opacity: 0, translateX: 80 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1 }}
              className="font-bold text-lg lg:text-xl lg:mr-10 w-fit border-b-2
           border-lightBlur px-10 "
            >
              Service
            </m.em>

            <m.main
              initial={{ opacity: 0, translateX: 80 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1.6 }}
              className="w-[60%] h-fit flex flex-col py-10  lg:flex-row lg:w-full lg:justify-evenly  lg:m-10  max-w-5xl "
            >
              <ServicesCard />
            </m.main>
          </section>
        </main>

        <SkillSection />
      </section>
    </Element>
  )
}

export default AboutSection

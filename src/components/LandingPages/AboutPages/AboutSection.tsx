import React, { useRef, useEffect, useState } from 'react'
import { motion as m } from 'framer-motion'
import { Element} from 'react-scroll'
//image
import { AboutImage } from '../../../DataFile/Images'

import SkillSection from './SkillSection'
import ExperienceCard from './ExperienceCard'
import ServicesCard from './ServicesCard'

const AboutSection: React.FC = () => {

  return (
    <Element name="about">
    <section className="w-screen h-fit flex flex-col ">
      <main
        className=" w-full h-fit pt-28 flex flex-col items-center px-5 "
      >
        <m.em
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="border-b-2 border-lightBlur px-10 flex font-bold text-lightText dark:text-darkText"
        >
          About <p className="text-lightSecondary mx-2">me</p>
        </m.em>
        <m.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.3 }}
          className="font-bold text-2xl mt-10 sm:text-3xl md:text-4xl dark:text-darkTex text-lightText dark:text-darkText"
        >
          Igie Boy Baldesanso
        </m.h1>

        <section className="w-full flex flex-col items-center lg:flex-row lg:justify-evenly lg:px-16 lg:mt-20 lg:py-5">
          <m.div
            initial={{ opacity: 0, translateX: -80 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-[20rem] flex items-center justify-start mt-20 px-5  lg:w-[28rem] lg:h-[28rem] xl:w-[31rem] xl:h-[32rem]"
          >
            <div className="w-[17rem] h-full relative bg-lightBlur dark:bg-darkBlur border-8 border-lightSecondary rounded-tl-3xl rounded-tr-3xl lg:w-full">
              <img
                src={AboutImage}
                alt=""
                className="w-full h-[130%] object-cover rounded-full absolute left-0 -bottom-2  dark:brightness-75"
              />
            </div>
          </m.div>

          <main className="flex flex-col justify-start w-full h-fit px-5 mt-10  lg:w-[30rem] text-lightText dark:text-darkText">
            <m.h1
              initial={{ opacity: 0, translateY: 80 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1 }}
              className="font-bold text-lg lg:text-xl"
            >
              Web Specialist based in Philippines
            </m.h1>
            <m.p
              initial={{ opacity: 0, translateY: 80 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1.2 }}
              className="opacity-75 mt-5 text-xs pr-16 lg:text-sm lg:pr-0 xl:mb-5"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet
            </m.p>

            <m.p
              initial={{ opacity: 0, translateY: 80 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1.4 }}
              className="opacity-75 mt-3 text-xs  pr-16 lg:text-sm lg:pr-0 lg:mb-5"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet
            </m.p>
            <m.button
              initial={{ opacity: 0, translateY: 80 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1 }}
              className="w-fit h-fit bg-lightSecondary text-darkText py-2 px-8 mt-10 xl:mt-16"
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

          <m.main  initial={{ opacity: 0, translateX: 80 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1.6 }} className="w-[60%] h-fit flex flex-col py-10  lg:flex-row lg:w-full lg:justify-evenly  lg:m-10  max-w-5xl ">
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

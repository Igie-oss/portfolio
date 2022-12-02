import React, { useEffect, useState, useRef } from 'react'
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi'
import { motion as m } from 'framer-motion'

import {sampleProject} from '../../../DataFile/data'

import {ProjectInter} from '../../../interfaces/interface'
import useCarosel from '../../../Hooks/useCarosel'




const Carosel = () => {
  const [sampleProjectData, setSampleProjectData] = useState<ProjectInter[]>(sampleProject)
  const [counter, setCounter] = useState(0)
  const { addedClassLeft, addedClassCenter, addedClassRight } = useCarosel(counter)

  function hundleLeft() {
    if (counter <= 0) {
      setCounter((prev) => prev + sampleProjectData.length - 1)
    } else {
      setCounter((prev) => prev - 1)
    }
  }
  function hundleRight() {
    if (counter >= sampleProjectData.length - 1) {
      setCounter(0)
    } else {
      setCounter((prev) => prev + 1)
    }
  }

  return (
    <section className="flex-grow  w-full h-fit py-10 flex items-center justify-center px-5 ">
      
      <m.div 
         initial={{ opacity: 0, translateY: 80 }}
         whileInView={{ opacity: 1, translateY: 0 }}
         transition={{ duration: 1 }}
          className="h-[27rem] w-full flex max-w-[57rem] md:w-[48rem] lg:h-[29rem] lg:w-full  items-center justify-center relative">

        <div
          className={`w-[16rem] rounded-md flex flex-col items-start shadow-lg p-2 bg-primaryLight  dark:bg-secondaryDark text-textLight dark:text-textDark  md:w-[17rem]  lg:w-[18rem] lg:opacity-100  ${addedClassLeft}`}
        >
          <img
            src={sampleProjectData[0].img}
            alt="image"
            className="w-full object-cover rounded-md"
          />
          <h1 className="w-full  text-md font-bold">{sampleProjectData[0].heading}</h1>
          <p className="text-xs pr-2">{sampleProjectData[0].pharagraph}</p>
          <button className="absolute left-2 bottom-3 text-xs border-b-2 pr-2 pl-2 border-secondaryLight flex items-center pb-1">Read more <TfiAngleRight className="ml-1"/> </button>
        </div>

        <div className="absolute left-auto  w-[16rem] z-30">
          <button
            className="absolute h-fit w-fit p-2 -left-5  top-[50%] border-[1px] border-secondaryLight bg-blurDark rounded-full hover:-translate-y-1 transition-all lg:hidden"
            onClick={hundleLeft}
          >
            <TfiAngleLeft className="w-6 h-6 text-secondaryLight pointer-events-none" />
          </button>

          <button
            className="absolute h-fit w-fit p-2 -right-5 top-[50%] border-[1px] border-secondaryLight bg-blurDark rounded-full hover:-translate-y-1 transition-all lg:hidden"
            onClick={hundleRight}
          >
            <TfiAngleRight className="w-6 h-6 text-secondaryLight pointer-events-none" />
          </button>
        </div>

        <div
          className={`w-[16rem] rounded-md  flex flex-col items-start absolute shadow-lg p-2 bg-primaryLight dark:bg-secondaryDark text-textLight dark:text-textDark  md:w-[17rem] lg:w-[18rem] lg:opacity-100 ${addedClassCenter}`}
        >
          <img
            src={sampleProjectData[1].img}
            alt="image"
            className="w-full object-cover  rounded-md"
          />
          <h1 className="w-full text-md font-bold ">{sampleProjectData[1].heading}</h1>
          <p className="text-xs pr-1">{sampleProjectData[1].pharagraph}</p>
          <button className="absolute left-2 bottom-3 text-xs border-secondaryLight border-b-2 pr-2 pl-2 flex items-center pb-1">Read more <TfiAngleRight className="ml-1"/> </button>
        </div>

        <div
          className={`w-[16rem] rounded-md flex flex-col items-start shadow-lg p-2 bg-primaryLight dark:bg-secondaryDark text-textLight dark:text-textDark  md:w-[17rem] lg:w-[18rem] lg:opacity-100  ${addedClassRight}`}
        >

          <img
            src={sampleProjectData[2].img}
            alt="image"
            className="w-full object-cover rounded-md"
          />
           <h1 className="w-full text-md font-bold">{sampleProjectData[2].heading}</h1>
          <p className="text-xs pr-1">{sampleProjectData[2].pharagraph}</p>
          <button className="absolute left-2 bottom-3 text-xs border-b-2 pr-2 pl-2 border-secondaryLight flex items-center pb-1">Read more <TfiAngleRight className="ml-1"/> </button>
        </div>
      </m.div>
    </section>
  )
}

export default Carosel

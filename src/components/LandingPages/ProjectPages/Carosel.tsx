import React, { useEffect, useState, useRef } from 'react'
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi'
import { motion as m } from 'framer-motion'
import Image1 from '../../../assets/2pic.jpg'
import Image2 from '../../../assets/1pic.jpg'
import Image3 from '../../../assets/picture.jpg'

import useCarosel from '../../../Hooks/useCarosel'

type SampleProjectModel = {
  heading: string
  img: string
  pharagraph: string
  url: string
}
const sampleProject:SampleProjectModel[] = [
  { heading: 'Game App', img: Image1, pharagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam.', url: 'https//' },
  { heading: 'Ecommrce App', img: Image2, pharagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam.', url: 'https//' },
  { heading: 'Chat App', img: Image3, pharagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam.', url: 'https//' }
]

const Carosel = () => {
  const [sampleProjectData, setSampleProjectData] = useState(sampleProject)
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
    <section className="flex-grow  w-full h-fit my-5 py-12 flex items-center justify-center px-5">
      
      <div className="h-[27rem] w-full mt-8 flex max-w-[57rem] md:w-[48rem] lg:h-[29rem] lg:w-full  items-center justify-center relative">

        <div
          className={`w-[16rem] rounded-md flex flex-col items-start shadow-lg p-2 bg-lightPrimary  dark:bg-darkSecondary text-lightText dark:text-darkText  md:w-[17rem]  lg:w-[18rem] lg:opacity-100  ${addedClassLeft}`}
        >
          <img
            src={sampleProjectData[0].img}
            alt="image"
            className="w-full object-cover rounded-md"
          />
          <h1 className="w-full  text-md font-bold">{sampleProjectData[0].heading}</h1>
          <p className="text-xs pr-2">{sampleProjectData[0].pharagraph}</p>
          <button className="absolute left-2 bottom-3 text-xs border-b-2 pr-2 border-lightSecondary flex items-center pb-1">Read more <TfiAngleRight className="ml-1"/> </button>
        </div>

        <div className="absolute left-auto  w-[16rem] z-30">
          <button
            className="absolute h-fit w-fit p-2 -left-5  top-[50%] border-[1px] border-[#ADB5BD] bg-darkBlur rounded-full hover:-translate-y-1 transition-all lg:hidden"
            onClick={hundleLeft}
          >
            <TfiAngleLeft className="w-6 h-6 text-[#ADB5BD] pointer-events-none" />
          </button>
          <button
            className="absolute h-fit w-fit p-2 -right-5 top-[50%] border-[1px] border-[#ADB5BD]  bg-darkBlur rounded-full hover:-translate-y-1 transition-all lg:hidden"
            onClick={hundleRight}
          >
            <TfiAngleRight className="w-6 h-6 text-[#ADB5BD] pointer-events-none" />
          </button>
        </div>

        <div
          className={`w-[16rem] rounded-md  flex flex-col items-start absolute shadow-lg p-2 bg-lightPrimary dark:bg-darkSecondary text-lightText dark:text-darkText  md:w-[17rem] lg:w-[18rem] lg:opacity-100 ${addedClassCenter}`}
        >
          <img
            src={sampleProjectData[1].img}
            alt="image"
            className="w-full object-cover  rounded-md"
          />
          <h1 className="w-full text-md font-bold ">{sampleProjectData[1].heading}</h1>
          <p className="text-xs pr-1">{sampleProjectData[1].pharagraph}</p>
          <button className="absolute left-2 bottom-3 text-xs border-b-2 pr-2 border-lightSecondary flex items-center pb-1">Read more <TfiAngleRight className="ml-1"/> </button>
        </div>

        <div
          className={`w-[16rem] rounded-md flex flex-col items-start shadow-lg p-2 bg-lightPrimary dark:bg-darkSecondary text-lightText dark:text-darkText  md:w-[17rem] lg:w-[18rem] lg:opacity-100  ${addedClassRight}`}
        >

          <img
            src={sampleProjectData[2].img}
            alt="image"
            className="w-full object-cover rounded-md"
          />
           <h1 className="w-full text-md font-bold">{sampleProjectData[2].heading}</h1>
          <p className="text-xs pr-1">{sampleProjectData[2].pharagraph}</p>
          <button className="absolute left-2 bottom-3 text-xs border-b-2 pr-2 border-lightSecondary flex items-center pb-1">Read more <TfiAngleRight className="ml-1"/> </button>
        </div>
      </div>
    </section>
  )
}

export default Carosel

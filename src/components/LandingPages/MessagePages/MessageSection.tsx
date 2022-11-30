import React, { useRef, useEffect } from 'react'

import { IoPaperPlaneOutline } from 'react-icons/io5'

import { MessageSVG } from '../../../DataFile/Images'

import { motion as m } from 'framer-motion'



const MessageSection: React.FC = () => {
  const textArea = useRef(null)
  const nameInput = useRef(null)
  const emailInput = useRef(null)
  return (
    <section id="contact"
      className="w-full h-fit py-20 relative flex flex-col items-center  justify-evenly lg:py-10 lg:flex-row lg:px-20 xl:px-32 2xl:px-36"
    >
      <m.main
        initial={{ opacity: 0, translateX: -80 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
        className=" w-full h-fit mt-5 flex px-5 flex-col items-left sm:w-[80%]  lg:w-[50%] xl:w-[45%]"
      >
        <form className="w-full h-full flex flex-col max-w-[35rem] text-lightText dark:text-darkText">
          <h1 className="font-bold text-2xl mt-3 md:text-3xl xl:text-4xl  my-5 w-full text-center">
            Message Me Here
          </h1>
          <label className="w-fit h-fit flex flex-col mt-5 font-semibold ">
            Name
          <input
            ref={nameInput}
            type="text"
            placeholder="Enter your name"
            className="h-10 w-[16rem] mt-1 px-2 font-normal rounded-md text-sm  bg-lightBlur dark:bg-darkBlur 
                  outline-none border-[1px] border-lightBlur"
          />
          </label>
          <label className="w-fit h-fit flex flex-col mt-5 font-semibold">
            Email
          <input
            ref={emailInput}
            type="email"
            placeholder="sample@gmail.com"
            className="h-10 w-[16rem] mt-1 px-2 font-normal rounded-md text-sm  bg-lightBlur dark:bg-darkBlur 
                  outline-none border-[1px] border-lightBlur"
          />
        </label>
          <textarea
            ref={textArea}
            cols={20}
            rows={15}
            placeholder="Text..."
            className="w-full h-36 mt-5 outline-none bg-transparent resize-none border-2
                border-darkBlur dark:border-lightBlur t rounded-xl p-2 sm:h-[10rem] md:h-[12rem]"
          ></textarea>

          <button
            className="mt-5 w-fit h-fit flex items-center justify-evenly px-10 py-2  font-semibold text-sm rounded-sm text-darkText
                 bg-lightSecondary"
          >
            <p>Send</p> <IoPaperPlaneOutline className="ml-1 w-5 h-5" />
          </button>
        </form>
      </m.main>

      <m.div
        initial={{ opacity: 0, translateX: 80 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
        className="w-full h-auto flex items-center justify-center flex-grow mt-5 lg:w-auto lg:h-full"
      >
        <img src={MessageSVG} alt="messageSVG" className="w-[24rem] h-auto lg:w-[26rem] object-fit opacity-75"/>
      </m.div>
    </section>
  )
}

export default MessageSection

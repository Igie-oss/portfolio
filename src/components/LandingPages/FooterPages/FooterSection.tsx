import React, { useRef, useEffect } from 'react'
//Icons
import {
  TfiGithub,
  TfiTwitterAlt,
  TfiLinkedin,
  TfiInstagram,
  TfiFacebook,
  TfiEmail
} from 'react-icons/tfi'
import { IoPaperPlaneOutline } from 'react-icons/io5'

import { motion as m } from 'framer-motion'

const FooterSection = () => {
  
  return (
    <section className="bg-blurLight  dark:bg-blurDark w-full h-fit flex flex-col items-center py-10  lg:flex-row lg:pb-20 lg:pt-20 text-textLight dark:text-textDark">
      <m.div
        initial={{ opacity: 0, translateX: -80 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
        className="opacity-0 w-[80%] h-fit flex flex-col items-center lg:w-[60%]  "
      >
        <h1 className="font-bold text-2xl  md:text-3xl xl:text-4xl">IGIE</h1>
        <p className="text-center text-xs  w-[19rem]  my-3 opacity-70 md:w-[27rem] md:text-sm  lg:w-[20rem] text-textLight dark:text-textDark ">
          You can follow me 
        </p>
        <div className="h-fit w-[80%] my-4 flex items-center  justify-evenly gap-1 sm:w-[50%] lg:w-[90%] xl:w-[70%] 2xl:w-[60%]">

          <div className="p-2 border-2 rounded-full border-textLight dark:border-textDark hover:-translate-y-1 transition-all cursor-pointer">
            <TfiGithub className="w-4 h-4  text-textLight dark:text-textDark  " />
          </div>
          <div className="p-2 border-2 rounded-full border-textLight dark:border-textDark hover:-translate-y-1 transition-all cursor-pointer">
            <TfiTwitterAlt className="w-4 h-4  text-textLight dark:text-textDark " />
          </div>
          <div className="p-2 border-2 rounded-full border-textLight dark:border-textDark hover:-translate-y-1 transition-all cursor-pointer">
            <TfiFacebook className="w-4 h-4  text-textLight dark:text-textDark " />
          </div>
          <div className="p-2 border-2 rounded-full border-textLight dark:border-textDark hover:-translate-y-1 transition-all cursor-pointer">
            <TfiLinkedin className="w-4 h-4  text-textLight dark:text-textDark " />
          </div>
          <div className="p-2 border-2 rounded-full border-textLight dark:border-textDark hover:-translate-y-1 transition-all cursor-pointer">
            <TfiInstagram className="w-4 h-4  text-textLight dark:text-textDark " />
          </div>
          <div className="p-2 border-2 rounded-full border-textLight dark:border-textDark hover:-translate-y-1 transition-all cursor-pointer">
            <TfiEmail className="w-4 h-4  text-textLight dark:text-textDark " />
          </div>
        </div>
      </m.div>

      <main className=" w-[80%]  h-fit flex items-center justify-between my-5 text-textLight dark:text-textDark sm:w-[50%] md:w-[60%] lg:w-[50%] lg:px-5 ">
        <m.div
          initial={{ opacity: 0, translateY: 80 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.2 }}
          className=" flex flex-col "
        >
          <h3 className="font-bold text-sm mt-3 md:text-xl xl:text-2xl">
            Menu
          </h3>
          <ul className="h-full text-xs flex flex-col gap-1">
            <li className="hover:underline">
              <a href="">Home</a>
            </li>
            <li className="hover:underline">
              <a href="">About</a>
            </li>
            <li className="hover:underline">
              <a href="">Blog</a>
            </li>
            <li className="hover:underline">
              <a href="">Blog post</a>
            </li>
            <li className="hover:underline">
              <a href="">Contact</a>
            </li>
          </ul>
        </m.div>

        <m.div
          initial={{ opacity: 0, translateY: 80 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col "
        >
          <h3 className="font-bold text-sm mt-3 md:text-xl xl:text-2xl">
            Utility Pages
          </h3>
          <ul className="h-full text-xs flex flex-col gap-1">
            <li className="hover:underline">
              <a href="">Start Here</a>
            </li>
            <li className="hover:underline">
              <a href="">Style guide</a>
            </li>
            <li className="hover:underline">
              <a href="">Password Protected</a>
            </li>
            <li className="hover:underline">
              <a href="">404 Not Found</a>
            </li>
            <li className="hover:underline">
              <a href="">Licenses</a>
            </li>
          </ul>
        </m.div>
      </main>

      <m.div
        initial={{ opacity: 0, translateX: 80 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1.3 }}
        className=" w-[80%] h-fit flex flex-col items-center"
      >
        <h1 className="text-center font-bold text-lg my-2 md:text-xl xl:text-2xl">
          Your email here
        </h1>
        <p
          className="text-center text-xs  w-[14rem]  my-3 opacity-70 md:w-[27rem] md:text-sm  lg:w-[16rem] lg:text-sm lg:mt-5 xl:w-[19rem]
       text-textLight dark:text-textDark "
        >
          Send your email to see my resume
        </p>
        <form className="w-full h-fit flex flex-col items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="text-xs w-[80%] h-10 px-2 rounded-sm bg-blurLight dark:bg-blurDark outline-none
           text-textLight dark:text-textDark border-[1px] border-blurDark dark:border-blurLight  my-2 md:w-[60%] lg:w-[50%] xl:w-[40%]"
          />
          <button className="mt-3 w-fit h-fit flex items-center justify-center px-10 py-2  font-semibold text-sm rounded-sm text-textDark bg-lightSecondary dark:bg-darkSecondary">
            Subscribe
          </button>
        </form>
      </m.div>
    </section>
  )
}

export default FooterSection

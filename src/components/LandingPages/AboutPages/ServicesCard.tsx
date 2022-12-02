import React, { useState } from 'react'

import { SiFacebook, SiGithub, SiInstagram, SiTwitter } from 'react-icons/si'

import {FaCode, FaDatabase,FaPenNib} from "react-icons/fa";

import { motion as m } from 'framer-motion'

import {ServiceCardType} from '../../../interfaces/interface'



const cardsData: ServiceCardType[] = [
  {
    icon: FaCode,
    header: 'Web Developer',
    paragraph: ' Amet minim mollit non deserunt ullamco est sit aliqua dolor'
  },
  {
    icon: FaPenNib,
    header: 'UI/UX Design',
    paragraph: ' Amet minim mollit non deserunt ullamco est sit aliqua dolor'
  },
  {
    icon: FaDatabase,
    header: 'Data Specialist',
    paragraph: ' Amet minim mollit non deserunt ullamco est sit aliqua dolor'
  }
]

const ServicesCard = () => {
  const [cards, setCards] = useState<ServiceCardType[]>(cardsData)

  return (
    <>
      {cards  && cards.map((Card) => {
        return (
          <m.div  
          initial={{ opacity: 0, translateX: 80 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
            key={Math.random() * 100000}
            className="w-full h-fit flex flex-col mt-6 lg:mt-0"
          >
            <div className="flex items-center mb-3">
              <div className="w-14 h-14  bg-secondaryLight dark:bg-secondaryDark p-3">
                <Card.icon className="w-full h-full  text-primaryLight" />
              </div>
              <h1 className="font-bold mt-8 text-sm ml-3">{Card.header}</h1>
            </div>
            <p className="text-xs w-[80%] font-medium opacity-70 lg:text-sm ">
              {Card.paragraph}
            </p>
          </m.div>
        )
      })}
    </>
  )
}

export default ServicesCard

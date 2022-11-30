import React, { useState } from 'react'
import { SiFacebook, SiGithub, SiInstagram, SiTwitter } from 'react-icons/si'
import { motion as m } from 'framer-motion'

import {ServiceCardType} from '../../../interfaces/interface'


const cardsData: ServiceCardType[] = [
  {
    icon: SiFacebook,
    header: 'Web Developer',
    paragraph: ' Amet minim mollit non deserunt ullamco est sit aliqua dolor'
  },
  {
    icon: SiGithub,
    header: 'Web Developer',
    paragraph: ' Amet minim mollit non deserunt ullamco est sit aliqua dolor'
  },
  {
    icon: SiTwitter,
    header: 'Web Developer',
    paragraph: ' Amet minim mollit non deserunt ullamco est sit aliqua dolor'
  }
]

const ServicesCard = () => {
  const [cards, setCards] = useState<ServiceCardType[]>(cardsData)

  return (
    <>
      {cards  && cards.map((card) => {
        return (
          <m.div  
          initial={{ opacity: 0, translateX: 80 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
            key={Math.random() * 100000}
            className="w-full h-fit flex flex-col mt-6 lg:mt-0"
          >
            <div className="flex items-center mb-3">
              <div className="w-14 h-14  bg-lightSecondary p-3">
                <card.icon className="w-full h-full  text-lightPrimary" />
              </div>
              <h1 className="font-bold mt-8 text-sm ml-3">{card.header}</h1>
            </div>
            <p className="text-xs w-[80%] font-medium opacity-70 lg:text-sm ">
              {card.paragraph}
            </p>
          </m.div>
        )
      })}
    </>
  )
}

export default ServicesCard

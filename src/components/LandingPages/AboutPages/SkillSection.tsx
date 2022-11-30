import React, { useRef, useEffect, useState } from 'react'
import { motion as m } from 'framer-motion'
import { IconType } from 'react-icons/lib'
//components

import {IconListType} from '../../../interfaces/interface'
//icons
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiMysql,
  SiFirebase
} from 'react-icons/si'

const IconsForList:IconListType[] = [
  { iconName: SiHtml5, iconColor: '#d62828' },
  { iconName: SiCss3, iconColor: '#3A86FF' },
  { iconName: SiSass, iconColor: '#FF99C8' },
  { iconName: SiTailwindcss, iconColor: '#0582CA' },
  { iconName: SiJavascript, iconColor: '#FFD60A' },
  // { iconName: SiTypescript, iconColor: '#3A86FF' },
  { iconName: SiReact, iconColor: '#00A6FB' },
  { iconName: SiRedux, iconColor: '#7B2CBF' },
  // { iconName: SiNodedotjs, iconColor: '#A7C957' },
  // { iconName: SiExpress, iconColor: '#386641' },
  // { iconName: SiPython, iconColor: '#003566' },
  // { iconName: SiMongodb, iconColor: '' },
  // { iconName: SiMysql, iconColor: '' },
  // { iconName: SiFirebase, iconColor: '#FFC300' }
]

const SkillSection: React.FC = () => {
  const [iconTools, setIconTools] = useState<IconListType[]>(IconsForList)
  return (
    <section className="w-full h-fit px-5 pt-10 pb-20 flex items-center justify-center ">
      <main className="w-full h-full flex items-center justify-evenly flex-wrap max-w-[50rem]">
        {iconTools &&
          iconTools.map((icon) => {
            return (
              <m.div
                key={Math.random() * 100}
                initial={{ color: '#ADB5BD' }}
                whileHover={{ color: `${icon.iconColor}` }}
                className="w-fit h-fit"
              >
                <icon.iconName className="w-7 h-auto lg:w-8 cursor-pointer"></icon.iconName>
              </m.div>
            )
          })}
      </main>
    </section>
  )
}

export default SkillSection

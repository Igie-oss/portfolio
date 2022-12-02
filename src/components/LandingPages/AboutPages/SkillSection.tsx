import React, { useRef, useEffect, useState } from 'react'
import { motion as m } from 'framer-motion'

//components

import { IconListType } from '../../../interfaces/interface'
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

const IconsForList: IconListType[] = [
  { iconName: SiHtml5, iconColor: '#d62828', percentage: 80 },
  { iconName: SiCss3, iconColor: '#3A86FF', percentage: 70 },
  { iconName: SiSass, iconColor: '#FF99C8', percentage: 70 },
  { iconName: SiTailwindcss, iconColor: '#0582CA', percentage: 80 },
  { iconName: SiJavascript, iconColor: '#FFD60A', percentage: 80 },
  // { iconName: SiTypescript, iconColor: '#3A86FF' },
  { iconName: SiReact, iconColor: '#00A6FB', percentage: 70 },
  { iconName: SiRedux, iconColor: '#7B2CBF', percentage: 70 }
  // { iconName: SiNodedotjs, iconColor: '#A7C957' },
  // { iconName: SiExpress, iconColor: '#386641' },
  // { iconName: SiPython, iconColor: '#003566' },
  // { iconName: SiMongodb, iconColor: '' },
  // { iconName: SiMysql, iconColor: '' },
  // { iconName: SiFirebase, iconColor: '#FFC300' }
]

const SkillSection = () => {
  const [iconTools, setIconTools] = useState<IconListType[]>(IconsForList)


  return (
    <section className="appliedBgOnCustom w-full h-fit px-5 pt-10 pb-20 flex items-center justify-center ">
      <main className="w-full h-full flex items-center justify-evenly flex-wrap max-w-[50rem]">
        {iconTools &&
          iconTools.map((Icon) => {
            return (
              <m.div
                key={Math.random() * 100}
                initial={{ color: '#ADB5BD' }}
                whileHover={{ color: `${Icon.iconColor}` }}
                className="w-7 h-7 lg:w-8 lg:h-8 relative group transition-all hover:-translate-y-1"
              >

                <span className="text-xs lg:text-sm text-textLight dark:text-textDark absolute -top-10 left-[60%] lg:left-[50%] hidden group-hover:block transition-opacity">
                  {Icon.percentage}%
                </span>

                <div
                  style={{
                    border: '2px solid',
                    borderColor: Icon.iconColor
                  }}
                  className="w-[170%] h-[170%] rounded-full bg-blurLight dark:bg-blurDark absolute -left-[3px] -bottom-[3px] z-0 hidden group-hover:block transition-opacity"
                ></div>

                <Icon.iconName className="w-full h-full cursor-pointer absolute bottom-2 left-2 rounded-sm"/>
              </m.div>
            )
          })}
      </main>
    </section>
  )
}

export default SkillSection

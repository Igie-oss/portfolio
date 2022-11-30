import React, { useState, useEffect } from 'react'
import { motion as m } from 'framer-motion'

import {ExperienceCardType} from '../../../interfaces/interface'

const ExperienceCard = () => {
  const [yearAchivement, setYearAchivement] = useState<ExperienceCardType[]>([])
  const [experience, setExperience] = useState(2)
  const [clients, setClients] = useState(100)
  const [satisfaction, setSatisfaction] = useState(88.9)

  useEffect(() => {
    setYearAchivement([
      { experience: experience },
      { clients: clients },
      { satisfaction: satisfaction }
    ])
  }, [])

  return (
    <>
      {yearAchivement &&
        yearAchivement.map((achive) => {
          const keys = Object.keys(achive)
          const value = Object.values(achive)
          return (
            <div key={Math.random()} className="font-semibold font-mono">
              {
                <>
                  {value.map((v) => {
                    {
                      return (
                        <h1 key={v} className="text-lg">
                          {v}{' '}
                          {keys.map((k) => {
                            return k === 'experience'
                              ? ' Years'
                              : k === 'clients'
                              ? ' +'
                              : k === 'satisfaction'
                              ? ' %'
                              : ''
                          })}
                        </h1>
                      )
                    }
                  })}
                </>
              }
              <p className="opacity-70 text-xs"> {keys}</p>
            </div>
          )
        })}
    </>
  )
}

export default ExperienceCard
//   <m.div key={} initial={{opacity: 0, translateX: 80}} whileInView={{opacity:1, translateX: 0}} transition={{duration:1.6}} className='font-semibold font-mono'>
//   <h1 className='text-lg'>{achivement}{}</h1>
//   <p className='opacity-70 text-xs'>{achivement}</p>
// </m.div>

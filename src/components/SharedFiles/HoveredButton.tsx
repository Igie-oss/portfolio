import React from 'react'
import {motion as m } from 'framer-motion'

type PropType = {
    children: React.ReactNode
}
const HoveredButton:React.FC<PropType> = ({children}) => {
  return (
    <div className="w-fit h-fit hover:p-1 transition-all hover:-translate-x-2 hover:border-2 border-secondaryLight"
    >{children}
    </div>
  )
}

export default HoveredButton
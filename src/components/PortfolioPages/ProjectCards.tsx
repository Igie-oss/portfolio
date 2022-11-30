import React from 'react'
import { SlArrowRight } from 'react-icons/sl'

import { ProjectModel } from '../../interfaces/interface'

const ProjectCards: React.FC<ProjectModel> = (props) => {
  return (
    <div
      className="h-[30rem] w-[19rem] shadow-md mx-5 my-5 bg-lightPrimary dark:bg-darkPrimary text-lightText dark:text-darkText 
    rounded-sm flex flex-col py-3 px-6 relative transition-all"
    >
      <img
        src={props.image}
        alt="images"
        className="w-full h-[60%]  object-cover rounded-sm"
      />
      <h1 className="font-bold text-xl mt-3 ">{props.heading}</h1>
      <p className="text-left text-sm w-full pr-5 mt-3 opacity-70 ">
        {props.pharag}
      </p>
      <button className="flex items-center text-xs pb-1 font-semibold absolute bottom-5 left-6   ">
        Read more
        <SlArrowRight className="w-5 h-4 ml-2 pointer-events-none" />
      </button>
    </div>
  )
}

export default ProjectCards

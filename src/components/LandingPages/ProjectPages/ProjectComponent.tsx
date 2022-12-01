import React from 'react'
import { Element} from 'react-scroll'
import Carosel from './Carosel'
import {Link } from 'react-router-dom'

const ProjectComponent:React.FC = () => {
  return (
    <Element name='project'>
    <section
      className="h-fit w-screen min-h-[90vh] flex flex-col items-center bg-blurLight dark:bg-blurDark py-16 lg:h-screen "
    >
      <div   className="flex flex-col items-center   max-w-[24rem]">

        <em className="text-center mb-3 px-10 border-b-2 border-blurLight font-semibold text-textLight dark:text-textDark text-sm">Portfolio</em>
        <h1  className="text-center my-2 font-bold text-3xl text-textLight dark:text-textDark">My Recent Works</h1>

        <h3 className="text-center my-3 text-xs opacity-75 text-textLight dark:text-textDark ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt mi
          blandit et ac elit eros, viverra. Elementum pellentesque sed
          scelerisque pellentesque auctor accumsan, velit posuere eget.
        </h3>
      </div>

        <Carosel />
      
      <Link to="/projectlist" className="my-5 bg-secondaryLight dark:bg-secondaryDark text-textDark w-fit h-fit px-5 py-3 rounded-sm text-xs font-bold">See more projects</Link>
    </section>
    </Element>
  )
}

export default ProjectComponent

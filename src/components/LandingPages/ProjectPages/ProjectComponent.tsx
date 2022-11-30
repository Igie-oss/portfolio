import React from 'react'

import Carosel from './Carosel'

const ProjectComponent:React.FC = () => {
  return (
    <section id="project"
      className="h-fit w-screen min-h-[90vh] flex flex-col items-center bg-lightBlur dark:bg-darkBlur py-16 lg:h-screen "
    >
      <div   className="flex flex-col items-center   max-w-[24rem]">

        <em className="text-center mb-3 px-10 border-b-2 border-lightSecondary font-semibold text-lightText dark:text-darkText text-sm">Portfolio</em>
        <h1  className="text-center my-2 font-bold text-3xl text-lightText dark:text-darkText">My Recent Works</h1>

        <h3 className="text-center my-3 text-xs opacity-75 text-lightText dark:text-darkText ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt mi
          blandit et ac elit eros, viverra. Elementum pellentesque sed
          scelerisque pellentesque auctor accumsan, velit posuere eget.
        </h3>
      </div>

        <Carosel />
      
      <button className="my-5 bg-lightSecondary text-darkText w-fit h-fit px-5 py-3 rounded-sm text-xs font-bold">See more projects</button>
    </section>
  )
}

export default ProjectComponent

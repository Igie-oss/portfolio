import React from 'react'

import { ProjectInter } from '../../interfaces/interface'
import ProjectCards from './ProjectCards'

import {sampleProject} from '../../DataFile/data'
const ProjectList = () => {
  
  return (
    <section className="w-screen h-screen pt-10 flex flex-wrap">
     
      <ProjectCards />

    </section>
  )
}

export default ProjectList

import React from 'react'

import { ProjectModel } from '../../interfaces/interface'
import ProjectCards from './ProjectCards'

import Image2 from '../../assets/2pic.jpg'

const ProjectList = () => {
  const myProjectList: ProjectModel[] = [
    {
      image: Image2,
      heading: 'This is a Heading',
      pharag:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum,',
      url: 'http://'
    },
    {
      image: Image2,
      heading: 'This is a Heading',
      pharag:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum,',
      url: 'http://'
    },
    {
      image: Image2,
      heading: 'This is a Heading',
      pharag:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum,',
      url: 'http://'
    },
    {
      image: Image2,
      heading: 'This is a Heading',
      pharag:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum,',
      url: 'http://'
    }
  ]
  return (
    <section className="w-screen h-screen pt-10 flex flex-wrap">
      {myProjectList.map((list, index) => {
        return <ProjectCards key={index} {...list} />
      })}
    </section>
  )
}

export default ProjectList

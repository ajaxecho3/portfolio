import React from 'react'

import ProjectCard from '../../components/ProjectCard'
import { projectList } from '../../utils/data/projects'
function Work() {
  return (
    <div name='worl' className='bg-[#0a192f] w-full md:h-screen  text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#FCAF3C]'>Work</p>
          <p className='py-6'>{`//Check out some of my recent work`}</p>
        </div>

        <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {
              projectList?.map((project, index) => (
                <ProjectCard key={index} tumbnail={'./0.png'} name={project.title} demourl={project.url} githubrepo={project.githubrepo} />
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Work
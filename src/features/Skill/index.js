
import React from 'react'
import SkillCard from '../../components/SkillCard'
import { skills } from '../../utils/data/skills'
export default function Skills() {
  return (
    <div name='name' className='bg-[#0a192f] w-full h-screen  text-gray-300'>
      {/* container */}  
     <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div >
          <p className='text-4xl font-bold inline border-b-4 border-[#FCAF3C]'>Skill</p>
          <p className='py-4'>{`//There are the techonologie I've worked with`}</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {
            skills?.map((skill, index) => (
              <SkillCard key={index} imgsource={skill.tumbnail } skillName={skill.name} />
            ))
          }
        </div>
     </div>
    </div>
  )
}

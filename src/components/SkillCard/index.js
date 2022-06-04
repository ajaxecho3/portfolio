import React from 'react'

function SkillCard({
  imgsource,
  skillName
}) {
  return (
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
      <img className='w-20 mx-auto' src={imgsource} alt="icon" />
      <p>{skillName}</p>
    </div>
  )
}

export default SkillCard
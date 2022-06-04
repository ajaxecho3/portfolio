import React from 'react'

function ProjectCard({
  tumbnail,
  name,
  demourl,
  githubrepo,
}) {
  return (
    <div style={{ backgroundImage: `url(${tumbnail})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
      <div className='opacity-0 group-hover:opacity-100'>
        <span className='text-2xl font-bold text-white tracking-wide'>
          {name}
        </span>
        <div className='pt-8 text-center'>
          <a href={demourl}>
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
          </a>
          <a href={githubrepo}>
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
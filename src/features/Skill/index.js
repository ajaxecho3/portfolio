import React from 'react'
import tumbnail0 from '../../assets/pictures/0.png'
import tumbnail1 from '../../assets/pictures/1.png'
import tumbnail2 from '../../assets/pictures/2.png'
import tumbnail3 from '../../assets/pictures/3.png'
import tumbnail4 from '../../assets/pictures/4.png'
import tumbnail5 from '../../assets/pictures/5.png'
import tumbnail6 from '../../assets/pictures/6.png'
import tumbnail7 from '../../assets/pictures/7.png'
export default function Skills() {
  return (
    <div name='name' className='bg-[#0a192f] w-full h-screen  text-gray-300'>
      {/* container */}  
     <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div >
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skill</p>
          <p className='py-4'>{`//There are the techonologie I've worked with`}</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={tumbnail0} alt="icon"/>
            <p>ReactJs</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={tumbnail1} alt="icon"/>
            <p>ReactJs</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={tumbnail2} alt="icon"/>
            <p>ReactJs</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={tumbnail3} alt="icon"/>
            <p>ReactJs</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={tumbnail4} alt="icon"/>
            <p>ReactJs</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={tumbnail5} alt="icon"/>
            <p>ReactJs</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={tumbnail6} alt="icon"/>
            <p>ReactJs</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={tumbnail7} alt="icon"/>
            <p>ReactJs</p>
          </div>
        </div>
     </div>
    </div>
  )
}

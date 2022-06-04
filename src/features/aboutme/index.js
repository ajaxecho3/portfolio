import React from 'react'


export default function About(props) {

  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full  grid grid-cols-1 gap-8'>
          <div className='sm: text-center pb-8 '>
            <p className='text-4xl font-bold inline border-b-4 border-[#FCAF3C]'>About</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8'>
          <div className='text-4x; font-bold sm:text-right px-4'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque non. Rhoncus aenean vel elit scelerisque mauris. Vulputate dignissim suspendisse in est ante. Auctor augue mauris augue neque gravida.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque non. Rhoncus aenean vel elit scelerisque mauris. Vulputate dignissim suspendisse in est ante. Auctor augue mauris augue neque gravida.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

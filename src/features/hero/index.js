import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
function Home() {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
        {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className="text-[#FCAF3C] text-3xl">Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Bernardino Ochoa</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque non. Rhoncus aenean vel elit scelerisque mauris. Vulputate dignissim suspendisse in est ante. Auctor augue mauris augue neque gravida.</p>
        <div>
          <button className='text-white border-2 group px-6 py-3 my-2 flex items-center hover:bg-[#FCAF3C] hover:border-[#FCAF3C]'>
            View Work 
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
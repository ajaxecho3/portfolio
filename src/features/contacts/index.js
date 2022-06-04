import React from 'react'

export default function Contacts(props) {
  

  return (
    <div className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/e9ec07e5-9073-4621-8921-cdcb623b1cf9' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#FCAF3C] text-gray-300'> Contact</p>
          <p className='py-4 text-gray-300'>{`//Submit the form below or shoot me an email - ajaxecho3@gmail.com`}</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type={"text"} placeholder="Name" name='name'/>
        <input className='bg-[#ccd6f6] p-2 my-4' type={"email"} placeholder="Email" name='email'/>
        <textarea className='bg-[#ccd6f6] p-2' rows={"5"} placeholder="Message" name='message'/>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}



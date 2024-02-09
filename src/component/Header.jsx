import React from 'react'

export const Header = () => {
  return (
    <div className='text-center pt-8 px-8'>
        <span className='text-2xl px-12 py-2 bg-purple-700 rounded-lg text-white'>
          Golden Technology Limited
        </span>
        <p className='text-3xl mx-20 mt-10 mb-4'>
          Welcome to Golden Technology Limited, where a dedicated team of professionals works together 
          brings innovation, creativity and epertise to software industry. get to know the 
          individuals who make our company thrive.
        </p>
        <hr className='h-2 bg-purple-500 my-8'/>
        <h2 className=' text-3xl font-bold mb-8'>Meet Out Team</h2>
    </div>
  )
}
export default Header;
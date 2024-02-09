import React from 'react';
import img1 from '../assest/img1.jpg';

export const Team3 = () => {
  return (
    <div className='mt-10 text-center'>
      <span className='text-1xl px-6 py-2 bg-purple-700 rounded-lg text-white'>
        Sales & Marketing Team
      </span>
      <div className='grid px-8 md:grid-cols-3 mt-8 space-x-4 space-y-4 mb-8 text-2xl'>
        <div className='text-center space-y-4 '>
          <img className='h-60 w-60 ms-36' src={img1} alt="" />
          <h2 className='font-bold'>Aman</h2>
          <h3>Team Lead</h3>
        </div>
        <div className='text-center  '>
          <img className='h-60 w-60 ms-36' src={img1} alt="" />
          <h2 className='font-bold'>Ketan</h2>
          <h3>Team Lead</h3>
        </div>
        <div className='text-center  '>
          <img className='h-60 w-60 ms-36' src={img1} alt="" />
          <h2 className='font-bold'>Anuj</h2>
          <h3>Sales Officer</h3>
        </div>
        <div className='text-center  '>
          <img className='h-60 w-60 ms-36' src={img1} alt="" />
          <h2 className='font-bold'>Pranit</h2>
          <h3>Sales Officer</h3>
        </div>
        <div className='text-center  '>
          <img className='h-60 w-60 ms-36' src={img1} alt="" />
          <h2 className='font-bold'>Neha</h2>
          <h3>Marketing Officer</h3>
        </div>
        <div className='text-center  '>
          <img className='h-60 w-60 ms-36' src={img1} alt="" />
          <h2 className='font-bold'>Ishan</h2>
          <h3>Marketing Officer</h3>
        </div>
      </div>
    </div>
  )
}
export default Team3;
import React from 'react';
import img1 from '../assest/img1.jpg';

export const Team1 = () => {
  return (
    <div className='mt-10 text-center'>
      <span className='text-1xl px-6 py-2 bg-purple-700 rounded-lg text-white'>
        Leadership/Management Team
      </span>
      <div className='grid px-8 md:grid-cols-3 mt-8 space-x-4 space-y-4'>
        <div className='text-center space-y-4 '>
          <img className='h-60 w-60 ms-36' src={img1} alt="" />
          <h2 className='font-bold'>Nikhil</h2>
          <h3>Founder</h3>
        </div>
        <div className='text-center  '>
          <img className='h-60 w-60 ms-36' src={img1} alt="" />
          <h2 className='font-bold'>Tanu</h2>
          <h3>CEO</h3>
        </div>
        <div className='text-center  '>
          <img className='h-60 w-60 ms-36' src={img1} alt="" />
          <h2 className='font-bold'>Rahul</h2>
          <h3>VP,Development & Growth</h3>
        </div>
        <div className='text-center  '>
          <img className='h-60 w-60 ms-36' src={img1} alt="" />
          <h2 className='font-bold'>Tanishk</h2>
          <h3>VP,Sales & Marketing</h3>
        </div>
        <div className='text-center  '>
          <img className='h-60 w-60 ms-36' src={img1} alt="" />
          <h2 className='font-bold'>Aman</h2>
          <h3>VP,Finance</h3>
        </div>
        <div className='text-center  '>
          <img className='h-60 w-60 ms-36' src={img1} alt="" />
          <h2 className='font-bold'>Neha</h2>
          <h3>VP,Operations</h3>
        </div>
      </div>
    </div>
  )
}
export default Team1;
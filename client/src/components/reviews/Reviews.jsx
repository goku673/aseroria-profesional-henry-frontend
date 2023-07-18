import React from 'react'

const Reviews = () => {

  return (
    <div className='shadow-lg w-[400px] h-[150px] rounded px-4 border hover:scale-105 bg-white hover:transition-all duration-500'>
      <div className='flex items-center justify-between w-full h-[40px]'>
        <p className='font-thin underline italic pl-2 pt-2'>Reviews</p>
        <div className='text-green-500 mt-1'>
          <span className="material-symbols-outlined">check_circle</span>
        </div>
      </div>
      <p className='font-thin text-justify'>Aliquam sit amet maximus nunc. Donec ultricies placerat libero, vel bibendum ex aliquet eu. Fusce non massa vel nulla molestie scelerisque porta eget diam.</p>
    </div>
  )
}

export default Reviews
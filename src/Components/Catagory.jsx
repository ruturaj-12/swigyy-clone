import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { jsx } from 'react/jsx-runtime';

export default function Catagory() {
 

   return (

    <div className=' max-w-[1100px] mx-auto  '>

      <div className='p-4 flex items-center'>
        <p className='text-xl font-bold '>What's on your mind?</p>

        <div className='flex gap-2 ml-auto'>
          <button className='catagoryButton'><FaArrowLeft /></button>
          <button className='catagoryButton'><FaArrowRight /></button>
        </div>
      </div>
   
   </div>
  )
}

import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
import { TbHelpSquareRounded } from "react-icons/tb";
import { IoLogInOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";




export default function Header() {
  return (
    <header className='p-[13px]  shadow-xl text-[#686b78]'>
      <div className='max-w-[85%] mx-auto flex items-center'>
      
        <div id='logo'>
          <a href="#"><img className='w-[80px]' src="images\Swiggy-emblem.png" alt="" /></a>
        </div>
        
        <div id='location' className='text-[13px]'>
          <span className='font-bold border-b-2'>Chinchwad </span> <br /> Pune, Maharashtra India
          <button className=''>
            <MdKeyboardArrowDown fontSize={20} className='inline text-[#fc8019]' />
          </button>
        </div>
        
        <div class="space-x-10 text-[15px] ml-auto flex">
          <button className='navFont '><LuSearch className='navIcon'/> Search</button>
          <button className='navFont'><BiSolidOffer className='navIcon'/> Offers</button>
          <button className='navFont'><TbHelpSquareRounded className='navIcon'/> Hep</button>
          <button className='navFont'><IoLogInOutline className='navIcon'/> Sign In</button>
          <button className='navFont'><CiShoppingCart className='navIcon'/> Cart</button>
        </div>

      </div>

    </header>
  )
}

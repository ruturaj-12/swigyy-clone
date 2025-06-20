import React, { useState } from 'react'


import { MdKeyboardArrowDown } from "react-icons/md";    //logo
import { LuSearch } from "react-icons/lu";               //logo
import { BiSolidOffer } from "react-icons/bi";           //logo
import { TbHelpSquareRounded } from "react-icons/tb";    //logo
import { IoLogInOutline } from "react-icons/io5";        //logo
import { CiShoppingCart } from "react-icons/ci";         //logo




export default function Header() {
  const [toggle, setToggle] = useState(false)

  const openLocationMenu = () => {
    setToggle(true)
  }

  const closeLocationMenu = () => {
    setToggle(false)
  }

  return (
    <>
      <div className='blackoverlay w-full h-full fixed duration-500 ' style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ? "visible" : "hidden"
      }}>
        <div id='locationMenu' className='bg-white h-full w-[500px] fixed'>
          <div className='text-black'>
            <div className='w-[300px] h-[400px] ml-[100px] mt-5 border-amber-200 border-2'>
              <span onClick={closeLocationMenu} className='text-2xl cursor-pointer'>&times;</span>
              <input type="button" value="" />              
            </div>
          </div>
        </div>
      </div>
      <header className='p-[13px]  shadow-xl text-[#686b78]'>
        <div className='max-w-[85%] mx-auto flex items-center'>

          <div id='logo'>
            <a href="#"><img className='w-[80px]' src="images\Swiggy-emblem.png" alt="" /></a>
          </div>

          <div id='location' className='text-[13px]'>
            <span className='font-bold border-b-2'>Chinchwad </span> <br /> Pune, Maharashtra India
            <button className='' >
              <MdKeyboardArrowDown onClick={openLocationMenu} fontSize={20} className='inline text-[#fc8019] cursor-pointer ' />
            </button>
          </div>

          <div class="space-x-10 text-[15px] ml-auto flex">
            <button className='navFont '><LuSearch className='navIcon' /> Search</button>
            <button className='navFont'><BiSolidOffer className='navIcon' /> Offers</button>
            <button className='navFont'><TbHelpSquareRounded className='navIcon' /> Hep</button>
            <button className='navFont'><IoLogInOutline className='navIcon' /> Sign In</button>
            <button className='navFont'><CiShoppingCart className='navIcon' /> Cart</button>
          </div>

        </div>

      </header>
    </>
  )
}

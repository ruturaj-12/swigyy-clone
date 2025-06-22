import React, { useState } from 'react'


import { CgClose } from "react-icons/cg";

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
      {/* Location Menu background  */}
      <div className='backdrop-blur-[5px] w-full h-full fixed duration-400 flex items-center justify-center'
        onClick={closeLocationMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden"
        }}>

        {/* location Menu Card*/}
        <div onClick={(e) => { (e.stopPropagation()) }}
          className='p-3 h-[400px]   w-[300px] absolute  shadow-2xl shadow-black  rounded-[15px] '>

          {/* Location Menu Content */}
          {/* Close Icon */}
          <CgClose onClick={closeLocationMenu}
            className=' text-[18px]  hover:text-[#fc8019]' />
          {/* Search Bar */}
          <div className='pt-10 flex items-center justify-center'>
            <input type="text" placeholder=' Search Location' className=' outline-none border-[1.5px] rounded-[5px] ' />
          </div>
        </div>
      </div>

      <header className='p-[13px]  shadow-xl text-[#686b78]'>
        <nav className='max-w-[85%] mx-auto flex items-center'>

          <div id='logo'>
            <a href="#"><img className='w-[80px]' src="images\Swiggy-emblem.png" alt="" /></a>
          </div>

          <div id='location' className='text-[13px]'>
            <span className='font-bold border-b-2'>Chinchwad </span> <br /> Pune, Maharashtra India
            <button className='' >
              <MdKeyboardArrowDown onClick={openLocationMenu} fontSize={20} className='inline text-[#fc8019] cursor-pointer ' />
            </button>
          </div>

          <div class="space-x-10  ml-auto flex">
            <button className='nav-Buttons'><LuSearch className='nav-Icons' /> Search</button>
            <button className='nav-Buttons'><BiSolidOffer className='nav-Icons' /> Offers</button>
            <button className='nav-Buttons'><TbHelpSquareRounded className='nav-Icons' /> Hep</button>
            <button className='nav-Buttons'><IoLogInOutline className='nav-Icons' /> Sign In</button>
            <button className='nav-Buttons'><CiShoppingCart className='nav-Icons' /> Cart</button>
          </div>

        </nav>

      </header>
    </>
  )
}

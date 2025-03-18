import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import Avatar from 'react-avatar';

const Navbar = () => {
  return (
    <>
    <div className='flex justify-between items-center mt-3'>

      <div className=' flex items-center justify-center mx-6 py-4 gap-4'>
        <GiHamburgerMenu className='text-3xl' />
        <img className='h-11' src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png' />
      </div>
      {/* middle side start */}
      <div className='md:block hidden w-[50%] mr-60'>
        <div className='flex items-center bg-gray-300 px-2 py-3 rounded-full gap-8'>
          <IoSearch size={"24px"} className='text-gray-700 ml-2' />
          <input className='rounded-full w-full bg-transparent outline-none px-1' type=' text' placeholder='
        Search mail'/>

        </div>
      </div>
      {/* input box end*/}



{/* ----------------------------------------------------------------------------------------------- */}
      {/* right side  */}

      <div className=' flex items-center justify-between mr-7 '>

        <div className=' flex items-center gap-8 '>

          <RxQuestionMarkCircled size={"28px"} />
          <IoSettingsOutline size={"28px"} />
          <TbGridDots  size={"28px"}/>
        </div>
      </div>


      {/* avatar section */}
      <Avatar className='rounded-full mr-6 ' size='50' src='https://static.vecteezy.com/system/resources/thumbnails/023/133/583/small/man-with-glasses-and-headphones-logo-vector.jpg'/>
      {/* ---------- */}


    </div>
    {/* boreder bottom------------------------------------------- */}
      <div className='border-b-2 mt-2'></div>
        </>
  )
}

export default Navbar
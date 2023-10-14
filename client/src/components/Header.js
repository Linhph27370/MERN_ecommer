import React from 'react'
import logo from '../assets/logo_digital_new_250x.png'
import icons from '../ultils/icons'
import {Link} from 'react-router-dom'
import path from '../ultils/path'
const Header = () => {
    const { HiPhone ,HiOutlineMail ,BiShoppingBag ,FaUserCircle } = icons

  return (
    <div className='border w-main flex justify-between h-[110px] py-[35px]'>
        <Link to={`/${path.HOME}`}>
            <img src={logo} alt='logo' className='w-[234px] object-contain'></img>
        </Link>
        <div className='flex text-[13px]'>
            <div className='flex flex-col px-6 border-r items-center'>
                <span className='flex gap-4 items-center'>
                    <HiPhone size={24} color='red' />
                    <span className='font-semibold'>(+1800) 000 8808</span>
                </span>
                <span>Mon-Sat 9:00AM - 8:00PM</span>
            </div>
            <div className='flex flex-col px-6 border-r items-center'>
                <span className='flex gap-4 items-center'>
                    <HiOutlineMail size={24} color='red' />
                    <span className='font-semibold'>SUPPORT@TADATHEMES.COM</span>
                </span>
                <span>Online Support 24/7M</span>
            </div>
            <div className='flex px-6 border-r items-center justify-center'>
                <BiShoppingBag size={24} color='red'/>
                <span>Item (0)</span>
            </div>
            <div className='flex px-6 items-center justify-center'>
                <FaUserCircle size={24}/>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Header
import React, {memo, useEffect} from 'react'
import { Link } from 'react-router-dom'
import path from '../ultils/path'
import { getCurrent } from '../store/user/asyncActions'
import { useDispatch, useSelector } from 'react-redux'
import icons from '../ultils/icons'
import { logout } from '../store/user/userSlice'
const TopHeader = () => {
  const { CiLogout } = icons
  const dispatch = useDispatch()
  const {isLoggedIn,current} = useSelector(state => state.user)
  useEffect(()=>{
      if(isLoggedIn) dispatch(getCurrent())
    console.log(current?.firstname);
    console.log(isLoggedIn);
    },[dispatch,isLoggedIn])


  return (
    <div className='h-[38px] w-full bg-main flex items-center justify-center'>
        <div className='w-main flex items-center justify-between text-white'>
         <span>ORDER ONLINE OR CALL US (+1800) 000 8808</span>
         {isLoggedIn
         ? <div className='flex gap-4 text-sm justify-center'>
            <span>{`Welcome, ${current?.firstname}`}</span>
            <span 
              onClick={() => dispatch(logout())}
              className='hover:rounded-full hover:bg-slate-100 hover:text-main cursor-pointer p-2'
              ><CiLogout size={18} /></span>
         </div>
         :<Link className='hover:text-gray-800' to={`/${path.LOGIN}`}>
         <span> Sign In or Create Account </span>
         </Link>
        }
        </div>
    </div>
  )
}

export default memo(TopHeader)
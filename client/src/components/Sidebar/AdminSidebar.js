import React, { memo, Fragment } from 'react'
import logo from '../../assets/logo_digital_new_250x.png'
import { NavLink } from 'react-router-dom'
import { adminSidebar } from '../../ultils/contants'
import clsx from 'clsx'
const acctiveStyle = 'px-4 py-2 flex items-center gap-2 text-gary-200 bg-gray-500'
const notActivedStyle = 'px-4 py-2 flex items-center gap-2 text-gary-200 '
const AdminSidebar = () => {
    return (
        <div className='bg-sky-600 h-full py-4'>
            <div className='flex flex-col justify-center items-center gap-2 p-4'>
                <img src={logo} alt='logo' className='w-[200px] object-contain' />
                <small>Admin WorkSpace</small>
            </div>
            <div>
                {adminSidebar.map(el => (
                    <Fragment key={el.id}>
                        {el.type === 'SINGLE' && <NavLink
                            to={el.path}
                            className={({isActive}) => clsx(isActive && acctiveStyle , !isActive && notActivedStyle)}
                        >
                            <span>{el.icons}</span>
                            <span>{el.text}</span>
                        </NavLink>}
                        {el.type === 'PARENT' && <div className=' flex flex-col text-gray-200 '>
                            <div className='flex items-center gap-2 px-4 py-2 hover:bg-gray-400'>
                            <span>{el.icons}</span>
                            <span>{el.text}</span>
                            </div>
                            <div className='flex flex-col pl-6'>
                                {el.submenu.map(item =>(
                                    <NavLink 
                                        key={item.text} 
                                        to={item.path}
                                        className={({isActive}) => clsx(isActive && acctiveStyle , !isActive && notActivedStyle)}
                                    >
                                        {item.text}
                                        
                                    </NavLink>
                                ))}
                            </div>
                        </div>}
                    </Fragment>
                ))}
            </div>
       
        </div>
    )
}

export default memo(AdminSidebar) 
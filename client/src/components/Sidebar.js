import React, { useEffect, useState } from 'react'
import { apiGetCategoies } from '../apis/app'
import { createSlug } from '../ultils/helper'
import { NavLink } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux'
const Sidebar = () => {
  const { categories } = useSelector(state => state.app)
  return (
    <div className='flex flex-col'>
      {categories?.map(el =>(
        <NavLink
        key={createSlug(el.title)}
        to={`/${createSlug(el.title)}`} className={({isActive }) => isActive 
        ? 'bg-main text-white px-5 pt-[15px] pb-[14px] test-sm hover:text-main'
        : 'px-5 pt-[15px] pb-[14px] test-sm hover:text-main'}
        >
          
          {el.title}
        </NavLink>
      ))}
    </div>
  )
}

export default Sidebar
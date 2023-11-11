import React from 'react'

const Productextrainfo = ({icon, title, sub}) => {
  return (
    <div className='flex items-center p-2 gap-4 mb-[10px] border'>
        <span className='p-2 bg-black rounded-full flex items-center text-white'>{icon}</span>
        <div className='flex flex-col text-sm text-gray-500'>
          <span className='font-medium'>{title}</span>
          <span className='text-xs'>{sub}</span>
        </div>
    </div>
  )
}

export default Productextrainfo
import React ,{memo}from 'react'

const Countdown = ({unit, number}) => {
  return (
    <div className='w-[30%] flex h-[60px] border justify-center items-center bg-gray-100 rounded-md'>
        <span className='text-[18px] text-gray-800'>{number}</span>
        <p className="text-xs text-gray-700 ml-2">{unit}</p>
    </div>
  )
}

export default memo(Countdown)
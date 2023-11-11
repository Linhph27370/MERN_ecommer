import React, { memo } from 'react'

const SelectQuantity = ({quantity,handleQuantity,handleChangeQuantity}) => {
  return (
    <div className='flex items-center'>
        <span onClick={() => handleChangeQuantity('minus')} className='text0[24px] cursor-pointer p-2 border-r border-red-400'>-</span>
        <input 
            className='py-2 px-4 w-[50px]' 
            type='text' 
            value={quantity}
            onChange={e => handleQuantity(e.target.value)}
            />
        <span onClick={() => handleChangeQuantity('plus')} className='text0[24px] cursor-pointer p-2 border-l border-red-400'>+</span>
    </div>
  )
}

export default memo(SelectQuantity) 
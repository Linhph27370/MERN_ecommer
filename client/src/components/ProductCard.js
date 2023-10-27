import React from 'react'
import { formatMoney, renderStartFromNumber } from '../ultils/helper'

const ProductCard = ({price, totalRatings, title , image}) => {
  return (
    <div className='w-1/3 flex-auto px-[10px] mb-[20px]'>
        <div className='flex w-full border '>
        <img src={image} alt='products' className='w-[90px] object-contain p-4' />
        <div className='flex flex-col mt-[15px] items-start gap-1 w-full text-xs'>
            <span className='line-clamp-1 lowercase '>{title?.toLowerCase()}</span>
            <span className='flex h-4'>{renderStartFromNumber(totalRatings, 14)}</span>
            <span>{`${formatMoney(price)} VND`}</span>
        </div> 
        </div>

    </div>
  )
}

export default ProductCard
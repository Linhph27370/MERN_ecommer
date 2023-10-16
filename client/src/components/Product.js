import React from 'react'
import { formatMoney } from '../ultils/helper'
import labelNew from '../assets/label-new.png'
import labelTrending from '../assets/trending.png'
const Product = ({productData, isNew}) => {
  return (
    <div className='w-full text-base px-[10px]'>
      <div className='w-full border p-[15px] flex flex-col items-center'>
      <div className='w-full relative'>
      <img
        src={productData?.thumb || 'https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png'}className='w-[243px] h-[243px] object-cover'
        />
        <img src={isNew ? labelNew : labelTrending} alt='' className='absolute top-[0px] right-0 w-[100px] h-[35px] object-cover' />
      </div>
        <div className='flex flex-col mt-[15px] items-start gap-1 w-full'>
          <span className='line-clamp-1'>{productData?.title}</span>
          <span>{`${formatMoney(productData?.price)} VND`}</span>
        </div> 
      </div>
    </div>
  )
}

export default Product

// cach 1 
/* <img src={isNew ? label : labelblue} alt='' className='absolute top-[-15px] left-[-38px] w-[100px] h-[35px] object-cover' /> */
{/* <span className='font-bold absolute top-[-12px] left-[-10px] text-white'>{isNew ? 'new' : 'trending'}</span> */}
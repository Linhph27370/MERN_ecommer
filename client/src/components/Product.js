import React, {useState} from 'react'
import { formatMoney } from '../ultils/helper'
import labelNew from '../assets/label-new.png'
import labelTrending from '../assets/trending.png'
import { renderStartFromNumber } from '../ultils/helper'
import {SelectOption} from './'
import icons from '../ultils/icons'
const {AiFillEye,AiOutlineShoppingCart,AiFillHeart} = icons

const Product = ({productData, isNew}) => {
  const [isShowOption, setIsShowOption] = useState(false)
  return (
    <div className='w-full text-base px-[10px]'>
      <div
      className='w-full border p-[15px] flex flex-col items-center'
      onMouseEnter={e => {
        e.stopPropagation()
        setIsShowOption(true)
      }}
      onMouseLeave={e => {
        e.stopPropagation()
        setIsShowOption(false)
      }}
      >
      <div className='w-full relative'>
        {isShowOption && <div className='absolute bottom-[-10px] left-0 right-0 flex justify-center gap-2 animate-slide-top'>
            <SelectOption icon={<AiFillEye />}/>
            <SelectOption icon={<AiOutlineShoppingCart />}/>
            <SelectOption icon={<AiFillHeart />}/>
        </div> }
        
      <img
        src={productData?.thumb || 'https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png'}className='w-[274px] h-[274px] object-cover'
        />
        <img src={isNew ? labelNew : labelTrending} alt='' className='absolute top-[0px] right-0 w-[100px] h-[35px] object-cover' />
      </div>
        <div className='flex flex-col mt-[15px] items-start gap-1 w-full'>
        <span className='flex'>{renderStartFromNumber(productData?.totalRatings)}</span>
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
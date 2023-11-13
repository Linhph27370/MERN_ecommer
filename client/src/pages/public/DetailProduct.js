import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiGetProduct , apiGetProducts} from '../../apis'
import { Breadcrumb, Productextrainfo ,Button, SelectQuantity , ProductInformation, CustomSlider} from '../../components'
import Slider from 'react-slick';
import ReactImageMagnify from 'react-image-magnify';
import {formatMoney, renderStartFromNumber} from '../../ultils/helper'
import { productExtraInfo } from '../../ultils/contants';
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};
const DetailProduct = () => {
  const { pid , title, category } = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [relatedProduct, setRelatedProduct] = useState(null)
  const fetchProductData = async () =>{
    const response = await apiGetProduct(pid)
    if(response.success) setProduct(response.productData)
  }
  const fetchProducts = async () =>{
    const response = await apiGetProducts({category})
    if(response.success) setRelatedProduct(response.products)
  }
  useEffect(() =>{
      if(pid) 
        fetchProductData()
        fetchProducts()
  },[pid])
  const handleQuantity = useCallback((number)=>{
    console.log(number);
    if(!Number(number) || Number(number < 1 )) {
      alert('Số lượng phải là số nguyên dương')
        return;

    }else setQuantity(number)
    
  },[quantity])
  const handleChangeQuantity = useCallback((flag)=>{
    if(flag === 'minus' && quantity === 1) return
      if(flag === 'minus') setQuantity(prev => +prev -1 )
      if(flag === 'plus') setQuantity(prev => +prev +1 )

  },[quantity])
  // console.log(pid)
  return (
    <div className='w-full'>
        <div className='h-[81px] bg-gray-100 p-2 mt-2 '>
          <h3 className='font-bold'>{title}</h3>
          <Breadcrumb title={title} category={category} />
        </div>
        <div className='w-main m-auto mt-4 flex'>
          <div className='w-2/5 flex flex-col gap-4'>
            <div className='h-[458px] w-[458px] border'>
            <ReactImageMagnify {...{
              smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: true,
                  src: product?.thumb
              },
              largeImage: {
                  src: product?.thumb ,
                  width: 800,
                  height: 800
              }
            }} />
            </div>
          <div className='w-[458px]'>
            <Slider {...settings}>
                {product?.images?.map(el =>(
                  <div className='px-2'>
                    <img src={el} className='h-[143px] border w-[143px] object-cover'  />
                  </div>
                ))}
            </Slider>
          </div>
          </div>
          
          <div className='w-2/5'  >
            <h2 className='text-xl text-[35px] font-semibold text-black mb-2'>{product?.title} VND</h2>
            <div className='flex items-center justify-between'>  
              <h3 className='text-[25px] text-main font-semibold'>{`${formatMoney(product?.price)} VND`} </h3>
              <span className='text-sm text-green-500'>{`kho: ${product?.quantity}`}</span>
            </div>
           
            <div className='flex items-center gap-1'>
              {renderStartFromNumber(product?.totalRatings)?.map((el,index) => (<span key={index}>{el}</span>))}
              <span className='italic text-[15px] text-gray-700 font-semibold'>{`(sold : ${product?.sold})`}</span>
            </div>
            <ul className=' list-disc text-sm text-gray-500 pl-5'>
               {product?.description?.map(el =>(<li className=' leading-7' key={el}>{el}</li>))}
            </ul>
            <div className='flex flex-col gap-8'>
              <div className='flex items-center gap-2'>
              <span>Quantity :</span>
              <SelectQuantity 
              quantity={quantity} 
              handleQuantity={handleQuantity} 
              handleChangeQuantity={handleChangeQuantity}
              />
              </div>
            <Button
              fw
              style={`px-4 py-2 border border-red-500 rounded-md text-white bg-main text-semibold my-2 hover:bg-white hover:text-main `}
            >
              Add to cart
            </Button>
              
            </div>
          </div>
          <div className='w-1/5'>
            {productExtraInfo.map(el => (
              <Productextrainfo
                key={el._id} 
                title={el.title}
                icon={el.icon}
                sub={el.sub}
              />
            ))}
          </div>
        </div>
        <div className='mt-8'>
          <ProductInformation />
        </div>
        <div className='mt-8'>
          <h3 className='text-[20px] font-semibold py-[15px] border-b-2 border-main'>ORDER ALSO LIKED</h3>
  
        </div>
        <div className='h-[200px] w-full'>
           <CustomSlider products={relatedProduct} normal={true} />
        </div>
    </div>
  )
}

export default DetailProduct
import React, { memo } from 'react'
import Slider from 'react-slick';
import {Product} from './'
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
const CustomSlider = ({products, activeTab}) => {
  return (
    <>
        {products && <Slider {...settings}>
            {products?.map((el, index) =>(
              <Product 
                key={index}
                productData={el}
                pid={el.id}
                isNew={activeTab === 1 ? false : true}
              />
            ))}
        </Slider>}
    </>
  )
}

export default memo(CustomSlider) 
import React, { useEffect, useState } from 'react'
import {ProductCard} from './'
import { apiGetProducts } from '../apis/product'
import banner1 from '../assets/banner1-bottom-home2_b96bc752-67d4-45a5-ac32-49dc691b1958_600x.webp'
import banner2 from '../assets/banner4-bottom-home2_92e12df0-500c-4897-882a-7d061bb417fd_400x.webp'
import banner3 from '../assets/banner3-bottom-home2_400x.avif'
import banner4 from '../assets/banner2-bottom-home2_400x.avif'
const FeatureProducts = () => {
    const [products,setProducts] = useState(null)
    const fetchProducts = async () =>{
        const response = await apiGetProducts({limit: 9, totalRatings:5})
        if(response.success) setProducts(response.products)
    }
    useEffect(() =>{
        fetchProducts();
    },[])

  return (
    <div>
        <h3 className='text-[20px] font-semibold py-[15px] border-b-0 border-main'>FeatureProducts</h3>
        <div className='flex flex-wrap mt-[15px] mx-[10px]'>
            {products?.map(el => (
                <ProductCard 
                    key={el._id}
                    image={el.thumb}
                    title={el.title}
                    totalRatings={el.totalRatings}
                    price={el.price}
                />
            ))}
        </div>  
        <div className='flex justify-between'>
            <img 
                src={banner1} 
                className='w-[50%] object-contain'
            />
            <div className='flex flex-col justify-between gap-4 w-[24%]'>
                <img 
                    src={banner3} 
                />
                <img 
                    src={banner4} 
                />
            </div>
            
            <img 
                src={banner2} 
                className='w-[24%] object-contain'
            />
        </div>
    </div>
  )
}

export default FeatureProducts
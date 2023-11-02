import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {  } from '../../components'
import { apiGetProducts } from '../../apis/product'

const Product = () => {
  const [products, setProducts] = useState(null)
  const { category } = useParams()
  const fetchProductsByCategory = async (queries) => {
    const response = await apiGetProducts(queries)
      if(response.success) setProducts(response.products)
      
  }
  
  useEffect(() =>{
    fetchProductsByCategory()
  },[])

  return (
    <div className='w-full'>
      <div className='h-[81px] felx justify-center items-center bg-gray-100'>
        <div className='w-main'>
          <h1 className='font-semibold uppercase'>{category}</h1>
        </div>
        
      </div>
      <div className='w-main border p-4 flex justify-between'>
            <div className='w-4/5 flex-auto'>
                Filter
            </div>
            <div className='w-1/5'>
              Sort by 
            </div>
        </div>
        <div className='mt-8 w-main m-auto'>

        </div>
        <div className='w-full h-[500px]'></div>
    </div>
  )
}

export default Product
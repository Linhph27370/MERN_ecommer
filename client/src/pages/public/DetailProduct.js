import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { apiGetProduct } from '../../apis'
const DetailProduct = () => {
  const { pid , title } = useParams()
  const fetchProductData = async () =>{
    const response = await apiGetProduct(pid)
    console.log(response);
  }
  useEffect(() =>{
      if(pid) fetchProductData()
  },[pid])

  // console.log(pid)
  return (
    <div className='w-full'>
        <div className='h-[81px] bg-gray-100'>
          <h3>{title}</h3>
        </div>
    </div>
  )
}

export default DetailProduct
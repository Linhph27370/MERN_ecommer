import React, { useEffect, useState } from 'react'
import { apiGetProducts } from '../apis/product'
import { Product, CustomSlider } from './'
import Slider from "react-slick";
import image1 from '../assets/banner1-home2_2000x_crop_center.avif'
import image2 from '../assets/banner2-home2_2000x_crop_center.avif'
import { getNewProducts } from '../store/products/asynsAction';
import { useDispatch, useSelector } from 'react-redux'
const tabs =[
    {id:1, name: 'best seller'},
    {id:2, name: 'new arrivals'},
]

const BestSeller = () => {
    const [bestSellers, setBestSellers] = useState(null)
    // const [newProducts, setNewProducts] = useState(null)
    const [activeTab, setActiveTab] = useState(1)
    const [products, setProducts] = useState(null)
    const disPatch = useDispatch()
    const {newProducts} = useSelector(state => state.products)
    // promise.all gọi all các hàm đồng bộ 1 lúc , không phải đợi hàm khác chạy xong 
    const fechProducts = async () =>{
      const response = await apiGetProducts({sort:'-sold'})
      if(response?.success) {
        setBestSellers(response.products)
        setProducts(response.products)
      }

    }
    useEffect(() =>{
      fechProducts()
      disPatch(getNewProducts())
    },[])
    useEffect(()=>{
      if(activeTab === 1) setProducts(bestSellers)
      if(activeTab === 2) setProducts(newProducts)
    },[activeTab])
  return (
    <div>
        <div className='flex text-[20px]  ml-[-32px]'>
           {tabs.map(el => (
            <span key={el.id} className={`font-bold cursor-pointer px-8 capitalize border-r text-gray-400 ${activeTab === el.id ? 'text-main' : ''} `}onClick={() => setActiveTab(el.id)} >{el.name}</span>
           ))}
        </div>
        <div className='mt-4 mx-[-10px] border-t-2 border-main pt-4'>
            <CustomSlider products={products} activeTab={activeTab} />
        </div>
        <div className='w-full flex gap-4 mt-8'>
              <img className='flex-1 object-contain' src={image1}></img>
              <img className='flex-1 object-contain' src={image2}></img>
        </div>
    </div>
  )
}

export default BestSeller
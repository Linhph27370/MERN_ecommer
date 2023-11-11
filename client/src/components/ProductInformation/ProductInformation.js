import React, { memo, useState } from 'react'
import { productInfoTabs } from '../../ultils/contants'

const activedStyles = ''
const notActiveStyles = ''

const ProductInformation = () => {
  const [activeTab, setActiveTab] = useState(1)
  console.log(activeTab);
  return (
    
    <div className=''>
      <div className='flex justify-center gap-2 relative bottom-[-1px]'>
        {productInfoTabs.map(el =>(
          <span 
          className={`p-2  px-4 cursor-pointer ${activeTab === el.id ? 'bg-white border border-b-0' : 'bg-gray-200'}` } 
          key={el.id} 
          onClick={() => setActiveTab(el.id)}
          >{el.name}</span>
          
        ))}
      </div>
      <div className='border p-4'>
        {productInfoTabs.some(el => el.id === activeTab) && productInfoTabs.find(el => el.id === activeTab)?.content}
      </div>
    </div>
  )
}

export default memo(ProductInformation) 
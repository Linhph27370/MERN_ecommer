import React from 'react'
import { Sidebar , Banner, BestSeller , FeatureProducts, CustomSlider} from '../../components'
import { useSelector } from 'react-redux';

const Home = () => {
  const {newProducts} = useSelector(state => state.products)
  const {categories} = useSelector(state => state.app)
  return (
    <>
    <div className='w-main flex'>
        <div className='flex flex-col gap-5 w-[25%] flex-auto '>
            <Sidebar />
            {/* <DealDaily /> */}
        </div>
        <div className='flex flex-col gap-5 pl-5 w-[75%] flex-auto '>
            <Banner />
            <BestSeller />
        </div>
    </div>
    <div className='my-8'>
      <FeatureProducts />
    </div>
    <div className='my-8 w-full'>
    <h3 className='text-[20px] font-semibold py-[15px] border-b-2 border-main'>New ARRIVALS</h3>
      <div className='mt-4 mx-[-10px]'>
        <CustomSlider
          products={newProducts} 
        />
      </div>
        
    </div>
    <div className='my-8 w-full'>
    <h3 className='text-[20px] font-semibold py-[15px] border-b-2 border-main'>HOT COLECTIONS</h3>
      <div className='flex flex-wrap gap-4 mt-4 '>
      {categories?.filter(el => el.brand.length > 0)?.map(el => (
        <div
          key={el._id}
          className='w-[396px]'
        >
          <div className='border flex p-4 gap-4 min-h-[202px]'>
            <img src={el?.image} alt='' className=' w-[144px] h-[129px] object-contain'/>
            <div className='flex-1 text-gray-700'>
              <h4 className='font-semibold uppercase'>{el.title}</h4>
              <ul className='text-sm'>
                  {el?.brand?.map(item =>(
                    <span key={item} className=''>
                      <li >{item}</li>
                    </span>
                   
                  ))}
              </ul>
            </div>
          </div>
        </div>
       ))}
      </div>
    </div>
    <div className='w-full h-[500px]'>
       
    </div>
    </>
  )
}
export default Home
import React, { useEffect, useState, useCallback} from 'react'
import { useParams, useSearchParams , useNavigate, createSearchParams} from 'react-router-dom'
import { Breadcrumb, InputSelect, Product } from '../../components'
import { apiGetProducts } from '../../apis/product'
import Masonry from 'react-masonry-css'
import SearchItem from '../../components/Product/SearchItem'
import { sorts } from '../../ultils/contants'
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};
const ProducList = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState(null)
  const [activeClick, setActiveClick] = useState(null)
  const [sort, setSort] = useState('')
  const [params] = useSearchParams()
  const { category } = useParams()
  const fetchProductsByCategory = async (queries) => {
    const response = await apiGetProducts(queries)
      if(response.success) setProducts(response.products)
  }
  
  useEffect(() =>{
    let param = []
    for(let i of params.entries()) param.push(i)
    const queries = {}
    let priceQuery = {}
    for(let i of params) queries[i[0]] = i[1]
    if(queries.to && queries.from){
      priceQuery  = { $and: [
       {price: {gte: queries.from}},
       {price: {lte: queries.to}}
     ]}
     delete queries.price
   }
    if(queries.from){
      queries.price = {gte: queries.from}
    }
    if(queries.to){
      queries.price = {lte: queries.to}
    }
    delete queries.from
    delete queries.to
   
    const q = {...priceQuery, ...queries}
    console.log(q);
    fetchProductsByCategory(q)
  },[params])
  
  const changeActiveFilter  = useCallback((name)=>{
    if(activeClick === name )  setActiveClick(null)
    else setActiveClick(name)
  },[activeClick])
  //change value sort
  const changeValue = useCallback((value) =>{
   setSort(value)
  },[sort])

  useEffect(() => { 
    navigate({
      pathname: `/${category}`,
      search: createSearchParams({sort}).toString()
  })
   },[sort])
  return (
    <div className='w-full'>
      <div className='h-[81px] felx justify-center items-center bg-gray-100'>
      <div className='h-[81px] bg-gray-100 p-2 mt-4 '>
          <h3 className='font-bold uppercase'>{category}</h3>
          <Breadcrumb category={category} />
        </div> 
       </div>
      <div className='w-main border p-4 flex justify-between'>
            <div className='w-4/5 flex gap-4 flex-col'>
              <span className='font-semibold text-sm'>Filter by</span>
              <div className='flex items-center gap-3'>
              <SearchItem 
                name='price'
                activeClick={activeClick}
                changeActiveFilter={changeActiveFilter}
                type='input'

              />
              <SearchItem 
                name='color'
                activeClick={activeClick}
                changeActiveFilter={changeActiveFilter}
              />
              </div>
            </div>
            <div className='w-1/5 flex flex-col gap-3'>
              <span className='font-semibold'>Sort by : </span>
              <InputSelect 
              value={sort} 
              options={sorts} 
              changeValue={changeValue}

              />
            </div>
        </div>
        <div className='mt-8 w-main m-auto'>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {products?.map(el =>(
            <Product 
            key={el._id}
            productData={el}
            pid={el.id}
            normal={true}
          />
          ))}
        </Masonry>
        </div>
        <div className='w-full h-[500px]'></div>
    </div>
  )
}

export default ProducList
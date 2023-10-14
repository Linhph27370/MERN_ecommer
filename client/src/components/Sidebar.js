import React, { useEffect, useState } from 'react'
import {apiGetCategory} from '../apis/app'

const Sidebar = () => {
  const [categories, setCategories] = useState(null)
  const fetchCategories = async () =>{
    const response = await apiGetCategory()
    if(response.success ) setCategories(response.productCategories)
  }

  useEffect(()=>{
    fetchCategories();

  },[])
  console.log(categories);
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar
import React, {useEffect, useState} from 'react'
import { Sidebar , Banner} from '../../components'
import BestSeller from '../../components/BestSeller'

const Home = () => {

  return (
    <div className='w-main flex'>
        <div className='flex flex-col gap-5 w-[25%] flex-auto '>
            <Sidebar />
            <span>Deal daily</span>
        </div>
        <div className='flex flex-col gap-5 pl-5 w-[75%] flex-auto '>
            <Banner />
            <span><BestSeller></BestSeller></span>
        </div>
    </div>
  )
}
export default Home
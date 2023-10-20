import React , {useState, useEffect, memo } from 'react'
import icons  from '../ultils/icons'
import { formatMoney, secondsToHms } from '../ultils/helper'
import { apiGetProducts } from '../apis/product'
import { renderStartFromNumber } from '../ultils/helper'
import {Countdown} from './'
import moment from 'moment/moment'
const {AiFillStar} = icons
const DealDaily = () => {
const [dealDaily , setDealDaily] = useState(null)
const [hour , setHour] = useState(0)
const [minute , setMinute] = useState(0)
const [second , setSecond] = useState(0)
const [exprire , setExprire] = useState(false)
    const fetchDealDaily = async () =>{
        const respone = await apiGetProducts({limit: 1 , page: Math.round(Math.random() * 10) ,totalRatings: 4})
        if(respone.success){    
            setDealDaily(respone.products[0])
            // const h = 24 - new Date().getHours()
            // const m = 60 - new Date().getMinutes()
            // const s = 60 - new Date().getSeconds()
            const today = `${moment().format(`MM/DD/YYYY`)} 5:00:00`
            const seconds = new Date(today).getTime() - new Date().getTime() + 24 * 3600 * 1000
            const number = secondsToHms(seconds)
            setHour(number.h)   
            setMinute(number.m)
            setSecond(number.s)
        }else{
            setHour(0)
            setMinute(59)
            setSecond(59)
        }
    }
    let idInterval
    // useEffect(() =>{
    //     fetchDealDaily()
    // },[])
    useEffect(() =>{
            idInterval && clearInterval(idInterval)
            fetchDealDaily()
            console.log(123);
    },[exprire])
    useEffect(() =>{
         idInterval = setInterval(() =>{
            if(second > 0 ) setSecond( prev => prev-1)
            else{
               if(minute > 0){
                setMinute(prev => prev-1)
                setSecond(59)
               }else{
                if(hour>0){
                    setHour(prev => prev-1)
                    setMinute(59)
                    setSecond(59)
                }else{
                    setExprire(!exprire)
                }   
               }
        }
        },1000)
        return () =>{
            clearInterval(idInterval)
        }
    },[second, minute , hour, exprire])
   
    // if (!dealDaily) {
    //     return null; // Or you can return a loading indicator
    //   }
    
  return (
    <div className='border w-full flex-auto'>
        <div className='flex items-center justify-between p-4 w-full'>
        <span className='flex-1 pl-4 flex justify-center'><AiFillStar size={25} color='#DD1111'/></span>
        <span className='flex-8 font-bold text-[20px] flex justify-center text-gray-700'>DEAL DAILY</span>
        <span className='flex-1'></span>
        </div>
        <div className='w-full flex flex-col items-center pt-8 gap-2'>
            <img 
                src={dealDaily?.thumb || 'https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png'}className='w-full  object-content '
            />
             <span className='flex h-4'>{renderStartFromNumber(dealDaily?.totalRatings, 20)}</span>
          <span className='line-clamp-1 text-center'>{dealDaily?.title}</span>
          <span>{`${formatMoney(dealDaily?.price)} VND`}</span>
        </div>
        <div className='px-4 mt-8'>
            <div className='flex justify-center gap-2 items-center mb-4'>
                <Countdown unit={'Hours'} number={hour}  />
                <Countdown unit={'Minutes'} number={minute} />
                <Countdown unit={'Seconds'} number={second} />
            </div>
            <button
            type='button'
            className='flex gap-2 items-center justify-center w-full bg-main hover:bg-gray-800 text-white font-medium py-2
            '
        
            >
                <span>Option</span>
            </button>
        </div>
    </div>
  )
}

export default  memo(DealDaily)
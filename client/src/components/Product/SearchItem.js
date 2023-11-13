import React, { memo, useEffect, useState } from 'react'
import icons from '../../ultils/icons'
import { color } from '../../ultils/contants'
import { createSearchParams,useNavigate , useParams} from 'react-router-dom'
import path from '../../ultils/path'
const SearchItem = ({name , activeClick, changeActiveFilter, type = 'checkbox'}) => {
    const {category} = useParams()
    const navigate = useNavigate()
    const {AiOutlineDown} = icons
    const [selected, setSelected] = useState([])
    const handldeSelect = (e) =>{
        const alreadyEl = selected.find(el => el === e.target.value)
        if(alreadyEl) setSelected(prev => prev.filter(el => el !== e.target.value))
        else setSelected(prev => [...prev, e.target.value])
        
    }
    useEffect(() =>{
        navigate({
            pathname: `/${category}`,
            search : createSearchParams({
                color: selected.join(',')
            }).toString()
        })
    },[selected])
  return (
    <div 
        className='p-4 relative border cursor-pointer text-xs border-gray-800 flex items-center justify-between gap-6'
        onClick={()=>{changeActiveFilter(name)}}
    >
        <span className='capitalize'>{name}</span>
        <AiOutlineDown />
        {activeClick === name && <div className='absolute z-10 top-full left-0 w-fit p-4 border bg-white min-w-[150px]'>
            {type === 'checkbox' && <div className=''>
                    <div className='p-4 items-center flex justify-center gap-8 border-b'>
                        <span className='whitespace-nowrap'>{`selectd ${selected?.length}`}</span>
                        <span 
                        onClick={e => {
                            e.stopPropagation()
                            setSelected([])
                            }}
                        className='underline hover:text-main' >reset</span>
                    </div> 
                    <div onClick={e => e.stopPropagation()} className='flex flex-col gap-2 mt-3'>
                        {color?.map((el, index) =>(
                            <div className='flex items-center gap-2' key={index}>
                            <input 
                                type='checkbox'  
                                name={el}
                                className='w-4 h-4 bg-gray-500 focus:bg-green-600'
                                value={el}
                                onClick={handldeSelect}
                                id={el}
                                checked={selected.some(selectedItem => selectedItem === el)}
                                />
                                <label className='text-gray-700' htmlFor={el}>{el}</label>
                            </div>
                        ))}
                    </div>
                </div>}
        </div>}
    </div>
  )
}

export default memo(SearchItem) 
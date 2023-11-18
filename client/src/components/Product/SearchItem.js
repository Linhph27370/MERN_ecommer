import React, { memo, useEffect, useState } from 'react'
import icons from '../../ultils/icons'
import { color } from '../../ultils/contants'
import { createSearchParams, useNavigate, useParams } from 'react-router-dom'
import { apiGetProducts } from '../../apis'
import useDebounce from '../../hook/useDebounce'
const SearchItem = ({ name, activeClick, changeActiveFilter, type = 'checkbox' }) => {
    const { category } = useParams()
    const navigate = useNavigate()
    // const [price, setPrice] = useState([0,1])
    const [price, setPrice] = useState({
        from: '',
        to: ''
    })
    const { AiOutlineDown } = icons
    const [selected, setSelected] = useState([])
    const [bestPrice, setBestPrice] = useState(null)
    const handldeSelect = (e) => {
        const alreadyEl = selected.find(el => el === e.target.value)
        if (alreadyEl) setSelected(prev => prev.filter(el => el !== e.target.value))
        else setSelected(prev => [...prev, e.target.value])

    }
    const fetchBestPriceProduct = async () => {
        const response = await apiGetProducts({ sort: '-price', limit: 1 })
        if (response.success) setBestPrice(response?.products[0]?.price)

    }

    useEffect(() => {
        if (selected.length > 0) {
            navigate({
                pathname: `/${category}`,
                search: createSearchParams({
                    color: selected.join(',')
                }).toString()
            })
        } else {
            navigate({
                pathname: `/${category}`,
            })
        }
    }, [selected])
    // useEffect(() => { 
    //     if(price.from > price.to) alert('From price cannot greater than to Price')
    //    },[price])
    useEffect(() => {
        if (type === 'input') fetchBestPriceProduct()
    }, [type])

    const deboucePriceFrom = useDebounce(price.from, 500)
    const deboucePriceTo = useDebounce(price.to, 500)
    useEffect(() => {
        const data = {}
        console.log(data);
        if (Number(price.from) > 0) {
            data.from = price.from
        }
        if (Number(price.to) > 0) {
            data.to = price.to
        }
        navigate({
            pathname: `/${category}`,
            search: createSearchParams(data).toString()
        })
    }, [deboucePriceFrom, deboucePriceTo])
    return (
        <div
            className='p-4 relative border cursor-pointer text-xs border-gray-800 flex items-center justify-between gap-6'
            onClick={() => { changeActiveFilter(name) }}
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
                        {color?.map((el, index) => (
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
                {type === 'input' && <div onClick={e => e.stopPropagation()}>
                    <div
                        className='p-4 items-center flex justify-center gap-8 border-b'
                    >
                        <span className='whitespace-nowrap'>{`The highest price is ${Number(bestPrice).toLocaleString()} VND`}</span>
                        <span
                            onClick={e => {
                                e.stopPropagation()
                                setPrice({
                                    from: '',
                                    to: ''
                                })
                            }}
                            className='underline hover:text-main' >reset</span>
                        <span 
                            className='underline hover:text-main'
                            onClick={e => {
                            e.stopPropagation()
                            changeActiveFilter(null)
                        }}>close</span>
                    </div>
                    <div className='flex items-center gap-2 p-2'>
                        <div className='flex items-center gap-2'>
                            <label htmlFor=''> From </label>
                            <input
                                value={price.from}
                                // onChange={e => setPrice(prev => prev.map((el,index) => index === 0 ? e.target.value : el ))} 
                                onChange={e => setPrice({ ...price, from: e.target.value })}
                                // onChange={(e) => handlePrice('from')} 

                                className='border border-gray-600 p-3' type='number' id='from'></input>
                        </div>
                        <div className='flex items-center gap-2'>
                            <label htmlFor=''> To </label>
                            <input
                                value={price.to}
                                // onChange={e => setPrice(prev => prev.map((el,index) => index === 1 ? e.target.value : el ))} 
                                onChange={e => setPrice({ ...price, to: e.target.value })}
                                // onChange={(e) => handlePrice('from')} 
                                className='border border-gray-600 p-3' type='number' id='from'>

                            </input>
                        </div>
                    </div>
                </div>
                }
            </div>}
        </div>
    )
}

export default memo(SearchItem) 
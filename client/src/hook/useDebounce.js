import React, {useEffect, useState} from 'react'

const useDebounce = (value, ms) => {
    const [debounceValue, setDebounceValue] = useState('')
    useEffect(()=>{
    const setTimeoutId = setTimeout(() =>{
            setDebounceValue(value)
        },ms)
        return () =>{
            clearTimeout(setTimeoutId)
        }
    },[value, ms])
  return debounceValue
}

export default useDebounce


// muốn : khi mà nhập thay đổi giá trị thì sẽ gọi api
// cách hiệu quả hơn là chờ 1s rồi gọi lại, ko phả
// i.e: nhập tên vào thì ngược lại bấm enter -> có delay
//      nhập tên vào thì bấm enter -> ko delay
//      nhập tên vào thì bấm tab -> ko delay
//      nhập tên vào thì bấm shift + tab -> ko delay
// vấn đề : gọi api thì liên theo mỗi lượt nhập
// resolveL chỉ call api khi mà người dùng nhập xong 
// thời gian onchange

//tách price thành 2 biến 
//1. biến để phục vụ UI, gõ tới đâu thì lưu tới đó => UI render
//2. biến thử dùng qđ call api => settimeout => biến sẽ gá sau 1 khoản thời gian 

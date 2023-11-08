import React, { useCallback, useEffect, useState } from 'react'
import { Button, InputField } from '../../components'
import { apiRegister, apiLogin , apiForgotPassword } from '../../apis/user'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import path from '../../ultils/path'
import { toast } from 'react-toastify'
import { login } from '../../store/user/userSlice'
import { useDispatch } from 'react-redux'
import { validate } from '../../ultils/helper'
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [payload, setPayload] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    mobile: ''
  })
  const [isVerifyEmail, setIsVerifyEmail] = useState(false)
  const [invalidFiedls,setInvalidFields] = useState([])
  const [isRegister, setIsRegister] = useState(false)
  const [isForgotPassword, setIsForgotPassword] = useState(false)
  const resetPayload = () => {
    setPayload({
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      mobile: ''
    })
  }
  const [token, setToken] = useState('')
  const [email, setEmail] = useState('')
  const handldeForgotPassword = async () => {  
      const response = await apiForgotPassword({email})
      if(response.success){
        toast.success(response.mes,{theme:'colored'})
      }else{
        toast.info(response.mes,{theme:'colored'})
      }
  }

  useEffect(() =>{
    resetPayload()
  },[isRegister])
  // submit
  const handldeSubmit = useCallback(async () => {
    const { firstname, lastname, mobile, ...data } = payload

    const invalids = isRegister ? validate(payload,setInvalidFields) : validate(data,setInvalidFields)
    if(invalids === 0){
       if (isRegister) {
      const response = await apiRegister(payload)
      if (response.success) {
        setIsVerifyEmail(true)
        // Swal.fire('Congratulation', response.mes, 'success')
        //   .then(() => {
        //     setIsRegister(false)
        //     resetPayload()
        //   })
      } else {
        Swal.fire('Oops', response.mes, 'error')
      }
    } else {
      const rs = await apiLogin(data)
      if (rs.success) {
        dispatch(login({isLoggedIn: true, token: rs.accessToken, userData: rs.userData}))
        navigate(`/${path.HOME}`)
      } else {
        Swal.fire('Oops', rs.mes, 'error')
      }
    }
    }
   
  }, [payload, isRegister])
  const finalRegister = () =>{
      console.log({token});
  }
  return (
    <div className='w-screen h-screen relative'>
      {isVerifyEmail && <div className='absolute top-0 left-0 bottom-0 right-0 bg-overlay z-50 flex flex-col justify-center items-center'>
        <div className='bg-white w-[500px] rounded-sm p-8'>
            <h4 className=''>We sent a code to your mail. Please check your mail and enter your code:</h4>
            <input type='text' 
              value={token}
              onChange={e => setToken(e.target.value)}
              className='p-2 border-2 rounded-md outline-none'
            />
            <button
              className='px-4 py-2 bg-blue-500 font-semibold text-white rounded-md ml-4'
              onClick={finalRegister}
            >
              sumbit
            </button>
        </div>
      </div>}
      {isForgotPassword && <div className='absolute top-0 left-0 bottom-0 right-0 animate-slide-right bg-overlay flex flex-col items-center py-8 z-50'>
        <div className='flex flex-col gap-4'>
          <label htmlFor='email' className='text-white uppercase font-semibold'>Enter your email:</label>
          <input 
            type='text'
            id='email'
            className='w-[800px] p-2 pb-2 border-b outline-none placeholder:text:sm'
            placeholder='Exp: email@gmail.com'
            value={email}
            onChange={e=> setEmail(e.target.value)}
          />
          <div className='flex items-center justify-end w-full gap-4'>
          <Button 
            handleOnClick={handldeForgotPassword}
            name='Submit'
            style='px-4 py-2 rounded-md text-white bg-blue-500 text-semibold my-2'
          />
          <Button 
            name='Back'
            handleOnClick={()=> setIsForgotPassword(false)}
            style='px-4 py-2 rounded-md text-white bg-orange-500 text-semibold my-2'
          />
        </div>
        </div>
        
      </div>}
      <img
        src='https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg'
        className='w-full h-full'
      >

      </img>
      <div className='absolute top-0 bottom-0 left-0 right-1/2  items-center justify-center flex '>
        <div className='p-8 bg-white rounded-md min-w-[500px] w-1/2 '>
          <h1 className='text-[28px] font-semibold'>{isRegister ? 'Register' : 'Login'}</h1>
          {isRegister && <div className='flex items-center gap-2'>
            <InputField
              value={payload.firstname}
              setValue={setPayload}
              nameKey='firstname'
              invalidFiedls={invalidFiedls}
              setInvalidFields={setInvalidFields}
            />
            <InputField
              value={payload.lastname}
              setValue={setPayload}
              nameKey='lastname'
              invalidFiedls={invalidFiedls}
              setInvalidFields={setInvalidFields}
            />

          </div>}
          <InputField
            value={payload.email}
            setValue={setPayload}
            nameKey='email'
            invalidFiedls={invalidFiedls}
            setInvalidFields={setInvalidFields}
          />
          {isRegister && <InputField
            value={payload.mobile}
            setValue={setPayload}
            nameKey='mobile'
            invalidFiedls={invalidFiedls}
            setInvalidFields={setInvalidFields}
          />}
          <InputField
            value={payload.password}
            setValue={setPayload}
            nameKey='password'
            type='password'
            invalidFiedls={invalidFiedls}
            setInvalidFields={setInvalidFields}
          />

          <Button
            name={isRegister ? 'Register' : 'Login'}
            handleOnClick={handldeSubmit}
            fw

          />

          <div className='flex items-center justify-between my-2 w-full text-sm'>
            {!isRegister && <span onClick={() => setIsForgotPassword(true)} className='text-blue-500 hover:underline cursor-pointer'>Forgot your account</span>}
            {!isRegister && <span
              className='text-blue-500 hover:underline cursor-pointer'
              onClick={() => setIsRegister(true)}
            >Create account</span>}

            {isRegister && <span
              className='text-blue-500 hover:underline cursor-pointer'
              onClick={() => setIsRegister(false)}
            >Go login</span>}
          </div>

        </div>
      </div>
    </div>
  )
}
export default Login
import React, { useCallback, useState } from 'react'
import { Button, InputField } from '../../components'

 const Login = () => {
  const [payload, setPayload] = useState({
    email: '',
    password: '',
    name: ''

  })
  const handldeSubmit = useCallback(() =>{
    console.log(payload);
  }, [payload])
  const [isRegister , setIsRegister] =useState(false)
  return (
    <div className='w-screen h-screen relative'>
      <img
        src='https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg'
        className='w-full h-full'
      >
        
      </img>
      <div className='absolute top-0 bottom-0 left-0 right-1/2  items-center justify-center flex '>
      <div className='p-8 bg-white rounded-md min-w-[500px] w-1/2 '>
          <h1 className='text-[28px] font-semibold'>{isRegister ? 'Register' : 'Login'}</h1>
         {isRegister &&  <InputField
            value={payload.name}
            setValue={setPayload} 
            nameKey='name'
          />}
          <InputField
            value={payload.email}
            setValue={setPayload} 
            nameKey='email'
          />
          <InputField
            value={payload.password}
            setValue={setPayload} 
            nameKey='password'
            type='password'
          />
          <Button 
            name={isRegister ? 'Register' : 'Login'}
            handleOnClick={handldeSubmit}
            fw

          />

          <div className='flex items-center justify-between my-2 w-full text-sm'>
            {!isRegister &&  <span className='text-blue-500 hover:underline cursor-pointer'>Forgot your account</span>}
           {!isRegister &&  <span 
            className='text-blue-500 hover:underline cursor-pointer' 
            onClick={() => setIsRegister(true)}
            >Create account</span>}

            {isRegister &&  <span 
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
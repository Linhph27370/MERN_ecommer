import React, { useState } from 'react'
import { Button } from '../../components'
import { Link, useParams } from 'react-router-dom'
import { apiResetPassword } from '../../apis'
import { toast } from 'react-toastify'
const ResetPassword = () => {
  const [password, setPassword] = useState('')
  const  {token}  = useParams()
  const handldeResetPassword = async () =>{
      const response = await apiResetPassword({password, token})
      if(response.success){
        toast.success(response.mes,{theme:'colored'})
      }else{
        toast.info(response.mes,{theme:'colored'})
      }
  }
  return (
    <div className= 'animate-slide-right bg-overlay flex flex-col items-center py-8 z-50'>
    <div className='flex flex-col gap-4'>
      <label htmlFor='password' className='text-white uppercase font-semibold'>Enter your new password:</label>
      <input 
        type='password'
        id='password'
        className='w-[800px] p-2 pb-2 border-b outline-none placeholder:text:sm'
        placeholder='Enter your password'
        value={password}
        onChange={e=>setPassword(e.target.value)}
      />
      <div className='flex items-center justify-end w-full gap-4'>
      <Button 
        name='Submit'
        handleOnClick={handldeResetPassword}
        style='px-4 py-2 rounded-md text-white bg-blue-500 text-semibold my-2'
      />
      <Link to={`/login`}>
      <Button 
        style='px-4 py-2 rounded-md text-white bg-orange-500 text-semibold my-2'
        name='Cancel'
      />
      </Link>
    </div>
    </div>
    
  </div>
  )
}

export default ResetPassword
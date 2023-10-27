import React, { useCallback, useEffect, useState } from 'react'
import { Button, InputForm ,Select,Markdown } from '../../components'
import {useForm} from 'react-hook-form'
import { useSelector } from 'react-redux'
import { getBase64 } from '../../ultils/helper'


const CreateProduct = () => {
  const { categories } = useSelector(state => state.app)
  const {register, formState: {errors} , reset, handleSubmit, watch} = useForm()

 const [payload, setPayload] = useState({
    description: ''
 })
 const [preview, setPrview] = useState({
        thumb: null,
        images: []
 })
 const [invalidFields, setInvalidFields] = useState([])
 const changeValue = useCallback((e) =>{
        setPayload(e)
 },[payload])

 const [hoverElm,setHoverElm] = useState(null)
const handlePreviewThumb = async (file) =>{
  const base64Thumb = await getBase64(file)
  setPrview( prev => ({...prev, thumb: base64Thumb}))
}
const handlePreviewImages = async ( files) =>{
  const imagesPreview = []
  for (let file of files){
    if(file.type !== 'image/png' && file.type !== 'image/jpeg'){
      alert('Only png and jpg are allowed!')
      return
    }
    const base64 = await getBase64(file)
    // imagesPreview.push(base64)
     imagesPreview.push({name: file.name, path:base64})
  }
  setPrview(prev => ({...prev, images: imagesPreview}))
}

 useEffect(() =>{
      handlePreviewThumb(watch('thumb')[0])
      console.log(watch('thumb'));
 },[watch('thumb')])
 useEffect(() =>{
  handlePreviewImages(watch('images'))

},[watch('images')])

 console.log(preview);
 const handleCreateProduct =(data) =>{

    if(data.category) data.category = categories?.find(el => el._id === data.category)?.title
    const finalPayload = {...data, ...payload}
    console.log({...data, ...payload});
    const formData = new FormData()
    for ( let i of Object.entries(finalPayload)) formData.append(i[0],i[1])
    for (var pair of formData.entries()){
    console.log(pair[0]+ ', ' + pair[1])
    }
 }
//  const handleRemoveImage = ( name) =>{
//   const files = [...watch('images')]

//   reset({
//     images:files.filter(el => el.name !== name)
//   })
//   if(preview.images?.some(el => el.name === name )) setPrview(prev =>({...prev, images: prev.images?.filter(el => el.name !== name)}))
//  }
  return (
    <div className='w-full'>
      <h1 className='h-[75px] flex justify-between items-center text-3xl font-bold px-4 border-b'>
        <span>Create Product</span>
      </h1>
      <div className='p-4 '> 
       <form onSubmit={handleSubmit(handleCreateProduct)}>
        <InputForm 
            label='Name product'
            register={register}
            errors={errors}
            id='title'
            validate={{
              required: 'Need fill this field'
            }}
            style='flex-1'
            placeholder='Name of new product'
        />
        <div className='w-full my-6 flex gap-4'>
        <InputForm 
            label='Price'
            register={register}
            errors={errors}
            id='price'
            validate={{
              required: 'Need fill this field'
            }}
            style='flex-1'
            placeholder='Price of new product'
            type='number'
            fullWidth={true}
        />
        <InputForm 
            label='Quantity'
            register={register}
            errors={errors}
            id='quantity'
            validate={{
              required: 'Need fill this field'
            }}
            style='flex-1'
            placeholder='quantity of new product'
            type='number'
            fullWidth={true}
        />
        <InputForm 
            label='Color'
            register={register}
            errors={errors}
            id='color'
            validate={{
              required: 'Need fill this field'
            }}
            style='flex-1'
            placeholder='color of new product'
            type='flex-auto'
            fullWidth={true}
        />
        </div>
     <div>
            <Select
              label='Category'
              options={categories?.map(el =>({ code: el._id, value: el.title}))}
              register={register}
              id='category'
              validate={{required : 'Need fill this field'}}
              style='flex-auto'
              errors={errors}
              fullwidth
             />
             <Select
              label='brand (Optional)'
              options={categories?.find(el => el._id === watch('category'))?.brand?.map(el =>({code: el, value:el}))}
              register={register}
              id='brand'
              style='flex-auto'
              errors={errors}
              fullwidth
             />
     </div>
     <Markdown 
      name='description'
      changeValue={changeValue}
      label='Description'
      invalidFields={invalidFields}
      setInvalidFields={setInvalidFields}
     />
     <div className='flex flex-col gap-4'>
      <label className='font-semibold' htmlFor='thumb'>Upload</label>
      <input 
      type='file' 
      id='thumb'
      {...register('thumb',{required:'need fill'})}
            
      />
      {errors['thumb'] && <small className="text-xs text-red-500">{errors['thumb']?.message}</small>}
     </div>
     <div className='my-4'>
            {preview.thumb && <div className='my-4'>
              <img src={preview.thumb} alt="" className='w-[200px] object-contain'/>
            </div>
              }
     </div>
     <div className='flex flex-col gap-4'>
      <label className='font-semibold' htmlFor='products'>Upload of product</label>
      <input 
      type='file' 
      id='products' 
      multiple
      {...register('images',{required:'need fill'})}
      />
      {errors['images'] && <small className="text-xs text-red-500">{errors['images']?.message}</small>}
     </div>
     <div className='my-4'>
            {preview.images.length>0 && <div className='my-4 flex w-full gap-0 flex-wrap'>
              {preview.images?.map((el,idx) =>(
                <div onMouseEnter={()=> setHoverElm(el.name)} className='w-fit relative'
                onMouseLeave={() => setHoverElm(null)}
                >
                   <img key={idx} src={el.path} alt='products' className='w-200px object-contain' />
                   {/* {hoverElm === el.name && <div
                    className='absolute inset-0 bg-overlay'
                    onClick={()=> handleRemoveImage(el.name)}
                   >
                    <span>x</span>
                    </div>} */}
                </div>
              ))}
            </div>
              }
     </div>
            <div className='my-6'>
            <Button type='submit'>create product</Button>
            </div>
       </form>
      </div>
    </div>
  )
}

export default CreateProduct
import React, { memo } from "react";
import clsx from 'clsx'

const InputForm = ({
    label,
    disabled,
    register,
    errors,
    id,
    validate,
    type= 'text',
    placeholder,
    fullWidth,
    defaulValue,
    style
}) =>{
    return(
        <div className={clsx('flex flex-col h-[78px] gap-2',style)}>
            {label && <label htmlFor={id} >{label}</label>}
            <input
            type={type} 
            id={id}
            {...register(id,validate)}
            disabled={disabled}
            className={clsx('form-input my-auto text-black', fullWidth && 'w-full', style)}
            placeholder={placeholder}
            defaultValue={defaulValue}
            />
            {errors[id] && <small className="text-xs text-red-500">{errors[id]?.message}</small>}
        </div>
    )
}

export default memo(InputForm)
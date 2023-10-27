import React , {memo} from 'react'

const InputSelect = ({value , changeValue , options}) => {
  return (
    <select>
        <option value={value} onChange={e => changeValue(e.target.value)}>Random</option>
        {options?.map(el => (
            <options key={el.id} value={el.value}>{el.text}</options>
        ))}

    </select>
  )
}

export default InputSelect
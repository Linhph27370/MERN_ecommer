import React from 'react'
import {useLocation, useNavigate, useNavigation} from 'react-router-dom'
export const withBaseComponet = (Component) => (props) =>{
    const navigate = useNavigate()
    const location = useLocation()
  return (
    <div>
        <Component {...props} navigate={navigate} location={location}/>
    </div>
  )
}

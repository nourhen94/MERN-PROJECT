import { Phone } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getProfile } from '../redux/actions/userActions'

import './profile.css'


const Profile = () => {
  const {user,isAuth}=useSelector(state=>state.userReducer)
 const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getProfile())
 
 }, [dispatch])
 console.log(user)
 
  return ( <div> 

{ !isAuth ? <Redirect to ="/SignIn"> </Redirect> :
<div className='card-container'  > 
<img className="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
  <h3> {user?.name}</h3>
  <p> {user?.email} </p>
  <p> {user?.adress}</p>
  <p> <Phone style={{ marginRight: "1px" }} /> {user?.phone}</p>
    
 </div>
}
  
  </div>
  )
}



export default Profile
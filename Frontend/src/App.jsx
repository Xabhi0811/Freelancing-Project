import { useState } from 'react'
import Home from './Pages/Home'
import {Routes , Route } from 'react-router-dom'
import UserAppointments from './Pages/UserAppointments'
import  UserloginUp from './Pages/UserLoginUp'



import './App.css'

function App() {
  

  return ( 
    <>
    <Routes>
       <Route path='/' element={<Home />} /> 
   <Route path='/home' element={<Home/>} />
   <Route path='/sigup' element={ <UserloginUp/>} />
   <Route path='/appintment' element={<UserAppointments/>}/>
   <Route path='/'/>
     </Routes>
    </>
  )
}

export default App

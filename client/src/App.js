import React from 'react'
import {Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar.jsx'
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'
import ManufacturerDashboard from './components/ManufacturerDashboard'
import TransporterDashboard from './components/TransporterDashboard'

const App = () => {
  return (
   <>
<Navbar/>
<Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route  path='/login'  element={<Login/>}/>
  <Route  path='/register'  element={<Registration/>}/>
  <Route  path='/manufacturer'  element={<ManufacturerDashboard/>}/>
  <Route  path='/transporter' element={<TransporterDashboard/>}/>
</Routes>
   
   </>
  )
}

export default App

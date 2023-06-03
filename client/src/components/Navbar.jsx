import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   OrderXpress
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" to="/manufacturer">Manufacturer</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" to="/transporter">Transporter</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" to="/login">LogIn</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>
        
       
        
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar

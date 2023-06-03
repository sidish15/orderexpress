import React, { useState } from 'react'
import "../styles/Login.css"
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate();
  const [user,setUser]=useState({
      username:"",password:"",
  })
  let name,value;
  const handleInputs=(e)=>{
  name=e.target.name;
  value=e.target.value;
  setUser((preValue)=>{
      console.log(preValue)
      return {
          ...preValue,
          [name]:value
      }
  })
  }
  const PostData=async (e)=>{
    e.preventDefault();
    const {username,password}=user;
    const res= await fetch("/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            username,password
        })
    })
    console.log(res)
    const data=await res.json();
    console.log(data)
    if(res.status===442 || !data){
        window.alert("Invalid Credentials");
        console.log("Invalid Credential")
    }else{
      
        window.alert("Login successfully");
        console.log(" Registration successfull")
      }
    navigate("/")
    }
  

  return (
    <>
    <div className="main-container">
    <div className='login-container'>
        <h2 className='login-title'>Login</h2>
            <form className="login-form" action="index.html" method="POST" >
            
              <input type="text" placeholder="username" name='username' id='username' autoComplete='off' value={user.username} onChange={handleInputs} className="login-input"/>
              <input type="password"  placeholder="password" name='password' id='password' autoComplete='off' value={user.password} onChange={handleInputs} className="login-input"/>
              <input className="login-button" type="submit" value="LOGIN"  onClick={PostData}/>
            
            </form>
          </div>
    </div>
    
    </>
  )
}

export default Login

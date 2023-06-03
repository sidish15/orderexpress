import React, { useState } from 'react'
import "../styles/Registration.css"
import { useNavigate } from 'react-router-dom';
const Registration = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "", password: "", role: ""
    })
    let name, value;
    const handleInputs = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        name = e.target.name;
        value = e.target.value;
        setUser((preValue) => {
            console.log(preValue)
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { username, password, role } = user;
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username, password, role
            })
        })
        console.log(res);
        const data = await res.json();
        console.log(data)
        if (res.status === 442 || !data) {
            window.alert("Invalid registration");
            console.log("Invalid Registration")
        } else {
            window.alert("registration successfully");
            console.log(" Registration successfull")
        }
        navigate("/login")
    }
    return (
        <>
        <div className="main-register">
        <div className='registration-container'>
                <h2 className="registration-title">Registration</h2>
                <form className="registration-form" action="index.html" method="POST" >

                    <input type="text" placeholder="username" name='username' id='username' autoComplete='off' value={user.username} onChange={handleInputs} className="registration-input" />
                    <input type="password" placeholder="password" name='password' id='password' autoComplete='off' value={user.password} onChange={handleInputs} className="registration-input" />
                    <input type="text" placeholder="Role(Manufacturer/Transporter)" name='role' id='role' autoComplete='off' value={user.role} onChange={handleInputs} className="registration-input" />
                    
                    <input className="registration-button" type="submit" value="Register" onClick={PostData} />

                </form>
            </div>
        </div>
           

        </>
    )
}

export default Registration

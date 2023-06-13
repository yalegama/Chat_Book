import "./css/Register.css"
import React from 'react'
import Login from './Login'

function Register() {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Chat Book</span>
            <span className="title">Register</span>
            <form className='form' action="">
                <input type="text" placeholder='Name' />
                <input type="email"  placeholder='Email'/>
                <input type="password"  placeholder='Password'/>
                <input type="file" />
                <button>Sign Up</button>
            </form>
            <p>Do you have account? <a href={<Login/>}>Login</a> here</p>
        </div>
    </div>
  )
}

export default Register
import React from 'react'
import Register from './Register'

function Login() {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Chat Book</span>
            <span className="title">Login</span>
            <form className='form' action="">
                <input type="email"  placeholder='Email'/>
                <input type="password"  placeholder='Password'/>
                <button>Sign Up</button>
            </form>
            <p>You don't have an account? <a href={<Register/>}>Register</a> here</p>
        </div>
    </div>
  )
}

export default Login
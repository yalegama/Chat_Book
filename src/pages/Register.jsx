import React from 'react'
import Login from './Login'

function Register() {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <form action="">
                <input type="text" placeholder='Display Name' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <input type="file" />
                <button>Sign Up</button>
            </form>
            <p>Do you have an account? <a href={<Login/>}>Login</a> here </p>
        </div>
    </div>
  )
}

export default Register
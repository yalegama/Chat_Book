import React from 'react'
import "../pages/css/NavBar.css"

function NavBar() {
  return (
    <div className="navBar">
        <span className="logo">Chat Book</span>
        <div className="user">
            <img className='userImage' src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <span>John</span>
            <button className='logoutButton'>Logout</button>
        </div>
    </div>
  )
}

export default NavBar
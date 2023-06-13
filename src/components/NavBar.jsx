import React from 'react'
import "../pages/css/NavBar.css"

function NavBar() {
  return (
    <div className="navBar">
        <span className="logo">Chat Book</span>
        <div className="user">
            <img src="" alt="" />
            <span>John</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default NavBar
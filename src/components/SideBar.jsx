import React from 'react'
import "../pages/css/Home.css"
import NavBar from './NavBar'
import Search from './Search'

function SideBar() {
  return (
    <div className='sideBar'>
        <NavBar/>
        <Search/>
    </div>
  )
}

export default SideBar
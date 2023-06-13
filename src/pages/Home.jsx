import "./css/Home.css"
import React from 'react'
import SideBar from '../components/SideBar'
import Chat from '../components/Chat'


function Home() {
  return (
    <div className='home'>
      <div className="container">
        <SideBar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home
import React from 'react'
import "../pages/css/Home.css"
import Cam from "../img/cam.png"
import Add from "../img/add.png"
import More from "../img/more.png"
import "../pages/css/Chat.css"
import Messages from './Messages'

function Chat() {
  return (
    <div className='chat'>
      <div className="chatInfor">
        <span>Jane</span>
        <div className="chatIcons">
          <img className='chatImages' src={Cam} alt="" />
          <img className='chatImages' src={Add} alt="" />
          <img className='chatImages' src={More} alt="" />
        </div>
      </div>
      <Messages/>
    </div>
  )
}

export default Chat
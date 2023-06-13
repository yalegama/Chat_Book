import React from 'react'
import "../pages/css/Search.css"

function Search() {
  return (
    <div className="search">
        <div className="searchForm">
            <input className='inputSearch' placeholder='Find a user' type="text" name="" id="" />
        </div>
        <div className="userChat">
            <img className='userChatImage' src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className="userChatInfo">
                <span>Jane</span>
            </div>
        </div>
    </div>
  )
}

export default Search
import React from 'react'
import "../pages/css/Search.css"
import Chats from './Chats'

function Search() {
  return (
    <div className="search">
        <div className="searchForm">
            <input className='inputSearch' placeholder='Find a user' type="text" name="" id="" />
        </div>
        <div>
        <Chats/>
        </div>
        
    </div>
  )
}

export default Search
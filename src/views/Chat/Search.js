import React from 'react'

const Search = () => {
  return (
    <div className='chatSearch'>
      <div className='chatSearchForm'>
      <input type="text" placeholder='Find a user'/>
      </div>
      <div className='chatUserChat'>
      <img src="https://images.pexels.com/photos/3660654/pexels-photo-3660654.jpeg?auto=compress&cs=tinysrgb&w=600" alt ="" />
      <div className='chatUserChatInfo'>
      <span>Jane</span>
      </div>
      </div>
    </div>
  )
}

export default Search

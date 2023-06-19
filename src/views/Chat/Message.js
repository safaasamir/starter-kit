import React from 'react'

const Message = () => {
  return (
    <div className='chatMessage chatOwner'>
     <div className='chatMessageInfo'>
     <img src="https://images.pexels.com/photos/7944045/pexels-photo-7944045.jpeg?auto=compress&cs=tinysrgb&w=600" alt=" "/>
     <span > just now</span>
     </div>
     <div className=' chatMessageContent'>
     <p>hello</p>
     <img src="https://images.pexels.com/photos/7944045/pexels-photo-7944045.jpeg?auto=compress&cs=tinysrgb&w=600" alt=" "/>
     </div>
    </div>
  )
}

export default Message

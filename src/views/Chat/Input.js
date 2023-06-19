import React from 'react'
import { Icon } from '@iconify/react';
const Input = () => {
  return (
    <div className='chatInput'>
      <input type="text" placeholder='Type something ......'/>
      <div className="chatSend">
      <Icon icon="mdi:attach-file" className='icon' />
      <input type="file" style={{display:"none"}} id="file" />
      <label htmlFor="file">
      <Icon icon="akar-icons:image" className='icon' />
      </label>
      <button>Send</button>
      </div>
    </div>
  )
}

export default Input

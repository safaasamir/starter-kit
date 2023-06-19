import React from 'react'
import { Icon } from '@iconify/react';
import Messages from './Messages';
import  Input  from './Input';
const Chat = () => {
  return (
    <div className='chatChat'>
      <div className='chatChatInfo'>
      <span> Jane</span>
    <div className='chatIcons'>
    <Icon icon="uil:video" className='Icon' />
    <Icon icon="fluent-mdl2:add-friend" className='Icon' />
    <Icon icon="icon-park:more" className='Icon' />
    </div>
    
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat

import React from 'react'

const Navbar = () => {
  return (
    <div className='chatNavbar'>
      <span className='chatLogo'>Waslna Chat</span>
      <div className='chatUser'>
      <img src='https://images.pexels.com/photos/3660654/pexels-photo-3660654.jpeg?auto=compress&cs=tinysrgb&w=600' alt=""/>
      <span>Admin</span>
      <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar

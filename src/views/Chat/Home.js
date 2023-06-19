import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import"./Style.scss"

const Home = () => {
    return (
        <div className='home'>
           <div className='cont'>
           <Sidebar/>
           <Chat/>
           
           </div>

        </div>
    );
}

export default Home;



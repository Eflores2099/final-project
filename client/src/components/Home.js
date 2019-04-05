import React from 'react'
// import { PromiseProvider } from 'mongoose';
import HomeProfile from './HomeProfile.js'



const Home = ({logout, username}) => {
    return(
        <div>
            <button onClick={logout}>Logout</button>
            Welcome {username}
            <HomeProfile />
           
            
        </div>

        
    )
}

export default Home
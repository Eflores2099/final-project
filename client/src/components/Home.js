import React from 'react'
// import { PromiseProvider } from 'mongoose';
import HomeProfile from './HomeProfile.js'
// import {Switch, Route,} from 'react-router-dom'





const Home = ({logout, username}) => {
    return (
        <div>
            
            <button onClick = {logout}>Logout</button>
            <br/>
                Welcome {username}
                <br/>
            <HomeProfile />
            
           
           
        </div>

        
    )
}

export default Home
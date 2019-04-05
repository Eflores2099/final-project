import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom"
import {withUser} from'./context/UserProvider.js'
import AuthContainer from './components/auth/AuthContainer.js'
import ProtectedRoute from './shared/ProtectedRoute.js'
import Home from './components/Home.js'



const App = (props) => {
    const{ user, token, logout} = props
    return (
        <div>
            <Switch>
                <Route 
                    exact path = "/" 
                    render = {rProps => token ? <Redirect to="/home"/> : <AuthContainer {...rProps}/>}/>
                <ProtectedRoute
                    token={token}
                    path="/home"
                    redirectedTo="/login"
                    component={Home}
                    username={user.username}
                    logout={logout}
                    />
                <Route 
                    path="/home" 
                    render= {rProps => !token ? <Redirect to="/login"/> : <Home {...rProps}/>}/>     
                
            </Switch>
        </div>
    )
}

export default withUser(App)
import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'


const UserContext = React.createContext()

class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            user:JSON.parse(localStorage.getItem('user')) || {},
            token: localStorage.token || "",
            errMsg:""

        }
    }
    signup = credentials => {
        axios.post("/auth/signup", credentials).then(res => {
            const {user, token} = res.data
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
            this.setState({ user, token,errMsg: ""})
        })
        .catch(err => this.handleErr(err.response.data.errMsg))
    }

    login = credentials => {
        axios.post("/auth/login", credentials).then(res => {
            const {user, token} = res.data
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
            this.setState({ user, token})
            this.setState({user,token, errMsg: ""})

    })
    .catch(err => this.handleErr(err.response.data.errMsg))
    
    }


    logout = ( )=> {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.setState({user: {}, token: "" })
    }

    handleErr = err => {
        this.setState({errMsg: err})
    }

    render(){
        return (
            <UserContext.Provider
                value={{
                    ...this.state,
                    signup:this.signup,
                    login: this.login,
                    logout:this.logout
                }}>
                {this.props.children}
                </UserContext.Provider>
        )
    }
}

export default withRouter(UserProvider)

export const withUser = C => props =>( 
    <UserContext.Consumer>
        {value => <C {...props} {...value}/>}
    </UserContext.Consumer>)
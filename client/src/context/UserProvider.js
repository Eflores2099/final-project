import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

const userAxios = axios.create();

userAxios.interceptors.request.use((config)=>{
    const token=localStorage.getItem("token")
    config.headers.Authorization= `Bearer ${token}`
    return config;
})



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
        userAxios.post("/auth/signup", credentials).then(res => {
            const {user, token} = res.data
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
            this.setState({ user, token,errMsg: ""})
        })
        .catch(err => this.handleErr(err.response.data.errMsg))
    }

    login = credentials => {
        userAxios.post("/auth/login", credentials).then(res => {
            const {user, token} = res.data
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
            this.setState({ user, token})
            this.setState({user,token, errMsg: ""})

    })
    .catch(err => this.handleErr(err.response.data.errMsg))
    
    }


    logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.setState({user: {}, token: "" })
    }

    handleErr = err => {
        this.setState({errMsg: err})
    }

    profile = (profile) => {
        userAxios.post("/api/user/profile", {profile: profile}).then(res => {
            localStorage.setItem('user', JSON.stringify(res.data))
            this.setState({user: res.data})
            
        })
        
    }

    getProfile = (profile) => {
        userAxios.get("/api/user/profile", {profile:profile}).then(res => {
            this.setState({user: res.data})
        })
    }

    trustee = (trustee) => {
        userAxios.post("api/trustee", {trustee: trustee}).then(res => {
            localStorage.setItem("user", JSON .stringify(res.data))
            this.setState({trustee:res.data})
        })
    }

    render(){
        return (
            <UserContext.Provider
                value={{
                    ...this.state,
                    signup:this.signup,
                    login: this.login,
                    logout:this.logout,
                    profile:this.profile,
                    trustee:this.trustee
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
import React from 'react'

const AuthForm = props => {
    const {handleChange, handleSubmit, input, btnText} = props
    return(
        <form onSubmit = { handleSubmit}>
            <input type = "text" 
                name = "username" 
                onChange = {handleChange} 
                value = {username} 
                placeholder = "User Name" 
                required/>
            <input type = "password" 
                name= "password" 
                onChange = {handleChange} 
                value = {password} 
                placeholder = "Password" 
                required/>
            <button>{btnText}</button>
        </form>
    )
}

export default AuthForm
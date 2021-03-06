import React, {Component} from 'react'
import {withUser} from '../context/UserProvider'


class HomeProfile extends Component {
    constructor() {
        super() 
        this.state= {
            profile: {

                firstName: "",
                lastName: "",
                gender: "",
                birthday: "",
                placeOfBirth: "",
                nationality: "",
                country: "",
                city: "",
                state: "",
                phoneNumber: "",
                maritalStatus:"",
                partner: "",
                numOfChildren: "",
                mother: "",
                father: ""
            }
        }
    }



    handleChange = (e) => {
        console.log(e.target.name)
        let name = e.target.name
        let value = e.target.value
        console.log(e.target.value)
        console.log(name)
        this.setState(prevState => ({
            profile:
                {
                    ...prevState.profile,
                [name]: value
            }
        }))
    }

    handleProfileSubmit = (e) => {

        e.preventDefault()
        this.props.profile(this.state.profile)
        console.log('saved')
    
}


    render() {
        const mappedInputs = Object.entries(this.state.profile).map(([key, value]) => (
            <input key = {key} 
                type ="text" 
                name = {key} 
                value = {value} 
                onChange = {this.handleChange} 
                placeholder = {key[0].toUpperCase() + key.slice(1)}
            />
        ))

        
        return (
            <div className = "profile">
                <br/>
                <br/>
                <h3>about me</h3>
                <form className= "profile-form" onSubmit = {this.handleProfileSubmit}>
                     {mappedInputs}
                        <br/>
                <button onSubmit={this.handleProfileSubmit}>Save</button>
                </form>
            </div>
        )   
    }
}

export default withUser(HomeProfile)
import React, {Component} from 'react'


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
        this.setState(prevState => ({
            profile:{
                ...prevState.profile,
                [e.target.name]: e.target.value
            }
        }))
    }

    handleProfileSubmit = (e) => {

        e.preventDefault()
        this.props.profile(this.state.profile)
}


    render() {
        const mappedInputs = Object.entries(this.state.profile).map(([key, value]) => (
            <input key={key} type="text" name={key} value={value} onChange= {this.handleChange} placeholder={key[0].toUpperCase() + key.slice(1)}/>
        ))

        
        return (
            <div className = "profile-form">
                <form onSubmit={this.handleProfileSubmit}>
                     {mappedInputs}

                <button>Save</button>
                </form>
            </div>
        )   
    }
}

export default HomeProfile
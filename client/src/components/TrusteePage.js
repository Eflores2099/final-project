import React, {Component} from 'react'
import {withUser} from '../context/UserProvider'


class TrusteePage extends Component {
    constructor() {
        super() 
        this.state = {
            trustee: {

                firstName: "",
                lastName: "",
                email: ""
            }
        }
    }  
    
    handleChange = (e) => {
        console.log(e.target.name)
        let name = e.target.name
        let value= e.target.value 
        console.log(e.target.value)
        console.log(name)
        this.setState(prevState => ({
            trustee:
                {
                    ...prevState.trustee,
                [name]: value
            }
        }))
    }


    
    handleTrusteeSubmit = (e) => {

        e.preventDefault()
        this.props.trustee(this.state.trustee)
        console.log('saved')
    }
    
    render() {
        const mappedTrustees = Object.entries(this.state.trustee).map(([key, value]) => (
            <input key = {key} 
                type = "text" 
                name = {key} 
                value ={value} 
                onChange = {this.handleChange} 
                placeholder = {key[0].toUpperCase() + key.slice(1)}
            />
        ))

        return (
            <div>
                <br/>
                <br/>
                <h3>Name of Trustees</h3>
                <form className ="trustee-input"onSubmit  = {this.handleTrusteeSubmit}>
                    {mappedTrustees}
                    <br/>

                    <button onSubmit ={this.handleTrusteeSubmit}>Save</button>
                </form>

            </div>
        )
    }
}    


export default withUser(TrusteePage)
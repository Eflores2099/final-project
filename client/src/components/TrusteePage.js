import React, {Component} from 'react'


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
        this.setState(preveState => ({
            trustee:{
                ...preveState.trustee,
                [e.target.name]: e.target.value
            }
        }))
    }


    
    handleTrusteeSubmit = (e) => {

        e.preventDefault()
        this.props.trustee(this.state.trustee)
    }
    
    render() {
        const mappedInputs = Object.entries(this.state.trustee).map(([key, value]) => (
            <input key = {key} type = "text" name = {key} value ={ value} onChange = {this.handleChange} placeholder = {key[0].toUpperCase() + key.slice(1)}/>
        ))

        return (
            <div>
                <form onSubmit={this.handleTrusteeSubmit}>
                    {mappedInputs}
                </form>

            </div>
        )
    }
}    







}
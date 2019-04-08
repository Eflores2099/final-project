import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className = "nav">
            <Link to = "/">Home</Link>
            <Link to = "/trustee">Trustees</Link>
            <Link to = '/fileUpload'>Upload Documents</Link>

        </div>
    )
}

export default NavBar
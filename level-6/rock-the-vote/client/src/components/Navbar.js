import React from "react"
import {Link} from "react-router-dom"

export default function Navbar(props){
    const { token } = props
    return(
        <div className="navbar">
            { token && <Link to="/profile">Profile</Link> }
            { token && <Link to="/public">Public</Link> }
        </div>
    )
}
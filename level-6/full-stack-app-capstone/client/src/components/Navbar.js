import React from "react"
import {Link} from "react-router-dom"

export default function Navbar(props){
    const { token } = props
    return(
        <div className="navbar">
            { token && <Link to="/profile">Profile</Link> }
            { token && <Link to="/public">Public</Link> }
            { token && <Link to="/classes">Classes</Link> }
            { token && <Link to="/features">Features</Link> }
            { token && <Link to="/equipment">Equipment</Link> }
            { token && <Link to="/spells">Spells</Link> }
        </div>
    )
}
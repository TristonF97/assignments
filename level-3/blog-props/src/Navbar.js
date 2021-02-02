import React from "react"
import "./App.css"

function Navbar() {
    return (
        <div className="navStyle">
            <a>Start Bootstrap</a>
            <nav className="nav">
                <a>HOME</a>
                <a>ABOUT</a>
                <a>SAMPLE POST</a>
                <a>CONTACT</a>
            </nav>
        </div>
    )
}

export default Navbar
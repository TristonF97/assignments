import React from "react"
import Navbar from "./Navbar"

function Header() {
    return (
        <div className="header">
            <Navbar />
            <h1 className="title">Clean Blog</h1>
            <span className="subTitle">A Blog Theme by Start Bootstrap</span>
        </div>
    )
}

export default Header
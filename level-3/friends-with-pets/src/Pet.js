import React from "react"
import "./App.css"

function Pet(props) {
    return (
        <div className="petStyles">
            <h2>Pet Name: {props.name}</h2>
            <h3>Breed: {props.breed}</h3>
        </div>
    )
}

export default Pet

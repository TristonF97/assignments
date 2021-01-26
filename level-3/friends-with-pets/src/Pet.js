import React from "react"

function Pet(props) {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h3>Breed: {props.breed}</h3>
        </div>
    )
}

export default Pet

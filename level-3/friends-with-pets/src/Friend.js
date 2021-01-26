import React from "react"
import Pet from "./Pet"

function Friend(props) {
    const petList = props.pets.map(pet => <Pet name={props.pets.name}
        breed={props.pets.breed} />)

    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h3>Age: {props.age}</h3>
            <h3>Pets: {props.pets}</h3>
            {petList}
        </div>
    )
}

export default Friend
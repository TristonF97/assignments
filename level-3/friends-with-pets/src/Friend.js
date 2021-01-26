import React from "react"
// import Pet from "./Pet"
// import friends from "./friendPetArray"

function Friend(props) {
    // const petList = friends.map(pet => <Pet name={pet.name}
    //     breed={pet.breed} />)

    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h3>Age: {props.age}</h3>
            <h3>Pets: {props.pets}</h3>
            {/* {petList} */}
        </div>
    )
}

export default Friend
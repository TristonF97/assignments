import React from "react"
import Pet from "./Pet"

function Friend(props) {
    const petList = props.pets.map(pets => <Pet name={pets.name}
        breed={pets.breed} />);

        const friendStyles = {
            display: "inline-block",
            verticalAlign: "top",
            textAlign: "center",
            width: 300,
            border: "1px solid black",
            borderRadius: 50,
            margin: 10,
            color: "white",
            backgroundColor: "#993108",
        };

    return (
        <div style={friendStyles}>
            <h2>Name: {props.name}</h2>
            <h3>Age: {props.age}</h3>
            {petList}
        </div>
    )
}

export default Friend
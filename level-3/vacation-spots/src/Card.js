import React from "react"

function Card(props) {
    const mystyle = {
        border: "2px solid black",
        width: "275px",
        backgroundColor: "#45b4d4",
        padding: "10px",
        margin: "10px"
      };
      
    return (
        <div style={mystyle}>
            <h2>Place: {props.place}</h2>
            <h3>Price: ${props.price}</h3>
            <h3>When to go? {props.timeToGo}</h3>
        </div>
    )
}

export default Card
import React from "react"
import UglyContextConsumer from "./UglyContext"

function EachItem() {
    return (
        <UglyContextConsumer>
            {({uglythings}) => {
                <img src={uglythings.imgUrl} alt="Error" />
            }}
        </UglyContextConsumer>
    )
}

export default EachItem
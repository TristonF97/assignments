import React, {useState, useEffect} from "react"

import Form from "./Form"

function Home() {
    const [ load ] = useState(`http://www.dnd5eapi.co/`)
    console.log(load)
    
    useEffect(() => {
        fetch(`http://www.dnd5eapi.co/`)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    })

    return (
        <div>
            <h1 className="page-title">Home Page!</h1>

            <Form />
        </div>
    )
}

export default Home
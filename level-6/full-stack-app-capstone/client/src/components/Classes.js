import React, { useState, useEffect } from "react"
import axios from "axios"
import ClassDetail from "./ClassDetail.js"

export default function Classes(){
    
    const [ classList, setClassList ] = useState([])

    useEffect(() => {
        axios.get(`https://www.dnd5eapi.co/api/classes`)
            .then(res => {
                console.log(res)
                setClassList(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h1>Classes</h1>

            <ul>
                {
                    classList.map(charclass =>
                        <div>
                            <h2
                            className="class-list"
                            key={charclass.index}>
                            {charclass.name}
                            </h2>
                            

                            <ClassDetail classURL={`http://www.dnd5eapi.co${charclass.url}`}/>
                        </div>)

                }

            </ul>

        </div>
    )
}
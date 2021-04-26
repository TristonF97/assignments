import React, { useState, useEffect } from "react"
import axios from "axios"
import FeatureDetail from "./FeatureDetail.js"

export default function Features(){
    
    const [ featureList, setFeatureList ] = useState([])

    useEffect(() => {
        axios.get(`https://www.dnd5eapi.co/api/features`)
            .then(res => {
                console.log(res)
                setFeatureList(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h1>Class Features</h1>

            <ul>
                {
                    featureList.map(feature =>
                        <div>
                            <h2
                            className="feature-list"
                            key={feature.index}>
                            {feature.name}
                            </h2>
                            

                            <FeatureDetail featureURL={`http://www.dnd5eapi.co${feature.url}`}/>
                        </div>)

                }

            </ul>

        </div>
    )

}
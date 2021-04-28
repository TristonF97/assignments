import React, {useState, useEffect} from "react"
import axios from "axios"

export default function FeatureDetail(props){

    const [ featureResults, setFeatureResults ] = useState([])
    const { featureURL } = props

    useEffect(() => {
        axios.get(`${featureURL}`)
            .then(res => {
                console.log(res.data)
                setFeatureResults(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            {/* Doesn't work */}
            {/* <p>Class: {featureResults.class}</p> */}
            {/* <p>Class: {featureResults.class.map(charclass =>
                <p>
                    {charclass.name}
                </p>
            )}</p> */}
            <p>Level: {featureResults.level}</p>
            <p>Description: {featureResults.desc}</p>
        </div>
    )
}
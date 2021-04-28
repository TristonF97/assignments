import React, {useState, useEffect} from "react"
import axios from "axios"

export default function EquipmentDetail(props){

    const [ equipmentResults, setEquipmentResults ] = useState([])
    const { equipmentURL } = props

    useEffect(() => {
        axios.get(`${equipmentURL}`)
            .then(res => {
                console.log(res.data)
                setEquipmentResults(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            {/* <p>Items: {equipmentResults.map(items =>
                    <ul>
                        {equipment}
                    </ul>
                )}</p> */}
            {/* Doesn't work */}
            {/* <p>Class: {equipmentResults.class}</p> */}
            {/* <p>Class: {equipmentResults.class.map(charclass =>
                <p>
                    {charclass.name}
                </p>
            )}</p> */}
            {/* <p>Level: {equipmentResults.level}</p>
            <p>Description: {equipmentResults.desc}</p> */}
        </div>
    )
}
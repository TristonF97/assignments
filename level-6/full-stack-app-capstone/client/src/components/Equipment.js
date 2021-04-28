import React, { useState, useEffect } from "react"
import axios from "axios"
import EquipmentDetail from "./EquipmentDetail.js"

export default function Equipment(){
    
    const [ equipmentList, setEquipmentList ] = useState([])

    useEffect(() => {
        axios.get(`https://www.dnd5eapi.co/api/equipment-categories`)
            .then(res => {
                console.log(res)
                setEquipmentList(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h1>Equipment</h1>

            <ul>
                {
                    equipmentList.map(equipment =>
                        <div>
                            <h2
                            className="equipment-list"
                            key={equipment.index}>
                            {equipment.name}
                            </h2>
                            

                            <EquipmentDetail equipmentURL={`http://www.dnd5eapi.co${equipment.url}`}/>
                        </div>)

                }

            </ul>

        </div>
    )

}
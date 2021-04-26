import React, {useState, useEffect} from "react"
import axios from "axios"

export default function ClassDetail(props){

    const [classResults, setClassResults] = useState([])
    const { classURL } = props

        useEffect(() => {
        axios.get(`${classURL}`)
            .then(res => {
                console.log(res.data)
                setClassResults(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

        return (
        <div>
            <p>Hit Die: {classResults.hit_die}</p>

            {/* This one works */}
            {/* <p>Proficiencies: {classResults.proficiencies.map(prof =>
                <ul>
                    {prof.name}
                </ul>
            )}</p> */}

            {/* This one is not working */}
            {/* <p>Proficiency Choices: {classResults.proficiency_choices.from.map(choice =>
                <ul>
                    {choice.name}
                </ul>
            )}</p> */}

            {/* This one works */}
            {/* <p>Saving Throws: {classResults.saving_throws.map(save =>
                <ul>
                    {save.name}
                </ul>
            )}</p> */}

            {/* This does not work */}
            {/* <p>Starting Equipment: {classResults.starting_equipment.map(equip =>
                <ul>
                    {equip.equipment.map(item => 
                        <ul>
                            {item.name}
                        </ul>
                    )}
                </ul>
            )}</p> */}

            {/* Doesn't break the code, but doesn't show options */}
            {/* <p>Starting Equipment Options: {classResults.starting_equipment_options.map(option =>
                <ul>
                    {option.index}
                </ul>
            )}</p> */}

            {/* This one works but the api only has 1 subclass per class */}
            {/* <p>Subclasses: {classResults.subclasses.map(sub =>
                <ul>
                    {sub.name}
                </ul>
            )}</p> */}
        </div>
    )
}
import React, {useState, useEffect} from "react"
import axios from "axios"

export default function SpellDetail(props) {

    const [spellResults, setSpellResults] = useState([])
    const {spellURL} = props
    
    useEffect(() => {
        axios.get(`${spellURL}`)
            .then(res => {
                console.log(res.data)
                setSpellResults(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <p className="spell-info">Casting Time: {spellResults.casting_time}</p>

            <p className="spell-info">Range: {spellResults.range}</p>

            <p className="spell-info">Duration: {spellResults.duration}</p>

            {spellResults.level === 0 ?
            <p className="spell-info">Spell Level: Cantrip</p> : 
            <p className="spell-info">Spell Level: {spellResults.level}</p>}

            {spellResults.concentration === true ?
            <p className="spell-info">Concentration: Yes</p> :
            <p className="spell-info">Concentration: No</p>}

            <h3 className="spell-descritpion">Description: {spellResults.desc}</h3>

            {spellResults.higher_level === "" ?
            <h3 className="spell-descritpion">Higher Levels: None </h3> :
            <h3 className="higher-level">Higher Levels: {spellResults.higher_level}</h3>}
        </div>
    )
}
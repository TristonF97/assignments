import React, {useState, useEffect} from "react"
import axios from "axios"

function SpellDetail(props) {

    const [results, setResults] = useState([])
    const {spellURL} = props
    
    useEffect(() => {
        axios.get(`${spellURL}`)
            .then(res => {
                console.log(res.data)
                setResults(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <p className="spell-info">Casting Time: {results.casting_time}</p>

            <p className="spell-info">Range: {results.range}</p>

            <p className="spell-info">Duration: {results.duration}</p>

            {results.level === 0 ?
            <p className="spell-info">Spell Level: Cantrip</p> : 
            <p className="spell-info">Spell Level: {results.level}</p>}

            {results.concentration === true ?
            <p className="spell-info">Concentration: Yes</p> :
            <p className="spell-info">Concentration: No</p>}

            <h3 className="spell-descritpion">Description: {results.desc}</h3>

            {results.higher_level === "" ?
            <h3 className="spell-descritpion">Higher Levels: None </h3> :
            <h3 className="higher-level">Higher Levels: {results.higher_level}</h3>}
        </div>
    )
}

export default SpellDetail
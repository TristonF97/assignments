import React, { useState, useEffect } from "react"
import axios from "axios"
import SpellDetail from "./SpellDetail.js"

export default function Spells(){

    const [ spellList, setSpellList ] = useState([])

    useEffect(() => {
        axios.get(`https://www.dnd5eapi.co/api/spells`)
            .then(res => {
                console.log(res)
                setSpellList(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="spell-container">
            <h1 className="spell-page-title">Spell List</h1>

            <ul>
                {
                    spellList.map(spell =>
                        <div>
                            <h2
                            className="spell-list"
                            key={spell.index}>
                            {spell.name}
                            </h2>
                            

                            <SpellDetail spellURL={`http://www.dnd5eapi.co${spell.url}`}/>
                        </div>)

                }

            </ul>

        </div>
    )
}
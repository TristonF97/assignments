import React, {useState, useEffect} from "react"
import axios from "axios"

import SpellDetail from "./SpellDetail"

function Spell() {

    const [ list, setList ] = useState([])
    
    useEffect(() => {
        axios.get(`https://www.dnd5eapi.co/api/spells`)
            .then(res => {
                console.log(res)
                setList(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="spell-container">
            <h1 className="spell-page-title">Spell List</h1>

            <h2 className="spell-summary">
                Here is the complete 5e base spell list. You can find all the spells here that
                you would find inside the 5e Player's Handbook. They are organized alphabetically
                for your convenience.

            </h2>

            <ul>
                {
                    list.map(spell =>
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

export default Spell
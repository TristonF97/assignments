import React from "react"

function Form() {
    return (
        <form className="form">
            <input
                className="search-bar"
                placeholder="Class/Feature/Spell/Monster">
            </input>

            <button className="search-button">Search</button>
        </form>
    )
}

export default Form
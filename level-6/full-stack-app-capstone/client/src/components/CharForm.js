import React, { useState } from 'react'

const initInputs = {
  name: "",
  charclass: "",
  race: "",
  background: ""
}

export default function PostForm(props){
  const [inputs, setInputs] = useState(initInputs)
  const { addCharacter } = props

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addCharacter(inputs)
    setInputs(initInputs)
  }

  const { name, charclass, race, background} = inputs

  const skills = [
    "Acrobatics",
    " Animal Handling",
    " Arcana",
    " Athletics",
    " Deceptions",
    " History",
    " Insight",
    " Intimidation",
    " Investigation",
    " Medicine",
    " Nature",
    " Perception",
    " Performance",
    " Persuasion",
    " Religion",
    " Sleight of Hand",
    " Stealth",
    " Survival"
  ]

  return (
    <form onSubmit={handleSubmit}>

      <input 
        type="text" 
        name="name" 
        value={name} 
        onChange={handleChange} 
        placeholder="Name"
      />

      <input
        type="text" 
        name="charclass" 
        value={charclass} 
        onChange={handleChange} 
        placeholder="Character Class"
      />

        <input
          type="text"
          name="race"
          value={race}
          onChange={handleChange}
          placeholder="Race"
        />

        <input
          type="text"
          name="background"
          value={background}
          onChange={handleChange}
          placeholder="Background"
        />

        <input
          type="text"
          name="alignment"
          onChange={handleChange}
          placeholder="Alignment"
        />

        <p>Strength</p>
        <input
          type="number"
          name="str"
          onChange={handleChange}
          placeholder="0"
        />
        <p>STR Modifier</p>
        <input
          type="number"
          name="str"
          onChange={handleChange}
          placeholder="0"
        />

        <p>Dexterity</p>
        <input
          type="number"
          name="dex"
          onChange={handleChange}
          placeholder="0"
        />
        <p>DEX Modifier</p>
        <input
          type="number"
          name="dex"
          onChange={handleChange}
          placeholder="0"
        />

        <p>Intelligence</p>
        <input
          type="number"
          name="int"
          onChange={handleChange}
          placeholder="0"
        />
        <p>INT Modifier</p>
        <input
          type="number"
          name="int"
          onChange={handleChange}
          placeholder="0"
        />

        <p>Wisdom</p>
        <input
          type="number"
          name="wis"
          onChange={handleChange}
          placeholder="0"
        />
        <p>WIS Modifier</p>
        <input
          type="number"
          name="wis"
          onChange={handleChange}
          placeholder="0"
        />

        <p>Charisma</p>
        <input
          type="number"
          name="cha"
          onChange={handleChange}
          placeholder="0"
        />
        <p>CHA Modifier</p>
        <input
          type="number"
          name="cha"
          onChange={handleChange}
          placeholder="0"
        />

        <p>Proficiency Bonus</p>

        <input
          type="number"
          name="proficiency"
          onChange={handleChange}
          placeholder="0"
        />

        <p>Saving Throws</p>

        <input
          type="radio"
          name="str"
        />
        <input
          type="number"
          name="str"
          placeholder="0"
        />
        <p>Strength</p>

        <input
          type="radio"
          name="dex"
        />
        <input
          type="number"
          name="dex"
          placeholder="0"
        />
        <p>Dexterity</p>

        <input
          type="radio"
          name="int"
        />
        <input
          type="number"
          name="int"
          placeholder="0"
        />
        <p>Intelligence</p>

        <input
          type="radio"
          name="wis"
        />
        <input
          type="number"
          name="wis"
          placeholder="0"
        />
        <p>Wisdom</p>

        <input
          type="radio"
          name="cha"
        />
        <input
          type="number"
          name="cha"
          placeholder="0"
        />
        <p>Charisma</p>

        <p>Skills</p>

        <input
          type="radio"
          name="acro"
        />
        <input
          type="number"
          name="acro"
          placeholder="0"
        />
        <p>Acrobatics</p>

        <input
          type="radio"
          name="animlhndl"
        />
        <input
          type="number"
          name="animlhndl"
          placeholder="0"
        />
        <p>Animal Handling</p>

        {/* {document.getElementById("root").innerHTML = skills} */}
        
      <button>Add Character</button>
      
    </form>
  )
}
import React, { useState } from 'react'

const initInputs = {
  name: "",
  charclass: "",
  race: "",
  background: ""
}

export default function PostForm(props){
  const [inputs, setInputs] = useState(initInputs)
  const { addIssue } = props

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addIssue(inputs)
    setInputs(initInputs)
  }

  const { name, charclass, race, background} = inputs
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
        
      <button>Add Character</button>
      
    </form>
  )
}
import React, { useContext } from 'react'
import CharForm from './CharForm.js'
import CharList from './CharList.js'
import { UserContext } from '../context/UserProvider.js'

export default function Profile(props){

    const {logout} = props
  
    const { 
      user: {
        username
      },
      addCharacter,
      characters
    } = useContext(UserContext)
  
    return (
      <div className="profile">
        <h1>Welcome {username}!</h1>
        <button onClick={logout}>Logout</button>
        <h3>Make a new Character</h3>
        <CharForm addCharacter={addCharacter}/>
        <h3>Your Characters</h3>
        <CharList characterss={characters}/>
      </div>
    )
  }
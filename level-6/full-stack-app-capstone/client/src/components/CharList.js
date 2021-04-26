import React from 'react'
import Char from './Char.js'

export default function CharList(props){

  const { characters } = props

  return (
    <div className="char-list">
        {/* { characters.map(character => <Char {...character} key={character._id}/>) } */}
    </div>
  )
}
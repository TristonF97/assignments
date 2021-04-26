import React from 'react'

export default function Char(props){

  const { name, charclass, race, background } = props

  return (
    <div className="char">
      <h1>{ name }</h1>
      <h3>{ charclass }</h3>
      <h3>{ race }</h3>
      <h3>{ background }</h3>
    </div>
  )
}
import React from 'react'

export default function Char(props){

  const { name, charclass, race, background, alignment } = props

  return (
    <div className="char">
      <h1>Name: { name }</h1>
      <h3>Class: { charclass }</h3>
      <h3>Race: { race }</h3>
      <h3>Background: { background }</h3>
      <h3>Alignment: {alignment}</h3>
    </div>
  )
}
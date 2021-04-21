import React from 'react'

export default function Post(props){

  const { title, description, upvote, downvote } = props

  return (
    <div className="post">
      <h1>{ title }</h1>
      <h3>{ description }</h3>
      <button> Upvote!</button>
      <span>{ upvote }</span>
      <button> Downvote!</button>
      <span>{ downvote }</span>
    </div>
  )
}
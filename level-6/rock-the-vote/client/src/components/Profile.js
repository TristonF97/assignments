import React, { useContext } from 'react'
import PostForm from './PostForm.js'
import PostList from './PostList.js'
import { UserContext } from '../context/UserProvider.js'

export default function Profile(props){

  const {logout} = props

  const { 
    user: {
      username
    },
    addIssue,
    issues
  } = useContext(UserContext)

  return (
    <div className="profile">
      <h1>Welcome {username}!</h1>
      <button onClick={logout}>Logout</button>
      <h3>Make a Post</h3>
      <PostForm addIssue={addIssue}/>
      <h3>Your Posts</h3>
      <PostList issues={issues}/>
    </div>
  )
}
import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider.js'
import Post from './Post.js'

export default function Public(){

  const { user: {username}, allIssues } = useContext(UserContext)

  return (
    <div className="public">
      <h1>All Issues</h1>
      <h3> Hello {username}, checkout the most talked about issues!</h3>
      <div>
            { [...allIssues].map(issue => <Post {...issue}/>) }
      </div>
    </div>
  )
}

// import React, { useContext, useEffect } from 'react'
// import { UserContext } from '../context/UserProvider.js'
// import PostList from './PostList'

// export default function Public(){

//   const { user: {username}, allIssues, getAllIssues } = useContext(UserContext)

//   useEffect(() => {
//     getAllIssues()
//   }, [])

//   return (
//     <div className="public">
//       <h1>All Issues</h1>
//       <h3> Hello {username}, checkout the most talked about issues!</h3>
//       <PostList allIssues={ allIssues } getAllIssues={ getAllIssues } />
//     </div>
//   )
// }
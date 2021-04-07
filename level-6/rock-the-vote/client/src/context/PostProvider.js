import React, { useState } from 'react'

export const PostContext = React.createContext()

export default function PostProvider(props){
    const natState = {
        issues: [],
        comments: []
    }

    const [postState, setPostState] = useState(natState)

    return (
        <PostContext>

        </PostContext>
    )
}
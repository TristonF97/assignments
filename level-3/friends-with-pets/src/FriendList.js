import React from "react"
import Friend from "./Friend"
import friends from "./friendPetArray"

function FriendList() {
    const friendList = friends.map(friend => <Friend name={friend.name}
        age={friend.age} pets={friend.pets} />)

        return (
            <div>
                {friendList}
            </div>
        )
}

export default FriendList
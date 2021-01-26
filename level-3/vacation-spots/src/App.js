import React from "react"
import Card from "./Card"
import vacationSpots from "./vacationComponent"

function App() {
    const vacation = vacationSpots.map(spot => <Card place={spot.place}
        price={spot.price} timeToGo={spot.timeToGo}/>)

    return (
        <div>
            {vacation}
        </div>
    )
}

export default App
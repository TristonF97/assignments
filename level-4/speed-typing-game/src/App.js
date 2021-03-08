import React from "react"
import useGame from "./Game"

import "./styles.css"

function App() {
    const {
        remainingTime,
        runTime,
        handleChange,
        timer,
        textArea,
        wordCount,
        text
    } = useGame(15)

    return (
        <div>
            <br />
            <h1>How fast can you type?</h1>
            <textarea
                ref={textArea}
                value={text}
                onChange={handleChange}
                disabled={!runTime}    
            />
            <h3>Time remaining: {remainingTime}</h3>
            <button onClick={timer} disabled={runTime}>
                {wordCount > 0 ? "Play again" : "Start"}
            </button>

            {wordCount > 0 && <h1>Word Count: {wordCount}</h1>}
        </div>
    )
}

export default App
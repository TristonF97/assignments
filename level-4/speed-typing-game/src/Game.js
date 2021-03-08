import React, {useState, useEffect, useRef} from "react"

function useGame(startTime = 10) {
    const [remainingTime, setRemainingTime] = useState(startTime)
    const [text, setText] = useState("")
    const [wordCount, setWordCount] = useState(0)
    const [runTime, setRunTime] = useState(false)
    const textArea = useRef(null)

    function timer() {
        setRunTime(true)
        setWordCount(0)
        setText("")
        setRemainingTime(startTime)
        textArea.current.disabled = false
        textArea.current.focus()
    }

    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    function addCount(text) {
        const wordsArray = text.trim().split(" ")
        return wordsArray.filter(word => word !== "").length
    }

    function finish() {
        setRunTime(false)
        const wordsToNumbers = addCount(text)
        setWordCount(wordsToNumbers)
        setRemainingTime(0)
    }

    function decrement() {
        setRemainingTime(time => time -1)
    }

    useEffect(() => {
        if(runTime && remainingTime !== 0) {
            setTimeout(decrement, 1000)
        } else if (remainingTime === 0) {
            finish()
        }
    }, [runTime, remainingTime])

    return {handleChange, timer, textArea, remainingTime, wordCount, text, runTime}
}

export default useGame
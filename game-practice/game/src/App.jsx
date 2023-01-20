import React, {useState, useEffect} from "react"

/**
 * Challenge: Using hooks, track the state of the text in the textarea on every keystroke
 * To verify it's working, you could just console.log the state on every change
 */

function App() {
    const [text, setText] = useState("")
    const [countdown, setCountdown] = useState(5)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length

    }

    function startClock() {
        setIsTimeRunning(true)
        setCountdown(5)
        setText("")
    }

    function endGame() {
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(text))
    }
    
    useEffect(() => {
        if(isTimeRunning && countdown > 0) {
            setTimeout(() => {
                setCountdown(time => time - 1)
            }, 1000)
        } else if(countdown === 0) {
            endGame()
        }
    }, [countdown, isTimeRunning])
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange}
                value={text}
            />
            <h4>Time remaining: {countdown}</h4>
            <button onClick={startClock}>Start</button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default App
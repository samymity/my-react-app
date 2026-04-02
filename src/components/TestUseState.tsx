import { useState } from "react";
import "./TestUseState.css";


function TestUseState() {


    const [count, setCount] = useState(10);
    const [mood, setMood] = useState("happy");

    const moodChange = () => {
        setMood(mood === "happy" ? "sad" : "happy");
        setMood("angry");
    }



    return (
        <>
            <div>test</div>
            <div>test</div>
            <button className="mood-button" onClick={() => setCount(count - 1)}>decrement</button>
            <p>{count}</p>
            <button className="mood-button" onClick={() => setCount(count + 1)}>increment</button>
            <p>{mood}</p>
            <button className="mood-button" onClick={moodChange}>
                toggle mood
            </button>

            <p>{count}</p>
            <p>{mood}</p>
        </>
    )
}
export default TestUseState 
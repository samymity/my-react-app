import { useState } from "react";


function TestUseState() {


    const [count, setCount] = useState(10);



    return (
        <>
            <div>test</div>
            <div>test</div>
            <button onClick={() => setCount(count - 1)}>decrement</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </>
    )
}
export default TestUseState 
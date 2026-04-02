import { useState } from 'react';

export function MyComponent() {
    // useState(0) ka matlab: shuruat 0 se karo
    // count = current value
    // setCount = wo function jo value badlega
    const [count, setCount] = useState(5);

    return (
        <div>
            <h1>{count}</h1> {/* React khud isse update karega */}
            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Click Me!
            </button>
        </div>
    );
}
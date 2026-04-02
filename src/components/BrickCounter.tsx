import { useState } from 'react';

// 1. Define what the component expects (The "Order Form")
interface CounterProps {
    brickType: string;
    color: string;
}

// 2. Accept the props in the function
export function BrickCounter({ brickType, color }: CounterProps) {
    const [count, setCount] = useState(0);

    return (
        <div style={{ border: `3px solid ${color}`, padding: '10px', margin: '10px' }}>
            <h3 style={{ color: color }}>{brickType} Bin 📦</h3>
            <p>Pieces: {count}</p>
            <button onClick={() => setCount(count + 1)}>Add {color} {brickType}</button>
        </div>
    );
}
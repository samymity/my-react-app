import { useState, useEffect } from 'react';

export function HookPlug() {
  // 1. useState Demo: creating state variables
  const [count, setCount] = useState(0);
  const [autoCounter, setAutoCounter] = useState(0);

  // 2. useEffect Demo: Setup a timer when component loads (empty dependency array)
  useEffect(() => {
    const timer = setInterval(() => {
      setAutoCounter((prev) => prev + 1);
    }, 1000);

    // Cleanup function - runs when component unmounts
    return () => clearInterval(timer);
  }, []); // [] means runs ONCE on mount

  // 3. useEffect Demo: Side effect that runs when a specific state changes
  useEffect(() => {
    // This updates the browser tab title whenever 'count' changes
    document.title = `Clicked ${count} times`;
  }, [count]); // [count] means it runs when 'count' updates

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>React Hooks Concepts 🪝</h2>
      
      <div style={{ 
        border: '2px dashed #d32f2f', 
        padding: '1rem', 
        margin: '1rem auto', 
        borderRadius: '8px',
        maxWidth: '500px'
      }}>
        <h3>useState Hook Demo</h3>
        <p>Manual Count: {count}</p>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ 
            padding: '8px 16px', 
            background: '#d32f2f', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          Increment Manual Count
        </button>
      </div>

      <div style={{ 
        border: '2px dashed #1976d2', 
        padding: '1rem', 
        margin: '1rem auto', 
        borderRadius: '8px',
        maxWidth: '500px'
      }}>
        <h3>useEffect Hook Demo</h3>
        <p>Auto Increments every second (Timer): <strong>{autoCounter}</strong></p>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>
          <em>Notice how the browser page title changes when you click the manual counter button above! This is because of another useEffect hook.</em>
        </p>
      </div>
    </div>
  );
}

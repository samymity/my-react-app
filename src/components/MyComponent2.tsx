// This component "defines" that it expects 'brand' and 'color'
export function MyComponent2({ brand, color }: { brand: string, color: string }) {
    return (
        <div style={{ border: `1px solid ${color}` }}>
            <h3>Brand: {brand}</h3>
        </div>
    );
}
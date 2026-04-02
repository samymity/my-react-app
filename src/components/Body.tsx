import { BrickCounter } from "./BrickCounter";

export function Body() {
    return (
        <main style={{ padding: '2rem', minHeight: '60vh' }}>
            <h2>Current Build: Millennium Falcon</h2>
            <p>Pieces remaining: 7,541</p>
            <BrickCounter brickType="Technic" color="blue" />
            <BrickCounter brickType="Duplo" color="green" />
            <BrickCounter brickType="Classic" color="red" />

        </main>
    );
}
import { MyComponent2 } from "./MyComponent2";
import { Car } from "./Car";
import Parent from "./Parent";

export function Garage() {
    return (
        <section>
            <h2>My Garage</h2>
            {/* Passing strings, numbers, or objects */}
            <MyComponent2 brand="Tesla" color="red" />
            <MyComponent2 brand="BMW" color="blue" />

            <Car />
            <Parent />


        </section>
    );
}
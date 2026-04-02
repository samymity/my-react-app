import { useState } from "react";
import "./TestUseState.css";

interface Employee {
    name: string;
    age: number;
    department: string;
}

function TestUseState1() {


    const [count, setCount] = useState(10);
    const [mood, setMood] = useState("happy");

    const [employee, setEmployee] = useState<Employee>({
        name: "Sandeep",
        age: 28,
        department: "Engineering"
    });

    const updateEmployeeName = () => {
        // When updating an object in useState, always spread the existing object first!
        setEmployee({ ...employee, name: "Sandeep Master Builder" });
    };

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

            <hr />
            <h3>Employee Details</h3>
            <p>Name: {employee.name}</p>
            <p>Age: {employee.age}</p>
            <p>Department: {employee.department}</p>

            <button className="mood-button" onClick={updateEmployeeName}>
                Update Name
            </button>
            <button className="mood-button" onClick={() => setEmployee({ ...employee, age: employee.age + 1 })} style={{ marginLeft: '10px' }}>
                Happy Birthday! (Increase Age)
            </button>
        </>
    )
}
export default TestUseState1 
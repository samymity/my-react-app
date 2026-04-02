export function Car({ brand = "Unknown Brand" }) {

    const drive = () => {
        console.log("Driving...");
        alert("Driving...");
    };

    const arr = [1, 2, 3, 4, 5];
    const arr2 = arr.map((item) => item * 2);

    const numbersCombined = [...arr, ...arr2];


    return (
        <div>
            <h1>{brand}</h1>
            <button onClick={drive}>Start Engine</button>
            {numbersCombined.map((item) => (
                <p key={item}>{item}</p>
            ))}
        </div>
    );

}                   
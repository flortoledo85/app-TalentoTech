import { useState } from "react";

export function Counter() {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter+1);
    };
    const decrement = () => {
        setCounter(counter -1);
    };

    return(
        <div style={{margin: "20px", padding: "20px", border: "1px solid black"}}>
            <h3>Counter</h3>
            <p>Value: {counter}</p>
            <button onClick={increment}>Add +1</button>
            <button onClick={decrement}>Minus -1</button>
        </div>
    );
}
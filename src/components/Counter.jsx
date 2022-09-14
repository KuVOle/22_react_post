import React from "react";
import { useState } from "react";

const Counter = function () {
    const [count, setCount] = useState(0)
    function decriment() {
        setCount(count - 1);
    }
    function increment() {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decriment}>decriment</button>
            <button onClick={increment}>increment</button>
        </div>
    )
}

export default Counter;
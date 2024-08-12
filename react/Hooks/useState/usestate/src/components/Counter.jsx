import React, { useState } from 'react'

function Counter() {

    // syntax of the useState
    // the destructured array has a state / variable and a function to set the value of the state 
    const [count, setCount] = useState(0)
    // const [age, setAge] =useState(18)

    var num = 10;

    const add = () => {
        num = num + 1
    }

    const incrementCount = () => {
        // setCount(count + 1); // directly access the count 
        setCount((prev) => prev + 1); // using the prev state to increment the count
    }

    return (
        <div>
            <h2>Using the useState</h2>
            <p>Count is {count}</p>
            <button onClick={incrementCount}>Click</button>
            <hr />
            <h2>Using the variables</h2>
            <p>Count is {num}</p>
            <button onClick={add}>Click</button>
        </div>
    )
}

export default Counter
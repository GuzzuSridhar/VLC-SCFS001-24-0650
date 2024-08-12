import React, { useState } from 'react'

function Counter() {

    // syntax of the useState
    // the destructured array has a state / variable and a function to set the value of the state 
    const [count, setCount] = useState(10)
    // const [age, setAge] =useState(18)

    const incrementCount = () => {
        // setCount(count + 1); // directly access the count 
        setCount((prev) => prev + 1); // using the prev state to increment the count
    }

    return (
        <div>
            <p>Count is {count}</p>
            <button onClick={incrementCount}>Click</button>
        </div>
    )
}

export default Counter
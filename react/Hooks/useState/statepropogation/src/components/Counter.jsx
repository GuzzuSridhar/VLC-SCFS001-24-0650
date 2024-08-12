import React, { useState } from 'react'
import DisplayCounter from './DisplayCounter'

function Counter() {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count + 1)
    }



    return (
        <div>
            <button onClick={incrementCount}>Add</button>
            <DisplayCounter count={count} />
        </div>
    )
}

export default Counter
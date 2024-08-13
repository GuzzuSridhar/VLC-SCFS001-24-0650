import React, { useEffect, useState } from 'react'

function EffectParams({ value }) {
    // the use effect hook will get fired based on the second parameter


    useEffect(() => {
        console.log("UseEffect Fired")
        //})  // there is no second parameter, the useEffect would get firred on all renders
        //}, []) // the second parameter is an empty dependency array, and would fire only on the initial mount
    }, [value])// the second parameter is a state and would fire on every value change of the state

    return (
        <div>
            <h1>Use Effect Demo </h1>
        </div>
    )
}

function CallingParam() {
    const [value, setValue] = useState(0)
    const [count, setCount] = useState(0)
    return (
        <div>
            <EffectParams value={value} />
            <button onClick={() => setValue(value + 1)}>click</button>
            <button onClick={() => setCount(count + 1)}>add</button>
        </div>
    )
}

export default CallingParam



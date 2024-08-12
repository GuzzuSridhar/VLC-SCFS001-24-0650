import React, { useEffect, useState } from 'react'

function DisplayCounter({ count }) {
    const [displayCounter, setDisplayCounter] = useState(10)


    // const textCount = () => {
    //     if (count < 100)
    //         setDisplayCounter(count * .9)
    //     else
    //         setDisplayCounter(count * 5)

    // }

    useEffect(() => {
        console.log('component loaded')
    }, []) // will be executed on the initial render only


    useEffect(() => {
        console.log('useEffect triggerred')
        setDisplayCounter(count * 200)
    }, [count]) // will be executed on all renders when count changes


    return (
        <div>
            <p>count is : {displayCounter}</p>
        </div>
    )
}

export default DisplayCounter
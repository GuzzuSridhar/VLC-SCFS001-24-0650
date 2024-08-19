import React from 'react'

const Test = () => {


    function test(name) {
        console.log(name)
    }

    return (
        <div>
            <button onClick={() => test('Hello')}>click</button>
        </div>
    )
}

export default Test
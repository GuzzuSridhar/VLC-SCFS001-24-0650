import React from 'react'

function ButtonClick() {

    const handleClick = () => {
        console.log("Button Clicked")
    }

    return (
        <div>
            <h1>Simple Button Click Demo</h1>
            <hr />
            {/* 
                the function handleClick() is not called on the event
                the function is referred to or the handle to the function is passed to onClick Event
            */}
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default ButtonClick
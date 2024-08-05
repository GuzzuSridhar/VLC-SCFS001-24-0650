import React from 'react'

const EventDetails = () => {

    const getEvent = (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.type);
        console.log(e.target.tagName);
        console.log(e.target.innerText);
        console.log(e.target.value);


        if (e.target.tagName === 'INPUT')
            e.target.value = e.target.tagName + " " + e.type + " Event fired"
        else
            e.target.innerText = e.target.tagName + " " + e.type + " Event fired"
    }

    return (
        <div>
            <h1>Event Object Demo</h1>
            <button onClick={getEvent}>Click</button>
            <p onClick={getEvent}>Test</p>
            <input type="text" onChange={getEvent} />
        </div>
    )
}

export default EventDetails
import React, { useRef } from 'react'

function RefDemo() {

    const name = useRef(null)
    const loc = useRef(null)
    const greet = useRef(null)

    const msg = () => {
        console.log(greet.current);
        console.log(name.current);
        console.log(loc.current);

        greet.current.innerText = name.current.value
            + " from " +
            loc.current.value
    }


    return (
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" ref={name} />
            <label htmlFor="loc">Location</label>
            <input type="text" id='loc' ref={loc} />
            <button onClick={msg}>Greet</button>
            <p ref={greet}></p>


        </div>
    )
}

export default RefDemo
import React from 'react'

function Head(props) {
    const { name, event } = props
    return (
        <div>
            {/* <p>Welcome!! {props.name} to {props.event} </p> */}
            <p>Welcome!! {name} to {event} </p>
        </div>
    )
}

export default Head
import React from 'react'

function ShowImages() {
    // using the image in the public folder
    const img = "person3.jpg"
    return (
        <div>
            <p>Image rendered from the public folder</p>
            <img src={img} alt="no img" width="200px" height="200px" />
        </div>
    )
}

export default ShowImages
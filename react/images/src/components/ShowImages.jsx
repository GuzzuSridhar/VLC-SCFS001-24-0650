import React from 'react'
// one of the way to get the images from other folders is to import
import imgOne from '../images/person1.jpg'
import imgTwo from '../images/person2.jpg'

function ShowImages() {
    // using the image in the public folder
    const img = "person3.jpg"
    // the alternate way of importing images is using the cjs import route
    const imgThree = require("../images/person1.jpg")
    const imgFour = require("../images/person2.jpg")
    return (
        <div>
            <p>Image rendered from the public folder</p>
            <img src={img} alt="no img" width="200px" height="200px" />
            <p>Image rendered from the src/images folder</p>
            <img src={imgOne} alt="no img" width="200px" height="200px" />
            <img src={imgTwo} alt="no img" width="200px" height="200px" />

            <img src={imgThree} alt="no img" width="200px" height="200px" />
            <img src={imgFour} alt="no img" width="200px" height="200px" />


        </div>
    )
}

export default ShowImages
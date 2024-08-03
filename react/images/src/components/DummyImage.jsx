import React from 'react'
import DummyImage from 'react-dummy-image'
export function DummyIm() {
    return (
        <>
            <h1>React Dummy Image</h1>
            <DummyImage
                width={400}
                height={200}
                color='#f54266'
                textColor='#ebe6e7'
                text='Sample Anything here'
                format='jpg'
                textSize={32}
                className='img'
            />
        </>
    )
}


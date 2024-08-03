import React from 'react'

function StyleObjects() {
    // outside the return statement, write all the dependent code like the internal styles

    // Style objects are resusable Json objects used as style objects
    // reusing tyhe style parameters.
    const txtStyle = {
        color: "green",
        backgroundColor: "yellow",
        fontSize: '32px',
        textAlign: 'center'
    }
    const myStyle = {
        width: "50%",
        margin: 'auto'
    }

    // combine the 2 or more style objects
    const combi = { ...txtStyle, ...myStyle }


    // the return statement embeds the body of HTML
    return (
        <div style={myStyle}>
            {/* the style object is assigned to an elements style attribute using the {} */}
            <p style={txtStyle}> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti aut ad voluptas perspiciatis itaque voluptatum nemo,
                animi at quo dolorem sapiente debitis soluta, veritatis obcaecati, inventore facilis ullam suscipit eum. </p>
            {/* applying the combined style */}
            <h1 style={combi}>Combined style</h1>
            {/* applying the individual styles as combibed styles */}
            <h1 style={{ ...txtStyle, ...myStyle }}>Combined style</h1>
        </div >
    )
}

export default StyleObjects
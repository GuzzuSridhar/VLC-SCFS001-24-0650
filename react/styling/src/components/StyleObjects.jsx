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


    // the return statement embeds the body of HTML
    return (
        <div style={myStyle}>
            {/* the style object is assigned to an elements style attribute using the {} */}
            <p style={txtStyle}> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti aut ad voluptas perspiciatis itaque voluptatum nemo,
                animi at quo dolorem sapiente debitis soluta, veritatis obcaecati, inventore facilis ullam suscipit eum. </p>
        </div>
    )
}

export default StyleObjects
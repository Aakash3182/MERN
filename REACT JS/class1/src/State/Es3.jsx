import React, { useState } from 'react'

function Es3(props) {
    const [color,setColor] = useState("")

    const generateColor = () => {
        setColor( '#' + Math.random().toString(16).substr(-6))
    }
    return (
        <div>
            <h1>React State</h1>
            <button onClick = {generateColor} >Generate Random Color</button>
            <div style={{ width: "200px", height: "200px", backgroundColor: color }}>
            <p style={{ color: '#fff' }}>Random color</p> 
        </div>
        </div>
    )
}

export default Es3
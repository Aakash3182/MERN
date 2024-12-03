import React, { Component } from 'react'

let x = true
let title = "welcome to react"
let user = ["John","harry","sam","anna"]

let emp = {
    name: "David",
    email: "david@gmail.com",
    age: 24
}

class Ex3 extends Component {
    constructor(props) {
        super(props)
    }
}

render() {
    <div>
        <h2> props </h2>
        <Ch2 x ={x} title={title} users={users} emp={emp} />
        
    </div>
}

export default Ex3
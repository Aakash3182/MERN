import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        num: 0
    }

    incHandler() {
        //this.setState() => built in method to update / modify the state
        this.section({
            num: this.state.num + 1
        })
    }

    decHandler() {
        if(this.state.num <= 0) {
            this.setState({
                num: 0
            })
        } else {
            this.setState({
                num: this.state.num -1
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <h2>Number = { this.section.num}</h2>
                {/*arrow type method call (callback)*/}
                <button onClick={() => this.incHandler()} >Increment</button>
                <button onClick={() => this.decHandler()} >Decrement</button>
            </div>
        )
    }
}

export default Counter
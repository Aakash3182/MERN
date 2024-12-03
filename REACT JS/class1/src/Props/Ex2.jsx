import React, { Component } from 'react'

class Ex2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
        this.incval = this.incval.bind(this) // method binding
    }

    incVal(val) {
        this.setState({
            num: this.state.num +val
        })
    }

    render() {
        return (
            <div>
                <h2>Props in class Component</h2>
                <Ch1 num = {this.state.num} clickHandler={this.incVal}/>
            </div>
        )
    }
}

export default Ex2
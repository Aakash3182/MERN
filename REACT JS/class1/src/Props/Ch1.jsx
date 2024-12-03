import React, { Component } from 'react'

class Ch1 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>Child -1 Component</h2>
                <h1>Num = { this.props.num }</h1>
                <button onClick={this.props.ClickHandler(this,50)} > Add 50 </button>
                <button onClick={this.props.ClickHandler(this,100)} > Add 100 </button>
            </div>
        )
    }
}

export default Ch1
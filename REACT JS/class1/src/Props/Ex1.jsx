import react,  { Component } from 'react'

class Ex1 extends Component {
    constructor(props) {
        super(props) 
    }

    render() {
        return (
            <div>
                <h1>Props in class component</h1>
                <h1>Props in class component</h1>
                <h3> x = { this.props.x } and y = { this.props.y }</h3>
                <AGE a = {this.props.x} and y = {this.props.y}></AGE> 
            </div>
        )
    }
}

export default Ex1
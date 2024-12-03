import react,  { Component } from 'react'
import AGE from './AGE'

// props is an attributes which pass from parent component to child component

class Ex1 extends Component {
    constructor(props) {
        super(props) 
    }

    render() {
        return (
            <div>
               <h1> AGE component</h1>
               <h3> age of a user = { this.props.a }</h3>
               <h3> age of b user = { this.props.b }</h3>
            </div>
        )
    }
}

export default AGE
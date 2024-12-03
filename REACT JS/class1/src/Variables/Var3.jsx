import react from 'react'

//Global variable
let x = 123
let a = true //boolean
let z = "welcome to react" //string
let user = {
    name: "john",
    age: 22
}

let colors = ["red","blue","green"]

const Variable3 = function(props) {
    //local
    let y = 34
    return (
        <div>
            <h1>Variable in const functional component</h1>
            <h2> x = {x} </h2>
            <h2> y = {y} </h2>
            <h2>product = { x * y } </h2>

            <h2> boolean = { a ? "say true" : "say false" } </h2>
            <h2>z = {z} </h2>
            <h2> name = { user.name} and age = {user.age} </h2>

            <ol>
                {
                    colors.map((val,index) => {
                        return (
                            <li key = { index}> {val }</li>
                        )
                    })
                }
            </ol>
        </div>
    )

}
export default Variable3
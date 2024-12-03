import React, { useState } from 'react'

// state in functional component -> state is defined using state hook

function Es2(props) {
    // const [state,handler] = useState(initial value)

    const [num,setNum] = useState(0)
    const [age,setAge] = useState(10)
    const [name,setName] = useState("John")

    // function to add a value to num
    const addValue = (val) => {
        setNum(num + val);
    }

    //function to increment age
    const ageHandler = () => {
        setAge(age + 1)
    }

    return (
        <div>
            <h1>States in functional component</h1>

            <h2> number = { num }  </h2>

            <hr />

          <button onClick = {() => addValue(10)} >Add 10</button>
            <button onClick = {() => addValue(100)} >Add 100</button>
            <button onClick = {() => addValue(400)} >Add 400</button>
            <button onClick = {() => addValue(600)} >Add 600</button>
            
            <h4> name { name } and age is { age } years</h4>

            <button onClick={ageHandler}
 > Increment Age</button>  

 <hr />
</div>
    )
}

export default Es2;
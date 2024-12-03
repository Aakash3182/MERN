import React from 'react'

function Ch3(props) {
    return (
        <div>
            <h2>Child Component</h2>
            <h3> a = {props.a} and b = { props.b } </h3>
            <h3> boolean - { props.view ? "true" : "false" }</h3>

            <h3>string = { props.str }</h3>

            <h3> name = {props.user.name} , email = { props.user.email} and age = {props.user.age}</h3>

            <div>
                {
                    props.persons.map((item,index) => {
                        return (
                            <p key={index} > { item }</p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Ch3
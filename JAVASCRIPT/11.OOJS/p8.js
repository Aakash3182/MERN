// to use strict mode in js
"use strict"

let user = {}

Object.defineProperties(user, {
    name: { value: "mike",writable : true},
    email: {value: "mike@gmail.com" , writable : true},
    city: {value: "chennai", writable : false},
    getName : {
        value: function() {
            return `<h1> name is ${this.name}</h1>`
        }},
        getEmail : {
            value: () => {
                // inside the arrow function this pointer return undefined
                document.write(`<h1> email id is =${this.email}</h1>`)
            }
        }
})

console.log(`user = `, user)

// to avoid runtime errors (exceptions)
try{
user.name = "tom"
user.email = "tom@gmail.com"
user.city = "mangalore"
}catch (error) {
    console.log(error)
}

console.log(`after = `, user)

document.write(user.getName())
user.getEmail()
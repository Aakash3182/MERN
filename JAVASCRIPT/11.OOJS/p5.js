// Object.defineProperty(Obj,key,value)

//is used to add a single key : value pair from externally

let user = {}

Object.defineProperty(user,"name",{
    value : "john"
})
Object.defineProperty(user,"age",{
    value : 20
})
Object.defineProperty(user,"city",{
    value : "chennai"
})
Object.defineProperty(user,"isUser",{
    value : "true"
})

console.log(`user = `, user)

// exercise ...

let car = {}

Object.defineProperty(car,"name",{
    value: "BMW"
})
Object.defineProperty(car,"model",{
    value : 2022
})
console.log(`car = `, car)
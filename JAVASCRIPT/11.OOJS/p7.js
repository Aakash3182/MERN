
//write protect in defineProperty() and defineProperties()

let user = {}

Object.defineProperty(user,"name",{
    value : "mike",
    writable: true // if it is false it return the same value
})

/* writable -> true = reassign another value to / re write 
                false = disabled the re assign
 */

console.log(`user = `,user)
user.name = "tom"
console.log(`after = `, user)

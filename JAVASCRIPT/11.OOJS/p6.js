let user = {}

// Object.defineProperties()

Object.defineProperties(user, {
    name: { value: "mike"},
    email: {value: "mike@gmail.com"},
    city: {value: "chennai"},
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
document.write(user.getName())
user.getEmail()
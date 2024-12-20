// object inheritance using Object.create()

let u1 = {
    name: "john",
    email: "john@gmail.com"
}
let u2 = Object.create(u1, {
   age : {
    value: 22
   },
   mobile: {
    value : "8965985698"
   }
})

let u3 = Object.create(u2 , {
    city : {
        value: "Bengalore"
    },
    isUser : {
        value: true
    }
})

console.log(`u1=`, u1)
console.log(`u2=`, u2)
console.log(`u3=`, u3)
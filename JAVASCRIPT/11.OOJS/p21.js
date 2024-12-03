/* class */

/* group pf object ( state and behaviour)  */

class User {
    // constructor method -> represent the class
    constructor() {
        // properties | States
        this.name = "john";
        this.age = 30;
        this.isUser = false;
        this.hobbies = ["riding","driving","cycling"];
        this.account = {
            type: "savings",
            bank: "SBI",
            num: 22334
        }
    }
    // method 
    getUserName() {
        document.write(`<h3> username = ${this.name}</h3>`)
    }
}

//instance
let u = new User()
document.write(`<h1> name is = ${u.name} </h1>`)
document.write(`<h1> bank name is = ${u.account.bank}</h1>`)

u.getUserName()
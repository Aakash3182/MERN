// prototype inheritance

function User(em) {
    this.name = "john";
    this.email = em;
    this.getUserInfo = function() {
        document.write(`<h1> name = ${this.name} and email =${this.email} </h1`)
    }
}

User.prototype.age = 22;
User.prototype.getInfo = function() {
    document.write(`<h3> name = ${this.name} and age = ${this.age} </h3>`)
}

function Base(){

}

//inherit by __proto__
Base.prototype.__proto__ = User.prototype
let x = new Base()

console.log(`x = `, x)

// internally declared properties can't inherit
console.log(`name =`, x.name)
console.log(`email =`, x.email)

// external property (prototype property) are inhrited
console.log(`age =`, x.age)

x.getInfo()

// x.getUserInfo() throw a run time method call error
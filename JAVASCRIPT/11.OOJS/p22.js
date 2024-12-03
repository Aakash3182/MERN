// param in class

class Product {
    constructor (a,b) {
        this.x = a;
        this.y = b;
    }

    calculate() {
        return this.x + this.y
    }
}

let p = new Product (10,20)
document.write(`<h1> Product = ${p.calculate()} </h1>`)

p = new 
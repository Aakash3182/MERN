class product {
    constructor (a,b) {
        this.a = a;
        this.b = b;
    }

    static calculator(obj) {
        console.log(`obj =`, obj)
        document.write(`<h1> product = ${obj.a = obj.b} </h1>`)
    }
}

let num = new Product(10,20)

let num1 = 20

Product.calculate(num)

console.log(`class instance = `, num instanceof Product) //true
console.log(`object instance =`, num instanceof Objects) // true

console.log(`instance = `, num instanceof Product) // false

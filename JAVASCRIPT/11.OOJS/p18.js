 // methods inside parameterised constructors

 function sum(a,b) {
    this.x = a;
    this.y = b;
    this.calc = function() {
        return this.x + this.y
    }
 }

 let p = new sum(10,20)
document.write(`<h1> sum = ${p.calc()} </h1>`)
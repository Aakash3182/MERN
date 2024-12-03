// prototype keyword
// used to add properties to the constructor externally

function Car() {

}

//Constructor.prototype.property = va;ue;

Car.prototype.title = "Innova";
Car.prototype.color = "White";
Car.prototype.year = 2024;

Car.prototype.getCarInfo = function() {
    document.write(`<h3> car is ${this.title} , color is ${this.color} and year is ${this.year} </h3>`)
}

let x = new Car();
x.getCarInfo()

console.log(`title = `, x.title)
console.log(`color =`, x.color)
console.log(`year =`, x.year)
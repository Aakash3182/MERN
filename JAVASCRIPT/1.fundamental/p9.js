
// single -> using Array constructor (assignment)

var color = new Array(); 

console.log(`colors =`, color)

// assignment
color[0] = "red";
color[1] = "green";
color[2] = "blue";

console.log(`after assignment =`, color)


// single -> using Array constructor (parameters)

var tech = new Array("html", "css", "js", "react");

console.log(`tech =`, tech)

// object 
var person = {};

console.log(`person (empty) =`, person)

var car = {
    // key: value
    title: "Mahindra Thar",
    make: 2024,
    color: "red"
}

console.log(`car =`, car)
document.write(`<h1> ${car} </h1>`) //  [object Object]
document.write(`<h1> ${car.title} </h1>`) //  object.key 
document.write(`<h1> ${car["make"]} </h1>`) //  object["key"]

// object array
var cars = [
    {
        title: "Mahindra thar",
        make: 2023
    },
    {
        title: "Toyota Etios",
        make: 2024
    },
    {
        title: "Maruti Swift",
        make: 2022
    }
];

console.log(`cars (object array) =`, cars)

cars.forEach(function(item,index) {
    document.write(`<h3> ${index} ${item.title} </h3>`)
    document.write(`<h3> ${item.make} </h3>`)
});

document.write(`<h1> ${cars[1].title} ${cars[1]["make"]}  </h1>`);

// using for &while & do-while
for(let i=0; i< cars.length; i++) {
    document.write(`<h3> ${cars[i].title} ${cars[i]["make"]}  </h3>`)
}


/* 
    task1 
    array = books
           { title: "",
            author: "",
            language: "",
             pages: "" 
           }
*/

// object array to json
var res1 = JSON.stringify(cars);
console.log(`json array =`, res1)

// json to object conversion
var res2 = JSON.parse(res1);
console.log(`object array =`, res2)
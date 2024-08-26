// array

/* 
    group of values not mandatory to be similer data type

    types
    1. single
        a. literal array (direct)
        b. using Array constructor (assignment)
        c. Array constructor (parameter)

    2. object array -> group of objects
         single object is group of key and value pairs -> property of an object
         { key: "value" }

    3. json array (response from REST API)
        javascript object notation  { "key": "value"}
        
*/

// single (literal type)
var users = ["john", "mike", "tom", "jerry"];

console.log(`users =`, users)

/* 
    array.forEach(function(value,index){
        // code
    })
*/

users.forEach(function(item,index){
    document.write(`<h1> ${index} ${item} </h1>`);
})

document.write(`<hr/>`)

// for(let i=0; i < array.length; i++) { array[i] }
for(let i=0; i < users.length; i++) {
    document.write(`<h3> ${i} ${users[i]} </h3>`);
}
document.write(`<hr/>`)

document.write(`<h1> users[index] = ${users[2]} </h1>`);

document.write(`<hr/>`)

let i=0;
while(i < users.length) {
    document.write(`<h2> ${i} ${users[i]} </h2>`)
    i++;
}
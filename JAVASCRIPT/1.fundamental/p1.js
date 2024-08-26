/* variables */

/* datatype name = value; declaration of variable */
var x = 123; // global scope 
let y = 133; // block scope (re assign the value)
const z = 46; // block scope (cann't re assign)
console.log(`var x = `, x)
console.log(`let y =`, y)
console.log(`const z = `, z)

console.log(`\n`) // line break in console

y = 456; // re assigning the new value
console.log(`re assigned let y =`, y);

x = 125.5; // re assigning the new value
console.log(`re assigned var x =`, x);

// to handle run time errors (run time exceptions)
try {
    z = 4582; // re assigning the new value
}catch(err) {
    console.log(err)
}

console.log(`re assigned const z =`, z); // TypeError: Assignment to constant variable.

console.log(`\n`)

// string variable
var str = "welcome";
var ch = "A"

// boolean variable
var a = true
var b = false

// null and undefined
var p = null
var q = undefined

console.log(`string str = `, str)
console.log(`char ch = `, ch)
console.log(`boolean a = `, a)
console.log(`boolean b = `, b)
console.log(`null p = `, p)    // object
console.log(`undefined q = `, q)

// re assigned different value to the declared variable
str = true
console.log(`re assigned str =`, str)

// naming of variables => $p , lowercase, uppercase , p1 

console.log(`\n`)
//type of the variables
console.log("type of str =", typeof str);




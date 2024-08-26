/* operators 
1. arithmetic 
    + - * / % (mod) 
2. logical  
        && || !
3. relational / conditional
    > < >= <= ==(equal to), === (strictly equal), !== (not equal)
4. inc / dec
    pre  ++i --i
    post i++ i--

5. condition ? true : false

6. , . '' "" `` | ?  
    ()  function
    {} block closure 
    []  array, object properties
*/

// operators
var x = 123;

var res = x * 45 + 154 + 95 - 14;
console.log(`product =`, res);

var a =12;
var b =34;

// a^2 + b^2;
// a^2 - b^2;
// a^3 + b^3;

var a = 4;
var b = 5;
var c = 6;
// (a+b+c)2

// power values
//2^6 = 
var res = 2 ** 6;
console.log(`power = `,res)

// math.pow
var res = Math.pow(2,6);
console.log(`math power =`, res)

// assignment operators
var x = 12;

x += 20; // var x = x + 20
console.log(`assignment x =`, x)
// *= , /= , -=, %= 


// conditional statements
/* 
Task -1
    BMI of the person
    weight kg
    height meters

    status -> over weight, under weight, normal,
    
    // const massMark = 78;
    // const heightMark = 1.69;

    // const massJohn = 92;
    // const heightJohn = 1.95;

*/

/* 
    Task 2 -> Simple Interest 
              Compound Interest

        var formula = "SI" / "CI"
        var pr
        var rate
        var time
*/

/* 
    Task 3 w.a.p to check the entered number is multiples of 3 and 7
*/

// switch case

/* 
    switch(key) {
        case name: code
            break;
        default: 
    }
*/

var day = 1;

switch(day) {
    case 1: console.log(`monday`);
        break;
    case 2: console.log(`tuesday`);
        break;
    case 3: console.log(`wednesday`);
        break;
    case 4: console.log(`thursday`);
        break;
    case 5: console.log(`friday`);
        break;
    case 6: console.log(`saturday`);
        break;
    case 7: console.log(`sunday`);
        break;
    default: console.log(`check your input!..`);
}

/* 
    Task 5
    Switch case
    key = shape name ?  4 shapes
      find the area of the shapes

      var x = prompt("enter input1?");
      var a = Number(x); 

*/


/* looping statements */

// for loop
/* for(initialization;condition;inc/dec) {
        // code
} */


// while loop
/* 
    initialization
        while(condition) {
            // code
            inc/dec statement
        }
*/

// do-while loop
/* 
    initialization
        do {
            code;
            inc/dec
        } while(condition);
*/

/////////////////////////////// -------------------- ///////////////////

var x  = 20;

for(var i=1; i <= 10; i++) {
      console.log(`${x} * ${i} = ${x * i}`)
}

console.log(`\n while loop`)

var y = 12;
var i = 1;
    while(i <= 10) {
        console.log(`${y} * ${i} = ${y * i}`)
        i++;
    }

console.log(`\n do while loop`)
var z = 45;
var i = 1;
    do {
        console.log(`${z} * ${i} = ${z * i}`);
        i++;
    } while(i <= 10);

    
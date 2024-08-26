
//  nested conditions

var x = 100;

if(x % 2 === 0) {
    if( x > 200) {
        console.log(`${x} is even and greaterthan 200`)
    } else if ( x < 200) {
        console.log(`${x} is even and less than 200`)
    } else if ( x === 200) {
        console.log(`${x} is even and equal to 200`)
    } 
} else {
    console.log(`check your input`)
}
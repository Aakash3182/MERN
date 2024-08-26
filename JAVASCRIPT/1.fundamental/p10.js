// functions - independent blocks
// methods -> members (properties) of class/constructors 

/* 
    1. syntax
        function definition (local function)
        function expression (const functions) (function assigned to variables)
            a. arrow 
            b. const local
    2. operation behaviour
        parameter -> parameter function & non-parameter function 
        return  -> return type function & non-return function


    stages

     function body
     call
        call by value
        through events 
*/

// local function
function name1(params) {
    // body
}

// arrow
let name2 = () => {
    // body
}

// const local
var name3 = function() {
    // body
}

const name4 = function() {
    // body
}

name2()
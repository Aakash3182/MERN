
// 1. return type parameter function
function product(x,y) {
    return x * y;
}

var res1 = product(12,23);
document.write(`<h1>product = ${res1} </h1>`)

// 2. return type non-parameter function
function rem() {
    let a = 244;
    let b = 32;
    return a % b;
}

let res2 = rem()
document.write(`<h1> remainder = ${res2} </h1>`)


// 3. non-return type parameter function
function diff(p,q) {
    document.write(`<h1> diff = ${ p - q} </h1>`) 
}

diff(45,23)

// 4. non-return type non-parameter function

function userInfo() {
    let name = "John"
    document.write(`<h1> entered name is ${name} </h1>`)
}

userInfo()
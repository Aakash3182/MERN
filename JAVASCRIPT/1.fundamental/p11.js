// call by value

function sum() {
    let x = 12;
    let y = 24;
    document.write(`<h1> sum of 2 numbers = ${x = y} </h1>`);
}

sum()

var product = function() {
    let a = 123;
    let b = 4;
    document.write(`<h1> product of 2 numbers = ${ a * b} </h1>`)
}

product()

var rem = () => {
    let x = 30;
    let y = 4;
    document.write(`<h1> remainder is = ${ x % y } </h1>`)
}

rem()
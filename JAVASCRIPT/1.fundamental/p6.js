// armstrong number

// 153 = 1^3 + 5^3 + 3^3 = 1  + 125 + 27 = 153

var inp = 124;

var temp = inp;

var sum = 0;

while (temp > 0) {
   let rem = temp % 10;
   sum = sum + (rem ** 3)
   temp = parseInt(temp / 10)
}

if(sum === inp) {
    document.write(`<h1> ${inp} === ${sum} is an armstrong number </h1>`)
} else {
    document.write(`<h1> ${inp} !== ${sum} is not an armstrong number </h1>`)
}
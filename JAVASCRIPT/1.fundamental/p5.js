// nested loops

// patterns
/* 
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
*/

for(let i=1; i<=5; i++) {
    for(let j=1; j <= i; j++) {
       // console.log(`${i} ${j}`)
        document.write(`${j}`)
    }
    document.write(`<br>`)
}
document.write(`<hr>`)
/* 
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
*/


for(let i=1; i<=5; i++) {
    for(let j=1; j <= i; j++) {
       // console.log(`${i} ${j}`)
        document.write(`${i}`)
    }
    document.write(`<br>`)
}

document.write(`<hr/>`)
/* 
 1 2 3 4 5
 1 2 3 4
 1 2 3
 1 2
 1
*/

// for(let i=5; i >= 1; i--) {
//     for(let j=1; j <= i; j++) {
//         document.write(`${j}`)
//     }
//     document.write(`<br>`)
// }

/* 
         *
       *   *
     *   *   *
  *    *   *    *
*   *    *   *     *

*/

for(let i=1; i<=5; i++) {
    for(k=1;k <= (5-i); k++) {
        document.write(`&nbsp;&nbsp;`)
    }

    for(j=1; j<= i; j++) {
        document.write(` * &nbsp;`)
    }

    document.write(`<br>`)
}
